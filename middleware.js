const express = require ("express");

module.exports = function(app) {
    app.use(express.static("public"));

const maxims = [{ saying: "One man's meat is another man's croissant" }, { saying: "Opposites detract" }];

app.get("/api/v1/maxims", (req, res) => {
    res.status(200).json(maxims);
});

app.post("/api/v1/maxims", (req, res) => {
    const newMaxim = req.body;
    maxims.push(newMaxim);
    req.sendStatus(201);
    });
};