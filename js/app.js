const RED = "RED";
const BLUE = "BLUE";
const YELLOW = "YELLOW";
const GREEN = "GREEN";

var myConsole = document.querySelector("#consoleMsg");

var simon = {
    sendColor: function (color) {
        if (!simon.sequence.length) {
            // start a new game
            simon.nextSequence();
        }
        else {
            if (color === simon.sequence[simon.step]) {
                // goto next step
                if (simon.step === simon.sequence.length - 1) {
                    console.log("Sequence Complete!");
                    myConsole.innerHTML = "Sequence Complete!";
                    setTimeout(() => {
                        simon.step = 0;
                        simon.nextSequence();
                    }, 1000);
                }
                else {
                    simon.step++;
                }
            }
            else {
                // !!lose condition
                myConsole.innerHTML = "WRONG!!";
                simon.sequence = [];
                simon.step = 0;
            }
        }
        console.log("NEW COLOR: " + color);
        // myConsole.innerHTML = "NEW COLOR: " + color;
    },
    sequence: [],
    colors: [RED, BLUE, YELLOW, GREEN],
    nextSequence: function () {
        var nextColor = simon.colors[Math.floor(Math.random() * simon.colors.length)];
        console.log("The random color is:" + nextColor);
        // myConsole.innerHTML = "The random color is:" + nextColor;
        simon.sequence.push(nextColor);
        console.log("The sequence ", simon.sequence);
        myConsole.innerHTML = "The sequence " + simon.sequence;
    },
};

$(document).ready(function () {
    $("#red").click(function () {
        simon.sendColor(RED)
    });
    $("#blue").click(function () {
        simon.sendColor(BLUE);
    });
    $("#yellow").click(function () {
        simon.sendColor(YELLOW);
    });
    $("#green").click(function () {
        simon.sendColor(GREEN);
    });
});


