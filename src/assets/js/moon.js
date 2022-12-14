window.addEventListener('load', () => {
  const $moon = document.querySelector('.moon');
  if ($moon) {
    $moon.classList.add('moon--active');
    
    const speed = 0.008;
    let elapsedTime = 0;
    let width = $moon.offsetWidth;
    let height = $moon.offsetHeight;
    const $moonItems = document.querySelectorAll('.moon-item');
    const zIndexes = [];

    window.addEventListener('resize', () => {
      width = $moon.offsetWidth;
      height = $moon.offsetHeight;
    });

    animate();

    function animate() {
      requestAnimationFrame(animate);

      elapsedTime += speed;

      $moonItems.forEach(($item, index) => {
        const itemWidth = $item.offsetWidth;
        const itemHeight = $item.offsetWidth;
        const orbitLength = 6.3;
        const elapsed = elapsedTime + (orbitLength / $moonItems.length * index);
        const offsetPercent = {
          x: Math.cos(elapsed) * 58 + 49,
          y: Math.cos(elapsed) * 35 + Math.sin(elapsed) * 45 + 50,
        };
        const position = {
          x: width / 100 * offsetPercent.x - offsetPercent.x * itemWidth / 100,
          y: height / 100 * offsetPercent.y - offsetPercent.y * itemHeight / 100,
        };

        if (Math.sin(elapsed) < (0.4) && zIndexes[index] !== -1) {
          zIndexes[index] = -1;
          $item.style.zIndex = zIndexes[index];
        } else if (Math.sin(elapsed) > (0.4) && zIndexes[index] !== 1) {
          zIndexes[index] = 1
          $item.style.zIndex = zIndexes[index];
        }

        $item.style.transform = `translate(${position.x}px, ${position.y}px)`;
      });
    }
  }
});