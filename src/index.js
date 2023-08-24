import axios from "axios";
import express from "express";
import redis from "redis";
import responseTime from "response-time";

const API_URL = "https://jsonplaceholder.typicode.com";

const app = express();
const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
});

app.use(
  responseTime((req, _, time) => {
    console.log(`Request to ${req.url} took ${time}ms`);
  })
);

// Main route
app.get("/", (_, res) => {
  res.send("Hello Redis on Express!");
});

// Users route
app.get("/users", async (_, res) => {
  // Check the redis store for the data first
  client.get("users", (err, result) => {
    if (err) res.send(err);
    if (result) {
      res.send(JSON.parse(result));
    } else {
      next();
    }
  });

  // Fetch directly from remote api if no cache found
  try {
    const response = await axios.get(`${API_URL}/users`);
    // Save the API response in Redis store, data expire time in 3600 seconds, it means one hour
    client.set("users", 3600, JSON.stringify(response.data), (err) => {
      if (err) res.send(err);
      // Send JSON response to client
      res.send(response.data);
    });
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  // Check the redis store for the data first
  client.get(`user${id}`, (err, result) => {
    if (err) res.send(err);
    if (result) {
      res.send(JSON.parse(result));
    } else {
      next();
    }
  });

  // Fetch directly from remote api if no cache found
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    // Save the API response in Redis store, data expire time in 3600 seconds, it means one hour
    client.set(`user${id}`, 3600, JSON.stringify(response.data), (err) => {
      if (err) res.send(err);
      // Send JSON response to client
      res.send(response.data);
    });
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
