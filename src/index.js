import './style.css';
import ToDoList from './modules/toDoList';
import showDate from './modules/dateTime';
import { editUi, updateUi } from './modules/edit_update';

let toDoList = [
  {
    index: 0,
    description: 'Organize office',
    completed: false,
  },
  {
    index: 1,
    description: 'Pay bills',
    completed: false,
  },
  {
    index: 2,
    description: 'Meet George',
    completed: false,
  },
  {
    index: 3,
    description: 'Buy eggs',
    completed: false,
  },
  {
    index: 4,
    description: 'Read a book',
    completed: false,
  },
];




const addItem = document.getElementById('enter-item');
const new_list = new ToDoList(toDoList);
new_list.displayList();

addItem.addEventListener('keypress', (event) => {
  if(event.key === 'Enter'){
    event.preventDefault();
    new_list.addItem(addItem.value);
  }
});

const ulList = document.getElementById('list-items');

ulList.addEventListener('click', (event) => {
  if(event.target.id === "label"){
    editUi(event);
  }
  if(event.target.id === 'delete'){
    const li = event.target.parentNode;
    const index = li.querySelector('.view').id;
    new_list.deleteItem(index);
  }
});

ulList.addEventListener('blur', (event) => {
  updateUi(event);
  new_list.updateItem(event.target.parentNode.id, event.target.value);
}, true);

showDate();