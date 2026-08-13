/* ===================================================================
   exam-runner.js — logică comună pentru Examen 1 / 2 / 3.

   Fiecare pagină de examen (examenX.html) trebuie să includă, ÎN ACEASTĂ
   ORDINE, înainte de acest fișier:
     1. ../../engine.js
     2. examenX-questions.js   (definește EXAM_TITLE și EXAM_QUESTIONS)
   =================================================================== */

// Preferința pentru panoul de comenzi rapide (Setări -> Teste). Vine prin
// URL-ul paginii de examen (setat de index.html, unde citirea Setărilor
// e sigură) și e reținută local pentru vizite directe pe examenX.html.
const EXAM_SHORTCUTS_PANEL_KEY = 'studyhub_exam_shortcuts_panel_v1';

function resolveExamShortcutsPanelDefault() {
  const fromUrl = new URLSearchParams(window.location.search).get('shortcutsPanel');
  if (fromUrl === 'shown' || fromUrl === 'hidden') {
    try { localStorage.setItem(EXAM_SHORTCUTS_PANEL_KEY, fromUrl); } catch (e) { /* ignoră */ }
    return fromUrl;
  }
  try {
    const cached = localStorage.getItem(EXAM_SHORTCUTS_PANEL_KEY);
    if (cached === 'shown' || cached === 'hidden') return cached;
  } catch (e) { /* ignoră */ }
  return 'shown';
}

// Aceeași metodă și pentru auto-salvarea răspunsurilor (Setări -> Teste).
const EXAM_AUTO_SAVE_KEY = 'studyhub_exam_autosave_answers_v1';

function resolveExamAutoSaveAnswersDefault() {
  const fromUrl = new URLSearchParams(window.location.search).get('autoSaveAnswers');
  if (fromUrl === 'on' || fromUrl === 'off') {
    try { localStorage.setItem(EXAM_AUTO_SAVE_KEY, fromUrl); } catch (e) { /* ignoră */ }
    return fromUrl;
  }
  try {
    const cached = localStorage.getItem(EXAM_AUTO_SAVE_KEY);
    if (cached === 'on' || cached === 'off') return cached;
  } catch (e) { /* ignoră */ }
  return 'on';
}

// Aceeași metodă și pentru butonul "🖼 Imagine sursă" (Setări -> Teste).
const EXAM_SOURCE_IMAGE_BTN_KEY = 'studyhub_exam_source_image_btn_v1';

function resolveExamShowSourceImageBtnDefault() {
  const fromUrl = new URLSearchParams(window.location.search).get('showSourceImageBtn');
  if (fromUrl === 'on' || fromUrl === 'off') {
    try { localStorage.setItem(EXAM_SOURCE_IMAGE_BTN_KEY, fromUrl); } catch (e) { /* ignoră */ }
    return fromUrl;
  }
  try {
    const cached = localStorage.getItem(EXAM_SOURCE_IMAGE_BTN_KEY);
    if (cached === 'on' || cached === 'off') return cached;
  } catch (e) { /* ignoră */ }
  return 'off';
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof initProgressBridge === 'function') {
    initProgressBridge('../../../storage-bridge.html');
  }

  const titleEl = document.getElementById('examTitle');
  const container = document.getElementById('examContainer');

  titleEl.textContent = typeof EXAM_TITLE !== 'undefined' ? EXAM_TITLE : 'Examen';
  const questions = typeof EXAM_QUESTIONS !== 'undefined' ? EXAM_QUESTIONS : [];
  const showShortcuts = resolveExamShortcutsPanelDefault() !== 'hidden';
  const autoSaveAnswers = resolveExamAutoSaveAnswersDefault() !== 'off';
  const showSourceImageBtn = resolveExamShowSourceImageBtnDefault() === 'on';
  const testId = typeof EXAM_ID !== 'undefined' ? EXAM_ID : null;
  const randomize = typeof EXAM_RANDOMIZE === 'boolean' ? EXAM_RANDOMIZE : true;

  const engine = new QuestionEngine(container, questions, {
    title: titleEl.textContent,
    showShortcuts,
    autoSaveAnswers,
    testId,
    multiSession: true,
    showSourceImageBtn,
    randomize,
  });

  // Aplică live schimbarea panoului de comenzi rapide, dacă vine din
  // fereastra plutitoare de Setări (deschisă peste pagina de examen) —
  // altfel setarea nu se vedea decât la o navigare nouă din index.html.
  window.addEventListener('message', (e) => {
    const msg = e.data || {};
    if (msg.type !== 'studyhub-setting-changed') return;
    if (msg.key === 'shortcutsPanel') {
      try { localStorage.setItem(EXAM_SHORTCUTS_PANEL_KEY, msg.value); } catch (err) { /* ignoră */ }
      engine.setShowShortcuts(msg.value !== 'hidden');
    }
  });

  // Logo -> decizia se ia pe index.html (vezi script.js), nu aici —
  // citirea Setărilor e nesigură cross-folder pe unele browsere.
  const logo = document.getElementById('subjectLogo');
  if (logo) {
    logo.addEventListener('click', () => {
      window.location.href = '../../../index.html?logoFrom=Python';
    });
  }

  // Butonul "Închide" te duce mereu înapoi la ecranul de opțiuni al materiei.
  const backBtn = document.getElementById('examBackBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.href = '../../../index.html?subject=Python';
    });
  }
});
