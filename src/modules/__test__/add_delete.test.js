/**
 * @jest-environment jsdom
 */
import ToDoList from "../toDoList";

describe("Add and Delete Items in list", ()=> {
  // Code Here
  test('Add one new item to the list', () => {
    document.body.innerHTML =
    '<div>' +
    '  <ul id="list-items"></ul>' +
    '</div>';
    const description = "test";
    const toDoList = new ToDoList();
    toDoList.addItem(description);
    const list = document.querySelectorAll('#list-items li');
    expect(list).toHaveLength(1);
  });
});

