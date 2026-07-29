const users = new Map();

/*
User Structure

{
    socketId: "...",
    room: null,
    status: "waiting"
}
*/

function addUser(socketId) {

    users.set(socketId, {
        socketId,
        room: null,
        status: "waiting"
    });

}

function removeUser(socketId) {

    users.delete(socketId);

}

function getUser(socketId) {

    return users.get(socketId);

}

function updateRoom(socketId, roomId) {

    const user = users.get(socketId);

    if (!user) return;

    user.room = roomId;

}

function updateStatus(socketId, status) {

    const user = users.get(socketId);

    if (!user) return;

    user.status = status;

}

function getAllUsers() {

    return [...users.values()];

}

module.exports = {
    addUser,
    removeUser,
    getUser,
    updateRoom,
    updateStatus,
    getAllUsers
};