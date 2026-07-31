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
