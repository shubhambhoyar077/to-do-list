/**
 * @jest-environment jsdom
 */
import ToDoList from "../toDoList";

//Code here
describe("Edit Items in list", ()=> {
  test('Edited task textContent should be equal to updated description', () => {
    document.body.innerHTML =
    '<div>' +
    '  <ul id="list-items"></ul>' +
    '</div>';
    const testdescription = "test";
    const toDoList = new ToDoList();
    // Add test task
    toDoList.addItem(testdescription);
    const index = document.querySelector('.view').id;
    // Update test task
    const update_description = "Test is updated";
    toDoList.updateItem(index, update_description);
    toDoList.displayList();//Update html.
    const description = document.getElementById('label');
    expect(description.textContent).toBe(update_description);
  });
});
