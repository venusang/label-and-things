//Quiz Module
const radios = document.querySelectorAll('input[type=radio][name="answer"]');

console.log("radios is a type of:", typeof radios);
console.log("radios is not an array");
console.log("radios".radios);

const radioMessages = {
    answer1: {
        correct: false,
        message: "That's not right",
    },
    answer2: {
        correct: true,
        message: "That's right!",
    },
    answer3: {
        correct: false,
        message: "That's not right",
    },
    answer4: {
        correct: false,
        message: "That's not right"
    }
};

radios.forEach((radio) => {

    radio.addEventListener("change", (e) => {
        let selectedAnswerDiv = document.getElementById(e.target.id).parentNode;
        console.log('selectedAnswerDiv', selectedAnswerDiv);

        let answerResult = radioMessages[e.target.id].correct;
        let correctClass = answerResult ? 'correct' : 'incorrect';

        // I cannot figure out how to toggle the classes so I just clear them out - this is meh, ok
        let allAnswerDivs = document.querySelectorAll("div.answer");
        allAnswerDivs.forEach((answerDiv) => {
            answerDiv.classList.remove('correct');
            answerDiv.classList.remove('incorrect');
            answerDiv.classList.remove('selected');
        });

        let messageDivs = document.querySelectorAll(".message");
        messageDivs.forEach((message) => {
            message.innerHTML = '';
        });

        selectedAnswerDiv.classList.add(`${correctClass}`);
        selectedAnswerDiv.classList.add('selected');

        let selectedRadioButtonMessageDiv = document.getElementById(
            `${e.target.id}Message`
        );
        let selectedRadioMessage = radioMessages[e.target.id].message;
        selectedRadioButtonMessageDiv.innerHTML = selectedRadioMessage;
    });
});




//Tab Module
function openCase(event, caseNum) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active"
            , "");
    }
    document.getElementById(caseNum).style.display = "block";
    event.currentTarget.className += " active";
}

