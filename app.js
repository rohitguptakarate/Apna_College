let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;
let h2 = document.querySelector("h2");
let btn = ["red", "yellow", "green", "purple"];

// First step->
document.addEventListener("keypress", function (event) {
  if (started == false) {
    console.log("started Now");
    started = true;
    levelUp();
  }
});

function gameflash(randbtn) {
  randbtn.classList.add("flash");
  setTimeout(function () {
    randbtn.classList.remove("flash");
  }, 250);
}

function userFleshBtn(userbtn) {
  userbtn.classList.add("userflash");
  setTimeout(function () {
    userbtn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = []; //reset the Game and press the again all colors
  level++;
  h2.innerText = `Level ${level}`;
  let randNum = Math.floor(Math.random() * 4);
  let randColor = btn[randNum];
  let randbtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log("gameSeq", gameSeq);

  gameflash(randbtn);
}

let divBtns = document.querySelectorAll(".btn");
for (bnt of divBtns) {
  bnt.addEventListener("click", userPressBtn);
}

function checkAns(idx) {
  if (gameSeq[idx] === userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `Game Over ,Press any key to replay the Game`;
    document.querySelector("body").classList.add("Error");
    setTimeout(function () {
      document.querySelector("body").classList.remove("Error");
    }, 500);
    resetBtn();
  }
}

function userPressBtn() {
  console.log(this);
  let userbtn = this;
  userFleshBtn(userbtn);
  let userColor = userbtn.getAttribute("id");
  userSeq.push(userColor);
  // console.log("userSeq", userSeq);
  checkAns(userSeq.length - 1);
}

function resetBtn() {
  started = false;
  level = 0;

  gameSeq = [];
  userSeq = [];
}
