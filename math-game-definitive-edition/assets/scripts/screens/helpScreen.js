class HelpScreen {
  constructor() {}

  draw() {
    this._drawBackground();
    this._drawScreenTitle();
    this._drawDescription();
    this._drawVideoFrame();
    this._drawBackButton();
  }

  _drawBackground() {
    background(backgroundColor);
  }

  _drawScreenTitle() {
    textAlign(CENTER);
    textSize(100);
    text("Como Jogar", 340, 53, 600, 130);
  }

  _drawDescription() {
    textAlign(RIGHT);
    textSize(40);
    let s = "Use os números ou o mouse para selecionar a alternativa correta.";
    text(s, 800, 273, 400, 213);
  }

  _drawVideoFrame() {
    noStroke();
    rect(70, 266, 684, 384, 20);
  }

  _drawBackButton() {
    noStroke();
    rect(810, 500, 400, 150, 20);
  }
}
