const display = document.getElementById('display');
let solution = "";  // Use let here, as you'll be updating it

// Select all buttons and give them variables
const radButton = document.getElementById("rad");
const degButton = document.getElementById("deg");
const xFactorialButton = document.getElementById("x!");
const openParenButton = document.getElementById("open-paren");
const closeParenButton = document.getElementById("close-paren");
const percentButton = document.getElementById("percent");
const acButton = document.getElementById("ac");

const invButton = document.getElementById("inv");
const sinButton = document.getElementById("sin");
const inButton = document.getElementById("in");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const divideButton = document.getElementById("divide");

const piButton = document.getElementById("pi");
const cosButton = document.getElementById("cos");
const logButton = document.getElementById("log");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const multiplyButton = document.getElementById("multiply");

const eButton = document.getElementById("e");
const tanButton = document.getElementById("tan");
const sqrtButton = document.getElementById("sqrt");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const minusButton = document.getElementById("minus");

const ansButton = document.getElementById("ans");
const expButton = document.getElementById("exp");
const xToTheYButton = document.getElementById("x-to-the-y");
const zeroButton = document.getElementById("zero");
const dotButton = document.getElementById("dot");
const equalButton = document.getElementById("equal");
const plusButton = document.getElementById("plus");

// Update the display text by replacing the selected part
const updateDisplay = (value) => {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText) {
        // Replace selected text with the clicked button's value
        solution = solution.replace(selectedText, value);
    } else {
        // If no text is selected, just append the value
        solution += value;
    }

    display.textContent = solution;  // Update the display
};

// Handle button clicks
sevenButton.addEventListener('click', () => updateDisplay('7'));
eightButton.addEventListener('click', () => updateDisplay('8'));
nineButton.addEventListener('click', () => updateDisplay('9'));
fourButton.addEventListener('click', () => updateDisplay('4'));
fiveButton.addEventListener('click', () => updateDisplay('5'));
sixButton.addEventListener('click', () => updateDisplay('6'));
oneButton.addEventListener('click', () => updateDisplay('1'));
twoButton.addEventListener('click', () => updateDisplay('2'));
threeButton.addEventListener('click', () => updateDisplay('3'));
zeroButton.addEventListener('click', () => updateDisplay('0'));

// Operators and other buttons
plusButton.addEventListener('click', () => updateDisplay('+'));
minusButton.addEventListener('click', () => updateDisplay('-'));
multiplyButton.addEventListener('click', () => updateDisplay('x'));
divideButton.addEventListener('click', () => updateDisplay('÷'));
dotButton.addEventListener('click', () => updateDisplay('.'));

// Handle equal button (calculate expression)
equalButton.addEventListener('click', () => {
    try {
        // Replace 'x' and '÷' with their respective operators for eval()
        let result = solution.replace(/x/g, '*').replace(/÷/g, '/');
        solution = eval(result).toString(); // Use eval to compute the result
        display.textContent = solution;
    } catch (error) {
        display.textContent = "Error";  // Display error if the calculation is invalid
    }
});

// Clear the display (AC button)
acButton.addEventListener('click', () => {
    solution = "";
    display.textContent = "0";  // Reset to initial state
});

// Prevent typing (but allow selection and cursor movement)
display.addEventListener('keydown', (e) => {
    // Allow Backspace and Delete to function
    if (e.key === "Backspace" || e.key === "Delete") {
        e.preventDefault();  // Prevent default action for these keys
        const selection = window.getSelection();
        if (selection.toString()) {
            // If something is selected, remove the selected text
            solution = solution.replace(selection.toString(), '');
        } else {
            // If no selection, remove the last character
            solution = solution.slice(0, -1);
        }
        display.textContent = solution;
    } else if (e.key !== "Backspace" && e.key !== "Delete") {
        // Prevent other keys from being typed
        e.preventDefault();
    }
});

// Allow cursor selection and manipulation, but prevent text input
display.addEventListener('input', (e) => {
    e.preventDefault(); // Prevent text from being inserted via typing
});
