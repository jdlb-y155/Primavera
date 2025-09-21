onload = () =>{
        document.body.classList.remove("container");
};

function reproducirAudio() {
  const audio = document.getElementById("miAudio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};