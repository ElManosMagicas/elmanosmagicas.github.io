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

let interactiveMirlaSoundBtn = document.getElementById('interactive-mirla-sound-btn');
let interactiveMirlaSpeakers = document.getElementById('mirla-speakers');
let interactiveMirlaState = document.getElementById('interactive-mirla-state-1');
let isInteractiveMirlaSpeakers = true;
let interactiveTucanSoundBtn = document.getElementById('interactive-tucan-sound-btn');
let interactiveTucanSpeakers = document.getElementById('tucan-speakers');
let interactiveTucanState = document.getElementById('interactive-tucan-state-1');
let isInteractiveTucanSpeakers = true;
let interactiveSnakeSoundBtn = document.getElementById('interactive-snake-sound-btn');
let interactiveSnakeSpeakers = document.getElementById('snake-speakers');
let interactiveSnakeState = document.getElementById('interactive-snake-state-1');
let isInteractiveSnakeSpeakers = true;

interactiveMirlaSoundBtn.addEventListener('click', () => {
  isInteractiveMirlaSpeakers = !isInteractiveMirlaSpeakers;
  if (isInteractiveMirlaSpeakers) {
    interactiveMirlaSpeakers.src = './assets/escena-2-interacciones/boton-sonido-apagado.png';
    interactiveMirlaState.src = './assets/escena-2-interacciones/1-mirla-estado-1.png';
  } else {
    interactiveMirlaSpeakers.src = './assets/escena-2-interacciones/boton-sonido-encendido.png';
    interactiveMirlaState.src = './assets/escena-2-interacciones/1-mirla-estado-2.png';
  }
});

interactiveTucanSoundBtn.addEventListener('click', () => {
  isInteractiveTucanSpeakers = !isInteractiveTucanSpeakers;
  if (isInteractiveTucanSpeakers) {
    interactiveTucanSpeakers.src = './assets/escena-2-interacciones/boton-sonido-apagado.png';
    interactiveTucanState.src = './assets/escena-2-interacciones/2-tucan-estado-1.png';
  } else {
    interactiveTucanSpeakers.src = './assets/escena-2-interacciones/boton-sonido-encendido.png';
    interactiveTucanState.src = './assets/escena-2-interacciones/2-tucan-estado-2.png';
  }
});

interactiveSnakeSoundBtn.addEventListener('click', () => {
  isInteractiveSnakeSpeakers = !isInteractiveSnakeSpeakers;
  if (isInteractiveSnakeSpeakers) {
    interactiveSnakeSpeakers.src = './assets/escena-2-interacciones/boton-sonido-apagado.png';
    interactiveSnakeState.src = './assets/escena-2-interacciones/2-serpiente-estado-1.png';
  } else {
    interactiveSnakeSpeakers.src = './assets/escena-2-interacciones/boton-sonido-encendido.png';
    interactiveSnakeState.src = './assets/escena-2-interacciones/2-serpiente-estado-2.gif';
  }
});
