// Generator function to produce prime numbers up to a specified limit
function* generatePrimes(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num; // Yield the prime number
        }
    }
}

// Helper function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Not a prime number
        }
    }
    return true;
}

// Get user input for the prime number limit
function getUserInput() {
    const limit = parseInt(prompt("Enter the limit up to which you want to generate prime numbers:"));

    if (isNaN(limit) || limit < 2) {
        alert("Please enter a valid number greater than or equal to 2.");
        return;
    }

    // Create the prime number generator
    const primeGenerator = generatePrimes(limit);

    // Collect and display the prime numbers
    let result = `Prime numbers up to ${limit}:\n`;
    for (const prime of primeGenerator) {
        result += prime + " ";
    }

    alert(result); // Show result in an alert
}

// Call the function to get input and generate primes
getUserInput();
