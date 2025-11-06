// SSC 2025 AMACC Naga - JavaScript

// Mobile menu toggle
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navUl.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navUl.classList.remove('active');
    });
  });
}

// Set active navigation based on current page
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Form validation and submission
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      // Validation
      if (!name || !email || !subject || !message) {
        showError('Please fill in all fields');
        return;
      }

      if (!validateEmail(email)) {
        showError('Please enter a valid email address');
        return;
      }

      // Simulate form submission
      showSuccess('Thank you! Your message has been sent. We will get back to you soon.');
      form.reset();

      // Clear messages after 5 seconds
      setTimeout(() => {
        clearMessages();
      }, 5000);
    });
  }
}

// Email validation
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Show success message
function showSuccess(message) {
  const successDiv = document.querySelector('.success-message');
  if (successDiv) {
    successDiv.textContent = message;
    successDiv.style.display = 'block';
  }
}

// Show error message
function showError(message) {
  const errorDiv = document.querySelector('.error-message');
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
  }
}

// Clear messages
function clearMessages() {
  const successDiv = document.querySelector('.success-message');
  const errorDiv = document.querySelector('.error-message');
  if (successDiv) successDiv.style.display = 'none';
  if (errorDiv) errorDiv.style.display = 'none';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  setActiveNav();
  initContactForm();
});
