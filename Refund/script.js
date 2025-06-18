const form = document.querySelector('form');
const expenseList = document.querySelector('ul');
const totalElement = document.querySelector('h2');
const expenseCount = document.querySelector('span');

var amount = 0;

const categoryIcons = {
    food: 'img/food.svg',
    accommodation: 'img/accommodation.svg',
    services: 'img/services.svg',
    transport: 'img/transport.svg',
    others: 'img/others.svg'
};

const categoryNames = {
    food: 'Alimentação',
    accommodation: 'Hospedagem',
    services: 'Serviços',
    transport: 'Transporte',
    others: 'Outros'
};

function updateAmmout() {
    const count = document.querySelectorAll('.expense').length;
    totalElement.innerHTML = `<small>R$</small>${amount.toFixed(2).replace('.', ',')}`;
    expenseCount.textContent = `${count} despesa${count !== 1 ? 's' : ''}`;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const expenseName = document.getElementById('expense').value;
    const category = document.getElementById('category').value;
    const amountValue = document.getElementById('amount').value;

    amount += parseFloat(amountValue.replace(',', '.'));

    const li = document.createElement('li');
    li.className = 'expense';
    li.dataset.amount = amountValue.replace(',', '.');
    li.innerHTML = `
    <img src="${categoryIcons[category]}" alt="Ícone de tipo da despesa" />
    <div class="expense-info">
      <strong>${expenseName}</strong>
      <span>${categoryNames[category]}</span>
    </div>
    <span class="expense-amount"><small>R$</small>${amountValue}</span>
    <img src="./img/remove.svg" alt="remover" class="remove-icon" />
  `;

    expenseList.appendChild(li);
    updateAmmout();
    form.reset();
});

expenseList.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-icon')) {
        const li = e.target.closest('.expense');
        amount -= parseFloat(li.dataset.amount);
        li.remove();
        updateAmmout()
    }
});

document.getElementById('amount').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = (parseInt(value) / 100).toFixed(2).replace('.', ',');
    e.target.value = value;
});

updateAmmout()