const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors())
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));

    // res.send("hello world")
});

app.get("/data", (req, res) => {
    const tempsPath = path.join(__dirname, "..", "data", "zonal_sea_averages.csv");
    // const hurricanesPath = path.join(__dirname, "..", "data", "hurricanes.csv");
    
    fs.readFile(tempsPath, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        };
        res.type("text/plain")
        res.send(data)
    });
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});