//Quiz Module
const radios = document.querySelectorAll('input[type=radio][name="answer"]');

console.log("radios is a type of:", typeof radios);
console.log("radios is not an array");
console.log("radios".radios);

const radioMessages = {
    answer1: "That’s not right",
    answer2: "That’s right!",
    answer3: "That's not right",
    answer4: "That's not right"
};

radios.forEach((radio) => {
    
    radio.addEventListener("change", (e) => {
        let selectedRadioButtonMessageDiv = document.getElementById(
            `${e.target.id}Message`
        );

        let allMessages = document.querySelectorAll(".message");
        allMessages.forEach((message) => {
            message.style.display = "none";
        });

        let selectedRadioMessage = radioMessages[e.target.id];
        selectedRadioButtonMessageDiv.style.display = "inline";

        selectedRadioButtonMessageDiv.innerHTML = selectedRadioMessage;
    });
});




//Tab Module
function openCase(event, caseNum){
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs content");
    for (i=0 ; i < tabcontent.length ; i++){
        tabcontent[i].style.display="none";
    }
    tablinks = document.getElementsByClassName("tabs links");
    for (i=0; i< tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active"
        , "");
    }
    document.getElementById(caseNum).style.display = "block";
    event.currentTarget.className += " active";
}

