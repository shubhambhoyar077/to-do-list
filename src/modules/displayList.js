const ulList = document.getElementById('list-items');

const renderList = (listItem) => {
  ulList.innerHTML += `
          <li class="common-padding">
            <input type="checkbox">
            <div class="view" id="${listItem.index - 1}">
                <label id="label">${listItem.description}</label>
                <input type="text" id="edit" class="disable">
            </div>
            <span id='delete' class="material-symbols-outlined">
              delete
            </span>
            <span id='move' class="material-symbols-outlined move-item">
              more_vert
            </span>
            <span id='update' class="material-symbols-outlined disable">
          subdirectory_arrow_left
          </span>
          </li>`;
};

export { renderList, ulList };
