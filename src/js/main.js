// Import components
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroPanel from './components/HeroPanel';
import Carousel from './components/Carousel';

$(function () {
  Header.init();
  Footer.init();
  HeroPanel.init();
  Carousel.init();
});
