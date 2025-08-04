// Level up Love - JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Navigation button functionality (placeholder)
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            showMessage(`${buttonText} funktionalitet kommer snart!`, 'info');
        });
    });

    // Form handling - LET FORMSPREE HANDLE THE SUBMISSION
    // Remove the preventDefault so Formspree can work
    const form = document.getElementById('registrationForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Don't prevent default - let Formspree handle it
            // Just show a quick message that we're processing
            showMessage('Skickar din registrering...', 'info');
        });
    }
});

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
