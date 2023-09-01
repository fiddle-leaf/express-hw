const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());

// configure both serve-favicon & static middleware
// to serve fro the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

/**
 * PUT API ROUTES HERE
 */

// "catch all" route: to return the index all the non-ajax requests
app.get("/*", (req, res) => {
  res.send(path.join(__dirname, "build", "index.html"));
});

// configure to use port 3001 instead of 3000
// to avoid collision
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Express app running on ${port}`));
