import trottle from 'lodash.throttle';

const refs = {
  formRef: document.querySelector('.feedback-form'),
  emailInputRef: document.querySelector('.feedback-email'),
  messageInputRef: document.querySelector('.feedback-message'),
  buttonRef: document.querySelector('.feedback-button'),
};

(() => {
  const getInput = JSON.parse(localStorage.getItem('input')) || {
    email: '',
    message: '',
  };
  refs.emailInputRef.value = getInput.email;
  refs.messageInputRef = getInput.message;
})();

refs.formRef.addEventListener(
  'input',
  trottle(
    e =>
      localStorage.setItem(
        'input',
        JSON.stringify({
          email: e.currentTarget.elements.email.value,
          message: e.currentTarget.elements.message.value,
        })
      ),
    500
  )
);

refs.formRef.addEventListener('submit', e => {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  console.log(email.value, message.value);
  e.currentTarget.reset();
  localStorage.clear();
});
