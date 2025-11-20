// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add visual feedback
    themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg) scale(1)';
    }, 300);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Toggle About Section
const toggleAboutBtn = document.getElementById('toggleAbout');
const moreAbout = document.getElementById('moreAbout');

toggleAboutBtn.addEventListener('click', () => {
    moreAbout.classList.toggle('show');
    if (moreAbout.classList.contains('show')) {
        toggleAboutBtn.textContent = 'Read Less';
    } else {
        toggleAboutBtn.textContent = 'Read More';
    }
});

// Contact Button Click Event
const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Add a visual feedback
    contactBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        contactBtn.style.transform = 'scale(1)';
    }, 150);
});

// Email Button Click Event
const emailBtn = document.getElementById('emailBtn');
emailBtn.addEventListener('click', () => {
    // You can replace this with your actual email
    const email = 'your.email@example.com';
    window.location.href = `mailto:${email}?subject=Portfolio Contact`;
    
    // Add visual feedback
    emailBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        emailBtn.style.transform = 'scale(1)';
    }, 150);
});

// Project Button Click Events
const projectButtons = document.querySelectorAll('.project-button');
const projectModal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// Project details (you can update these with your actual project details)
const projectDetails = {
    1: {
        title: 'Project Name 1',
        description: `
            <p>Detailed description of your first featured project. This is where you can provide:</p>
            <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                <li>Project objectives and goals</li>
                <li>Technologies and tools used</li>
                <li>Key features and functionalities</li>
                <li>Challenges faced and solutions</li>
                <li>Results and impact</li>
            </ul>
            <p style="margin-top: 1rem;">You can also add links to live demos or GitHub repositories here.</p>
        `
    },
    2: {
        title: 'Project Name 2',
        description: `
            <p>Detailed description of your second featured project. Include information about:</p>
            <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                <li>What problem it solves</li>
                <li>Your role and contributions</li>
                <li>Technical implementation details</li>
                <li>Performance metrics or achievements</li>
                <li>Lessons learned</li>
            </ul>
            <p style="margin-top: 1rem;">Add any relevant screenshots, demos, or code samples.</p>
        `
    },
    3: {
        title: 'Project Name 3',
        description: `
            <p>Detailed description of your third featured project. Provide insights into:</p>
            <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                <li>Project scope and timeline</li>
                <li>Architecture and design decisions</li>
                <li>Collaboration and teamwork</li>
                <li>Innovation and creativity</li>
                <li>Future improvements</li>
            </ul>
            <p style="margin-top: 1rem;">Include any awards, recognition, or notable outcomes.</p>
        `
    }
};

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const project = projectDetails[projectId];
        
        if (project) {
            modalTitle.textContent = project.title;
            modalBody.innerHTML = project.description;
            projectModal.classList.add('show');
        }
        
        // Add visual feedback
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });
});

// Close Modal
closeModal.addEventListener('click', () => {
    projectModal.classList.remove('show');
});

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.remove('show');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('show')) {
        projectModal.classList.remove('show');
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .about-text');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Profile visit counter (per browser using localStorage)
document.addEventListener('DOMContentLoaded', () => {
    const viewsElement = document.getElementById('profileViewsCount');
    if (!viewsElement) return;

    const STORAGE_KEY = 'ashish_profile_views';
    let currentCount = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);

    // Increment count for this visit
    currentCount += 1;
    localStorage.setItem(STORAGE_KEY, String(currentCount));

    // Format number with commas for readability
    viewsElement.textContent = currentCount.toLocaleString();
});

