$(document).ready(function () {
  $('.sliderBlockSlider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
  });

  $('.sliderItem').slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  });

  $('.newsSlider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  });


  // Start top slider main page
  var $slider = $('.collectionTopLeftItem');
  var $currentSlide = $('.current-slide');
  var $totalSlides = $('.total-slides');

  $slider.on('init afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $currentSlide.text(i);
    $totalSlides.text(slick.slideCount);
  });

  $slider.slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });
});

// Start tabs setting
$(document).ready(function () {
  $('#tab-container').easytabs({
    animationSpeed: 'fast',
    updateHash: false,
  });

  $('#tab-container2').easytabs({
    animationSpeed: 'fast',
    updateHash: false,
  });
});


$(document).ready(function () {
  // Start select
  $('.select-selected').on('click', function () {
    $('.select-items').not($(this).parents('.custom-select').children('.select-items')).slideUp();
    $(this).parents('.custom-select').children('.select-items').slideToggle();
  });

  $(document).click(function (e) {
    let container = $(".custom-select");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".select-items").slideUp();
    }
  });

  $('.select-itemsIn__name').on('click', function () {
    let value = $(this).text();
    $(this).parents('.custom-select').children('.select-items').slideUp();
    $(this).parents('.custom-select').children('.select-selected').text(value);
  });
  // End select

  //Start select profil
  $('.headerMiddleRightProfileSelects__name').on('click', () => {
    $('.headerMiddleRightProfileSelectsIn').slideToggle();
  });

  $(document).click(function (e) {
    let container = $(".headerMiddleRightProfileSelects");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".headerMiddleRightProfileSelectsIn").slideUp();
    }
  });
  //End select profil


  // Start footer mobil menu
  $('.footerTopInLeftBlockMobil__title').on('click', function () {
    $(this).toggleClass('active');
    $(this).parents('.footerTopInLeftBlock').children('.footerTopInLeftBlock__list').slideToggle();
  });

  // Start metis menu mobil
  $("#menu1").metisMenu();
  $("#menu2").metisMenu();
  $("#menu3").metisMenu();

  // Start menu 
  $('.headerMiddleMobil').on('click', function () {
    $('.hederMenuMobil, .bgClick').addClass('active');
    $('body').addClass('hide');
  });

  $('.bgClick').on('click', function () {
    $(this).removeClass('active');
    $('.hederMenuMobil, .registerPopup, .registerPopupPassword').removeClass('active');
    $('body').removeClass('hide');
  });

  $('.hederMenuMobil__closed').on('click', function () {
    $('body').removeClass('hide');
    $('.hederMenuMobil, .bgClick').removeClass('active');
  });

  $('.hederMenuMobilTop__user.formOrderTop__href').on('click', function () {
    $('body').removeClass('hide');
    $('.hederMenuMobil, .bgClick').removeClass('active');
  });

  //Start num basket
  $('.minus').click(function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count + '');
    $input.change();
    return false;
  });

  $('.plus').click(function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1 + '');
    $input.change();
    return false;
  });

  //Start delete basket
  $('.basketBlockBodyItemRightBottom__delete').on('click', function (event) {
    event.preventDefault();
    $(this).parents('.basketBlockBodyItem').fadeOut();
  });

  // Start basket
  $('.basketHeader__btn').on('click', (e) => {
    e.preventDefault();
    $('.basketBlock, .bgClick').addClass('active');
    $('.bgClick').addClass('basket');
    $('body').addClass('hide');
  });

  $('.basketBlockTop__closed').on('click', () => {
    $('.basketBlock, .bgClick').removeClass('active');
    $('body').removeClass('hide');
    $('.bgClick').removeClass('basket');
  });


  $('.bgClick').on('click', () => {
    $('.basketBlock, .searchPopup').removeClass('active');
    $('body').removeClass('hide');
  });

  // Start search
  $('.headerBottomSearchForm__input input, .headerMiddleRight__search, .headerBottomSearchForm__btn').on('click', (event) => {
    event.preventDefault();
    $('.searchPopup, .bgClick').addClass('active');
    $('body').addClass('hide');
    $('.bgClick').removeClass('.basket');
  });

  $('.searchPopup__closed').on('click', () => {
    $('.searchPopup, .bgClick').removeClass('active');
    $('body').removeClass('hide');
  });

//   start search clear
  $('.select-itemsForm__clear').on('click', () => {
    $('.select-itemsForm input').val('');
  });

  // Start catalogOur
  $('.catalogOur__title').on('click', () => {
    $('.catalogOurContent').slideToggle();
  });

  // Start catalog filter closed
  $('.custom-select__closed').on('click', (e) => {
    e.preventDefault();
    $(".select-items").slideUp();
  });

  $('.headerBottomSearchFormLeftMobil__btn').on('click', () => {
    $('.headerBottomSearchFormLeftMobilFilter').addClass('active');
    $('body').addClass('hide');
  });

  $('.headerBottomSearchFormLeftMobilFilterTop__title').on('click', () => {
    $('.headerBottomSearchFormLeftMobilFilter').removeClass('active');
    $('body').removeClass('hide');
  });

  // Start checkbox
  let result = $('.result');
  let counts = {};

  function updateCount(groupId) {
    $(result).filter('[data-group="' + groupId + '"]').text(counts[groupId] === 0 ? '' : counts[groupId]);
  }

  $('.select-itemsInScroll input').on('click', function () {
    let groupId = $(this).closest('.custom-select').data('group');
    counts[groupId] = counts[groupId] || 0;
    if ($(this).is(':checked')) {
      counts[groupId]++;
    } else {
      counts[groupId]--;
    }
    updateCount(groupId);
  });


  $('.select-itemsInScroll__reset').on('click', function () {
    let groupId = $(this).closest('.custom-select').data('group');
    counts[groupId] = 0;
    $(this).parents('.custom-select').find('input').prop('checked', false);
    updateCount(groupId);
    $(this).parents('.custom-select').removeClass('active');
  });


  $('.select-items__btn').on('click', function () {
    $(this).parents('.select-items').slideUp();
    $(this).parents('.custom-select').addClass('active');
    $(this).parents('.custom-select').find('.select-selected_closed').addClass('active');
  });

  $('.select-selected_closed').on('click', function () {
    $(this).removeClass('active');
    let groupId = $(this).closest('.custom-select').data('group');
    counts[groupId] = 0;
    $(this).parents('.custom-select').find('input').prop('checked', false);
    updateCount(groupId);
    $(this).parents('.custom-select').removeClass('active');
  });


// Start video button
  $(".itemLeft__play").click(function () {
    const video = $(this).closest('.itemLeft').find(".itemLeft__video").get(0);
    $(this).toggleClass('pause');
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });


// Start item mobil selects
  $('.itemRightBlockBtn .select-selected').on('click', function () {
    $('body').addClass('hide');
    $('.bgClick').addClass('active');
  });

  $('.itemRightBlockBtn .select-itemsIn__name').on('click', function () {
    $('body').removeClass('hide');
    $('.bgClick').removeClass('active');
  });

  //Start popup size
  $('.itemRightBlockTableSize, .itemRightBlockBtn__popup').on('click', (e) => {
    $('.popupSize, .popupSizeText').addClass('active');
    $('body').addClass('hide');
  });

  $('.popupSize__closed').on('click', () => {
    $('.popupSize, .popupSizeText, .bgClick').removeClass('active');
    $('body').removeClass('hide');
  });

  $('.popupSizeText').on('click', () => {
    $('.popupSize, .popupSizeText').removeClass('active');
    $('body').removeClass('hide');
  });

  // Start 
  $('.formOrderTop__href').on('click', (e) => {
    e.preventDefault();
    $('.registerPopup, .bgClick').addClass('active');
    $('body').addClass('hide');
  });

  $('.registerPopup__closed').on('click', (e) => {
    e.preventDefault();
    $('.registerPopup').removeClass('active');
    $('body').removeClass('hide');
    $('.bgClick').removeClass('active');
  });

  // Start menuMobilSelect
  $('.menuMobilSelect').on('click', function () {
    $('.menuMobilSelectContent').slideToggle();
  });

  $(document).click(function (e) {
    let container = $(".menuMobilSelect");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".menuMobilSelectContent").slideUp();
    }
  });


  // Start popup
  var popupDiv = $('<div>').addClass('popupVisible');

  function showPopup() {
    $('body').prepend(popupDiv).addClass('hide');

    popupDiv.on('click', function () {
      $(this).remove();
      $('body').removeClass('hide');
      $('.popupBlock').removeClass('active');
    });
  }

  $('.orderStatusBottom__href').on('click', (event) => {
    event.preventDefault();
    showPopup();
    $('.popupBlock').addClass('active');
  });

  $('.popupBlock__closed, .popupBlockBottom__no').on('click', () => {
    $('body').removeClass('hide');
    $('.popupBlock').removeClass('active');
    popupDiv.remove();
  });

  $('.orderNumber__closed').on('click', function () {
    $(this).parents('.orderNumber').fadeOut();
  });

  // Start form input
  $('.input-container input').each(function () {
    $(this).on('focus blur', function (e) {
      $(this).siblings('label').toggleClass('active', e.type === 'focus' || this.value.length > 0);
    }).trigger('blur'); // Trigger blur to handle pre-filled inputs
  });


  // Start intlTelInput
  function phoneMask() {
    $('.phone_mask').intlTelInput({
      utilsScript: "js/utils.js",
      preferredCountries: ["ru", "by", "ua", "kz"]
    });
  }

  phoneMask();


  // Start calendar
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '<Пред',
    nextText: 'След>',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Нед',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    setDate: '2016-02-09',
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);

  $("#datepicker").datepicker({
    inline: true,
    changeMonth: true,
    changeYear: true,
    yearRange: '1930:+0',
    maxDate: '-18Y'
  });


  // Start personal
  $('.myDataRedact__redact').on('click', () => {
    $('.myDataRedact').fadeOut();
    $('.myDataSave').fadeIn();
  });

  $('.myDataSave__save').on('click', () => {
    $('.myDataRedact').fadeIn();
    $('.myDataSave').fadeOut();
  });

  // Start myDataSave__address
  $('.myDataSave__address').on('click', () => {
    $('.myAddressBlockAdd').slideToggle();
  });

  $('[data-fancybox]').fancybox({
    autoFocus: false,
  });


  window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")
  });


// Start slider on the page sale
  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    thumbs: {
      swiper: swiper,
    },
  });


  // Start basket counter heart on item page
    let count = parseInt($('#basketNum').text());
    if(isNaN(count)) {
      count = 0;
      $('#basketNum').hide();
    }

    $('#sendHeart').click(function(){
      let $heart = $('.containerHeart');
      $heart.show().css('opacity', 1);


      setTimeout(function(){
        $heart.hide();
        // Increment counter
        count++;
        $('#basketNum').text(count).show();
      }, 500);

  });


  $('.rememberPassword').on('click', (e) => {
    e.preventDefault();
    $('.registerPopupPassword').addClass('active');
  });

  $('.registerPopupPassword__closed').on('click',  () => {
    $('.registerPopupPassword').removeClass('active');
  });


  $('.popupBlockBottom__recovery').on('click', () => {
    $('.registerPopupPassword').removeClass('active');
  });


  $('.metismenuNot .has-arrow').on('click', function () {
    $(this).parents(".metismenuNot li").find('.metismenuIn').slideToggle();
  });


  // Привязка события для изменений
  $('.js-delivery-address').on('change', function(e) {
    e.preventDefault();
    let id = $(this).val();
    console.log('Changed value:', id);
  });

  $('.sendCode').on('click',  (event) => {
    event.preventDefault();
    $('.popupBlockBlackCode').slideDown();
    $('.codeSMS').addClass('block');
  });

  // таймер Получить новый код через
  let totalTime = 60; // 1 минута = 60 секунд
  let timerInterval = setInterval(function() {
    totalTime--;

    const minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    $('#timer').text(minutes + ':' + seconds);

    if (totalTime <= 0) {
      clearInterval(timerInterval);
      $('#targetElement').addClass('active');
    }
  }, 1000);

  // Только цыфры водит буквы не пускает вводить
  $('.codeSMS').on('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
});