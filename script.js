document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const images = [
        'image1.png',
        'image2.png',
        'image3.png',
        'image4.png',
        'image5.png',
        'image6.png'

        // Добавьте сюда все ваши изображения
    ];
    let currentSlide = 0;

    // Создаем слайды для каждого изображения
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide' + (index === 0 ? ' active' : '');
        slide.style.backgroundImage = `url('images/${image}')`;
        slider.appendChild(slide);
    });

    // Функция для показа слайда
    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    // Функция для переключения на следующий слайд
    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    }

    // Меняем слайд каждую минуту
    setInterval(nextSlide, 60000);
});
