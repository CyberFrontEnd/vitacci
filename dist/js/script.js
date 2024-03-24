$(document).ready(function () {
  // Start select
  $('.select-selected').on('click', function () {
    $(this).parents('.custom-select').children('.select-items').slideDown();
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

  // Start menu 
  $('.headerMiddleMobil').on('click', function () {
    $('.hederMenuMobil, .bgClick').addClass('active');
    $('body').addClass('hide');
  });

  $('.bgClick').on('click', function () {
    $(this).removeClass('active');
    $('.hederMenuMobil').removeClass('active');
    $('body').removeClass('hide');
  });

  $('.hederMenuMobil__closed').on('click', function () {
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
  $('.basketHeader__btn').on('click', () => {
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

});