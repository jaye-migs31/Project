const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = document.getElementById('lightboxClose');
const images = document.querySelectorAll('.light-container img');
const accordions = document.querySelectorAll('.accordion-header');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

// Close when clicking the X button
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Optional: close with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.style.display = 'none';
    }
});

function openAccordion(header) {
    const item = header.parentElement;

    // Close all accordions first
    document.querySelectorAll('.accordion-item').forEach(acc => {
        acc.classList.remove('active');
    });

    // Open the selected one
    item.classList.add('active');
}

// Add click listeners
accordions.forEach(header => {
    header.addEventListener('click', () => {
        openAccordion(header);
    });
});

// ✅ Open the first accordion by default when page loads
window.addEventListener('DOMContentLoaded', () => {
    if (accordions.length > 0) {
        openAccordion(accordions[0]);
    }
});