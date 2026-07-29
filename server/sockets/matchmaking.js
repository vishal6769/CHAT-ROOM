const {
    createRoom,
    addUserToRoom
} = require("../rooms/roomManager");

const waitingQueue = [];

function addToQueue(socket) {
    waitingQueue.push(socket);
}

function removeFromQueue(socketId) {
    const index = waitingQueue.findIndex(
        socket => socket.id === socketId
    );

    if (index !== -1) {
        waitingQueue.splice(index, 1);
    }
}

function getWaitingQueue() {
    return waitingQueue;
}

function findMatch(io) {

    if (waitingQueue.length < 2) {
        return;
    }

    const user1 = waitingQueue.shift();
    const user2 = waitingQueue.shift();

    const roomId = createRoom();

    user1.join(roomId);
    user2.join(roomId);

    addUserToRoom(roomId, user1.id);
    addUserToRoom(roomId, user2.id);

    console.log(`Created ${roomId}`);
    console.log(user1.id, "<-->", user2.id);
}

module.exports = {
    addToQueue,
    removeFromQueue,
    getWaitingQueue,
    findMatch
};