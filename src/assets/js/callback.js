const $callbackForm = document.querySelector('.callback-form');
const $callbackTitle = document.querySelector('.callback__title');
$callbackForm?.addEventListener('submit', e => {
  e.preventDefault();

  let isError = false;
  const $inputs = document.querySelectorAll('.callback-form__input');
  $inputs.forEach($input => {
    if (!validateInput($input)) {
      isError = true;
    }
  });

  if (!isError) {
    $inputs.forEach($input => $input.value = '');
    $callbackTitle.innerText = 'Message sent!';
  }
});

function validateInput($input) {
  return $input.value ? true : false;
}