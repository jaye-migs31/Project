document.addEventListener("DOMContentLoaded", () => {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.indicator');

        function showSlide(index) {
            currentSlide = (index + slides.length) % slides.length;
            document.getElementById('carousel').style.transform = `translateX(-${currentSlide * 100}%)`;
            indicators.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
        }

        window.moveSlide = direction => showSlide(currentSlide + direction);
        window.goToSlide = index => showSlide(index);

        showSlide(0);
        setInterval(() => moveSlide(1), 5000);
    });