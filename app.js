const app = document.querySelector("#app");
const totalQuestions = 15;

const questions = [
  {
    title: "我的真实名字是？",
    type: "single",
    answers: ["郭中方", "Mike", "DuffyFangHug", "方方"],
    correct: [[0]],
    success: "答对啦！这个名字被你选中，感觉很认真。",
    retry: "再想想，是我真正写在名字里的那个。"
  },
  {
    title: "我的星座是？",
    type: "single",
    answers: ["白羊座", "天蝎座", "狮子座", "双鱼座"],
    correct: [[1]],
    success: "没错，是天蝎座。观察力加一格。",
    retry: "再想想，答案有一点神秘感。"
  },
  {
    title: "我家里有哪些兄弟姐妹？",
    type: "multi",
    answers: ["姐姐", "哥哥", "弟弟", "妹妹"],
    correct: [[0, 2]],
    success: "答对啦！家庭成员情报收集完成。",
    retry: "再想想，是两个选项。"
  },
  {
    title: "我最喜欢的两位漫威英雄是？",
    type: "multi",
    answers: ["钢铁侠", "蜘蛛侠", "奇异博士", "绯红女巫", "雷神"],
    correct: [[0, 2]],
    success: "答对啦！这组合很有科技和魔法感。",
    retry: "再想想，是一位靠盔甲，一位靠魔法。"
  },
  {
    title: "我最喜欢的科幻电影是？",
    type: "single",
    answers: ["复联 3", "复联 4", "火星救援", "星际穿越"],
    correct: [[3]],
    success: "对，是星际穿越。回答正确，进度推进。",
    retry: "再想想，是更宇宙一点的那部。"
  },
  {
    title: "我最喜欢吃的水果是？",
    type: "single",
    answers: ["西瓜", "草莓", "香蕉"],
    correct: [[0]],
    success: "答对啦！夏天味道的小答案。",
    retry: "再想想，是最适合夏天的水果。"
  },
  {
    title: "我更像是哪种人？",
    type: "single",
    answers: ["表面冷静，内心想很多", "每天都很外向", "什么都不在乎", "想到什么就立刻做什么"],
    correct: [[0]],
    success: "很懂我嘛。外表冷静，心里其实走了很远。",
    retry: "再想想，答案没那么外放。"
  },
  {
    title: "毕业之后，我更想待在？",
    type: "single",
    answers: ["大城市", "小城市", "看未来发展", "看重要的人在哪里"],
    correct: [[0], [3]],
    success: "答对啦。城市很重要，重要的人也很重要。",
    retry: "再想想，答案和机会或重要的人有关。"
  },
  {
    title: "毕业之后，我会更想先？",
    type: "single",
    answers: ["买房", "买车", "先和重要的人一起规划未来"],
    correct: [[2]],
    success: "答对啦！比起物品，我更想认真规划未来。",
    retry: "再想想，不是先买什么。"
  },
  {
    title: "我更看重一段关系里的什么？",
    type: "single",
    answers: ["真诚", "陪伴", "安全感", "新鲜感", "双方一起变好"],
    correct: [[0], [4]],
    success: "答对啦。真诚和一起变好，都是很珍贵的事。",
    retry: "再想想，是更长期、更认真的东西。"
  },
  {
    title: "如果我遇到很重要的人，我最会希望自己变成什么样？",
    type: "single",
    answers: ["更勇敢一点", "更成熟一点", "更值得依靠一点"],
    correct: [[2]],
    success: "答对啦。我会想成为更值得依靠的人。",
    retry: "再想想，是可以让对方安心的那种。"
  },
  {
    title: "我为什么一直没有去和达菲见面？",
    type: "multi",
    answers: ["有点社恐，怕被周围的人看到", "觉得见面的时机还没到", "觉得自己还没准备好", "因为我太在意这次见面，所以反而小心翼翼"],
    correct: [[0, 1, 2, 3], [1, 2, 3]],
    success: "答对啦。其实不是不想见，是因为太在意。",
    retry: "再想想，答案不止一个，而且都和小心翼翼有关。"
  },
  {
    title: "如果我有一件很重要的事一直没说，是因为？",
    type: "multi",
    answers: ["我不知道怎么开口", "我想等一个合适的时机", "因为那件事和你有关"],
    correct: [[1, 2]],
    success: "答对啦。进度条快满了，答案也快藏不住了。",
    retry: "再想想，关键是时机，也和你有关。"
  },
  {
    title: "如果这套题其实不是知识问答，那它最像什么？",
    type: "single",
    answers: ["一个无聊测试", "一个玩笑", "一种慢慢靠近你的方式", "一封藏起来的表白信"],
    correct: [[2], [3]],
    success: "答对啦。你已经快走到真正的问题前了。",
    retry: "再想想，它不是普通测试。"
  },
  {
    title: "你觉得我最后真正想问的问题是？",
    type: "single",
    answers: ["你觉得我怎么样", "你愿不愿意见我", "你有没有一点喜欢我", "你愿不愿意给我一个机会"],
    correct: [[3]],
    success: "最后一题答对啦。测试完成，奖励正在打开。",
    retry: "再想想，是我最认真、也最想问你的那个问题。"
  }
];

const letterParagraphs = [
  "如果你看到这里，就说明这套小测试已经把我藏起来的话，慢慢送到你面前了。",
  "我其实一直很想见你，也很想认真告诉你：你对我来说，是一个很特别的人。",
  "我会小心翼翼，是因为我真的在意这件事。在意你怎么想，也在意这一次靠近会不会太突然。",
  "所以最后，我想把问题说得直接一点：你愿不愿意给我一个机会，让我更认真地走近你？",
  "不用急着回答。我们可以慢慢聊，像今天这样，一点一点把答案说出来。"
];

const optionLetters = ["A", "B", "C", "D", "E"];
const selectedAnswers = new Set();
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
  selectedAnswers.clear();

  const screen = cloneTemplate("intro-template");
  hydrateProgress(screen, 0, "READY");
  screen.querySelector("[data-action='start']").addEventListener("click", () => {
    renderQuestion(0);
  });

  swapScreen(screen);
}

function renderQuestion(index) {
  currentScreen = "quiz";
  questionIndex = index;
  locked = false;
  selectedAnswers.clear();

  const question = questions[index];
  const screen = cloneTemplate("quiz-template");
  const answers = screen.querySelector("[data-answers]");
  const feedback = screen.querySelector("[data-feedback]");
  const submitButton = screen.querySelector("[data-action='submit-answer']");

  hydrateProgress(screen, index + 1, `${index + 1}/${totalQuestions}`);
  screen.querySelector("[data-question-count]").textContent = `QUESTION ${index + 1}`;
  screen.querySelector("[data-question-title]").textContent = question.title;
  screen.querySelector("[data-question-type]").textContent = question.type === "multi" ? "多选题" : "单选题";

  question.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `<span class="option-key">${optionLetters[answerIndex]}</span><span>${answer}</span>`;
    button.addEventListener("click", () => {
      if (locked) return;
      if (question.type === "multi") {
        toggleMultiAnswer(answers, button, answerIndex);
      } else {
        selectSingleAnswer(answers, button, answerIndex);
      }
      feedback.textContent = "选择好以后，点确认答案。";
      feedback.dataset.state = "";
    });
    answers.append(button);
  });

  submitButton.addEventListener("click", () => {
    if (locked) return;
    handleAnswerSubmit({ answers, feedback, question });
  });

  swapScreen(screen);
}

function selectSingleAnswer(answers, button, answerIndex) {
  selectedAnswers.clear();
  answers.querySelectorAll(".answer-button").forEach((answerButton) => {
    answerButton.classList.remove("is-selected", "is-wrong", "is-correct");
  });
  selectedAnswers.add(answerIndex);
  button.classList.add("is-selected");
}

function toggleMultiAnswer(answers, button, answerIndex) {
  answers.querySelectorAll(".answer-button").forEach((answerButton) => {
    answerButton.classList.remove("is-wrong", "is-correct");
  });
  if (selectedAnswers.has(answerIndex)) {
    selectedAnswers.delete(answerIndex);
    button.classList.remove("is-selected");
    return;
  }

  selectedAnswers.add(answerIndex);
  button.classList.add("is-selected");
}

function handleAnswerSubmit({ answers, feedback, question }) {
  if (selectedAnswers.size === 0) {
    markWrong({ answers, feedback, message: "先选一个答案，再确认吧。" });
    return;
  }

  const selected = [...selectedAnswers].sort((a, b) => a - b);
  if (!isCorrectAnswer(question, selected)) {
    answers.querySelectorAll(".answer-button.is-selected").forEach((button) => {
      button.classList.add("is-wrong");
    });
    markWrong({ answers, feedback, message: question.retry });
    return;
  }

  const selectedButtons = [...answers.querySelectorAll(".answer-button.is-selected")];
  markCorrect({ selectedButtons, feedback, message: question.success });
}

function markWrong({ answers, feedback, message }) {
  feedback.textContent = message;
  feedback.dataset.state = "wrong";
  answers.classList.remove("is-shaking");
  void answers.offsetWidth;
  answers.classList.add("is-shaking");
  window.setTimeout(() => answers.classList.remove("is-shaking"), 360);
}

function markCorrect({ selectedButtons, feedback, message }) {
  locked = true;
  selectedButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.classList.add("is-correct");
  });
  feedback.textContent = message;
  feedback.dataset.state = "correct";

  window.setTimeout(() => {
    const nextIndex = questionIndex + 1;
    if (nextIndex < questions.length) {
      renderQuestion(nextIndex);
      return;
    }

    renderComplete();
  }, 980);
}

function isCorrectAnswer(question, selected) {
  const normalized = selected.join(",");
  return question.correct.some((answerSet) => answerSet.join(",") === normalized);
}

function renderComplete() {
  currentScreen = "complete";
  const screen = cloneTemplate("complete-template");
  hydrateProgress(screen, totalQuestions, "15/15");
  screen.querySelector("[data-action='open-letter']").addEventListener("click", renderLetter);
  swapScreen(screen);
}

function renderLetter() {
  currentScreen = "letter";
  const screen = cloneTemplate("letter-template");
  const letterBody = screen.querySelector("[data-letter-body]");

  hydrateProgress(screen, totalQuestions, "CLEAR");

  letterParagraphs.forEach((paragraph, index) => {
    const item = document.createElement("p");
    item.textContent = paragraph;
    item.style.animationDelay = `${index * 140}ms`;
    letterBody.append(item);
  });

  screen.querySelector("[data-action='restart']").addEventListener("click", renderIntro);
  swapScreen(screen);
}

function hydrateProgress(screen, answeredCount, label) {
  const slot = screen.querySelector(".progress-slot");
  if (slot) {
    slot.replaceChildren(cloneTemplate("progress-template"));
  }

  const percent = Math.round((answeredCount / totalQuestions) * 100);
  const count = screen.querySelector("[data-progress-count]");
  const bar = screen.querySelector("[data-progress-bar]");
  const fill = screen.querySelector("[data-progress-fill]");

  if (count) count.textContent = label;
  if (bar) bar.setAttribute("aria-valuenow", String(answeredCount));
  if (fill) fill.style.width = `${percent}%`;
}

function swapScreen(screen) {
  app.replaceChildren(screen);
}

renderIntro();
