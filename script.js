/* ============================================
   LES JUMELLES - SCRIPT PRINCIPAL
   Version simplifiée et fonctionnelle
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Site Les Jumelles chargé avec succès !');
    
    initMobileMenu();
    initActiveNavigation();
    initReservationForm();
    initBackToTop();
    initLazyLoading();
    initCart();
    initFavorites();
    initDatePickers();
    initModelViewerButtons();
});

// ============================================
// 1. MENU MOBILE
// ============================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (!menuToggle || !mobileNav) return;
    
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        this.classList.toggle('active');
        
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
            document.body.style.overflow = 'hidden';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        }
    });

    document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', function(e) {
        if (mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    function closeMobileMenu() {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
        
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        document.body.style.overflow = '';
    }
}

// ============================================
// 2. NAVIGATION ACTIVE
// ============================================
function initActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// ============================================
// 3. FORMULAIRE DE RÉSERVATION WHATSAPP
// ============================================
function initReservationForm() {
    const reservationForm = document.getElementById('reservationForm');
    if (!reservationForm) return;

    const whatsappNumber = '213770189910'; // À MODIFIER

    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const phone = document.getElementById('phone')?.value.trim() || '';
        const date = document.getElementById('date')?.value || '';
        const time = document.getElementById('time')?.value || '';
        const guests = document.getElementById('guests')?.value || '';
        const message = document.getElementById('message')?.value.trim() || '';

        if (!name || !email || !phone || !date || !time || !guests) {
            showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }

        const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        let whatsappMessage = `🍽️ *NOUVELLE RÉSERVATION - Les Jumelles*\n\n`;
        whatsappMessage += `👤 *Nom:* ${name}\n`;
        whatsappMessage += `📧 *Email:* ${email}\n`;
        whatsappMessage += `📱 *Téléphone:* ${phone}\n`;
        whatsappMessage += `📅 *Date:* ${formattedDate}\n`;
        whatsappMessage += `🕐 *Heure:* ${time}\n`;
        whatsappMessage += `👥 *Personnes:* ${guests}\n`;
        if (message) whatsappMessage += `\n💬 *Message:*\n${message}`;

        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        showNotification('Réservation envoyée !', 'success');
        reservationForm.reset();
        initDatePickers(); // Reset des dates
    });
}

// ============================================
// 4. SYSTÈME DE NOTIFICATION
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#25D366' : '#ff4444'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        font-size: 0.95rem;
        animation: slideInRight 0.3s ease;
        max-width: 350px;
    `;

    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// 5. BOUTON RETOUR EN HAUT
// ============================================
function initBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.setAttribute('aria-label', 'Retour en haut');
    
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #C5A028;
        color: #0A0A0A;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 20px rgba(197, 160, 40, 0.3);
        transition: all 0.3s ease;
        z-index: 999;
    `;

    document.body.appendChild(btn);

    window.addEventListener('scroll', function() {
        btn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
    });

    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    btn.addEventListener('mouseenter', function() {
        this.style.background = '#800020';
        this.style.color = '#C5A028';
        this.style.transform = 'translateY(-5px)';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.background = '#C5A028';
        this.style.color = '#0A0A0A';
        this.style.transform = 'translateY(0)';
    });
}

// ============================================
// 6. CHARGEMENT PARESSEUX DES IMAGES
// ============================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    if (!images.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '50px' });

    images.forEach(img => observer.observe(img));
}

// ============================================
// 7. GESTION DU PANIER
// ============================================
function initCart() {
    const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');
    const cartCount = document.querySelector('[data-cart-count]');
    
    if (!addToCartButtons.length) return;

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    function updateCartCount() {
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = {
                id: this.dataset.itemId || Date.now(),
                name: this.dataset.itemName || 'Article',
                price: parseFloat(this.dataset.itemPrice) || 0,
                quantity: 1
            };
            cart.push(item);
            updateCartCount();
            showNotification(`${item.name} ajouté au panier`);
        });
    });

    updateCartCount();
}

// ============================================
// 8. GESTION DES FAVORIS
// ============================================
function initFavorites() {
    const favButtons = document.querySelectorAll('[data-favorite]');
    if (!favButtons.length) return;

    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    favButtons.forEach(button => {
        const itemId = button.dataset.favorite;

        if (favorites.includes(itemId)) {
            button.classList.add('active');
        }

        button.addEventListener('click', function() {
            if (favorites.includes(itemId)) {
                favorites = favorites.filter(id => id !== itemId);
                this.classList.remove('active');
                showNotification('Retiré des favoris');
            } else {
                favorites.push(itemId);
                this.classList.add('active');
                showNotification('Ajouté aux favoris');
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
}

// ============================================
// 9. DATE PICKERS
// ============================================
function initDatePickers() {
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.value = tomorrow.toISOString().split('T')[0];

        dateInput.addEventListener('change', function() {
            const selected = new Date(this.value);
            const today = new Date();
            today.setHours(0,0,0,0);
            
            if (selected < today) {
                showNotification('Date invalide', 'error');
                this.value = today.toISOString().split('T')[0];
            }
        });
    }

    if (timeInput) {
        timeInput.value = '20:00';
    }
}

// ============================================
// 10. BOUTONS MODEL-VIEWER (AR)
// ============================================
function initModelViewerButtons() {
    document.querySelectorAll('.custom-ar-button').forEach(button => {
        button.addEventListener('click', function() {
            const modelViewer = this.previousElementSibling;
            if (modelViewer && modelViewer.tagName === 'MODEL-VIEWER') {
                try {
                    modelViewer.activateAR();
                } catch (e) {
                    showNotification('La réalité augmentée n\'est pas disponible sur ce navigateur', 'error');
                }
            }
        });
    });
}

// ============================================
// STYLES DES NOTIFICATIONS
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);
