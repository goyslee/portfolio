// Display the current year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();

let fallDirection = 1;
document.querySelectorAll('input[name="trailside"]').forEach((r) => {
  r.addEventListener("change", (e) => {
    fallDirection = parseInt(e.target.value);
    //console.log(fallDirection);
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

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

let x1 = 0,
  y1 = 0;
window.client;
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
  dist_to_draw = 20,
  delay = 2200,
  fsize = [".6rem", ".8rem", ".2rem", "1.1rem"],
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
  shouldDraw = (x, y) => {
    const distance = distanceTo(x1, y1, x, y);
    const shouldCreate = distance >= dist_to_draw && Math.random() > 0.7; // 30% chance to skip
    return shouldCreate;
  },
  addStr = (x, y) => {
    const str = document.createElement("div");
    str.innerHTML = getRandomElement(keywords);
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
