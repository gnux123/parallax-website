'use strict';

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;

var body = document.querySelector('.parallax'),
    scrollTop = 0;

var lv0 = body.querySelector('.parallax__layer--deep'),
    lv1 = body.querySelector('.parallax__layer--back'),
    lv2 = body.querySelector('.parallax__layer--base'),
    lv3 = body.querySelector('.parallax__layer--fore');

  body.addEventListener('scroll',function(e){
    scrollTop = body.scrollTop;
    lv0.style.top = parseInt(scrollTop * 0.333) + 'px';
    lv2.style.top = (scrollTop * -1) + 'px';
    lv3.style.top = (scrollTop * -2) + 'px';
});
