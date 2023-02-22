import renderList from './displayList';

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
      index: this.addItem.length,
      description: description,
      completed: false,
    };
    renderList(new_item);
    this.toDoList.push(new_item);
  }
}