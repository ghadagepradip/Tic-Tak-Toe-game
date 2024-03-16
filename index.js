
const boxes = document.querySelectorAll(".box");
const winner = document.querySelector(".winner");
const reset = document.querySelector(".reset");
const newgame = document.querySelector(".newgame");
const winnertext = document.querySelector(".winnertext");
const game = document.querySelector(".game");
game.classList.remove("blur");
// console.log(boxes);

let turno = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const win = (wn) => {
    disablebox();
    winner.classList.remove("hide");
    game.classList.add("blur");
    winnertext.innerText = `Congratulations, Winner Is ${wn}`;
}

const resetgame = () => {
    // console.log("reset clicked");
    turno = true;
    enablebox();
    game.classList.remove("blur");
    winner.classList.add("hide");

}

boxes.forEach((box) =>
    box.addEventListener("click", () => {
        // console.log("clicked");

        if (turno) {
            box.innerText = "O";
            turno = false;
        }
        else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkwinner();

    })
)


const checkwinner = () => {
    for (let pattern of winpattern) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {

                win(p1);
            }
        }
    }
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
