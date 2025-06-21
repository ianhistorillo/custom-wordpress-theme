// Category data with Pexels images
const categoryCards = [
  {
    id: 1,
    icon: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    alt: "Health & Wellness",
    color: "green"
  },
  {
    id: 2,
    icon: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    alt: "Technology",
    color: "purple"
  },
  {
    id: 3,
    icon: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    alt: "Shopping",
    color: "gradient"
  },
  {
    id: 4,
    icon: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    alt: "Fashion",
    color: "yellow"
  },
  {
    id: 5,
    icon: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    alt: "Gaming",
    color: "blue"
  }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeCategoryCards();
  initializeEventListeners();
  startAnimations();
});

// Generate category cards
function initializeCategoryCards() {
  const container = document.getElementById('categoryCards');
  
  categoryCards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = `category-card card-${card.color}`;
    cardElement.style.animationDelay = `${0.2 + index * 0.2}s`;
    
    const iconElement = document.createElement('img');
    iconElement.src = card.icon;
    iconElement.alt = card.alt;
    iconElement.className = 'card-icon';
    iconElement.loading = 'lazy';
    
    cardElement.appendChild(iconElement);
    container.appendChild(cardElement);
    
    // Add hover effect
    cardElement.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-20px) scale(1.05)';
    });
    
    cardElement.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Initialize event listeners
function initializeEventListeners() {
  // CTA Button click handler
  const ctaButton = document.getElementById('ctaButton');
  ctaButton.addEventListener('click', function() {
    alert('Welcome to YDRTW! Your data journey begins here.');
    
    // Add click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 150);
  });
  
  // Menu button interaction
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function() {
    const lines = this.querySelectorAll('.menu-line');
    lines.forEach((line, index) => {
      line.style.transform = index === 0 ? 'rotate(45deg) translateY(9px)' : 'rotate(-45deg) translateY(-9px)';
    });
    
    setTimeout(() => {
      lines.forEach(line => {
        line.style.transform = 'none';
      });
    }, 300);
  });
  
  // Smooth scroll for scroll indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  scrollIndicator.addEventListener('click', function() {
    const categoriesSection = document.querySelector('.categories-section');
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
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
  // Animate headline letters
  const lines = document.querySelectorAll('.main-headline .line');
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = '1';
      line.style.transform = 'translateX(0)';
    }, 200 + index * 200);
  });
  
  // Animate tagline
  setTimeout(() => {
    const tagline = document.querySelector('.tagline');
    tagline.style.opacity = '1';
    tagline.style.transform = 'translateY(0)';
  }, 500);
  
  // Animate scroll indicator
  setTimeout(() => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.style.opacity = '1';
  }, 1500);
}

// Add intersection observer for category cards animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe category cards when they're created
setTimeout(() => {
  const cards = document.querySelectorAll('.category-card');
  cards.forEach(card => observer.observe(card));
}, 100);

// Add some interactive effects
function addInteractiveEffects() {
  // Mouse move parallax effect
  document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const cards = document.querySelectorAll('.category-card');
    cards.forEach((card, index) => {
      const speed = (index + 1) * 0.5;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;
      
      card.style.transform += ` translate(${x}px, ${y}px)`;
    });
  });
}

// Initialize interactive effects after a delay
setTimeout(addInteractiveEffects, 2000);