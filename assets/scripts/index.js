function setup() {
  createCanvas(canvaWidth, canvaHeight);

  startScreen = new StartScreen();
  helpScreen = new HelpScreen();
  operationScreen = new OperationScreen();
}

function draw() {
  handleScreens();

  if (
    clickedAnswerPosition != -1 &&
    clickedAnswerPosition == rightAnswerPosition
  ) {
    clickedAnswerPosition = -1;

    score++;
    console.log(score);

    if (currentScreen == "additionGameScreen") {
      additionGameLoop();
    } else if (currentScreen == "subtractionGameScreen") {
      subtractionGameLoop();
    } else if (currentScreen == "multiplicationGameScreen") {
      multiplicationGameLoop();
    } else if (currentScreen == "divisionGameScreen") {
      divisionGameLoop();
    }
  } else if (
    clickedAnswerPosition != -1 &&
    clickedAnswerPosition != rightAnswerPosition
  ) {
    clickedAnswerPosition = -1;

    score--;
    console.log(score);

    if (currentScreen == "additionGameScreen") {
      additionGameLoop();
    } else if (currentScreen == "subtractionGameScreen") {
      subtractionGameLoop();
    } else if (currentScreen == "multiplicationGameScreen") {
      multiplicationGameLoop();
    } else if (currentScreen == "divisionGameScreen") {
      divisionGameLoop();
    }
  }
}

function handleScreens() {
  if (currentScreen === "startScreen") {
    startScreen.draw();
  } else if (currentScreen === "operationScreen") {
    operationScreen.draw();
  } else if (currentScreen === "helpScreen") {
    helpScreen.draw();
  }
}

function mousePressed() {
  if (currentScreen === "startScreen") {
    if (mouseX >= 140 && mouseX <= 540 && mouseY >= 410 && mouseY <= 560) {
      currentScreen = "operationScreen";
    } else if (
      mouseX >= 740 &&
      mouseX <= 1140 &&
      mouseY >= 410 &&
      mouseY <= 560
    ) {
      currentScreen = "helpScreen";
    }
  } else if (currentScreen === "helpScreen") {
    if (mouseX >= 810 && mouseX <= 1210 && mouseY >= 500 && mouseY <= 650) {
      currentScreen = "startScreen";
    }
  } else if (currentScreen == "operationScreen") {
    if (mouseX >= 182 && mouseX <= 582 && mouseY >= 188 && mouseY <= 401) {
      currentScreen = "additionGameScreen";
      additionGameLoop();
    } else if (
      mouseX >= 698 &&
      mouseX <= 1098 &&
      mouseY >= 188 &&
      mouseY <= 401
    ) {
      currentScreen = "subtractionGameScreen";
      subtractionGameLoop();
    } else if (
      mouseX >= 182 &&
      mouseX <= 582 &&
      mouseY >= 441 &&
      mouseY <= 654
    ) {
      currentScreen = "multiplicationGameScreen";
      multiplicationGameLoop();
    } else if (
      mouseX >= 698 &&
      mouseX <= 1098 &&
      mouseY >= 441 &&
      mouseY <= 654
    ) {
      currentScreen = "divisionGameScreen";
      divisionGameLoop();
    }
  } else if (
    currentScreen == "additionGameScreen" ||
    currentScreen == "subtractionGameScreen" ||
    currentScreen == "multiplicationGameScreen" ||
    currentScreen == "divisionGameScreen"
  ) {
    if (mouseX >= 182 && mouseX <= 582 && mouseY >= 188 && mouseY <= 401) {
      clickedAnswerPosition = 0;
    } else if (
      mouseX >= 698 &&
      mouseX <= 1098 &&
      mouseY >= 188 &&
      mouseY <= 401
    ) {
      clickedAnswerPosition = 1;
    } else if (
      mouseX >= 182 &&
      mouseX <= 582 &&
      mouseY >= 441 &&
      mouseY <= 654
    ) {
      clickedAnswerPosition = 2;
    } else if (
      mouseX >= 698 &&
      mouseX <= 1098 &&
      mouseY >= 441 &&
      mouseY <= 654
    ) {
      clickedAnswerPosition = 3;
    }
  }
}

function additionGameLoop() {
  additionGameScreen = new AdditionGameScreen();
  if (score >= 0 && score <= 5) {
    min = 1;
    max = 10;
    range = 3;
  } else if (score > 5 && score <= 10) {
    min = 1;
    max = 100;
    range = 3;
  } else if (score > 10 && score <= 15) {
    min = 1;
    max = 1000;
    range = 3;
  }
  questionNumber1 = generateRoundRandomNumber(min, max);
  questionNumber2 = generateRoundRandomNumber(min, max);

  rightAnswer = questionNumber1 + questionNumber2;
  answerList = generateAnswerList(rightAnswer);

  additionGameScreen.question = questionNumber1 + " + " + questionNumber2;

  additionGameScreen.answer1 = answerList[0];
  additionGameScreen.answer2 = answerList[1];
  additionGameScreen.answer3 = answerList[2];
  additionGameScreen.answer4 = answerList[3];

  additionGameScreen.draw();
}

function subtractionGameLoop() {
  subtractionGameScreen = new SubtractionGameScreen();
  if (score >= 0 && score <= 5) {
    min = 1;
    max = 10;
    range = 3;
  } else if (score > 5 && score <= 10) {
    min = 1;
    max = 100;
    range = 3;
  } else if (score > 10 && score <= 15) {
    min = 1;
    max = 1000;
    range = 3;
  }
  questionNumber1 = generateRoundRandomNumber(min, max);
  while (true) {
    questionNumber2 = generateRoundRandomNumber(min, max);
    if (questionNumber2 < questionNumber1) {
      break;
    }
  }

  rightAnswer = questionNumber1 - questionNumber2;
  answerList = generateAnswerList(rightAnswer);

  subtractionGameScreen.question = questionNumber1 + " - " + questionNumber2;

  subtractionGameScreen.answer1 = answerList[0];
  subtractionGameScreen.answer2 = answerList[1];
  subtractionGameScreen.answer3 = answerList[2];
  subtractionGameScreen.answer4 = answerList[3];

  subtractionGameScreen.draw();
}

function multiplicationGameLoop() {
  multiplicationGameScreen = new MultiplicationGameScreen();
  if (score >= 0 && score <= 5) {
    min = 1;
    max = 10;
    range = 3;
  } else if (score > 5 && score <= 10) {
    min = 1;
    max = 100;
    range = 3;
  } else if (score > 10 && score <= 15) {
    min = 1;
    max = 1000;
    range = 3;
  }
  questionNumber1 = generateRoundRandomNumber(min, max);
  questionNumber2 = generateRoundRandomNumber(min, max);

  rightAnswer = questionNumber1 * questionNumber2;
  answerList = generateAnswerList(rightAnswer);

  multiplicationGameScreen.question = questionNumber1 + " × " + questionNumber2;

  multiplicationGameScreen.answer1 = answerList[0];
  multiplicationGameScreen.answer2 = answerList[1];
  multiplicationGameScreen.answer3 = answerList[2];
  multiplicationGameScreen.answer4 = answerList[3];

  multiplicationGameScreen.draw();
}

function divisionGameLoop() {
  divisionGameScreen = new DivisionGameScreen();
  if (score >= 0 && score <= 5) {
    min = 1;
    max = 10;
    range = 3;
  } else if (score > 5 && score <= 10) {
    min = 1;
    max = 100;
    range = 3;
  } else if (score > 10 && score <= 15) {
    min = 1;
    max = 1000;
    range = 3;
  }
  while (true) {
    questionNumber1 = generateRoundRandomNumber(min, max);
    questionNumber2 = generateRoundRandomNumber(min, max);
    if (
      (questionNumber1 / questionNumber2) % 1 == 0 &&
      questionNumber2 != 1 &&
      questionNumber1 != questionNumber2
    ) {
      break;
    }
  }

  rightAnswer = questionNumber1 / questionNumber2;
  answerList = generateAnswerList(rightAnswer);

  divisionGameScreen.question = questionNumber1 + " ÷ " + questionNumber2;

  divisionGameScreen.answer1 = answerList[0];
  divisionGameScreen.answer2 = answerList[1];
  divisionGameScreen.answer3 = answerList[2];
  divisionGameScreen.answer4 = answerList[3];

  divisionGameScreen.draw();
}

function generateRoundRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateAnswerList(rightAnswer) {
  let answers = [];

  let index = 0;
  let sign;
  let candidate;

  rightAnswerPosition = generateRoundRandomNumber(0, 4);
  answers[rightAnswerPosition] = rightAnswer;

  while (index < 4) {
    if (index != rightAnswerPosition) {
      sign = generateRoundRandomNumber(1, 3);

      if (sign == 1) {
        candidate = rightAnswer - generateRoundRandomNumber(1, range);
      } else if (sign == 2) {
        candidate = rightAnswer + generateRoundRandomNumber(1, range);
      }

      if (candidate != rightAnswer && answers.includes(candidate) == false) {
        answers[index] = candidate;
        index++;
      }
    } else {
      index++;
    }
  }

  return answers;
}
