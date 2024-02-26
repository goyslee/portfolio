// Display the current year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const projectTitles = document.querySelectorAll(".project-title");

  projectTitles.forEach((title) => {
    title.addEventListener("click", function () {
      // The image should be inside an anchor that's a direct sibling of our title.
      const img = this.nextElementSibling.querySelector("img");
      if (img) {
        img.classList.toggle("hidden");
      }
    });
  });
});

let navVisible = true; // Tracks the visibility of the navbar

// Function to toggle navigation visibility
function toggleNav() {
  if (navVisible) {
    $("nav").addClass("nav-hidden");
    navVisible = false;
  } else {
    $("nav").removeClass("nav-hidden");
    navVisible = true;
  }
}

let fallDirection = 1;
document.querySelectorAll('input[name="trailside"]').forEach((r) => {
  r.addEventListener("change", (e) => {
    fallDirection = parseInt(e.target.value);
    //console.log(fallDirection);
  });
});

let x1 = 0,
  y1 = 0;
window.client;
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
  dist_to_draw = 50,
  delay = 1000,
  fsize = ["1.1rem", "1.4rem", ".8rem", "1.7rem"],
  colors = [
    "hsl(12, 90%, 63%)",
    "hsl(12, 90%, 63%)",
    "hsl(12, 90%, 63%)",
    "hsl(12, 90%, 63%)",
    "hsl(12, 90%, 63%)",
    "hsl(12, 90%, 63%)",
  ],
  rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  selRand = (o) => o[rand(0, o.length - 1)],
  distanceTo = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
  shouldDraw = (x, y) => distanceTo(x1, y1, x, y) >= dist_to_draw,
  addStr = (x, y) => {
    const str = document.createElement("div");
    str.innerHTML = "*";
    str.className = "star";
    str.style.top = `${y + rand(-20, 20)}px`;
    str.style.left = `${x}px`;
    str.style.color = selRand(colors);
    str.style.fontSize = selRand(fsize);
    document.body.appendChild(str);
    //console.log(rand(0, 3));
    const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
    //console.log(vh, y, fs);
    //console.log((y+fs)>vh?vh-y:fs);
    str.animate(
      {
        translate: [
          `${rand(-5, 5)}px ${(y + fs > vh ? vh - y : fs) * fallDirection * 0.3}px`,
          `${rand(-20, 20)}px ${(y + fs > vh ? vh - y : fs) * fallDirection}px`,
        ],
        opacity: [1, 0],
        transform: [
          "rotateX(0) rotateY(0)",
          `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`,
        ],
      },
      {
        duration: delay,
        fill: "forwards",
        rangeStart: ["cover 0% ", "cover 40%"],
        rangeEnd: ["cover 40% ", "cover 100%"],
      },
    );
    //could add a animation terminate listener, but why add the additional load
    setTimeout(() => {
      str.remove();
    }, delay);
  };

addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  if (shouldDraw(clientX, clientY)) {
    addStr(clientX, clientY);
    x1 = clientX;
    y1 = clientY;
  }
});

// Event listener for some toggle button or swipe event
$("#nav-toggle").click(function () {
  // Replace '#nav-toggle' with your actual toggle element's ID or class
  toggleNav();
});

function updateSecondsSince() {
  // The start date (01/04/2016 midnight)
  const startDate = new Date("2016-04-01T00:00:00Z");

  // Current date and time
  const now = new Date();

  // Difference in milliseconds
  const diffMilliseconds = now - startDate;

  // Convert to seconds
  const diffSeconds = Math.floor(diffMilliseconds / 1000);

  // Display in the about section
  const counterElement = document.getElementById("seconds-counter");
  counterElement.innerHTML = `I have been coding for <b class="red">${diffSeconds}</b> seconds.`;
}

let anims = [...document.querySelectorAll("[anim]")];
console.log(anims);
let click = (el, cb) => el.addEventListener("click", cb);
let toggle = (el) => el.classList.toggle("toggled");
let clickTog = (el) => click(el, () => toggle(el));
anims.map(clickTog);

// Call the function immediately
updateSecondsSince();

// Update every second
setInterval(updateSecondsSince, 1000);
