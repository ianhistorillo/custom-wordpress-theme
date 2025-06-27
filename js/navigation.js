// Navigation script for all pages except home and CTA
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
});

function initializeNavigation() {
  // Menu button click handler
  const menuButton = document.getElementById('menuButton');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuClose = document.getElementById('menuClose');
  const pageContainer = document.querySelector('.page-container');
  
  if (menuButton) {
    menuButton.addEventListener('click', function() {
      menuOverlay.classList.add('active');
      pageContainer.style.display = 'none';
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (menuClose) {
    menuClose.addEventListener('click', function() {
      menuOverlay.classList.remove('active');
      pageContainer.style.display = 'block';
      document.body.style.overflow = 'auto';
    });
  }
  
  // Add parallax effect on scroll
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.bg-gradient');
    if (parallax) {
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    }
  });

  // Contact form submission (only on contact page)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const subject = this.querySelectorAll('input[type="text"]')[1].value;
      const message = this.querySelector('textarea').value;
      
      // Simple form validation
      if (name && email && subject && message) {
        // Simulate form submission
        const submitButton = this.querySelector('.contact-submit');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
          submitButton.textContent = 'Message Sent!';
          submitButton.style.background = '#009c48';
          
          // Reset form after 2 seconds
          setTimeout(() => {
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
          }, 2000);
        }, 1000);
      }
    });
  }

  // Pricing button interactions (only on pricing page)
  const pricingButtons = document.querySelectorAll('.pricing-button');
  pricingButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
      
      // You can add actual functionality here
      console.log('Pricing plan selected:', this.textContent);
    });
  });
}