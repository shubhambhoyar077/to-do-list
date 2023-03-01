/**
 * @jest-environment jsdom
 */
import ToDoList from '../toDoList';

describe('Edit Items in list', () => {
  test('Edited task textContent should be equal to updated description', () => {
    document.body.innerHTML = '<div>'
    + '  <ul id="list-items"></ul>'
    + '</div>';
    const testTask = ['test1', 'test2', 'test3'];
    const toDoList = new ToDoList();
    // Add 3 test task
    testTask.forEach((description) => toDoList.addItem(description));

    // Mark as Completed
    const completed = true;
    toDoList.markComplited(0, completed);// Mark completed 1 task
    toDoList.markComplited(2, completed);// Mark completed 3 task

    // Clear Completed task.
    toDoList.clearCompleted();
    const list = document.querySelectorAll('#list-items li');

    expect(list).toHaveLength(1);
  });
});
