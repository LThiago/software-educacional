class OperationScreen {
  constructor() {}

  draw() {
    this._drawBackground();
    this._drawGameTitle();
    this._drawAdditionButton();
    this._drawSubtractionButton();
    this._drawMultiplicationButton();
    this._drawDivisionButton();
  }

  _drawBackground() {
    background(backgroundColor);
  }

  _drawGameTitle() {
    textAlign(CENTER);
    textSize(50);
    text("Selecione o tipo de operação", 290, 73, 700, 100);
  }

  _drawAdditionButton() {
    noStroke();
    rect(182, 188, 400, 213, 20);
  }

  _drawSubtractionButton() {
    noStroke();
    rect(698, 188, 400, 213, 20);
  }

  _drawMultiplicationButton() {
    noStroke();
    rect(182, 441, 400, 213, 20);
  }

  _drawDivisionButton() {
    noStroke();
    rect(698, 441, 400, 213, 20);
  }
}
