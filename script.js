document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    let currentSlide = 0;

    // Загружаем список изображений из JSON-файла
    fetch('images.json')
        .then(response => response.json())
        .then(images => {
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
        })
        .catch(error => console.error('Ошибка загрузки изображений:', error));
});
