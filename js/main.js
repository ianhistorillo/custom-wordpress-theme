// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeEventListeners();
  startAnimations();
});

// Initialize event listeners
function initializeEventListeners() {
  // Menu button click handler
  const menuButton = document.getElementById('menuButton');
  const menuCtaButton = document.getElementById('menuCtaButton');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuClose = document.getElementById('menuClose');
  const homePage = document.getElementById('homePage');
  const ctaPage = document.getElementById('ctaPage');
  
  menuButton.addEventListener('click', function() {
    menuOverlay.classList.add('active');
    homePage.style.display = 'none';
    document.body.style.overflow = 'hidden';
  });

  menuClose.addEventListener('click', function() {
    menuOverlay.classList.remove('active');
    if (homePage.style.display === 'block') {
      homePage.style.display = 'none';
      ctaPage.classList.add('active');
      ctaPage.style.display = 'block';
      document.body.style.overflow = 'auto';
    } else {
      homePage.style.display = 'block';
      ctaPage.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
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
  
  // CTA Button click handler
  const ctaButton = document.getElementById('ctaButton');
  const ctaClose = document.getElementById('ctaClose');

  menuCtaButton.addEventListener('click', function() {
    menuOverlay.classList.add('active');
    homePage.style.display = 'block';
    ctaPage.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
  
  ctaButton.addEventListener('click', function() {
    ctaPage.classList.add('active');
    homePage.style.display = 'none';
    ctaPage.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 150);
  });
  
  ctaClose.addEventListener('click', function() {
    ctaPage.classList.remove('active');
    homePage.style.display = 'block';
    document.body.style.overflow = 'auto';
  });
  
  // Smooth scroll for scroll indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  scrollIndicator.addEventListener('click', function() {
    const categoriesSection = document.querySelector('.categories-section');
    
		setTimeout(() => {
				if (categoriesSection) {
					const elementPosition = categoriesSection.getBoundingClientRect().top + window.pageYOffset;
					const offsetPosition = elementPosition + 200;

					window.scrollTo({
						top: offsetPosition,
						behavior: 'smooth'
					});
				}
			}, 100)
  });
  
  // Add parallax effect on scroll
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.bg-gradient');
    const speed = scrolled * 0.5;
    
    parallax.style.transform = `translateY(${speed}px)`;
  });
}

// Start entrance animations
function startAnimations() {
  // Animate scroll indicator
  setTimeout(() => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.style.opacity = '1';
  }, 1500);
}