const app = document.querySelector("#app");
const totalQuestions = 15;
const passcode = "0326";

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
  "亲爱的梁恒宇先生：",
  "谢谢你给了我勇气，让我能够在今天向你表白。",
  "正是因为你每一次都那么坚定地爱我，也愿意一次又一次认真地给我承诺，才让我越来越确定自己的心意。虽然现在的我并不知道这些承诺在未来是否一定都能实现，但你的每一次承诺，都让我更加坚定地相信我对你的爱。",
  "也许今天并不是最完美的表白时机，因为对我来说，准备得还不够充分。但我知道，今天的我，已经做好了向你表达心意的准备。",
  "谢谢你每一次对我的照顾，陪我看我喜欢的电影，玩我喜欢的桌游，也愿意和我一起体验我买的游戏。谢谢你每一次温柔的问候，每天晚上的晚安，路上担心我的安全，也在意我会不会不开心。也谢谢你每一次对我的肯定，夸我好看，夸我有魅力，也让我感受到你真诚的欣赏。",
  "今天，2026年6月10日，我想认真地告诉你：其实，我也一直喜欢着你。",
  "所以，我想正式地和你在一起，我的宝宝。",
  "我爱你！",
  "署名：郭中方"
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
  hydrateMemoryPixels(screen, 0);
  screen.querySelector("[data-action='start']").addEventListener("click", () => {
    renderQuestion(0);
  });
  screen.querySelector("[data-action='use-passcode']").addEventListener("click", renderPasscode);

  swapScreen(screen);
}

function renderPasscode() {
  currentScreen = "passcode";
  locked = false;

  const screen = cloneTemplate("passcode-template");
  const input = screen.querySelector("[data-passcode-input]");
  const entry = screen.querySelector("[data-passcode-entry]");
  const feedback = screen.querySelector("[data-passcode-feedback]");
  const confirmButton = screen.querySelector("[data-action='confirm-passcode']");

  hydrateProgress(screen, 0, "CODE");
  hydrateMemoryPixels(screen, 0);

  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 4);
    entry.classList.remove("is-wrong", "is-correct");
    updatePasscodeDigits({ entry, input });
    feedback.textContent = input.value.length === 4 ? "数字填好了，确认一下吧。" : "密码藏在测试的终点。";
    feedback.dataset.state = "";
  });

  input.addEventListener("focus", () => updatePasscodeDigits({ entry, input }));
  input.addEventListener("blur", () => updatePasscodeDigits({ entry, input, showActive: false }));

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      confirmPasscode({ entry, input, feedback });
    }
  });

  confirmButton.addEventListener("click", () => {
    confirmPasscode({ entry, input, feedback });
  });
  screen.querySelector("[data-action='back-home']").addEventListener("click", renderIntro);

  swapScreen(screen);
  window.setTimeout(() => input.focus(), 180);
}

function updatePasscodeDigits({ entry, input, showActive = document.activeElement === input }) {
  const digits = entry.querySelectorAll(".passcode-digit");
  digits.forEach((digit, index) => {
    digit.textContent = input.value[index] || "";
    digit.classList.toggle("is-filled", index < input.value.length);
    digit.classList.toggle("is-active", showActive && index === Math.min(input.value.length, 3));
  });
}

function confirmPasscode({ entry, input, feedback }) {
  if (input.value === passcode) {
    feedback.textContent = "密码正确，信箱已经解锁！";
    feedback.dataset.state = "correct";
    entry.classList.remove("is-wrong");
    entry.classList.add("is-correct");
    locked = true;
    window.setTimeout(() => renderComplete("passcode"), 620);
    return;
  }

  entry.classList.remove("is-wrong");
  void entry.offsetWidth;
  entry.classList.add("is-wrong");
  feedback.textContent = input.value.length < 4 ? "要输入完整的四位数字哦。" : "密码不对，再想想。";
  feedback.dataset.state = "wrong";
  input.focus();
  input.select();
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

  hydrateProgress(screen, index, `第 ${index + 1}/${totalQuestions} 题`);
  hydrateMemoryPixels(screen, index);
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

    renderPasscodeReward();
  }, 980);
}

function isCorrectAnswer(question, selected) {
  const normalized = selected.join(",");
  return question.correct.some((answerSet) => answerSet.join(",") === normalized);
}

function renderPasscodeReward() {
  currentScreen = "passcode-reward";
  const screen = cloneTemplate("passcode-reward-template");
  hydrateProgress(screen, totalQuestions, "15/15");
  screen
    .querySelector("[data-action='continue-to-mailbox']")
    .addEventListener("click", () => renderComplete("quiz"));
  swapScreen(screen);
}

function renderComplete(route = "quiz") {
  currentScreen = "complete";
  const screen = cloneTemplate("complete-template");
  const title = screen.querySelector("[data-complete-title]");
  const message = screen.querySelector("[data-complete-message]");

  if (route === "passcode") {
    title.textContent = "通关成功！";
    message.textContent = "密码正确。现在，有一封小信准备好了。";
  }

  hydrateProgress(screen, totalQuestions, "15/15");
  screen.querySelector("[data-action='open-letter']").addEventListener("click", renderLetter);
  swapScreen(screen);
}

function renderLetter() {
  currentScreen = "letter";
  const screen = cloneTemplate("letter-template");
  const letterBody = screen.querySelector("[data-letter-body]");
  const letterCard = screen.querySelector(".letter-card");
  const surprise = screen.querySelector("[data-day-41-surprise]");

  hydrateProgress(screen, totalQuestions, "CLEAR");

  letterParagraphs.forEach((paragraph, index) => {
    const item = document.createElement("p");
    item.textContent = paragraph;
    item.style.animationDelay = `${index * 140}ms`;
    letterBody.append(item);
  });

  let revealTimer = null;
  letterCard.addEventListener("scroll", () => {
    const remaining = letterCard.scrollHeight - letterCard.scrollTop - letterCard.clientHeight;

    if (remaining <= 12 && !surprise.classList.contains("is-visible") && !revealTimer) {
      revealTimer = window.setTimeout(() => {
        surprise.classList.add("is-visible");
        surprise.setAttribute("aria-hidden", "false");
      }, 720);
      return;
    }

    if (remaining > 48 && revealTimer) {
      window.clearTimeout(revealTimer);
      revealTimer = null;
    }
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
  const segments = screen.querySelector("[data-progress-segments]");

  if (count) count.textContent = label;
  if (bar) bar.setAttribute("aria-valuenow", String(answeredCount));
  if (segments) {
    const activeSegments = Math.round((percent / 100) * 40);
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < 40; index += 1) {
      const segment = document.createElement("span");
      segment.className = "progress-segment";
      if (index < activeSegments) segment.classList.add("is-active");
      fragment.append(segment);
    }

    segments.replaceChildren(fragment);
  }
}

function hydrateMemoryPixels(screen, litCount) {
  const field = document.createElement("div");
  field.className = "memory-pixel-field";
  field.setAttribute("aria-hidden", "true");

  for (let index = 0; index < totalQuestions; index += 1) {
    const pixel = document.createElement("span");
    pixel.className = "memory-pixel";
    if (index < litCount) pixel.classList.add("is-lit");
    field.append(pixel);
  }

  screen.prepend(field);
}

function swapScreen(screen) {
  app.replaceChildren(screen);
}

renderIntro();
