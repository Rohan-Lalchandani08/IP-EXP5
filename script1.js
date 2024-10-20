function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return reject("Error: Both inputs must be numbers.");
        }

        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject("Error: Division by zero is not allowed.");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject("Error: Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'.");
        }
    });
}

function getUserInput() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Enter the operation (add, subtract, multiply, divide):").toLowerCase();

    calculate(num1, num2, operation)
        .then(result => {
            console.log(`Result: ${result}`);
            alert(`Result: ${result}`);
        })
        .catch(error => {
            console.error(error);
            alert(error);
        });
}

// Call the function to start the calculator
getUserInput();
