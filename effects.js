// ===================================================
// EFECTOS PROFESIONALES PARA CLÍNICA TERAPÉUTICA
// Animaciones sutiles y no invasivas
// ===================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeEffects();
});

function initializeEffects() {
    // Configurar Observer para animaciones
    setupIntersectionObserver();
    
    // Efectos de navegación
    setupNavigationEffects();
    
    // Animaciones de carga de página
    setupPageLoadAnimations();
    
    // Efectos de hover sutiles
    setupHoverEffects();
    
    // Contador animado
    setupCounterAnimation();
    
    // Partículas sutiles de fondo
    setupSubtleParticles();
    
    // Smooth scroll mejorado
    setupSmoothScroll();
}

// ===================================================
// INTERSECTION OBSERVER PARA ANIMACIONES SUAVES
// ===================================================
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animar elementos hijos con delay escalonado
                const children = entry.target.querySelectorAll('.fade-up, .slide-in, .scale-in');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observar elementos que deben animarse
    const animatedElements = document.querySelectorAll([
        '.service-card',
        '.testimonial-card',
        '.feature-item',
        '.stat-item',
        '.section-header',
        '.hero-text',
        '.hero-visual'
    ].join(','));

    animatedElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });
}

// ===================================================
// EFECTOS DE NAVEGACIÓN PROFESIONAL
// ===================================================
function setupNavigationEffects() {
    const header = document.getElementById('medicalHeader');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Header con efecto de glassmorphism en scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Navegación activa suave
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase activa de todos los enlaces
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Añadir clase activa al enlace clickeado
            this.classList.add('active');
            
            // Scroll suave al elemento
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================================
// ANIMACIONES DE CARGA DE PÁGINA
// ===================================================
function setupPageLoadAnimations() {
    // FadeIn suave del contenido principal
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);

    // Animación de aparición del hero
    const heroElements = document.querySelectorAll('.hero-text > *, .hero-visual > *');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 500 + (index * 150));
    });
}

// ===================================================
// EFECTOS DE HOVER SUTILES
// ===================================================
function setupHoverEffects() {
    // Efectos en cards de servicios
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = 'var(--shadow-hover)';
            
            // Añadir efecto especial a los iconos
            const icon = this.querySelector('.service-icon i');
            if (icon) {
                icon.style.animation = 'iconPulse 0.6s ease-in-out';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-card)';
            
            // Restaurar animación normal del icono
            const icon = this.querySelector('.service-icon i');
            if (icon) {
                icon.style.animation = 'iconFloat 3s ease-in-out infinite';
            }
        });
    });

    // Efectos en botones
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            
            // Animar icono del botón
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.animation = 'buttonIconBounce 0.6s ease-in-out';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            
            // Restaurar animación normal del icono
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.animation = 'buttonIconFloat 3s ease-in-out infinite';
            }
        });
    });

    // Efectos especiales para iconos de estadísticas
    const statIcons = document.querySelectorAll('.stat-icon');
    statIcons.forEach(statIcon => {
        statIcon.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.animation = 'statIconSpin 0.5s ease-in-out';
            }
        });
        
        statIcon.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.animation = 'statIconSpin 6s linear infinite';
            }
        });
    });

    // Efectos para símbolos médicos flotantes
    const medicalSymbols = document.querySelectorAll('.symbol');
    medicalSymbols.forEach(symbol => {
        symbol.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.animation = 'symbolSpin 0.8s ease-in-out';
            }
        });
        
        symbol.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.animation = 'symbolPulse 3s ease-in-out infinite';
            }
        });
    });
}

// ===================================================
// CONTADOR ANIMADO PROFESIONAL
// ===================================================
function setupCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(counter);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, duration / steps);
}

// ===================================================
// PARTÍCULAS SUTILES DE FONDO
// ===================================================
function setupSubtleParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.3';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.1
        };
    }
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < 30; i++) {
            particles.push(createParticle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            
            ctx.globalAlpha = particle.opacity;
            ctx.fillStyle = '#6B9BD1';
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    resizeCanvas();
    initParticles();
    animateParticles();
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
}

// ===================================================
// SMOOTH SCROLL MEJORADO
// ===================================================
function setupSmoothScroll() {
    // Detectar navegación por teclado para accesibilidad
    let isTabbing = false;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            isTabbing = true;
        }
    });
    
    document.addEventListener('mousedown', () => {
        isTabbing = false;
    });
    
    // Aplicar focus visible solo cuando se navega por teclado
    document.querySelectorAll('a, button, input, textarea, select').forEach(element => {
        element.addEventListener('focus', () => {
            if (isTabbing) {
                element.classList.add('keyboard-focus');
            }
        });
        
        element.addEventListener('blur', () => {
            element.classList.remove('keyboard-focus');
        });
    });
}

// ===================================================
// EFECTOS DE PULSO PARA ELEMENTOS MÉDICOS
// ===================================================
function setupPulseEffects() {
    const pulseElements = document.querySelectorAll('.pulse-ring');
    
    pulseElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animationDelay = `${index * 0.5}s`;
            element.classList.add('pulse-active');
        }, 1000);
    });
}

// Inicializar efectos de pulso después de que la página cargue
window.addEventListener('load', setupPulseEffects);