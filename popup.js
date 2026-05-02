const toggle = document.getElementById('toggle');
const status = document.getElementById('status');

chrome.storage.local.get({ sphealEnabled: true }, ({ sphealEnabled }) => {
  toggle.checked = sphealEnabled;
  updateStatus(sphealEnabled);
});

toggle.addEventListener('change', () => {
  const enabled = toggle.checked;
  chrome.storage.local.set({ sphealEnabled: enabled });
  updateStatus(enabled);
});

function updateStatus(enabled) {
  status.textContent = enabled ? 'コロコロ中...' : '止まってます';
}
