// ===============================================
// LOADING SCREEN
// ===============================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.getElementById('loadingProgress');
    const loadingPercentage = document.getElementById('loadingPercentage');
    
    document.body.classList.add('loading');
    
    let progress = 0;
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.classList.remove('loading');
            }, 500);
        }
        
        loadingProgress.style.width = progress + '%';
        loadingPercentage.textContent = Math.floor(progress) + '%';
    }, 150);
}

// ===============================================
// CURSOR TRAIL EFFECT
// ===============================================
function initCursorTrail() {
    const canvas = document.getElementById('cursorCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 20;
    
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.life = 1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 0.02;
            if (this.size > 0.2) this.size -= 0.05;
        }
        
        draw() {
            ctx.fillStyle = `rgba(0, 255, 136, ${this.life})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Add glow
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(0, 255, 136, 0.5)';
        }
    }
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create particles
        for (let i = 0; i < 2; i++) {
            particles.push(new Particle(mouseX, mouseY));
        }
    });
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.shadowBlur = 0;
        
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            
            if (particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }
        
        // Keep particle count reasonable
        if (particles.length > particleCount) {
            particles.splice(0, particles.length - particleCount);
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===============================================
// RIPPLE EFFECT ON CLICK
// ===============================================
function createRipple(e) {
    const target = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    target.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Apply ripple to buttons and cards
document.addEventListener('DOMContentLoaded', () => {
    const rippleElements = document.querySelectorAll('.btn, .project-card, .achievement-card, .skill-category, .tech-item');
    
    rippleElements.forEach(element => {
        element.addEventListener('click', createRipple);
    });
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===============================================
// COMPREHENSIVE SCROLL ANIMATION SYSTEM
// ===============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    element.classList.add('animated');
                }, delay);
                
                // Unobserve after animation to improve performance
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ===============================================
// PARALLAX SCROLL EFFECT
// ===============================================
function parallaxScroll() {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const heroContent = hero.querySelector('.container');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrollY / window.innerHeight);
        }
    }
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(parallaxScroll);
});

// ===============================================
// STATS COUNTER ANIMATION
// ===============================================
const statValues = document.querySelectorAll('.stat-value');
let statsAnimated = false;

function animateStats() {
    if (statsAnimated) return;
    
    const aboutSection = document.querySelector('.about');
    if (!aboutSection) return;
    
    const rect = aboutSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight * 0.75) {
        statsAnimated = true;
        
        statValues.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + (target >= 100 ? '+' : '');
                }
            };
            
            updateCounter();
        });
    }
}

window.addEventListener('scroll', animateStats);

// ===============================================
// SKILL BARS ANIMATION
// ===============================================
const skillBarItems = document.querySelectorAll('.skill-bar-item');

function animateSkillBars() {
    skillBarItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        
        if (rect.top < window.innerHeight * 0.8 && !item.classList.contains('visible')) {
            setTimeout(() => {
                item.classList.add('visible');
                
                const fill = item.querySelector('.skill-bar-fill');
                const width = fill.getAttribute('data-width');
                fill.style.setProperty('--skill-width', width + '%');
            }, index * 100);
        }
    });
}

window.addEventListener('scroll', animateSkillBars);

// ===============================================
// PARTICLE SYSTEM
// ===============================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// ===============================================
// CANVAS BACKGROUND ANIMATION
// ===============================================
function initCanvas() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 80;
    const connectionDistance = 150;
    
    class CanvasParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 255, 136, 0.5)';
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new CanvasParticle());
    }
    
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 255, 136, ${0.15 * (1 - distance / connectionDistance)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawConnections();
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===============================================
// MOUSE PARALLAX EFFECT
// ===============================================
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
    
    const bgGradient = document.querySelector('.bg-gradient');
    if (bgGradient) {
        bgGradient.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    }
});

// ===============================================
// SCROLL PROGRESS BAR
// ===============================================
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: rgba(42, 42, 42, 0.5);
        z-index: 10000;
        pointer-events: none;
    `;
    
    const progressFill = document.createElement('div');
    progressFill.className = 'scroll-progress-bar';
    progressFill.style.cssText = `
        height: 100%;
        background: linear-gradient(90deg, #00ff88, #00cc6d);
        width: 0%;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px #00ff88;
    `;
    
    progressBar.appendChild(progressFill);
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressFill.style.width = scrolled + '%';
    });
}

// ===============================================
// FORM SUBMISSION
// ===============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// ===============================================
// ACTIVE SECTION HIGHLIGHTING
// ===============================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--accent)';
                } else {
                    link.style.color = 'var(--text-dim)';
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===============================================
// TECH STACK ANIMATION
// ===============================================
const techStack = document.querySelector('.tech-stack');
if (techStack) {
    const techItems = techStack.querySelectorAll('.tech-item');
    
    techItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
    
    const techObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.tech-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, index * 50);
                });
                techObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    techObserver.observe(techStack);
}

// ===============================================
// CONSOLE WELCOME MESSAGE
// ===============================================
console.log('%c Welcome to my portfolio! ', 'background: #00ff88; color: #0a0a0a; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Built with passion and determination 🚀', 'color: #00ff88; font-size: 14px;');

// ===============================================
// INITIALIZE ALL ANIMATIONS
// ===============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully! ✨');
    
    // Initialize loading screen first
    initLoadingScreen();
    
    // Initialize cursor trail
    initCursorTrail();
    
    // Initialize all other systems
    initScrollAnimations();
    createParticles();
    initCanvas();
    createScrollProgress();
    animateStats();
    animateSkillBars();
    
    // Trigger hero animations with delay
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .animate-on-scroll');
        heroElements.forEach(el => el.classList.add('animated'));
    }, 1500);
});

// ===============================================
// PERFORMANCE MONITORING
// ===============================================
if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%c Page Load Time: ${pageLoadTime}ms`, 'color: #00ff88; font-size: 12px;');
    });
}
