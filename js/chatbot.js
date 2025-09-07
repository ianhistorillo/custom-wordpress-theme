document.addEventListener('DOMContentLoaded', function() {
  
    // ===== 3. Get elements =====
    const messagesEl = document.getElementById('chat-messages');
    const inputEl = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
  
    // ===== 4. Add message helper =====
    function addMessage(text, sender) {
      const msg = document.createElement('div');
      msg.classList.add('chat-message', sender);
      msg.innerText = text;
      messagesEl.appendChild(msg);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  
    // ===== 5. Send message to n8n =====
    async function sendMessage() {
      const text = inputEl.value.trim();
      if (!text) return;

      console.log(text)
  
      addMessage(text, 'user');
      inputEl.value = '';
  
      try {
        const res = await fetch('https://n8n-ianhistorillo.onrender.com/webhook/chatbot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text })
        });
  
        const data = await res.json();
        addMessage(data.reply || 'No response', 'bot');
      } catch (err) {
        addMessage('Error: Could not reach server.', 'bot');
        console.error(err);
      }
    }
  
    // ===== 6. Event listeners =====
    sendBtn.addEventListener('click', sendMessage);
    inputEl.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  });
  