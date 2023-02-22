import { renderList, ulList } from './displayList';
import Storage from './storage';

export default class ToDoList {
  constructor() {
    this.storage = new Storage();
    this.toDoList = [];
  }

  displayList() {
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
    console.log(this.toDoList);
  }

  updateItem(index, updateDescription) {
    this.toDoList[index].description = updateDescription;
    this.updateLocalStorage();
    console.log(this.toDoList);
  }

  deleteItem(index) {
    this.toDoList.splice(index, 1);
    this.updateIndex();
    ulList.innerHTML = '';
    this.displayList();
    console.log(this.toDoList);
  }

  updateIndex() {
    this.toDoList.forEach((element, index) => {
      element.index = index + 1;
    });
    this.updateLocalStorage();
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