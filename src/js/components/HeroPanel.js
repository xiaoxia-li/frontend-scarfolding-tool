import $ from 'jquery';

class HeroPanel {
  constructor() {
    this.sel = {
      heroPanel: '.heroPanel',
      loopingText: '.loopingText',
      fallbackText: '.loopingText__fallback'
    };

    this.init = this.init.bind(this);
  }
  init() {
    $(this.sel.heroPanel).find(this.sel.fallbackText).addClass('d-none v-hidden');
    $(this.sel.heroPanel).find(this.sel.loopingText).removeClass('d-none v-hidden');
  }
}

export default new HeroPanel();
