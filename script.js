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
        title: 'Smart Expense Intelligence',
        description: `
            <p>Multi-tenant FinOps platform that ingests card feeds, scans receipts with Azure Cognitive Services, and highlights risky spend in real time.</p>
            <div class="modal-subtitle">Key Contributions</div>
            <ul class="modal-list">
                <li>Architected event-driven pipeline (Kafka + Node.js) processing 2M+ transactions/day with <strong>99.97% accuracy</strong>.</li>
                <li>Built React dashboard with drill-down analytics, anomaly heatmaps, and executive-ready KPIs.</li>
                <li>Integrated Azure Form Recognizer to auto-tag receipts in 0.7s and reduce manual finance effort by 68%.</li>
            </ul>
            <div class="modal-subtitle">My Responsibilities</div>
            <ul class="modal-list">
                <li>Led end-to-end solution design, sprint planning, and code reviews for a 5-engineer squad.</li>
                <li>Owned CI/CD (GitHub Actions + Azure DevOps) and blue/green deployments.</li>
                <li>Partnered with CFO stakeholders to translate compliance requirements into trackable product metrics.</li>
            </ul>
        `
    },
    2: {
        title: 'AI Resume Matcher',
        description: `
            <p>Talent intelligence service that compares candidate profiles against job descriptions using semantic embeddings and recruiter feedback loops.</p>
            <div class="modal-subtitle">Key Highlights</div>
            <ul class="modal-list">
                <li>Designed transformer-based similarity model that achieved <strong>92.4% precision</strong> on historical hiring data.</li>
                <li>Exposed REST + GraphQL APIs consumed by ATS partners for instant shortlist recommendations.</li>
                <li>Implemented explainability layer to show skill gaps, cultural fit signals, and salary benchmarks.</li>
            </ul>
            <div class="modal-subtitle">My Responsibilities</div>
            <ul class="modal-list">
                <li>Owned model training pipeline (PyTorch + FastAPI) and scheduled retraining with MLflow.</li>
                <li>Led integrations with ElasticSearch, enabling typo-tolerant search and facet filtering.</li>
                <li>Drove stakeholder demos, adoption workshops, and documentation for HR tech clients.</li>
            </ul>
        `
    },
    3: {
        title: 'Real-time Fleet Command',
        description: `
            <p>Operational intelligence cockpit ingesting 5K+ vehicle IoT streams, forecasting failures, and dispatching service teams automatically.</p>
            <div class="modal-subtitle">Key Outcomes</div>
            <ul class="modal-list">
                <li>Created WebSocket-driven map with live routes, driver behavior scoring, and SLA breach alerts.</li>
                <li>Built predictive maintenance model that reduced on-road breakdowns by <strong>37%</strong>.</li>
                <li>Automated compliance reports (fuel, emissions, load) for multi-country operations.</li>
            </ul>
            <div class="modal-subtitle">My Responsibilities</div>
            <ul class="modal-list">
                <li>Implemented TypeScript micro-frontends and GraphQL gateway stitching 12 services.</li>
                <li>Configured AWS IoT Core, Kinesis, and Lambda analytics pipeline with dynamic scaling.</li>
                <li>Championed observability (OpenTelemetry, Datadog) and 24/7 on-call runbooks.</li>
            </ul>
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

