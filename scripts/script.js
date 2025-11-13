async function convertCurrency(amount, from, to) {
    document.querySelector('#converted-currency').textContent = "Loading...";
    try {
        const response = await fetch(`${API_URL}${from}`);
        const data = await response.json();
        const rate = data.conversion_rates[to];
        const convertedAmount = amount * rate;

        document.querySelector('#converted-currency').textContent = convertedAmount.toFixed(2);
    }catch{document.querySelector('#converted-currency').textContent = "An error caused by the server, please try again";}
}

let inputAmount = document.getElementsByClassName('convert-input')[0];
let inputFrom = document.getElementsByClassName('convert-input')[1];
let inputTo = document.getElementsByClassName('convert-input')[2];

const API_URL = "https://v6.exchangerate-api.com/v6/a52906b05cf0547eb05bfe81/latest/";

document.getElementById('convert-currency-btn').addEventListener('click', () => convertCurrency(inputAmount.value, inputFrom.value, inputTo.value))