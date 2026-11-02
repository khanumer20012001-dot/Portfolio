/**
 * Portfolio Interaction Script
 * Mobile-first navigation, tab filtering, sticky header offset scroll, and form handling
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = navLinks.classList.toggle('active');
            hamburgerBtn.classList.toggle('active', isActive);
            hamburgerBtn.setAttribute('aria-expanded', String(isActive));
        });

        // Close mobile menu when any nav item is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close when clicking outside of nav
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburgerBtn.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // 2. Portfolio Filtering with Smooth Transitions
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });

            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const filterValue = btn.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(12px)';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 20);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Header Offset Smooth Scrolling
    const headerHeight = 64;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-btn');

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'SENDING...';
            }

            // Simulate form submission
            setTimeout(() => {
                formFeedback.className = 'form-feedback success';
                formFeedback.textContent = 'Thank you! Your message has been sent successfully.';
                contactForm.reset();

                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'SUBMIT';
                }

                setTimeout(() => {
                    formFeedback.textContent = '';
                }, 5000);
            }, 800);
        });
    }
});
