// Router is built into express
// refers to how an application’s endpoints (URIs) respond to client requests
const { Router } = require("express");
const { addMovie, listMovies, testRoute } = require("./movieControllers");
const movieRouter = Router();

// set endpoints with various HTTP verbs
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.get("/test", testRoute);

module.exports = movieRouter;