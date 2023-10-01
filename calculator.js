let results = [];

function calculate() {
    let x = parseFloat(prompt("Enter x value:"));
    let operator = prompt("Enter an arithmetic operator (+, -, %, /, *):");
    let y = parseFloat(prompt("Enter y value:"));

    let isValidInput = !isNaN(x) && !isNaN(y);

    let result;

    if (isValidInput) {
        switch (operator) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "%":
                result = x % y;
                break;
            case "/":
                result = x / y;
                break;
            case "*":
                result = x * y;
                break;
            default:
                alert("Please enter +, -, %, /, or *");
                return;
        }
        results.push(result);
    }

    document.write('<table style="border-collapse: collapse; border: 1px solid black;">');
    document.write('<tr style="border: 1px solid black;"><th style="border: 1px solid black;">x</th><th style="border: 1px solid black;">y</th><th style="border: 1px solid black;">Operation</th><th style="border: 1px solid black;">Result</th></tr>');
    if (isValidInput) {
        document.write(`<tr style="border: 1px solid black;"><td style="border: 1px solid black;">${x}</td><td style="border: 1px solid black;">${y}</td><td style="border: 1px solid black;">${x} ${operator} ${y}</td><td style="border: 1px solid black;">${result}</td></tr>`);
    } else {
        document.write('<tr style="border: 1px solid black;"><td colspan="4" style="border: 1px solid black; text-align: center;">Invalid Input</td></tr>');
    }
    document.write('</table>');

    let continueCalculation = confirm("Again?");
    if (continueCalculation) {
        calculate();
    } else {
        if (results.length > 0) {
            let min = Math.min(results);
            let max = Math.max(results);
            let total = results.reduce((acc, curr) => acc + curr, 0);
            let average = total / results.length;

document.write('<table style="border-collapse: collapse; border: 1px solid black;">');
document.write('<tr style="border: 1px solid black;"><th style="border: 1px solid black;">Minimum</th><th style="border: 1px solid black;">Maximum</th><th style="border: 1px solid black;">Average</th><th style="border: 1px solid black;">Total</th></tr>');
document.write(`<tr style="border: 1px solid black;"><td style="border: 1px solid black;">${min}</td><td style="border: 1px solid black;">${max}</td><td style="border: 1px solid black;">${average}</td><td style="border: 1px solid black;">${total}</td></tr>`);
document.write('</table>');
        }
    }
}

calculate(); 
                                                                                                                                                                                                                                                                                                                                                                                