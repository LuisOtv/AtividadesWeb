document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#inp');
    const addButton = document.querySelector('#butt');
    const itemsContainer = document.querySelector('.items');

    const deletedNotification = document.querySelector('#deleted');
    if (deletedNotification) {
        deletedNotification.remove();
    }

    addButton.addEventListener('click', addNewItem);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addNewItem();
        }
    });

    function showDeletedNotification() {
        const notification = document.createElement('div');
        notification.id = 'deleted';
        notification.innerHTML = `
            <div class="left">
                <img width="25px" height="25px" src="img/warning-circle-filled.svg" alt="">
                <h3>O item foi removido da lista</h3>
            </div>
            <div class="right">
                <img src="img/delete-small.svg" alt="">
            </div>
        `;

        itemsContainer.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    function addNewItem() {
        const text = input.value.trim();
        if (text === '') return;

        const newItem = document.createElement('div');
        newItem.className = 'item';

        newItem.innerHTML = `
            <div class="left">
                <input type="checkbox" name="" id="">
                <h3>${text}</h3>
            </div>
            <div class="right">
                <img src="img/delete.svg" alt="">
            </div>
        `;

        const deleteButton = newItem.querySelector('img');
        deleteButton.addEventListener('click', () => {
            newItem.remove();
            showDeletedNotification();
        });

        itemsContainer.appendChild(newItem);
        input.value = '';
    }
});