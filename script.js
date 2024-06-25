const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanInputString(str) {
    const regex = /[\s\W_]/gi;
    return str.replace(regex, '');
}

function clickCheckBtn(input) {
    let text = cleanInputString(input);
    if(text === "") {
        alert("Please input a value."); 
        return;
    }
    if(text.toLowerCase() === text.toLowerCase().split("").reverse().join("")) {
        result.textContent = `${input} is a palindrome.`;
    } else {
        result.textContent = `${input} is not a palindrome.`;
    }
}

checkBtn.addEventListener("click", () => {
    clickCheckBtn(textInput.value);
});

textInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        clickCheckBtn(textInput.value);
    }
});