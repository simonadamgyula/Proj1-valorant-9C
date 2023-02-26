class Question {
    constructor (index, question, choices, answer) {
        this.index = index - 1;
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

    static getCorrects(list) {
        let result = [];

        list.forEach(element => {
            result.push(element.isCorrect(element.givenAnswer));
        });

        return result;
    }
}

current = 0;

qs = [
    new Question(1, "1. Mikor adták ki a Valorant végleges verzióját?", ["2019 október", "2020 szeptember", "2020 június"], 2),
    new Question(2, "2. Jelenleg hány ügynök (agent) van a játékban?", ["20", "19", "18"], 0),
    new Question(3, "3. Ki volt az az ügynök (agent) aki a legutóbb érkezett a játékba?", ["Fade", "Skye", "Harbor"], 2),
    new Question(4, "4. Miért jó a Valoranttal játszani?", ["Mert egy felejthetetlen élményt ad és remek a közösség.", "Mert hosszú időre kikapcsol és oljda a stresszt", "Ki mondta hogy jó?"], 2),
    new Question(5, "5. Hány pisztoly van a játékban? (a képességek nem számítanak)", ["5", "6", "7"], 1),
    new Question(6, "6. Mennyibe kerül a Valorantban a legdrágabb fegyver?", ["4700", "3950", "4300"], 0),
    new Question(7, "Hány képesség van összesen a játékban?", ["60", "74", "80"], 2),
    new Question(8, "8. Hány játékmód van jelenleg a Valorantban?", ["7", "6", "9"], 0),
    new Question(9, "9. A Valorantot a(z) ... csinálta", ["Valve", "Riot Games", "Activision Blizzard"], 1),
    new Question(10, "10. Melyik fegyver a legolcsóbb a Valorantban?", ["Marshal", "Bucky", "Stinger"], 1),
    new Question(11, "+1 Körülbelül hány játékosa van a Valorantnak?", ["14.81 millió", "17.52 millió", "16.73 millió"], 1)
]

function changeQuestion() {
    currentQuestion = qs[current];

    $("#question").text(currentQuestion.question);

    for (let i = 0; i < 3; i++) {
        $(`#answers li:nth-child(${i+1})`).text(currentQuestion.choices[i]);
    }

    for (let i = 0; i < 11; i++) {
        if (i < current) {
            if (qs[i].givenAnswer != -1) {
                $(`#progressbar span:nth-child(${i+1})`).css("background-color", "#91afff");
            } else {
                $(`#progressbar span:nth-child(${i+1})`).css("background-color", "#b0b0b0");
            }
        } else if (i == current) {
            if (qs[i].givenAnswer != -1) {
                $(`#progressbar span:nth-child(${i+1})`).css("background-color", "#4f5975");
            } else {
                $(`#progressbar span:nth-child(${i+1})`).css("background-color", "#737373");
            }
        } else {
            $(`#progressbar span:nth-child(${i+1})`).css("background-color", "lightgray");
        }
    }

    $(`#answers li:nth-child(${currentQuestion.givenAnswer + 1})`).css("background-color", "#ffff91");
    $(`#answers li:not(:nth-child(${currentQuestion.givenAnswer + 1}))`).css("background-color", "white");

    if (current === 0) {
        $("#prev").prop("disabled", true);
    } else {
        $("#prev").prop("disabled", false);
    }

    if (current === 10) {
        $("#next").prop("disabled", true);
    } else {
        $("#next").prop("disabled", false);
    }

    if (current != 10) {
        $("#submit").prop("disabled", true);
    } else {
        $("#submit").prop("disabled", false);
    }
}

$("#answers li").on("click", function () {
    ans = $(this).index();
    qs[current].givenAnswer = ans;
    console.log(ans, qs[current].givenAnswer);

    changeQuestion()
});


$("#next").on("click", function ()  {
    if ($(this).prop("disabled"))
        return

    current++;
    changeQuestion();
});

$("#prev").on("click", function () {
    if ($(this).prop("disabled"))
        return

    current--;
    changeQuestion();
});

$("#submit").on("click", function () {
    if ($(this).prop("disabled"))
        return

    $('#question-box').css("display", "none");

    let result = Question.getCorrects(qs);
    console.log(result)

    let cross = '<i class="fa-regular fa-circle-xmark"></i>'
    let check = '<i class="fa-regular fa-circle-check"></i>'
    let emptyCheck = '<i class="fa-solid fa-check"></i>'

    let resultList = ""
    qs.forEach(element => {
        index = element.index
        
        if (result[index]) {
            firstChoice = element.answer == 0 ? element.choices[0] + check : element.choices[0]
            secondChoice = element.answer == 1 ? element.choices[1] + check : element.choices[1]
            thirdChoice = element.answer == 2 ? element.choices[2] + check : element.choices[2]
        } else {
            firstChoice = element.answer == 0 ? element.choices[0] + cross : (element.givenAnswer == 0 ? element.choices[0] + emptyCheck : element.choices[0])
            secondChoice = element.answer == 1 ? element.choices[1] + cross : (element.givenAnswer == 1 ? element.choices[1] + emptyCheck : element.choices[1])
            thirdChoice = element.answer == 2 ? element.choices[2] + cross : (element.givenAnswer == 2 ? element.choices[2] + emptyCheck : element.choices[2])
        }

        resultList = resultList.concat(" ", `<div class='result'><h3 class='result-question'>${element.question}</h3><ol><li>${firstChoice}</li><li>${secondChoice}</li><li>${thirdChoice}</li></ol></div>`);
    });

    $("#results").html(resultList);
})

changeQuestion()

