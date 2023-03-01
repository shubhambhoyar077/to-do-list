import { renderList } from './displayList';
import Storage from './storage';

export default class ToDoList {
  constructor() {
    this.storage = new Storage();
    this.toDoList = [];
  }

  displayList() {
    renderList(0, true);
    this.toDoList.forEach((element) => {
      renderList(element);
    });
  }

  addItem(description) {
    const newItem = {
      index: this.toDoList.length + 1,
      description,
      completed: false,
    };
    renderList(newItem);
    this.toDoList.push(newItem);
    this.updateLocalStorage();
  }

  updateItem(index, updateDescription) {
    this.toDoList[index].description = updateDescription;
    this.updateLocalStorage();
  }

  deleteItem(index) {
    this.toDoList.splice(index, 1);
    this.updateIndex();
    this.displayList();
  }

  updateIndex() {
    this.toDoList.forEach((element, index) => {
      element.index = index + 1;
    });
    this.updateLocalStorage();
  }

  markComplited(index, value) {
    this.toDoList[index].completed = value;
    this.updateLocalStorage();
  }

  clearCompleted() {
    this.toDoList = this.toDoList.filter((element) => !element.completed);
    this.updateIndex();
    this.displayList();
  }

  restoreList() {
    if (!localStorage.getItem('todo_list')) {
      this.storage.updateLocalStorage(this.toDoList);
      this.toDoList = this.storage.getLocalStorage();
    } else {
      this.toDoList = this.storage.getLocalStorage();
    }
    this.displayList();
  }

  updateLocalStorage() {
    this.storage.updateLocalStorage(this.toDoList);
  }
}