import $ from 'jquery';

class Header {
  constructor() {
    this.sel = {
      component: '.header',
      umbrellaNav: '.header__umbrella',
      navLink: '.hasSublevel',
      rootLevel: '.rootlevel',
      headerLogo: '.header__logo',
      navicon: '.navicon',
      navigation: '.navigation',
      navWrapper: '.navigation__wrapper',
      backLevelOne: '.navigation__backbtnone',
      backLevelTwo: '.navigation__backbtntwo',
      overlayPanel: '.overlayPanel',
      warningPanelClose: '.warningPanel__closeButton',
      warningPanel: '.warningPanel'
    };

    this.headerFixedClass = 'header--fixed';
    this.overlayPanelFixedClass = 'overlayPanel--headerfixed';
    this.navOpenClass = 'navigation--open';

    this.init = this.init.bind(this);
    this.bindEvents = this.bindEvents.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.gotoNextLevel = this.gotoNextLevel.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  bindEvents() {
    this.gotoNextLevel();
    this.toggleNav();
    $(window).on('scroll', this.handleScroll);
    $(document).on('click', this.sel.backLevelOne, this.goBack);
    $(document).on('click', this.sel.backLevelTwo, this.goBack);

    $(document).on('click', this.sel.warningPanelClose, (evt) => {
      evt.preventDefault();
      const $warningPanel = $(evt.currentTarget).closest(this.sel.warningPanel);

      sessionStorage.setItem(`hidewarning-${$warningPanel.attr('data-warning-id')}`, true);
      $warningPanel.hide();
    });

    // show warning Panels that havent been added to cookies.
    $('[data-warning-id]').each((_, item) => {
      const storedWarningKey = `hidewarning-${$(item).attr('data-warning-id')}`;
      if (!sessionStorage[storedWarningKey]) {
        $(item).removeClass('v-hidden d-none');
      }
    });
  }

  gotoNextLevel() {
    $(document).on('click', this.sel.navLink, (e) => {
      if ($(e.target).hasClass('hasSublevel')) {
        $(e.target).siblings().removeClass('selected');
        $(e.target).siblings().children().find('.selected').removeClass('selected');
        $(e.target).addClass('selected');
        // The scoll animation for mobile resolution, the desktop version won't scroll
        let leftPos = $(this.sel.navigation).scrollLeft();
        let leftMargin = ($(document).width() - $(this.sel.navWrapper).width()) / 2;
        $(this.sel.navigation).animate(
          {
            scrollLeft: leftPos + leftMargin + $(document).width()
          },
          500
        );
      }
    });
  }

  toggleNav() {
    $(this.sel.headerLogo).on('click', () => {
      if ($(this.sel.navicon).hasClass('open')) {
        $(this.sel.navicon).removeClass('open');
        $(this.sel.navigation).slideUp(0, () => {
          $(this.sel.component).removeClass('header--open');
          $(this.sel.navigation).removeClass(this.navOpenClass);
          $(this.sel.body).css('overflow', 'auto');
        });
        return;
      }
      $(this.sel.navicon).addClass('open');
      $(this.sel.component).addClass('header--open');
      $(this.sel.navigation).addClass(this.navOpenClass);
      $(this.sel.navigation).slideDown(0);
      $(this.sel.body).css('overflow', 'hidden');
    });
  }

  goBack(e) {
    let leftPos = $(this.sel.navigation).scrollLeft();
    let leftMargin = 0;
    if ($(e.target).hasClass('navigation__backbtnone')) {
      leftMargin = ($(document).width() - $(this.sel.navWrapper).width()) / 2;
    }
    $(this.sel.navigation).animate(
      {
        scrollLeft: leftPos - leftMargin - $(document).width()
      },
      500
    );
  }

  handleScroll() {
    if ($(window).scrollTop() > 0) {
      $(this.sel.component).addClass(this.headerFixedClass);
      if ($(this.sel.overlayPanel).length) {
        $(this.sel.overlayPanel).addClass(this.overlayPanelFixedClass);
      }
      return;
    }
    $(this.sel.component).removeClass(this.headerFixedClass);
    $(this.sel.overlayPanel).removeClass(this.overlayPanelFixedClass);
  }

  init() {
    this.bindEvents();
  }
}

export default new Header();
