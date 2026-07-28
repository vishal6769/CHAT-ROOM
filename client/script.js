// Connect to server
const socket = io("http://localhost:3000");

// Connected
socket.on("connect", () => {

    console.log("Connected");

    document.getElementById("status").innerText =
        "Connected\n\nSocket ID:\n" + socket.id;

});

// Disconnected
socket.on("disconnect", () => {

    console.log("Disconnected");

    document.getElementById("status").innerText =
        "Disconnected";

});