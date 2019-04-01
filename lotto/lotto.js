const balls = [];
const DRAW_NUMBER = 6;

/**
 * 1 ~ 46번까지 초기화
 */
function initBall() {
    for (let i = 1; i <= 46; i++) {
        balls.push(i);
    }
}

/**
 * 당첨된 번호 보여주기
 * @param drawBalls
 */
function getShowPrize(drawBalls) {
    const ballLIst = document.getElementById('ballLIst');
    ballLIst.insertAdjacentHTML('beforeend', drawBalls);
}

/**
 * 당첨된 번호 html 만들기
 * @param drawBalls 당첨된 번호 리스트
 * @returns {string} html
 */
function makeLottoPrize(drawBalls) {
    return drawBalls.reduce((html, item) => {
        html += `<span class="ball">${item}</span>`;
        return html;
    }, '') + '<br />';
}

/**
 * 당첨 리스트 DIV 지우기
 */
function clearBallList() {
    const ballLIst = document.getElementById('ballLIst');
    while (ballLIst.firstChild) {
        ballLIst.removeChild(ballLIst.firstChild);
    }
}

/**
 * 당첨 버튼 이벤트
 */
function onClickDraw() {
    initBall();
    clearBallList();

    const drawTimes = document.getElementById('drawTimes');
    const prizeTimes = drawTimes.options[drawTimes.selectedIndex].value;

    for (let j = 0; j < prizeTimes; j++) {
        const drawBalls = [];

        for (let i = 0; i < DRAW_NUMBER; i++) {
            const index = Math.floor(Math.random() * balls.length);
            const number = balls[index];
            balls.splice(index, 1);
            drawBalls.push(number);
            drawBalls.sort(function (a, b) {
                return a - b;
            });
        }

        getShowPrize(makeLottoPrize(drawBalls));
    }
}

// class Lotto {
//
//     onClickDraw() {
//         console.log('tttt');
//
//         this.initBall();
//
//         const balls = [];
//         const drawBalls = [];
//
//         for (let i = 0; i < 6; i++) {
//             const index = Math.floor(Math.random() * balls.length);
//             const number = balls[index];
//             balls.splice(index, 1);
//             drawBalls.push(number);
//             drawBalls.sort(function(a, b) {
//                 return a - b;
//             });
//         }
//     }
//     initBall() {
//
//     };
//
// }
//
// const lotto = new Lotto();
// const prizeList = document.getElementById('lottoDraw');
// prizeList.addEventListener('click', lotto.onClickDraw);
