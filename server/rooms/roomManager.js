const rooms = new Map();

let roomCounter = 1;

/*
Room Structure

room-1
{
    id: "room-1",
    users: [socketId1, socketId2]
}

*/

function createRoom() {

    const roomId = `room-${roomCounter++}`;

    rooms.set(roomId, {
        id: roomId,
        users: []
    });

    return roomId;
}

function deleteRoom(roomId) {

    rooms.delete(roomId);

}

function getRoom(roomId) {

    return rooms.get(roomId);

}

function addUserToRoom(roomId, socketId) {

    const room = rooms.get(roomId);

    if (!room) return;

    room.users.push(socketId);

}

function removeUserFromRoom(roomId, socketId) {

    const room = rooms.get(roomId);

    if (!room) return;

    room.users = room.users.filter(id => id !== socketId);

}

function getAllRooms() {

    return [...rooms.values()];

}

module.exports = {

    createRoom,
    deleteRoom,
    getRoom,
    addUserToRoom,
    removeUserFromRoom,
    getAllRooms

};