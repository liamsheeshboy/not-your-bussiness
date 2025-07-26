const enterBtn = document.getElementById("enter-btn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("main-content");
const videoSection = document.getElementById("video-section");
const bgMusic = document.getElementById("bg-music");
const loveVideo = document.getElementById("love-video");

// Helper to fade out an element
function fadeOut(element) {
  element.classList.remove("visible");
  setTimeout(() => {
    element.style.display = "none";
  }, 600); // match CSS transition duration
}

// Helper to fade in an element
function fadeIn(element) {
  element.style.display = "block";
  setTimeout(() => {
    element.classList.add("visible");
  }, 20); // slight delay to trigger transition
}

enterBtn.addEventListener("click", () => {
  fadeOut(intro);
  fadeIn(mainContent);
  bgMusic.play();
});

function playVideo() {
  fadeOut(mainContent);
  fadeIn(videoSection);
  bgMusic.pause();
  loveVideo.play();
}
