/* ===================================================================
   cursuri-engine.js — logica COMUNĂ pentru pagina "Cursuri", identică
   pentru toate materiile (Networking/Databases/Python).

   Fișierul ăsta NU se modifică per materie — orice fix/funcție nouă se
   face aici O SINGURĂ DATĂ și se aplică automat peste tot. Singurul
   lucru specific fiecărei materii e `cursuri.js` (mic, DOAR SUBJECT +
   DOMAINS), încărcat ÎNAINTE de acest fișier în cursuri.html — vezi
   README, secțiunea "Structura Cursuri", pentru explicația completă.

   ATENȚIE la ordinea scripturilor în cursuri.html:
     1. cursuri.js            (definește SUBJECT și DOMAINS)
     2. cursuri-engine.js      (acest fișier — le folosește pe cele de mai sus)
   =================================================================== */

// Fiecare domeniu are, implicit, 3 file, ÎN ORDINEA: Videos, Pre-Assessment,
// Post-Assessment. (Exercise Labs a fost exclus intenționat, per cerință.)
//
// O materie poate avea domenii cu tipuri de test DIFERITE — ex: Python are
// și "Fill in the Blanks" și "Practical Application" (Domain 1 chiar are
// Part 1 + Part 2 separat) — declarând un array `assessments` chiar pe
// obiectul domeniului, în cursuri.js. `assessments`, dacă e prezent,
// înlocuiește ÎNTREAGA listă (inclusiv poziția lui Videos în ea — poate fi
// oriunde, nu neapărat primul, ex: Python vrea Pre-Assessment înaintea
// Videos). Dacă domeniul NU are `assessments`, se folosește automat lista
// implicită de mai jos (Videos, Pre, Post, în această ordine) — exact
// comportamentul vechi, neschimbat pentru Networking/Databases.
//
// Fiecare intrare custom din `assessments` poate avea:
//   key          — identificator scurt, unic în cadrul domeniului (ex: "fillblanks")
//   label        — text afișat (ex: "Fill in the Blanks")
//   icon         — emoji afișat în sidebar
//   questionsVar — numele variabilei globale cu întrebările (ex: "QUESTIONS_D1_FILLBLANKS")
//   folder       — numele folderului fizic (ex: "Fill in the Blanks")
// Intrarea "videos" (key: "videos") NU are questionsVar/folder — e un caz
// special, randat de renderVideos(), nu de renderAssessment().
// Pre/Post STANDARD (fără questionsVar/folder explicit) folosesc convenția
// veche automat — QUESTIONS_D{n}_PRE/POST, foldere "Pre-Assessment"/"Post-Assessment".
const DEFAULT_SUBITEMS = [
  { key: 'videos', label: 'Videos', icon: '🎥' },
  { key: 'pre', label: 'Pre-Assessment', icon: '📊' },
  { key: 'post', label: 'Post-Assessment', icon: '📊' },
];

function getDomainSubitems(domain) {
  return domain.assessments || DEFAULT_SUBITEMS;
}

// Listă plată (pentru butoanele ‹ › de navigare secvențială) — fiecare
// domeniu își aduce propria ordine/tipuri, deci lungimea/ordinea pot
// diferi între domenii.
const FLAT_ITEMS = [];
DOMAINS.forEach(domain => {
  getDomainSubitems(domain).forEach(t => {
    FLAT_ITEMS.push({ domainId: domain.id, type: t.key });
  });
});

let currentFlatIndex = 0;
let currentChapter = { domainId: null, sectionIdx: 0, chapterIdx: 0 };

// ---- Ține minte ce domenii aveai extinse în sidebar, între sesiuni ----
// Stocare LOCALĂ acestui folder (Networking/Cursuri/, Databases/Cursuri/
// etc.), deci sigură — spre deosebire de Setările globale, nu trebuie
// citită cross-folder. Cheia e generică (nu ține de SUBJECT), dar fiindcă
// localStorage e izolat per-folder pe file://, fiecare materie oricum are
// propriul localStorage separat — nicio coliziune între materii.
const DOMAINS_STATE_KEY = 'studyhub_cursuri_domains_v1';

function loadExpandedDomains() {
  try {
    const raw = localStorage.getItem(DOMAINS_STATE_KEY);
    if (raw) return new Set(JSON.parse(raw));
  } catch (e) { /* ignoră, folosește default-ul */ }
  return new Set([DOMAINS[0].id]); // primul domeniu extins implicit
}

function saveExpandedDomains() {
  try {
    localStorage.setItem(DOMAINS_STATE_KEY, JSON.stringify([...expandedDomains]));
  } catch (e) { /* localStorage indisponibil, ignoră */ }
}

const expandedDomains = loadExpandedDomains();

// ---- Preferința globală pentru capitolele video (Setări -> Cursuri) ----
// Vine prin URL (?videoSections=expanded|collapsed), setat de index.html
// unde citirea Setărilor e sigură. O reținem și local, ca vizitele directe
// pe cursuri.html (ex: din Prev/Next dintr-un examen) să țină minte ultima
// valoare primită.
const VIDEO_SECTIONS_KEY = 'studyhub_cursuri_video_sections_v1';

function resolveVideoSectionsDefault() {
  const fromUrl = new URLSearchParams(window.location.search).get('videoSections');
  if (fromUrl === 'expanded' || fromUrl === 'collapsed') {
    try { localStorage.setItem(VIDEO_SECTIONS_KEY, fromUrl); } catch (e) { /* ignoră */ }
    return fromUrl;
  }
  try {
    const cached = localStorage.getItem(VIDEO_SECTIONS_KEY);
    if (cached === 'expanded' || cached === 'collapsed') return cached;
  } catch (e) { /* ignoră */ }
  return 'expanded';
}

const videoSectionsDefault = resolveVideoSectionsDefault();

// ---- Preferința pentru panoul de comenzi rapide (Setări -> Teste) ----
// Aceeași metodă: vine prin URL, cache local pentru vizite directe.
const SHORTCUTS_PANEL_KEY = 'studyhub_cursuri_shortcuts_panel_v1';

function resolveShortcutsPanelDefault() {
  const fromUrl = new URLSearchParams(window.location.search).get('shortcutsPanel');
  if (fromUrl === 'shown' || fromUrl === 'hidden') {
    try { localStorage.setItem(SHORTCUTS_PANEL_KEY, fromUrl); } catch (e) { /* ignoră */ }
    return fromUrl;
  }
  try {
    const cached = localStorage.getItem(SHORTCUTS_PANEL_KEY);
    if (cached === 'shown' || cached === 'hidden') return cached;
  } catch (e) { /* ignoră */ }
  return 'shown';
}

const showShortcutsDefault = resolveShortcutsPanelDefault() !== 'hidden';

// ---- Preferința pentru auto-salvarea răspunsurilor (Setări -> Teste) ----
// Aceeași metodă: vine prin URL, cache local pentru vizite directe.
const AUTO_SAVE_ANSWERS_KEY = 'studyhub_cursuri_autosave_answers_v1';

function resolveAutoSaveAnswersDefault() {
  const fromUrl = new URLSearchParams(window.location.search).get('autoSaveAnswers');
  if (fromUrl === 'on' || fromUrl === 'off') {
    try { localStorage.setItem(AUTO_SAVE_ANSWERS_KEY, fromUrl); } catch (e) { /* ignoră */ }
    return fromUrl;
  }
  try {
    const cached = localStorage.getItem(AUTO_SAVE_ANSWERS_KEY);
    if (cached === 'on' || cached === 'off') return cached;
  } catch (e) { /* ignoră */ }
  return 'on';
}

const autoSaveAnswersDefault = resolveAutoSaveAnswersDefault() !== 'off';

// ---- Preferința pentru auto-redarea următorului videoclip (Setări -> Cursuri) ----
const AUTOPLAY_NEXT_VIDEO_KEY = 'studyhub_cursuri_autoplay_next_v1';

function resolveAutoplayNextVideoDefault() {
  const fromUrl = new URLSearchParams(window.location.search).get('autoplayNextVideo');
  if (fromUrl === 'on' || fromUrl === 'off') {
    try { localStorage.setItem(AUTOPLAY_NEXT_VIDEO_KEY, fromUrl); } catch (e) { /* ignoră */ }
    return fromUrl;
  }
  try {
    const cached = localStorage.getItem(AUTOPLAY_NEXT_VIDEO_KEY);
    if (cached === 'on' || cached === 'off') return cached;
  } catch (e) { /* ignoră */ }
  return 'on';
}

let autoplayNextVideo = resolveAutoplayNextVideoDefault() !== 'off';

// Referință către testul curent (Pre/Post-Assessment) activ, dacă există —
// null când ești pe Videos. Folosită ca să aplicăm live schimbări din
// Setări (ex: panoul de comenzi rapide) fără să reîncărcăm pagina și să
// pierdem progresul testului — vezi ascultătorul "message" mai jos.
let currentEngineInstance = null;

window.addEventListener('message', (e) => {
  const msg = e.data || {};
  if (msg.type !== 'studyhub-setting-changed') return;
  if (msg.key === 'shortcutsPanel') {
    try { localStorage.setItem(SHORTCUTS_PANEL_KEY, msg.value); } catch (err) { /* ignoră */ }
    if (currentEngineInstance) currentEngineInstance.setShowShortcuts(msg.value !== 'hidden');
  }
  if (msg.key === 'autoplayNextVideo') {
    try { localStorage.setItem(AUTOPLAY_NEXT_VIDEO_KEY, msg.value); } catch (err) { /* ignoră */ }
    autoplayNextVideo = msg.value !== 'off';
  }
});

const sidebarEl = document.getElementById('sidebar');
const mainAreaEl = document.getElementById('mainArea');
const titleEl = document.getElementById('currentTitle');

function getQuestionSet(domainFolderNum, kind) {
  // domainFolderNum: 1-5 ; kind: 'PRE' sau 'POST'
  const globalName = `QUESTIONS_D${domainFolderNum}_${kind}`;
  return window[globalName] || [];
}

function buildSidebar() {
  let html = '';
  DOMAINS.forEach((domain) => {
    const isOpen = expandedDomains.has(domain.id);
    html += `
      <div class="c-domain-header" data-domain="${domain.id}">
        <span class="c-dot"></span>
        <span class="c-domain-title">${domain.title}</span>
        <span class="c-chevron${isOpen ? ' c-chevron-open' : ''}">›</span>
      </div>
      <div class="c-domain-items${isOpen ? '' : ' c-collapsed'}" data-items-for="${domain.id}">`;
    getDomainSubitems(domain).forEach(t => {
      html += `
        <div class="c-subitem" data-domain="${domain.id}" data-type="${t.key}">
          <span class="c-icon">${t.icon}</span>
          <span>${t.label}</span>
        </div>`;
    });
    html += `</div>`;
  });
  sidebarEl.innerHTML = html;

  sidebarEl.querySelectorAll('.c-domain-header').forEach(header => {
    header.addEventListener('click', () => {
      const domainId = header.dataset.domain;
      if (expandedDomains.has(domainId)) expandedDomains.delete(domainId);
      else expandedDomains.add(domainId);
      saveExpandedDomains();
      buildSidebar();
      applySidebarActiveState();
    });
  });

  sidebarEl.querySelectorAll('.c-subitem').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const domainId = el.dataset.domain;
      const type = el.dataset.type;
      const flatIdx = FLAT_ITEMS.findIndex(f => f.domainId === domainId && f.type === type);
      selectItem(flatIdx);
      closeMobileSidebar();
    });
  });

  applySidebarActiveState();
}

function applySidebarActiveState() {
  const current = FLAT_ITEMS[currentFlatIndex];
  if (!current) return;
  const { domainId, type } = current;

  sidebarEl.querySelectorAll('.c-domain-header').forEach(h => {
    h.classList.toggle('active', h.dataset.domain === domainId);
  });
  sidebarEl.querySelectorAll('.c-subitem').forEach(el => {
    const isSel = el.dataset.domain === domainId && el.dataset.type === type;
    el.classList.toggle('selected', isSel);
    el.classList.toggle('icon-active', el.dataset.domain === domainId);
  });
}

function selectItem(flatIdx) {
  currentFlatIndex = Math.max(0, Math.min(flatIdx, FLAT_ITEMS.length - 1));
  const { domainId, type } = FLAT_ITEMS[currentFlatIndex];
  const domain = DOMAINS.find(d => d.id === domainId);

  // asigură-te că domeniul curent e extins, ca să vezi item-ul selectat
  if (!expandedDomains.has(domainId)) {
    expandedDomains.add(domainId);
    saveExpandedDomains();
    buildSidebar();
  } else {
    applySidebarActiveState();
  }

  const typeLabel = getDomainSubitems(domain).find(t => t.key === type).label;
  titleEl.textContent = `${domain.title} — ${typeLabel}`;
  updateTopbarHeightVar();

  trackSectionTime(`${SUBJECT}_${domainId}_${type}`, `${domain.title} — ${typeLabel}`);

  // Pe mobil, pagina Videos nu se scrolează (doar lista de capitole) — vezi
  // cursuri.css, .c-main-video. Pre/Post-Assessment rămân cu scroll normal.
  mainAreaEl.classList.toggle('c-main-video', type === 'videos');

  if (type === 'videos') {
    renderVideos(domain);
  } else {
    renderAssessment(domain, type);
  }
}

// ---- Urmărește timpul petrecut pe fiecare tab (Videos/Pre/Post), per domeniu ----
// Pauzează automat cât timp fila e ascunsă (ai schimbat tab-ul din browser)
// sau e deschis un modal peste pagină (Setări/Progres) — vezi
// onActivityPause/onActivityResume din progress-bridge.js — ca să nu se
// adune timp "irosit" care nu are legătură cu învățatul.
let _currentSectionKey = null;
let _currentSectionLabel = null;
let _sectionStartTime = null;
let _sectionPausedAccumMs = 0;
let _sectionPausedAt = null;

// "Checkpoint": scrie în localStorage timpul acumulat PÂNĂ ACUM pe secțiunea
// curentă, apoi resetează cronometrul de la acest moment încolo (fără să
// schimbe secțiunea urmărită) — ca să nu se numere de două ori la următorul
// checkpoint/comutare. Folosit atât la schimbarea reală de secțiune, cât și
// când se deschide un modal peste pagină, ca fereastra de Progres să arate
// mereu valori la zi, nu doar de la ultima navigare.
function flushSectionTime() {
  if (_currentSectionKey && _sectionStartTime && typeof recordTimeSpent === 'function') {
    const pausedMs = _sectionPausedAccumMs + (_sectionPausedAt != null ? Date.now() - _sectionPausedAt : 0);
    const elapsed = Math.max(0, Math.round((Date.now() - _sectionStartTime - pausedMs) / 1000));
    if (elapsed > 0) recordTimeSpent(_currentSectionKey, _currentSectionLabel, elapsed);
  }
  _sectionStartTime = Date.now();
  _sectionPausedAccumMs = 0;
  _sectionPausedAt = null;
}

function trackSectionTime(newKey, newLabel) {
  flushSectionTime();
  _currentSectionKey = newKey;
  _currentSectionLabel = newLabel;
  _sectionStartTime = newKey ? Date.now() : null;
  _sectionPausedAccumMs = 0;
  _sectionPausedAt = null;
}

if (typeof onActivityPause === 'function') {
  onActivityPause(() => {
    if (_sectionStartTime != null && _sectionPausedAt == null) _sectionPausedAt = Date.now();
  });
}
if (typeof onActivityResume === 'function') {
  onActivityResume(() => {
    if (_sectionPausedAt != null) {
      _sectionPausedAccumMs += Date.now() - _sectionPausedAt;
      _sectionPausedAt = null;
    }
  });
}

// Chiar înainte ca fereastra de Setări/Progres să apară, scrie timpul
// acumulat până acum — altfel Progresul arăta valori vechi, de la ultima
// dată când ai schimbat domeniul/cursul, nu de la momentul curent.
document.addEventListener('studyhub:modal-open', () => flushSectionTime());

window.addEventListener('beforeunload', () => trackSectionTime(null, null));

// "Vizionat" — bifă verde la un capitol video, ca reper vizual de unde ai
// rămas. Persistă în localStorage, simplu — NU trece prin storage-bridge,
// pentru că se citește/scrie mereu din cursuri.html, niciodată din alt
// folder (deci nu există problema de izolare cross-folder pe file://).
// Se marchează la "ended" (video ajuns la final), vezi mai jos.
const WATCHED_VIDEOS_KEY = 'studyhub_watched_videos_v1';

function loadWatchedVideos() {
  try {
    const raw = localStorage.getItem(WATCHED_VIDEOS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}

function isChapterWatched(domain, sectionIdx, chapterIdx) {
  const data = loadWatchedVideos();
  const list = data[`${SUBJECT}_${domain.id}`] || [];
  return list.includes(`${sectionIdx}-${chapterIdx}`);
}

function markChapterWatched(domain, sectionIdx, chapterIdx) {
  const data = loadWatchedVideos();
  const key = `${SUBJECT}_${domain.id}`;
  if (!data[key]) data[key] = [];
  const chapterKey = `${sectionIdx}-${chapterIdx}`;
  if (data[key].includes(chapterKey)) return; // deja marcat, nimic de scris
  data[key].push(chapterKey);
  try { localStorage.setItem(WATCHED_VIDEOS_KEY, JSON.stringify(data)); } catch (e) { /* ignoră */ }
}

function renderVideos(domain) {
  currentEngineInstance = null;
  currentChapter = { domainId: domain.id, sectionIdx: 0, chapterIdx: 0 };

  mainAreaEl.innerHTML = `
    <div class="c-video-layout">
      <div class="c-video-player-col">
        <video class="c-player" id="videoPlayer" controls>
          <track id="videoSubtitles" kind="subtitles" srclang="en" label="English">
        </video>
        <div class="c-video-empty-note" id="videoNote"></div>
      </div>
      <div class="c-chapters" id="chapterList"></div>
    </div>`;

  const chapterListEl = document.getElementById('chapterList');
  const sectionOpen = domain.videoSections.map(() => videoSectionsDefault !== 'collapsed');

  function renderChapterList() {
    let html = '';
    domain.videoSections.forEach((sec, sIdx) => {
      html += `
        <div class="c-chapter-section-title" data-section-toggle="${sIdx}">
          <span>${sec.section}</span>
          <span class="c-chevron${sectionOpen[sIdx] ? ' c-chevron-open' : ''}">›</span>
        </div>
        <div class="c-chapter-section-items${sectionOpen[sIdx] ? '' : ' c-collapsed'}" data-section-items="${sIdx}">`;
      sec.chapters.forEach((ch, cIdx) => {
        const watched = isChapterWatched(domain, sIdx, cIdx);
        html += `
          <div class="c-chapter-item" data-section="${sIdx}" data-chapter="${cIdx}">
            <span class="c-chapter-item-title">${ch.title}</span>
            ${watched ? '<span class="c-chapter-check" title="Vizionat">✓</span>' : ''}
          </div>`;
      });
      html += `</div>`;
    });
    chapterListEl.innerHTML = html;

    chapterListEl.querySelectorAll('.c-chapter-section-title').forEach(el => {
      el.addEventListener('click', () => {
        const sIdx = parseInt(el.dataset.sectionToggle, 10);
        sectionOpen[sIdx] = !sectionOpen[sIdx];
        renderChapterList();
        markActiveChapter();
      });
    });

    chapterListEl.querySelectorAll('.c-chapter-item').forEach(el => {
      el.addEventListener('click', () => {
        loadChapter(domain, parseInt(el.dataset.section, 10), parseInt(el.dataset.chapter, 10));
      });
    });

    markActiveChapter();
  }

  function markActiveChapter() {
    chapterListEl.querySelectorAll('.c-chapter-item').forEach(el => {
      const active = parseInt(el.dataset.section, 10) === currentChapter.sectionIdx &&
                     parseInt(el.dataset.chapter, 10) === currentChapter.chapterIdx;
      el.classList.toggle('active', active);
    });
  }

  renderChapterList();
  loadChapter(domain, 0, 0);

  // Trece automat la următorul capitol din domeniu când videoclipul se
  // termină (dacă setarea e activă). Ascultătorul se leagă o singură dată
  // per randare a domeniului — elementul <video> nu se recreează la
  // schimbarea capitolului (doar loadChapter() îi schimbă src-ul).
  const player = document.getElementById('videoPlayer');
  player.addEventListener('ended', () => {
    markChapterWatched(domain, currentChapter.sectionIdx, currentChapter.chapterIdx);
    renderChapterList(); // arată bifa imediat; păstrează stările collapse (sectionOpen)

    if (!autoplayNextVideo) return;
    const next = getNextChapterPosition(domain, currentChapter.sectionIdx, currentChapter.chapterIdx);
    if (!next) return; // era ultimul capitol din domeniu
    loadChapter(domain, next.sectionIdx, next.chapterIdx);
    player.play().catch(() => { /* browserul poate refuza uneori redarea automată — ignorăm silențios */ });
  });
}

// Găsește poziția următorului capitol din domeniu (poate fi în aceeași
// secțiune sau în prima secțiune următoare care are măcar un capitol) —
// null dacă era deja ultimul capitol din tot domeniul.
function getNextChapterPosition(domain, sectionIdx, chapterIdx) {
  const sections = domain.videoSections;
  const currentSection = sections[sectionIdx];
  if (currentSection && chapterIdx + 1 < currentSection.chapters.length) {
    return { sectionIdx, chapterIdx: chapterIdx + 1 };
  }
  for (let s = sectionIdx + 1; s < sections.length; s++) {
    if (sections[s].chapters.length > 0) {
      return { sectionIdx: s, chapterIdx: 0 };
    }
  }
  return null;
}

function loadChapter(domain, sectionIdx, chapterIdx) {
  currentChapter = { domainId: domain.id, sectionIdx, chapterIdx };
  const chapter = domain.videoSections[sectionIdx].chapters[chapterIdx];

  document.querySelectorAll('.c-chapter-item').forEach(el => {
    const active = parseInt(el.dataset.section, 10) === sectionIdx &&
                   parseInt(el.dataset.chapter, 10) === chapterIdx;
    el.classList.toggle('active', active);
  });

  const player = document.getElementById('videoPlayer');
  const note = document.getElementById('videoNote');
  const track = document.getElementById('videoSubtitles');

  if (chapter.src) {
    // chapter.src e doar numele fișierului (ex: "01-introduction.mp4");
    // calea completă e construită automat, relativ la cursuri.html.
    player.src = `${domain.folder}/Videos/${chapter.src}`;
    // Subtitrarea are AUTOMAT aceeași denumire ca videoclipul, doar cu
    // extensia .vtt în loc de .mp4 — nu trebuie completată separat nicăieri.
    // Dacă fișierul .vtt nu există încă, browserul pur și simplu nu arată
    // subtitrări (fără nicio eroare), până îl adaugi.
    if (track) track.src = `${domain.folder}/Videos/${chapter.src.replace(/\.mp4$/i, '.vtt')}`;
    note.textContent = '';
    note.style.display = 'none';
  } else {
    player.removeAttribute('src');
    if (track) track.removeAttribute('src');
    player.load();
    note.style.display = 'block';
    note.textContent = `Fișierul video pentru „${chapter.title}” nu a fost adăugat încă. ` +
      `Pune-l în folderul „${domain.folder}/Videos” și completează câmpul "src" din cursuri.js ` +
      `(doar numele fișierului, ex: "01-introduction.mp4").`;
  }
}

function renderAssessment(domain, type) {
  const domainNum = domain.folder.replace('Domain ', '');
  const item = getDomainSubitems(domain).find(t => t.key === type);

  let questions, subfolder;
  if (item.questionsVar) {
    // Tip de test custom (declarat explicit în `assessments`, în cursuri.js
    // al materiei) — ex: Fill in the Blanks, Practical Application.
    questions = window[item.questionsVar] || [];
    subfolder = item.folder;
  } else {
    // Pre/Post-Assessment STANDARD — comportament vechi, neschimbat,
    // pe convenția de nume QUESTIONS_D{n}_PRE/POST.
    const kind = type === 'pre' ? 'PRE' : 'POST';
    questions = getQuestionSet(domainNum, kind);
    subfolder = type === 'pre' ? 'Pre-Assessment' : 'Post-Assessment';
  }

  mainAreaEl.innerHTML = `<div class="c-assessment-wrap" id="assessmentWrap"></div>`;
  const container = document.getElementById('assessmentWrap');
  currentEngineInstance = new QuestionEngine(container, questions, {
    title: `${domain.title} — ${item.label}`,
    basePath: `${domain.folder}/${subfolder}/`,
    showShortcuts: showShortcutsDefault,
    autoSaveAnswers: autoSaveAnswersDefault,
    testId: `${SUBJECT}_${domain.id}_${type}`,
  });
}

document.getElementById('navPrev').addEventListener('click', () => selectItem(currentFlatIndex - 1));
document.getElementById('navNext').addEventListener('click', () => selectItem(currentFlatIndex + 1));

document.getElementById('subjectLogo').addEventListener('click', () => {
  // Decizia "unde te duce logo-ul" se ia pe index.html (vezi script.js),
  // nu aici — citirea Setărilor e nesigură cross-folder pe unele browsere.
  window.location.href = `../../index.html?logoFrom=${SUBJECT}`;
});

// Setări / Progres — mutate aici (din cursuri.html) ca să folosească SUBJECT
// din fișierul de date, nu un nume de materie scris direct în HTML.
const settingsLinkBtn = document.getElementById('settingsLink');
if (settingsLinkBtn) {
  settingsLinkBtn.addEventListener('click', () => openSettingsModal('../../settings.html'));
}
const historyLinkBtn = document.getElementById('historyLink');
if (historyLinkBtn) {
  historyLinkBtn.addEventListener('click', () => openHistoryModal(`../../history.html?subject=${SUBJECT}`));
}

// ---- Meniu hamburger (mobil) ----
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebarBackdrop = document.getElementById('sidebarBackdrop');

function closeMobileSidebar() {
  sidebarEl.classList.remove('c-sidebar-open');
  sidebarBackdrop.classList.remove('c-sidebar-open');
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', () => {
    sidebarEl.classList.toggle('c-sidebar-open');
    sidebarBackdrop.classList.toggle('c-sidebar-open');
  });
}
if (sidebarBackdrop) {
  sidebarBackdrop.addEventListener('click', closeMobileSidebar);
}

// ---- Înălțimea reală a barei de sus (mobil) ----
// Bara are 2 rânduri pe mobil (vezi cursuri.css), iar al doilea rând
// (titlul domeniului) poate ocupa 1 sau 2 linii, în funcție de cât de lung
// e numele domeniului curent — deci înălțimea nu e fixă. O măsurăm și o
// punem într-o variabilă CSS, ca sidebar-ul/fundalul lui să pornească
// mereu exact sub bară, fără gol sau suprapunere.
function updateTopbarHeightVar() {
  const topbar = document.querySelector('.c-topbar');
  if (!topbar) return;
  document.documentElement.style.setProperty('--c-topbar-h', `${topbar.offsetHeight}px`);
}
window.addEventListener('resize', updateTopbarHeightVar);

if (typeof initProgressBridge === 'function') {
  initProgressBridge('../../storage-bridge.html');
}

buildSidebar();
selectItem(0);