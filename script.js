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

document.querySelectorAll('.pick-buttons, .profiles').forEach(container => {
  let scrollAmount = 0;

  container.addEventListener('wheel', e => {
    e.preventDefault();
    scrollAmount += e.deltaY;

    const step = () => {
      if(Math.abs(scrollAmount) < 0.5) return scrollAmount = 0;
      container.scrollLeft += scrollAmount * 0.1;
      scrollAmount *= 0.9; // damping effect
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
});
