let socketClient;
let io;
const Game = require("../models/Game");

module.exports = (server) => {
    io = require("socket.io")(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", socket => {
        socketClient = socket;

        console.log("socket connected...");
        
        socket.on("joinGame", async (data) => {
            const { gameName } = data;
            // checking whether the game exist or not;
            const game = await Game.findOne({
                where: {
                    gameName //this will be your id that you want to delete
                }
            })
            console.log("game ==>  ", JSON.stringify(game));
            if(!game){
                console.log("Game not found returning...");
                return true;
            }
            // console.log("data =>", data);
            socket.join(gameName); // joining room
            console.log(`Joining  game room ${gameName}`);
        });

        // // handle the event sent with socket.send()
        // socket.on("message", (data) => {
        //     console.log("data =>", data);
        // });
    });
}

module.exports.socketConnection = () => {
    return {
        socketClient,
        io
    }
};
