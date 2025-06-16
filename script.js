document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuIcon = document.querySelector('#menu-icon');
  const navLinks = document.querySelector('.nav-links');

  if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }

  // Social media links
  const socialLinks = {
    discord: {
      element: document.querySelector('.fa-discord'),
      url: 'https://discord.gg/elloe'
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

  Object.values(socialLinks).forEach(({ element, url }) => {
    if (element) {
      element.addEventListener('click', () => {
        window.open(url, '_blank');
      });
      element.style.cursor = 'pointer';
    }
  });

  const visitBtn = document.querySelector('.visit-btn');
  if (visitBtn) {
    visitBtn.addEventListener('click', () => {
      window.open(socialLinks.github.url, '_blank');
    });
  }

  const downloadBtn = document.querySelector('.btn-group .btn:first-child');
  const contactBtn = document.querySelector('.btn-group .btn:last-child');

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      alert('Project belum bisa di download secara langsung');
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      alert('Contact section has been removed.');
    });
  }

  // Smooth scrolling for navigation links
  const navAnchors = document.querySelectorAll('a[href^="#"]');
  navAnchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active');
      }
    });
  });

  // Profile switching logic
  const profiles = [
    { name: 'Ibnurch', image: 'img/Iprof.jpg' },
    { name: 'Zennrch', image: 'img/Zprof.jpg' }
  ];
  let currentProfileIndex = 0;

  const profileNameElement = document.querySelector('#profile-name');
  const profileImageElement = document.querySelector('#profile-img');
  const switchProfileBtn = document.querySelector('#switch-profile-btn');

  if (switchProfileBtn && profileNameElement && profileImageElement) {
    switchProfileBtn.addEventListener('click', () => {
      currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
      const newProfile = profiles[currentProfileIndex];
      profileNameElement.textContent = newProfile.name;
      profileImageElement.src = newProfile.image;
    });
  }
});