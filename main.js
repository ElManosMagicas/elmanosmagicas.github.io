//First section variables
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainsBehind = document.getElementById('mountains-behind');
let title = document.getElementById('title');
let btn = document.getElementById('btn');
let mountainsFront = document.getElementById('mountains-front');
let header = document.querySelector('header');

//Third section variables
let introBg = document.getElementById('third-bg');
let introRightTree = document.getElementById('third-right-tree');
let introLeftTree = document.getElementById('third-left-tree');
let introRightBush = document.getElementById('third-right-bush');
let introLeftBush = document.getElementById('third-left-bush');
let introCuyo = document.getElementById('third-cuyo');
let introTingua = document.getElementById('third-tingua');
let introTurtle = document.getElementById('third-turtle');

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

const button = document.querySelector('#scroll-to-third');
const section = document.querySelector('#third');
button.addEventListener('click', () => {
  section.scrollIntoView({ behavior: 'smooth' });
});

const thirdSection = document.getElementById('third');
window.addEventListener('scroll', function () {
  const sectionHeight = document.querySelector('.third').offsetHeight;
  const imageHeight = introRightTree.offsetHeight;
  const maxScroll = sectionHeight + imageHeight;
  const scrollY = window.scrollY;

  if (scrollY > sectionHeight - imageHeight) {
    // The user is scrolling through the image
    let scrollOffset = imageHeight - scrollY + sectionHeight;
    if (scrollOffset < 0) {
      // The image has reached the bottom of the section
      scrollOffset = 0;
    }
    introRightTree.style.top = `${scrollOffset}px`;
  } else {
    // The user is scrolling through the section
    introRightTree.style.top = `100%`;
  }
});

window.addEventListener('scroll', function () {
  const sectionHeight = document.querySelector('.third').offsetHeight;
  const imageHeight = introLeftTree.offsetHeight;
  const maxScroll = sectionHeight + imageHeight;
  const scrollY = window.scrollY;

  if (scrollY > sectionHeight - imageHeight) {
    // The user is scrolling through the image
    let scrollOffset = imageHeight - scrollY + sectionHeight;
    if (scrollOffset < 0) {
      // The image has reached the bottom of the section
      scrollOffset = 0;
    }
    introLeftTree.style.top = `${scrollOffset}px`;
  } else {
    // The user is scrolling through the section
    introLeftTree.style.top = `100%`;
  }
});

window.addEventListener('scroll', function () {
  const sectionHeight = document.querySelector('.third').offsetHeight;
  const imageHeight = introRightBush.offsetHeight;
  const maxScroll = sectionHeight + imageHeight;
  const scrollY = window.scrollY;

  if (scrollY > sectionHeight - imageHeight) {
    // The user is scrolling through the image
    let scrollOffset = imageHeight - scrollY + sectionHeight;
    if (scrollOffset < 0) {
      // The image has reached the bottom of the section
      scrollOffset = 0;
    }
    introRightBush.style.top = `${scrollOffset}px`;
  } else {
    // The user is scrolling through the section
    introRightBush.style.top = `100%`;
  }
});

window.addEventListener('scroll', function () {
  const sectionHeight = document.querySelector('.third').offsetHeight;
  const imageHeight = introLeftBush.offsetHeight;
  const maxScroll = sectionHeight + imageHeight;
  const scrollY = window.scrollY;

  if (scrollY > sectionHeight - imageHeight) {
    // The user is scrolling through the image
    let scrollOffset = imageHeight - scrollY + sectionHeight;
    if (scrollOffset < 0) {
      // The image has reached the bottom of the section
      scrollOffset = 0;
    }
    introLeftBush.style.top = `${scrollOffset}px`;
  } else {
    // The user is scrolling through the section
    introLeftBush.style.top = `100%`;
  }
});

window.addEventListener('scroll', function () {
  const sectionHeight = document.querySelector('.third').offsetHeight;
  const imageHeight = introCuyo.offsetHeight;
  const maxScroll = sectionHeight + imageHeight;
  const scrollY = window.scrollY;

  if (scrollY > sectionHeight - imageHeight) {
    // The user is scrolling through the image
    let scrollOffset = imageHeight - scrollY + sectionHeight;
    if (scrollOffset < 0) {
      // The image has reached the bottom of the section
      scrollOffset = 0;
    }
    introCuyo.style.top = `${scrollOffset}px`;
  } else {
    // The user is scrolling through the section
    introCuyo.style.top = `100%`;
  }
});

window.addEventListener('scroll', function () {
  const sectionHeight = document.querySelector('.third').offsetHeight;
  const imageHeight = introTingua.offsetHeight;
  const maxScroll = sectionHeight + imageHeight;
  const scrollY = window.scrollY;

  if (scrollY > sectionHeight - imageHeight) {
    // The user is scrolling through the image
    let scrollOffset = imageHeight - scrollY + sectionHeight;
    if (scrollOffset < 0) {
      // The image has reached the bottom of the section
      scrollOffset = 0;
    }
    introTingua.style.top = `${scrollOffset}px`;
  } else {
    // The user is scrolling through the section
    introTingua.style.top = `100%`;
  }
});

window.addEventListener('scroll', function () {
  const sectionHeight = document.querySelector('.third').offsetHeight;
  const imageHeight = introTurtle.offsetHeight;
  const maxScroll = sectionHeight + imageHeight;
  const scrollY = window.scrollY;

  if (scrollY > sectionHeight - imageHeight) {
    // The user is scrolling through the image
    let scrollOffset = imageHeight - scrollY + sectionHeight;
    if (scrollOffset < 0) {
      // The image has reached the bottom of the section
      scrollOffset = 0;
    }
    introTurtle.style.top = `${scrollOffset}px`;
  } else {
    // The user is scrolling through the section
    introTurtle.style.top = `100%`;
  }
});
