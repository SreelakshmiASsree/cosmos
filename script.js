const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

function openMenu() {
    sideMenu.classList.remove('-right-64');
    sideMenu.classList.add('right-0');
}

function closeMenu() {
    sideMenu.classList.remove('right-0');
    sideMenu.classList.add('-right-64');
}


window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-100', 'backdrop-blur-lg',
            'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20'
        )
        navLinks.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm','dark:border','dark:shadow-white/70','dark:bg-transparent')

    } 
})



let currentSlide = 0;
const totalSlides = 3;
const sliderWrapper = document.getElementById("sliderWrapper");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Function to update slider position
function updateSlide() {
  sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto slide every 4 seconds
let autoSlide = setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}, 4000);

// Next button click
nextBtn.addEventListener("click", () => {
  clearInterval(autoSlide); // Reset autoplay
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
  autoSlide = restartAutoplay();
});

// Prev button click
prevBtn.addEventListener("click", () => {
  clearInterval(autoSlide); // Reset autoplay
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
  autoSlide = restartAutoplay();
});

// Function to restart autoplay
function restartAutoplay() {
  return setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
  }, 4000);
}





