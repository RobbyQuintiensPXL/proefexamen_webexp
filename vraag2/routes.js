const express = require('express');
const router = express.Router();
const db = require('./db');
const Player = require('./models/player');


router.get('/', (req, res) => {
    //TODO: uitleg gebruik API
    res.send('usage: send requests to /api/spelers');
});

router.get('/spelers', (req, res) => {
    Player.find((err, players) => {
        if(err)
            res.send(err);

        res.json(players);
    });
});

router.get('/spelers/:id', (req, res) =>{
    Player.findById(req.params.id, (err, player) => {
        if(err)
            res.send(err);

        res.json(player);
    });
});

router.post('/spelers', (req, res) => {
    const player = new Player({
        ...req.body
    });

    player.save((err, player) => {
        if(err)
            res.send(err);

        res.json(player);
    });
});

router.put('/spelers', (req, res) => {
    Player.findById(req.body._id, (err, player) =>{
        player.name = req.body.name;
        player.kills = req.body.kills;
        player.deaths = req.body.deaths;
        player.ranking = req.body.ranking;

        player.save((saveErr, savePlayer) => {
            if(saveErr)
                res.send(saveErr);

            res.send(savePlayer);
        });
    });
});

module.exports = router;
