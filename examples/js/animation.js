
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.fx.dom');

var $d = goog.dom.createDom;

var el = $d('div', {},
    $d('img', {src: 'http://lh4.ggpht.com/__HC3vBAdElI/S7f7r5-l1tI/AAAAAAAACxc/AYncN9-S2Ps/s400/IMG_2934.jpg' })); 

document.body.appendChild(el);

fadeout();

function fadeout() {
  var anim = new goog.fx.dom.FadeOutAndHide(el, 1000);
  goog.events.listen(anim, goog.fx.Animation.EventType.END, fadein);
  anim.play();
}

function fadein() {
  var anim = new goog.fx.dom.FadeInAndShow(el, 1000);
  goog.events.listen(anim, goog.fx.Animation.EventType.END, fadeout);
  anim.play();
}
