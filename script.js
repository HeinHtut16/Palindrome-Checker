const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanInputString(str) {
    const regex = /[\s\W_]/gi;
    return str.replace(regex, '');
}

function clickCheckBtn(input) {
    let text = cleanInputString(input);
    textInput.value = "";

    if(input === "") {
        alert("Please input a value."); 
        return;
    }

    if(text.toLowerCase() === text.toLowerCase().split("").reverse().join("")) {
        result.innerHTML = `<b>${input}</b> is a palindrome.`;
        return;
    } 
    result.innerHTML = `<b>${input}</b> is not a palindrome.`;
    
}

checkBtn.addEventListener("click", () => {
    clickCheckBtn(textInput.value);
});

textInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        clickCheckBtn(textInput.value);
    }
});