/**
 *  *   * fiddle.leaf's first Express app *   *   *
 *  *   github.com/fiddle-leaf
 *  *   August 2023
 *  *   using `npm init -y` & run app: `node <filename>`
 *  *   nodemon => localhost:3000
 */

//using npm i express
// load express
const express = require("express");

// create express app
const app = express();
const port = 3001;

// configure the app (app.set)

// mount middleware (app.use)

/**
 * mount routes: get() method listens to GET requests
 *  * arguments: first defines path for route (like the host name) followed by a callback fx
 *  * callback fx: req and res parameters (request and response objs)
 *  *   * request obj: properties and methods access information reagarding current HTTP request
 *  *   * response obj: contains information used to end request/response cycle
 *  *   *   * res.render() renders a view template and sends resulting HTML to browser
 *  *   *   * res.redirect() tells browsers to issue another `GET` request
 *  *   *   * res.json() sends JSON response (for building API)
 *  *   *   * req.query is a key-value pair separated by `=` and added to URL with `?`
 *
 */

app.get("/", (req, res) => {
  let total_little_bugs = 99;
  const title = "<h1>99 Little Bugs in the code...</h1>";
  res.send(
    title +
      `<h2>${total_little_bugs} little bugs</h2>
  <h3><a href=${total_little_bugs - 1}>Feed one!</a></h3>`
  );
});

app.get("/:num_of_little_bugs", (req, res) => {
  const subtitlte = `<h4>One little bug fed...</h4>`;
  let total_little_bugs = req.params.num_of_little_bugs;
  let randomNum = Math.floor(Math.random() * 99 + 1);
  //console.log(randomNum, randomNum == total_little_bugs);

  const add_little_bug =
    randomNum >= total_little_bugs
      ? (total_little_bugs = Number(total_little_bugs) + 20)
      : false;
  //console.log(add_little_bug);
  const feeding_link = `<h3><a href=${
    total_little_bugs - 1
  }>Feed one little bug!</a></h3>`;
  const randomMsg = `<h4>20 little bugs have arrived!</h4>`;
  const title = `<h1>${total_little_bugs} Little Bugs in the code...</h1>`;

  total_little_bugs <= 0
    ? res.send(
        title +
          `<h4>No little bugs left to feed. :-)</h4>` +
          `<h3><a href="/">Reset little bugs<3</h3>`
      )
    : total_little_bugs == 1
    ? res.send(
        `<h1>${total_little_bugs} Little Bug in the code...</h1>` +
          subtitlte +
          `<h2>${total_little_bugs} little bug!</h2>` +
          feeding_link
      )
    : total_little_bugs && add_little_bug
    ? res.send(randomMsg + title + subtitlte + feeding_link)
    : res.send(
        title +
          subtitlte +
          `<h2>${total_little_bugs} little bugs</h2>` +
          feeding_link
      );
});

// tell the app to listen on port 3000
app.listen(port, function () {
  console.log("Listening on port 3000");
});
