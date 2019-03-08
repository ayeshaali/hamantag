var i = 0;
var speed = 50;
var speed2 = 500;
var txt = 'Welcome to Trinity Sticker Tag, Agent|'
var id = 'title'

var alpha = 0;


function typeOut() {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeOut, speed);
  } else {
    blink();
    fadeIn();
  }
}
function blink() {
    el = document.getElementById(id)
    el.innerHTML = (el.innerHTML=="Welcome to Trinity Sticker Tag, Agent|") ? "Welcome to Trinity Sticker Tag, Agent<font color='black'>|</font>" : "Welcome to Trinity Sticker Tag, Agent|"
    setTimeout(blink, speed2);
}

function fadeIn() {
  var logo = document.getElementById('logo-img');
  logo.style.opacity = alpha;
  if(alpha < 1)alpha += .01;
  setTimeout(fadeIn, 30);
}