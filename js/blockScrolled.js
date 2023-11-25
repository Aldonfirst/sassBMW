// функция отключения скролла
const disabledScroll = () => { 
  // записываю текущую позицию скролла в data-атрибут 'scrollY' элемента body
  document.body.dataset.scrollY = window.scrollY; 
 // вычисляю ширину скролла
  const scrollWidth = window.innerWidth - document.body.offsetWidth 
//назначаю стили
  document.body.style.cssText = `
  position:fixed;
  top: -${window.scrollY}px;
  left:0;
  width:100%;
  overflow:hidden; 
  height:100vh;
  padding-right: ${scrollWidth}px;
  `;
};
// функция включения скролла
const enableScroll = () => { 
  document.body.style.cssText = ''; // сбрасываю стиль элемента body
  window.scroll({ // прокручиваю страницу до сохраненной позиции скролла
    top: document.body.dataset.scrollY
  });
};

export default {disabledScroll, enableScroll};