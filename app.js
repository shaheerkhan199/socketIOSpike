const express = require('express');
const connection = require('./src/database/connection');
const { socketConnection } = require("./socket/socket")

const app = express();
app.use(express.json());

// require('./src/bootstrap')();

require('./routes/game.route')(app); // games routes

const server = app.listen(3000, () => {
    console.log(`server is running at localhost:${server.address().port}`);
})

require("./socket/socket")(server);

setInterval(() => {
    socketConnection().io.to("Tennis").emit("greet", { data: "Hey baby" })
}, 3000);