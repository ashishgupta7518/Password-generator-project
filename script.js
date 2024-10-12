const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"


const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")


const getrandomdata = (dataset) => {

    return dataset[Math.floor(Math.random() * dataset.length)]

}



const generatepassword = (password = " ") => {

    if (upperInput.checked) {
        password += getrandomdata(upperSet)
    }

    if (lowerInput.checked) {
        password += getrandomdata(lowerSet)
    }
    if (numberInput.checked) {
        password += getrandomdata(numberSet)
    }

    if (symbolInput.checked) {
        password += getrandomdata(symbolSet)
    }

    if (password.length < totalChar.value) {
        return generatepassword(password);
    }

    passBox.innerText = truncateString(password, totalChar.value);

}

generatepassword();

document.getElementById("btn").addEventListener("click",
    function () {
        generatepassword();
    })


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}