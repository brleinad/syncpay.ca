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

    if (question) {
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
    }
});

// ===========================
// Language Toggle
// ===========================
// Language switching now works via separate HTML files (index.html and index-fr.html)
// The active state is set in the HTML based on which page is loaded

// ===========================
// Waitlist Form Submission
// ===========================
const waitlistForm = document.getElementById('waitlistForm');

if (waitlistForm) {
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

      console.log('BOB: ', response)

        if (response.ok) {
            // Save email and locale to localStorage for pricing page
            localStorage.setItem('customerEmail', data.email);
            localStorage.setItem('customerLocale', language);

            // Navigate to pricing page based on language
            const pricingPage = language === 'fr' ? 'pricing-fr.html' : 'pricing.html';

            showToast('Success! Redirecting to pricing...');

            // Redirect after short delay
            setTimeout(() => {
                window.location.href = pricingPage;
            }, 1500);
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
}

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
// Stripe Buy Button Configuration
// ===========================

// Configure Stripe buy buttons with customer email and locale from localStorage
function configureStripeBuyButtons() {
    // Get customer email from localStorage
    const customerEmail = localStorage.getItem('customerEmail');

    // Get locale from localStorage, or default to page language
    const storedLocale = localStorage.getItem('customerLocale');
    const pageLanguage = document.documentElement.lang || 'en';
    const locale = storedLocale || pageLanguage;

    // Find all stripe buy buttons
    const buyButtons = document.querySelectorAll('stripe-buy-button');

    buyButtons.forEach(button => {
        // Set customer email if available
        if (customerEmail && customerEmail.trim() !== '') {
            button.setAttribute('customer-email', customerEmail);
            console.log('Set customer email on buy button:', customerEmail);
        }

        // Set locale based on page language or stored preference
        // Stripe supports 'en' and 'fr' among other locales
        button.setAttribute('locale', locale);
        console.log('Set locale on buy button:', locale);
    });
}

// Run when DOM is fully loaded
// Use a slight delay to ensure stripe-buy-button elements are rendered
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(configureStripeBuyButtons, 100);
    });
} else {
    // DOM already loaded
    setTimeout(configureStripeBuyButtons, 100);
}
