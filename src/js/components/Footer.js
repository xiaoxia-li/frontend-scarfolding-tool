import $ from 'jquery';

class Footer {
  constructor() {
    this.sel = {
      componentScrollTop: '.footer',
      html: 'html'
    };

    this.init = this.init.bind(this);
    this.bindEvents = this.bindEvents.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  bindEvents() {
    this.scrollTop();
  }

  scrollTop() {
    $(document).on('click', this.sel.componentScrollTop, () => {
      $(this.sel.html).animate(
        {
          scrollTop: 0
        },
        500
      );
    });
  }

  init() {
    this.bindEvents();
  }
}

export default new Footer();
