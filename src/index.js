import axios from "axios";
import express from "express";
import responseTime from "response-time";
const app = express();

app.use(
  responseTime((req, res, time) => {
    console.log(`Request to ${req.url} took ${time}ms`);
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    res.send(response.data);
  });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      res.send(response.data);
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
