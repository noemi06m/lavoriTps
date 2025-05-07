const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/primapag.html");
});

app.get("/pag2", (req, res) => {
    res.sendFile(__dirname + "/pag2.html");
});

app.post("/submit", (req, res) => {
    const userInput = req.body.nome; 
    res.send(`<h1>il tuo nome e: ${userInput}</h1><br><a href="/">Torna</a>`);
});


app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
