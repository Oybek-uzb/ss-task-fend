const socket = io("http://localhost:3000");

const message = document.getElementById("message");
const messages = document.getElementById("messages");

const handleSubmitNewMessage = () => {
    socket.emit("message", {
        socketId: socket.id,
        message: message.value
    });
}

socket.on("message", ({ socketId, message }) => {
    handleNewMessage(socketId, message);
})

const handleNewMessage = (socketId, message) => {
    const newMessage = buildNewMessage(message)

    if (socket.id === socketId) {
        newMessage.style.justifyContent = "flex-end"
        newMessage.style.padding = "5px 10px 5px 40px"
    }

    messages.appendChild(newMessage);
}

const buildNewMessage = (message) => {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(message));
    div.style.padding = "5px 40px 5px 10px"
    div.style.display = "flex"
    div.style.wordBreak = "break-all"
    return div;
}