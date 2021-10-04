class DivisionGameScreen {
  constructor() {}

  draw() {
    this._drawBackground();
    this._drawQuestion();

    this._drawAnswer1();
    this._drawAnswer2();
    this._drawAnswer3();
    this._drawAnswer4();
  }

  _drawBackground() {
    background(backgroundImage);
  }

  _drawQuestion() {
    textAlign(CENTER);
    textFont(font);
    fill(fontColor);
    textSize(80);
    text(this.question, 340, 43, 600, 130);
  }

  _drawAnswer1() {
    textAlign(CENTER);
    textSize(80);
    text(this.answer1, 205, 243, 400, 213);
  }

  _drawAnswer2() {
    textAlign(CENTER);
    textSize(80);
    text(this.answer2, 721, 243, 400, 213);
  }

  _drawAnswer3() {
    textAlign(CENTER);
    textSize(80);
    text(this.answer3, 205, 498, 400, 213);
  }

  _drawAnswer4() {
    textAlign(CENTER);
    textSize(80);
    text(this.answer4, 721, 498, 400, 213);
  }
}
