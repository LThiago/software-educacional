function setup() {
  createCanvas(canvaWidth, canvaHeight);

  startScreen = new StartScreen();
  helpScreen = new HelpScreen();
}

function draw() {
  handleScreens();
}

function mousePressed() {
  if (currentScreen === "startScreen") {
    if (mouseX >= 140 && mouseX <= 540 && mouseY >= 410 && mouseY <= 560) {
      console.log("Jogar");
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
  }
}

function handleScreens() {
  if (currentScreen === "startScreen") {
    startScreen.draw();
  } else if (currentScreen === "selectLevel") {
    console.log("Play");
  } else if (currentScreen === "helpScreen") {
    helpScreen.draw();
  }
}
