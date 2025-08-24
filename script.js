// Elements
const intro = document.getElementById('intro-screen');
const profileSection = document.querySelector('.profile-selection');
const navbar = document.querySelector('.navbar');
const footerEl = document.querySelector('footer');
const homeLink = document.getElementById('home-link');

// Show main content function
function showMainContent(section = 'top-picks', profileImgSrc = null) {
    // Hide intro & profile selection
    if (intro) intro.style.display = 'none';
    if (profileSection) profileSection.style.display = 'none';

    // Show main content
    if (navbar) navbar.style.display = 'flex';
    document.querySelectorAll('.hero, .top-picks, .continue-watching').forEach(el => el.style.display = 'block');
    if (footerEl) footerEl.style.display = 'block';
    document.body.style.overflow = 'auto';

    // Display selected profile icon in navbar
    if (profileImgSrc) {
        const profileIcon = document.getElementById('profile-icon');
        if (profileIcon) profileIcon.src = profileImgSrc;
    }

    // Scroll to specific section
    const sectionEl = document.querySelector(`.${section}`);
    if (sectionEl) window.scrollTo({ top: sectionEl.offsetTop, behavior: 'smooth' });
}

// Add click listeners for each profile
document.querySelectorAll('.profile').forEach(p => {
    p.addEventListener('click', () => {
        const imgSrc = p.querySelector('img').src;
        showMainContent('top-picks', imgSrc);
    });
});

// Home button
if (homeLink) {
    homeLink.addEventListener('click', e => {
        e.preventDefault();
        const profileIconSrc = document.getElementById('profile-icon')?.src || null;
        showMainContent('top-picks', profileIconSrc);
    });
}

// Intro click: hide intro, show profiles
if (intro) {
    intro.addEventListener('click', () => {
        intro.style.display = 'none';
        if (profileSection) profileSection.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }, { once: true });
}

// Only horizontal-wheel for the carousels, NOT the Who's Watching profiles
document.querySelectorAll('.pick-buttons').forEach(container => {
  container.addEventListener('wheel', e => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }, { passive: false });
});
