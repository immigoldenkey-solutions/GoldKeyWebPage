// Initialize AOS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
});

// Loading Screen
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 1000);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle && navMenu) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Counter Animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200;
let hasAnimated = false;

const animateCounters = () => {
    if (hasAnimated) return;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                const statLabel = counter.closest('.stat-item').querySelector('.stat-label');
                if (statLabel && statLabel.innerText.includes('%')) {
                    counter.innerText = target + '%';
                } else {
                    counter.innerText = target + '+';
                }
            }
        };
        updateCount();
    });
    
    hasAnimated = true;
};

// Trigger counter animation when stats section is in view
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}

// Scroll to Top Button
const scrollToTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTop.classList.add('active');
    } else {
        scrollToTop.classList.remove('active');
    }
});

if (scrollToTop) {
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Show success message
        alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
        
        // Reset form
        contactForm.reset();
        
        // Optional: Send to WhatsApp
        const message = `Hola, me gustaría información sobre ${data.servicio}. Mi nombre es ${data.nombre}.`;
        const whatsappUrl = `https://wa.me/+573118848689?text=${encodeURIComponent(message)}`;
        // Uncomment to auto-open WhatsApp
        // window.open(whatsappUrl, '_blank');
    });
}

// Parallax Effect for Hero (light effect)
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-content, .hero-image');
            
            parallaxElements.forEach(element => {
                if (element && scrolled < 1000) {
                    const speed = 0.3;
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                }
            });
            
            ticking = false;
        });
        ticking = true;
    }
});

// Service Cards Enhanced Interaction
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

console.log('Gold Key Law - Website Loaded Successfully! 🔑✨');
