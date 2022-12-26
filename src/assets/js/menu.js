const $menu = document.querySelector('.menu');
if ($menu) {
  const $menuToggle = $menu.querySelector('.menu__toggle');
  $menuToggle.addEventListener('click', () => {
    toggle($menu);
  });

  $menu.addEventListener('click', e => {
    if ($menu === e.target && $menu.classList.contains('menu--active')) {
      close($menu);
    }
  });

  const $links = $menu.querySelectorAll('.menu__link');
  const $mobileLinks = $menu.querySelectorAll('.menu__mobile-link');
  [...$links, ...$mobileLinks].forEach($link => {
    $link.addEventListener('click', () => close($menu));
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $links.forEach($link => {
          const href = $link.getAttribute('href').replace('#', '');
          if (href === entry.target.id) {
            $link.classList.add('menu__link--active');
          } else {
            $link.classList.remove('menu__link--active');
          }
        });
      }
    });
  }, {
    threshold: 0.4,
    rootMargin: '40px'
  });
  const $sections = document.querySelectorAll('section');
  $sections.forEach($section => {
    observer.observe($section);
  });
}

function toggle($menu) {
  $menu.classList.toggle('menu--active');
  document.body.classList.toggle('body--lock');
}

function close($menu) {
  $menu.classList.remove('menu--active');
  document.body.classList.remove('body--lock');
}