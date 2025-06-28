let messageCount = 0;

document.addEventListener("mousedown", function () {
    message = "New Message: " + messageCount;
    fetch("https://message-api-test.onrender.com/message", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "content": message
        })
    });
    h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(message));
    document.getElementById("messages").appendChild(h2);
    messageCount++;
})

setInterval(async () => {
    data = await fetch("https://message-api-test.onrender.com/message");
    messageText = await data.json();
    const messages = document.getElementById("messages");
    messages.innerHTML = "";
    messageText.forEach(object => {
        if (object != null) 
        messages.innerHTML += `<h2>${object.content}</h2>`;
    });
}, 5000)