const ulList = document.getElementById('list-items');

const displayList = (toDoList) => {
  toDoList.forEach((element) => {
    ulList.innerHTML += `
          <li class="common-padding"><div><input type="checkbox">  ${element.description}</div>
          <span class="material-symbols-outlined move-item">
          more_vert
          </span></li>`;
  });
};

export default displayList;