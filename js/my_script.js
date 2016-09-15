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

    // jQuery('.main_meni').viewportChecker({
    // // classToAdd: 'animated swing',
    // // classToRemove: 'invisible',
    // offset: 400,
    // invertBottomOffset: false,
    // callbackFunction: function(elem, action){
    // elem.addClass('active');
    // },
    // });

    // var Top_size = jQuery(".main_meni").offsetTop();
    // alert('Top_size');

    // jQuery("body>*").click(function(){
    // alert("Размер элемента:" + this.offsetTop +"x");
    // });

    // var  Top_size = jQuery(".main_meni").offsetTop();
    // alert(Top_size);

    // jQuery(".main_meni").offset(function(index, currentCoordinates) {


    //     return someObject;
    // })

    // function function_name(argument) {
    //     // body...
    // }

    // jQuery(".main_meni")

    // function TopMeniSize(elem) {

    //     var Top_size = (this.offsetTop) ;
    //     alert(Top_size);
    // }

//     var TopMeni = jQuery(".main_meni");

//     // TopMeniSize(TopMeni);


//     function offsetPosition(element) {
//       var offsetLeft = 0, offsetTop = 0;
//       do {
//            offsetLeft += element.offsetLeft;
//           offsetTop  += element.offsetTop;
//       } while (element = element.offsetParent);
//        return [offsetLeft, offsetTop];

//        alert(offsetLeft, offsetTop);
//   }

// offsetPosition(TopMeni);

// function getX(e) {
// var x = 0; // Начальное значение 0
// while(e) { // Начинать с элемента e
// x += e.offsetLeft; // Добавить смещение
// e = e.offsetParent; // И перейти по ссылке offsetParent
// }
// return x; // Вернуть сумму всех смещений
// // alert(0000);
// };

// jQuery(".main_meni")function getX(this) {
//     // body...
// };

// var a = jQuery(".main_meni");
// getX(a);

// function function_name(argument) {
//     // body...
// }

// function_name

// var TopMeni = jQuery(".main_meni");

// var TopSize = getX(TopMeni);

// alert(TopSize);

// TopMeni.t =  getX;


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


        var myWidth = 0;
        myWidth = window.innerWidth;
        jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        jQuery(window).resize(function(){
            var myWidth = 0;
            myWidth = window.innerWidth;
            jQuery('#size').remove();
            jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        });


});