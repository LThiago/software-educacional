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

    additionGameLoop();
  } else if (
    clickedAnswerPosition != -1 &&
    clickedAnswerPosition != rightAnswerPosition
  ) {
    clickedAnswerPosition = -1;

    score--;
    console.log(score);

    additionGameLoop();
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
      console.log("2");
    } else if (
      mouseX >= 182 &&
      mouseX <= 582 &&
      mouseY >= 441 &&
      mouseY <= 654
    ) {
      console.log("3");
    } else if (
      mouseX >= 698 &&
      mouseX <= 1098 &&
      mouseY >= 441 &&
      mouseY <= 654
    ) {
      console.log("4");
    }
  } else if (currentScreen == "additionGameScreen") {
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
    max = 11;
    range = 3;
  } else if (score > 5 && score <= 10) {
    min = 1;
    max = 101;
    range = 3;
  } else if (score > 10 && score <= 15) {
    min = 1;
    max = 101;
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
