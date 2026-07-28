module.exports = (io, socket) => {

    console.log(`User Connected : ${socket.id}`);

    socket.on("disconnect", () => {
        console.log(`User Disconnected : ${socket.id}`);
    });

};