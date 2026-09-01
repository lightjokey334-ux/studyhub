/* ===================================================================
   settings.js — setări persistente (localStorage), comune tuturor
   paginilor site-ului (index, cursuri, examene).

   Cheie stocată: unde te duce logo-ul fiecărei materii când apeși pe el.
   Valori posibile per materie: "home" (pagina principală StudyHub)
                                 "options" (ecranul cu Cursuri/Examene al materiei)
   =================================================================== */

const STUDYHUB_SETTINGS_KEY = 'studyhub_settings_v1';

const STUDYHUB_DEFAULT_SETTINGS = {
  networking: 'home',
  python: 'home',
  databases: 'home',
  videoSections: 'expanded', // 'expanded' | 'collapsed' — capitolele video din Cursuri
  shortcutsPanel: 'shown', // 'shown' | 'hidden' — panoul cu comenzi rapide din teste
  autoSaveAnswers: 'on', // 'on' | 'off' — reia testul de unde ai rămas dacă închizi din greșeală
  keyboardMode: 'navigate', // 'navigate' | 'answer' — modul tastatură implicit la deschiderea unui test
  autoplayNextVideo: 'on', // 'on' | 'off' — trece automat la următorul videoclip din domeniu
  transcriptGuideLine: 'on', // 'on' | 'off' — linia decorativă din panoul de subtitrări
  transcriptSentenceFlow: 'on', // 'on' | 'off' — grupează automat liniile subtitrării în propoziții
  showSourceImageBtn: 'off', // 'on' | 'off' — buton "🖼 Imagine sursă" lângă "Resetează întrebarea" (arată captura originală, q.sourceImage)
};

function studyhubLoadSettings() {
  try {
    const raw = localStorage.getItem(STUDYHUB_SETTINGS_KEY);
    if (!raw) return Object.assign({}, STUDYHUB_DEFAULT_SETTINGS);
    return Object.assign({}, STUDYHUB_DEFAULT_SETTINGS, JSON.parse(raw));
  } catch (e) {
    return Object.assign({}, STUDYHUB_DEFAULT_SETTINGS);
  }
}

function studyhubSaveSettings(settings) {
  localStorage.setItem(STUDYHUB_SETTINGS_KEY, JSON.stringify(settings));
}