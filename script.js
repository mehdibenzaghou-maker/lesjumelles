/* ============================================
   RESTAURANT LES JUMELLES - JAVASCRIPT
   Features: Navigation, Lazy Loading, WhatsApp Integration
   ============================================ */

// ============================================
// PAGE NAVIGATION
// ============================================
function navigateToPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active-page');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active-page');
        
        // Update navigation active state
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Close mobile menu if open
        closeMobileMenu();
        
        // Initialize lazy loading for models if on menu page
        if (pageName === 'menu') {
            initLazyLoadModels();
        }
    }
}

// Handle navigation clicks
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.dataset.page;
            navigateToPage(pageName);
        });
    });
    
    // Initialize lazy loading on page load
    initLazyLoadModels();
});

// ============================================
// MOBILE MENU
// ============================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        this.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

function closeMobileMenu() {
    if (mobileNav && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// ============================================
// LAZY LOADING FOR 3D MODELS
// ============================================
let modelObserver = null;

function initLazyLoadModels() {
    console.log('Initializing lazy load for 3D models...');
    
    // Clear existing observer if any
    if (modelObserver) {
        modelObserver.disconnect();
        console.log('Disconnected existing observer');
    }
    
    // Get all dish cards with model viewers
    const dishCards = document.querySelectorAll('.dish-card');
    console.log(`Found ${dishCards.length} dish cards`);
    
    if (dishCards.length === 0) {
        console.log('No dish cards found, skipping lazy loading initialization');
        return;
    }
    
    // Configuration for Intersection Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '100px', // Start loading 100px before element enters viewport
        threshold: 0.01 // Trigger when 1% of element is visible
    };
    
    // Callback function for observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const modelViewer = card.querySelector('model-viewer');
                const modelPath = card.dataset.model;
                
                console.log(`Dish card entering viewport: ${modelPath}`);
                
                if (modelViewer && modelPath) {
                    // Check if model is already loaded
                    if (modelViewer.src) {
                        console.log(`Model already loaded: ${modelPath}`);
                        observer.unobserve(card);
                        return;
                    }
                    
                    // Add loading class
                    modelViewer.classList.add('model-loading');
                    
                    // Set the src attribute to trigger loading
                    modelViewer.src = modelPath;
                    console.log(`Loading model: ${modelPath}`);
                    
                    // Add event listeners for loading states
                    modelViewer.addEventListener('load', function() {
                        modelViewer.classList.remove('model-loading');
                        modelViewer.classList.add('model-loaded');
                        console.log(`✓ Model loaded successfully: ${modelPath}`);
                    }, { once: true });
                    
                    modelViewer.addEventListener('error', function(error) {
                        modelViewer.classList.remove('model-loading');
                        console.warn(`✗ Error loading model: ${modelPath}`, error);
                        
                        // Show placeholder on error
                        const placeholder = modelViewer.querySelector('.model-placeholder');
                        if (placeholder) {
                            placeholder.innerHTML = `
                                <i class="fas fa-exclamation-circle"></i>
                                <p>Modèle 3D<br><small>(fichier .glb requis)</small></p>
                            `;
                        }
                    }, { once: true });
                    
                    // Stop observing this element once we've started loading
                    observer.unobserve(card);
                }
            }
        });
    };
    
    // Create the observer
    modelObserver = new IntersectionObserver(observerCallback, observerOptions);
    console.log('Intersection Observer created');
    
    // Observe all dish cards
    dishCards.forEach((card, index) => {
        modelObserver.observe(card);
        console.log(`Observing dish card ${index + 1}/${dishCards.length}`);
    });
    
    console.log(`✓ Lazy loading initialized for ${dishCards.length} dishes`);
}

// ============================================
// WHATSAPP FORM INTEGRATION
// ============================================
const reservationForm = document.getElementById('reservationForm');

if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const message = document.getElementById('message').value;
        
        // Format the date for better readability
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Create WhatsApp message
        let whatsappMessage = `🍽️ *NOUVELLE RÉSERVATION - Restaurant Les Jumelles*\n\n`;
        whatsappMessage += `👤 *Nom:* ${name}\n`;
        whatsappMessage += `📱 *Téléphone:* ${phone}\n`;
        whatsappMessage += `📅 *Date:* ${formattedDate}\n`;
        whatsappMessage += `🕐 *Heure:* ${time}\n`;
        whatsappMessage += `👥 *Nombre de personnes:* ${guests}\n`;
        
        if (message) {
            whatsappMessage += `\n💬 *Message:*\n${message}`;
        }
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp phone number (replace with actual restaurant number)
        // Format: country code + phone number (no + or spaces)
        // Example: For +33 1 23 45 67 89, use 33123456789
        const whatsappNumber = '33123456789'; // REPLACE THIS WITH ACTUAL NUMBER
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Optional: Reset form after submission
        // reservationForm.reset();
        
        // Optional: Show success message
        showNotification('Votre réservation va être envoyée via WhatsApp!');
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '120px',
        right: '20px',
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        color: 'white',
        padding: '1.5rem 2rem',
        borderRadius: '10px',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)',
        zIndex: '10000',
        fontSize: '1rem',
        fontWeight: '500',
        animation: 'slideInRight 0.5s ease-out',
        maxWidth: '400px'
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
}

// Add notification animations to document
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// ============================================
// SMOOTH SCROLL ENHANCEMENT
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// FORM VALIDATION
// ============================================
// Add date validation (can't book in the past)
const dateInput = document.getElementById('date');
if (dateInput) {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
// Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .dish-card, .contact-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
};

// Run on page load
window.addEventListener('load', animateOnScroll);

// ============================================
// SOCIAL MEDIA LINKS
// ============================================
// You can update these links later in the HTML or via JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const facebookLink = document.querySelector('.social-link.facebook');
    const instagramLink = document.querySelector('.social-link.instagram');
    
    // Example: Update links when ready
    // facebookLink.href = 'https://facebook.com/yourpage';
    // instagramLink.href = 'https://instagram.com/yourpage';
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add header shadow on scroll
let lastScroll = 0;
const header = document.querySelector('.main-header');

const handleScroll = debounce(() => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(212, 175, 55, 0.1)';
    }
    
    lastScroll = currentScroll;
}, 10);

window.addEventListener('scroll', handleScroll);

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c🍽️ Restaurant Les Jumelles', 'font-size: 24px; font-weight: bold; color: #D4AF37;');
console.log('%cWebsite loaded successfully!', 'font-size: 14px; color: #C9302C;');
console.log('%c3D model lazy loading enabled', 'font-size: 12px; color: #666;');

// ============================================
// ERROR HANDLING
// ============================================
window.addEventListener('error', function(e) {
    console.error('Error detected:', e.error);
    // Prevent 3D model errors from breaking the site
    if (e.message && e.message.includes('model-viewer')) {
        e.preventDefault();
    }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
});

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================
// Add keyboard navigation for model viewers
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// ============================================
// INITIALIZE ON LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Restaurant Les Jumelles website initialized');
    
    // Initialize lazy loading for 3D models immediately on page load
    // This is important for separate pages like menu.html
    setTimeout(() => {
        initLazyLoadModels();
        console.log('Lazy loading initialized on page load');
    }, 100);
    
    // Set default page only on index.html (check if navigateToPage should run)
    const currentPage = window.location.pathname;
    if (currentPage.includes('index.html') || currentPage === '/' || currentPage.endsWith('/')) {
        navigateToPage('home');
    }
    
    // Add focus trap for mobile menu
    const focusableElements = mobileNav?.querySelectorAll('a, button, input, select, textarea');
    if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        mobileNav?.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }
});
