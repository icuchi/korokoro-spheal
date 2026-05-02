(() => {
  const SPHEAL_URL = 'data:image/png;base64,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';
  const SPAWN_INTERVAL_MS = 900;
  const SIZE = 64;

  let intervalId = null;
  let enabled = true;

  function spawnSpheal() {
    const el = document.createElement('img');
    el.src = SPHEAL_URL;
    el.setAttribute('aria-hidden', 'true');

    const maxX = Math.max(window.innerWidth - SIZE, 0);
    const startX = Math.floor(Math.random() * maxX);
    const speed = 2.5 + Math.random() * 3;
    const spin = (Math.random() > 0.5 ? 1 : -1) * (4 + Math.random() * 6);

    Object.assign(el.style, {
      position: 'fixed',
      left: startX + 'px',
      top: -SIZE + 'px',
      width: SIZE + 'px',
      height: SIZE + 'px',
      zIndex: '2147483647',
      pointerEvents: 'none',
      imageRendering: 'pixelated',
      userSelect: 'none',
      margin: '0',
      padding: '0',
      border: 'none',
      maxWidth: 'none',
    });

    document.documentElement.appendChild(el);

    let y = -SIZE;
    let angle = 0;

    function tick() {
      y += speed;
      angle += spin;
      el.style.top = y + 'px';
      el.style.transform = `rotate(${angle}deg)`;

      if (y > window.innerHeight) {
        el.remove();
      } else {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  function start() {
    if (intervalId !== null) return;
    intervalId = setInterval(spawnSpheal, SPAWN_INTERVAL_MS);
  }

  function stop() {
    if (intervalId === null) return;
    clearInterval(intervalId);
    intervalId = null;
  }

  function applyState(isEnabled) {
    enabled = isEnabled;
    isEnabled ? start() : stop();
  }

  chrome.storage.local.get({ sphealEnabled: true }, ({ sphealEnabled }) => {
    applyState(sphealEnabled);
  });

  chrome.storage.onChanged.addListener((changes) => {
    if (changes.sphealEnabled) {
      applyState(changes.sphealEnabled.newValue);
    }
  });
})();
