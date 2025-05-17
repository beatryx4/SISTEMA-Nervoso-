function toggleMusic() {
  const music = document.getElementById('bg-music');
  if (!music) return;
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
