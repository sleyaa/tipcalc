document.getElementById('tip-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert('Por favor ingrese valores válidos.');
        return;
    }

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    document.getElementById('result').innerHTML = `
        <p>Monto de la factura: $${billAmount.toFixed(2)}</p>
        <p>Propina (${tipPercentage}%): $${tipAmount.toFixed(2)}</p>
        <p>Total a pagar: $${totalAmount.toFixed(2)}</p>
    `;
});
