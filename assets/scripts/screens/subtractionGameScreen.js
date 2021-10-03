class SubtractionGameScreen {
  constructor() {}

  draw() {
    this._drawBackground();
    this._drawQuestion();

    this._drawAnswer1Button();
    this._drawAnswer2Button();
    this._drawAnswer3Button();
    this._drawAnswer4Button();

    this._drawAnswer1();
    this._drawAnswer2();
    this._drawAnswer3();
    this._drawAnswer4();
  }

  _drawBackground() {
    background(backgroundColor);
  }

  _drawQuestion() {
    textAlign(CENTER);
    textSize(80);
    text(this.question, 340, 53, 600, 130);
  }

  _drawAnswer1Button() {
    noStroke();
    rect(182, 188, 400, 213, 20);
  }

  _drawAnswer1() {
    textAlign(CENTER);
    textSize(80);
    text(this.answer1, 205, 243, 400, 213);
  }

  _drawAnswer2Button() {
    noStroke();
    rect(698, 188, 400, 213, 20);
  }

  _drawAnswer2() {
    textAlign(CENTER);
    textSize(80);
    text(this.answer2, 721, 243, 400, 213);
  }

  _drawAnswer3Button() {
    noStroke();
    rect(182, 441, 400, 213, 20);
  }

  _drawAnswer3() {
    textAlign(CENTER);
    textSize(80);
    text(this.answer3, 205, 498, 400, 213);
  }

  _drawAnswer4Button() {
    noStroke();
    rect(698, 441, 400, 213, 20);
  }

  _drawAnswer4() {
    textAlign(CENTER);
    textSize(80);
    text(this.answer4, 721, 498, 400, 213);
  }
}
