let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainsBehind = document.getElementById('mountains-behind');
let title = document.getElementById('title');
let btn = document.getElementById('btn');
let mountainsFront = document.getElementById('mountains-front');
let header = document.querySelector('header');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountainsBehind.style.top = value * 0.5 + 'px';
  mountainsFront.style.top = value * 0 + 'px';
  title.style.marginRight = value * 4 + 'px';
  title.style.margintop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
});
