window.onload = () => {
  let mapWaterlandBtn = document.getElementById('map-waterland-btn');
  mapWaterlandBtn.addEventListener('click', () => {
    forestSection.scrollIntoView({ behavior: 'smooth' });
  });

  let mapNextBtn = document.getElementById('map-next-btn');
  let forestSection = document.getElementById('forest-section');

  mapNextBtn.addEventListener('click', () => {
    forestSection.scrollIntoView({ behavior: 'smooth' });
  });

  let forestNextBtn = document.getElementById('forest-next-btn');
  let interactiveSection = document.getElementById('interactive-section');

  forestNextBtn.addEventListener('click', () => {
    interactiveSection.scrollIntoView({ behavior: 'smooth' });
  });

  let forestBackBtn = document.getElementById('forest-back-btn');
  let mapSection = document.getElementById('map-section');

  forestBackBtn.addEventListener('click', () => {
    mapSection.scrollIntoView({ behavior: 'smooth' });
  });

  let interactiveBackBtn = document.getElementById('interactive-back-btn');
  interactiveBackBtn.addEventListener('click', () => {
    forestSection.scrollIntoView({ behavior: 'smooth' });
  });
};
const forestSectionElement = document.querySelector('#forest-section');
const forestRightTree = forestSectionElement.querySelector('#forest-right-tree');
const forestLeftTree = forestSectionElement.querySelector('#forest-left-tree');
const forestRightGif = forestSectionElement.querySelector('#forest-right-gif');
const forestLeftGif = forestSectionElement.querySelector('#forest-left-gif');
const forestCuyo = forestSectionElement.querySelector('#forest-cuyo');
const forestTurtle = forestSectionElement.querySelector('#forest-turtle');
const forestTingua = forestSectionElement.querySelector('#forest-tingua');
const forestText1 = forestSectionElement.querySelector('#forest-text-1');
const forestText2 = forestSectionElement.querySelector('#forest-text-2');

const forestRightTreeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-right-tree');
      }, 250);
    }
  });
});

const forestLeftTreeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-left-tree');
      }, 500);
    }
  });
});

const forestRightGifObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-right-gif');
      }, 500);
    }
  });
});

const forestLeftGifObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-left-gif');
      }, 500);
    }
  });
});

const forestCuyoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-cuyo');
      }, 750);
    }
  });
});

const forestTurtleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-turtle');
      }, 750);
    }
  });
});

const forestTinguaObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-tingua');
      }, 750);
    }
  });
});

const forestText1Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-text-1');
      }, 2000);
    }
  });
});

const forestText2Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-text-2');
      }, 9000);
    }
  });
});

forestRightTreeObserver.observe(forestRightTree);
forestLeftTreeObserver.observe(forestLeftTree);
forestRightGifObserver.observe(forestRightGif);
forestLeftGifObserver.observe(forestLeftGif);
forestCuyoObserver.observe(forestCuyo);
forestTurtleObserver.observe(forestTurtle);
forestTinguaObserver.observe(forestTingua);
forestText1Observer.observe(forestText1);
forestText2Observer.observe(forestText2);
