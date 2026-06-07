const app = document.querySelector("#app");

const questions = [
  {
    title: "我们第一次认真聊天，是在哪里？",
    hint: "不是最热闹的地方，是你让我突然安静下来的地方。",
    answers: ["学校图书馆", "一家咖啡店", "操场的看台", "地铁站台"],
    correct: 1,
    success: "答对啦，那天之后我开始期待下一次见你。",
    retry: "再想想，是有一点咖啡香的地方。"
  },
  {
    title: "我第一次觉得你很特别，是因为什么？",
    hint: "那不是一句很大的话，只是一件很小的事。",
    answers: ["你记得我随口说的话", "你发来一张照片", "你讲了一个冷笑话", "你认真听我说完"],
    correct: 3,
    success: "是这个。被认真听见的感觉，我一直记得。",
    retry: "答案很安静，和被理解有关。"
  },
  {
    title: "如果今天只能带走一个瞬间，我会选哪一个？",
    hint: "是我反复想起时，会忍不住笑出来的那个。",
    answers: ["你回头看我的时候", "我们一起等车的时候", "你说下次见的时候", "你认真笑起来的时候"],
    correct: 3,
    success: "对，我最喜欢你认真笑起来的样子。",
    retry: "再靠近一点，是和你的笑有关。"
  }
];

const letterParagraphs = [
  "其实这封信，我在心里写过很多遍。",
  "我喜欢和你说话，喜欢你认真听别人讲话的样子，也喜欢你偶尔露出来的那一点可爱。",
  "和你在一起的时候，很多普通的日子都会变得有光。",
  "所以我想认真告诉你：我喜欢你。不是一时兴起，也不是玩笑，是想慢慢靠近你、认真了解你、陪你走一段很长的路。",
  "如果你愿意，我想从今天开始，更勇敢一点地站在你身边。"
];

let currentScreen = "intro";
let questionIndex = 0;
let locked = false;

function cloneTemplate(id) {
  const template = document.querySelector(`#${id}`);
  return template.content.firstElementChild.cloneNode(true);
}

function renderIntro() {
  currentScreen = "intro";
  questionIndex = 0;
  locked = false;

  const screen = cloneTemplate("intro-template");
  screen.querySelector("[data-action='start']").addEventListener("click", () => {
    renderQuestion(0);
  });

  swapScreen(screen);
}

function renderQuestion(index) {
  currentScreen = "quiz";
  questionIndex = index;
  locked = false;

  const question = questions[index];
  const screen = cloneTemplate("quiz-template");
  const answers = screen.querySelector("[data-answers]");
  const feedback = screen.querySelector("[data-feedback]");

  screen.querySelector("[data-action='back']").addEventListener("click", renderIntro);
  screen.querySelector("[data-question-count]").textContent = `第 ${index + 1} 题`;
  screen.querySelector("[data-question-title]").textContent = question.title;
  screen.querySelector("[data-hint-copy]").textContent = question.hint;
  screen.querySelector("[data-progress]").replaceChildren(...buildDots(index));

  question.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => {
      if (locked) return;
      handleAnswer({ button, answers, feedback, question, answerIndex });
    });
    answers.append(button);
  });

  swapScreen(screen);
}

function handleAnswer({ button, answers, feedback, question, answerIndex }) {
  if (answerIndex !== question.correct) {
    button.classList.add("is-wrong");
    answers.classList.remove("is-shaking");
    void answers.offsetWidth;
    answers.classList.add("is-shaking");
    feedback.textContent = question.retry;
    window.setTimeout(() => {
      button.classList.remove("is-wrong");
      answers.classList.remove("is-shaking");
    }, 420);
    return;
  }

  locked = true;
  button.classList.add("is-correct");
  feedback.textContent = question.success;

  window.setTimeout(() => {
    const nextIndex = questionIndex + 1;
    if (nextIndex < questions.length) {
      renderQuestion(nextIndex);
      return;
    }

    renderUnlocked();
  }, 920);
}

function buildDots(activeIndex) {
  return questions.map((_, index) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    if (index < activeIndex) dot.classList.add("is-done");
    if (index === activeIndex) dot.classList.add("is-active");
    return dot;
  });
}

function renderUnlocked() {
  currentScreen = "unlocked";
  const screen = cloneTemplate("unlocked-template");
  screen.querySelector("[data-action='open-letter']").addEventListener("click", renderLetter);
  swapScreen(screen);
}

function renderLetter() {
  currentScreen = "letter";
  const screen = cloneTemplate("letter-template");
  const letterBody = screen.querySelector("[data-letter-body]");

  letterParagraphs.forEach((paragraph, index) => {
    const item = document.createElement("p");
    item.textContent = paragraph;
    item.style.animationDelay = `${index * 140}ms`;
    letterBody.append(item);
  });

  screen.querySelector("[data-action='restart']").addEventListener("click", renderIntro);
  swapScreen(screen);
}

function swapScreen(screen) {
  app.replaceChildren(screen);
}

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (currentScreen === "intro") return;
  if (currentScreen === "quiz") {
    renderIntro();
    return;
  }

  renderUnlocked();
});

renderIntro();
