// Custom Iterator to produce squares of array numbers
const squareIterator = (numbers) => {
    let index = 0; // Iterator index starts at 0
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (index < numbers.length) {
                const value = numbers[index] ** 2; // Square the current element
                index++; // Move to the next element
                return { value, done: false }; // Return the squared value
            } else {
                return { done: true }; // Mark iteration as complete
            }
        }
    };
};

// Function to get user input and create the array of numbers
function getUserInput() {
    const input = prompt("Enter a series of numbers separated by commas (e.g., 1,2,3,4,5):");
    const numbersArray = input.split(",").map(Number); // Convert input string to array of numbers

    // Handle invalid input
    if (numbersArray.some(isNaN)) {
        alert("Please enter valid numbers only.");
        return;
    }

    // Create the iterator and use it
    const iterator = squareIterator(numbersArray);

    // Using a for...of loop to iterate over the custom iterator
    let result = "Squares of the numbers you entered: \n";
    for (const square of iterator) {
        result += square + "\n";
    }

    alert(result); // Show result in an alert
}

// Call the function to get input from the user
getUserInput();
