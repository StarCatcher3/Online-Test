let messageCount = 0;

document.addEventListener("mousedown", function () {
    console.log("Clicked");
    h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("New Message: " + messageCount));
    document.getElementById("messages").appendChild(h2);
    messageCount++;
})