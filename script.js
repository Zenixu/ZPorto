document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuIcon = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }

    // Social media links setup
    const socialLinks = {
        discord: {
            element: document.querySelector('.fa-discord'),
            url: 'https://discord.gg/2kt49PnWwe'  
        },
        github: {
            element: document.querySelector('.fa-github'),
            url: 'https://github.com/Zenixu'  
        },
        instagram: {
            element: document.querySelector('.fa-instagram'),
            url: 'https://instagram.com/Zennrch'  
        }
    };

    // Add click events to social media icons
    Object.values(socialLinks).forEach(({element, url}) => {
        if (element) {
            element.addEventListener('click', () => {
                window.open(url, '_blank');
            });
            // Add pointer cursor
            element.style.cursor = 'pointer';
        }
    });

    // GitHub visit button
    const visitBtn = document.querySelector('.visit-btn');
    if (visitBtn) {
        visitBtn.addEventListener('click', () => {
            window.open(socialLinks.github.url, '_blank');
        });
    }

    // Button group functionality
    const downloadBtn = document.querySelector('.btn-group .btn:first-child');
    const contactBtn = document.querySelector('.btn-group .btn:last-child');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            alert('CV Download akan segera tersedia!');
            // Uncomment dan sesuaikan kode di bawah ini ketika CV sudah tersedia
            /*
            const link = document.createElement('a');
            link.href = 'path/to/your/cv.pdf';
            link.download = 'Zennrch-CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            */
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Contact form functionality
    const sendBtn = document.querySelector('.input-box .btn');
    const emailInput = document.querySelector('.input-box input');

    if (sendBtn && emailInput) {
        sendBtn.addEventListener('click', () => {
            const email = emailInput.value.trim();
            if (email) {
                // Basic email validation
                if (email.includes('@') && email.includes('.')) {
                    window.location.href = `mailto:${email}`;
                } else {
                    alert('Mohon masukkan alamat email yang valid');
                }
            } else {
                alert('Mohon masukkan alamat email');
            }
        });
    }

    // Grid cards hover effect
    const gridCards = document.querySelectorAll('.grid-card');
    gridCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Smooth scroll for all navigation links
    const navAnchors = document.querySelectorAll('a[href^="#"]');
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});
