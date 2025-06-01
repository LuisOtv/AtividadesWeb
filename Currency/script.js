const value = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');
const description = document.getElementById('description');

convert.addEventListener('click', function (event) {
    event.preventDefault();
    calculate(parseInt(value.value, 10));
    document.querySelector('footer').classList.add('visible');
});

function calculate(a) {

    if (currency.value == 'USD') {
        description.textContent = "US$ = R$ 4,86"
        result.textContent = ((a * 4.86)).toString() + " Reais";
    }

    else if (currency.value == 'EUR') {
        description.textContent = "EU$ = R$ 5,57"
        result.textContent = ((a * 5.57)).toString() + " Reais";
    }

    else if (currency.value == 'GBP') {
        description.textContent = "GP$ = R$ 6,12"
        result.textContent = ((a * 6.12)).toString() + " Reais";
    }


}