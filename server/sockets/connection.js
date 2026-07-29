const {
    addUser,
    removeUser,
    getAllUsers
} = require("../users/userManager");

const {
    addToQueue,
    findMatch
} = require("./matchmaking");

module.exports = (io, socket) => {

    console.log(`User Connected : ${socket.id}`);

    addUser(socket.id);

    addToQueue(socket);

    findMatch(io);

    console.log("Users");
    console.table(getAllUsers());

    socket.on("disconnect", () => {

        console.log(`User Disconnected : ${socket.id}`);

        removeUser(socket.id);

        console.table(getAllUsers());

    });

};