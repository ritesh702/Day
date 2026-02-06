const text = "Happy Rose Day My LOVEEE!!❤️";
const speed = 80;

const typeText = document.getElementById("typeText");
const rose = document.getElementById("roseImg");
const revealBtn = document.getElementById("revealBtn");
const message = document.getElementById("message");
const petalsContainer = document.querySelector(".petals");

let i = 0;

/* Typewriter title */
function typeWriter() {
  if (i < text.length) {
    typeText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

/* Reveal message */
function revealLove() {
  message.innerHTML =
    "This rose is for you..<br>I LOVE YOU SO MUCHHH!!❤️❤️";

  rose.style.transform = "scale(2.25)";

  setInterval(() => {
    createPetals(17); // 8 petals every 400ms
  }, 400);
}


/* Click image OR button */
rose.addEventListener("click", revealLove);
revealBtn.addEventListener("click", revealLove);

/* Petal rain */
function createPetals(count) {
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "❤️ ";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 4 + Math.random() * 3 + "s";

    petalsContainer.appendChild(petal);

    setTimeout(() => petal.remove(), 7000);
  }
}
