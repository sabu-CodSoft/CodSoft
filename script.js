// script.js
function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += ` ${operator} `;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

async function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    const response = await fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ expression })
    });

    const data = await response.json();

    if (response.ok) {
        display.value = data.result;
    } else {
        display.value = 'Error';
    }
}
