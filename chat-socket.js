const socket = io("http://localhost:3000");

const message = document.getElementById("message");
const messages = document.getElementById("messages");

const handleSubmitNewMessage = () => {
    socket.emit("message", { data: message.value });
}

socket.on("message", ({ data }) => {
    handleNewMessage(data);
})

const handleNewMessage = (message) => {
    messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(message));
    div.style.margin = "8px"
    return div;
}