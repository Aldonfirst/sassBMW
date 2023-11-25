export default () => {
  const featureLinkElems = document.querySelectorAll('.feature__link'); 
  const featureSubElems = document.querySelectorAll('.feature-sub'); 
  
  featureLinkElems.forEach((btn, index) => { // прохожуссь по массиву ссылок 
    btn.addEventListener('click', () => { // добавляю обработчик клика
      if (btn.classList.contains('feature__link_active')) { 
        btn.classList.remove('feature__link_active'); // удаляю класс 'feature__link_active' у элемента
        featureSubElems[index].classList.add('hidden'); 
      } else {
        featureSubElems.forEach((featureSubElem) => { // для каждого элемента с классом 'feature-sub'
          featureSubElem.classList.add('hidden'); // добавляю класс 'hidden'
        });
        featureLinkElems.forEach((featureLinkElem) => { // для каждого элемента с классом 'feature__link'
          featureLinkElem.classList.remove('feature__link_active'); // удаляю класс 'feature__link_active'
        });
        featureSubElems[index].classList.remove('hidden'); // удаляю класс 'hidden' для соответствующего элемента с классом 'feature-sub'
        btn.classList.add('feature__link_active'); // добавляю класс 'feature__link_active' для элемента
      }
    })
  })

};
