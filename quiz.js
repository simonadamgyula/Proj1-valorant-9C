class Question {
    constructor (question, choices, answer) {
        this.question = question;
        this.choices = {};
        this.answer = answer;
        this.givenAnswer = -1;

        for (let i = 0; i < choices.length; i++) {
            this.choices[i] = choices[i];
        }
    }

    get solution() {
        return this.choices[this.answer];
    }

    isCorrect(answer) {
        if (answer === this.answer || answer == this.solution)
            return true;

        return false;
    }

    print() {
        console.log(this.choices);
        console.log(this.solution);
        return;
    }
}

current = 0;

qs = [
    new Question("q1?", ["a1", "a2", "a3"], 0),
    new Question("q2?", ["a1", "a2", "a3"], 0),
    new Question("q3?", ["a1", "a2", "a3"], 0),
    new Question("q4?", ["a1", "a2", "a3"], 0),
    new Question("q5?", ["a1", "a2", "a3"], 0),
    new Question("q6?", ["a1", "a2", "a3"], 0),
    new Question("q7?", ["a1", "a2", "a3"], 0),
    new Question("q8?", ["a1", "a2", "a3"], 0),
    new Question("q9?", ["a1", "a2", "a3"], 0),
    new Question("q10?", ["a1", "a2", "a3"], 0),
    new Question("q11?", ["a1", "a2", "a3"], 0)
]

function changeQuestion() {
    currentQuestion = qs[current];

    $("#question").text(currentQuestion.question);

    for (let i = 0; i < 3; i++) {
        $(`#answers li:nth-child(${i+1})`).text(currentQuestion.choices[i]);
    }

    for (let i = 0; i < 11; i++) {
        if (i <= current) {
            if (qs[i].givenAnswer != -1) {
                $(`#progressbar span:nth-child(${i+1})`).css("background-color", "cyan");
            } else {
                $(`#progressbar span:nth-child(${i+1})`).css("background-color", "#FF6464");
            }
        } else {
            $(`#progressbar span:nth-child(${i+1})`).css("background-color", "grey");
        }
    }

    $(`#answers li:nth-child(${currentQuestion.givenAnswer + 1})`).css("background-color", "cyan");
    $(`#answers li:not(:nth-child(${currentQuestion.givenAnswer + 1}))`).css("background-color", "white");

    if (current === 0) {
        $("#prev").css("visibility", "hidden");
    } else {
        $("#prev").css("visibility", "visible");
    }

    if (current === 10) {
        $("#next").css("visibility", "hidden");
    } else {
        $("#next").css("visibility", "visible");
    }
}

$("#answers li").on("click", function () {
    ans = $(this).index();
    qs[current].givenAnswer = ans;
    console.log(ans, qs[current].givenAnswer);

    changeQuestion()
});


$("#next").on("click", () => {
    current++;
    changeQuestion();
});

$("#prev").on("click", () => {
    current--;
    changeQuestion();
});

changeQuestion()

