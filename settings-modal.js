/* ===================================================================
   settings-modal.js — deschide Setările ca fereastră plutitoare peste
   pagina curentă, fără să navighezi (deci fără bug-ul cu "mă duce la
   pagina principală" când dai Înapoi).

   Important: conținutul Setărilor rulează într-un <iframe> care încarcă
   settings.html direct — asta păstrează citirea/scrierea localStorage
   legată de folderul rădăcină (același loc unde le citește index.html),
   indiferent din ce pagină deschizi fereastra. Vezi README, secțiunea
   Setări, pentru explicația completă a acestui bug de file://.
   =================================================================== */

/* ===================================================================
   settings-modal.js — deschide Setările SAU Progresul ca fereastră
   plutitoare peste pagina curentă, fără să navighezi (deci fără bug-ul
   cu "mă duce la pagina principală" când dai Înapoi).

   Important: conținutul rulează într-un <iframe> care încarcă direct
   settings.html / history.html — asta păstrează citirea/scrierea
   localStorage legată de folderul rădăcină (același loc unde le citește
   index.html), indiferent din ce pagină deschizi fereastra. Vezi README,
   secțiunea Setări, pentru explicația completă a acestui bug de file://.
   =================================================================== */

function _openFloatingModal(path, opts = {}) {
  if (document.getElementById('studyhubSettingsModal')) return; // deja deschis

  const overlay = document.createElement('div');
  overlay.id = 'studyhubSettingsModal';
  overlay.className = 'sh-modal-overlay';
  overlay.innerHTML = `
    <div class="sh-modal-window${opts.wide ? ' sh-modal-wide' : ''}">
      <button class="sh-modal-close" id="shModalClose" aria-label="Închide" title="Închide">✕</button>
      <iframe src="${path}" class="sh-modal-iframe" title="${opts.title || ''}"></iframe>
    </div>`;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  document.dispatchEvent(new CustomEvent('studyhub:modal-open'));

  function close() {
    overlay.remove();
    document.body.style.overflow = '';
    window.removeEventListener('message', onMessage);
    document.removeEventListener('keydown', onKeydown);
    document.dispatchEvent(new CustomEvent('studyhub:modal-close'));
  }
  function onMessage(e) {
    if (e.data && e.data.type === 'studyhub-close-settings') close();
  }
  function onKeydown(e) {
    if (e.key === 'Escape') close();
  }

  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  overlay.querySelector('#shModalClose').addEventListener('click', close);
  window.addEventListener('message', onMessage);
  document.addEventListener('keydown', onKeydown);
}

function openSettingsModal(settingsPath) {
  _openFloatingModal(settingsPath, { title: 'Setări' });
}

function openHistoryModal(historyPath) {
  _openFloatingModal(historyPath, { title: 'Progresul tău', wide: true });
}
