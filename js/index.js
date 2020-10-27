var section = $('.board section');
var tab = $('.board .tab a');
var item = $('.board li');

item.addClass('icon-dot-circled'); //클래스를 새로 만들땐 .을 붙히지 않는다.

tab.click(function (e) {
  e.preventDefault(); //위로 스크롤 되는것을 방지
  section.removeClass('is-active');
  $(this).parent().parent().addClass('is-active');
});