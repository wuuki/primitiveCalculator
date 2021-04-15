"use strict";
let firstValue = '';
let secondValue = '';
let action = '';
let textField = document.querySelector('.display');
let buttonOne = document.querySelector('.one');
let buttonTwo = document.querySelector('.two');
let buttonThree = document.querySelector('.three');
let buttonFour = document.querySelector('.four');
let buttonFive = document.querySelector('.five');
let buttonSix = document.querySelector('.six');
let buttonSeven = document.querySelector('.seven');
let buttonEight = document.querySelector('.eight');
let buttonNine = document.querySelector('.nine');
let buttonNull = document.querySelector('.null');
let buttonDot = document.querySelector('.dot');
let buttonAllClear = document.querySelector('.allClear');
let buttonEqual = document.querySelector('.equal');
let buttonDivision = document.querySelector('.division');
let buttonMultiplication = document.querySelector('.multiplication');
let buttonSubtraction = document.querySelector('.subtraction');
let buttonAddition = document.querySelector('.addition');
function addValue(value) {
    firstValue += value;
    textField.value = firstValue;
}
function clearForAction() {
    secondValue = firstValue;
    firstValue = '';
}
function equal() {
    if (action == "division") {
        textField.value = +secondValue / +firstValue;
    }
    else if (action == "multiplication") {
        textField.value = +secondValue * +firstValue;
    }
    else if (action == "subtraction") {
        textField.value = +secondValue - +firstValue;
    }
    else if (action == "addition") {
        textField.value = +secondValue + +firstValue;
    }
    else if (action == "") {
        textField.value = firstValue;
        return;
    }
    firstValue = '';
    secondValue = '';
    action = '';
}
if (buttonAllClear) {
    buttonAllClear.addEventListener("click", () => {
        firstValue = '';
        secondValue = '';
        action = '';
        textField.value = '';
    });
}
if (buttonEqual) {
    buttonEqual.addEventListener("click", () => {
        equal();
    });
}
if (buttonDivision) {
    buttonDivision.addEventListener("click", () => {
        clearForAction();
        action = "division";
    });
}
if (buttonMultiplication) {
    buttonMultiplication.addEventListener("click", () => {
        clearForAction();
        action = "multiplication";
    });
}
if (buttonSubtraction) {
    buttonSubtraction.addEventListener("click", () => {
        clearForAction();
        action = "subtraction";
    });
}
if (buttonAddition) {
    buttonAddition.addEventListener("click", () => {
        clearForAction();
        action = "addition";
    });
}
if (buttonOne) {
    buttonOne.addEventListener("click", () => { addValue("1"); });
}
if (buttonTwo) {
    buttonTwo.addEventListener("click", () => { addValue("2"); });
}
if (buttonThree) {
    buttonThree.addEventListener("click", () => { addValue("3"); });
}
if (buttonFour) {
    buttonFour.addEventListener("click", () => { addValue("4"); });
}
if (buttonFive) {
    buttonFive.addEventListener("click", () => { addValue("5"); });
}
if (buttonSix) {
    buttonSix.addEventListener("click", () => { addValue("6"); });
}
if (buttonSeven) {
    buttonSeven.addEventListener("click", () => { addValue("7"); });
}
if (buttonEight) {
    buttonEight.addEventListener("click", () => { addValue("8"); });
}
if (buttonNine) {
    buttonNine.addEventListener("click", () => { addValue("9"); });
}
if (buttonNull) {
    buttonNull.addEventListener("click", () => { addValue("0"); });
}
if (buttonDot) {
    buttonDot.addEventListener("click", () => { addValue("."); });
}