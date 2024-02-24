const questions = [
    {
        question: 'What number multiplied itself equals 36?',
        correct: 6,
        a: 3,
        b: 9,
        c: 6
    },
    {
        question: 'Which of these is NOT an odd  number?',
        correct: 32,
        a: 32,
        b: 61,
        c: 7
    },
    {
        question: 'solve this if x = 4, 2x + 1 =?',
        correct: 9,
        a: 3,
        b: 6,
        c: 9,
    },
    {
        question: 'what is the square root of 144?',
        correct: 12,
        a: 10,
        b: 11,
        c: 12,
        d: 4
    },
    {
        question: 'is 3 + 5 = 13 ?',
        correct: false,
        a: true,
        b: false,
    }
];

function loadTheQuiz(){
    for(let i=0;i<questions.length;i++){
        const propertyNames = Object.keys(questions[i]);
        document.write(
            `<h2 id="question">${questions[i].question}</h2>` +
            `<p id="eQ${i+1}"></p>` 
        );  
         
        for(let j = 2 ; j < propertyNames.length ; j++){
            const index2 = propertyNames[j];
            document.write(
            `<input type="radio" name="answer${i + 1}" id="${(i+1)+index2}">` +
            `<label>${questions[i][index2]}</label>&emsp; ` +
            `<br><br>`)
        }
    }
}

function quizQuestions() {
    let count = 0;

    //get all options(by the name)  of the checked radio button and compare them to find out which one is correct
    for (let i = 0; i < questions.length; i++) {
        const temp = document.querySelector(`input[name="answer${i + 1}"]:checked`);
        
        //check if the question has been answered 
        if (temp && temp.id.startsWith(`${i + 1}`)) {
            //remove the eroor if question answered
            document.getElementById(`eQ${i + 1}`).innerHTML = ''; 
            //check if the answer  is correct or not
            const questionInfo = questions[i];
            const labelvalue = temp.nextElementSibling; 
            if(questionInfo.correct == labelvalue.textContent){
                count++;
            }
        } else {
            document.getElementById(`eQ${i + 1}`).innerHTML = `Please enter your answer for question ${i + 1}.`;
            document.getElementById(`eQ${i + 1}`).style.color = 'red';
        }
    }

    //display the final result after all questions are answered
    if (areAllQuestionsAnswered()) {
        document.getElementById('result').innerHTML = `Your result is: ${count}/${questions.length}`;
    }
}

function areAllQuestionsAnswered(){
    for(let i=0;i<questions.length;i++){
        const x=document.querySelector(`input[name="answer${i + 1}"]:checked`);
        if(!x)
        return false;
    }
    return true;
}