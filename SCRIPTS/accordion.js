const accordions = document.querySelectorAll('.accordion-header');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = document.getElementById('lightboxClose');
    const images = document.querySelectorAll('.side-container img');

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

    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const openItem = document.querySelector('.accordion-item.active');

        item.classList.toggle('active');
        });
    });