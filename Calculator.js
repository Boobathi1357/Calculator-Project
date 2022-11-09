// console.log('Hello world');
function calculator() {
    const val1 = document.getElementById('val1').value;
    const val2 = document.getElementById('val2').value;
    const symbol = document.getElementById('operation').value;

    if (symbol === '+') {
        document.getElementById('result').value = val1 + val2;
    }
    if (symbol === '-') {
        document.getElementById('result').value = val1 - val2;
    }
    if (symbol === '*') {
        document.getElementById('result').value = val1 * val2;
    }
    if (symbol === '/') {
        document.getElementById('result').value = val1 / val2;
    }
}