/**
 * @jest-environment jsdom
 */
import ToDoList from '../toDoList';

describe('Edit Items in list', () => {
  test('Edited task textContent should be equal to updated description', () => {
    document.body.innerHTML = '<div>'
    + '  <ul id="list-items"></ul>'
    + '</div>';
    const testdescription = 'test';
    const toDoList = new ToDoList();
    // Add test task
    toDoList.addItem(testdescription);
    const index = document.querySelector('.view').id;
    // Update test task
    const updateDescription = 'Test is updated';
    toDoList.updateItem(index, updateDescription);
    toDoList.displayList();// Update html.
    const description = document.getElementById('label');
    expect(description.textContent).toBe(updateDescription);
  });
});
