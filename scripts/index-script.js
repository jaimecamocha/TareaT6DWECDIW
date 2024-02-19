//boton hamburguesa
var menu = document.querySelector('.hamburger');

function toggleMenu(event) {
  this.classList.toggle('is-active');
  var menuPpal = document.querySelector(".menuppal");
  if(menuPpal)
    menuPpal.classList.toggle("is_active");
  event.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);

window.addEventListener('load', function() {
  if (window.innerWidth <= 768) {
    toggleMenu.call(menu, new Event('click'));
  }
});


//modo oscuro
const darkModeImage = document.getElementById('darkModeImage');
let darkModeEnabled = false;

darkModeImage.addEventListener('click', function() {
    const body = document.body;
    if (!darkModeEnabled) {
        body.style.backgroundColor = '#000';
        darkModeEnabled = true;
    } else {
        body.style.backgroundColor = '';
        darkModeEnabled = false;
    }
});

//slider
let currentImageIndex = 0;
const images = ["assets/imgs/carrusel1.jpg", "assets/imgs/carrusel2.jpg", "assets/imgs/carrusel3.jpg"];

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
}

function updateImage() {
  const imgElement = document.getElementById('currentImage');
  imgElement.src = images[currentImageIndex];
}



