export default function burger() {
  const menuElem = document.querySelector('.menu');
  const humburgerElem = document.querySelector('.humburger-menu'); 

  const handlerMenu = event => { 
    const target = event.target; 
    const parent = target.closest('.menu'); // ищу ближайший родительский элемент с классом 'menu'

    //  условие если нет родительского элемента или цель клика имеет класс 'menu-list__link'
    if ((!parent && target !== humburgerElem) || target.classList.contains('menu-list__link')) { 
      toggleMenu(); // тоглю меню
    }
  }

  function toggleMenu() { 
    menuElem.classList.toggle('menu-active'); 
    humburgerElem.classList.toggle('humburger-menu-active'); 
// условие на закрытие по оверлею 
    if (menuElem.classList.contains('menu-active')) {
      document.body.addEventListener('click', handlerMenu); 
    } else {
      document.body.removeEventListener('click', handlerMenu); 
    }
  };

  humburgerElem.addEventListener('click', toggleMenu); // обработчик клика на элемент гамбургер-меню
}
