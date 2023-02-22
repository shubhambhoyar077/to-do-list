const editUi = (event) => {
  const li = event.target.parentNode.parentNode;
  li.style.background = 'yellowgreen';
  event.target.classList.add('disable');
  event.target.nextElementSibling.classList.remove('disable');
  event.target.nextElementSibling.value = event.target.textContent;
  event.target.nextElementSibling.focus();
  const childrenList = [...li.children];
  childrenList.forEach((element) => {
    if (element.id === 'move') {
      element.classList.add('disable');
    } else if (element.id === 'delete') {
      element.classList.add('disable');
    } else if (element.id === 'update') {
      element.classList.remove('disable');
    }
  });
};

const updateUi = (event) => {
  if (event.target.id === 'edit') {
    const li = event.target.parentNode.parentNode;
    li.style.background = '';
    event.target.classList.add('disable');
    event.target.previousElementSibling.classList.remove('disable');
    event.target.previousElementSibling.textContent = event.target.value;
    const childrenList = [...li.children];
    childrenList.forEach((element) => {
      if (element.id === 'move') {
        element.classList.remove('disable');
      } else if (element.id === 'delete') {
        element.classList.remove('disable');
      } else if (element.id === 'update') {
        element.classList.add('disable');
      }
    });
  }
};

export { editUi, updateUi };