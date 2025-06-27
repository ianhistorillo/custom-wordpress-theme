// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeEventListeners();
});

// Initialize event listeners
function initializeEventListeners() {
  // Menu button click handler
  const menuOverlay = document.getElementById('menuOverlay');
  const menuClose = document.getElementById('menuClose');
  const menuCtaButton = document.getElementById('menuCtaButton');
  const homePage = document.getElementById('homePage');
  const ctaPage = document.getElementById('ctaPage');

  
  ctaPage.classList.add('active');
  ctaPage.style.overflow = 'auto';
  document.body.style.overflow = 'hidden';

  menuClose.addEventListener('click', function() {
    menuOverlay.classList.remove('active');
    ctaPage.classList.add('active');
    document.body.style.overflow = 'auto';
  });

  

  menuCtaButton.addEventListener('click', function() {
    menuOverlay.classList.add('active');
    ctaPage.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
  
  // Menu navigation links
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      
      if (page === 'home') {
        window.location.replace("/");
      } else if (page === 'about') {
        window.location.replace("/about");
      } else if (page === 'contact') {
        window.location.replace("/contact");
      } else if (page=== 'pricing') {
        window.location.replace("/pricing");
      }
      // Add other page navigation logic here if needed
    });
  });
  
  
  // Add parallax effect on scroll
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.bg-gradient');
    const speed = scrolled * 0.5;
    
    parallax.style.transform = `translateY(${speed}px)`;
  });
}
