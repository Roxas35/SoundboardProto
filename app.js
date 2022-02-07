const sounds = ["Title Screen", "Green Hill", "Marble Zone", "Spring Yard", "Labyrinth", "Star Light", "Scrap Brain", "Final Zone", "Ending", "Drowning", "Special Stage", "Invincible", "Boss Fight"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}