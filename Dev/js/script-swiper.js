const slides = document.querySelectorAll('.product');
const swiper = new Swiper('.mySwiper', {
  // Configuraciones de Swiper
  on: {
    slideChangeTransitionEnd: function() {
      // Reinicia todas las slides para ocultar la información del producto
      slides.forEach(function(slide) {
        slide.querySelector('.product-info').classList.remove('show');
      });
      
      // Muestra la información del producto del slide actual
      const currentSlide = slides[this.activeIndex];
      currentSlide.querySelector('.product-info').classList.add('show');
    }
  }
});
