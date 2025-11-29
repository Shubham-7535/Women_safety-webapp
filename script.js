// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const sideNav = document.getElementById('sideNav');
const navClose = document.getElementById('navClose');
const overlay = document.getElementById('overlay');

navToggle.addEventListener('click', () => {
    sideNav.classList.add('active');
    overlay.classList.add('active');
});

navClose.addEventListener('click', () => {
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
});

// Page Navigation
const navLinks = document.querySelectorAll('.nav-links a, .footer-section a');
const pages = document.querySelectorAll('.page');

// Logo click to return to home page
document.querySelector('.logo').addEventListener('click', () => {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show home page
    document.getElementById('home-page').classList.add('active');
    
    // Close navigation if open
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show selected page
        document.getElementById(`${pageId}-page`).classList.add('active');
        
        // Close navigation if open
        sideNav.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Crime Statistics Chart
const ctx = document.getElementById('crimeChart').getContext('2d');
const crimeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Uttar Pradesh', 'Rajasthan', 'Maharashtra', 'West Bengal', 'Madhya Pradesh', 'Assam'],
        datasets: [{
            label: 'Crime Rate (per 100,000 women)',
            data: [65, 58, 45, 42, 38, 36],
            backgroundColor: [
                'rgba(138, 43, 226, 0.7)',
                'rgba(255, 105, 180, 0.7)',
                'rgba(147, 112, 219, 0.7)',
                'rgba(75, 0, 130, 0.7)',
                'rgba(186, 85, 211, 0.7)',
                'rgba(148, 0, 211, 0.7)'
            ],
            borderColor: [
                'rgba(138, 43, 226, 1)',
                'rgba(255, 105, 180, 1)',
                'rgba(147, 112, 219, 1)',
                'rgba(75, 0, 130, 1)',
                'rgba(186, 85, 211, 1)',
                'rgba(148, 0, 211, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Crime Rate (per 100,000 women)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'States'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: true,
                text: 'Crime Statistics Against Women by State',
                font: {
                    size: 16
                }
            }
        }
    }
});

// Impact Chart
const impactCtx = document.getElementById('impactChart').getContext('2d');
const impactChart = new Chart(impactCtx, {
    type: 'doughnut',
    data: {
        labels: ['Safety Workshops', 'Legal Assistance', 'Emergency Support', 'Community Outreach'],
        datasets: [{
            data: [35, 25, 20, 20],
            backgroundColor: [
                'rgba(138, 43, 226, 0.7)',
                'rgba(255, 105, 180, 0.7)',
                'rgba(147, 112, 219, 0.7)',
                'rgba(75, 0, 130, 0.7)'
            ],
            borderColor: [
                'rgba(138, 43, 226, 1)',
                'rgba(255, 105, 180, 1)',
                'rgba(147, 112, 219, 1)',
                'rgba(75, 0, 130, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Our Program Distribution',
                font: {
                    size: 16
                }
            }
        }
    }
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});