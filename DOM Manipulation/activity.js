function checkNumber() {
    // Get the input value
    var number = parseInt(document.getElementById("numberInput").value);

    // Check if the number is even or odd
    if (number % 2 === 0) {
        // If even, display "Even"
        document.getElementById("result").innerText = "Even";
    } else {
        // If odd, display "Odd"
        document.getElementById("result").innerText = "Odd";
    }
}
