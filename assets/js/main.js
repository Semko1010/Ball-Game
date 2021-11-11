//variables
let ball_1 = document.getElementById("ball1");
let ball_2 = document.getElementById("ball2");
let ball_3 = document.getElementById("ball3");
let ball_4 = document.getElementById("ball4");
let ball_5 = document.getElementById("ball5");
//variables Highscore
let highscore = document.getElementById("highscore");
let sound = new Audio("../audio/sound.wav");
let points = 0;
let level = 0;
let nextLevel = document.getElementById("next_level");
let finish = document.getElementById("finish");
let highscoreLevel = document.getElementById("highscoreLevel");
//Variables Ball Speed
let speed1 = 300;
let speed2 = 600;
let defaultSpeed = 2000;



//eventlistener
ball_1.addEventListener("mousedown", point1)
ball_2.addEventListener("mousedown", point2)
ball_3.addEventListener("mousedown", point3)
ball_4.addEventListener("mousedown", point4)
ball_5.addEventListener("mousedown", point5)
finish.addEventListener("click", next)





// function ball1() {
//     let top1 = Math.floor(Math.random() * 80);
//     let left1 = Math.floor(Math.random() * 80);
//     ball_1.style.top = top1 + "vh"
//     ball_1.style.left = left1 + "vw"
//     setTimeout(ball1, 150 + defaultSpeed);
// }

// ball1()

// function ball2() {
//     let top2 = Math.floor(Math.random() * 80);
//     let left2 = Math.floor(Math.random() * 80);
//     ball_2.style.top = top2 + "vh"
//     ball_2.style.left = left2 + "vw"
//     setTimeout(ball2, 110 + defaultSpeed);
// }
// ball2()

// function ball3() {
//     let top3 = Math.floor(Math.random() * 80);
//     let left3 = Math.floor(Math.random() * 80);
//     ball_3.style.top = top3 + "vh"
//     ball_3.style.left = left3 + "vw"
//     setTimeout(ball3, 90 + defaultSpeed);
// }
// ball3()

// function ball4() {
//     let top4 = Math.floor(Math.random() * 80);
//     let left4 = Math.floor(Math.random() * 80);
//     ball_4.style.top = top4 + "vh"
//     ball_4.style.left = left4 + "vw"
//     setTimeout(ball4, 50 + defaultSpeed);
// }
// ball4()


// function ball5() {
//     let top5 = Math.floor(Math.random() * 80);
//     let left5 = Math.floor(Math.random() * 80);
//     ball_5.style.top = top5 + "vh"
//     ball_5.style.left = left5 + "vw"
//     setTimeout(ball5, 10 + defaultSpeed);

// }
// ball5();



function point1() {
    points += 10;
    highscore.innerHTML = points;
    ball_1.classList.remove("ball1");
    sound.play();
    level += 1;
    if (level == 5) {
        ball_1.classList.add("ball1");
        ball_2.classList.add("ball2");
        ball_3.classList.add("ball3");
        ball_4.classList.add("ball4");
        ball_5.classList.add("ball5");
        nextLevel.style.display = "flex";
    }
    if (level == 10) {
        ball_1.classList.add("ball1");
        ball_2.classList.add("ball2");
        ball_3.classList.add("ball3");
        ball_4.classList.add("ball4");
        ball_5.classList.add("ball5");
        nextLevel.style.display = "flex";
    }
    if (level == 15) {
        finish.innerHTML = "New Game"
        nextLevel.style.display = "flex";
    }

}

function point2() {
    points += 10;
    highscore.innerHTML = points;
    ball_2.classList.remove("ball2");
    sound.play();
    level += 1;
    if (level == 5) {
        ball_1.classList.add("ball1");
        ball_2.classList.add("ball2");
        ball_3.classList.add("ball3");
        ball_4.classList.add("ball4");
        ball_5.classList.add("ball5");
        nextLevel.style.display = "flex";
    }
    if (level == 10) {
        ball_1.classList.add("ball1");
        ball_2.classList.add("ball2");
        ball_3.classList.add("ball3");
        ball_4.classList.add("ball4");
        ball_5.classList.add("ball5");
        nextLevel.style.display = "flex";
    }
    if (level == 15) {
        finish.innerHTML = "New Game"
        nextLevel.style.display = "flex";
    }

}

function point3() {
    points += 10;
    highscore.innerHTML = points;
    ball_3.classList.remove("ball3");
    sound.play();
    level += 1;
    if (level == 5) {
        ball_1.classList.add("ball1");
        ball_2.classList.add("ball2");
        ball_3.classList.add("ball3");
        ball_4.classList.add("ball4");
        ball_5.classList.add("ball5");
        nextLevel.style.display = "flex";
    }
    if (level == 10) {
        ball_1.classList.add("ball1");
        ball_2.classList.add("ball2");
        ball_3.classList.add("ball3");
        ball_4.classList.add("ball4");
        ball_5.classList.add("ball5");
        nextLevel.style.display = "flex";
    }
    if (level == 15) {
        finish.innerHTML = "New Game"
        nextLevel.style.display = "flex";
    }

}

function point4() {
    points += 10;
    highscore.innerHTML = points;
    ball_4.classList.remove("ball4");
    sound.play();
    level += 1;
    if (level == 5) {
        ball_1.classList.add("ball1");
        ball_2.classList.add("ball2");
        ball_3.classList.add("ball3");
        ball_4.classList.add("ball4");
        ball_5.classList.add("ball5");
        nextLevel.style.display = "flex";
    }
    if (level == 10) {
        ball_1.classList.add("ball1");
        ball_2.classList.add("ball2");
        ball_3.classList.add("ball3");
        ball_4.classList.add("ball4");
        ball_5.classList.add("ball5");
        nextLevel.style.display = "flex";
    }
    if (level == 15) {
        finish.innerHTML = "New Game"
        nextLevel.style.display = "flex";
    }
}

function point5() {
    points += 10;
    highscore.innerHTML = points;
    ball_5.classList.remove("ball5");
    sound.play();
    level += 1;
    if (level == 5) {
        ball_1.classList.add("ball1");
        ball_2.classList.add("ball2");
        ball_3.classList.add("ball3");
        ball_4.classList.add("ball4");
        ball_5.classList.add("ball5");
        nextLevel.style.display = "flex";
    }
    if (level == 10) {
        ball_1.classList.add("ball1");
        ball_2.classList.add("ball2");
        ball_3.classList.add("ball3");
        ball_4.classList.add("ball4");
        ball_5.classList.add("ball5");
        nextLevel.style.display = "flex";
    }
    if (level == 15) {
        finish.innerHTML = "New Game"
        nextLevel.style.display = "flex";
    }

}

function next() {
    nextLevel.style.display = "none";
    highscoreLevel.innerHTML = "Level 2";
    defaultSpeed = 1500;
    if (level == 10) {
        highscoreLevel.innerHTML = "Level 3";


    }
    if (level == 15) {
        highscoreLevel.innerHTML = "Level 3";
        location.reload();


    }


};

console.log(level.value)