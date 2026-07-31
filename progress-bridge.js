/* ===================================================================
   progress-bridge.js — pod către storage-bridge.html (vezi acel fișier
   pentru explicația completă). Trebuie inclus DOAR pe pagini care nu
   sunt deja în rădăcina proiectului (cursuri.html, examenX.html) — pe
   index.html/settings.html, localStorage e deja "acasă", nu au nevoie de
   bridge.

   Expune:
     initProgressBridge(pathToBridge)  — apelat o dată, la începutul paginii
     recordTestAttempt({ testId, testLabel, correct, total, durationSec })
     recordTimeSpent(sectionKey, seconds)
   =================================================================== */

// ---------------------------------------------------------------------
// Timp "activ" — pauzează automat cronometrele (timp per secțiune, durata
// unei încercări de test) când fila nu e vizibilă (ai schimbat tab-ul din
// browser) sau când e deschis un modal peste pagină (Setări/Progres).
// Așa nu se adună timp "irosit" care nu are legătură cu învățatul.
// ---------------------------------------------------------------------
let _activityPaused = false;
const _pauseListeners = new Set();
const _resumeListeners = new Set();

function onActivityPause(fn) { _pauseListeners.add(fn); }
function onActivityResume(fn) { _resumeListeners.add(fn); }

function _pauseActivity() {
  if (_activityPaused) return;
  _activityPaused = true;
  _pauseListeners.forEach(fn => fn());
}
function _resumeActivity() {
  if (!_activityPaused) return;
  _activityPaused = false;
  _resumeListeners.forEach(fn => fn());
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) _pauseActivity();
  else _resumeActivity();
});
document.addEventListener('studyhub:modal-open', _pauseActivity);
document.addEventListener('studyhub:modal-close', _resumeActivity);

function isActivityPaused() { return _activityPaused; }

const PROGRESS_HISTORY_KEY = 'studyhub_test_history_v1';
const PROGRESS_TIME_KEY = 'studyhub_time_spent_v1';

let _bridgeFrame = null;
let _bridgeReady = false;
const _bridgePending = {};

function initProgressBridge(pathToBridge) {
  if (_bridgeFrame) return;
  _bridgeFrame = document.createElement('iframe');
  _bridgeFrame.src = pathToBridge;
  _bridgeFrame.style.display = 'none';
  _bridgeFrame.setAttribute('aria-hidden', 'true');
  document.body.appendChild(_bridgeFrame);
  _bridgeFrame.addEventListener('load', () => { _bridgeReady = true; });

  window.addEventListener('message', (e) => {
    const msg = e.data || {};
    if (msg.type === 'studyhub-bridge-value' && _bridgePending[msg.requestId]) {
      _bridgePending[msg.requestId](msg.value);
      delete _bridgePending[msg.requestId];
    }
  });
}

function _bridgeGet(key) {
  return new Promise((resolve) => {
    if (!_bridgeFrame) { resolve(null); return; }
    const requestId = Math.random().toString(36).slice(2);
    _bridgePending[requestId] = resolve;
    const send = () => _bridgeFrame.contentWindow.postMessage({ type: 'studyhub-bridge-get', requestId, key }, '*');
    if (_bridgeReady) send(); else _bridgeFrame.addEventListener('load', send, { once: true });
    setTimeout(() => {
      if (_bridgePending[requestId]) { _bridgePending[requestId](null); delete _bridgePending[requestId]; }
    }, 1500);
  });
}

function _bridgeSet(key, value) {
  if (!_bridgeFrame) return;
  const send = () => _bridgeFrame.contentWindow.postMessage({ type: 'studyhub-bridge-set', requestId: null, key, value }, '*');
  if (_bridgeReady) send(); else _bridgeFrame.addEventListener('load', send, { once: true });
}

// Salvează o încercare de test (Pre/Post-Assessment sau Examen).
async function recordTestAttempt(entry) {
  const raw = await _bridgeGet(PROGRESS_HISTORY_KEY);
  let history = {};
  try { history = raw ? JSON.parse(raw) : {}; } catch (e) { history = {}; }

  if (!history[entry.testId]) history[entry.testId] = { label: entry.testLabel, attempts: [] };
  history[entry.testId].label = entry.testLabel; // mereu actualizat, în caz că titlul s-a schimbat
  history[entry.testId].attempts.push({
    date: new Date().toISOString(),
    correct: entry.correct,
    total: entry.total,
    pct: entry.pct,
    durationSec: entry.durationSec,
    wrongQuestions: entry.wrongQuestions || [],
  });

  _bridgeSet(PROGRESS_HISTORY_KEY, JSON.stringify(history));
}

// Acumulează timp petrecut pe o secțiune (ex: "d1_videos", "d2_pre").
async function recordTimeSpent(sectionKey, sectionLabel, seconds) {
  if (!seconds || seconds < 1) return;
  const raw = await _bridgeGet(PROGRESS_TIME_KEY);
  let log = {};
  try { log = raw ? JSON.parse(raw) : {}; } catch (e) { log = {}; }

  if (!log[sectionKey]) log[sectionKey] = { label: sectionLabel, seconds: 0 };
  log[sectionKey].label = sectionLabel;
  log[sectionKey].seconds += seconds;

  _bridgeSet(PROGRESS_TIME_KEY, JSON.stringify(log));
}
