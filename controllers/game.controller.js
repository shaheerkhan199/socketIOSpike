const Game = require("../models/Game");

module.exports.createGame = async function (req, res) {
    try {
        let game = await Game.create({
            ...req.body
        });
        res.status(201).send({ sucess: true, data: game, message: "game created successfully" });
    } catch (error) {
        res.status(400).send({ sucess: false, message: "Something went wrong" });
    }
}

module.exports.deleteGame = async function (req, res) {
    try {
        const gameId = req.params.id;
        const game = await Game.destroy({
            where: {
                gameId //this will be your id that you want to delete
            }
        })
        if (!game) {
            return res.status(404).send({ sucess: false, message: "No record found with this id" });
        }
        res.status(200).send({ sucess: true, data: game, message: "game deleted successfully" });
    } catch (error) {
        res.status(400).send({ sucess: false, message: "Something went wrong" });
    }
}

module.exports.getGame = async function (req, res) {
    try {
        const gameId = req.params.id;
        console.log(gameId);
        const game = await Game.findByPk(gameId)
        if (!game) {
            return res.status(404).send({ sucess: false, data: game, message: "No data found" });
        }
        console.log(game.toJSON());
        res.status(200).send({ sucess: true, data: game, message: "one game successfully" });
    } catch (error) {
        res.status(400).send({ sucess: false, message: "Something went wrong" });
    }
}
