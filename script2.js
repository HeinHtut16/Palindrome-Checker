const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanInputString(str) {
    const regex = /[\s\W_]/gi;
    return str.replace(regex, '');
}

function clickCheckBtn(input) {
    if(input === "") {
        alert("Please input a value."); 
        return;
    }

    let text = cleanInputString(input).toLowerCase();
    let textArr = text.split("");
    
    for(let i = 0; i < textArr.length; i++) {
        if(textArr[i] !== textArr[textArr.length-i-1]) {
            result.textContent = `${input} is not a palindrome.`;
            return;
        }
    }
    result.textContent = `${input} is a palindrome.`;
};


checkBtn.addEventListener("click", () => {
    clickCheckBtn(textInput.value);
});

textInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        clickCheckBtn(textInput.value);
    }
});