// Display the current year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", (event) => {
  const greetingElement = document.getElementById("greetings");
  const greetingTexts = ["Hello... I am a FULLSTACK ENGINEER...", "Welcome to my Portfolio!"];
  let currentTextIndex = 0;

  function animateText() {
    greetingElement.textContent = ""; // Clear previous text
    const greetingText = greetingTexts[currentTextIndex];
    let delay = 150;

    for (let i = 0; i < greetingText.length; i++) {
      const char = greetingText[i];
      const span = document.createElement("span");

      span.style.color = currentTextIndex === 0 ? "hsl(12, 90%, 63%)" : "white";
      span.textContent = char === " " ? "\xa0" : char;
      greetingElement.appendChild(span);

      setTimeout(() => {
        span.style.opacity = 1;
      }, delay);

      delay += 150;
    }

    currentTextIndex = (currentTextIndex + 1) % greetingTexts.length; // Cycle through texts
  }

  animateText(); // Start with the first text

  // Call animateText again after a delay based on the first animation's duration
  setTimeout(animateText, greetingTexts[0].length * 150 + 1000);
});

let fallDirection = 1;
document.querySelectorAll('input[name="trailside"]').forEach((r) => {
  r.addEventListener("change", (e) => {
    fallDirection = parseInt(e.target.value);
  });
});

const keywords = [
  // JavaScript and React
  "var",
  "let",
  "const",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "default",
  "try",
  "catch",
  "finally",
  "break",
  "continue",
  "function",
  "return",
  "typeof",
  "delete",
  "new",
  "this",
  "class",
  "extends",
  "super",
  "import",
  "export",
  "null",
  "undefined",
  "true",
  "false",
  "console.log",
  "useState",
  "useEffect",
  "useContext",
  "useReducer",
  "useRef",
  "React.Component",
  "render",
  "ReactDOM.render",
  "props",
  "state",
  "componentDidMount",
  "componentDidUpdate",
  "componentWillUnmount",
  "React.memo",
  "React.Fragment",
  "JSX",

  // Python
  "def",
  "return",
  "if",
  "elif",
  "else",
  "for",
  "while",
  "break",
  "continue",
  "try",
  "except",
  "finally",
  "with",
  "as",
  "import",
  "from",
  "class",
  "pass",
  "yield",
  "raise",
  "print",
  "True",
  "False",
  "None",
  "and",
  "or",
  "not",
  "is",
  "in",
  "lambda",
  "global",
  "nonlocal",
  "assert",
  "async",
  "await",
  "del",
  "exec",
  "yield",

  // PHP
  "echo",
  "print",
  "if",
  "else",
  "elseif",
  "endif",
  "while",
  "do",
  "for",
  "foreach",
  "break",
  "continue",
  "switch",
  "case",
  "default",
  "return",
  "function",
  "class",
  "public",
  "protected",
  "private",
  "static",
  "const",
  "var",
  "try",
  "catch",
  "finally",
  "throw",
  "new",
  "true",
  "false",
  "null",
  "namespace",
  "use",
  "extends",
  "implements",
  "abstract",
  "interface",
  "trait",
  "final",
  "global",
  "include",
  "require",
  "isset",
  "empty",
  "unset",
  "array",
  "__construct",
  "__destruct",
  "__call",
  "__callStatic",
  "__get",
  "__set",
  "__isset",
  "__unset",
  "__toString",
  "__invoke",
  "__set_state",
  "__clone",
  "__debugInfo",
];

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
  delay = 9000,
  fsize = ["0.6rem", "0.8rem", "1.0rem", "1.2rem"],
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
  getRandomElement = (arr) => arr[rand(0, arr.length - 1)];

function addStr() {
  const x = rand(0, window.innerWidth);
  const y = rand(0, vh);
  const str = document.createElement("div");
  str.innerHTML = getRandomElement(keywords); // Now using a random keyword
  str.className = "star";
  str.style.top = `${y}px`;
  str.style.left = `${x}px`;
  str.style.color = selRand(colors);
  str.style.fontSize = selRand(fsize);
  document.body.appendChild(str);

  str.animate(
    {
      translate: [
        `${rand(-5, 5)}px ${(y > vh ? vh - y : y) * fallDirection * 0.3}px`,
        `${rand(-20, 20)}px ${(y > vh ? vh - y : y) * fallDirection}px`,
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
    },
  );

  setTimeout(() => {
    str.remove();
  }, delay);
}

// Set up an interval to continuously add stars
setInterval(addStr, 300); // Adjust the 300ms interval to your liking

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
