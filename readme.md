# Redis Express API

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/jlopezlira/redis-express-api)
[![License](https://img.shields.io/badge/license-ISC-green.svg)](https://opensource.org/licenses/ISC)
[![Author](https://img.shields.io/badge/author-jlopezlira-orange.svg)](https://jlopezlira.me/)

A Simple Express API using Redis for caching data.

## Table of Contents

- [Redis Express API](#redis-express-api)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Dependencies](#dependencies)
  - [Author](#author)
  - [License](#license)

## Introduction

This project is a simple Express API that utilizes Redis to cache data, enhancing the performance of data retrieval. It's built using Node.js and is designed to demonstrate how to integrate Redis into a Node.js application.

## Installation

To get started with the Redis Express API, follow these steps:

1. Clone the repository: `git clone https://github.com/jlopezlira/redis-express-api.git`
2. Navigate to the project directory: `cd redis-express-api`
3. Install the dependencies: `npm install`

## Usage

After completing the installation steps, you can run the API in development mode using the following command:

```bash
npm run dev
```

## Endpoints

The API exposes several endpoints to interact with the Redis caching:

- GET /: Retrieves a welcome message from the API.
- GET /users: Retrieves a list of users from the API.
- GET /users/:id: Retrieves a single user from the API.

## Dependencies

The Redis Express API relies on the following dependencies:

- axios: A promise-based HTTP client for making requests.
- express: A powerful web application framework for building APIs.
- nodemon: A utility that automates server restarts upon code changes.
- redis: A Node.js client for Redis, a popular in-memory data store.
- response-time: An Express middleware for measuring response times.

You can easily install these dependencies using the npm install command.

## Author

This Redis Express API was developed by jlopezlira. You can contact the author via email at jlopezlira@gmail.com or visit their website: jlopezlira.me

## License

This project is open-source and available under the MIT License.
