let webhookUrl;
let messagesEl;
let inputEl;
let sendBtn;

document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
});

// Initialize event listeners
function initializeEventListeners() {
    webhookUrl = "https://YOUR-N8N-DOMAIN/webhook/chatbot"; // <-- replace with your n8n webhook URL

    messagesEl = document.getElementById("chat-messages");
    inputEl = document.getElementById("chat-input");
    sendBtn = document.getElementById("chat-send");

    console.log(inputEl);

    sendBtn.addEventListener("click", sendMessage);
    inputEl.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });
}

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("chat-message", sender);
    msg.innerText = text;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;

    addMessage(text, "user");
    inputEl.value = "";

    console.log(text);

    // Uncomment when you want to connect to n8n
    // try {
    //   const res = await fetch(webhookUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ message: text })
    //   });
    //
    //   const data = await res.json();
    //   addMessage(data.reply || "No response", "bot");
    // } catch (err) {
    //   addMessage("Error: could not reach server.", "bot");
    // }
}
