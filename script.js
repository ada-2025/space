const Questions = [
    {
        q: "Fill in the blank: _____ is the most habitable planet.",
        a: [{text: "TRAPPIST - 1e.", isCorrect: true},
            {text: "PROXIMA CENTAURI B.", isCorrect: false},
            {text: "KEPLAR - 22b.", isCorrect: false},
            {text: "TOI - 733b.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: The most habitable planet in our system is _____.(Besides Earth)",
        a: [{text: "Neptune.", isCorrect: false},
            {text: "Mars.", isCorrect: true},
            {text: "Venus.", isCorrect: false},
            {text: "Jupiter.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: The core of a blackhole is the _____.",
        a: [{text: "Event Horizon.", isCorrect: false},
            {text: "Blackhole Core.", isCorrect: false},
            {text: "Singularity.", isCorrect: true},
            {text: "Center Core.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: The process of being sucked in is called ____.",
        a: [{text: "Sucked in.", isCorrect: false},
            {text: "Suckulation.", isCorrect: false},
            {text: "Pastaification.", isCorrect: false},
            {text: "Spaghettification.", isCorrect: true},
           ]
    },
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";
    
    for (let i = 0; i < Questions[currQuestion].a.length; i++)
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name ="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect)
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore()
{
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}

function nextQuestion()
{
    if (currQuestion < Questions.length - 1)
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}