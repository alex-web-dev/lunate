window.addEventListener('load', () => {
  const $moon = document.querySelector('.moon');
  if ($moon) {
    $moon.classList.add('moon--active');
    
    let speed = 0.004;
    let elapsedTime = 0;
    let width = $moon.offsetWidth;
    let height = $moon.offsetHeight;
    const $moonItems = document.querySelectorAll('.moon-item');
    const zIndexes = [];

    window.addEventListener('resize', () => {
      width = $moon.offsetWidth;
      height = $moon.offsetHeight;
    });

    $moon.addEventListener('mouseover', () => speed = 0.002);
    $moon.addEventListener('mouseout', () => speed = 0.004);

    animate();

    function animate() {
      requestAnimationFrame(animate);

      elapsedTime += speed;

      $moonItems.forEach(($item, index) => {
        const itemWidth = $item.offsetWidth;
        const itemHeight = $item.offsetWidth;
        const orbitLength = 6.3;
        const elapsed = elapsedTime + (orbitLength / $moonItems.length * index);
        const offsetPercent = getOffsetPercent(elapsed);
        const position = {
          x: width / 100 * offsetPercent.x - offsetPercent.x * itemWidth / 100,
          y: height / 100 * offsetPercent.y - offsetPercent.y * itemHeight / 100,
        };

        if (Math.sin(elapsed) < (-0.4) && zIndexes[index] !== -1) {
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

function getOffsetPercent(elapsed) {
  if (window.innerWidth >= 370) {
    return {
      x: Math.cos(elapsed) * 62 + 49,
      y: Math.cos(elapsed) * 35 + Math.sin(elapsed) * 55 + 50,
    };
  } else {
    return {
      x: Math.cos(elapsed) * 73 + 49,
      y: Math.cos(elapsed) * 35 + Math.sin(elapsed) * 65 + 50,
    };
  }
}