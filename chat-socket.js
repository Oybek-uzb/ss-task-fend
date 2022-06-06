const socket = io("http://localhost:80");

const message = document.getElementById("message");
const messages = document.getElementById("messages");
const file = document.getElementById("file");

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

const handleSendFile = async () => {
    const formData = new FormData()
    formData.set("file", file.files[0])

    const res = await fetch("http://localhost:3000", {
        method: 'POST',
        redirect: 'follow',
        body: formData
    })

    const result = await res.json()

    // socket.emit('')

    console.log(result)
}