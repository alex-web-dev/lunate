const $callbackForm = document.querySelector('.callback-form');
const $callbackTitle = document.querySelector('.callback__title');
const $inputs = $callbackForm.querySelectorAll('.callback-form__input');

$callbackForm?.addEventListener('submit', e => {
  e.preventDefault();

  let isError = false;
  $inputs.forEach($input => {
    if (!validateInput($input)) {
      isError = true;
      $input.classList.add('input--error');
    }
  });

  if (!isError) {
    $inputs.forEach($input => $input.value = '');
    $callbackTitle.innerText = 'Message sent!';
  }
});

$inputs.forEach($input => {
  $input.addEventListener('input', () => {
    if (validateInput($input)) {
      $input.classList.remove('input--error');
    }
  })
});

function validateInput($input) {
  return $input.value ? true : false;
}