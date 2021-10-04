let canvaWidth = 1280;
let canvaHeight = 720;

let font;
let fontPath = "assets/fonts/BebasNeue-Regular.ttf";
let fontColor = "#ac2fbd";

let backgroundColor = "#5E35B1";
let backgroundImage;

let startScreenBackgroundPath = "assets/images/start-screen-bg.png";
let helpScreenBackgroundPath = "assets/images/help-screen-bg.png";
let operationsScreenBackgroundPath = "assets/images/operations-screen-bg.png";
let questionScreenBackgroundPath = "assets/images/question-screen-bg.png";

let startScreen;
let helpScreen;
let operationScreen;
let additionGameScreen;
let subtractionGameScreen;
let multiplicationGameScreen;
let divisionGameScreen;

let score = 0;

let max;
let min;

let questionNumber1;
let questionNumber2;

let answerList;
let rightAnswerPosition = -1;
let rightAnswer;
let clickedAnswerPosition = -1;

let currentScreen = "startScreen";
