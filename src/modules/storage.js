export default class Storage {
  getLocalStorage = () => {
    const toDoList = JSON.parse(localStorage.getItem('todo_list'));
    return toDoList;
  }

  updateLocalStorage = (toDoList) => {
    localStorage.setItem('todo_list', JSON.stringify(toDoList));
  }
}