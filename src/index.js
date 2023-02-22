import './style.css';
import ToDoList from './modules/toDoList';
import showDate from './modules/dateTime';
import { editUi, updateUi } from './modules/edit_update';

const addItem = document.getElementById('enter-item');
const addItemBtn = document.getElementById('add-item');
const newToDoList = new ToDoList();
newToDoList.restoreList();

addItem.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (addItem.value) {
      newToDoList.addItem(addItem.value);
    }
    addItem.value = '';
  }
});

addItemBtn.addEventListener('click', (event) => {
  if (event.target.previousElementSibling.value) {
    newToDoList.addItem(event.target.previousElementSibling.value);
  }
  addItem.value = '';
});

const ulList = document.getElementById('list-items');

ulList.addEventListener('click', (event) => {
  if (event.target.id === 'label') {
    editUi(event);
  }
  if (event.target.id === 'delete') {
    const li = event.target.parentNode;
    const index = li.querySelector('.view').id;
    newToDoList.deleteItem(index);
  }
});

ulList.addEventListener('blur', (event) => {
  updateUi(event);
  newToDoList.updateItem(event.target.parentNode.id, event.target.value);
}, true);

showDate();