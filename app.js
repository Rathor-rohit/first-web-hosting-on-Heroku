/* Express is a framwork of Node.js and it is mostly used in  routing and API. */
const express = require("express");
const app = express();
port = process.env.PORT || 8000;
// let do routing for some pages

app.get("/", (req, res) => {
    res.send("Hi I am Home Page");
});
app.get("/about", (req, res) => {
    res.status(200).send("I am About Page");
});
app.get("/contact", (req, res) => {
    res.send("I am contact Page");
});

app.listen(port, () => {
    console.log(`listining at ${port} port number`);
});