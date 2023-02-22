const setStatus = (event) => {
  const view = event.target.nextElementSibling;
  const childrenList = [...view.children];
  childrenList.forEach((element) => {
    if (element.id === 'label') {
      element.classList.toggle('completed');
    }
  });
  return view.id;
};

export default setStatus;