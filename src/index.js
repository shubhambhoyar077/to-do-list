import './style.css';
import ToDoList from './modules/toDoList';
import showDate from './modules/dateTime';
import { editUi, updateUi } from './modules/edit_update';

let toDoList = [
];




const addItem = document.getElementById('enter-item');
const addItemBtn = document.getElementById('add-item');
const new_todo_list = new ToDoList(toDoList);
new_todo_list.restoreList();

addItem.addEventListener('keypress', (event) => {
  if(event.key === 'Enter'){
    event.preventDefault();
    if(addItem.value){
      new_todo_list.addItem(addItem.value);
    }
    addItem.value = "";
  }
});

addItemBtn.addEventListener('click', (event) => {
    if(event.target.previousElementSibling.value){
      new_todo_list.addItem(event.target.previousElementSibling.value);
    }
    addItem.value = "";
    console.log(toDoList);
});

const ulList = document.getElementById('list-items');

ulList.addEventListener('click', (event) => {
  if(event.target.id === "label"){
    editUi(event);
  }
  if(event.target.id === 'delete'){
    const li = event.target.parentNode;
    const index = li.querySelector('.view').id;
    new_todo_list.deleteItem(index);
  }
});

ulList.addEventListener('blur', (event) => {
  updateUi(event);
  new_todo_list.updateItem(event.target.parentNode.id, event.target.value);
}, true);

showDate();