const mongoose = require('mongoose');
const { Schema } = mongoose;

const MaximSchema = new Schema({
    saying: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },

});

const Maxim = mongoose.model("Maxim", MaximSchema);

module.exports = Maxim;