import $ from 'jquery';
import 'slick-carousel/slick/slick.js';

class Carousel {
  constructor() {
    this.sel = {
      carouselAwards: '.carouselAwards__sliders',
      carouselEvents: '.carouselEvents__sliders',
      carouselSignpost: '.carouselSignpost__sliders',
      carouselImageGallery: '.imageGallery__sliders',
      carouselOverlayTitle: '.overlay__title',
      carouselOverlay: '.overlay__wrapper',
      quoteSlider: '.quote__slider',
      carouselSignpostPanel: '.carouselSignpost',
      imageGalleryPanel: '.imageGallery'
    };
    this.init = this.init.bind(this);
    this.bindEvents = this.bindEvents.bind(this);
    this.setCarousel = this.setCarousel.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.updateButtonPosition = this.updateButtonPosition.bind(this);
  }

  bindEvents() {
    this.setCarousel();
    this.toggleOverlay();
    this.updateButtonPosition();
    $(window).on('resize', () => {
      this.setCarousel();
      this.updateButtonPosition();
    });
  }

  setCarousel() {
    if (!!$(this.sel.carouselEvents).length) {
      let autoplay = $(this.sel.carouselEvents).attr('data-autoplay') !== undefined;
      let autoplaySpeed = autoplay ? parseInt($(this.sel.carouselEvents).attr('data-autoplay')) : 0;
      $(this.sel.carouselEvents).not('.slick-initialized').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        autoplay,
        autoplaySpeed
      });
    }
    if (!!$(this.sel.carouselAwards).length) {
      console.log('here carousel');
      let autoplay = $(this.sel.carouselAwards).attr('data-autoplay') !== undefined;
      let autoplaySpeed = autoplay ? parseInt($(this.sel.carouselAwards).attr('data-autoplay')) : 0;
      $(this.sel.carouselAwards).not('.slick-initialized').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        autoplay,
        autoplaySpeed
      });
    }
    if (!!$(this.sel.carouselSignpost).length) {
      let autoplay = $(this.sel.carouselSignpost).attr('data-autoplay') !== undefined;
      let autoplaySpeed = autoplay ? parseInt($(this.sel.carouselSignpost).attr('data-autoplay')) : 0;
      $(this.sel.carouselSignpost)
        .not('.slick-initialized')
        .slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          variableWidth: true,
          autoplay,
          autoplaySpeed,
          responsive: [
            {
              breakpoint: 576,
              settings: 'unslick'
            }
          ]
        });
    }

    if (!!$(this.sel.carouselImageGallery).length) {
      let autoplay = $(this.sel.carouselImageGallery).attr('data-autoplay') !== undefined;
      let autoplaySpeed = autoplay ? parseInt($(this.sel.carouselImageGallery).attr('data-autoplay')) : 0;
      $(this.sel.carouselImageGallery).not('.slick-initialized').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        autoplay,
        autoplaySpeed
      });
    }

    if (!!$(this.sel.quoteSlider).length) {
      let autoplay = $(this.sel.quoteSlider).attr('data-autoplay') !== undefined;
      let autoplaySpeed = autoplay ? parseInt($(this.sel.quoteSlider).attr('data-autoplay')) : 0;
      $(this.sel.quoteSlider).not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay,
        autoplaySpeed
      });
    }
  }

  toggleOverlay() {
    $(document).on('click', this.sel.carouselOverlayTitle, (e) => {
      if ($(e.target).parent().hasClass('show')) {
        $(e.target).parent().removeClass('show');
      } else {
        $(this.sel.carouselOverlay).removeClass('show');
        $(e.target).parent().addClass('show');
      }
    });
  }

  updateButtonPosition() {
    if (!!$(this.sel.carouselSignpostPanel).length) {
      let height = $(this.sel.carouselSignpostPanel).find('.introPanelBlock').height() + 1;
      $(this.sel.carouselSignpostPanel).find('.slick-arrow').css('top', height);
    }
    if (!!$(this.sel.imageGalleryPanel).length) {
      let height = $(this.sel.imageGalleryPanel).find('.introPanelBlock').height() + 1;
      $(this.sel.imageGalleryPanel).find('.slick-arrow').css('top', height);
    }
  }

  init() {
    this.bindEvents();
  }
}

export default new Carousel();
