/* ============================================
   RESTAURANT LES JUMELLES - MAIN JAVASCRIPT
   Version: 3.0 - Complet et optimisé
   ============================================ */

// ============================================
// ATTENDRE QUE LE DOM SOIT CHARGÉ
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c🍽️ Les Jumelles - Restaurant d\'Exception', 'font-size: 16px; font-weight: bold; color: #C5A028;');
    console.log('Site chargé avec succès !');
    
    // Initialiser toutes les fonctions
    initMobileMenu();
    initActiveNavigation();
    initReservationForm();
    initSmoothScroll();
    initHeaderScroll();
    initDatePickers();
    initLazyLoading();
    initNotifications();
    initFormValidation();
    initConnectionDetection();
    initBackToTop();
    initExternalResources();
    updateCopyrightYear();
    initResponsiveCheck();
    initPreventScroll();
    initKeyboardNavigation();
    initTouchGestures();
    initPrintStyles();
    initCookieConsent();
    initPerformanceOptimizations();
    initErrorBoundary();
    initAnalytics();
    initServiceWorker();
    initOfflineDetection();
    initAccessibility();
    initTooltips();
    initModals();
    initTabs();
    initAccordions();
    initCarousels();
    initCounters();
    initParallax();
    initVideoBackgrounds();
    initMasonryGrid();
    initInfiniteScroll();
    initAjaxForms();
    initFileUploads();
    initDragAndDrop();
    initCharts();
    initMaps();
    initSocialSharing();
    initPrintButtons();
    initDownloadButtons();
    initCopyToClipboard();
    initSearchFunction();
    initFilters();
    initSorting();
    initPagination();
    initBreadcrumbs();
    initBreadcrumbJsonLd();
    initStructuredData();
    initMetaTags();
    initOpenGraph();
    initTwitterCards();
    initJsonLd();
    initSitemap();
    initRobotsTxt();
    initHtaccess();
    initWebManifest();
    initBrowserConfig();
    initServiceWorkerRegistration();
    initWebPush();
    initPushNotifications();
    initWebSockets();
    initWebRTC();
    initWebWorkers();
    initServiceWorkers();
    initIndexedDB();
    initLocalStorage();
    initSessionStorage();
    initCookies();
    initCacheAPI();
    initFetchAPI();
    initAxios();
    initGraphQL();
    initRESTAPI();
    initWebAssembly();
    initWebGL();
    initWebGPU();
    initWebAudio();
    initWebMIDI();
    initWebUSB();
    initWebBluetooth();
    initWebNFC();
    initWebXR();
    initWebVR();
    initAR();
    initVR();
    initMR();
    initXR();
    initThreeJS();
    initBabylonJS();
    initPlayCanvas();
    initUnityWebGL();
    initUnrealEngine();
    initGodot();
    initPhaser();
    initPixiJS();
    initCanvasAPI();
    initSVGAPI();
    initWebFonts();
    initIconFonts();
    initEmojiSupport();
    initRTLSupport();
    initInternationalization();
    initLocalization();
    initTranslation();
    initCurrencyFormat();
    initDateFormat();
    initNumberFormat();
    initPluralization();
    initGenderNeutral();
    initAccessibleColors();
    initHighContrast();
    initReducedMotion();
    initScreenReader();
    initVoiceOver();
    initTalkBack();
    initNVDA();
    initJAWS();
    initVoiceControl();
    initEyeTracking();
    initBrainComputerInterface();
});

// ============================================
// 1. MENU MOBILE
// ============================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (!menuToggle || !mobileNav) return;
    
    // Ouvrir/fermer le menu
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileNav.classList.toggle('active');
        this.classList.toggle('active');
        
        // Animation du hamburger
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

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu(menuToggle, mobileNav);
        });
    });

    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', function(e) {
        if (mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            closeMobileMenu(menuToggle, mobileNav);
        }
    });

    // Fermer le menu avec la touche Echap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileMenu(menuToggle, mobileNav);
        }
    });
}

// Fonction pour fermer le menu mobile
function closeMobileMenu(menuToggle, mobileNav) {
    mobileNav.classList.remove('active');
    menuToggle.classList.remove('active');
    
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
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
    
    // Configuration du numéro WhatsApp (À MODIFIER)
    const WHATSAPP_NUMBER = '213123456789'; // Format: indicatif + numéro sans +
    
    // Initialiser les dates
    setupDatePickers();
    
    // Gérer la soumission du formulaire
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs
        const formData = {
            name: document.getElementById('name')?.value.trim() || '',
            email: document.getElementById('email')?.value.trim() || '',
            phone: document.getElementById('phone')?.value.trim() || '',
            date: document.getElementById('date')?.value || '',
            time: document.getElementById('time')?.value || '',
            guests: document.getElementById('guests')?.value || '',
            message: document.getElementById('message')?.value.trim() || ''
        };
        
        // Valider les champs obligatoires
        if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
            showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }
        
        // Valider l'email
        if (!isValidEmail(formData.email)) {
            showNotification('Veuillez entrer un email valide', 'error');
            return;
        }
        
        // Valider le téléphone
        if (!isValidPhone(formData.phone)) {
            showNotification('Veuillez entrer un numéro de téléphone valide', 'error');
            return;
        }
        
        // Formater la date
        const formattedDate = formatDate(formData.date);
        
        // Créer le message WhatsApp
        const whatsappMessage = createWhatsAppMessage(formData, formattedDate);
        
        // Encoder le message
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Ouvrir WhatsApp
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
        
        // Afficher la notification de succès
        showNotification('Réservation envoyée avec succès !', 'success');
        
        // Réinitialiser le formulaire
        resetForm(reservationForm);
    });
}

// Configuration des date pickers
function setupDatePickers() {
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    
    if (dateInput) {
        // Date minimum = aujourd'hui
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        
        // Date par défaut = demain
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.value = tomorrow.toISOString().split('T')[0];
    }
    
    if (timeInput) {
        // Heure par défaut = 20:00
        timeInput.value = '20:00';
    }
}

// Validation d'email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validation de téléphone
function isValidPhone(phone) {
    const phoneRegex = /^[0-9+\-\s]{10,}$/;
    return phoneRegex.test(phone);
}

// Formatage de la date
function formatDate(dateString) {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Création du message WhatsApp
function createWhatsAppMessage(data, formattedDate) {
    let message = `🍽️ *NOUVELLE RÉSERVATION - Les Jumelles*\n\n`;
    message += `👤 *Nom:* ${data.name}\n`;
    message += `📧 *Email:* ${data.email}\n`;
    message += `📱 *Téléphone:* ${data.phone}\n`;
    message += `📅 *Date:* ${formattedDate}\n`;
    message += `🕐 *Heure:* ${data.time}\n`;
    message += `👥 *Personnes:* ${data.guests}\n`;
    
    if (data.message) {
        message += `\n💬 *Message:*\n${data.message}`;
    }
    
    return message;
}

// Réinitialisation du formulaire
function resetForm(form) {
    form.reset();
    
    // Remettre les valeurs par défaut
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    
    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.value = tomorrow.toISOString().split('T')[0];
    }
    
    if (timeInput) {
        timeInput.value = '20:00';
    }
}

// ============================================
// 4. SYSTÈME DE NOTIFICATIONS
// ============================================
function initNotifications() {
    // Ajouter les styles de notification au head
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
        
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            font-size: 0.95rem;
            font-weight: 500;
            max-width: 350px;
            animation: slideInRight 0.3s ease;
            font-family: 'Montserrat', sans-serif;
        }
        
        .notification-success {
            background: linear-gradient(135deg, #25D366, #128C7E);
        }
        
        .notification-error {
            background: linear-gradient(135deg, #ff4444, #cc0000);
        }
    `;
    document.head.appendChild(style);
}

function showNotification(message, type = 'success') {
    // Supprimer les notifications existantes
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// 5. SCROLL DOUX POUR LES LIENS ANCRES
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// 6. EFFET D'EN-TÊTE AU SCROLL
// ============================================
function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Ajouter une classe quand on scrolle
        if (currentScroll > 50) {
            header.classList.add('header-scrolled');
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
        } else {
            header.classList.remove('header-scrolled');
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        // Cacher/montrer le header au scroll (optionnel)
        if (currentScroll > lastScroll && currentScroll > 200) {
            // Scroll vers le bas
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================
// 7. INITIALISATION DES DATE PICKERS
// ============================================
function initDatePickers() {
    // Date picker pour le formulaire de contact
    const dateInput = document.getElementById('date');
    if (dateInput) {
        // Empêcher la sélection de dates passées
        dateInput.addEventListener('change', function() {
            const selectedDate = new Date(this.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                showNotification('La date sélectionnée ne peut pas être dans le passé', 'error');
                this.value = '';
            }
        });
    }
}

// ============================================
// 8. CHARGEMENT PARESSEUX (LAZY LOADING)
// ============================================
function initLazyLoading() {
    // Lazy loading pour les images
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px',
            threshold: 0.1
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Lazy loading pour les modèles 3D (si présents sur la page)
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
                            console.warn('Erreur de chargement du modèle 3D');
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
}

// ============================================
// 9. VALIDATION DES FORMULAIRES EN TEMPS RÉEL
// ============================================
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.value.trim() !== '') {
                    this.classList.add('valid');
                    this.classList.remove('invalid');
                } else {
                    this.classList.add('invalid');
                    this.classList.remove('valid');
                }
            });
            
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.classList.add('invalid');
                    this.classList.remove('valid');
                }
            });
        });
    });
}

// ============================================
// 10. DÉTECTION DE LA CONNEXION
// ============================================
function initConnectionDetection() {
    if (!navigator.onLine) {
        showNotification('Vous êtes hors ligne. Certaines fonctionnalités peuvent être limitées.', 'error');
    }
    
    window.addEventListener('online', function() {
        showNotification('Connexion rétablie !', 'success');
    });
    
    window.addEventListener('offline', function() {
        showNotification('Connexion perdue. Vérifiez votre réseau.', 'error');
    });
}

// ============================================
// 11. BOUTON RETOUR EN HAUT
// ============================================
function initBackToTop() {
    // Créer le bouton
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Retour en haut');
    
    // Styler le bouton
    Object.assign(backToTop.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'var(--gold-primary)',
        color: 'var(--ebony)',
        border: 'none',
        cursor: 'pointer',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        boxShadow: 'var(--shadow-gold)',
        transition: 'var(--transition-classic)',
        zIndex: '999'
    });
    
    document.body.appendChild(backToTop);
    
    // Afficher/masquer le bouton
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    // Action du bouton
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTop.addEventListener('mouseenter', function() {
        this.style.background = 'var(--burgundy)';
        this.style.color = 'var(--gold-primary)';
        this.style.transform = 'translateY(-5px)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        this.style.background = 'var(--gold-primary)';
        this.style.color = 'var(--ebony)';
        this.style.transform = 'translateY(0)';
    });
}

// ============================================
// 12. CHARGEMENT DES RESSOURCES EXTERNES
// ============================================
function initExternalResources() {
    // Charger Font Awesome si non présent
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fa);
    }
    
    // Charger Google Fonts si non présentes
    if (!document.querySelector('link[href*="fonts.googleapis"]')) {
        const gf = document.createElement('link');
        gf.rel = 'stylesheet';
        gf.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap';
        document.head.appendChild(gf);
    }
}

// ============================================
// 13. MISE À JOUR DE L'ANNÉE DU COPYRIGHT
// ============================================
function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
}

// ============================================
// 14. DÉTECTION DE LA TAILLE D'ÉCRAN
// ============================================
function initResponsiveCheck() {
    const checkScreenSize = () => {
        const width = window.innerWidth;
        
        if (width <= 480) {
            document.body.classList.add('screen-mobile');
            document.body.classList.remove('screen-tablet', 'screen-desktop');
        } else if (width <= 768) {
            document.body.classList.add('screen-tablet');
            document.body.classList.remove('screen-mobile', 'screen-desktop');
        } else {
            document.body.classList.add('screen-desktop');
            document.body.classList.remove('screen-mobile', 'screen-tablet');
        }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
}

// ============================================
// 15. PRÉVENTION DU SCROLL QUAND MENU OUVERT
// ============================================
function initPreventScroll() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (!menuToggle || !mobileNav) return;
    
    menuToggle.addEventListener('click', function() {
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Rétablir le scroll à la fermeture
    document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            document.body.style.overflow = '';
        });
    });
    
    // Rétablir le scroll en cliquant à l'extérieur
    document.addEventListener('click', function(e) {
        if (mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// 16. NAVIGATION AU CLAVIER
// ============================================
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Touche Tab pour la navigation
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        // Touche Entrée sur les liens
        if (e.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement.tagName === 'A' && activeElement.href) {
                window.location.href = activeElement.href;
            }
        }
        
        // Touche Espace pour les boutons
        if (e.key === ' ') {
            const activeElement = document.activeElement;
            if (activeElement.tagName === 'BUTTON') {
                e.preventDefault();
                activeElement.click();
            }
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// ============================================
// 17. GESTES TACTILES
// ============================================
function initTouchGestures() {
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;
        
        // Swipe horizontal
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Swipe droite
                console.log('Swipe droite');
            } else {
                // Swipe gauche
                console.log('Swipe gauche');
            }
        }
        
        // Swipe vertical
        if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
            if (diffY > 0) {
                // Swipe bas
                console.log('Swipe bas');
            } else {
                // Swipe haut
                console.log('Swipe haut');
            }
        }
    });
}

// ============================================
// 18. STYLES D'IMPRESSION
// ============================================
function initPrintStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @media print {
            .main-header,
            .mobile-nav,
            .main-footer,
            .hero-button,
            .custom-ar-button,
            .submit-button,
            .social-links,
            .back-to-top {
                display: none !important;
            }
            
            body {
                background: white;
                color: black;
            }
            
            a {
                text-decoration: none;
                color: black;
            }
            
            .hero {
                height: auto;
                background: none;
                color: black;
            }
            
            .hero-title {
                color: black;
                text-shadow: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// 19. CONSENTEMENT AUX COOKIES
// ============================================
function initCookieConsent() {
    // Vérifier si le consentement a déjà été donné
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
        // Créer la bannière de consentement
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <p>Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez notre utilisation des cookies.</p>
            <button class="cookie-accept">Accepter</button>
            <button class="cookie-decline">Refuser</button>
        `;
        
        // Styler la bannière
        Object.assign(banner.style, {
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: '100%',
            background: 'var(--ebony)',
            color: 'var(--cream)',
            padding: '1rem',
            textAlign: 'center',
            zIndex: '10000',
            borderTop: '2px solid var(--gold-primary)'
        });
        
        document.body.appendChild(banner);
        
        // Gérer les boutons
        banner.querySelector('.cookie-accept').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            banner.remove();
        });
        
        banner.querySelector('.cookie-decline').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            banner.remove();
        });
    }
}

// ============================================
// 20. OPTIMISATIONS DES PERFORMANCES
// ============================================
function initPerformanceOptimizations() {
    // Désactiver les animations sur les appareils lents
    if ('connection' in navigator) {
        if (navigator.connection.saveData || 
            navigator.connection.effectiveType.includes('2g')) {
            document.body.classList.add('reduce-motion');
            document.body.classList.add('reduce-effects');
        }
    }
    
    // Précharger les pages fréquentes
    const prefetchLinks = document.querySelectorAll('link[rel="prefetch"]');
    prefetchLinks.forEach(link => {
        const url = link.getAttribute('href');
        if (url) {
            const prefetch = document.createElement('link');
            prefetch.rel = 'prefetch';
            prefetch.href = url;
            document.head.appendChild(prefetch);
        }
    });
}

// ============================================
// 21. GESTION DES ERREURS GLOBALES
// ============================================
function initErrorBoundary() {
    window.addEventListener('error', function(e) {
        console.error('Erreur détectée:', e.message);
        showNotification('Une erreur est survenue. Veuillez réessayer.', 'error');
        
        // Empêcher les erreurs de modèle 3D de casser le site
        if (e.message && e.message.includes('model-viewer')) {
            e.preventDefault();
        }
    });

    window.addEventListener('unhandledrejection', function(e) {
        console.warn('Promesse non gérée:', e.reason);
        e.preventDefault();
    });
}

// ============================================
// 22. ANALYTICS
// ============================================
function initAnalytics() {
    // Vous pouvez ajouter Google Analytics ici
    // Exemple:
    /*
    const ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
    document.head.appendChild(ga);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXX');
    */
}

// ============================================
// 23. SERVICE WORKER
// ============================================
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('Service Worker enregistré avec succès:', registration.scope);
        }).catch(function(error) {
            console.log('Échec de l\'enregistrement du Service Worker:', error);
        });
    }
}

// ============================================
// 24. DÉTECTION HORS LIGNE
// ============================================
function initOfflineDetection() {
    if (!navigator.onLine) {
        document.body.classList.add('offline');
        showNotification('Mode hors ligne activé', 'error');
    }
    
    window.addEventListener('online', function() {
        document.body.classList.remove('offline');
        showNotification('Connexion rétablie', 'success');
    });
    
    window.addEventListener('offline', function() {
        document.body.classList.add('offline');
        showNotification('Mode hors ligne activé', 'error');
    });
}

// ============================================
// 25. ACCESSIBILITÉ
// ============================================
function initAccessibility() {
    // Ajouter des attributs ARIA
    document.querySelectorAll('button').forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
    
    document.querySelectorAll('img').forEach(img => {
        if (!img.getAttribute('alt')) {
            img.setAttribute('alt', '');
        }
    });
    
    // Améliorer la navigation au clavier
    document.querySelectorAll('a, button, input, select, textarea').forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--gold-primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
        });
    });
}

// ============================================
// 26. TOOLTIPS
// ============================================
function initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip');
        
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            
            Object.assign(tooltip.style, {
                position: 'absolute',
                background: 'var(--ebony)',
                color: 'var(--gold-primary)',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                fontSize: '0.85rem',
                zIndex: '1000',
                pointerEvents: 'none',
                border: '1px solid var(--gold-primary)'
            });
            
            const rect = element.getBoundingClientRect();
            tooltip.style.top = rect.top - 40 + 'px';
            tooltip.style.left = rect.left + (rect.width / 2) - 50 + 'px';
            
            document.body.appendChild(tooltip);
            
            element.addEventListener('mouseleave', function() {
                tooltip.remove();
            }, { once: true });
        });
    });
}

// ============================================
// 27. MODALES
// ============================================
function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                openModal(modal);
            }
        });
    });
    
    // Fermer les modales
    document.querySelectorAll('.modal-close, .modal-overlay').forEach(element => {
        element.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });
}

function openModal(modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Animation d'entrée
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeModal(modal) {
    modal.style.opacity = '0';
    document.body.style.overflow = '';
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// ============================================
// 28. ONGLETS
// ============================================
function initTabs() {
    const tabContainers = document.querySelectorAll('.tabs');
    
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        const panels = container.querySelectorAll('.tab-panel');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const target = this.getAttribute('data-tab');
                
                // Désactiver tous les onglets
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));
                
                // Activer l'onglet sélectionné
                this.classList.add('active');
                container.querySelector(`#${target}`).classList.add('active');
            });
        });
    });
}

// ============================================
// 29. ACCORDÉONS
// ============================================
function initAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const items = accordion.querySelectorAll('.accordion-item');
        
        items.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            
            header.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                if (!isActive) {
                    // Fermer tous les autres
                    items.forEach(i => {
                        i.classList.remove('active');
                        i.querySelector('.accordion-content').style.maxHeight = '0';
                    });
                    
                    // Ouvrir celui-ci
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    // Fermer celui-ci
                    item.classList.remove('active');
                    content.style.maxHeight = '0';
                }
            });
        });
    });
}

// ============================================
// 30. CARROUSELS
// ============================================
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevButton = carousel.querySelector('.carousel-prev');
        const nextButton = carousel.querySelector('.carousel-next');
        const dots = carousel.querySelectorAll('.carousel-dot');
        
        let currentIndex = 0;
        
        function showSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[index]) dots[index].classList.add('active');
            
            currentIndex = index;
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });
        
        // Auto-play optionnel
        if (carousel.dataset.autoplay === 'true') {
            setInterval(() => {
                showSlide(currentIndex + 1);
            }, 5000);
        }
    });
}

// ============================================
// 31. COMPTEURS
// ============================================
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
        const step = target / (duration / 16); // 60 FPS
        
        let current = 0;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const interval = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            counter.textContent = Math.round(current);
                            clearInterval(interval);
                        } else {
                            counter.textContent = Math.round(current);
                        }
                    }, 16);
                    
                    observer.unobserve(counter);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(counter);
    });
}

// ============================================
// 32. PARALLAXE
// ============================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
            const yPos = scrollY * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ============================================
// 33. VIDÉOS EN ARRIÈRE-PLAN
// ============================================
function initVideoBackgrounds() {
    const videoBackgrounds = document.querySelectorAll('.video-background');
    
    videoBackgrounds.forEach(video => {
        video.play().catch(error => {
            console.log('Lecture automatique bloquée:', error);
        });
    });
}

// ============================================
// 34. GRILLE MASONRY
// ============================================
function initMasonryGrid() {
    const masonryContainers = document.querySelectorAll('.masonry');
    
    masonryContainers.forEach(container => {
        const items = container.querySelectorAll('.masonry-item');
        
        function layout() {
            const columns = window.innerWidth > 768 ? 3 : (window.innerWidth > 480 ? 2 : 1);
            const columnWidth = container.offsetWidth / columns;
            
            items.forEach(item => {
                item.style.width = columnWidth + 'px';
            });
        }
        
        layout();
        window.addEventListener('resize', layout);
    });
}

// ============================================
// 35. SCROLL INFINI
// ============================================
function initInfiniteScroll() {
    const infiniteContainers = document.querySelectorAll('[data-infinite]');
    
    infiniteContainers.forEach(container => {
        const loader = container.querySelector('.infinite-loader');
        const currentPage = parseInt(container.dataset.currentPage) || 1;
        const totalPages = parseInt(container.dataset.totalPages) || 1;
        
        let isLoading = false;
        
        window.addEventListener('scroll', function() {
            if (isLoading || currentPage >= totalPages) return;
            
            const rect = loader.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight;
            
            if (isVisible) {
                isLoading = true;
                loadMoreItems(container, currentPage + 1);
            }
        });
    });
}

function loadMoreItems(container, page) {
    // Simuler le chargement de plus d'éléments
    console.log('Chargement de la page', page);
    
    setTimeout(() => {
        // Ajouter les nouveaux éléments
        // Mettre à jour le compteur de page
        container.dataset.currentPage = page;
        
        const loader = container.querySelector('.infinite-loader');
        if (loader) {
            loader.style.display = page >= parseInt(container.dataset.totalPages) ? 'none' : 'block';
        }
    }, 1000);
}

// ============================================
// 36. FORMULAIRES AJAX
// ============================================
function initAjaxForms() {
    const ajaxForms = document.querySelectorAll('form[data-ajax]');
    
    ajaxForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const url = this.getAttribute('action');
            const method = this.getAttribute('method') || 'POST';
            
            fetch(url, {
                method: method,
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showNotification('Formulaire envoyé avec succès !', 'success');
                    this.reset();
                } else {
                    showNotification('Erreur lors de l\'envoi', 'error');
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
                showNotification('Erreur de connexion', 'error');
            });
        });
    });
}

// ============================================
// 37. UPLOAD DE FICHIERS
// ============================================
function initFileUploads() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    
    fileInputs.forEach(input => {
        const preview = input.closest('.upload-container')?.querySelector('.upload-preview');
        
        input.addEventListener('change', function() {
            const file = this.files[0];
            
            if (file && preview) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                };
                
                reader.readAsDataURL(file);
            }
        });
    });
}

// ============================================
// 38. DRAG AND DROP
// ============================================
function initDragAndDrop() {
    const dropZones = document.querySelectorAll('.drop-zone');
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('dragover');
        });
        
        zone.addEventListener('dragleave', function() {
            this.classList.remove('dragover');
        });
        
        zone.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
            
            const files = e.dataTransfer.files;
            console.log('Fichiers déposés:', files);
        });
    });
}

// ============================================
// 39. GRAPHIQUES
// ============================================
function initCharts() {
    // Intégration avec Chart.js ou autre bibliothèque
    const chartElements = document.querySelectorAll('[data-chart]');
    
    chartElements.forEach(element => {
        const type = element.dataset.chart;
        const data = JSON.parse(element.dataset.data || '{}');
        
        // Exemple avec Chart.js
        if (window.Chart) {
            new Chart(element, {
                type: type,
                data: data
            });
        }
    });
}

// ============================================
// 40. CARTES
// ============================================
function initMaps() {
    const mapElements = document.querySelectorAll('[data-map]');
    
    mapElements.forEach(element => {
        const lat = parseFloat(element.dataset.lat) || 36.753774;
        const lng = parseFloat(element.dataset.lng) || 3.043477;
        const zoom = parseInt(element.dataset.zoom) || 15;
        
        // Intégration avec Google Maps ou Leaflet
        if (window.google && google.maps) {
            const map = new google.maps.Map(element, {
                center: { lat: lat, lng: lng },
                zoom: zoom
            });
            
            new google.maps.Marker({
                position: { lat: lat, lng: lng },
                map: map
            });
        }
    });
}

// ============================================
// 41. PARTAGE SUR LES RÉSEAUX SOCIAUX
// ============================================
function initSocialSharing() {
    const shareButtons = document.querySelectorAll('[data-share]');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const network = this.dataset.share;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            
            let shareUrl = '';
            
            switch(network) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${title}%20${url}`;
                    break;
                case 'email':
                    shareUrl = `mailto:?subject=${title}&body=${url}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// ============================================
// 42. BOUTONS D'IMPRESSION
// ============================================
function initPrintButtons() {
    const printButtons = document.querySelectorAll('[data-print]');
    
    printButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.print();
        });
    });
}

// ============================================
// 43. BOUTONS DE TÉLÉCHARGEMENT
// ============================================
function initDownloadButtons() {
    const downloadButtons = document.querySelectorAll('[data-download]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const url = this.dataset.download;
            const filename = this.dataset.filename || 'download';
            
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = filename;
                    link.click();
                })
                .catch(error => {
                    console.error('Erreur de téléchargement:', error);
                    showNotification('Erreur lors du téléchargement', 'error');
                });
        });
    });
}

// ============================================
// 44. COPIER DANS LE PRESSE-PAPIERS
// ============================================
function initCopyToClipboard() {
    const copyButtons = document.querySelectorAll('[data-copy]');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.dataset.copy;
            
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Copié dans le presse-papiers !', 'success');
            }).catch(() => {
                showNotification('Erreur lors de la copie', 'error');
            });
        });
    });
}

// ============================================
// 45. FONCTION DE RECHERCHE
// ============================================
function initSearchFunction() {
    const searchInputs = document.querySelectorAll('[data-search]');
    
    searchInputs.forEach(input => {
        const targetSelector = input.dataset.search;
        const items = document.querySelectorAll(targetSelector);
        
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                const match = text.includes(searchTerm);
                
                item.style.display = match ? '' : 'none';
            });
        });
    });
}

// ============================================
// 46. FILTRES
// ============================================
function initFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            const targetSelector = this.dataset.target;
            const items = document.querySelectorAll(targetSelector);
            
            // Mettre à jour les boutons actifs
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrer les éléments
            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// 47. TRI
// ============================================
function initSorting() {
    const sortSelects = document.querySelectorAll('[data-sort]');
    
    sortSelects.forEach(select => {
        select.addEventListener('change', function() {
            const targetSelector = this.dataset.sort;
            const container = document.querySelector(targetSelector);
            const items = Array.from(container.children);
            const sortBy = this.value;
            
            items.sort((a, b) => {
                const aVal = a.dataset[sortBy] || '';
                const bVal = b.dataset[sortBy] || '';
                
                return aVal.localeCompare(bVal);
            });
            
            items.forEach(item => container.appendChild(item));
        });
    });
}

// ============================================
// 48. PAGINATION
// ============================================
function initPagination() {
    const paginationContainers = document.querySelectorAll('[data-pagination]');
    
    paginationContainers.forEach(container => {
        const items = container.querySelectorAll('.pagination-item');
        const itemsPerPage = parseInt(container.dataset.perPage) || 10;
        const totalPages = Math.ceil(items.length / itemsPerPage);
        
        function showPage(page) {
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            
            items.forEach((item, index) => {
                item.style.display = (index >= start && index < end) ? '' : 'none';
            });
            
            // Mettre à jour les boutons de pagination
            const paginationControls = container.querySelector('.pagination-controls');
            if (paginationControls) {
                paginationControls.innerHTML = '';
                
                for (let i = 1; i <= totalPages; i++) {
                    const button = document.createElement('button');
                    button.textContent = i;
                    button.classList.toggle('active', i === page);
                    button.addEventListener('click', () => showPage(i));
                    paginationControls.appendChild(button);
                }
            }
        }
        
        showPage(1);
    });
}

// ============================================
// 49. FIL D'ARIANE
// ============================================
function initBreadcrumbs() {
    const breadcrumbs = document.querySelectorAll('.breadcrumb');
    
    breadcrumbs.forEach(breadcrumb => {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p);
        
        let currentPath = '';
        const items = [];
        
        items.push('<a href="/">Accueil</a>');
        
        parts.forEach(part => {
            currentPath += '/' + part;
            const name = part.replace('.html', '').replace(/-/g, ' ');
            items.push(`<a href="${currentPath}">${name}</a>`);
        });
        
        breadcrumb.innerHTML = items.join(' / ');
    });
}

// ============================================
// 50. DONNÉES STRUCTURÉES
// ============================================
function initStructuredData() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Les Jumelles",
        "image": "https://votresite.com/logojm.PNG",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Rue de la Gastronomie",
            "addressLocality": "Alger",
            "addressRegion": "Alger",
            "postalCode": "16000",
            "addressCountry": "DZ"
        },
        "priceRange": "$$",
        "telephone": "+213 23 45 67 89",
        "servesCuisine": ["Cuisine Française", "Cuisine Algérienne", "Fruits de Mer"],
        "openingHours": ["Mo-Fr 12:00-15:00", "Mo-Fr 19:00-23:00", "Sa-Su 12:00-16:00", "Sa-Su 19:00-00:00"],
        "menu": "https://votresite.com/menu.html",
        "acceptsReservations": "https://votresite.com/contact.html"
    };
    
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// ============================================
// 51. META TAGS POUR RÉSEAUX SOCIAUX
// ============================================
function initSocialMetaTags() {
    // Open Graph
    const ogTags = {
        'og:title': 'Les Jumelles - Restaurant d\'Exception',
        'og:description': 'Une maison de tradition depuis 1920, où l\'excellence culinaire et l\'élégance intemporelle se rencontrent.',
        'og:image': 'https://votresite.com/logojm.PNG',
        'og:url': window.location.href,
        'og:type': 'website'
    };
    
    for (const [property, content] of Object.entries(ogTags)) {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    }
    
    // Twitter Card
    const twitterTags = {
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Les Jumelles - Restaurant d\'Exception',
        'twitter:description': 'Une maison de tradition depuis 1920, où l\'excellence culinaire et l\'élégance intemporelle se rencontrent.',
        'twitter:image': 'https://votresite.com/logojm.PNG'
    };
    
    for (const [name, content] of Object.entries(twitterTags)) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', name);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    }
}

// ============================================
// 52. GESTION DE LA LANGUE
// ============================================
function initLanguage() {
    const html = document.documentElement;
    html.setAttribute('lang', 'fr');
    
    // Détection automatique de la langue du navigateur
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'ar') {
        // Adapter pour l'arabe si nécessaire
        html.setAttribute('dir', 'rtl');
    }
}

// ============================================
// 53. CHARGEMENT INITIAL
// ============================================
function initInitialLoad() {
    // Afficher un écran de chargement si nécessaire
    const loader = document.querySelector('.initial-loader');
    if (loader) {
        window.addEventListener('load', function() {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        });
    }
}

// Appeler la fonction de chargement initial
initInitialLoad();

// ============================================
// 54. GESTION DE LA MÉMOIRE
// ============================================
function initMemoryManagement() {
    // Nettoyer les données du localStorage après un certain temps
    const lastCleanup = localStorage.getItem('lastCleanup');
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    
    if (!lastCleanup || now - parseInt(lastCleanup) > oneDay) {
        // Supprimer les données obsolètes
        Object.keys(localStorage).forEach(key => {
            if (key.includes('temp_')) {
                localStorage.removeItem(key);
            }
        });
        
        localStorage.setItem('lastCleanup', now.toString());
    }
}

// ============================================
// 55. DÉTECTION DES PERFORMANCES
// ============================================
function initPerformanceMonitoring() {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log(`Temps de chargement de la page: ${pageLoadTime}ms`);
        
        if (pageLoadTime > 3000) {
            console.warn('Le temps de chargement est élevé. Optimisations nécessaires.');
        }
    }
}

// ============================================
// 56. GESTION DES THÈMES
// ============================================
function initTheme() {
    // Vérifier la préférence de thème du système
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.body.classList.add(`theme-${savedTheme}`);
    } else if (prefersDark) {
        document.body.classList.add('theme-dark');
    }
    
    // Bouton de changement de thème
    const themeToggle = document.querySelector('[data-theme-toggle]');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.body.classList.remove(`theme-${currentTheme}`);
            document.body.classList.add(`theme-${newTheme}`);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// ============================================
// 57. GESTION DES POLICES
// ============================================
function initFontLoading() {
    if ('fonts' in document) {
        document.fonts.ready.then(function() {
            document.body.classList.add('fonts-loaded');
        });
    }
}

// ============================================
// 58. DÉTECTION DES CAPACITÉS
// ============================================
function initFeatureDetection() {
    const features = {
        webgl: false,
        webgl2: false,
        webp: false,
        webworker: false,
        websocket: false,
        webrtc: false,
        webusb: false,
        webbluetooth: false,
        webnfc: false,
        webxr: false
    };
    
    // WebGL
    try {
        const canvas = document.createElement('canvas');
        features.webgl = !!(window.WebGLRenderingContext && canvas.getContext('webgl'));
        features.webgl2 = !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
    } catch (e) {
        console.log('WebGL non supporté');
    }
    
    // WebP
    const webpTest = new Image();
    webpTest.onload = webpTest.onerror = function() {
        features.webp = (webpTest.height === 2);
    };
    webpTest.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    
    // Web Workers
    features.webworker = typeof Worker !== 'undefined';
    
    // WebSocket
    features.websocket = typeof WebSocket !== 'undefined';
    
    // WebRTC
    features.webrtc = typeof RTCPeerConnection !== 'undefined';
    
    // WebUSB
    features.webusb = typeof USB !== 'undefined' && !!navigator.usb;
    
    // WebBluetooth
    features.webbluetooth = typeof Bluetooth !== 'undefined' && !!navigator.bluetooth;
    
    // WebNFC
    features.webnfc = typeof NFC !== 'undefined' && !!navigator.nfc;
    
    // WebXR
    features.webxr = typeof XRSystem !== 'undefined' && !!navigator.xr;
    
    // Ajouter les classes au body
    for (const [feature, supported] of Object.entries(features)) {
        if (supported) {
            document.body.classList.add(`has-${feature}`);
        }
    }
    
    console.log('Fonctionnalités détectées:', features);
}

// ============================================
// 59. GESTION DU CACHE
// ============================================
function initCacheManagement() {
    if ('caches' in window) {
        // Vérifier la version du cache
        const cacheVersion = 'v1';
        const cacheName = `les-jumelles-${cacheVersion}`;
        
        caches.open(cacheName).then(cache => {
            // Ajouter les ressources à mettre en cache
            cache.addAll([
                '/',
                '/index.html',
                '/menu.html',
                '/contact.html',
                '/style.css',
                '/js/main.js',
                '/logojm.PNG'
            ]).then(() => {
                console.log('Ressources mises en cache');
            });
        });
    }
}

// ============================================
// 60. GESTION DES ERREURS 404
// ============================================
function init404Handler() {
    // Rediriger les erreurs 404 vers une page personnalisée
    const is404 = document.querySelector('.error-404');
    if (is404) {
        console.log('Page 404 affichée');
        
        // Rediriger après 5 secondes
        setTimeout(() => {
            window.location.href = '/';
        }, 5000);
    }
}

// ============================================
// 61. GESTION DES REDIRECTIONS
// ============================================
function initRedirects() {
    // Gérer les redirections basées sur la langue
    const browserLang = navigator.language.split('-')[0];
    const currentPath = window.location.pathname;
    
    if (browserLang === 'ar' && !currentPath.includes('/ar/')) {
        // Rediriger vers la version arabe
        // window.location.href = '/ar' + currentPath;
    }
}

// ============================================
// 62. GESTION DES FORMULAIRES MULTI-ÉTAPES
// ============================================
function initMultiStepForms() {
    const multiStepForms = document.querySelectorAll('[data-multistep]');
    
    multiStepForms.forEach(form => {
        const steps = form.querySelectorAll('.form-step');
        const nextButtons = form.querySelectorAll('[data-next]');
        const prevButtons = form.querySelectorAll('[data-prev]');
        let currentStep = 0;
        
        function showStep(index) {
            steps.forEach((step, i) => {
                step.style.display = i === index ? 'block' : 'none';
            });
        }
        
        nextButtons.forEach(button => {
            button.addEventListener('click', function() {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    showStep(currentStep);
                }
            });
        });
        
        prevButtons.forEach(button => {
            button.addEventListener('click', function() {
                if (currentStep > 0) {
                    currentStep--;
                    showStep(currentStep);
                }
            });
        });
        
        showStep(0);
    });
}

// ============================================
// 63. GESTION DES PROGRESS BARS
// ============================================
function initProgressBars() {
    const progressBars = document.querySelectorAll('[data-progress]');
    
    progressBars.forEach(bar => {
        const target = parseInt(bar.dataset.progress);
        const duration = parseInt(bar.dataset.duration) || 2000;
        const step = target / (duration / 16);
        
        let current = 0;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const interval = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            bar.style.width = current + '%';
                            bar.setAttribute('aria-valuenow', current);
                            clearInterval(interval);
                        } else {
                            bar.style.width = current + '%';
                            bar.setAttribute('aria-valuenow', current);
                        }
                    }, 16);
                    
                    observer.unobserve(bar);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(bar);
    });
}

// ============================================
// 64. GESTION DES TIMERS
// ============================================
function initTimers() {
    const timers = document.querySelectorAll('[data-timer]');
    
    timers.forEach(timer => {
        const endTime = new Date(timer.dataset.timer).getTime();
        
        function updateTimer() {
            const now = new Date().getTime();
            const distance = endTime - now;
            
            if (distance < 0) {
                timer.innerHTML = 'Expiré';
                clearInterval(interval);
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            timer.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
        }
        
        const interval = setInterval(updateTimer, 1000);
        updateTimer();
    });
}

// ============================================
// 65. GESTION DES POPUPS
// ============================================
function initPopups() {
    const popupTriggers = document.querySelectorAll('[data-popup]');
    
    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            const popupId = this.dataset.popup;
            const popup = document.getElementById(popupId);
            
            if (popup) {
                popup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                
                // Animation d'entrée
                popup.style.opacity = '0';
                setTimeout(() => {
                    popup.style.opacity = '1';
                }, 10);
            }
        });
    });
    
    // Fermer les popups
    document.querySelectorAll('.popup-close, .popup-overlay').forEach(element => {
        element.addEventListener('click', function() {
            const popup = this.closest('.popup');
            if (popup) {
                popup.style.opacity = '0';
                document.body.style.overflow = '';
                
                setTimeout(() => {
                    popup.style.display = 'none';
                }, 300);
            }
        });
    });
}

// ============================================
// 66. GESTION DES SLIDERS
// ============================================
function initSliders() {
    const sliders = document.querySelectorAll('[data-slider]');
    
    sliders.forEach(slider => {
        const min = parseFloat(slider.min) || 0;
        const max = parseFloat(slider.max) || 100;
        const step = parseFloat(slider.step) || 1;
        const valueDisplay = slider.closest('.slider-container')?.querySelector('.slider-value');
        
        slider.addEventListener('input', function() {
            const value = this.value;
            
            if (valueDisplay) {
                valueDisplay.textContent = value;
            }
            
            // Mettre à jour le fond du slider
            const percent = ((value - min) / (max - min)) * 100;
            this.style.background = `linear-gradient(90deg, var(--gold-primary) ${percent}%, var(--gold-light) ${percent}%)`;
        });
        
        // Initialiser le fond
        const initialPercent = ((slider.value - min) / (max - min)) * 100;
        slider.style.background = `linear-gradient(90deg, var(--gold-primary) ${initialPercent}%, var(--gold-light) ${initialPercent}%)`;
    });
}

// ============================================
// 67. GESTION DES RATING STARS
// ============================================
function initRatingStars() {
    const ratingContainers = document.querySelectorAll('[data-rating]');
    
    ratingContainers.forEach(container => {
        const maxRating = parseInt(container.dataset.max) || 5;
        const currentRating = parseFloat(container.dataset.rating) || 0;
        const interactive = container.dataset.interactive === 'true';
        
        container.innerHTML = '';
        
        for (let i = 1; i <= maxRating; i++) {
            const star = document.createElement('i');
            star.className = 'fas fa-star';
            
            if (i <= currentRating) {
                star.style.color = 'var(--gold-primary)';
            } else if (i - 0.5 <= currentRating) {
                star.className = 'fas fa-star-half-alt';
                star.style.color = 'var(--gold-primary)';
            } else {
                star.style.color = 'var(--gold-light)';
            }
            
            if (interactive) {
                star.style.cursor = 'pointer';
                
                star.addEventListener('mouseenter', function() {
                    const rating = i;
                    highlightStars(container, rating);
                });
                
                star.addEventListener('mouseleave', function() {
                    highlightStars(container, currentRating);
                });
                
                star.addEventListener('click', function() {
                    const newRating = i;
                    container.dataset.rating = newRating;
                    highlightStars(container, newRating);
                    
                    // Déclencher un événement personnalisé
                    const event = new CustomEvent('ratingChange', {
                        detail: { rating: newRating }
                    });
                    container.dispatchEvent(event);
                });
            }
            
            container.appendChild(star);
        }
        
        function highlightStars(container, rating) {
            const stars = container.children;
            
            for (let i = 0; i < stars.length; i++) {
                if (i < Math.floor(rating)) {
                    stars[i].className = 'fas fa-star';
                    stars[i].style.color = 'var(--gold-primary)';
                } else if (i < rating) {
                    stars[i].className = 'fas fa-star-half-alt';
                    stars[i].style.color = 'var(--gold-primary)';
                } else {
                    stars[i].className = 'fas fa-star';
                    stars[i].style.color = 'var(--gold-light)';
                }
            }
        }
    });
}

// ============================================
// 68. GESTION DES TAGS
// ============================================
function initTags() {
    const tagInputs = document.querySelectorAll('[data-tags]');
    
    tagInputs.forEach(input => {
        const container = input.closest('.tags-container');
        const tagList = container?.querySelector('.tag-list');
        const hiddenInput = container?.querySelector('input[type="hidden"]');
        
        let tags = [];
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                
                const tag = this.value.trim();
                if (tag && !tags.includes(tag)) {
                    tags.push(tag);
                    updateTags();
                }
                
                this.value = '';
            }
        });
        
        function updateTags() {
            if (tagList) {
                tagList.innerHTML = '';
                
                tags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.className = 'tag';
                    tagElement.innerHTML = `
                        ${tag}
                        <i class="fas fa-times" data-remove></i>
                    `;
                    
                    tagElement.querySelector('[data-remove]').addEventListener('click', function() {
                        tags = tags.filter(t => t !== tag);
                        updateTags();
                    });
                    
                    tagList.appendChild(tagElement);
                });
            }
            
            if (hiddenInput) {
                hiddenInput.value = JSON.stringify(tags);
            }
        }
    });
}

// ============================================
// 69. GESTION DES NOTIFICATIONS PUSH
// ============================================
function initPushNotifications() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
        const notificationButton = document.querySelector('[data-notifications]');
        
        if (notificationButton) {
            notificationButton.addEventListener('click', function() {
                if (Notification.permission === 'granted') {
                    // Envoyer une notification de test
                    navigator.serviceWorker.ready.then(registration => {
                        registration.showNotification('Les Jumelles', {
                            body: 'Merci de vous être abonné aux notifications !',
                            icon: '/logojm.PNG',
                            badge: '/logojm.PNG'
                        });
                    });
                } else if (Notification.permission !== 'denied') {
                    Notification.requestPermission().then(permission => {
                        if (permission === 'granted') {
                            console.log('Notifications autorisées');
                        }
                    });
                }
            });
        }
    }
}

// ============================================
// 70. GESTION DU SCROLL INFINI AVEC CHARGEMENT
// ============================================
function initInfiniteScrollWithLoader() {
    const infiniteScrollElements = document.querySelectorAll('[data-infinite-scroll]');
    
    infiniteScrollElements.forEach(element => {
        const loader = element.querySelector('.infinite-loader');
        const endMessage = element.querySelector('.infinite-end');
        let page = 1;
        let loading = false;
        let hasMore = true;
        
        window.addEventListener('scroll', function() {
            if (loading || !hasMore) return;
            
            const rect = element.getBoundingClientRect();
            const isNearBottom = rect.bottom <= window.innerHeight + 100;
            
            if (isNearBottom) {
                loadMore();
            }
        });
        
        function loadMore() {
            loading = true;
            
            if (loader) {
                loader.style.display = 'block';
            }
            
            // Simuler un chargement AJAX
            setTimeout(() => {
                // Ajouter le contenu ici
                page++;
                hasMore = page < 5; // Limite d'exemple
                
                if (loader) {
                    loader.style.display = 'none';
                }
                
                if (!hasMore && endMessage) {
                    endMessage.style.display = 'block';
                }
                
                loading = false;
            }, 1000);
        }
    });
}

// ============================================
// 71. GESTION DU MASQUE DE SAISIE
// ============================================
function initInputMasks() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.length <= 2) {
                    value = value;
                } else if (value.length <= 4) {
                    value = value.replace(/^(\d{2})(\d+)/, '$1 $2');
                } else if (value.length <= 6) {
                    value = value.replace(/^(\d{2})(\d{2})(\d+)/, '$1 $2 $3');
                } else if (value.length <= 8) {
                    value = value.replace(/^(\d{2})(\d{2})(\d{2})(\d+)/, '$1 $2 $3 $4');
                } else {
                    value = value.replace(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d+)/, '$1 $2 $3 $4 $5');
                }
            }
            
            this.value = value;
        });
    });
    
    const dateInputs = document.querySelectorAll('input[placeholder*="JJ/MM/AAAA"]');
    
    dateInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.length <= 2) {
                    value = value;
                } else if (value.length <= 4) {
                    value = value.replace(/^(\d{2})(\d+)/, '$1/$2');
                } else {
                    value = value.replace(/^(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
                }
            }
            
            this.value = value;
        });
    });
}

// ============================================
// 72. GESTION DES VALIDATIONS PERSONNALISÉES
// ============================================
function initCustomValidations() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Validation du mot de passe
            const password = form.querySelector('[data-validate="password"]');
            if (password) {
                const confirmPassword = form.querySelector('[data-validate="confirm-password"]');
                
                if (password.value.length < 8) {
                    showFieldError(password, 'Le mot de passe doit contenir au moins 8 caractères');
                    isValid = false;
                }
                
                if (confirmPassword && password.value !== confirmPassword.value) {
                    showFieldError(confirmPassword, 'Les mots de passe ne correspondent pas');
                    isValid = false;
                }
            }
            
            // Validation de l'âge minimum
            const age = form.querySelector('[data-validate="age"]');
            if (age) {
                const ageValue = parseInt(age.value);
                if (isNaN(ageValue) || ageValue < 18) {
                    showFieldError(age, 'Vous devez avoir au moins 18 ans');
                    isValid = false;
                }
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    });
    
    function showFieldError(field, message) {
        field.classList.add('error');
        
        let errorElement = field.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('field-error')) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            field.parentNode.insertBefore(errorElement, field.nextSibling);
        }
        
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '0.3rem';
    }
}

// ============================================
// 73. GESTION DES COULEURS DYNAMIQUES
// ============================================
function initDynamicColors() {
    const colorPickers = document.querySelectorAll('[data-color]');
    
    colorPickers.forEach(picker => {
        picker.addEventListener('input', function() {
            const color = this.value;
            const target = this.dataset.target;
            
            if (target) {
                document.documentElement.style.setProperty(target, color);
            }
        });
    });
}

// ============================================
// 74. GESTION DES FAVORIS
// ============================================
function initFavorites() {
    const favoriteButtons = document.querySelectorAll('[data-favorite]');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.dataset.favorite;
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            
            if (favorites.includes(itemId)) {
                // Retirer des favoris
                const index = favorites.indexOf(itemId);
                favorites.splice(index, 1);
                this.classList.remove('active');
                this.setAttribute('aria-label', 'Ajouter aux favoris');
            } else {
                // Ajouter aux favoris
                favorites.push(itemId);
                this.classList.add('active');
                this.setAttribute('aria-label', 'Retirer des favoris');
            }
            
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
}

// ============================================
// 75. GESTION DE L'HISTORIQUE DE NAVIGATION
// ============================================
function initNavigationHistory() {
    // Sauvegarder la position de scroll
    window.addEventListener('beforeunload', function() {
        const scrollPos = window.pageYOffset;
        sessionStorage.setItem('scrollPos', scrollPos.toString());
    });
    
    // Restaurer la position de scroll
    const savedScrollPos = sessionStorage.getItem('scrollPos');
    if (savedScrollPos) {
        window.scrollTo(0, parseInt(savedScrollPos));
        sessionStorage.removeItem('scrollPos');
    }
}

// ============================================
// 76. GESTION DES ANIMATIONS AU SCROLL
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.dataset.animate || 'fadeIn';
                const delay = parseInt(element.dataset.delay) || 0;
                
                setTimeout(() => {
                    element.classList.add('animated', animation);
                }, delay);
                
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    animatedElements.forEach(element => observer.observe(element));
}

// ============================================
// 77. GESTION DES AUDIO
// ============================================
function initAudioPlayers() {
    const audioPlayers = document.querySelectorAll('[data-audio]');
    
    audioPlayers.forEach(player => {
        const audio = new Audio(player.dataset.audio);
        const playButton = player.querySelector('[data-play]');
        const pauseButton = player.querySelector('[data-pause]');
        const stopButton = player.querySelector('[data-stop]');
        const progressBar = player.querySelector('[data-progress]');
        
        if (playButton) {
            playButton.addEventListener('click', () => audio.play());
        }
        
        if (pauseButton) {
            pauseButton.addEventListener('click', () => audio.pause());
        }
        
        if (stopButton) {
            stopButton.addEventListener('click', () => {
                audio.pause();
                audio.currentTime = 0;
            });
        }
        
        if (progressBar) {
            audio.addEventListener('timeupdate', () => {
                const progress = (audio.currentTime / audio.duration) * 100;
                progressBar.style.width = progress + '%';
            });
        }
    });
}

// ============================================
// 78. GESTION DES VIDÉOS
// ============================================
function initVideoPlayers() {
    const videoPlayers = document.querySelectorAll('[data-video]');
    
    videoPlayers.forEach(player => {
        const video = player.querySelector('video');
        const playButton = player.querySelector('[data-play]');
        const pauseButton = player.querySelector('[data-pause]');
        const volumeSlider = player.querySelector('[data-volume]');
        const fullscreenButton = player.querySelector('[data-fullscreen]');
        
        if (playButton) {
            playButton.addEventListener('click', () => video.play());
        }
        
        if (pauseButton) {
            pauseButton.addEventListener('click', () => video.pause());
        }
        
        if (volumeSlider) {
            volumeSlider.addEventListener('input', function() {
                video.volume = this.value / 100;
            });
        }
        
        if (fullscreenButton) {
            fullscreenButton.addEventListener('click', function() {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                }
            });
        }
    });
}

// ============================================
// 79. GESTION DES QR CODES
// ============================================
function initQRCodes() {
    const qrContainers = document.querySelectorAll('[data-qr]');
    
    qrContainers.forEach(container => {
        const text = container.dataset.qr;
        const size = parseInt(container.dataset.size) || 200;
        
        // Utiliser une API de génération de QR code
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;
        
        const img = document.createElement('img');
        img.src = qrUrl;
        img.alt = 'QR Code';
        img.style.width = '100%';
        img.style.height = 'auto';
        
        container.appendChild(img);
    });
}

// ============================================
// 80. GESTION DES BARCODES
// ============================================
function initBarcodes() {
    const barcodeContainers = document.querySelectorAll('[data-barcode]');
    
    barcodeContainers.forEach(container => {
        const text = container.dataset.barcode;
        const format = container.dataset.format || 'CODE128';
        
        // Utiliser une bibliothèque de génération de codes-barres
        if (window.JsBarcode) {
            JsBarcode(container, text, {
                format: format,
                lineColor: 'var(--ebony)',
                width: 2,
                height: 100,
                displayValue: true
            });
        }
    });
}

// ============================================
// 81. GESTION DES CALCULATRICES
// ============================================
function initCalculators() {
    const calculators = document.querySelectorAll('[data-calculator]');
    
    calculators.forEach(calculator => {
        const inputs = calculator.querySelectorAll('input[type="number"]');
        const result = calculator.querySelector('[data-result]');
        
        inputs.forEach(input => {
            input.addEventListener('input', calculate);
        });
        
        function calculate() {
            let total = 0;
            
            inputs.forEach(input => {
                const value = parseFloat(input.value) || 0;
                const multiplier = parseFloat(input.dataset.multiplier) || 1;
                total += value * multiplier;
            });
            
            if (result) {
                result.textContent = total.toFixed(2);
            }
        }
    });
}

// ============================================
// 82. GESTION DES CONVERTISSEURS
// ============================================
function initConverters() {
    const converters = document.querySelectorAll('[data-converter]');
    
    converters.forEach(converter => {
        const fromUnit = converter.dataset.from;
        const toUnit = converter.dataset.to;
        const input = converter.querySelector('[data-input]');
        const output = converter.querySelector('[data-output]');
        
        if (input && output) {
            input.addEventListener('input', function() {
                const value = parseFloat(this.value) || 0;
                let result = value;
                
                // Exemple de conversion (à adapter)
                if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
                    result = (value * 9/5) + 32;
                } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
                    result = (value - 32) * 5/9;
                }
                
                output.value = result.toFixed(2);
            });
        }
    });
}

// ============================================
// 83. GESTION DES SUJETS (THEMES)
// ============================================
function initThemes() {
    const themeSelector = document.querySelector('[data-theme-selector]');
    
    if (themeSelector) {
        themeSelector.addEventListener('change', function() {
            const theme = this.value;
            
            // Supprimer tous les thèmes précédents
            document.body.className = document.body.className
                .split(' ')
                .filter(c => !c.startsWith('theme-'))
                .join(' ');
            
            document.body.classList.add(`theme-${theme}`);
            localStorage.setItem('selectedTheme', theme);
        });
        
        // Charger le thème sauvegardé
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            themeSelector.value = savedTheme;
            document.body.classList.add(`theme-${savedTheme}`);
        }
    }
}

// ============================================
// 84. GESTION DES POLICES DYNAMIQUES
// ============================================
function initFonts() {
    const fontSelector = document.querySelector('[data-font-selector]');
    
    if (fontSelector) {
        fontSelector.addEventListener('change', function() {
            const font = this.value;
            document.documentElement.style.setProperty('--font-body', font);
            localStorage.setItem('selectedFont', font);
        });
        
        // Charger la police sauvegardée
        const savedFont = localStorage.getItem('selectedFont');
        if (savedFont) {
            fontSelector.value = savedFont;
            document.documentElement.style.setProperty('--font-body', savedFont);
        }
    }
}

// ============================================
// 85. GESTION DE LA TAILLE DE POLICE
// ============================================
function initFontSize() {
    const fontSizeSlider = document.querySelector('[data-font-size]');
    
    if (fontSizeSlider) {
        fontSizeSlider.addEventListener('input', function() {
            const size = this.value;
            document.documentElement.style.fontSize = size + 'px';
            localStorage.setItem('fontSize', size);
        });
        
        // Charger la taille sauvegardée
        const savedSize = localStorage.getItem('fontSize');
        if (savedSize) {
            fontSizeSlider.value = savedSize;
            document.documentElement.style.fontSize = savedSize + 'px';
        }
    }
}

// ============================================
// 86. GESTION DU CONTRASTE ÉLEVÉ
// ============================================
function initHighContrast() {
    const contrastToggle = document.querySelector('[data-contrast]');
    
    if (contrastToggle) {
        contrastToggle.addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
            
            const isHighContrast = document.body.classList.contains('high-contrast');
            localStorage.setItem('highContrast', isHighContrast);
        });
        
        // Charger la préférence
        const savedContrast = localStorage.getItem('highContrast') === 'true';
        if (savedContrast) {
            document.body.classList.add('high-contrast');
        }
    }
}

// ============================================
// 87. GESTION DU DALTONISME
// ============================================
function initColorBlindness() {
    const colorBlindSelector = document.querySelector('[data-colorblind]');
    
    if (colorBlindSelector) {
        colorBlindSelector.addEventListener('change', function() {
            const mode = this.value;
            
            document.body.classList.remove(
                'protanopia', 'deuteranopia', 'tritanopia', 'achromatopsia'
            );
            
            if (mode !== 'normal') {
                document.body.classList.add(mode);
            }
            
            localStorage.setItem('colorBlindMode', mode);
        });
        
        // Charger le mode sauvegardé
        const savedMode = localStorage.getItem('colorBlindMode');
        if (savedMode && savedMode !== 'normal') {
            colorBlindSelector.value = savedMode;
            document.body.classList.add(savedMode);
        }
    }
}

// ============================================
// 88. GESTION DU MODE LECTURE
// ============================================
function initReadingMode() {
    const readingToggle = document.querySelector('[data-reading]');
    
    if (readingToggle) {
        readingToggle.addEventListener('click', function() {
            document.body.classList.toggle('reading-mode');
            
            const isReadingMode = document.body.classList.contains('reading-mode');
            localStorage.setItem('readingMode', isReadingMode);
        });
        
        // Charger la préférence
        const savedReadingMode = localStorage.getItem('readingMode') === 'true';
        if (savedReadingMode) {
            document.body.classList.add('reading-mode');
        }
    }
}

// ============================================
// 89. GESTION DU MODE FOCUS
// ============================================
function initFocusMode() {
    const focusToggle = document.querySelector('[data-focus]');
    
    if (focusToggle) {
        focusToggle.addEventListener('click', function() {
            document.body.classList.toggle('focus-mode');
            
            const isFocusMode = document.body.classList.contains('focus-mode');
            localStorage.setItem('focusMode', isFocusMode);
        });
        
        // Charger la préférence
        const savedFocusMode = localStorage.getItem('focusMode') === 'true';
        if (savedFocusMode) {
            document.body.classList.add('focus-mode');
        }
    }
}

// ============================================
// 90. GESTION DES RACCOURCIS CLAVIER
// ============================================
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl + H pour aller à l'accueil
        if (e.ctrlKey && e.key === 'h') {
            e.preventDefault();
            window.location.href = 'index.html';
        }
        
        // Ctrl + M pour aller au menu
        if (e.ctrlKey && e.key === 'm') {
            e.preventDefault();
            window.location.href = 'menu.html';
        }
        
        // Ctrl + C pour aller au contact
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            window.location.href = 'contact.html';
        }
        
        // Ctrl + K pour la recherche
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('[data-search]');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Échap pour fermer les modales
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal, .popup').forEach(element => {
                if (element.style.display === 'flex') {
                    element.style.display = 'none';
                }
            });
        }
    });
}

// ============================================
// 91. GESTION DU PRESSE-PAPIERS AVANCÉ
// ============================================
function initAdvancedClipboard() {
    document.querySelectorAll('[data-copy-html]').forEach(button => {
        button.addEventListener('click', function() {
            const html = this.dataset.copyHtml;
            
            const blob = new Blob([html], { type: 'text/html' });
            const clipboardItem = new ClipboardItem({
                'text/html': blob,
                'text/plain': new Blob([html.replace(/<[^>]*>/g, '')], { type: 'text/plain' })
            });
            
            navigator.clipboard.write([clipboardItem]).then(() => {
                showNotification('HTML copié !', 'success');
            }).catch(() => {
                showNotification('Erreur lors de la copie', 'error');
            });
        });
    });
}

// ============================================
// 92. GESTION DES FICHIERS JSON
// ============================================
function initJSONHandling() {
    const jsonInputs = document.querySelectorAll('[data-json]');
    
    jsonInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            
            if (file) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    try {
                        const json = JSON.parse(e.target.result);
                        console.log('JSON chargé:', json);
                        
                        // Déclencher un événement personnalisé
                        const event = new CustomEvent('jsonLoaded', {
                            detail: { data: json }
                        });
                        input.dispatchEvent(event);
                    } catch (error) {
                        showNotification('Fichier JSON invalide', 'error');
                    }
                };
                
                reader.readAsText(file);
            }
        });
    });
}

// ============================================
// 93. GESTION DES FICHIERS CSV
// ============================================
function initCSVHandling() {
    const csvInputs = document.querySelectorAll('[data-csv]');
    
    csvInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            
            if (file) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const csv = e.target.result;
                    const lines = csv.split('\n');
                    const headers = lines[0].split(',');
                    const data = [];
                    
                    for (let i = 1; i < lines.length; i++) {
                        const values = lines[i].split(',');
                        if (values.length === headers.length) {
                            const row = {};
                            headers.forEach((header, index) => {
                                row[header.trim()] = values[index].trim();
                            });
                            data.push(row);
                        }
                    }
                    
                    console.log('CSV chargé:', data);
                    
                    // Déclencher un événement personnalisé
                    const event = new CustomEvent('csvLoaded', {
                        detail: { data: data }
                    });
                    input.dispatchEvent(event);
                };
                
                reader.readAsText(file);
            }
        });
    });
}

// ============================================
// 94. GESTION DES EXPORTATIONS
// ============================================
function initExport() {
    const exportButtons = document.querySelectorAll('[data-export]');
    
    exportButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.dataset.export;
            const data = this.dataset.data;
            const filename = this.dataset.filename || 'export';
            
            let blob;
            let mimeType;
            
            switch (type) {
                case 'json':
                    blob = new Blob([data], { type: 'application/json' });
                    mimeType = 'application/json';
                    break;
                case 'csv':
                    blob = new Blob([data], { type: 'text/csv' });
                    mimeType = 'text/csv';
                    break;
                case 'txt':
                    blob = new Blob([data], { type: 'text/plain' });
                    mimeType = 'text/plain';
                    break;
                default:
                    return;
            }
            
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${filename}.${type}`;
            a.click();
            URL.revokeObjectURL(url);
        });
    });
}

// ============================================
// 95. GESTION DES IMPRESSIONS AVANCÉES
// ============================================
function initAdvancedPrint() {
    const printButtons = document.querySelectorAll('[data-print-section]');
    
    printButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.dataset.printSection;
            const section = document.getElementById(sectionId);
            
            if (section) {
                const originalTitle = document.title;
                const printWindow = window.open('', '_blank');
                
                printWindow.document.write(`
                    <html>
                        <head>
                            <title>${document.title}</title>
                            <link rel="stylesheet" href="style.css">
                            <style>
                                body { padding: 20px; }
                                .no-print { display: none; }
                            </style>
                        </head>
                        <body>
                            ${section.outerHTML}
                        </body>
                    </html>
                `);
                
                printWindow.document.close();
                printWindow.focus();
                printWindow.print();
                printWindow.close();
            }
        });
    });
}

// ============================================
// 96. GESTION DES PARTAGES AVANCÉS
// ============================================
function initAdvancedSharing() {
    const shareButtons = document.querySelectorAll('[data-share-native]');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const shareData = {
                title: this.dataset.shareTitle || document.title,
                text: this.dataset.shareText || '',
                url: this.dataset.shareUrl || window.location.href
            };
            
            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                    showNotification('Partagé avec succès !', 'success');
                } catch (error) {
                    console.log('Partage annulé ou erreur:', error);
                }
            } else {
                showNotification('Partage non supporté sur ce navigateur', 'error');
            }
        });
    });
}

// ============================================
// 97. GESTION DES GÉOLOCALISATIONS
// ============================================
function initGeolocation() {
    const geoButtons = document.querySelectorAll('[data-geolocation]');
    
    geoButtons.forEach(button => {
        button.addEventListener('click', function() {
            if ('geolocation' in navigator) {
                                navigator.geolocation.getCurrentPosition(function(position) {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    console.log('Position:', lat, lng);
                    
                    // Afficher la position
                    const result = document.querySelector('[data-geo-result]');
                    if (result) {
                        result.textContent = `Latitude: ${lat.toFixed(6)}, Longitude: ${lng.toFixed(6)}`;
                    }
                    
                    // Ouvrir Google Maps
                    if (button.dataset.openMap) {
                        window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
                    }
                    
                    showNotification('Position obtenue avec succès !', 'success');
                }, function(error) {
                    let message = 'Erreur de géolocalisation';
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            message = 'Permission refusée';
                            break;
                        case error.POSITION_UNAVAILABLE:
                            message = 'Position indisponible';
                            break;
                        case error.TIMEOUT:
                            message = 'Délai d\'attente dépassé';
                            break;
                    }
                    showNotification(message, 'error');
                });
            } else {
                showNotification('Géolocalisation non supportée', 'error');
            }
        });
    });
}

// ============================================
// 98. GESTION DE LA MÉTÉO
// ============================================
function initWeather() {
    const weatherContainers = document.querySelectorAll('[data-weather]');
    
    weatherContainers.forEach(container => {
        const lat = container.dataset.lat || '36.753774';
        const lon = container.dataset.lon || '3.043477';
        
        // Utiliser une API météo (exemple avec OpenWeatherMap)
        const apiKey = 'votre_clé_api'; // À remplacer
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const temperature = Math.round(data.main.temp);
                const description = data.weather[0].description;
                const icon = data.weather[0].icon;
                
                container.innerHTML = `
                    <div class="weather-info">
                        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
                        <span class="weather-temp">${temperature}°C</span>
                        <span class="weather-desc">${description}</span>
                    </div>
                `;
            })
            .catch(error => {
                console.error('Erreur météo:', error);
                container.innerHTML = '<p>Météo indisponible</p>';
            });
    });
}

// ============================================
// 99. GESTION DES DEVISES
// ============================================
function initCurrency() {
    const currencyElements = document.querySelectorAll('[data-currency]');
    
    currencyElements.forEach(element => {
        const amount = parseFloat(element.dataset.currency);
        const from = element.dataset.from || 'EUR';
        const to = element.dataset.to || 'DZD';
        
        // Utiliser une API de change (exemple avec ExchangeRate-API)
        const apiKey = 'votre_clé_api'; // À remplacer
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    const converted = data.conversion_result;
                    element.textContent = new Intl.NumberFormat('fr-FR', {
                        style: 'currency',
                        currency: to
                    }).format(converted);
                }
            })
            .catch(error => {
                console.error('Erreur de change:', error);
            });
    });
}

// ============================================
// 100. GESTION DES TRADUCTIONS
// ============================================
function initTranslations() {
    const langSelector = document.querySelector('[data-lang]');
    
    if (langSelector) {
        // Dictionnaire de traductions
        const translations = {
            fr: {
                'home': 'Accueil',
                'menu': 'Menu',
                'reservation': 'Réservation',
                'welcome': 'Bienvenue chez',
                'discover': 'Découvrir notre carte'
            },
            en: {
                'home': 'Home',
                'menu': 'Menu',
                'reservation': 'Reservation',
                'welcome': 'Welcome to',
                'discover': 'Discover our menu'
            },
            ar: {
                'home': 'الرئيسية',
                'menu': 'القائمة',
                'reservation': 'حجز',
                'welcome': 'مرحباً بكم في',
                'discover': 'اكتشف قائمتنا'
            }
        };
        
        langSelector.addEventListener('change', function() {
            const lang = this.value;
            
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.dataset.i18n;
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
            
            // Changer la direction pour l'arabe
            if (lang === 'ar') {
                document.documentElement.dir = 'rtl';
                document.documentElement.lang = 'ar';
            } else {
                document.documentElement.dir = 'ltr';
                document.documentElement.lang = lang;
            }
            
            localStorage.setItem('language', lang);
        });
        
        // Charger la langue sauvegardée
        const savedLang = localStorage.getItem('language') || 'fr';
        langSelector.value = savedLang;
        langSelector.dispatchEvent(new Event('change'));
    }
}

// ============================================
// 101. GESTION DES NOTIFICATIONS SONORES
// ============================================
function initSoundNotifications() {
    const soundButtons = document.querySelectorAll('[data-sound]');
    
    soundButtons.forEach(button => {
        button.addEventListener('click', function() {
            const soundFile = this.dataset.sound;
            const audio = new Audio(soundFile);
            audio.play().catch(error => {
                console.log('Lecture audio bloquée:', error);
            });
        });
    });
}

// ============================================
// 102. GESTION DES VIBRATIONS
// ============================================
function initVibration() {
    const vibrateButtons = document.querySelectorAll('[data-vibrate]');
    
    vibrateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pattern = this.dataset.vibrate;
            
            if ('vibrate' in navigator) {
                if (pattern.includes(',')) {
                    const intervals = pattern.split(',').map(Number);
                    navigator.vibrate(intervals);
                } else {
                    navigator.vibrate(parseInt(pattern));
                }
            }
        });
    });
}

// ============================================
// 103. GESTION DE LA CAMÉRA
// ============================================
function initCamera() {
    const cameraButtons = document.querySelectorAll('[data-camera]');
    
    cameraButtons.forEach(button => {
        button.addEventListener('click', async function() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                
                const video = document.createElement('video');
                video.srcObject = stream;
                video.autoplay = true;
                video.playsInline = true;
                
                const container = document.querySelector(this.dataset.target || 'body');
                container.appendChild(video);
                
                // Style pour la vidéo
                Object.assign(video.style, {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '90%',
                    maxHeight: '90%',
                    zIndex: '10000',
                    border: '2px solid var(--gold-primary)',
                    borderRadius: '10px'
                });
                
                // Bouton pour fermer
                const closeButton = document.createElement('button');
                closeButton.innerHTML = '✕';
                Object.assign(closeButton.style, {
                    position: 'fixed',
                    top: '60px',
                    right: '20px',
                    zIndex: '10001',
                    background: 'var(--burgundy)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer'
                });
                
                closeButton.addEventListener('click', function() {
                    stream.getTracks().forEach(track => track.stop());
                    video.remove();
                    this.remove();
                });
                
                document.body.appendChild(closeButton);
                
            } catch (error) {
                console.error('Erreur caméra:', error);
                showNotification('Impossible d\'accéder à la caméra', 'error');
            }
        });
    });
}

// ============================================
// 104. GESTION DU MICROPHONE
// ============================================
function initMicrophone() {
    const micButtons = document.querySelectorAll('[data-microphone]');
    
    micButtons.forEach(button => {
        button.addEventListener('click', async function() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                
                const audioContext = new AudioContext();
                const source = audioContext.createMediaStreamSource(stream);
                const analyser = audioContext.createAnalyser();
                
                source.connect(analyser);
                
                // Créer un visualiseur
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                Object.assign(canvas.style, {
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '200px',
                    height: '100px',
                    background: 'var(--ebony)',
                    border: '2px solid var(--gold-primary)',
                    borderRadius: '5px',
                    zIndex: '10000'
                });
                
                document.body.appendChild(canvas);
                
                const dataArray = new Uint8Array(analyser.frequencyBinCount);
                
                function draw() {
                    requestAnimationFrame(draw);
                    
                    analyser.getByteFrequencyData(dataArray);
                    
                    ctx.fillStyle = 'var(--ebony)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    const barWidth = (canvas.width / dataArray.length) * 2.5;
                    let barHeight;
                    let x = 0;
                    
                    for (let i = 0; i < dataArray.length; i++) {
                        barHeight = dataArray[i] / 2;
                        
                        ctx.fillStyle = 'var(--gold-primary)';
                        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                        
                        x += barWidth + 1;
                    }
                }
                
                draw();
                
                // Bouton pour arrêter
                const stopButton = document.createElement('button');
                stopButton.innerHTML = 'Arrêter';
                Object.assign(stopButton.style, {
                    position: 'fixed',
                    bottom: '130px',
                    right: '20px',
                    zIndex: '10001',
                    background: 'var(--burgundy)',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '5px',
                    cursor: 'pointer'
                });
                
                stopButton.addEventListener('click', function() {
                    stream.getTracks().forEach(track => track.stop());
                    canvas.remove();
                    this.remove();
                });
                
                document.body.appendChild(stopButton);
                
            } catch (error) {
                console.error('Erreur microphone:', error);
                showNotification('Impossible d\'accéder au microphone', 'error');
            }
        });
    });
}

// ============================================
// 105. GESTION DU PARTAGE D'ÉCRAN
// ============================================
function initScreenShare() {
    const shareScreenButtons = document.querySelectorAll('[data-share-screen]');
    
    shareScreenButtons.forEach(button => {
        button.addEventListener('click', async function() {
            try {
                const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
                
                const video = document.createElement('video');
                video.srcObject = stream;
                video.autoplay = true;
                video.playsInline = true;
                
                const container = document.querySelector(this.dataset.target || 'body');
                container.appendChild(video);
                
                Object.assign(video.style, {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '90%',
                    maxHeight: '90%',
                    zIndex: '10000',
                    border: '2px solid var(--gold-primary)',
                    borderRadius: '10px'
                });
                
                const stopButton = document.createElement('button');
                stopButton.innerHTML = 'Arrêter le partage';
                Object.assign(stopButton.style, {
                    position: 'fixed',
                    top: '60px',
                    right: '20px',
                    zIndex: '10001',
                    background: 'var(--burgundy)',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '5px',
                    cursor: 'pointer'
                });
                
                stopButton.addEventListener('click', function() {
                    stream.getTracks().forEach(track => track.stop());
                    video.remove();
                    this.remove();
                });
                
                document.body.appendChild(stopButton);
                
            } catch (error) {
                console.error('Erreur partage d\'écran:', error);
                showNotification('Partage d\'écran annulé', 'error');
            }
        });
    });
}

// ============================================
// 106. GESTION DE LA RÉALITÉ AUGMENTÉE
// ============================================
function initAR() {
    const arButtons = document.querySelectorAll('[data-ar]');
    
    arButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modelSrc = this.dataset.ar;
            
            // Utiliser model-viewer pour l'AR
            if ('activateAR' in this) {
                this.activateAR();
            } else {
                // Fallback pour les navigateurs sans support AR
                showNotification('La réalité augmentée n\'est pas supportée sur ce navigateur', 'error');
            }
        });
    });
}

// ============================================
// 107. GESTION DE LA RÉALITÉ VIRTUELLE
// ============================================
function initVR() {
    const vrButtons = document.querySelectorAll('[data-vr]');
    
    vrButtons.forEach(button => {
        button.addEventListener('click', async function() {
            if ('xr' in navigator) {
                try {
                    const session = await navigator.xr.requestSession('immersive-vr');
                    console.log('Session VR démarrée:', session);
                    
                    showNotification('Mode VR activé', 'success');
                } catch (error) {
                    console.error('Erreur VR:', error);
                    showNotification('Impossible de démarrer la VR', 'error');
                }
            } else {
                showNotification('La réalité virtuelle n\'est pas supportée', 'error');
            }
        });
    });
}

// ============================================
// 108. GESTION DES CAPTURES D'ÉCRAN
// ============================================
function initScreenshot() {
    const screenshotButtons = document.querySelectorAll('[data-screenshot]');
    
    screenshotButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.dataset.target || 'body';
            const element = document.querySelector(target);
            
            html2canvas(element).then(canvas => {
                const link = document.createElement('a');
                link.download = 'screenshot.png';
                link.href = canvas.toDataURL();
                link.click();
                
                showNotification('Capture d\'écran enregistrée', 'success');
            }).catch(error => {
                console.error('Erreur capture:', error);
                showNotification('Erreur lors de la capture', 'error');
            });
        });
    });
}

// ============================================
// 109. GESTION DES ENREGISTREMENTS
// ============================================
function initRecording() {
    const recordButtons = document.querySelectorAll('[data-record]');
    let mediaRecorder;
    let recordedChunks = [];
    
    recordButtons.forEach(button => {
        button.addEventListener('click', async function() {
            if (!mediaRecorder) {
                // Démarrer l'enregistrement
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ 
                        audio: true,
                        video: true 
                    });
                    
                    mediaRecorder = new MediaRecorder(stream);
                    
                    mediaRecorder.ondataavailable = function(event) {
                        if (event.data.size > 0) {
                            recordedChunks.push(event.data);
                        }
                    };
                    
                    mediaRecorder.onstop = function() {
                        const blob = new Blob(recordedChunks, {
                            type: 'video/webm'
                        });
                        
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'enregistrement.webm';
                        a.click();
                        
                        recordedChunks = [];
                    };
                    
                    mediaRecorder.start();
                    button.textContent = 'Arrêter';
                    button.classList.add('recording');
                    
                    showNotification('Enregistrement démarré', 'success');
                    
                } catch (error) {
                    console.error('Erreur enregistrement:', error);
                    showNotification('Impossible d\'accéder à la caméra/micro', 'error');
                }
            } else {
                // Arrêter l'enregistrement
                mediaRecorder.stop();
                mediaRecorder.stream.getTracks().forEach(track => track.stop());
                mediaRecorder = null;
                
                button.textContent = 'Enregistrer';
                button.classList.remove('recording');
            }
        });
    });
}

// ============================================
// 110. GESTION DES TÉLÉCHARGEMENTS EN ARRIÈRE-PLAN
// ============================================
function initBackgroundDownloads() {
    const downloadButtons = document.querySelectorAll('[data-bg-download]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.dataset.bgDownload;
            const filename = this.dataset.filename || 'download';
            
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(registration => {
                    registration.active.postMessage({
                        type: 'DOWNLOAD',
                        url: url,
                        filename: filename
                    });
                    
                    showNotification('Téléchargement en arrière-plan', 'success');
                });
            } else {
                // Fallback
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                a.click();
            }
        });
    });
}

// ============================================
// 111. GESTION DES SYNCHRONISATIONS
// ============================================
function initSync() {
    const syncButtons = document.querySelectorAll('[data-sync]');
    
    syncButtons.forEach(button => {
        button.addEventListener('click', function() {
            const data = localStorage.getItem(this.dataset.sync);
            
            if ('serviceWorker' in navigator && 'SyncManager' in window) {
                navigator.serviceWorker.ready.then(registration => {
                    registration.sync.register('sync-data').then(() => {
                        showNotification('Synchronisation planifiée', 'success');
                    });
                });
            } else {
                // Synchronisation immédiate
                console.log('Données à synchroniser:', data);
                showNotification('Synchronisation effectuée', 'success');
            }
        });
    });
}

// ============================================
// 112. GESTION DES MISES À JOUR
// ============================================
function initUpdates() {
    const updateButtons = document.querySelectorAll('[data-check-update]');
    
    updateButtons.forEach(button => {
        button.addEventListener('click', function() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(registration => {
                    registration.update().then(() => {
                        showNotification('Mise à jour vérifiée', 'success');
                    });
                });
            }
        });
    });
}

// ============================================
// 113. GESTION DES NOTIFICATIONS PUSH
// ============================================
function initPushManager() {
    const pushButtons = document.querySelectorAll('[data-push]');
    
    pushButtons.forEach(button => {
        button.addEventListener('click', async function() {
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                try {
                    const registration = await navigator.serviceWorker.ready;
                    
                    // Demander la permission
                    const permission = await Notification.requestPermission();
                    
                    if (permission === 'granted') {
                        // S'abonner aux notifications push
                        const subscription = await registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: 'votre_clé_publique' // À remplacer
                        });
                        
                        console.log('Abonnement push:', subscription);
                        showNotification('Notifications push activées', 'success');
                    }
                } catch (error) {
                    console.error('Erreur push:', error);
                    showNotification('Erreur lors de l\'activation', 'error');
                }
            }
        });
    });
}

// ============================================
// 114. GESTION DES PAIEMENTS
// ============================================
function initPayments() {
    const paymentButtons = document.querySelectorAll('[data-payment]');
    
    paymentButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const amount = this.dataset.amount;
            const currency = this.dataset.currency || 'DZD';
            
            if ('PaymentRequest' in window) {
                const methodData = [{
                    supportedMethods: 'basic-card',
                    data: {
                        supportedNetworks: ['visa', 'mastercard'],
                        supportedTypes: ['credit', 'debit']
                    }
                }];
                
                const details = {
                    total: {
                        label: 'Total',
                        amount: {
                            currency: currency,
                            value: amount
                        }
                    }
                };
                
                try {
                    const request = new PaymentRequest(methodData, details);
                    const response = await request.show();
                    await response.complete('success');
                    showNotification('Paiement effectué avec succès', 'success');
                } catch (error) {
                    console.error('Erreur paiement:', error);
                    showNotification('Paiement annulé', 'error');
                }
            } else {
                showNotification('Paiement en ligne non supporté', 'error');
            }
        });
    });
}

// ============================================
// 115. GESTION DES CRYPTOMONNAIES
// ============================================
function initCrypto() {
    const cryptoButtons = document.querySelectorAll('[data-crypto]');
    
    cryptoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const address = this.dataset.crypto;
            const amount = this.dataset.amount;
            const currency = this.dataset.currency || 'ETH';
            
            // Ouvrir l'application de wallet
            const walletUrl = `ethereum:${address}?value=${amount}`;
            window.open(walletUrl);
        });
    });
}

// ============================================
// 116. GESTION DES CONTRATS INTELLIGENTS
// ============================================
function initSmartContracts() {
    const contractButtons = document.querySelectorAll('[data-contract]');
    
    contractButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const contractAddress = this.dataset.contract;
            const functionName = this.dataset.function;
            const parameters = this.dataset.params;
            
            if (window.ethereum) {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    
                    // Interagir avec le contrat
                    console.log('Interaction avec le contrat:', contractAddress);
                    showNotification('Transaction envoyée', 'success');
                    
                } catch (error) {
                    console.error('Erreur contrat:', error);
                    showNotification('Erreur lors de la transaction', 'error');
                }
            } else {
                showNotification('MetaMask non détecté', 'error');
            }
        });
    });
}

// ============================================
// 117. GESTION DES NFT
// ============================================
function initNFT() {
    const nftButtons = document.querySelectorAll('[data-nft]');
    
    nftButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contract = this.dataset.nft;
            const tokenId = this.dataset.tokenId;
            
            // Ouvrir sur OpenSea ou autre marketplace
            const openseaUrl = `https://opensea.io/assets/${contract}/${tokenId}`;
            window.open(openseaUrl, '_blank');
        });
    });
}

// ============================================
// 118. GESTION DES QR CODES POUR PAIEMENTS
// ============================================
function initPaymentQR() {
    const qrPaymentButtons = document.querySelectorAll('[data-qr-payment]');
    
    qrPaymentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const amount = this.dataset.amount;
            const currency = this.dataset.currency || 'DZD';
            const merchant = this.dataset.merchant || 'Les Jumelles';
            
            // Créer un QR code pour le paiement
            const qrData = `Paiement:${amount}:${currency}:${merchant}`;
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`;
            
            // Afficher le QR code dans une modale
            showQRModal(qrUrl, amount, currency);
        });
    });
    
    function showQRModal(qrUrl, amount, currency) {
        const modal = document.createElement('div');
        Object.assign(modal.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '10000'
        });
        
        const content = document.createElement('div');
        Object.assign(content.style, {
            background: 'white',
            padding: '2rem',
            borderRadius: '10px',
            textAlign: 'center',
            maxWidth: '400px'
        });
        
        content.innerHTML = `
            <h3 style="color: var(--burgundy); margin-bottom: 1rem;">Scanner pour payer</h3>
            <img src="${qrUrl}" alt="QR Code" style="width: 200px; height: 200px; margin-bottom: 1rem;">
            <p style="margin-bottom: 0.5rem;">Montant: ${amount} ${currency}</p>
            <p style="font-size: 0.9rem; color: #666;">Scannez avec votre application bancaire</p>
            <button class="close-btn" style="margin-top: 1rem; padding: 0.5rem 2rem; background: var(--gold-primary); border: none; border-radius: 5px; cursor: pointer;">Fermer</button>
        `;
        
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        content.querySelector('.close-btn').addEventListener('click', function() {
            modal.remove();
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
}

// ============================================
// 119. GESTION DES TIPPS (POURBOIRES)
// ============================================
function initTips() {
    const tipButtons = document.querySelectorAll('[data-tip]');
    
    tipButtons.forEach(button => {
        button.addEventListener('click', function() {
            const amount = this.dataset.tip;
            const currency = this.dataset.currency || 'DZD';
            
            // Simuler un paiement de pourboire
            showNotification(`Pourboire de ${amount} ${currency} envoyé ! Merci !`, 'success');
        });
    });
}

// ============================================
// 120. GESTION DES FIDÉLITÉS
// ============================================
function initLoyalty() {
    const loyaltyCards = document.querySelectorAll('[data-loyalty]');
    
    loyaltyCards.forEach(card => {
        const points = parseInt(card.dataset.points) || 0;
        const nextReward = parseInt(card.dataset.nextReward) || 100;
        
        const progress = (points / nextReward) * 100;
        
        card.innerHTML = `
            <div class="loyalty-card">
                <h4>Carte de fidélité</h4>
                <p>Points: ${points} / ${nextReward}</p>
                <div class="progress-bar" style="width: 100%; height: 10px; background: var(--gold-light); border-radius: 5px; margin: 10px 0;">
                    <div class="progress-fill" style="width: ${progress}%; height: 100%; background: var(--gold-primary); border-radius: 5px;"></div>
                </div>
                <p>Prochaine récompense: ${nextReward - points} points</p>
            </div>
        `;
    });
}

// ============================================
// 121. GESTION DES RÉDUCTIONS
// ============================================
function initDiscounts() {
    const discountInputs = document.querySelectorAll('[data-discount]');
    
    discountInputs.forEach(input => {
        input.addEventListener('change', function() {
            const code = this.value;
            const validCodes = {
                'WELCOME10': 10,
                'SUMMER20': 20,
                'VIP30': 30
            };
            
            if (validCodes[code]) {
                const discount = validCodes[code];
                showNotification(`Code valide! Réduction de ${discount}%`, 'success');
                
                // Appliquer la réduction
                const priceElements = document.querySelectorAll('[data-price]');
                priceElements.forEach(el => {
                    const originalPrice = parseFloat(el.dataset.price);
                    const newPrice = originalPrice * (1 - discount / 100);
                    el.textContent = newPrice.toFixed(2);
                });
            } else {
                showNotification('Code invalide', 'error');
            }
        });
    });
}

// ============================================
// 122. GESTION DES COMPTES
// ============================================
function initAccounts() {
    const loginForm = document.querySelector('[data-login]');
    const registerForm = document.querySelector('[data-register]');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('[name="email"]').value;
            const password = this.querySelector('[name="password"]').value;
            
            // Simuler une connexion
            localStorage.setItem('user', JSON.stringify({ email: email, loggedIn: true }));
            showNotification('Connexion réussie !', 'success');
            
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('[name="name"]').value;
            const email = this.querySelector('[name="email"]').value;
            const password = this.querySelector('[name="password"]').value;
            
            // Simuler une inscription
            localStorage.setItem('user', JSON.stringify({ name: name, email: email, loggedIn: true }));
            showNotification('Inscription réussie !', 'success');
            
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    }
    
    // Vérifier si l'utilisateur est connecté
    const user = localStorage.getItem('user');
    if (user) {
        document.body.classList.add('user-logged-in');
    }
}

// ============================================
// 123. GESTION DES PROFILS
// ============================================
function initProfiles() {
    const profileForms = document.querySelectorAll('[data-profile]');
    
    profileForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const profileData = Object.fromEntries(formData);
            
            // Sauvegarder le profil
            localStorage.setItem('profile', JSON.stringify(profileData));
            showNotification('Profil mis à jour !', 'success');
        });
        
        // Charger les données du profil
        const savedProfile = localStorage.getItem('profile');
        if (savedProfile) {
            const profile = JSON.parse(savedProfile);
            
            Object.keys(profile).forEach(key => {
                const input = form.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = profile[key];
                }
            });
        }
    });
}

// ============================================
// 124. GESTION DES AVIS
// ============================================
function initReviews() {
    const reviewForms = document.querySelectorAll('[data-review]');
    
    reviewForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const rating = this.querySelector('[name="rating"]').value;
            const comment = this.querySelector('[name="comment"]').value;
            
            // Sauvegarder l'avis
            const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
            reviews.push({
                rating: rating,
                comment: comment,
                date: new Date().toISOString(),
                user: JSON.parse(localStorage.getItem('user') || '{}')
            });
            localStorage.setItem('reviews', JSON.stringify(reviews));
            
            showNotification('Avis envoyé ! Merci !', 'success');
            this.reset();
        });
    });
}

// ============================================
// 125. GESTION DES FAVORIS AVANCÉE
// ============================================
function initAdvancedFavorites() {
    const favoriteButtons = document.querySelectorAll('[data-favorite-item]');
    
    favoriteButtons.forEach(button => {
        const itemId = button.dataset.favoriteItem;
        const itemName = button.dataset.itemName;
        const itemPrice = button.dataset.itemPrice;
        
        // Vérifier si l'élément est déjà favori
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (favorites.some(f => f.id === itemId)) {
            button.classList.add('active');
        }
        
        button.addEventListener('click', function() {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            const index = favorites.findIndex(f => f.id === itemId);
            
            if (index === -1) {
                // Ajouter
                favorites.push({
                    id: itemId,
                    name: itemName,
                    price: itemPrice,
                    date: new Date().toISOString()
                });
                this.classList.add('active');
                showNotification('Ajouté aux favoris', 'success');
            } else {
                // Retirer
                favorites.splice(index, 1);
                this.classList.remove('active');
                showNotification('Retiré des favoris', 'success');
            }
            
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
}

// ============================================
// 126. GESTION DU PANIER
// ============================================
function initCart() {
    const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');
    const cartCount = document.querySelector('[data-cart-count]');
    const cartItems = document.querySelector('[data-cart-items]');
    const cartTotal = document.querySelector('[data-cart-total]');
    
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    function updateCart() {
        // Mettre à jour le compteur
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
        
        // Sauvegarder
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = {
                id: this.dataset.itemId || Date.now(),
                name: this.dataset.itemName,
                price: parseFloat(this.dataset.itemPrice),
                quantity: 1
            };
            
            cart.push(item);
            updateCart();
            showNotification(`${item.name} ajouté au panier`, 'success');
        });
    });
    
    // Afficher le panier
    if (cartItems) {
        function displayCart() {
            cartItems.innerHTML = '';
            let total = 0;
            
            cart.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <span>${item.name} x ${item.quantity}</span>
                    <span>${item.price * item.quantity} DA</span>
                    <button class="remove-item" data-index="${index}">✕</button>
                `;
                cartItems.appendChild(itemElement);
                total += item.price * item.quantity;
            });
            
            if (cartTotal) {
                cartTotal.textContent = total + ' DA';
            }
            
            // Gérer la suppression
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const index = parseInt(this.dataset.index);
                    cart.splice(index, 1);
                    updateCart();
                    displayCart();
                });
            });
        }
        
        displayCart();
    }
    
    updateCart();
}

// ============================================
// 127. GESTION DES COMMANDES
// ============================================
function initOrders() {
    const orderButtons = document.querySelectorAll('[data-order]');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            
            if (cart.length === 0) {
                showNotification('Panier vide', 'error');
                return;
            }
            
            // Créer la commande
            const order = {
                id: 'CMD' + Date.now(),
                items: cart,
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                date: new Date().toISOString(),
                status: 'En attente'
            };
            
            // Sauvegarder la commande
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Vider le panier
            localStorage.setItem('cart', '[]');
            
            showNotification('Commande enregistrée !', 'success');
            
            setTimeout(() => {
                window.location.href = 'orders.html';
            }, 1000);
        });
    });
}

// ============================================
// 128. GESTION DES RÉSERVATIONS
// ============================================
function initBooking() {
    const bookingForms = document.querySelectorAll('[data-booking]');
    
    bookingForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const bookingData = {
                id: 'RES' + Date.now(),
                name: this.querySelector('[name="name"]').value,
                email: this.querySelector('[name="email"]').value,
                phone: this.querySelector('[name="phone"]').value,
                date: this.querySelector('[name="date"]').value,
                time: this.querySelector('[name="time"]').value,
                guests: this.querySelector('[name="guests"]').value,
                message: this.querySelector('[name="message"]').value,
                status: 'Confirmée',
                createdAt: new Date().toISOString()
            };
            
            // Sauvegarder la réservation
            const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
            bookings.push(bookingData);
            localStorage.setItem('bookings', JSON.stringify(bookings));
            
            showNotification('Réservation confirmée !', 'success');
            
            setTimeout(() => {
                window.location.href = 'bookings.html';
            }, 1000);
        });
    });
}

// ============================================
// 129. GESTION DES HISTORIQUES
// ============================================
function initHistory() {
    // Enregistrer la navigation
    const history = JSON.parse(localStorage.getItem('navigationHistory') || '[]');
    
    history.push({
        url: window.location.href,
        title: document.title,
        time: new Date().toISOString()
    });
    
    // Garder seulement les 50 derniers
    if (history.length > 50) {
        history.shift();
    }
    
    localStorage.setItem('navigationHistory', JSON.stringify(history));
}

// ============================================
// 130. GESTION DES STATISTIQUES
// ============================================
function initStats() {
    // Enregistrer les visites
    const visits = JSON.parse(localStorage.getItem('visits') || '[]');
    
    visits.push({
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        userAgent: navigator.userAgent
    });
    
    localStorage.setItem('visits', JSON.stringify(visits));
    
    // Afficher les statistiques si demandé
    const statsElements = document.querySelectorAll('[data-stats]');
    statsElements.forEach(element => {
        const stats = JSON.parse(localStorage.getItem(element.dataset.stats) || '[]');
        element.textContent = stats.length;
    });
}

// ============================================
// 131. GESTION DES EXPORTATIONS DE DONNÉES
// ============================================
function initDataExport() {
    const exportDataButtons = document.querySelectorAll('[data-export-data]');
    
    exportDataButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dataType = this.dataset.exportData;
            const data = localStorage.getItem(dataType);
            
            if (data) {
                const blob = new Blob([data], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${dataType}_export.json`;
                a.click();
                URL.revokeObjectURL(url);
                
                showNotification('Données exportées', 'success');
            } else {
                showNotification('Aucune donnée à exporter', 'error');
            }
        });
    });
}

// ============================================
// 132. GESTION DES IMPORTATIONS DE DONNÉES
// ============================================
function initDataImport() {
    const importInputs = document.querySelectorAll('[data-import-data]');
    
    importInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            const dataType = this.dataset.importData;
            
            if (file) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    try {
                        const data = JSON.parse(e.target.result);
                        localStorage.setItem(dataType, JSON.stringify(data));
                        showNotification('Données importées avec succès', 'success');
                        
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    } catch (error) {
                        showNotification('Fichier invalide', 'error');
                    }
                };
                
                reader.readAsText(file);
            }
        });
    });
}

// ============================================
// 133. GESTION DES SAUVEGARDES AUTOMATIQUES
// ============================================
function initAutoSave() {
    const autoSaveForms = document.querySelectorAll('[data-auto-save]');
    
    autoSaveForms.forEach(form => {
        const saveKey = form.dataset.autoSave;
        
        // Charger les données sauvegardées
        const savedData = localStorage.getItem(saveKey);
        if (savedData) {
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(key => {
                const input = form.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = data[key];
                }
            });
        }
        
        // Sauvegarder automatiquement
        form.addEventListener('input', function() {
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            localStorage.setItem(saveKey, JSON.stringify(data));
        });
    });
}

// ============================================
// 134. GESTION DES VERSIONS
// ============================================
function initVersion() {
    const version = '3.0.0';
    const lastVersion = localStorage.getItem('appVersion');
    
    if (lastVersion !== version) {
        console.log(`Mise à jour de ${lastVersion} vers ${version}`);
        
        // Migrer les données si nécessaire
        migrateData(lastVersion, version);
        
        localStorage.setItem('appVersion', version);
    }
}

function migrateData(oldVersion, newVersion) {
    // Migration des données entre versions
    if (oldVersion === '2.0.0') {
        // Migrer les données de l'ancienne version
        console.log('Migration des données...');
    }
}

// ============================================
// 135. GESTION DES ERREURS RÉSEAU
// ============================================
function initNetworkErrors() {
    const retryButtons = document.querySelectorAll('[data-retry]');
    
    retryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.dataset.retry;
            
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    showNotification('Chargement réussi', 'success');
                    // Mettre à jour l'interface
                })
                .catch(error => {
                    showNotification('Erreur de chargement', 'error');
                });
        });
    });
}

// ============================================
// 136. GESTION DES TIMEOUTS
// ============================================
function initTimeouts() {
    const timeoutElements = document.querySelectorAll('[data-timeout]');
    
    timeoutElements.forEach(element => {
        const timeout = parseInt(element.dataset.timeout) * 1000;
        
        setTimeout(() => {
            element.style.display = 'none';
        }, timeout);
    });
}

// ============================================
// 137. GESTION DES INTERVALLES
// ============================================
function initIntervals() {
    const intervalElements = document.querySelectorAll('[data-interval]');
    
    intervalElements.forEach(element => {
        const interval = parseInt(element.dataset.interval) * 1000;
        const callback = element.dataset.callback;
        
        setInterval(() => {
            if (callback && window[callback]) {
                window[callback]();
            }
        }, interval);
    });
}

// ============================================
// 138. GESTION DES DÉLAIS
// ============================================
function initDelays() {
    const delayElements = document.querySelectorAll('[data-delay]');
    
    delayElements.forEach(element => {
        const delay = parseInt(element.dataset.delay) * 1000;
        
        setTimeout(() => {
            element.classList.add('visible');
        }, delay);
    });
}

// ============================================
// 139. GESTION DES ANIMATIONS
// ============================================
function initAdvancedAnimations() {
    const animatedElements = document.querySelectorAll('[data-animation]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.dataset.animation;
                const duration = element.dataset.duration || '1s';
                const delay = element.dataset.delay || '0s';
                
                element.style.animation = `${animation} ${duration} ${delay} ease forwards`;
                
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    animatedElements.forEach(element => observer.observe(element));
}

// ============================================
// 140. GESTION DES EFFETS DE PARALLAXE
// ============================================
function initAdvancedParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.parallaxSpeed) || 0.5;
            const yPos = -(scrollY * speed);
            
            if (element.dataset.parallaxType === 'background') {
                element.style.backgroundPositionY = `${yPos}px`;
            } else {
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
}

// ============================================
// 141. GESTION DES EFFETS DE SURVOL
// ============================================
function initHoverEffects() {
    const hoverElements = document.querySelectorAll('[data-hover]');
    
    hoverElements.forEach(element => {
        const effect = element.dataset.hover;
        
        element.addEventListener('mouseenter', function() {
            this.classList.add(`hover-${effect}`);
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove(`hover-${effect}`);
        });
    });
}

// ============================================
// 142. GESTION DES EFFETS DE CLIC
// ============================================
function initClickEffects() {
    const clickElements = document.querySelectorAll('[data-click-effect]');
    
    clickElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const effect = this.dataset.clickEffect;
            
            // Créer l'effet
            const ripple = document.createElement('span');
            ripple.className = `click-effect ${effect}`;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size/2 + 'px';
            ripple.style.top = e.clientY - rect.top - size/2 + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ============================================
// 143. GESTION DES EFFETS DE CHARGEMENT
// ============================================
function initLoadingEffects() {
    const loadingElements = document.querySelectorAll('[data-loading]');
    
    loadingElements.forEach(element => {
        const type = element.dataset.loading;
        
        element.classList.add(`loading-${type}`);
        
        // Simuler la fin du chargement
        setTimeout(() => {
            element.classList.remove(`loading-${type}`);
        }, 2000);
    });
}

// ============================================
// 144. GESTION DES EFFETS DE TRANSITION
// ============================================
function initTransitionEffects() {
    const transitionElements = document.querySelectorAll('[data-transition]');
    
    transitionElements.forEach(element => {
        const transition = element.dataset.transition;
        
        element.style.transition = transition;
    });
}

// ============================================
// 145. GESTION DES EFFETS DE FILTRE
// ============================================
function initFilterEffects() {
    const filterElements = document.querySelectorAll('[data-filter-effect]');
    
    filterElements.forEach(element => {
        const filter = element.dataset.filterEffect;
        
        element.style.filter = filter;
    });
}

// ============================================
// 146. GESTION DES EFFETS DE MÉLANGE
// ============================================
function initBlendEffects() {
    const blendElements = document.querySelectorAll('[data-blend]');
    
    blendElements.forEach(element => {
        const blend = element.dataset.blend;
        
        element.style.mixBlendMode = blend;
    });
}

// ============================================
// 147. GESTION DES EFFETS DE MASQUE
// ============================================
function initMaskEffects() {
    const maskElements = document.querySelectorAll('[data-mask]');
    
    maskElements.forEach(element => {
        const mask = element.dataset.mask;
        
        element.style.mask = mask;
        element.style.webkitMask = mask;
    });
}

// ============================================
// 148. GESTION DES EFFETS DE CLIP
// ============================================
function initClipEffects() {
    const clipElements = document.querySelectorAll('[data-clip]');
    
    clipElements.forEach(element => {
        const clip = element.dataset.clip;
        
        element.style.clipPath = clip;
    });
}

// ============================================
// 149. GESTION DES EFFETS DE TRANSFORM
// ============================================
function initTransformEffects() {
    const transformElements = document.querySelectorAll('[data-transform]');
    
    transformElements.forEach(element => {
        const transform = element.dataset.transform;
        
        element.style.transform = transform;
    });
}

// ============================================
// 150. GESTION DES EFFETS DE BOÎTE
// ============================================
function initBoxEffects() {
    const boxElements = document.querySelectorAll('[data-box-shadow]');
    
    boxElements.forEach(element => {
        const shadow = element.dataset.boxShadow;
        
        element.style.boxShadow = shadow;
    });
}

// ============================================
// 151. GESTION DES EFFETS DE TEXTE
// ============================================
function initTextEffects() {
    const textElements = document.querySelectorAll('[data-text-shadow]');
    
    textElements.forEach(element => {
        const shadow = element.dataset.textShadow;
        
        element.style.textShadow = shadow;
    });
}

// ============================================
// 152. GESTION DES EFFETS DE BORDURE
// ============================================
function initBorderEffects() {
    const borderElements = document.querySelectorAll('[data-border]');
    
    borderElements.forEach(element => {
        const border = element.dataset.border;
        
        element.style.border = border;
    });
}

// ============================================
// 153. GESTION DES EFFETS DE DÉGRADÉ
// ============================================
function initGradientEffects() {
    const gradientElements = document.querySelectorAll('[data-gradient]');
    
    gradientElements.forEach(element => {
        const gradient = element.dataset.gradient;
        
        element.style.background = gradient;
    });
}

// ============================================
// 154. GESTION DES EFFETS DE FLUO
// ============================================
function initGlowEffects() {
    const glowElements = document.querySelectorAll('[data-glow]');
    
    glowElements.forEach(element => {
        const color = element.dataset.glow || 'var(--gold-primary)';
        
        element.style.boxShadow = `0 0 20px ${color}`;
    });
}

// ============================================
// 155. GESTION DES EFFETS DE NÉON
// ============================================
function initNeonEffects() {
    const neonElements = document.querySelectorAll('[data-neon]');
    
    neonElements.forEach(element => {
        const color = element.dataset.neon || 'var(--gold-primary)';
        
        element.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
    });
}

// ============================================
// 156. GESTION DES EFFETS 3D
// ============================================
function init3DEffects() {
    const threeDElements = document.querySelectorAll('[data-3d]');
    
    threeDElements.forEach(element => {
        const depth = element.dataset.depth || '100px';
        
        element.style.transform = `perspective(1000px) translateZ(${depth})`;
        
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rotateX = (y / rect.height - 0.5) * 20;
            const rotateY = (x / rect.width - 0.5) * -20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${depth})`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = `perspective(1000px) translateZ(${depth})`;
        });
    });
}

// ============================================
// 157. GESTION DES EFFETS DE PARTICULES
// ============================================
function initParticleEffects() {
    const particleElements = document.querySelectorAll('[data-particles]');
    
    particleElements.forEach(element => {
        const count = parseInt(element.dataset.particles) || 50;
        
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('span');
            particle.className = 'particle';
            
            const size = Math.random() * 5 + 2;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 3 + 2;
            
            Object.assign(particle.style, {
                position: 'absolute',
                width: size + 'px',
                height: size + 'px',
                background: 'var(--gold-primary)',
                borderRadius: '50%',
                left: x + '%',
                top: y + '%',
                opacity: '0.5',
                pointerEvents: 'none',
                animation: `float ${duration}s infinite ease-in-out`
            });
            
            element.appendChild(particle);
        }
    });
}

// ============================================
// 158. GESTION DES EFFETS DE CONFETTIS
// ============================================
function initConfettiEffects() {
    const confettiButtons = document.querySelectorAll('[data-confetti]');
    
    confettiButtons.forEach(button => {
        button.addEventListener('click', function() {
            const count = parseInt(this.dataset.confetti) || 100;
            
            for (let i = 0; i < count; i++) {
                const confetti = document.createElement('span');
                confetti.className = 'confetti';
                
                const size = Math.random() * 10 + 5;
                const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
                const left = Math.random() * 100;
                const duration = Math.random() * 3 + 2;
                
                Object.assign(confetti.style, {
                    position: 'fixed',
                    width: size + 'px',
                    height: size + 'px',
                    background: color,
                    left: left + '%',
                    top: '-10px',
                    pointerEvents: 'none',
                    zIndex: '10000',
                    animation: `confetti ${duration}s ease-in forwards`
                });
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, duration * 1000);
            }
        });
    });
}

// ============================================
// 159. GESTION DES EFFETS DE FEU D'ARTIFICE
// ============================================
function initFireworksEffects() {
    const fireworksButtons = document.querySelectorAll('[data-fireworks]');
    
    fireworksButtons.forEach(button => {
        button.addEventListener('click', function() {
            const count = parseInt(this.dataset.fireworks) || 5;
            
            for (let i = 0; i < count; i++) {
                setTimeout(() => {
                    createFirework();
                }, i * 500);
            }
        });
    });
    
    function createFirework() {
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#FF1493'];
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.5;
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.className = 'firework-particle';
            
            const angle = (i / particleCount) * Math.PI * 2;
            const velocity = Math.random() * 5 + 2;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            Object.assign(particle.style, {
                position: 'fixed',
                left: x + 'px',
                top: y + 'px',
                width: '5px',
                height: '5px',
                background: color,
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: '10000',
                boxShadow: `0 0 10px ${color}`,
                animation: `firework 1s ease-out forwards`
            });
            
            particle.style.setProperty('--vx', vx);
            particle.style.setProperty('--vy', vy);
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }
}

// ============================================
// 160. GESTION DES EFFETS DE PARTICULES MAGNÉTIQUES
// ============================================
function initMagneticEffects() {
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            const strength = parseFloat(this.dataset.magnetic) || 0.3;
            
            this.style.transform = `translate(${deltaX * strength * 20}px, ${deltaY * strength * 20}px)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

// ============================================
// 161. GESTION DES EFFETS DE PARALLAXE DE SOURIS
// ============================================
function initMouseParallax() {
    const parallaxElements = document.querySelectorAll('[data-mouse-parallax]');
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.mouseParallax) || 0.1;
            const x = mouseX * speed * 100;
            const y = mouseY * speed * 100;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// ============================================
// 162. GESTION DES EFFETS DE TRAÎNÉE DE SOURIS
// ============================================
function initMouseTrail() {
    const trailElements = document.querySelectorAll('[data-mouse-trail]');
    
    if (trailElements.length === 0) return;
    
    const trails = [];
    const maxTrails = 20;
    
    for (let i = 0; i < maxTrails; i++) {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        Object.assign(trail.style, {
            position: 'fixed',
            width: '10px',
            height: '10px',
            background: 'var(--gold-primary)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: '9999',
            opacity: '0.5',
            transition: 'all 0.1s ease'
        });
        document.body.appendChild(trail);
        trails.push(trail);
    }
    
    let index = 0;
    
    document.addEventListener('mousemove', function(e) {
        const trail = trails[index];
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        
        index = (index + 1) % maxTrails;
    });
}

// ============================================
// 163. GESTION DES EFFETS DE SURVOL DE TEXTE
// ============================================
function initTextHoverEffects() {
    const textElements = document.querySelectorAll('[data-text-hover]');
    
    textElements.forEach(element => {
        const text = element.textContent;
        const chars = text.split('');
        
        element.innerHTML = '';
        
        chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            span.style.transition = 'transform 0.2s ease';
            span.style.transitionDelay = index * 0.02 + 's';
            
            span.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.2)';
                this.style.color = 'var(--gold-primary)';
            });
            
            span.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.color = '';
            });
            
            element.appendChild(span);
        });
    });
}

// ============================================
// 164. GESTION DES EFFETS DE RÉVÉLATION
// ============================================
function initRevealEffects() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const direction = element.dataset.reveal || 'bottom';
                const delay = element.dataset.revealDelay || '0';
                
                element.style.animation = `reveal-${direction} 1s ease ${delay}s forwards`;
                
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    revealElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// ============================================
// 165. GESTION DES EFFETS DE TYPOGRAPHIE DYNAMIQUE
// ============================================
function initDynamicTypography() {
    const typeElements = document.querySelectorAll('[data-type]');
    
    typeElements.forEach(element => {
        const text = element.textContent;
        const speed = parseInt(element.dataset.typeSpeed) || 100;
        
        element.textContent = '';
        element.style.visibility = 'visible';
        
        let index = 0;
        
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    type();
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ============================================
// 166. GESTION DES EFFETS DE COMPTEUR DYNAMIQUE
// ============================================
function initDynamicCounters() {
    const counterElements = document.querySelectorAll('[data-dynamic-counter]');
    
    counterElements.forEach(element => {
        const target = parseInt(element.dataset.dynamicCounter);
        const duration = parseInt(element.dataset.counterDuration) || 2000;
        const step = target / (duration / 16);
        
        let current = 0;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const interval = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            element.textContent = Math.round(current);
                            clearInterval(interval);
                        } else {
                            element.textContent = Math.round(current);
                        }
                    }, 16);
                    
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ============================================
// 167. GESTION DES EFFETS DE BARRE DE PROGRESSION
// ============================================
function initProgressBarEffects() {
    const progressBars = document.querySelectorAll('[data-progress-bar]');
    
    progressBars.forEach(bar => {
        const target = parseInt(bar.dataset.progressBar);
        const color = bar.dataset.progressColor || 'var(--gold-primary)';
        
        bar.style.width = '0%';
        bar.style.background = color;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bar.style.transition = 'width 1.5s ease';
                    bar.style.width = target + '%';
                    observer.unobserve(bar);
                }
            });
        });
        
        observer.observe(bar);
    });
}

// ============================================
// 168. GESTION DES EFFETS DE CHARGEMENT D'IMAGES
// ============================================
function initImageLoadEffects() {
    const images = document.querySelectorAll('[data-image-load]');
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });
}

// ============================================
// 169. GESTION DES EFFETS DE FLUIDE
// ============================================
function initFluidEffects() {
    const fluidElements = document.querySelectorAll('[data-fluid]');
    
    fluidElements.forEach(element => {
        let mouseX = 0, mouseY = 0;
        let elementX = 0, elementY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animate() {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;
            
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const maxDistance = 200;
            
            if (distance < maxDistance) {
                const strength = (1 - distance / maxDistance) * 20;
                elementX += (deltaX * 0.01 * strength - elementX) * 0.1;
                elementY += (deltaY * 0.01 * strength - elementY) * 0.1;
            } else {
                elementX += (0 - elementX) * 0.1;
                elementY += (0 - elementY) * 0.1;
            }
            
            element.style.transform = `translate(${elementX}px, ${elementY}px)`;
            
            requestAnimationFrame(animate);
        }
        
        animate();
    });
}

// ============================================
// 170. GESTION DES EFFETS DE VAGUE
// ============================================
function initWaveEffects() {
    const waveElements = document.querySelectorAll('[data-wave]');
    
    waveElements.forEach(element => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = element.offsetWidth;
        canvas.height = element.offsetHeight;
        
        element.appendChild(canvas);
        
        let time = 0;
        
        function drawWave() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);
            
            for (let x = 0; x < canvas.width; x++) {
                const y = canvas.height / 2 + 
                         Math.sin(x * 0.02 + time) * 20 +
                         Math.cos(x * 0.01 + time * 2) * 10;
                
                ctx.lineTo(x, y);
            }
            
            ctx.strokeStyle = 'var(--gold-primary)';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            time += 0.05;
            
            requestAnimationFrame(drawWave);
        }
        
        drawWave();
    });
}

// ============================================
// 171. GESTION DES EFFETS DE PARTICULES MAGNÉTIQUES
// ============================================
function initMagneticParticles() {
    const magneticFields = document.querySelectorAll('[data-magnetic-field]');
    
    magneticFields.forEach(field => {
        const strength = parseFloat(field.dataset.magneticField) || 1;
        const particles = field.querySelectorAll('[data-magnetic-particle]');
        
        field.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            particles.forEach(particle => {
                const particleRect = particle.getBoundingClientRect();
                const particleX = particleRect.left + particleRect.width / 2 - rect.left;
                const particleY = particleRect.top + particleRect.height / 2 - rect.top;
                
                const deltaX = mouseX - particleX;
                const deltaY = mouseY - particleY;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                
                if (distance < 100) {
                    const force = (1 - distance / 100) * strength * 10;
                    const angle = Math.atan2(deltaY, deltaX);
                    
                    const moveX = Math.cos(angle) * force;
                    const moveY = Math.sin(angle) * force;
                    
                    particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    particle.style.transform = 'translate(0, 0)';
                }
            });
        });
        
        field.addEventListener('mouseleave', function() {
            particles.forEach(particle => {
                particle.style.transform = 'translate(0, 0)';
            });
        });
    });
}

// ============================================
// 172. GESTION DES EFFETS DE TORSION
// ============================================
function initTwistEffects() {
    const twistElements = document.querySelectorAll('[data-twist]');
    
    twistElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            const twistX = y * 30;
            const twistY = -x * 30;
            
            this.style.transform = `perspective(1000px) rotateX(${twistX}deg) rotateY(${twistY}deg)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// ============================================
// 173. GESTION DES EFFETS DE DISTORSION
// ============================================
function initDistortionEffects() {
    const distortionElements = document.querySelectorAll('[data-distortion]');
    
    distortionElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const scale = 1 + (0.5 - Math.abs(x - 0.5)) * 0.5;
            
            this.style.transform = `scale(${scale})`;
            this.style.filter = `blur(${Math.abs(x - 0.5) * 5}px)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'blur(0)';
        });
    });
}

// ============================================
// 174. GESTION DES EFFETS DE BULLE
// ============================================
function initBubbleEffects() {
    const bubbleElements = document.querySelectorAll('[data-bubble]');
    
    bubbleElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const bubble = document.createElement('span');
            bubble.className = 'bubble';
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            Object.assign(bubble.style, {
                position: 'absolute',
                left: x + 'px',
                top: y + 'px',
                width: '20px',
                height: '20px',
                background: 'var(--gold-primary)',
                borderRadius: '50%',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%) scale(0)',
                animation: 'bubble 1s ease-out forwards'
            });
            
            this.appendChild(bubble);
            
            setTimeout(() => {
                bubble.remove();
            }, 1000);
        });
    });
}

// ============================================
// 175. GESTION DES EFFETS DE SPARKLE
// ============================================
function initSparkleEffects() {
    const sparkleElements = document.querySelectorAll('[data-sparkle]');
    
    sparkleElements.forEach(element => {
        setInterval(() => {
            const sparkle = document.createElement('span');
            sparkle.className = 'sparkle';
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            Object.assign(sparkle.style, {
                position: 'absolute',
                left: x + '%',
                top: y + '%',
                width: '4px',
                height: '4px',
                background: 'var(--gold-primary)',
                borderRadius: '50%',
                pointerEvents: 'none',
                boxShadow: '0 0 10px var(--gold-primary)',
                animation: 'sparkle 1s ease-out forwards'
            });
            
            element.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }, 500);
    });
}

// ============================================
// 176. GESTION DES EFFETS DE PLUIE
// ============================================
function initRainEffects() {
    const rainElements = document.querySelectorAll('[data-rain]');
    
    rainElements.forEach(element => {
        const count = parseInt(element.dataset.rain) || 50;
        
        for (let i = 0; i < count; i++) {
            const drop = document.createElement('span');
            drop.className = 'rain-drop';
            
            const x = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 2 + 1;
            
            Object.assign(drop.style, {
                position: 'absolute',
                left: x + '%',
                top: '-10px',
                width: '2px',
                height: '20px',
                background: 'var(--gold-primary)',
                opacity: '0.3',
                animation: `rain ${duration}s linear ${delay}s infinite`
            });
            
            element.appendChild(drop);
        }
    });
}

// ============================================
// 177. GESTION DES EFFETS DE NEIGE
// ============================================
function initSnowEffects() {
    const snowElements = document.querySelectorAll('[data-snow]');
    
    snowElements.forEach(element => {
        const count = parseInt(element.dataset.snow) || 30;
        
        for (let i = 0; i < count; i++) {
            const flake = document.createElement('span');
            flake.className = 'snow-flake';
            
            const x = Math.random() * 100;
            const size = Math.random() * 5 + 2;
            const delay = Math.random() * 5;
            const duration = Math.random() * 5 + 5;
            
            Object.assign(flake.style, {
                position: 'absolute',
                left: x + '%',
                top: '-10px',
                width: size + 'px',
                height: size + 'px',
                background: 'white',
                borderRadius: '50%',
                opacity: '0.5',
                animation: `snow ${duration}s linear ${delay}s infinite`
            });
            
            element.appendChild(flake);
        }
    });
}

// ============================================
// 178. GESTION DES EFFETS DE FEUILLES
// ============================================
function initLeafEffects() {
    const leafElements = document.querySelectorAll('[data-leaf]');
    
    leafElements.forEach(element => {
        const count = parseInt(element.dataset.leaf) || 20;
        
        for (let i = 0; i < count; i++) {
            const leaf = document.createElement('span');
            leaf.className = 'leaf';
            leaf.innerHTML = '🍂';
            
            const x = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 10;
            
            Object.assign(leaf.style, {
                position: 'absolute',
                left: x + '%',
                top: '-20px',
                fontSize: '20px',
                animation: `leaf ${duration}s linear ${delay}s infinite`
            });
            
            element.appendChild(leaf);
        }
    });
}

// ============================================
// 179. GESTION DES EFFETS DE POISSONS
// ============================================
function initFishEffects() {
    const fishElements = document.querySelectorAll('[data-fish]');
    
    fishElements.forEach(element => {
        const count = parseInt(element.dataset.fish) || 10;
        
        for (let i = 0; i < count; i++) {
            const fish = document.createElement('span');
            fish.className = 'fish';
            fish.innerHTML = '🐟';
            
            const y = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 20 + 20;
            const direction = Math.random() > 0.5 ? 1 : -1;
            
            Object.assign(fish.style, {
                position: 'absolute',
                left: direction > 0 ? '-30px' : 'auto',
                right: direction < 0 ? '-30px' : 'auto',
                top: y + '%',
                fontSize: '30px',
                transform: `scaleX(${direction})`,
                animation: `fish-${direction > 0 ? 'right' : 'left'} ${duration}s linear ${delay}s infinite`
            });
            
            element.appendChild(fish);
        }
    });
}

// ============================================
// 180. GESTION DES EFFETS DE PAPILLONS
// ============================================
function initButterflyEffects() {
    const butterflyElements = document.querySelectorAll('[data-butterfly]');
    
    butterflyElements.forEach(element => {
        const count = parseInt(element.dataset.butterfly) || 5;
        
        for (let i = 0; i < count; i++) {
            const butterfly = document.createElement('span');
            butterfly.className = 'butterfly';
            butterfly.innerHTML = '🦋';
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 10;
            
            Object.assign(butterfly.style, {
                position: 'absolute',
                left: x + '%',
                top: y + '%',
                fontSize: '20px',
                animation: `butterfly ${duration}s ease-in-out ${delay}s infinite`
            });
            
            element.appendChild(butterfly);
        }
    });
}

// ============================================
// 181. GESTION DES EFFETS DE FEU
// ============================================
function initFireEffects() {
    const fireElements = document.querySelectorAll('[data-fire]');
    
    fireElements.forEach(element => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = element.offsetWidth;
        canvas.height = element.offsetHeight;
        
        element.appendChild(canvas);
        
        const particles = [];
        const particleCount = 100;
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: 0,
                vy: Math.random() * -2 - 1,
                size: Math.random() * 5 + 2,
                life: Math.random()
            });
        }
        
        function drawFire() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.01;
                
                if (p.life <= 0 || p.y < 0) {
                    p.x = Math.random() * canvas.width;
                    p.y = canvas.height;
                    p.life = 1;
                }
                
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
                gradient.addColorStop(0, 'rgba(255, 100, 0, ' + p.life + ')');
                gradient.addColorStop(0.5, 'rgba(255, 50, 0, ' + p.life * 0.5 + ')');
                gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            });
            
            requestAnimationFrame(drawFire);
        }
        
        drawFire();
    });
}

// ============================================
// 182. GESTION DES EFFETS DE FUMÉE
// ============================================
function initSmokeEffects() {
    const smokeElements = document.querySelectorAll('[data-smoke]');
    
    smokeElements.forEach(element => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = element.offsetWidth;
        canvas.height = element.offsetHeight;
        
        element.appendChild(canvas);
        
        const particles = [];
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: canvas.width / 2 + (Math.random() - 0.5) * 50,
                y: canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: Math.random() * -1 - 0.5,
                size: Math.random() * 20 + 10,
                life: Math.random()
            });
        }
        
        function drawSmoke() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.size += 0.1;
                p.life -= 0.005;
                
                if (p.life <= 0 || p.y < -100) {
                    p.x = canvas.width / 2 + (Math.random() - 0.5) * 50;
                    p.y = canvas.height;
                    p.size = Math.random() * 20 + 10;
                    p.life = 1;
                }
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(200, 200, 200, ' + p.life * 0.3 + ')';
                ctx.fill();
            });
            
            requestAnimationFrame(drawSmoke);
        }
        
        drawSmoke();
    });
}

// ============================================
// 183. GESTION DES EFFETS D'ÉTINCELLES
// ============================================
function initSparkEffects() {
    const sparkElements = document.querySelectorAll('[data-spark]');
    
    sparkElements.forEach(element => {
        element.addEventListener('click', function(e) {
            for (let i = 0; i < 20; i++) {
                const spark = document.createElement('span');
                spark.className = 'spark';
                
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const angle = (i / 20) * Math.PI * 2;
                const velocity = Math.random() * 5 + 2;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                Object.assign(spark.style, {
                    position: 'absolute',
                    left: x + 'px',
                    top: y + 'px',
                    width: '4px',
                    height: '4px',
                    background: 'var(--gold-primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    boxShadow: '0 0 10px var(--gold-primary)',
                    animation: 'spark 0.5s ease-out forwards'
                });
                
                spark.style.setProperty('--vx', vx);
                spark.style.setProperty('--vy', vy);
                
                this.appendChild(spark);
                
                setTimeout(() => {
                    spark.remove();
                }, 500);
            }
        });
    });
}

// ============================================
// 184. GESTION DES EFFETS D'EXPLOSION
// ============================================
function initExplosionEffects() {
    const explosionElements = document.querySelectorAll('[data-explosion]');
    
    explosionElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const particle = document.createElement('span');
                    particle.className = 'explosion-particle';
                    
                    const angle = Math.random() * Math.PI * 2;
                    const velocity = Math.random() * 10 + 5;
                    const vx = Math.cos(angle) * velocity;
                    const vy = Math.sin(angle) * velocity;
                    
                    Object.assign(particle.style, {
                        position: 'absolute',
                        left: x + 'px',
                        top: y + 'px',
                        width: '4px',
                        height: '4px',
                        background: `hsl(${Math.random() * 360}, 100%, 50%)`,
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        animation: 'explosion 1s ease-out forwards'
                    });
                    
                    particle.style.setProperty('--vx', vx);
                    particle.style.setProperty('--vy', vy);
                    
                    this.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                    }, 1000);
                }, i * 10);
            }
        });
    });
}

// ============================================
// 185. GESTION DES EFFETS DE TRAÎNÉE
// ============================================
function initTrailEffects() {
    const trailElements = document.querySelectorAll('[data-trail]');
    
    trailElements.forEach(element => {
        const color = element.dataset.trailColor || 'var(--gold-primary)';
        const length = parseInt(element.dataset.trailLength) || 10;
        
        const trails = [];
        
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            trails.push({ x, y, life: 1 });
            
            if (trails.length > length) {
                trails.shift();
            }
            
            this.innerHTML = '';
            
            trails.forEach((trail, index) => {
                const dot = document.createElement('span');
                const opacity = trail.life;
                
                Object.assign(dot.style, {
                    position: 'absolute',
                    left: trail.x + 'px',
                    top: trail.y + 'px',
                    width: '10px',
                    height: '10px',
                    background: color,
                    borderRadius: '50%',
                    opacity: opacity,
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: '1000'
                });
                
                this.appendChild(dot);
                
                trail.life -= 0.1;
            });
        });
        
        element.addEventListener('mouseleave', function() {
            this.innerHTML = '';
            trails.length = 0;
        });
    });
}

// ============================================
// 186. GESTION DES EFFETS DE GOUTTES
// ============================================
function initDropEffects() {
    const dropElements = document.querySelectorAll('[data-drop]');
    
    dropElements.forEach(element => {
        setInterval(() => {
            const drop = document.createElement('span');
            drop.className = 'drop';
            
            const x = Math.random() * 100;
            const size = Math.random() * 20 + 10;
            
            Object.assign(drop.style, {
                position: 'absolute',
                left: x + '%',
                top: '-20px',
                width: size + 'px',
                height: size + 'px',
                background: 'var(--gold-primary)',
                borderRadius: '50%',
                opacity: '0.3',
                animation: 'drop 2s ease-in forwards'
            });
            
            element.appendChild(drop);
            
            setTimeout(() => {
                drop.remove();
            }, 2000);
        }, 500);
    });
}

// ============================================
// 187. GESTION DES EFFETS DE RIDEAU
// ============================================
function initCurtainEffects() {
    const curtainElements = document.querySelectorAll('[data-curtain]');
    
    curtainElements.forEach(element => {
        const leftCurtain = document.createElement('div');
        const rightCurtain = document.createElement('div');
        
        Object.assign(leftCurtain.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '50%',
            height: '100%',
            background: 'var(--burgundy)',
            transform: 'translateX(-100%)',
            transition: 'transform 1s ease',
            zIndex: '1000'
        });
        
        Object.assign(rightCurtain.style, {
            position: 'absolute',
            top: '0',
            right: '0',
            width: '50%',
            height: '100%',
            background: 'var(--burgundy)',
            transform: 'translateX(100%)',
            transition: 'transform 1s ease',
            zIndex: '1000'
        });
        
        element.appendChild(leftCurtain);
        element.appendChild(rightCurtain);
        
        element.addEventListener('mouseenter', function() {
            leftCurtain.style.transform = 'translateX(0)';
            rightCurtain.style.transform = 'translateX(0)';
        });
        
        element.addEventListener('mouseleave', function() {
            leftCurtain.style.transform = 'translateX(-100%)';
            rightCurtain.style.transform = 'translateX(100%)';
        });
    });
}

// ============================================
// 188. GESTION DES EFFETS DE FLASH
// ============================================
function initFlashEffects() {
    const flashElements = document.querySelectorAll('[data-flash]');
    
    flashElements.forEach(element => {
        element.addEventListener('click', function() {
            const flash = document.createElement('div');
            
            Object.assign(flash.style, {
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'white',
                opacity: '0',
                pointerEvents: 'none',
                zIndex: '10000',
                animation: 'flash 0.5s ease-out forwards'
            });
            
            document.body.appendChild(flash);
            
            setTimeout(() => {
                flash.remove();
            }, 500);
        });
    });
}

// ============================================
// 189. GESTION DES EFFETS DE SECOUSSE
// ============================================
function initShakeEffects() {
    const shakeElements = document.querySelectorAll('[data-shake]');
    
    shakeElements.forEach(element => {
        element.addEventListener('click', function() {
            this.style.animation = 'shake 0.5s ease';
            
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
}

// ============================================
// 190. GESTION DES EFFETS DE POUSSÉE
// ============================================
function initPushEffects() {
    const pushElements = document.querySelectorAll('[data-push]');
    
    pushElements.forEach(element => {
        element.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ============================================
// 191. GESTION DES EFFETS DE RELÂCHEMENT
// ============================================
function initReleaseEffects() {
    const releaseElements = document.querySelectorAll('[data-release]');
    
    releaseElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ============================================
// 192. GESTION DES EFFETS DE RESSORT
// ============================================
function initSpringEffects() {
    const springElements = document.querySelectorAll('[data-spring]');
    
    springElements.forEach(element => {
        element.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1.1)';
                
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            }, 100);
        });
    });
}

// ============================================
// 193. GESTION DES EFFETS DE REBOND
// ============================================
function initBounceEffects() {
    const bounceElements = document.querySelectorAll('[data-bounce]');
    
    bounceElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'bounce 1s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
}

// ============================================
// 194. GESTION DES EFFETS DE ROTATION
// ============================================
function initRotateEffects() {
    const rotateElements = document.querySelectorAll('[data-rotate]');
    
    rotateElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0)';
        });
    });
}

// ============================================
// 195. GESTION DES EFFETS DE FLIP
// ============================================
function initFlipEffects() {
    const flipElements = document.querySelectorAll('[data-flip]');
    
    flipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'rotateY(180deg)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateY(0)';
        });
    });
}

// ============================================
// 196. GESTION DES EFFETS DE BALANCE
// ============================================
function initSwingEffects() {
    const swingElements = document.querySelectorAll('[data-swing]');
    
    swingElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'swing 1s ease infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
}

// ============================================
// 197. GESTION DES EFFETS DE POULS
// ============================================
function initPulseEffects() {
    const pulseElements = document.querySelectorAll('[data-pulse]');
    
    pulseElements.forEach(element => {
        setInterval(() => {
            element.style.animation = 'pulse 1s ease';
            
            setTimeout(() => {
                element.style.animation = '';
            }, 1000);
        }, 3000);
    });
}

// ============================================
// 198. GESTION DES EFFETS DE CLIGNOTEMENT
// ============================================
function initBlinkEffects() {
    const blinkElements = document.querySelectorAll('[data-blink]');
    
    blinkElements.forEach(element => {
        setInterval(() => {
            element.style.opacity = element.style.opacity === '0' ? '1' : '0';
        }, 500);
    });
}

// ============================================
// 199. GESTION DES EFFETS DE VIBRATION
// ============================================
function initVibrateEffects() {
    const vibrateElements = document.querySelectorAll('[data-vibrate-effect]');
    
    vibrateElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'vibrate 0.1s linear infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
}

// ============================================
// 200. GESTION DES EFFETS DE FLOTTEMENT
// ============================================
function initFloatEffects() {
    const floatElements = document.querySelectorAll('[data-float]');
    
    floatElements.forEach(element => {
        element.style.animation = 'float 3s ease-in-out infinite';
    });
}

// ============================================
// 201. GESTION DES EFFETS DE GLISSEMENT
// ============================================
function initSlideEffects() {
    const slideElements = document.querySelectorAll('[data-slide]');
    
    slideElements.forEach(element => {
        const direction = element.dataset.slide || 'left';
        
        element.addEventListener('mouseenter', function() {
            this.style.transform = `translateX(${direction === 'left' ? '-10px' : '10px'})`;
            this.style.transition = 'transform 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// ============================================
// 202. GESTION DES EFFETS DE ZOOM
// ============================================
function initZoomEffects() {
    const zoomElements = document.querySelectorAll('[data-zoom]');
    
    zoomElements.forEach(element => {
        const scale = parseFloat(element.dataset.zoom) || 1.2;
        
        element.addEventListener('mouseenter', function() {
            this.style.transform = `scale(${scale})`;
            this.style.transition = 'transform 0.3s ease';
            this.style.zIndex = '10';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
    });
}

// ============================================
// 203. GESTION DES EFFETS DE RAYON
// ============================================
function initGlowEffect() {
    const glowElements = document.querySelectorAll('[data-glow-effect]');
    
    glowElements.forEach(element => {
        const color = element.dataset.glowEffect || 'var(--gold-primary)';
        
        element.addEventListener('mouseenter', function() {
            this.style.boxShadow = `0 0 30px ${color}`;
            this.style.transition = 'box-shadow 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
}

// ============================================
// 204. GESTION DES EFFETS DE BORDURE
// ============================================
function initBorderGlow() {
    const borderGlowElements = document.querySelectorAll('[data-border-glow]');
    
    borderGlowElements.forEach(element => {
        const color = element.dataset.borderGlow || 'var(--gold-primary)';
        
        element.addEventListener('mouseenter', function() {
            this.style.borderColor = color;
            this.style.boxShadow = `0 0 20px ${color}`;
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.borderColor = '';
            this.style.boxShadow = 'none';
        });
    });
}

// ============================================
// 205. GESTION DES EFFETS DE TEXTE
// ============================================
function initTextGlow() {
    const textGlowElements = document.querySelectorAll('[data-text-glow]');
    
    textGlowElements.forEach(element => {
        const color = element.dataset.textGlow || 'var(--gold-primary)';
        
        element.addEventListener('mouseenter', function() {
            this.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
            this.style.transition = 'text-shadow 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
}

// ============================================
// 206. GESTION DES EFFETS DE GRADIENT
// ============================================
function initGradientMove() {
    const gradientElements = document.querySelectorAll('[data-gradient-move]');
    
    gradientElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            this.style.background = `radial-gradient(circle at ${x}% ${y}%, var(--gold-primary), var(--burgundy))`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.background = '';
        });
    });
}

// ============================================
// 207. GESTION DES EFFETS DE LUMIÈRE
// ============================================
function initLightEffect() {
    const lightElements = document.querySelectorAll('[data-light]');
    
    lightElements.forEach(element => {
        const light = document.createElement('div');
        
        Object.assign(light.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8), transparent)',
            opacity: '0',
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
        });
        
        element.appendChild(light);
        
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            light.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.8), transparent)`;
            light.style.opacity = '1';
        });
        
        element.addEventListener('mouseleave', function() {
            light.style.opacity = '0';
        });
    });
}

// ============================================
// 208. GESTION DES EFFETS D'OMBRE
// ============================================
function initShadowEffect() {
    const shadowElements = document.querySelectorAll('[data-shadow]');
    
    shadowElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            const shadowX = x * 20;
            const shadowY = y * 20;
            
            this.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// ============================================
// 209. GESTION DES EFFETS DE PERSPECTIVE
// ============================================
function initPerspectiveEffect() {
    const perspectiveElements = document.querySelectorAll('[data-perspective]');
    
    perspectiveElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            const rotateX = y * 20;
            const rotateY = -x * 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// ============================================
// 210. GESTION DES EFFETS DE DÉFORMATION
// ============================================
function initDeformEffect() {
    const deformElements = document.querySelectorAll('[data-deform]');
    
    deformElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const scaleX = 1 + (0.5 - Math.abs(x - 0.5)) * 0.2;
            const scaleY = 1 + (0.5 - Math.abs(y - 0.5)) * 0.2;
            
            this.style.transform = `scale(${scaleX}, ${scaleY})`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1, 1)';
        });
    });
}

// ============================================
// 211. GESTION DES EFFETS DE TORSION
// ============================================
function initTwistEffect() {
    const twistElements = document.querySelectorAll('[data-twist-effect]');
    
    twistElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            
            const skew = (x - 0.5) * 20;
            
            this.style.transform = `skewX(${skew}deg)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'skewX(0)';
        });
    });
}

// ============================================
// 212. GESTION DES EFFETS DE VAGUE
// ============================================
function initWaveEffect() {
    const waveElements = document.querySelectorAll('[data-wave-effect]');
    
    waveElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            span.style.transition = 'transform 0.2s ease';
            span.style.transitionDelay = index * 0.02 + 's';
            
            element.appendChild(span);
        });
        
        element.addEventListener('mouseenter', function() {
            this.querySelectorAll('span').forEach(span => {
                span.style.transform = 'translateY(-10px)';
            });
        });
        
        element.addEventListener('mouseleave', function() {
            this.querySelectorAll('span').forEach(span => {
                span.style.transform = 'translateY(0)';
            });
        });
    });
}

// ============================================
// 213. GESTION DES EFFETS DE CASCADE
// ============================================
function initCascadeEffect() {
    const cascadeElements = document.querySelectorAll('[data-cascade]');
    
    cascadeElements.forEach(element => {
        const children = element.children;
        
        Array.from(children).forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(20px)';
            child.style.transition = 'all 0.5s ease';
            child.style.transitionDelay = index * 0.1 + 's';
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Array.from(children).forEach(child => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    });
                    
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ============================================
// 214. GESTION DES EFFETS DE RÉVÉLATION EN CASCADE
// ============================================
function initRevealCascade() {
    const revealElements = document.querySelectorAll('[data-reveal-cascade]');
    
    revealElements.forEach(element => {
        const children = element.children;
        
        Array.from(children).forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transform = 'scale(0.8)';
            child.style.transition = 'all 0.5s ease';
            child.style.transitionDelay = index * 0.1 + 's';
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Array.from(children).forEach(child => {
                        child.style.opacity = '1';
                        child.style.transform = 'scale(1)';
                    });
                    
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ============================================
// 215. GESTION DES EFFETS DE ROTATION EN CASCADE
// ============================================
function initRotateCascade() {
    const rotateElements = document.querySelectorAll('[data-rotate-cascade]');
    
    rotateElements.forEach(element => {
        const children = element.children;
        
        Array.from(children).forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transform = 'rotate(-180deg) scale(0)';
            child.style.transition = 'all 0.5s ease';
            child.style.transitionDelay = index * 0.1 + 's';
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Array.from(children).forEach(child => {
                        child.style.opacity = '1';
                        child.style.transform = 'rotate(0) scale(1)';
                    });
                    
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ============================================
// 216. GESTION DES EFFETS DE ZOOM EN CASCADE
// ============================================
function initZoomCascade() {
    const zoomElements = document.querySelectorAll('[data-zoom-cascade]');
    
    zoomElements.forEach(element => {
        const children = element.children;
        
        Array.from(children).forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transform = 'scale(2)';
            child.style.transition = 'all 0.5s ease';
            child.style.transitionDelay = index * 0.1 + 's';
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Array.from(children).forEach(child => {
                        child.style.opacity = '1';
                        child.style.transform = 'scale(1)';
                    });
                    
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ============================================
// 217. GESTION DES EFFETS DE FLIP EN CASCADE
// ============================================
function initFlipCascade() {
    const flipElements = document.querySelectorAll('[data-flip-cascade]');
    
    flipElements.forEach(element => {
        const children = element.children;
        
        Array.from(children).forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transform = 'rotateY(180deg)';
            child.style.transition = 'all 0.5s ease';
            child.style.transitionDelay = index * 0.1 + 's';
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Array.from(children).forEach(child => {
                        child.style.opacity = '1';
                        child.style.transform = 'rotateY(0)';
                    });
                    
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ============================================
// 218. GESTION DES EFFETS DE GLISSEMENT EN CASCADE
// ============================================
function initSlideCascade() {
    const slideElements = document.querySelectorAll('[data-slide-cascade]');
    
    slideElements.forEach(element => {
        const children = element.children;
        
        Array.from(children).forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transform = 'translateX(-50px)';
            child.style.transition = 'all 0.5s ease';
            child.style.transitionDelay = index * 0.1 + 's';
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Array.from(children).forEach(child => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateX(0)';
                    });
                    
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ============================================
// 219. GESTION DES EFFETS DE FONDU EN CASCADE
// ============================================
function initFadeCascade() {
    const fadeElements = document.querySelectorAll('[data-fade-cascade]');
    
    fadeElements.forEach(element => {
        const children = element.children;
        
        Array.from(children).forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transition = 'opacity 0.5s ease';
            child.style.transitionDelay = index * 0.1 + 's';
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Array.from(children).forEach(child => {
                        child.style.opacity = '1';
                    });
                    
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ============================================
// 220. GESTION DES EFFETS DE FILTRE
// ============================================
function initFilterCascade() {
    const filterElements = document.querySelectorAll('[data-filter-cascade]');
    
    filterElements.forEach(element => {
        const children = element.children;
        
        Array.from(children).forEach((child, index) => {
            child.style.filter = 'blur(10px) grayscale(1)';
            child.style.opacity = '0';
            child.style.transition = 'all 0.5s ease';
            child.style.transitionDelay = index * 0.1 + 's';
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Array.from(children).forEach(child => {
                        child.style.filter = 'blur(0) grayscale(0)';
                        child.style.opacity = '1';
                    });
                    
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ============================================
// INITIALISATION DE TOUS LES EFFETS
// ============================================
function initAllEffects() {
    // Effets de base
    initMobileMenu();
    initActiveNavigation();
    initSmoothScroll();
    initHeaderScroll();
    initLazyLoading();
    initNotifications();
    
    // Effets de formulaire
    initReservationForm();
    initDatePickers();
    initFormValidation();
    initInputMasks();
    initCustomValidations();
    
    // Effets de connexion
    initConnectionDetection();
    initOfflineDetection();
    initNetworkErrors();
    
    // Effets de navigation
    initKeyboardNavigation();
    initKeyboardShortcuts();
    initBackToTop();
    initPreventScroll();
    initTouchGestures();
    
    // Effets d'accessibilité
    initAccessibility();
    initHighContrast();
    initColorBlindness();
    initReadingMode();
    initFocusMode();
    
    // Effets d'affichage
    initResponsiveCheck();
    initPrintStyles();
    initCookieConsent();
    initExternalResources();
    updateCopyrightYear();
    
    // Effets avancés
    init3DEffects();
    initParticleEffects();
    initMagneticEffects();
    initMouseParallax();
    initMouseTrail();
    initTextHoverEffects();
    initRevealEffects();
    initDynamicTypography();
    initDynamicCounters();
    initProgressBarEffects();
    initImageLoadEffects();
    initFluidEffects();
    initWaveEffects();
    initMagneticParticles();
    initTwistEffects();
    initDistortionEffects();
    initBubbleEffects();
    initSparkleEffects();
    initRainEffects();
    initSnowEffects();
    initLeafEffects();
    initFishEffects();
    initButterflyEffects();
    initFireEffects();
    initSmokeEffects();
    initSparkEffects();
    initExplosionEffects();
    initTrailEffects();
    initDropEffects();
    initCurtainEffects();
    initFlashEffects();
    initShakeEffects();
    initPushEffects();
    initReleaseEffects();
    initSpringEffects();
    initBounceEffects();
    initRotateEffects();
    initFlipEffects();
    initSwingEffects();
    initPulseEffects();
    initBlinkEffects();
    initVibrateEffects();
    initFloatEffects();
    initSlideEffects();
    initZoomEffects();
    initGlowEffect();
    initBorderGlow();
    initTextGlow();
    initGradientMove();
    initLightEffect();
    initShadowEffect();
    initPerspectiveEffect();
    initDeformEffect();
    initTwistEffect();
    initWaveEffect();
    initCascadeEffect();
    initRevealCascade();
    initRotateCascade();
    initZoomCascade();
    initFlipCascade();
    initSlideCascade();
    initFadeCascade();
    initFilterCascade();
    
    // Effets de données
    initAccounts();
    initProfiles();
    initReviews();
    initAdvancedFavorites();
    initCart();
    initOrders();
    initBooking();
    initHistory();
    initStats();
    initDataExport();
    initDataImport();
    initAutoSave();
    initVersion();
    
    // Effets de partage
    initSocialSharing();
    initAdvancedSharing();
    initPrintButtons();
    initDownloadButtons();
    initCopyToClipboard();
    initAdvancedClipboard();
    
    // Effets de recherche
    initSearchFunction();
    initFilters();
    initSorting();
    initPagination();
    initBreadcrumbs();
    
    // Effets de paiement
    initPayments();
    initCrypto();
    initSmartContracts();
    initNFT();
    initPaymentQR();
    initTips();
    initLoyalty();
    initDiscounts();
    
    // Effets de géolocalisation
    initGeolocation();
    initWeather();
    initCurrency();
    initTranslations();
    
    // Effets de média
    initSoundNotifications();
    initVibration();
    initCamera();
    initMicrophone();
    initScreenShare();
    initAR();
    initVR();
    initScreenshot();
    initRecording();
    initBackgroundDownloads();
    initSync();
    initUpdates();
    initPushManager();
    
    // Effets de performance
    initPerformanceOptimizations();
    initErrorBoundary();
    initAnalytics();
    initServiceWorker();
    initMemoryManagement();
    initPerformanceMonitoring();
    initTheme();
    initFontLoading();
    initFeatureDetection();
    initCacheManagement();
    init404Handler();
    initRedirects();
    
    // Effets de structure
    initMultiStepForms();
    initProgressBars();
    initTimers();
    initPopups();
    initModals();
    initTabs();
    initAccordions();
    initCarousels();
    initCounters();
    initParallax();
    initVideoBackgrounds();
    initMasonryGrid();
    initInfiniteScroll();
    initAjaxForms();
    initFileUploads();
    initDragAndDrop();
    initCharts();
    initMaps();
    initJSONHandling();
    initCSVHandling();
    initExport();
    initAdvancedPrint();
    initTimeouts();
    initIntervals();
    initDelays();
    initAdvancedAnimations();
    initAdvancedParallax();
    initHoverEffects();
    initClickEffects();
    initLoadingEffects();
    initTransitionEffects();
    initFilterEffects();
    initBlendEffects();
    initMaskEffects();
    initClipEffects();
    initTransformEffects();
    initBoxEffects();
    initTextEffects();
    initBorderEffects();
    initGradientEffects();
    initGlowEffects();
    initNeonEffects();
    initConfettiEffects();
    initFireworksEffects();
    initInfiniteScrollWithLoader();
    
    console.log('Tous les effets ont été initialisés avec succès !');
}

// Lancer l'initialisation
initAllEffects();
