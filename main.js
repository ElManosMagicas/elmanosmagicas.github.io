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
let interactiveMirlaState = document.getElementById('interactive-mirla-state');
let interactiveMirlaSpeakers = document.getElementById('mirla-speakers');
let isInteractiveMirla = true;
let interactiveMirlaAudio = document.getElementById('mirla-audio');
let isMirlaAudioPlaying = false;

let interactiveTucanSoundBtn = document.getElementById('interactive-tucan-sound-btn');
let interactiveTucanSpeakers = document.getElementById('tucan-speakers');
let interactiveTucanState = document.getElementById('interactive-tucan-state');
let isInteractiveTucan = true;
let interactiveTucanAudio = document.getElementById('tucan-audio');
let isTucanAudioPlaying = false;

let interactiveSnakeSoundBtn = document.getElementById('interactive-snake-sound-btn');
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
