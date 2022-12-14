const $menu = document.querySelector('.menu');
if ($menu) {
  const $menuToggle = $menu.querySelector('.menu__toggle');
  $menuToggle.addEventListener('click', () => {
    $menu.classList.toggle('menu--active');
    document.body.classList.toggle('body--lock');
  });

  $menu.addEventListener('click', e => {
    if ($menu === e.target && $menu.classList.contains('menu--active')) {
      $menu.classList.remove('menu--active');
      document.body.classList.remove('body--lock');
    }
  });
}