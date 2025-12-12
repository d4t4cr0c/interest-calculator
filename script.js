document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateInterest();
});

function calculateInterest() {
    // Get input values
    const initialAmount = parseFloat(document.getElementById('initial-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const frequency = document.getElementById('frequency').value;

    // Validate inputs
    if (isNaN(initialAmount) || isNaN(interestRate) || !frequency) {
        alert('Please fill in all fields with valid values');
        return;
    }

    // Determine the number of compounding periods per year
    let periodsPerYear;
    switch(frequency) {
        case 'daily':
            periodsPerYear = 252; // Trading days
            break;
        case 'weekly':
            periodsPerYear = 52;
            break;
        case 'monthly':
            periodsPerYear = 12;
            break;
        default:
            alert('Please select a valid frequency');
            return;
    }

    // Convert interest rate from percentage to decimal
    const ratePerPeriod = interestRate / 100;

    // Calculate annualized rate
    // Formula: (1 + r)^n - 1
    const annualizedRate = Math.pow(1 + ratePerPeriod, periodsPerYear) - 1;
    const annualizedRatePercent = annualizedRate * 100;

    // Calculate final amount after one year
    // Formula: P * (1 + r)^n
    const finalAmount = initialAmount * Math.pow(1 + ratePerPeriod, periodsPerYear);

    // Display results
    displayResults(annualizedRatePercent, finalAmount);
}

function displayResults(annualizedRate, finalAmount) {
    // Show results section
    const resultsDiv = document.getElementById('results');
    resultsDiv.classList.remove('hidden');

    // Format and display annualized rate
    const annualizedRateElement = document.getElementById('annualized-rate');
    annualizedRateElement.textContent = annualizedRate.toFixed(2) + '%';

    // Format and display final amount
    const finalAmountElement = document.getElementById('final-amount');
    finalAmountElement.textContent = '$' + finalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Add input validation for numbers only
document.getElementById('initial-amount').addEventListener('input', function(e) {
    if (e.target.value < 0) {
        e.target.value = 0;
    }
});
