/* ===============================================
   CENTRO MÉDICO REGENERATIVO - JAVASCRIPT
   Sistema de interacción profesional para clínica médica
   =============================================== */

// Variables globales
let isMenuOpen = false;
let appointmentModal = null;
let animatedStats = false;

// Inicialización del sistema médico
document.addEventListener('DOMContentLoaded', function() {
    initializeMedicalSystem();
});

function initializeMedicalSystem() {
    console.log('🏥 Inicializando Sistema Médico Profesional...');
    
    // Componentes principales
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimatedCounters();
    initializeFormValidation();
    initializeModalSystem();
    initializeMobileMenu();
    initializeAppointmentSystem();
    
    console.log('✅ Sistema Médico inicializado correctamente');
}

/* ===============================================
   NAVEGACIÓN MÉDICA
   =============================================== */

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Navegación suave
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Actualizar enlaces activos
                navLinks.forEach(nl => nl.classList.remove('active'));
                this.classList.add('active');
                
                // Scroll suave con offset del header
                const headerHeight = document.querySelector('.medical-header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Actualizar navegación en scroll
    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.medical-header').offsetHeight;
    const scrollPosition = window.scrollY + headerHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

/* ===============================================
   EFECTOS DE SCROLL
   =============================================== */

function initializeScrollEffects() {
    const header = document.querySelector('.medical-header');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY > 50;
        
        if (scrolled) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animaciones de aparición para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animar contadores si están en viewport
                if (entry.target.classList.contains('medical-stats') && !animatedStats) {
                    animateCounters();
                    animatedStats = true;
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .testimonial-card, .document-card, .medical-stats, .doctor-info'
    );
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

/* ===============================================
   CONTADORES ANIMADOS
   =============================================== */

function initializeAnimatedCounters() {
    // Se inicializa con scroll effects
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50; // Duración de animación
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
                counter.classList.add('counting');
            }
        };
        
        updateCounter();
    });
}

/* ===============================================
   MENÚ MÓVIL
   =============================================== */

function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.medical-header');
    
    if (isMenuOpen) {
        // Abrir menú
        header.classList.add('mobile-menu-open');
        mobileToggle.classList.add('active');
        
        // Estilo del menú desplegable con animación mejorada
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'rgba(255, 255, 255, 0.98)';
        navMenu.style.backdropFilter = 'blur(15px)';
        navMenu.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        navMenu.style.padding = '1.5rem';
        navMenu.style.zIndex = '1000';
        navMenu.style.borderTop = '1px solid rgba(44, 90, 160, 0.1)';
        navMenu.style.gap = '0.8rem';
        navMenu.style.animation = 'slideDown 0.3s ease-out';
        
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    isMenuOpen = false;
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.medical-header');
    
    if (header) {
        header.classList.remove('mobile-menu-open');
    }
    
    if (mobileToggle) {
        mobileToggle.classList.remove('active');
        
        // Restaurar estilos del menú
        if (window.innerWidth <= 768) {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.position = 'static';
        }
        
        // Restaurar botón hamburguesa
        const spans = mobileToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
        });
        
        // Restaurar scroll del body
        document.body.style.overflow = '';
    }
}

// Manejar cambios de tamaño de ventana
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
        document.querySelector('.nav-menu').style.display = 'flex';
        document.querySelector('.header-actions').style.display = 'flex';
    } else {
        if (!isMenuOpen) {
            document.querySelector('.nav-menu').style.display = 'none';
            document.querySelector('.header-actions').style.display = 'none';
        }
    }
});

/* ===============================================
   SISTEMA DE MODALES
   =============================================== */

function initializeModalSystem() {
    appointmentModal = document.getElementById('appointmentModal');
    
    // Cerrar modal al hacer click fuera
    if (appointmentModal) {
        appointmentModal.addEventListener('click', function(e) {
            if (e.target === appointmentModal) {
                closeAppointmentModal();
            }
        });
    }
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && appointmentModal && appointmentModal.classList.contains('active')) {
            closeAppointmentModal();
        }
    });
}

function openAppointmentModal() {
    if (appointmentModal) {
        appointmentModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus en el primer input
        const firstInput = appointmentModal.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 300);
        }
    }
}

function closeAppointmentModal() {
    if (appointmentModal) {
        appointmentModal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Limpiar formulario
        const form = appointmentModal.querySelector('form');
        if (form) {
            form.reset();
        }
    }
}

/* ===============================================
   SISTEMA DE CITAS MÉDICAS
   =============================================== */

function initializeAppointmentSystem() {
    const appointmentForm = document.getElementById('appointmentForm');
    const modalForm = document.querySelector('.modal-form');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', handleAppointmentSubmission);
    }
    
    if (modalForm) {
        modalForm.addEventListener('submit', handleModalAppointment);
    }
    
    // Configurar fecha mínima (hoy)
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
        input.setAttribute('min', today);
    });
}

function handleAppointmentSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const appointmentData = {
        name: formData.get('patientName'),
        phone: formData.get('patientPhone'),
        email: formData.get('patientEmail'),
        date: formData.get('preferredDate'),
        service: formData.get('serviceType'),
        symptoms: formData.get('symptoms')
    };
    
    if (validateAppointmentData(appointmentData)) {
        processAppointment(appointmentData);
    }
}

function handleModalAppointment(e) {
    e.preventDefault();
    
    const formInputs = e.target.querySelectorAll('input, select');
    const appointmentData = {
        name: formInputs[0].value,
        phone: formInputs[1].value,
        service: formInputs[2].value
    };
    
    if (validateBasicAppointmentData(appointmentData)) {
        processAppointment(appointmentData);
        closeAppointmentModal();
    }
}

function validateAppointmentData(data) {
    const errors = [];
    
    if (!data.name || data.name.length < 2) {
        errors.push('El nombre debe tener al menos 2 caracteres');
    }
    
    if (!data.phone || !isValidPhone(data.phone)) {
        errors.push('Ingrese un teléfono válido');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Ingrese un email válido');
    }
    
    if (!data.date) {
        errors.push('Seleccione una fecha');
    }
    
    if (!data.service) {
        errors.push('Seleccione un tipo de consulta');
    }
    
    if (errors.length > 0) {
        showValidationErrors(errors);
        return false;
    }
    
    return true;
}

function validateBasicAppointmentData(data) {
    const errors = [];
    
    if (!data.name || data.name.length < 2) {
        errors.push('El nombre debe tener al menos 2 caracteres');
    }
    
    if (!data.phone || !isValidPhone(data.phone)) {
        errors.push('Ingrese un teléfono válido');
    }
    
    if (!data.service) {
        errors.push('Seleccione un tipo de consulta');
    }
    
    if (errors.length > 0) {
        showValidationErrors(errors);
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function showValidationErrors(errors) {
    let errorMessage = 'Por favor corrija los siguientes errores:\n\n';
    errors.forEach(error => {
        errorMessage += `• ${error}\n`;
    });
    
    alert(errorMessage);
}

function processAppointment(appointmentData) {
    // Mostrar indicador de carga
    showLoadingIndicator();
    
    // Simular procesamiento (aquí conectarías con tu backend)
    setTimeout(() => {
        hideLoadingIndicator();
        showAppointmentConfirmation(appointmentData);
        
        // Limpiar formulario
        const forms = document.querySelectorAll('form');
        forms.forEach(form => form.reset());
        
    }, 2000);
}

function showLoadingIndicator() {
    const button = document.querySelector('.submit-btn, .btn-primary');
    if (button) {
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Procesando...</span>';
        button.disabled = true;
    }
}

function hideLoadingIndicator() {
    const button = document.querySelector('.submit-btn, .btn-primary');
    if (button) {
        button.innerHTML = '<i class="fas fa-calendar-check"></i><span>Enviar Solicitud</span>';
        button.disabled = false;
    }
}

function showAppointmentConfirmation(data) {
    const message = `
¡Solicitud de cita enviada exitosamente! 📧

Estimado/a ${data.name},

Su solicitud ha sido recibida y será procesada en las próximas horas.

📞 Nos comunicaremos al: ${data.phone}
📧 Email de confirmación: ${data.email || 'No proporcionado'}
🩺 Servicio solicitado: ${data.service}

✅ Recibirá una confirmación con fecha y hora específica.

¡Gracias por confiar en nuestro centro médico!
    `;
    
    alert(message);
}

/* ===============================================
   VALIDACIÓN DE FORMULARIOS
   =============================================== */

function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    
    let isValid = true;
    let errorMessage = '';
    
    // Validaciones específicas
    switch (fieldType) {
        case 'email':
            if (value && !isValidEmail(value)) {
                isValid = false;
                errorMessage = 'Ingrese un email válido';
            }
            break;
            
        case 'tel':
            if (value && !isValidPhone(value)) {
                isValid = false;
                errorMessage = 'Ingrese un teléfono válido';
            }
            break;
            
        case 'text':
            if (fieldName === 'patientName' && value && value.length < 2) {
                isValid = false;
                errorMessage = 'El nombre debe tener al menos 2 caracteres';
            }
            break;
    }
    
    // Mostrar/ocultar error
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError({ target: field });
    }
}

function showFieldError(field, message) {
    clearFieldError({ target: field });
    
    field.style.borderColor = '#dc3545';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(e) {
    const field = e.target;
    field.style.borderColor = '';
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

/* ===============================================
   EFECTOS INTERACTIVOS
   =============================================== */

// Efecto de hover en tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .document-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Efectos en botones
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .appointment-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Efecto de ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// CSS para el efecto ripple
const rippleCSS = `
.btn-primary, .btn-secondary, .appointment-btn {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Agregar CSS de ripple al documento
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

/* ===============================================
   FUNCIONES DE UTILIDAD
   =============================================== */

// Función para formatear teléfonos
function formatPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}

// Función para generar ID único de cita
function generateAppointmentId() {
    return 'CITA-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase();
}

// Función para obtener horarios disponibles
function getAvailableTimeSlots(date) {
    const slots = [
        '08:00', '09:00', '10:00', '11:00', 
        '14:00', '15:00', '16:00', '17:00', '18:00'
    ];
    
    // Aquí podrías filtrar slots ocupados desde el backend
    return slots;
}

// Función para validar fecha de cita
function isValidAppointmentDate(date) {
    const selectedDate = new Date(date);
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3); // Máximo 3 meses adelante
    
    return selectedDate >= today && selectedDate <= maxDate;
}

/* ===============================================
   INTEGRACIÓN CON WHATSAPP (OPCIONAL)
   =============================================== */

function contactViaWhatsApp(message = '') {
    const phone = '52123456789'; // Reemplazar con el número real
    const defaultMessage = 'Hola, me gustaría agendar una consulta médica.';
    const finalMessage = message || defaultMessage;
    const encodedMessage = encodeURIComponent(finalMessage);
    
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Agregar funcionalidad a botones de WhatsApp si existen
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('[href*="whatsapp"], [onclick*="whatsapp"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            contactViaWhatsApp();
        });
    });
});

/* ===============================================
   SISTEMA DE NOTIFICACIONES
   =============================================== */

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `medical-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Estilos CSS para las notificaciones
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        min-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Agregar CSS de animaciones para notificaciones
const notificationCSS = `
@keyframes slideInRight {
    from {
        transform: translateX(100%);
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
        transform: translateX(100%);
        opacity: 0;
    }
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.notification-close {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
}

.notification-close:hover {
    background: rgba(255, 255, 255, 0.2);
}
`;

const notificationStyle = document.createElement('style');
notificationStyle.textContent = notificationCSS;
document.head.appendChild(notificationStyle);

// Exportar funciones principales para uso global
window.MedicalSystem = {
    openAppointmentModal,
    closeAppointmentModal,
    contactViaWhatsApp,
    showNotification
};

console.log('🏥 Sistema Médico Profesional cargado completamente');
