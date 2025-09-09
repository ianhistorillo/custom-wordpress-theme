document.addEventListener('DOMContentLoaded', function () {
  const chatWidget = document.getElementById('chat-widget');
  const toggleBtn = document.getElementById('chat-toggle');
  const messagesEl = document.getElementById('chat-messages');
  const inputEl = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');

  // ===== Toggle Chatbox =====
  toggleBtn.addEventListener('click', () => {
    chatWidget.classList.toggle('minimized');
    toggleBtn.innerText = chatWidget.classList.contains('minimized') ? '+' : '−';
  });

  // ===== Add plain text message =====
  function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.classList.add('chat-message', sender);
    msg.innerText = text;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  // ===== Add bot message with buttons =====
  function addBotMessageWithButtons(text, buttons) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('chat-message', 'bot');

    const textEl = document.createElement('div');
    textEl.innerText = text;
    wrapper.appendChild(textEl);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('chat-buttons');

    buttons.forEach((btn) => {
      const buttonEl = document.createElement('button');
      buttonEl.innerText = btn.label;
      buttonEl.classList.add('chat-button');

      // Open links or trigger actions
      buttonEl.addEventListener('click', () => {
        if (btn.action.startsWith('http') || btn.action.startsWith('mailto:')) {
          window.open(btn.action, '_blank');
        } else {
          inputEl.value = btn.action;
          sendMessage();
        }
      });

      btnContainer.appendChild(buttonEl);
    });

    wrapper.appendChild(btnContainer);
    messagesEl.appendChild(wrapper);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  // ===== Send message to n8n =====
  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    inputEl.value = '';

    try {
      const res = await fetch('https://n8n-ianhistorillo.onrender.com/webhook-test/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      if (data.buttons && Array.isArray(data.buttons)) {
        addBotMessageWithButtons(data.reply || 'Choose an option:', data.buttons);
      } else {
        addMessage(data.reply || 'No response', 'bot');
      }
    } catch (err) {
      addMessage('Error: Could not reach server.', 'bot');
      console.error(err);
    }
  }

  // ===== Event listeners =====
  sendBtn.addEventListener('click', sendMessage);
  inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
});
