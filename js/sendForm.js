const server = 'https://jsonplaceholder.typicode.com/posts';//фейк api общедоступный 
// отправляю данные на сервер
const sendData = (data, callBack, falseCallBack) => {
  const request = new XMLHttpRequest();
  request.open('POST', server);
// тут добавляется слушатель события изменения состояния запрос
  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
    if (request.status === 200 || request.status === 201) {
      const response = JSON.parse(request.responseText);
      callBack(response.id);
    } else {
      // Если статус запроса не успешный, вызываю функцию falseCallBack() с указанием причины ошибки
      falseCallBack(request.status)
      throw new Error(request.status)
    }
  }); 

  request.send(data)  // Отправка данных на сервер в JSON 
};

// обрабатываю отправку формы
const formHandler = (form) => {
  const smallElem = document.createElement('small');
  form.append(smallElem);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {};
    let flag = true;

    const buttonSubmit = form.querySelector('.button[type="submit"]');  

    for (const elem of form.elements) {
      const {name, value} = elem;
      if (name){
        if (value.trim()) {
          elem.style.border = '';
          data[name] = value.trim();
          // flag = true
        } else {
          elem.style.border = '1px solid red'; //добавляю рамку инпуту если не заполнен
          flag = false;
          elem.value = '';
      
        }
      }
    }

    if (!flag) {
      return smallElem.textContent = 'Заполните все поля';
    }

    // Отправка данных на сервер и обработка успешного и неуспешного ответа
    sendData(JSON.stringify(data), 
    (id) => {

      smallElem.innerHTML = 'Ваша заявка №' + id + '!<br> В ближайшее время с вами свяжемся!';
      smallElem.style.color = 'green';
      buttonSubmit.disabled = true;
   // Через 3 секунды очищается элемент small и включается кнопка отправки формы
      setTimeout(() => {
        smallElem.textContent = '';
        buttonSubmit.disabled = false;
      }, 3000)
    }, 
    (err) => {
      smallElem.textContent = 'К сожалению технические неполадки, попробуйте отправить заявку позже';
      smallElem.style.color = 'red';
     
    });
    form.reset();
  })
};

export default function sendForm() {

  const formElems = document.querySelectorAll('.form'); 
  
  formElems.forEach(formHandler)

}



 
