const form = document.forms.registration;
const { name, surname, phone, email } = form;

const inputErrorForm = document.getElementById('input-error-form');

const isEmpty = (value) => value.length === 0;

const handleFocus = (e) => {
  if (e.target.classList.contains('invalid')) {
    e.target.classList.remove('invalid');
    const error = e.target.parentElement.querySelector('.some-form__hint');
    error.innerText = '';
  }
};

const handleBlur = (e) => {
  if (e.target.value.length === 0) {
    e.target.classList.add('invalid');
    const error = e.target.parentElement.querySelector('.some-form__hint');
    error.innerText ='Обязательно для заполнения';
  }
};

email.addEventListener('blur', (e) => {
  if (!e.target.value.includes('@')) {
    e.target.classList.add('invalid');
    const error = e.target.parentElement.querySelector('.some-form__hint');
    error.innerText = 'Пожалуйста, введите правильный email';
  }
});

email.addEventListener('focus', handleFocus);

surname.addEventListener('focus', handleFocus);
surname.addEventListener('blur', handleBlur);

name.addEventListener('focus', handleFocus);
name.addEventListener('blur', handleBlur);

phone.addEventListener('focus', handleFocus);
phone.addEventListener('blur', handleBlur);

form.addEventListener('submit', function(e) {
   e.preventDefault();

   const { name, surname, email, phone } = e.target;

   if (isEmpty(name.value) || isEmpty(surname.value) || isEmpty(phone.value) || isEmpty(email.value)) {
     inputErrorForm.innerText = "Неправильно заполнены поля";
   } else {
     alert('Регистрация прошла успешно!')
   }
});