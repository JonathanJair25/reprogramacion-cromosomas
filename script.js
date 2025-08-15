// JAVASCRIPT PROFESIONAL MÉDICO - CROMAHEAL

document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de componentes
    initNavigation();
    initScrollEffects();
    initAnimations();
    initContactForm();
    initStatCounters();
    initEnergyEffects();
    initProcessAnimations();
    initDocumentAnimations();
    
    console.log('CromaHeal - Sistema energético cargado correctamente ⚡');
});

// NAVEGACIÓN PROFESIONAL MEJORADA
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    // Toggle menú móvil mejorado
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Prevenir scroll del body cuando el menú está abierto
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Cerrar menú al hacer click en enlaces
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Cerrar menú al hacer click fuera
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Cerrar menú con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Navegación suave mejorada
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header ? header.offsetHeight : 80;
                const offsetTop = targetSection.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto header al scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (header) {
            if (scrollTop > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(44, 90, 160, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        }
        
        lastScrollTop = scrollTop;
    });
}

// EFECTOS DE SCROLL PROFESIONALES
function initScrollEffects() {
    // Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Activar contadores si es la sección hero
                if (entry.target.classList.contains('hero-stats')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observar elementos
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .testimonial-card, .credential-item, .hero-stats'
    );
    
    elementsToAnimate.forEach(function(el) {
        observer.observe(el);
    });
}

// ANIMACIONES PROFESIONALES
function initAnimations() {
    // Agregar CSS para animaciones
    const style = document.createElement('style');
    style.textContent = `
        .service-card,
        .testimonial-card,
        .credential-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card.animate-in,
        .testimonial-card.animate-in,
        .credential-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .service-card:nth-child(2).animate-in {
            transition-delay: 0.1s;
        }
        
        .service-card:nth-child(3).animate-in {
            transition-delay: 0.2s;
        }
        
        .service-card:nth-child(4).animate-in {
            transition-delay: 0.3s;
        }
        
        .testimonial-card:nth-child(2).animate-in {
            transition-delay: 0.15s;
        }
        
        .testimonial-card:nth-child(3).animate-in {
            transition-delay: 0.3s;
        }
    `;
    document.head.appendChild(style);
}

// CONTADORES ANIMADOS
function initStatCounters() {
    window.animateCounters = function() {
        const counters = document.querySelectorAll('.stat-number, .stat-number-large');
        
        counters.forEach(function(counter) {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 segundos
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = function() {
                if (current < target) {
                    current += step;
                    if (counter.classList.contains('stat-number-large')) {
                        // Para números grandes, agregar formato especial
                        if (target >= 1000) {
                            counter.textContent = Math.floor(current).toLocaleString();
                        } else {
                            counter.textContent = Math.floor(current);
                        }
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    if (counter.classList.contains('stat-number-large')) {
                        if (target >= 1000) {
                            counter.textContent = target.toLocaleString();
                        } else {
                            counter.textContent = target;
                        }
                    } else {
                        counter.textContent = target;
                    }
                }
            };
            
            updateCounter();
        });
    };
    
    // Observar también la nueva sección de estadísticas energéticas
    const energyStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Animar contadores de estadísticas energéticas
                const energyCounters = entry.target.querySelectorAll('.stat-number-large');
                energyCounters.forEach(function(counter) {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 3000; // 3 segundos para números más grandes
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const updateEnergyCounter = function() {
                        if (current < target) {
                            current += step;
                            counter.textContent = Math.floor(current);
                            requestAnimationFrame(updateEnergyCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateEnergyCounter();
                });
                
                // Activar animaciones de partículas cuánticas
                activateQuantumParticles();
            }
        });
    }, { threshold: 0.3 });
    
    const energyStatsSection = document.querySelector('.energy-stats');
    if (energyStatsSection) {
        energyStatsObserver.observe(energyStatsSection);
    }
}

// EFECTOS CUÁNTICOS ESPECIALES
function activateQuantumParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(function(particle, index) {
        setTimeout(function() {
            particle.style.animationPlayState = 'running';
            particle.style.opacity = '1';
        }, index * 200);
    });
}

// EFECTOS ENERGÉTICOS AVANZADOS
function initEnergyEffects() {
    // Efecto de ondas energéticas en scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const energyWaves = document.querySelectorAll('.wave');
        
        energyWaves.forEach(function(wave, index) {
            const speed = (index + 1) * 0.5;
            wave.style.transform = `scale(${1 + scrolled * 0.0001 * speed})`;
        });
        
        // Efecto paralaje en elementos energéticos
        const floatingElements = document.querySelectorAll('.floating-dna, .floating-logo');
        floatingElements.forEach(function(element, index) {
            const speed = (index + 1) * 0.3;
            element.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
        });
    });
    
    // Activar efectos de aura en hover
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 40px rgba(44, 90, 160, 0.3)';
            this.style.borderColor = 'var(--primary-color)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'var(--shadow-md)';
            this.style.borderColor = 'transparent';
        });
    });
}

// ANIMACIONES DE PROCESO DE SANACIÓN
function initProcessAnimations() {
    const processObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const stepCards = entry.target.querySelectorAll('.step-card');
                stepCards.forEach(function(card, index) {
                    setTimeout(function() {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        
                        // Activar efectos de flujo de energía
                        const connectorEnergy = card.querySelector('.connector-energy');
                        if (connectorEnergy) {
                            connectorEnergy.style.animationPlayState = 'running';
                        }
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.2 });
    
    const processSection = document.querySelector('.healing-process');
    if (processSection) {
        processObserver.observe(processSection);
        
        // Inicializar cards ocultas
        const stepCards = processSection.querySelectorAll('.step-card');
        stepCards.forEach(function(card) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    }
}

// FORMULARIO DE CONTACTO PROFESIONAL
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validación
            if (!validateForm(data)) {
                return;
            }
            
            // Mostrar estado de carga
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simular envío (aquí conectarías con tu backend)
            setTimeout(function() {
                showNotification(
                    'Consulta enviada exitosamente. Nos contactaremos contigo pronto.',
                    'success'
                );
                contactForm.reset();
                
                // Restaurar botón
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// VALIDACIÓN DE FORMULARIO
function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('El nombre debe tener al menos 2 caracteres');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Ingresa un email válido');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('El mensaje debe tener al menos 10 caracteres');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('. '), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// SISTEMA DE NOTIFICACIONES PROFESIONAL
function showNotification(message, type = 'info') {
    // Remover notificaciones existentes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const iconMap = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle'
    };
    
    const colorMap = {
        success: '#27ae60',
        error: '#e74c3c',
        info: '#2c5aa0'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="${iconMap[type]}"></i>
            <span class="notification-message">${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Estilos
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colorMap[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: 'Inter', sans-serif;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        opacity: 0.8;
        transition: opacity 0.2s;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Manejar cierre
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', closeNotification);
    closeBtn.addEventListener('mouseenter', () => closeBtn.style.opacity = '1');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.opacity = '0.8');
    
    function closeNotification() {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
    
    // Auto cerrar
    setTimeout(closeNotification, 5000);
}

// OPTIMIZACIÓN DE RENDIMIENTO
let ticking = false;

function optimizedScrollHandler() {
    // Cualquier lógica adicional de scroll aquí
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(optimizedScrollHandler);
        ticking = true;
    }
});

// SOPORTE PARA NAVEGADORES ANTIGUOS
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback) {
        return setTimeout(callback, 1000 / 60);
    };
}

if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}

// ERROR HANDLING GLOBAL
window.addEventListener('error', function(e) {
    console.warn('Error capturado:', e.message);
    // En producción, podrías enviar esto a un servicio de logging
});

// ACCESIBILIDAD
document.addEventListener('keydown', function(e) {
    // Cerrar menú móvil con ESC
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// Mejorar focus visible
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// CSS para navegación por teclado
const keyboardStyle = document.createElement('style');
keyboardStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #2c5aa0 !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(keyboardStyle);

// OPTIMIZACIONES MÓVILES
function initMobileOptimizations() {
    // Detectar dispositivos móviles
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768;
    
    if (isMobile || window.innerWidth <= 768) {
        // Reducir partículas en móviles para mejor rendimiento
        const particles = document.querySelectorAll('.quantum-particle');
        particles.forEach((particle, index) => {
            if (index > 8) { // Mantener solo 8 partículas en móvil
                particle.style.display = 'none';
            }
        });
        
        // Optimizar animaciones para móviles
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .quantum-particle {
                    animation-duration: 12s;
                    opacity: 0.3;
                }
                
                .energy-wave {
                    animation-duration: 10s;
                    opacity: 0.2;
                }
                
                .floating-dna {
                    animation-duration: 15s;
                    opacity: 0.4;
                }
                
                .ring-1, .ring-2, .ring-3 {
                    animation-duration: 20s;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Mejorar touch events
        document.addEventListener('touchstart', function(e) {
            // Prevenir zoom en double tap para botones
            if (e.target.classList.contains('btn') || 
                e.target.closest('.btn') || 
                e.target.classList.contains('hamburger')) {
                e.preventDefault();
            }
        }, { passive: false });
        
        // Optimizar scroll en móviles
        let ticking = false;
        function optimizedScrollHandler() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    // Reducir frecuencia de animaciones durante scroll
                    const scrollTop = window.pageYOffset;
                    if (scrollTop > 200) {
                        document.body.classList.add('scrolling');
                    } else {
                        document.body.classList.remove('scrolling');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    }
    
    // Mejorar experiencia táctil
    const touchElements = document.querySelectorAll('.btn, .service-card, .stat-card, .testimonial-card, .document-card');
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        }, { passive: true });
    });
    
    // Mejorar experiencia específica para botones de documentos
    const documentButtons = document.querySelectorAll('.download-btn, .view-btn');
    documentButtons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.97)';
            this.style.boxShadow = '0 4px 15px rgba(44, 90, 160, 0.3)';
        }, { passive: true });
        
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 150);
        }, { passive: true });
    });
}

// Inicializar optimizaciones móviles
initMobileOptimizations();

// ANIMACIONES DE DOCUMENTOS LEGALES
function initDocumentAnimations() {
    // Intersection Observer para documentos
    const documentsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const documentCards = entry.target.querySelectorAll('.document-card');
                documentCards.forEach(function(card, index) {
                    setTimeout(function() {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        
                        // Activar efectos de icono
                        const icon = card.querySelector('.document-icon');
                        if (icon) {
                            icon.style.transform = 'scale(1) rotate(0deg)';
                        }
                    }, index * 200);
                });
                
                // Activar efectos energéticos
                const floatingDocs = entry.target.querySelectorAll('.floating-document');
                floatingDocs.forEach(function(doc, index) {
                    setTimeout(function() {
                        doc.style.opacity = '1';
                        doc.style.animationPlayState = 'running';
                    }, (index + 1) * 500);
                });
            }
        });
    }, { threshold: 0.2 });
    
    const documentsSection = document.querySelector('.legal-documents');
    if (documentsSection) {
        documentsObserver.observe(documentsSection);
        
        // Inicializar cards ocultas
        const documentCards = documentsSection.querySelectorAll('.document-card');
        documentCards.forEach(function(card) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Inicializar iconos
            const icon = card.querySelector('.document-icon');
            if (icon) {
                icon.style.transform = 'scale(0.8) rotate(-10deg)';
                icon.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });
        
        // Inicializar elementos flotantes ocultos
        const floatingDocs = documentsSection.querySelectorAll('.floating-document');
        floatingDocs.forEach(function(doc) {
            doc.style.opacity = '0';
            doc.style.animationPlayState = 'paused';
        });
    }
    
    // Efectos de hover mejorados para botones de documento
    const downloadBtns = document.querySelectorAll('.download-btn');
    const viewBtns = document.querySelectorAll('.view-btn');
    
    downloadBtns.forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(44, 90, 160, 0.3)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    viewBtns.forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(44, 90, 160, 0.4)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Tracking de descargas (opcional para analytics)
    downloadBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const documentName = this.closest('.document-card').querySelector('.document-title').textContent;
            console.log('Documento descargado:', documentName);
            
            // Mostrar notificación de descarga
            showNotification(`Descargando: ${documentName}`, 'info');
        });
    });
}
