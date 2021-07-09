const { Sequelize, Model, DataTypes } = require("sequelize");
const connection = require("../src/database/connection");

const Game = connection.define("Game", {
    gameId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    gameName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    creatorName: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Game;
