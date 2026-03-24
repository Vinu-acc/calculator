const display = document.getElementById('display');

function clearAll() {
    display.value = '';
}

function clearLast() {
    display.value = display.value.slice(0, -1);
}

function clk(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (err) {
        display.value = 'Error';
    }
}
