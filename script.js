const intro = document.getElementById('intro-screen');
const profile = document.querySelector('.profile-selection');
const sound = document.getElementById('tuduum-sound');

function showMainContent(showAll = false) {
    intro.style.display = 'none';
    profile.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.querySelector('.navbar').style.display = 'flex';
    document.querySelector('footer').style.display = 'block';

    const allSections = [
        '.hero', '.top-picks', '.continue-watching',
        '.skills', '.experience', '.projects',
        '.contact', '.music', '.reading', '.blogs'
    ];

    if (showAll) {
        // Show EVERYTHING
        allSections.forEach(sel => {
            const el = document.querySelector(sel);
            if (el) el.style.display = 'block';
        });
    } else {
        // Default = only Hero + Top Picks
        allSections.forEach(sel => {
            const el = document.querySelector(sel);
            if (el) el.style.display = 'none';
        });
        document.querySelector('.hero').style.display = 'block';
        document.querySelector('.top-picks').style.display = 'block';
    }
}

// 🔥 Home button → show ALL
const homeLink = document.getElementById('home-link');
if (homeLink) {
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showMainContent(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

