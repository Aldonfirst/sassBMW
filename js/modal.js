import blockScrolled from './blockScrolled.js';//ф-ция скролла

const {disabledScroll, enableScroll} = blockScrolled;

// Функция, открывающая модальное окно и отключающая скролл страницы
export default function modal() {
  const designBlockElem = document.querySelector('.design-block');
  const modalElem = document.querySelector('.modal');
//открываю модалку
  const openModal = () => {
    modalElem.classList.remove('hidden');
    disabledScroll();
  };
 //закрываю модалку
  const closeModal = () => {
   modalElem.classList.add('hidden');
   enableScroll();  
  };
  // Добавляю слушатель события клика на элемент с классом "more" 
  designBlockElem.addEventListener('click', event => {
    const target = event.target;
  // Если кликнутый элемент имеет класс 'more', вызывается функция openModal()
    if (target.matches('.more')) {
      openModal();
    }
  });
  // Добавляю слушатель события клика на модальное окно
  modalElem.addEventListener('click', (event) => {
    const target = event.target;
 // Если кликнутый элемент имеет класс 'overlay' или 'modal__close', вызывается функция closeModal()
    if (target.classList.contains('overlay') ||
       target.classList.contains('modal__close')) {
       closeModal() 
    } 
  })
}
