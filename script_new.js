// ===== QUANTUMHEAL - SISTEMA CUÁNTICO DE JAVASCRIPT =====

// Variables globales del sistema cuántico
let currentSection = 'dimensional-home';
let particleSystem = null;
let quantumClock = null;
let testimonialIndex = 0;
let isTransitioning = false;

// ===== INICIALIZACIÓN DEL SISTEMA CUÁNTICO =====
document.addEventListener('DOMContentLoaded', function() {
    initializeQuantumSystem();
});

function initializeQuantumSystem() {
    // Inicializar preloader
    initializePreloader();
    
    // Inicializar navegación cuántica
    initializeQuantumNavigation();
    
    // Inicializar reloj cuántico
    initializeQuantumClock();
    
    // Inicializar sistema de partículas
    initializeParticleSystem();
    
    // Inicializar contadores animados
    initializeCounters();
    
    // Inicializar barras de progreso
    initializeProgressBars();
    
    // Inicializar testimoniales
    initializeTestimonials();
    
    // Inicializar formularios
    initializeQuantumForms();
    
    // Inicializar efectos de scroll
    initializeScrollEffects();
    
    console.log('🚀 Sistema Cuántico QuantumHeal Inicializado');
}

// ===== PRELOADER CUÁNTICO =====
function initializePreloader() {
    const preloader = document.getElementById('preloader');
    const loadingText = document.querySelector('.loading-text');
    
    // Animar letras del loading
    if (loadingText) {
        const letters = loadingText.querySelectorAll('span');
        letters.forEach((letter, index) => {
            letter.style.setProperty('--i', index);
        });
    }
    
    // Ocultar preloader después de la carga
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }
        }, 2000);
    });
}

// ===== NAVEGACIÓN CUÁNTICA =====
function initializeQuantumNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.quantum-section');
    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.querySelector('.nav-links');

    // Configurar navegación entre secciones
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            
            if (targetSection && targetSection !== currentSection && !isTransitioning) {
                transitionToSection(targetSection);
            }
        });
    });

    // Toggle móvil
    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Navegación por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            navigateToNextSection();
        } else if (e.key === 'ArrowLeft') {
            navigateToPreviousSection();
        }
    });
}

function transitionToSection(targetSection) {
    if (isTransitioning) return;
    
    isTransitioning = true;
    const currentSectionEl = document.getElementById(currentSection);
    const targetSectionEl = document.getElementById(targetSection);
    const navLinks = document.querySelectorAll('.nav-link');

    // Actualizar navegación activa
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === targetSection) {
            link.classList.add('active');
        }
    });

    // Transición de salida
    if (currentSectionEl) {
        currentSectionEl.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            currentSectionEl.classList.remove('active');
            currentSectionEl.style.transform = '';
        }, 400);
    }

    // Transición de entrada
    setTimeout(() => {
        if (targetSectionEl) {
            targetSectionEl.style.transform = 'translateX(100%)';
            targetSectionEl.classList.add('active');
            
            setTimeout(() => {
                targetSectionEl.style.transform = '';
                currentSection = targetSection;
                isTransitioning = false;
                
                // Inicializar efectos específicos de la sección
                initializeSectionEffects(targetSection);
            }, 50);
        }
    }, 400);
}

function initializeSectionEffects(section) {
    switch(section) {
        case 'dimensional-home':
            initializeParticleSystem();
            break;
        case 'quantum-lab':
            initializeMolecularAnimation();
            break;
        case 'neural-matrix':
            initializeNeuralNetwork();
            break;
        case 'bio-chamber':
            initializeBioChamber();
            break;
        case 'data-vault':
            initializeDataVault();
            break;
    }
}

function navigateToNextSection() {
    const sections = ['dimensional-home', 'quantum-lab', 'neural-matrix', 'bio-chamber', 'data-vault'];
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    transitionToSection(sections[nextIndex]);
}

function navigateToPreviousSection() {
    const sections = ['dimensional-home', 'quantum-lab', 'neural-matrix', 'bio-chamber', 'data-vault'];
    const currentIndex = sections.indexOf(currentSection);
    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
    transitionToSection(sections[prevIndex]);
}

// ===== RELOJ CUÁNTICO =====
function initializeQuantumClock() {
    const timeDisplay = document.querySelector('.time-display');
    
    function updateQuantumTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        if (timeDisplay) {
            timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
    
    updateQuantumTime();
    quantumClock = setInterval(updateQuantumTime, 1000);
}

// ===== SISTEMA DE PARTÍCULAS =====
function initializeParticleSystem() {
    const particleContainer = document.getElementById('particleSystem');
    if (!particleContainer) return;

    // Limpiar partículas existentes
    particleContainer.innerHTML = '';

    // Crear partículas cuánticas
    for (let i = 0; i < 50; i++) {
        createQuantumParticle(particleContainer);
    }
}

function createQuantumParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'quantum-particle';
    
    // Posición aleatoria
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 4 + 1;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, #00ffff, transparent);
        border-radius: 50%;
        opacity: ${Math.random() * 0.7 + 0.3};
        animation: quantumFloat ${duration}s ease-in-out infinite alternate;
        animation-delay: ${delay}s;
        pointer-events: none;
        box-shadow: 0 0 ${size * 3}px #00ffff;
    `;

    container.appendChild(particle);

    // Eliminar partícula después de un tiempo
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, (duration + delay) * 1000);
}

// ===== CONTADORES ANIMADOS =====
function initializeCounters() {
    const counters = document.querySelectorAll('[data-target]');
    
    const animateCounter = (counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const increment = target / 200;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (target % 1 === 0) {
                    counter.textContent = Math.ceil(current);
                } else {
                    counter.textContent = current.toFixed(1);
                }
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target % 1 === 0 ? target : target.toFixed(1);
            }
        };
        
        updateCounter();
    };

    // Observer para animar cuando entra en viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// ===== BARRAS DE PROGRESO =====
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar, .bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress') || bar.getAttribute('data-percentage') || 100;
                setTimeout(() => {
                    bar.style.width = `${progress}%`;
                }, 200);
            }
        });
    });

    progressBars.forEach(bar => observer.observe(bar));
}

// ===== TESTIMONIALES =====
function initializeTestimonials() {
    const testimonialNodes = document.querySelectorAll('.testimonial-node');
    const indicators = document.querySelectorAll('.indicator');
    
    if (testimonialNodes.length === 0) return;

    // Mostrar primer testimonio
    showTestimonial(0);

    // Auto-avance cada 8 segundos
    setInterval(() => {
        nextTestimonial();
    }, 8000);
}

function showTestimonial(index) {
    const testimonialNodes = document.querySelectorAll('.testimonial-node');
    const indicators = document.querySelectorAll('.indicator');
    
    // Ocultar todos los testimonios
    testimonialNodes.forEach(node => node.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Mostrar testimonio seleccionado
    if (testimonialNodes[index]) {
        testimonialNodes[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    testimonialIndex = index;
}

function nextTestimonial() {
    const testimonialNodes = document.querySelectorAll('.testimonial-node');
    const nextIndex = (testimonialIndex + 1) % testimonialNodes.length;
    showTestimonial(nextIndex);
}

function previousTestimonial() {
    const testimonialNodes = document.querySelectorAll('.testimonial-node');
    const prevIndex = (testimonialIndex - 1 + testimonialNodes.length) % testimonialNodes.length;
    showTestimonial(prevIndex);
}

// ===== EFECTOS MOLECULARES =====
function initializeMolecularAnimation() {
    const molecules = document.querySelectorAll('.molecule');
    
    molecules.forEach((molecule, index) => {
        const delay = index * 0.5;
        molecule.style.animationDelay = `${delay}s`;
        
        // Agregar efecto de hover
        molecule.addEventListener('mouseenter', () => {
            molecule.style.transform = 'scale(1.5)';
            molecule.style.opacity = '0.8';
        });
        
        molecule.addEventListener('mouseleave', () => {
            molecule.style.transform = 'scale(1)';
            molecule.style.opacity = '0.3';
        });
    });
}

// ===== RED NEURAL =====
function initializeNeuralNetwork() {
    const neurons = document.querySelectorAll('.neuron');
    
    neurons.forEach((neuron, index) => {
        neuron.style.animationDelay = `${index * 0.5}s`;
    });
}

// ===== CÁMARA BIOLÓGICA =====
function initializeBioChamber() {
    const metricBars = document.querySelectorAll('.bar-fill');
    
    metricBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage') || 100;
        setTimeout(() => {
            bar.style.width = `${percentage}%`;
        }, 500);
    });
    
    // Inicializar timeline de transformación
    initializeTransformationTimeline();
}

function initializeTransformationTimeline() {
    const steps = document.querySelectorAll('.timeline-step');
    
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add('active');
        }, index * 1000);
    });
}

// ===== ARCHIVO DE DATOS =====
function initializeDataVault() {
    const documentCards = document.querySelectorAll('.document-card');
    
    documentCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// ===== FUNCIONES GLOBALES DE INTERACCIÓN =====
function initializeQuantumSession() {
    // Crear efecto de explosión cuántica
    createQuantumExplosion();
    
    // Abrir panel de contacto
    setTimeout(() => {
        openContactPanel();
    }, 1000);
}

function exploreMatrix() {
    // Transición a la sección de matriz neural
    transitionToSection('neural-matrix');
}

function createQuantumExplosion() {
    const explosion = document.createElement('div');
    explosion.className = 'quantum-explosion';
    explosion.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #00ffff, transparent);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: quantumExplode 1s ease-out forwards;
        pointer-events: none;
        z-index: 5000;
    `;
    
    document.body.appendChild(explosion);
    
    // Agregar partículas de explosión
    for (let i = 0; i < 20; i++) {
        createExplosionParticle(explosion);
    }
    
    setTimeout(() => {
        explosion.remove();
    }, 1000);
}

function createExplosionParticle(parent) {
    const particle = document.createElement('div');
    const angle = (Math.PI * 2 * Math.random());
    const velocity = Math.random() * 200 + 100;
    
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #00ffff;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        animation: quantumParticleExplode 1s ease-out forwards;
        --angle: ${angle};
        --velocity: ${velocity}px;
    `;
    
    parent.appendChild(particle);
}

// ===== PANEL DE CONTACTO =====
function openContactPanel() {
    const panel = document.getElementById('quantumContactPanel');
    if (panel) {
        panel.classList.add('open');
    }
}

function closeContactPanel() {
    const panel = document.getElementById('quantumContactPanel');
    if (panel) {
        panel.classList.remove('open');
    }
}

// ===== FORMULARIOS CUÁNTICOS =====
function initializeQuantumForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', handleQuantumSubmit);
        
        // Efectos de input
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    });
}

function handleQuantumSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Animación de envío
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>TRANSMITIENDO...</span>';
        submitBtn.disabled = true;
    }
    
    // Simular envío (aquí conectarías con tu backend)
    setTimeout(() => {
        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-check"></i><span>TRANSMISIÓN EXITOSA</span>';
            submitBtn.style.background = 'linear-gradient(45deg, #00e676, #4caf50)';
        }
        
        setTimeout(() => {
            closeContactPanel();
            form.reset();
            
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i><span>TRANSMITIR MENSAJE</span>';
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }
        }, 2000);
    }, 3000);
}

// ===== DESCARGAS DE DOCUMENTOS =====
function downloadDocument(type) {
    const documents = {
        privacy: 'documentos/Aviso de Privacidad para Servicios de Terapia Holística.pdf',
        consent: 'documentos/CONCENTIMIENTO INFORMADO PARA TERAPIAS.pdf'
    };
    
    const filePath = documents[type];
    if (filePath) {
        // Crear efecto de descarga
        createDownloadEffect();
        
        // Iniciar descarga
        const link = document.createElement('a');
        link.href = filePath;
        link.download = '';
        link.click();
    }
}

function createDownloadEffect() {
    const effect = document.createElement('div');
    effect.textContent = 'DESCARGA INICIADA';
    effect.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #00e676, #4caf50);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-family: 'Rajdhani', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        z-index: 6000;
        animation: quantumSlideIn 0.5s ease-out;
    `;
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        effect.style.animation = 'quantumSlideOut 0.5s ease-out forwards';
        setTimeout(() => effect.remove(), 500);
    }, 3000);
}

// ===== EFECTOS DE SCROLL =====
function initializeScrollEffects() {
    // Efecto parallax para fondos
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const backgrounds = document.querySelectorAll('.dimensional-background, .lab-environment, .matrix-environment');
        
        backgrounds.forEach(bg => {
            const speed = 0.5;
            bg.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===== EVENTOS GLOBALES =====
document.addEventListener('click', (e) => {
    // Cerrar panel de contacto al hacer clic fuera
    const panel = document.getElementById('quantumContactPanel');
    if (panel && panel.classList.contains('open') && !panel.contains(e.target) && !e.target.closest('.quantum-btn.emergency')) {
        closeContactPanel();
    }
});

// Botón de emergencia
document.addEventListener('DOMContentLoaded', () => {
    const emergencyBtn = document.getElementById('emergencyBtn');
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', openContactPanel);
    }
});

// ===== ESTILOS DINÁMICOS DE ANIMACIÓN =====
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes quantumExplode {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(50);
            opacity: 0;
        }
    }
    
    @keyframes quantumParticleExplode {
        0% {
            transform: translate(-50%, -50%);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) 
                       translate(calc(cos(var(--angle)) * var(--velocity)), 
                                calc(sin(var(--angle)) * var(--velocity)));
            opacity: 0;
        }
    }
    
    @keyframes quantumSlideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes quantumSlideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;

document.head.appendChild(dynamicStyles);

// ===== LOG DE INICIALIZACIÓN =====
console.log(`
🌌 QuantumHeal System Initialized 🌌
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 Quantum Navigation: Active
⚡ Particle System: Online
🧬 Molecular Animation: Ready
🧠 Neural Matrix: Connected
🔬 Bio Chamber: Operational
📊 Data Vault: Secure
⏰ Quantum Clock: Synchronized
🌊 Wave Functions: Stable
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status: All Systems Nominal ✅
`);

// Funciones para compatibilidad global
window.initializeQuantumSession = initializeQuantumSession;
window.exploreMatrix = exploreMatrix;
window.nextTestimonial = nextTestimonial;
window.previousTestimonial = previousTestimonial;
window.closeContactPanel = closeContactPanel;
window.downloadDocument = downloadDocument;
