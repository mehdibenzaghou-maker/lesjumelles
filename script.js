/* ============================================
   RESTAURANT LES JUMELLES - MAIN JAVASCRIPT
   ============================================ */

// ============================================
// MOBILE MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (menuToggle && mobileNav) {
        // Toggle menu
        menuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            this.classList.toggle('active');
            
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(7px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                menuToggle.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (mobileNav.classList.contains('active') && 
                !mobileNav.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                mobileNav.classList.remove('active');
                menuToggle.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // ============================================
    // LAZY LOADING FOR MODEL-VIEWER
    // ============================================
    if (document.querySelector('model-viewer')) {
        const modelViewers = document.querySelectorAll('model-viewer');
        
        const modelObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const viewer = entry.target;
                    const src = viewer.getAttribute('src');
                    
                    if (src && src !== '') {
                        viewer.classList.add('model-loading');
                        
                        viewer.addEventListener('load', function() {
                            viewer.classList.remove('model-loading');
                            viewer.classList.add('model-loaded');
                        }, { once: true });
                        
                        viewer.addEventListener('error', function() {
                            viewer.classList.remove('model-loading');
                            const placeholder = viewer.querySelector('.model-placeholder');
                            if (placeholder) {
                                placeholder.innerHTML = '<i class="fas fa-exclamation-triangle"></i><p>Modèle non disponible</p>';
                            }
                        }, { once: true });
                    }
                    
                    modelObserver.unobserve(viewer);
                }
            });
        }, {
            rootMargin: '200px',
            threshold: 0.1
        });

        modelViewers.forEach(viewer => modelObserver.observe(viewer));
    }

    // ============================================
    // RESERVATION FORM (contact.html)
    // ============================================
    const reservationForm = document.getElementById('reservationForm');
    
    if (reservationForm) {
        // Set min date to today
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

        // Handle form submission
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value.trim();

            // Simple validation
            if (!name || !email || !phone || !date || !time || !guests) {
                showNotification('Veuillez remplir tous les champs obligatoires', 'error');
                return;
            }

            // Format date
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // Create WhatsApp message
            let whatsappMessage = `🍽️ *NOUVELLE RÉSERVATION - Les Jumelles*\n\n`;
            whatsappMessage += `👤 *Nom:* ${name}\n`;
            whatsappMessage += `📧 *Email:* ${email}\n`;
            whatsappMessage += `📱 *Téléphone:* ${phone}\n`;
            whatsappMessage += `📅 *Date:* ${formattedDate}\n`;
            whatsappMessage += `🕐 *Heure:* ${time}\n`;
            whatsappMessage += `👥 *Personnes:* ${guests}\n`;
            
            if (message) {
                whatsappMessage += `\n💬 *Message:*\n${message}`;
            }

            // Encode message
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // WhatsApp number (remplacez par le vrai numéro)
            const whatsappNumber = '213123456789';
            
            // Open WhatsApp
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');

            // Show success message
            showNotification('Réservation envoyée avec succès!', 'success');
            
            // Reset form
            reservationForm.reset();
            
            // Reset date to tomorrow
            if (dateInput) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                dateInput.value = tomorrow.toISOString().split('T')[0];
            }
            
            if (timeInput) {
                timeInput.value = '20:00';
            }
        });
    }

    // ============================================
    // NOTIFICATION SYSTEM
    // ============================================
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            background: type === 'success' ? '#25D366' : '#ff4444',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '5px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
            zIndex: '10000',
            fontSize: '0.95rem',
            fontWeight: '500',
            animation: 'slideInRight 0.3s ease',
            maxWidth: '350px'
        });

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Add notification animations
    const style = document.createElement('style');
    style.textContent = `
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
    document.head.appendChild(style);

    // ============================================
    // ACTIVE NAVIGATION LINK
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
