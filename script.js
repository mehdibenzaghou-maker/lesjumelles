/* ============================================
   LES JUMELLES - SCRIPT OPTIMISÉ POUR 3D
   Version: 2.0 - Anti-lag
   ============================================ */

// ============================================
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site Les Jumelles chargé !');
    
    // Fonctions légères d'abord
    initMobileMenu();
    initActiveNavigation();
    initBackToTop();
    initReservationForm();
    initDatePickers();
    
    // Charger les modèles 3D UNIQUEMENT quand on voit la section
    initLazy3DModels();
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
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

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
// 3. FORMULAIRE DE RÉSERVATION
// ============================================
function initReservationForm() {
    const reservationForm = document.getElementById('reservationForm');
    if (!reservationForm) return;

    const whatsappNumber = '213770189910';

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
        initDatePickers();
    });
}

// ============================================
// 4. NOTIFICATION
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
}

// ============================================
// 6. DATE PICKERS
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
    }

    if (timeInput) {
        timeInput.value = '20:00';
    }
}

// ============================================
// 7. CHARGEMENT LAZY DES MODÈLES 3D (IMPORTANT)
// ============================================
function initLazy3DModels() {
    const modelViewers = document.querySelectorAll('model-viewer');
    
    if (!modelViewers.length) return;
    
    console.log(`${modelViewers.length} modèles 3D détectés, chargement différé...`);
    
    // Ne charger que les modèles visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const viewer = entry.target;
                const src = viewer.getAttribute('data-src') || viewer.getAttribute('src');
                
                if (src && src !== '' && !viewer.hasAttribute('data-loaded')) {
                    // Charger le modèle UNIQUEMENT quand il devient visible
                    setTimeout(() => {
                        viewer.setAttribute('src', src);
                        viewer.setAttribute('data-loaded', 'true');
                        console.log('Modèle 3D chargé:', src.split('/').pop());
                    }, 100); // Petit délai pour éviter le lag
                }
                
                // Arrêter d'observer une fois chargé
                observer.unobserve(viewer);
            }
        });
    }, {
        rootMargin: '200px', // Commencer à charger 200px avant d'arriver
        threshold: 0.01
    });
    
    modelViewers.forEach(viewer => {
        // Sauvegarder la source et la vider temporairement
        const originalSrc = viewer.getAttribute('src');
        if (originalSrc && originalSrc !== '') {
            viewer.setAttribute('data-src', originalSrc);
            viewer.removeAttribute('src'); // ← CRUCIAL : enlève la source pour éviter le chargement automatique
        }
        observer.observe(viewer);
    });
    
    // Boutons AR (à activer même si le modèle n'est pas chargé)
    document.querySelectorAll('.custom-ar-button').forEach(button => {
        button.addEventListener('click', function() {
            const modelViewer = this.previousElementSibling;
            if (modelViewer && modelViewer.tagName === 'MODEL-VIEWER') {
                // Si le modèle n'est pas encore chargé, le charger d'abord
                if (!modelViewer.hasAttribute('src') || modelViewer.getAttribute('src') === '') {
                    const dataSrc = modelViewer.getAttribute('data-src');
                    if (dataSrc) {
                        modelViewer.setAttribute('src', dataSrc);
                        modelViewer.setAttribute('data-loaded', 'true');
                        // Petit délai pour le chargement
                        setTimeout(() => {
                            try {
                                modelViewer.activateAR();
                            } catch (e) {
                                showNotification('Erreur AR', 'error');
                            }
                        }, 500);
                        return;
                    }
                }
                
                try {
                    modelViewer.activateAR();
                } catch (e) {
                    showNotification('AR non disponible', 'error');
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
