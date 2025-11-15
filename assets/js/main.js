/**
 * Main JavaScript for Gustavo Gennari Portfolio
 * Handles: Navigation, Smooth Scrolling, Mobile Menu, Scroll Animations
 */

// ===================================
// Navigation & Mobile Menu
// ===================================

const initNavigation = () => {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Add shadow to nav on scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
    };

    window.addEventListener('scroll', handleScroll);
};

// ===================================
// Smooth Scrolling
// ===================================

const initSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// ===================================
// Scroll Animations (Intersection Observer)
// ===================================

const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
};

// ===================================
// Active Navigation Link
// ===================================

const initActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    const highlightNavLink = () => {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.style.color = '#4DA1FF';
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNavLink);
};

// ===================================
// Typing Effect for Hero Tagline (Optional Enhancement)
// ===================================

const initTypingEffect = () => {
    const tagline = document.querySelector('.hero__tagline');
    if (!tagline) return;

    const originalText = tagline.textContent;
    const words = originalText.split(' | ');
    let currentWordIndex = 0;

    const rotateWords = () => {
        tagline.style.opacity = '0';

        setTimeout(() => {
            currentWordIndex = (currentWordIndex + 1) % words.length;
            const displayText = words.slice(0, currentWordIndex + 1).join(' | ');
            tagline.textContent = displayText;
            tagline.style.opacity = '1';
        }, 300);
    };

    // Uncomment to enable word rotation effect
    // setInterval(rotateWords, 3000);
};

// ===================================
// Email Copy Functionality
// ===================================

const initEmailCopy = () => {
    const emailLink = document.querySelector('.contact__email');

    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            const email = emailLink.textContent.trim();

            // Try to copy to clipboard
            if (navigator.clipboard) {
                e.preventDefault();
                navigator.clipboard.writeText(email).then(() => {
                    // Show temporary feedback
                    const originalText = emailLink.textContent;
                    emailLink.textContent = 'Email copied! ✓';

                    setTimeout(() => {
                        emailLink.textContent = originalText;
                    }, 2000);
                }).catch(() => {
                    // Fallback to mailto if copy fails
                    window.location.href = `mailto:${email}`;
                });
            }
        });
    }
};

// ===================================
// Initialize All Features
// ===================================

const init = () => {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initNavigation();
            initSmoothScroll();
            initScrollAnimations();
            initActiveNavLink();
            initTypingEffect();
            initEmailCopy();
        });
    } else {
        initNavigation();
        initSmoothScroll();
        initScrollAnimations();
        initActiveNavLink();
        initTypingEffect();
        initEmailCopy();
    }
};

// Start the application
init();

// ===================================
// Utilities
// ===================================

// Debounce function for performance optimization
const debounce = (func, wait = 20) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        init,
        initNavigation,
        initSmoothScroll,
        initScrollAnimations
    };
}
