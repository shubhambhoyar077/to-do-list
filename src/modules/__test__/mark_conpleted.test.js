/**
 * @jest-environment jsdom
 */
import ToDoList from "../toDoList";

describe("Mark Completed", ()=> {
  test('Completed task set to true', () => {
    document.body.innerHTML =
    '<div>' +
    '  <ul id="list-items"></ul>' +
    '</div>';
    const testObj = {
      index:0,
      description:"test",
      completed:false
    }
    const toDoList = new ToDoList();
    // Add test task
    toDoList.addItem(testObj);

    // Mark as Completed
    const completed = true;
    toDoList.markComplited(testObj.index, completed);
    toDoList.displayList();//Update html.
    const checkbox = document.getElementById('checkbox');

    expect(checkbox.checked).toBe(completed);
  });
});

