class StartScreen {
  constructor() {}

  draw() {
    this._drawBackground();
    this._drawGameTitle();
    this._drawPlayButton();
    this._drawHelpButton();
  }

  _drawBackground() {
    background(backgroundColor);
  }

  _drawGameTitle() {
    textAlign(CENTER);
    textSize(100);
    text("Math Game", 340, 53, 600, 130);

    textSize(50);
    text("DEFINITIVE EDITION", 340, 152, 600, 100);
  }

  _drawPlayButton() {
    noStroke();
    rect(140, 410, 400, 150, 20);
  }

  _drawHelpButton() {
    noStroke();
    rect(740, 410, 400, 150, 20);
  }
}
