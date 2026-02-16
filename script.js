/* ============================================
   RESTAURANT LES JUMELLES - JAVASCRIPT
   Features: Navigation, Lazy Loading, WhatsApp Integration
   ============================================ */

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
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
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

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// ============================================
// LAZY LOADING FOR 3D MODELS
// ============================================
let modelObserver = null;

function initLazyLoadModels() {
    console.log('Initializing lazy load for 3D models...');
    
    // Clear existing observer if any
    if (modelObserver) {
        modelObserver.disconnect();
    }
    
    // Get all dish cards with model viewers
    const dishCards = document.querySelectorAll('.dish-card');
    
    if (dishCards.length === 0) {
        console.log('No dish cards found on this page');
        return;
    }
    
    console.log(`Found ${dishCards.length} dish cards`);
    
    // Configuration for Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '200px',
        threshold: 0.01
    };
    
    // Callback function for observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const modelViewer = card.querySelector('model-viewer');
                const modelPath = card.dataset.model;
                
                if (modelViewer && modelPath) {
                    // Check if model is already loaded
                    if (modelViewer.src && modelViewer.src !== '') {
                        observer.unobserve(card);
                        return;
                    }
                    
                    console.log(`Loading model: ${modelPath}`);
                    
                    // Add loading class
                    modelViewer.classList.add('model-loading');
                    
                    // Set the src attribute to trigger loading
                    modelViewer.src = modelPath;
                    
                    // Add event listeners for loading states
                    modelViewer.addEventListener('load', function() {
                        modelViewer.classList.remove('model-loading');
                        modelViewer.classList.add('model-loaded');
                        console.log(`✓ Model loaded successfully`);
                        
                        // Remove placeholder
                        const placeholder = modelViewer.querySelector('.model-placeholder');
                        if (placeholder) {
                            placeholder.style.display = 'none';
                        }
                    }, { once: true });
                    
                    modelViewer.addEventListener('error', function(error) {
                        modelViewer.classList.remove('model-loading');
                        console.warn(`✗ Error loading model:`, error);
                        
                        // Show fallback message
                        const placeholder = modelViewer.querySelector('.model-placeholder');
                        if (placeholder) {
                            placeholder.innerHTML = `
                                <i class="fas fa-image"></i>
                                <p>Image 3D<br><small>Bientôt disponible</small></p>
                            `;
                        }
                    }, { once: true });
                    
                    // Stop observing this element
                    observer.unobserve(card);
                }
            }
        });
    };
    
    // Create the observer
    modelObserver = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all dish cards
    dishCards.forEach(card => {
        modelObserver.observe(card);
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
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        if (!name || !phone || !date || !time || !guests) {
            showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }
        
        // Format the date
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
        whatsappMessage += `👥 *Personnes:* ${guests}\n`;
        
        if (message) {
            whatsappMessage += `\n💬 *Message:*\n${message}`;
        }
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp phone number (à remplacer par le vrai numéro)
        const whatsappNumber = '213123456789'; // Format: indicatif pays + numéro sans +
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Show success message
        showNotification('Réservation envoyée via WhatsApp!', 'success');
        
        // Reset form
        this.reset();
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style based on type
    const colors = {
        success: 'linear-gradient(135deg, #25D366, #128C7E)',
        error: 'linear-gradient(135deg, #ff4444, #cc0000)'
    };
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '120px',
        right: '20px',
        background: colors[type],
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '10px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        zIndex: '10000',
        fontSize: '1rem',
        fontWeight: '500',
        animation: 'slideInRight 0.3s ease-out',
        maxWidth: '350px'
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations
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
// FORM VALIDATION
// ============================================
// Set minimum date to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
}

// Set default time
const timeInput = document.getElementById('time');
if (timeInput) {
    timeInput.value = '20:00';
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
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
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
};

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Debounce function
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Header shadow on scroll
const header = document.querySelector('.main-header');

if (header) {
    const handleScroll = debounce(() => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.2)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(212, 175, 55, 0.1)';
            header.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 248, 240, 0.95) 100%)';
        }
    }, 10);
    
    window.addEventListener('scroll', handleScroll);
}

// ============================================
// ERROR HANDLING
// ============================================
window.addEventListener('error', function(e) {
    // Prevent 3D model errors from breaking the site
    if (e.message && e.message.includes('model-viewer')) {
        e.preventDefault();
        console.log('3D model error handled gracefully');
    }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.log('Promise rejection handled');
    e.preventDefault();
});

// ============================================
// INITIALIZE ON LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c🍽️ Restaurant Les Jumelles', 'font-size: 20px; font-weight: bold; color: #D4AF37;');
    console.log('Website loaded successfully!');
    
    // Initialize lazy loading for 3D models (only on menu page)
    if (window.location.pathname.includes('menu.html') || 
        document.querySelector('.dish-card')) {
        setTimeout(initLazyLoadModels, 200);
    }
    
    // Initialize scroll animations
    setTimeout(animateOnScroll, 300);
    
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (mobileNav && mobileNav.classList.contains('active')) {
        if (!mobileNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    }
});

// Handle escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});
