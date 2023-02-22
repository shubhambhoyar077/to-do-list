import {renderList, ulList} from './displayList';

export default class ToDoList{
  constructor(toDoList){
    this.toDoList = toDoList;
  }
  displayList(){
    this.toDoList.forEach((element) => {
      renderList(element);
    });
  }
  addItem(description){
    const new_item = {
      index: this.toDoList.length,
      description: description,
      completed: false,
    };
    renderList(new_item);
    this.toDoList.push(new_item);
  }
  updateItem(index, updateDescription){
    this.toDoList[index].description = updateDescription;
  }
  deleteItem(index){
    this.toDoList.splice(index, 1);
    ulList.innerHTML = "";
    this.displayList();
  }
  updateIndex(){
    this.toDoList.forEach((element, index) => {
      element.index = index;
    });
  }
}