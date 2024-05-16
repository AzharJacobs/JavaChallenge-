document.getElementById('working').addEventListener('change', function() {
    const workDetails = document.getElementById('workDetails');
    if (this.checked) {
        workDetails.style.display = 'block';
    } else {
        workDetails.style.display = 'none';
    }
});

function calculateSalary() {
    const hours = parseFloat(document.getElementById('hours').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const taxRate = 0.2; // assuming a 20% tax rate
    const salary = (hours * rate) * (1 - taxRate);
    document.getElementById('salary').value = salary.toFixed(2);
}