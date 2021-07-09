const router = require("express").Router();
const gameController = require("../controllers/game.controller");

module.exports = function (app) {
    app.get('/game/:id', gameController.getGame);
    app.post('/game', gameController.createGame);
    app.delete('/game/:id', gameController.deleteGame);
    app.get('/', function (req,res) {
        res.send("hello");
    })
}
