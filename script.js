// ===========================
// Smooth Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// ===========================
// FAQ Accordion
// ===========================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===========================
// Language Toggle
// ===========================
// Language switching now works via separate HTML files (index.html and index-fr.html)
// The active state is set in the HTML based on which page is loaded

// ===========================
// Hero Form Submission
// ===========================
const heroForm = document.getElementById('heroForm');
const heroEmail = document.getElementById('heroEmail');

heroForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = heroEmail.value.trim();

    if (!isValidEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    // Detect language
    const language = document.documentElement.lang || 'en';

    // Create FormData for submission
    const formData = new FormData();
    formData.append('email', email);
    formData.append('language', language);
    formData.append('form_type', 'hero');
    formData.append('timestamp', new Date().toISOString());

    // Log to console for debugging
    console.log('Hero Form Submission:', {
        email: email,
        language: language,
        form_type: 'hero',
        timestamp: new Date().toISOString()
    });

    // Submit to Formspree
    try {
        const response = await fetch('https://formspree.io/f/xnnolded', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showToast('Thanks! Check your email for updates.');
            heroEmail.value = '';

            // Scroll to full waitlist form
            setTimeout(() => {
                document.querySelector('.final-cta').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 1000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        showToast('Something went wrong. Please try again.', 'error');
        console.error('Hero form submission error:', error);
    }
});

// ===========================
// Waitlist Form Submission
// ===========================
const waitlistForm = document.getElementById('waitlistForm');

waitlistForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(waitlistForm);

    // Detect language based on page
    const language = document.documentElement.lang || 'en';

    // Add additional fields
    formData.append('language', language);
    formData.append('form_type', 'waitlist');
    formData.append('timestamp', new Date().toISOString());

    const data = {
        email: formData.get('email'),
        industry: formData.get('industry'),
        invoice_volume: formData.get('invoice_volume'),
        payment_types: formData.getAll('payment_types'),
        language: language,
        form_type: 'waitlist',
        timestamp: new Date().toISOString()
    };

    // Validate email
    if (!isValidEmail(data.email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    // Validate payment types (at least one selected)
    if (data.payment_types.length === 0) {
        showToast('Please select at least one payment type', 'error');
        return;
    }

    // Log to console for debugging
    console.log('Waitlist Form Submission:', data);

    // Get submit button
    const submitButton = waitlistForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;

    // Submit to Formspree
    try {
        const response = await fetch('https://formspree.io/f/xnnolded', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showToast('Success! Welcome to the waitlist. Check your email.');
            waitlistForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        showToast('Something went wrong. Please try again.', 'error');
        console.error('Form submission error:', error);
    } finally {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});

// ===========================
// Helper Functions
// ===========================

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Toast notification system
function showToast(message, type = 'success') {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    // Add styles
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        padding: '16px 24px',
        background: type === 'error' ? '#ef4444' : '#10b981',
        color: 'white',
        borderRadius: '10px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: '10000',
        fontSize: '15px',
        fontWeight: '600',
        maxWidth: '400px',
        animation: 'slideIn 0.3s ease-out'
    });

    // Add animation keyframes if not already added
    if (!document.getElementById('toast-animations')) {
        const style = document.createElement('style');
        style.id = 'toast-animations';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Remove toast after 4 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#" or if target doesn't exist
        if (href === '#' || !document.querySelector(href)) {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ===========================
// Performance Optimization
// ===========================

// Lazy load images when they come into viewport (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Analytics Helper (Optional)
// ===========================

// Track form interactions
function trackEvent(eventName, eventData = {}) {
    console.log('Event tracked:', eventName, eventData);

    // Integration points for analytics platforms:
    // Google Analytics: gtag('event', eventName, eventData);
    // Plausible: plausible(eventName, { props: eventData });
    // Mixpanel: mixpanel.track(eventName, eventData);
}

// Track key events
heroForm.addEventListener('focus', () => {
    trackEvent('hero_email_focus');
}, true);

waitlistForm.addEventListener('focus', () => {
    trackEvent('waitlist_form_focus');
}, true);

// ===========================
// Console Welcome Message
// ===========================
console.log(
    '%cSyncPay 🇨🇦',
    'font-size: 24px; font-weight: bold; color: #2563eb;'
);
console.log(
    '%cAutomating payment reconciliation for Canadian freelancers.',
    'font-size: 14px; color: #64748b;'
);
console.log(
    '%cInterested in our tech stack? We\'re hiring! Email us at careers@syncpay.ca',
    'font-size: 12px; color: #10b981; margin-top: 10px;'
);
