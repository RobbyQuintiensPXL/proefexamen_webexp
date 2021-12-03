const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    kills: { type: Number, default: 0 },
    deaths: { type: Number, default: 0 },
    ranking: { type: String, required: true },
});

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player
