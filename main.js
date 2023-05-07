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

const interactiveSectionElement = document.querySelector('#interactive-section');
const interactiveLeftTreeContainer = interactiveSectionElement.querySelector(
  '#interactive-left-tree-container'
);
const interactiveMirla = interactiveSectionElement.querySelector('#interactive-mirla');
const interactiveRightTreeContainer = interactiveSectionElement.querySelector(
  '#interactive-right-tree-container'
);
const interactiveTucan = interactiveSectionElement.querySelector('#interactive-tucan');
const interactiveSnake = interactiveSectionElement.querySelector('#interactive-snake');
const interactiveTingua = interactiveSectionElement.querySelector('#interactive-tingua');
const interactiveTurtle = interactiveSectionElement.querySelector('#interactive-turtle');
const interactiveCuyo = interactiveSectionElement.querySelector('#interactive-cuyo');
const interactiveText1 = interactiveSectionElement.querySelector('#interactive-text-1');
const interactiveMirlaSoundBtn = interactiveSectionElement.querySelector(
  '#interactive-mirla-sound-btn'
);
const interactiveTucanSoundBtn = interactiveSectionElement.querySelector(
  '#interactive-tucan-sound-btn'
);
const interactiveSnakeSoundBtn = interactiveSectionElement.querySelector(
  '#interactive-snake-sound-btn'
);

const interactiveLeftTreeContainerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-left-tree-container');
      }, 250);
    }
  });
});

const interactiveMirlaObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-mirla');
      }, 1250);
    }
  });
});

const interactiveRightTreeContainerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-right-tree-container');
      }, 2000);
    }
  });
});

const interactiveTucanObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-tucan');
      }, 2750);
    }
  });
});

const interactiveSnakeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-snake');
      }, 3000);
    }
  });
});

const interactiveTinguaObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-tingua');
      }, 4200);
    }
  });
});

const interactiveTurtleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-turtle');
      }, 4400);
    }
  });
});

const interactiveCuyoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-cuyo');
      }, 4500);
    }
  });
});

const interactiveText1Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-text-1');
      }, 5500);
    }
  });
});

const interactiveMirlaSoundBtnObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-sound-btn');
      }, 7000);
    }
  });
});

const interactiveTucanSoundBtnObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-sound-btn');
      }, 7100);
    }
  });
});

const interactiveSnakeSoundBtnObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-sound-btn');
      }, 7200);
    }
  });
});

interactiveLeftTreeContainerObserver.observe(interactiveLeftTreeContainer);
interactiveMirlaObserver.observe(interactiveMirla);
interactiveRightTreeContainerObserver.observe(interactiveRightTreeContainer);
interactiveTucanObserver.observe(interactiveTucan);
interactiveSnakeObserver.observe(interactiveSnake);
interactiveTinguaObserver.observe(interactiveTingua);
interactiveTurtleObserver.observe(interactiveTurtle);
interactiveCuyoObserver.observe(interactiveCuyo);
interactiveText1Observer.observe(interactiveText1);
interactiveMirlaSoundBtnObserver.observe(interactiveMirlaSoundBtn);
interactiveTucanSoundBtnObserver.observe(interactiveTucanSoundBtn);
interactiveSnakeSoundBtnObserver.observe(interactiveSnakeSoundBtn);

let interactiveMirlaState = document.getElementById('interactive-mirla-state');
let interactiveMirlaSpeakers = document.getElementById('mirla-speakers');
let isInteractiveMirla = true;
let interactiveMirlaAudio = document.getElementById('mirla-audio');
let isMirlaAudioPlaying = false;

let interactiveTucanSpeakers = document.getElementById('tucan-speakers');
let interactiveTucanState = document.getElementById('interactive-tucan-state');
let isInteractiveTucan = true;
let interactiveTucanAudio = document.getElementById('tucan-audio');
let isTucanAudioPlaying = false;

let interactiveSnakeSpeakers = document.getElementById('snake-speakers');
let interactiveSnakeState = document.getElementById('interactive-snake-state');
let isInteractiveSnake = true;
let interactiveSnakeAudio = document.getElementById('snake-audio');
let isSnakeAudioPlaying = false;

let currentAudio = null;

function playAudio(audio) {
  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  if (audio.paused) {
    audio.play();
    currentAudio = audio;
  } else {
    audio.pause();
    audio.currentTime = 0;
    currentAudio = null;
  }
}

interactiveMirlaSoundBtn.addEventListener('click', () => {
  isInteractiveMirla = !isInteractiveMirla;
  if (isInteractiveMirla) {
    interactiveMirlaSpeakers.src = './assets/escena-2-interacciones/boton-sonido-apagado.png';
    interactiveMirlaState.src = './assets/escena-2-interacciones/1-mirla-estado-1.png';
  } else {
    interactiveMirlaSpeakers.src = './assets/escena-2-interacciones/boton-sonido-encendido.png';
    interactiveMirlaState.src = './assets/escena-2-interacciones/1-mirla-estado-2.png';
  }
  playAudio(interactiveMirlaAudio);
});

interactiveTucanSoundBtn.addEventListener('click', () => {
  isInteractiveTucan = !isInteractiveTucan;
  if (isInteractiveTucan) {
    interactiveTucanSpeakers.src = './assets/escena-2-interacciones/boton-sonido-apagado.png';
    interactiveTucanState.src = './assets/escena-2-interacciones/2-tucan-estado-1.png';
  } else {
    interactiveTucanSpeakers.src = './assets/escena-2-interacciones/boton-sonido-encendido.png';
    interactiveTucanState.src = './assets/escena-2-interacciones/2-tucan-estado-2.png';
  }
  playAudio(interactiveTucanAudio);
});

interactiveSnakeSoundBtn.addEventListener('click', () => {
  isInteractiveSnake = !isInteractiveSnake;
  if (isInteractiveSnake) {
    interactiveSnakeSpeakers.src = './assets/escena-2-interacciones/boton-sonido-apagado.png';
    interactiveSnakeState.src = './assets/escena-2-interacciones/2-serpiente-estado-1.png';
  } else {
    interactiveSnakeSpeakers.src = './assets/escena-2-interacciones/boton-sonido-encendido.png';
    interactiveSnakeState.src = './assets/escena-2-interacciones/2-serpiente-estado-2.gif';
  }
  playAudio(interactiveSnakeAudio);
});
