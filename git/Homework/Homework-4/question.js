var questions = [
    
    {
        title: "Which keyword is used to tell JavaScript that we're going to work with a variable?",
        choice: ["variable", "int", "var", "vrb"],
        answer: "var"
    },
    {
        title: "What characters cannot be used in variable names?",
        choice: ["Underscore sign","Letters", 'Numbers', "Special symbols (%, #, etc.)"],
        answer: "Special symbols (%, #, etc.)"
    },
    {
        title: "What is the output of the following code: var x = 50 var y = 100 document.write(x+y);?",
        choice: ["150", "50100", "5000", "Null"],
        answer: "50100"
    },
]

var questionOne = "";
var currentQuestion = 1;

questionOne += "<p>" + questions[0].title + "</p>";
for(let i = 0; i < questions[0].choice.length; i++) {
    questionOne += "<input type=button class=choices value=" + questions[0].choice[i] + ">";
};

document.getElementById("questions").innerHTML = questionOne;

document.querySelector("#questions").addEventListener("click", function(event){
    
    if(event.target.classList.contains('choices')) {
        var userInput = event.target.value;
        console.log(userInput);
        if(userInput === questions[currentQuestion - 1].answer) {
            questionOne = "";
            questionOne += "<p>" + questions[currentQuestion].title + "</p>";
        

            for(let i = 0; i < questions[currentQuestion].choice.length; i++) {
                questionOne += "<input type=button class=choices value=" + questions[currentQuestion].choice[i] + ">";
            };

            document.getElementById("questions").innerHTML = questionOne;

            currentQuestion++;
            
        }
    }
});

