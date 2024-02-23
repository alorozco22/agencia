const cardCoffee = document.querySelector('.cardCoffee');

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    cardCoffee.style.transform = `translateY(${scrollY * 0.3}px)`; // Adjust the multiplier to control the parallax effect
});