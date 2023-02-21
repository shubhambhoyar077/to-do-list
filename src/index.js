import './style.css';
import displayList from './modules/displayList';

let toDoList = [
  {
    index: 0,
    description: "Organize office",
    completed: false
  },
  {
    index: 1,
    description: "Pay bills",
    completed: false
  },
  {
    index: 2,
    description: "Meet George",
    completed: false
  },
  {
    index: 3,
    description: "Buy eggs",
    completed: false
  },
  {
    index: 4,
    description: "Read a book",
    completed: false
  },
]

displayList(toDoList);