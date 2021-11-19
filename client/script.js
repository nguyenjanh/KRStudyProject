"use strict";

//variables used between functions
let wordList = {}; //list of words to be used for the game/study
let engOrKor = 0; //0 for English, 1 for Korean
let language = ""; //displays language for updateLog();

//gives a random int between 0 - (max - 1)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//returns length of object
function listLength(obj) {
  let size = 0;
  for (let val in obj) {
    size++;
  }
  return size;
}

//displays the wordList for the user to study
function displayData() {
  let display = document.getElementById('display');
  display['innerHTML'] = JSON.stringify(wordList);
}

//hides wordList on command/when starting the game so the user can't cheat
function hideData() {
  let display = document.getElementById('display');
  display['innerHTML'] = "";
}

//starts the game
function startGame() {
  hideData(); //can't have cheaters now, can we?
  let index = getRandomInt(listLength(wordList)); //uses index to find specific word pair in wordList
  let current = document.getElementById('currentWord');
  let counter = 0; //checks for the correct index
  engOrKor = getRandomInt(2); //0 for eng, 1 for kor
  for (let val in wordList) { 
    if (counter == index) {
      if (engOrKor == 0) { //given english, translate to korean
        current['innerHTML'] = val; //english
        current['value'] = wordList[val]; //korean
      } else { //given korean, translate to english
        current['innerHTML'] = wordList[val]; //korean
        current['value'] = val; //english
      }
    }
  counter++;
  } 
}

function checkAnswer() {
  let current = document.getElementById('currentWord');
  let input = document.getElementById('userInput');
  let result = document.getElementById('result');
  //0 for English, 1 for Korean
  //displays language in the log
  if (engOrKor == 0) {
    language = "Korean";
  } else {
    language = "English";
  }

  //correct/incorrect messages + updates the log with english/korean translations
  if (current['value'] == input['value']) { //checks if input matches the answer
    result['innerHTML'] = 'Correct! :)';
    updateLog("\"" + current['innerHTML'] + "\" in " + language + " is \"" + input['value'] + "\".");
  } else {
    result['innerHTML'] = 'Incorrect! :( The correct answer was : ' + current['value'];
    updateLog("\"" + current['innerHTML'] + "\" in " + language + " is \"" + current['value'] +   "\".");
  }
  //immediately starts another round
  startGame();
}

function updateLog(text) {
  let log = document.getElementById('log');
  //<br> = break line
  log['innerHTML'] = text + "<br>" + log['innerHTML'];
}

//displays instructions
function displayInstructions() {
  let instructions = document.getElementById('instructions');
  instructions['innerHTML'] = "Select a vocab list to begin.<br>You can click on the \"Display Words\" button to review the words that will be displayed, and \"Hide Words\" to hide them before beginning.<br>Click on \"Start\" to begin studying, and \"Submit\" to check your translation.";
}

//hides the instructions
function hideInstructions() {
  let instructions = document.getElementById('instructions');
  instructions['innerHTML'] = "";
}

//sets wordList to chapter 1's vocab
function getDataCh1() {
  let current = document.getElementById('currentList');
  current['innerHTML'] = "Current Selected List : Chapter 1";
  wordList = {'express bus': '고속 버스', 'traffic': '교동', 'transportation': '교동', 'train': '기차', 'ship': '배', 'boat': '배', 'bus': '버스', 'airplane': '비행기', 'automobile': '자동차', 'bicycle': '자전거', 'subway': '지하철', 'by walking': '걸어서', 'to transfer': '갈아타다', 'to get off': '내리다', 'to get down': '내리다', 'descend': '내리다', 'to get on': '타다', 'to ride': '타다', 'bus stop': '버스 정류장', 'subway station': '지하철 역'};
}

//sets wordList to chapter 2's vocab
function getDataCh2() {
  let current = document.getElementById('currentList');
  current['innerHTML'] = "Current Selected List : Chapter 2";
  wordList = {'express bus': '고속 버스', 'traffic': '교동', 'transportation': '교동', 'train': '기차', 'ship': '배', 'boat': '배', 'bus': '버스', 'airplane': '비행기', 'automobile': '자동차', 'bicycle': '자전거', 'subway': '지하철', 'by walking': '걸어서', 'to transfer': '갈아타다', 'to get off': '내리다', 'to get down': '내리다', 'descend': '내리다', 'to get on': '타다', 'to ride': '타다', 'bus stop': '버스 정류장', 'subway station': '지하철 역'};
}

//sets wordList to chapter 3's vocab
function getDataCh3() {
  let current = document.getElementById('currentList');
  current['innerHTML'] = "Current Selected List : Chapter 3";
  wordList = {'express bus': '고속 버스', 'traffic': '교동', 'transportation': '교동', 'train': '기차', 'ship': '배', 'boat': '배', 'bus': '버스', 'airplane': '비행기', 'automobile': '자동차', 'bicycle': '자전거', 'subway': '지하철', 'by walking': '걸어서', 'to transfer': '갈아타다', 'to get off': '내리다', 'to get down': '내리다', 'descend': '내리다', 'to get on': '타다', 'to ride': '타다', 'bus stop': '버스 정류장', 'subway station': '지하철 역'};
}

//sets wordList to chapter 4's vocab
function getDataCh4() {
  let current = document.getElementById('currentList');
  current['innerHTML'] = "Current Selected List : Chapter 4";
  wordList = {'express bus': '고속 버스', 'traffic': '교동', 'transportation': '교동', 'train': '기차', 'ship': '배', 'boat': '배', 'bus': '버스', 'airplane': '비행기', 'automobile': '자동차', 'bicycle': '자전거', 'subway': '지하철', 'by walking': '걸어서', 'to transfer': '갈아타다', 'to get off': '내리다', 'to get down': '내리다', 'descend': '내리다', 'to get on': '타다', 'to ride': '타다', 'bus stop': '버스 정류장', 'subway station': '지하철 역'};
}

//sets wordList to chapter 5's vocab
function getDataCh5() {
  let current = document.getElementById('currentList');
  current['innerHTML'] = "Current Selected List : Chapter 5";
  wordList = {'express bus': '고속 버스', 'traffic': '교동', 'transportation': '교동', 'train': '기차', 'ship': '배', 'boat': '배', 'bus': '버스', 'airplane': '비행기', 'automobile': '자동차', 'bicycle': '자전거', 'subway': '지하철', 'by walking': '걸어서', 'to transfer': '갈아타다', 'to get off': '내리다', 'to get down': '내리다', 'descend': '내리다', 'to get on': '타다', 'to ride': '타다', 'bus stop': '버스 정류장', 'subway station': '지하철 역'};
}

//sets wordList to chapter 6's vocab
function getDataCh6() {
  let current = document.getElementById('currentList');
  current['innerHTML'] = "Current Selected List : Chapter 6";
  wordList = {'express bus': '고속 버스', 'traffic': '교동', 'transportation': '교동', 'train': '기차', 'ship': '배', 'bus': '버스', 'airplane': '비행기', 'automobile': '자동차', 'bicycle': '자전거', 'subway': '지하철', 'by walking': '걸어서', 'to transfer': '갈아타다', 'to get off': '내리다', 'to ride': '타다', 'bus stop': '버스 정류장', 'subway station': '지하철 역', 'How do you go?': '어똫게 가요?', 'How long does it take?': '얼마나 걸려요?', 'to take (time)': '걸리다', 'outdoor market': '시장', 'over there': '저기', 'or': '이나', 'about': '쯤', 'excuse me (to a waiter)': '저기요', 'next day': '다음 날', 'first day': '첫날', 'to walk': '걷다', 'to attend (regularly)': '다니다', 'to begin': '시작하다', 'to be near/close': '가깝다', 'to be late': '늦다', 'to be quick/fast': '빠르다', 'to be far/distant': '멀다', 'traffic is bad': '교통이 복잡하다', 'from _ to _ (spatial reference)': '_에서 _까지', 'now': '이제', 'to arrive early': '일찍 도착하다', 'a little bit': '조금', 'to take photographs': '사진을 찍다', 'from _': '_한테서', 'Next time we should go together': '다음에 꼭 같이 가요', 'Please show me the photograph': '사진 좀 보여 주세요', 'Wow!': '와!', 'That is really cool': '참 멋있어요'};
}
