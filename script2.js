const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const bold = document.getElementById("bold");
const span = document.getElementById("span");

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
    
    for(let i = 0; i < textArr.length/2; i++) {
        if(textArr[i] !== textArr[textArr.length-i-1]) {
            result.innerHTML = `<b>${input}</b> is not a palindrome.`;
            textInput.value = "";
            return;
        }
    }
    textInput.value = "";
    result.innerHTML = `<b>${input}</b> is a palindrome.`;
};


checkBtn.addEventListener("click", () => {
    clickCheckBtn(textInput.value);
});

textInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        clickCheckBtn(textInput.value);
    }
});