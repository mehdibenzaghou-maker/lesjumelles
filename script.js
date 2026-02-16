/* ============================================
   LES JUMELLES - SCRIPT PRINCIPAL OPTIMISÉ
   Version: 3.0 - Chargement toutes les 3 secondes
   ============================================ */

// ============================================
// VARIABLES GLOBALES
// ============================================
let isLoadingModel = false;
let modelQueue = [];
let loadedModelsCount = 0;
const LOAD_DELAY = 3000; // 3 secondes entre chaque modèle

// ============================================
// ATTENDRE QUE LE DOM SOIT PRÊT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Site Les Jumelles chargé avec succès !');
    console.log('⏱️  Chargement des modèles 3D toutes les 3 secondes');
    
    // Initialiser les fonctions
    initMobileMenu();
    initActiveNavigation();
    initReservationForm();
    initBackToTop();
    initDatePickers();
    initLazy3DModels(); // ← Chargement des modèles 3D
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
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    });

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
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        }
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
// 3. FORMULAIRE DE RÉSERVATION WHATSAPP
// ============================================
function initReservationForm() {
    const reservationForm = document.getElementById('reservationForm');
    if (!reservationForm) return;

    const whatsappNumber = '213770189910'; // Numéro WhatsApp du restaurant

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
        showNotification('Réservation envoyée avec succès !', 'success');
        reservationForm.reset();
        initDatePickers();
    });
}

// ============================================
// 4. NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    const oldNotif = document.querySelector('.notification');
    if (oldNotif) oldNotif.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    let bgColor = '#25D366';
    if (type === 'error') bgColor = '#ff4444';
    if (type === 'info') bgColor = '#C5A028';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
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
// 7. CHARGEMENT SÉQUENTIEL DES MODÈLES 3D (TOUTES LES 3 SECONDES)
// ============================================
function initLazy3DModels() {
    const modelViewers = document.querySelectorAll('model-viewer');
    
    if (!modelViewers.length) {
        console.log('Aucun modèle 3D trouvé sur cette page');
        return;
    }
    
    console.log(`📦 ${modelViewers.length} modèles 3D détectés`);
    console.log(`⏱️  Chargement programmé toutes les ${LOAD_DELAY/1000} secondes`);
    
    // Réinitialiser la file d'attente
    modelQueue = [];
    isLoadingModel = false;
    loadedModelsCount = 0;
    
    // Préparer la file d'attente
    modelViewers.forEach((viewer, index) => {
        if (viewer.hasAttribute('data-src')) {
            const src = viewer.getAttribute('data-src');
            modelQueue.push({
                element: viewer,
                src: src,
                index: index,
                loaded: false,
                wrapper: viewer.closest('.model-wrapper')
            });
            
            // S'assurer que l'attribut src est vide
            if (viewer.hasAttribute('src')) {
                viewer.removeAttribute('src');
            }
            
            // Ajouter un indicateur visuel
            addLoadingIndicator(viewer);
        }
    });
    
    // Démarrer le premier chargement après 1 seconde
    setTimeout(() => {
        loadNextModelInQueue();
    }, 1000);
    
    // Surveiller le scroll pour charger au fur et à mesure
    window.addEventListener('scroll', function() {
        if (!isLoadingModel) {
            loadNextModelInQueue();
        }
    });
}

// ============================================
// AJOUTER UN INDICATEUR DE CHARGEMENT
// ============================================
function addLoadingIndicator(viewer) {
    const wrapper = viewer.closest('.model-wrapper');
    if (!wrapper) return;
    
    // Créer un indicateur s'il n'existe pas déjà
    if (!wrapper.querySelector('.loading-timer')) {
        const indicator = document.createElement('div');
        indicator.className = 'loading-timer';
        indicator.style.cssText = `
            position: absolute;
            bottom: 10px;
            left: 10px;
            background: rgba(0,0,0,0.7);
            color: #C5A028;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            z-index: 20;
            display: none;
            font-weight: bold;
        `;
        wrapper.appendChild(indicator);
    }
}

// ============================================
// CHARGER LE PROCHAIN MODÈLE DANS LA FILE
// ============================================
function loadNextModelInQueue() {
    if (isLoadingModel) return;
    
    // Trouver le premier modèle visible non chargé
    for (let i = 0; i < modelQueue.length; i++) {
        const item = modelQueue[i];
        if (!item.loaded && isElementInViewport(item.element)) {
            loadModelWithDelay(item);
            break;
        }
    }
}

// ============================================
// VÉRIFIER SI UN ÉLÉMENT EST VISIBLE
// ============================================
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight + 300) &&
        rect.bottom >= -100
    );
}

// ============================================
// CHARGER UN MODÈLE AVEC DÉLAI
// ============================================
function loadModelWithDelay(item) {
    if (isLoadingModel || item.loaded) return;
    
    isLoadingModel = true;
    
    // Afficher le timer
    const wrapper = item.element.closest('.model-wrapper');
    const timer = wrapper?.querySelector('.loading-timer');
    if (timer) {
        timer.style.display = 'block';
        timer.textContent = `⏳ Chargement dans 3s...`;
    }
    
    console.log(`⏰ Modèle ${item.index + 1}/${modelQueue.length} - Chargement dans 3 secondes`);
    
    // Compterdown avant chargement
    let secondsLeft = 3;
    const countdown = setInterval(() => {
        secondsLeft--;
        if (timer && secondsLeft > 0) {
            timer.textContent = `⏳ Chargement dans ${secondsLeft}s...`;
        }
    }, 1000);
    
    // Charger après 3 secondes
    setTimeout(() => {
        clearInterval(countdown);
        
        if (timer) {
            timer.textContent = `📦 Chargement en cours...`;
        }
        
        console.log(`🚀 Chargement du modèle ${item.index + 1}/${modelQueue.length}`);
        performLoad(item);
    }, LOAD_DELAY);
}

// ============================================
// EFFECTUER LE CHARGEMENT DU MODÈLE
// ============================================
function performLoad(item) {
    item.loaded = true;
    
    const viewer = item.element;
    const src = item.src;
    const wrapper = item.wrapper;
    const timer = wrapper?.querySelector('.loading-timer');
    
    // Ajouter la classe de chargement
    viewer.classList.add('model-loading');
    
    // Charger le modèle
    viewer.setAttribute('src', src);
    
    // Événement de chargement réussi
    viewer.addEventListener('load', function onLoad() {
        viewer.classList.remove('model-loading');
        viewer.classList.add('model-loaded');
        
        loadedModelsCount++;
        
        if (timer) {
            timer.textContent = `✅ Modèle ${loadedModelsCount}/${modelQueue.length} chargé`;
            setTimeout(() => {
                timer.style.display = 'none';
            }, 2000);
        }
        
        console.log(`✅ Modèle ${item.index + 1} chargé avec succès (${loadedModelsCount}/${modelQueue.length})`);
        
        isLoadingModel = false;
        
        // Charger le suivant après 1 seconde
        setTimeout(() => {
            loadNextModelInQueue();
        }, 1000);
        
        viewer.removeEventListener('load', onLoad);
    }, { once: true });
    
    // Événement d'erreur
    viewer.addEventListener('error', function onError() {
        viewer.classList.remove('model-loading');
        
        if (timer) {
            timer.textContent = `❌ Erreur de chargement`;
            setTimeout(() => {
                timer.style.display = 'none';
            }, 2000);
        }
        
        console.warn(`❌ Erreur de chargement du modèle ${item.index + 1}`);
        
        isLoadingModel = false;
        
        // Charger le suivant après 1 seconde même en cas d'erreur
        setTimeout(() => {
            loadNextModelInQueue();
        }, 1000);
        
        viewer.removeEventListener('error', onError);
    }, { once: true });
}

// ============================================
// 8. FONCTION AR POUR LES BOUTONS "VOIR À TABLE"
// ============================================
function activateAR(modelId) {
    const modelViewer = document.getElementById(modelId);
    if (!modelViewer) return;
    
    // Si le modèle n'est pas encore chargé, le charger d'abord
    if (!modelViewer.hasAttribute('src') || modelViewer.getAttribute('src') === '') {
        const dataSrc = modelViewer.getAttribute('data-src');
        if (dataSrc) {
            showNotification('Chargement du modèle 3D...', 'info');
            
            modelViewer.setAttribute('src', dataSrc);
            modelViewer.classList.add('model-loading');
            
            modelViewer.addEventListener('load', function onLoad() {
                modelViewer.classList.remove('model-loading');
                setTimeout(() => {
                    try {
                        modelViewer.activateAR();
                    } catch (e) {
                        showNotification('AR non disponible sur ce navigateur', 'error');
                    }
                }, 500);
                modelViewer.removeEventListener('load', onLoad);
            }, { once: true });
            
            modelViewer.addEventListener('error', function onError() {
                modelViewer.classList.remove('model-loading');
                showNotification('Erreur de chargement du modèle', 'error');
                modelViewer.removeEventListener('error', onError);
            }, { once: true });
            
            return;
        }
    }
    
    // Si le modèle est déjà chargé, activer AR directement
    try {
        modelViewer.activateAR();
    } catch (e) {
        showNotification('AR non disponible sur ce navigateur', 'error');
    }
}

// ============================================
// 9. STYLES POUR LES NOTIFICATIONS
// ============================================
(function addStyles() {
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
        .model-loading {
            opacity: 0.5;
            animation: pulse 1.5s infinite;
        }
        .model-loaded {
            opacity: 1;
            animation: fadeIn 0.5s ease;
        }
        @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.8; }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
})();

// ============================================
// EXPOSER LES FONCTIONS GLOBALES
// ============================================
window.activateAR = activateAR;
window.showNotification = showNotification;
