const Maxim = require("../models/maxims");

exports.getMaxims = async function (req, res) {
    let query = {};

    if (req.params.id) {
        query._id = req.params.id;
    }

    try {
        const maxims = await Maxim.find(query);
        res.status(200).json(maxims);
    }   catch (err) {
        res.status(500).send(err);
    }
};

exports.addMaxim = async function (req, res) {
    const maximData = req.body;

    try {
        const newMaxim = new Maxim(maximData);
        const maxim = newMaxim.save();
        return res.status(201).json(maxim);
    }   catch (err) {
        res.status(500).send(err);
    }
};

exports.updateMaxim = async function (req, res) {

    try {
        await Maxim.updateOne({ _id: req.params.id }, req.body);
        res.sendStatus(200);
    }   catch (err) {
        res.status(500).send(err);
    }
};

exports.removeMaxim = async function (req, res) {

    try {
        await Maxim.deleteOneeOne({ _id: req.params.id });
        res.sendStatus(204);
    }   catch (err) {
        res.status(500).send(err);
    }
};