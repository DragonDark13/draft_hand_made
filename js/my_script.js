jQuery(function(){


    jQuery('.logo').viewportChecker({
    classToAdd: 'animated swing',
    classToRemove: 'invisible',
    offset: 50,
    });

    jQuery('.product_block, .team_person').viewportChecker({
    classToAdd: 'animated zoomIn',
    classToRemove: 'invisible',
    offset: 50,
    });

(function(){  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
var a = document.querySelector('.main_meni'), b = null;  // селектор блока, который нужно закрепить
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
function Ascroll() {
  if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя

    }
    b = document.createElement('div');  // создать потомка
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок первым
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
    a.style.padding = '0';
    a.style.border = '0';  // если элементу присвоен padding или border
  }
  if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
    b.className = 'sticky';
  } else {
    b.className = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);  // если изменить размер окна браузера, измениться ширина элемента
}
})()






        jQuery('a[href^="#"]').bind('click.smoothscroll',function (e) {
            e.preventDefault();

            var target = this.hash,
            jQuerytarget = jQuery(target);

            jQuery('html, body').stop().animate({
                'scrollTop': jQuerytarget.offset().top
            }, 400, 'swing', function () {
                window.location.hash = target;
            });
        });


        // var myWidth = 0;
        // myWidth = window.innerWidth;
        // jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        // jQuery(window).resize(function(){
        //     var myWidth = 0;
        //     myWidth = window.innerWidth;
        //     jQuery('#size').remove();
        //     jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        // });


});