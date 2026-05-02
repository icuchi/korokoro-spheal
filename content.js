(() => {
  const SPHEAL_URL = chrome.runtime.getURL('spheal.png');
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
