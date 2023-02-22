import './style.css';
import ToDoList from './modules/toDoList';
import showDate from './modules/dateTime';

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
    const li = event.target.parentNode.parentNode;
    li.style.background = "yellowgreen";
    event.target.classList.add('disable');
    event.target.nextElementSibling.classList.remove('disable');
    event.target.nextElementSibling.value = event.target.textContent;
    event.target.nextElementSibling.focus();
    [...li.children].map(element => {
      if(element.id === 'move'){
        element.classList.add('disable');
      }
      else if(element.id === 'delete'){
        element.classList.add('disable');
      }
    });
  }
  if(event.target.id === 'delete'){
    const li = event.target.parentNode;
    const index = li.querySelector('.view').id;
    new_list.deleteItem(index);
  }
  
});

ulList.addEventListener('blur', (event) => {
  if(event.target.id === "edit"){
    const li = event.target.parentNode.parentNode;
    const index = event.target.parentNode.id;
    li.style.background = "";
    event.target.classList.add('disable');
    event.target.previousElementSibling.classList.remove('disable');
    event.target.previousElementSibling.textContent = event.target.value;
    [...li.children].map(element => {
      if(element.id === 'move'){
        element.classList.remove('disable');
      }
      else if(element.id === 'delete'){
        element.classList.remove('disable');
      }
    });
    new_list.updateItem(index, event.target.value);
  }
}, true);

showDate();