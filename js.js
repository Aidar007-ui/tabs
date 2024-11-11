(function($) {
    $(function() {
      
      $('ul.tabs__menu').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.cards').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);

let box = document.querySelector('li')
let box__2 = document.querySelector('li')
let box__3 = document.querySelector('li')
let showLi = () =>{
    box.classList.toggle('background')
    box__2.classList.toggle('background__2')
    box__3.classList.toggle('background__3')
}

