window.onload = () => {
  let mapForestBtn = document.getElementById('map-forest-btn');
  mapForestBtn.addEventListener('click', () => {
    forestSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      let narration1Page2 = new Audio('./assets/sounds/escena-1-narracion-1.mp3');
      narration1Page2.play().catch((error) => {
        console.log('Error playing audio:', error);
      });
    }, 2500);
    setTimeout(() => {
      let narration2Page2 = new Audio('./assets/sounds/escena-1-narracion-2.mp3');
      narration2Page2.play().catch((error) => {
        console.log('Error playing audio:', error);
      });
    }, 18500);
  });

  let mapNextBtn = document.getElementById('map-next-btn');
  let forestSection = document.getElementById('forest-section');

  mapNextBtn.addEventListener('click', () => {
    forestSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      let narration1Page2 = new Audio('./assets/sounds/escena-1-narracion-1.mp3');
      narration1Page2.play().catch((error) => {
        console.log('Error playing audio:', error);
      });
    }, 2500);
    setTimeout(() => {
      let narration2Page2 = new Audio('./assets/sounds/escena-1-narracion-2.mp3');
      narration2Page2.play().catch((error) => {
        console.log('Error playing audio:', error);
      });
    }, 18500);
  });

  let forestNextBtn = document.getElementById('forest-next-btn');
  let interactiveSection = document.getElementById('interactive-section');

  forestNextBtn.addEventListener('click', () => {
    interactiveSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      let narration1Page3 = new Audio('./assets/sounds/escena-2-narracion-1.mp3');
      narration1Page3.play().catch((error) => {
        console.log('Error playing audio:', error);
      });
    }, 6000);
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
      }, 17500);
    }
  });
});

let narration2Page2 = document.getElementById('narration-2-page-2');

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
const interactiveMirlaSpeakersA = interactiveSectionElement.querySelector('#mirla-speakers');
const interactiveTucanSpeakersA = interactiveSectionElement.querySelector('#tucan-speakers');
const interactiveSnakeSpeakersA = interactiveSectionElement.querySelector('#snake-speakers');

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

const interactiveMirlaSpeakersObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-mirla-speakers');
      }, 7000);
    }
  });
});

const interactiveTucanSoundBtnObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-tucan-speakers');
      }, 7100);
    }
  });
});

const interactiveSnakeSoundBtnObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear-int-snake-speakers');
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
interactiveMirlaSpeakersObserver.observe(interactiveMirlaSpeakersA);
interactiveTucanSoundBtnObserver.observe(interactiveTucanSpeakersA);
interactiveSnakeSoundBtnObserver.observe(interactiveSnakeSpeakersA);

let interactiveMirlaState = document.getElementById('interactive-mirla');
let interactiveMirlaSpeakers = document.getElementById('mirla-speakers');
let isInteractiveMirla = true;
let interactiveMirlaAudio = document.getElementById('mirla-audio');
let isMirlaAudioPlaying = false;

let interactiveTucanSpeakers = document.getElementById('tucan-speakers');
let interactiveTucanState = document.getElementById('interactive-tucan');
let isInteractiveTucan = true;
let interactiveTucanAudio = document.getElementById('tucan-audio');
let isTucanAudioPlaying = false;

let interactiveSnakeSpeakers = document.getElementById('snake-speakers');
let interactiveSnakeState = document.getElementById('interactive-snake');
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

let interactiveMirlaSoundBtn = document.getElementById('interactive-mirla-sound-btn');
let interactiveTucanSoundBtn = document.getElementById('interactive-tucan-sound-btn');
let interactiveSnakeSoundBtn = document.getElementById('interactive-snake-sound-btn');

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
