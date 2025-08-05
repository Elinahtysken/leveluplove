// Level up Love - JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Navigation button functionality (placeholder)
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Skip FAQ functionality for buttons with onclick handlers
            if (this.hasAttribute('onclick')) return;
            
            const buttonText = this.textContent;
            if (buttonText !== 'FAQ') {
                showMessage(`${buttonText} functionality coming soon!`, 'info');
            }
        });
    });

    // Form handling - LET FORMSPREE HANDLE THE SUBMISSION
    const form = document.getElementById('registrationForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Don't prevent default - let Formspree handle it
            showMessage('Submitting your application...', 'info');
        });
    }

    // FAQ Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Backup email function
function sendViaEmail() {
    const form = document.getElementById('registrationForm');
    const formData = new FormData(form);
    
    const name = formData.get('full_name');
    const linkedin = formData.get('linkedin_profile');
    const phone = formData.get('phone_number');
    const age = formData.get('age');
    const seeking = formData.get('seeking_gender');
    const height = formData.get('height_cm');
    
    const subject = 'Ny registrering - Level up Love';
    const body = `Hej!

Här kommer en ny registrering från Level up Love:

Namn: ${name}
LinkedIn: ${linkedin}
Telefon: ${phone}
Ålder: ${age}
Söker: ${seeking}
Längd: ${height} cm

Hälsningar,
Level up Love webbsida`;

    const mailtoLink = `mailto:elinamariatyskling@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Form validation function
function validateForm(data) {
    const errors = [];
    
    // Check required fields
    if (!data.linkedin || !data.linkedin.includes('linkedin.com')) {
        errors.push('Ange en giltig LinkedIn URL');
    }
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Ange ditt fullständiga namn');
    }
    
    if (!data.phone || !isValidPhoneNumber(data.phone)) {
        errors.push('Ange ett giltigt telefonnummer');
    }
    
    if (!data.age || data.age < 18 || data.age > 100) {
        errors.push('Ålder måste vara mellan 18 och 100 år');
    }
    
    if (!data.seeking) {
        errors.push('Välj vad du söker');
    }
    
    if (!data.height || data.height < 100 || data.height > 250) {
        errors.push('Ange en giltig längd i cm');
    }
    
    // Show errors if any
    if (errors.length > 0) {
        showMessage(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

// Phone number validation
function isValidPhoneNumber(phone) {
    // Basic Swedish phone number validation
    const phoneRegex = /^(\+46|0)(7[0-9]|[1-9][0-9])[0-9]{7,8}$/;
    const cleanPhone = phone.replace(/\s/g, '');
    return phoneRegex.test(cleanPhone);
}

// Message display function
function showMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = message;
    
    // Add CSS for message styling
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        max-width: 300px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        animation: slideIn 0.3s ease;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            messageDiv.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
            break;
        case 'error':
            messageDiv.style.background = 'linear-gradient(135deg, #dc3545, #e74c3c)';
            break;
        case 'info':
            messageDiv.style.background = 'linear-gradient(135deg, #17a2b8, #20c997)';
            break;
    }
    
    // Add animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(messageDiv);
    
    // Remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                messageDiv.remove();
            }, 300);
        }
    }, 5000);
}

// Smooth scrolling for future navigation links
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}
