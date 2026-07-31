/* ===================================================================
   cursuri.js — Interfața "Cursuri" pentru Databases.

   Structura fiecărui domeniu:
   {
     id, title,
     videoSections: [
       { section: "Nume secțiune", chapters: [ {title, src}, ... ] }
     ]
   }

   `src` e gol (""). Când primești numele fișierelor .mp4, completează-le
   cu DOAR NUMELE FIȘIERULUI (nu calea completă) — ex: "01-introduction.mp4".
   Fișierul trebuie pus în "Domain N/Videos/"; calea completă e construită
   automat de cod.
   =================================================================== */

const SUBJECT = 'Databases'; // folosit pentru namespacing în istoricul de progres

const DOMAINS = [
  {
    id: 'd1',
    title: 'Domain 1: Database Design',
    folder: 'Domain 1',
    videoSections: [
      { section: 'Introduction', chapters: [
        { title: 'How to Study for This Exam', src: '' },
      ]},
      { section: 'Database Design', chapters: [
        { title: 'Entities, Rows, and Columns', src: '' },
      ]},
      { section: 'Identify the Appropriate Primary Key', chapters: [
        { title: 'Primary Key', src: '' },
        { title: 'Composite/Compound Key 1', src: '' },
        { title: 'Composite/Compound Key 2', src: '' },
      ]},
      { section: 'Choose Data Types to Meet Requirements', chapters: [
        { title: 'Importance of Data Types', src: '' },
        { title: 'Storage Requirements', src: '' },
        { title: 'Data Types for Storing Text', src: '' },
      ]},
      { section: 'Design Relationships Between Tables', chapters: [
        { title: 'Establishing Relationships', src: '' },
        { title: 'Entity-Relationship Diagrams', src: '' },
        { title: 'Referential Integrity', src: '' },
      ]},
      { section: 'Normalize a Database', chapters: [
        { title: 'Reasons for Normalization', src: '' },
        { title: 'Third Normal Form', src: '' },
      ]},
      { section: 'Identify Data Protection Measures', chapters: [
        { title: 'Backups', src: '' },
        { title: 'Restore', src: '' },
        { title: 'Principle of Least Privilege', src: '' },
        { title: 'Permission Grants', src: '' },
        { title: 'Permission Revokes', src: '' },
        { title: 'Permission of Roles', src: '' },
        { title: 'Permission of Roles (2)', src: '' },
      ]},
    ],
  },
  {
    id: 'd2',
    title: 'Domain 2: Database Object Management',
    folder: 'Domain 2',
    videoSections: [
      { section: 'Create, Alter, and Drop Tables', chapters: [
        { title: 'Work with Tables', src: '' },
        { title: 'NULL and NOT NULL', src: '' },
      ]},
      { section: 'Queries That Create, Alter, and Drop Views', chapters: [
        { title: 'Create, Alter, and Drop Views', src: '' },
      ]},
      { section: 'Stored Procedures and Functions', chapters: [
        { title: 'Input and Output Parameters', src: '' },
        { title: 'Return Values', src: '' },
      ]},
      { section: 'Clustered and Nonclustered Indexes', chapters: [
        { title: 'Clustered Indexes', src: '' },
        { title: 'Nonclustered Indexes', src: '' },
      ]},
    ],
  },
  {
    id: 'd3',
    title: 'Domain 3: Data Retrieval',
    folder: 'Domain 3',
    videoSections: [
      { section: 'Queries That Select Data', chapters: [
        { title: 'Join Types', src: '' },
        { title: 'Cartesian Product', src: '' },
        { title: 'Self Joins', src: '' },
        { title: 'UNIONS and INTERSECTS', src: '' },
        { title: 'DISTINCT', src: '' },
        { title: 'Column Alias', src: '' },
        { title: 'Computed Columns', src: '' },
      ]},
      { section: 'Queries That Sort and Filter Data', chapters: [
        { title: 'ORDER BY', src: '' },
        { title: 'WHERE', src: '' },
        { title: 'LIKE', src: '' },
        { title: 'BETWEEN', src: '' },
        { title: 'AND', src: '' },
        { title: 'OR', src: '' },
        { title: 'NOT', src: '' },
        { title: 'TOP', src: '' },
        { title: 'IN and NOT IN', src: '' },
        { title: 'ANY', src: '' },
        { title: 'ALL', src: '' },
        { title: 'NULL and NOT NULL Values', src: '' },
        { title: 'Comparison Operators', src: '' },
      ]},
      { section: 'Queries That Aggregate Data', chapters: [
        { title: 'GROUP BY and SUM', src: '' },
        { title: 'HAVING', src: '' },
        { title: 'MIN and MAX', src: '' },
        { title: 'COUNT and AVG', src: '' },
      ]},
    ],
  },
  {
    id: 'd4',
    title: 'Domain 4: Data Manipulation',
    folder: 'Domain 4',
    videoSections: [
      { section: 'INSERT Statements', chapters: [
        { title: 'INSERT INTO...SELECT', src: '' },
        { title: 'INSERT INTO...VALUES', src: '' },
      ]},
      { section: 'UPDATE Statements', chapters: [
        { title: 'Update Data in a Single Table', src: '' },
      ]},
      { section: 'DELETE Statements', chapters: [
        { title: 'Delete Data from a Single Table', src: '' },
        { title: 'Truncate Table', src: '' },
      ]},
    ],
  },
  {
    id: 'd5',
    title: 'Domain 5: Troubleshooting',
    folder: 'Domain 5',
    videoSections: [
      { section: 'Data Object Management Query Failures', chapters: [
        { title: 'Object Management Errors', src: '' },
      ]},
      { section: 'Data Retrieval Query Failures', chapters: [
        { title: 'Select Errors', src: '' },
      ]},
      { section: 'Data Manipulation Query Failures', chapters: [
        { title: 'Data Manipulation Errors', src: '' },
      ]},
    ],
  },
];

// Fiecare domeniu are 3 file: Videos, Pre-Assessment, Post-Assessment.
// (Exercise Labs a fost exclus intenționat, per cerință.)
const SUBITEM_TYPES = [
  { key: 'videos', label: 'Videos', icon: '🎥' },
  { key: 'pre', label: 'Pre-Assessment', icon: '📊' },
  { key: 'post', label: 'Post-Assessment', icon: '📊' },
];

// Listă plată (pentru butoanele ‹ › de navigare secvențială)
const FLAT_ITEMS = [];
DOMAINS.forEach(domain => {
  SUBITEM_TYPES.forEach(t => {
    FLAT_ITEMS.push({ domainId: domain.id, type: t.key });
  });
});

let currentFlatIndex = 0;
let currentChapter = { domainId: null, sectionIdx: 0, chapterIdx: 0 };

// ---- Ține minte ce domenii aveai extinse în sidebar, între sesiuni ----
// Stocare LOCALĂ acestui folder (Databases/Cursuri/), deci sigură — spre
// deosebire de Setările globale, nu trebuie citită cross-folder.
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
    SUBITEM_TYPES.forEach(t => {
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

  const typeLabel = SUBITEM_TYPES.find(t => t.key === type).label;
  titleEl.textContent = `${domain.title} — ${typeLabel}`;

  trackSectionTime(`${SUBJECT}_${domainId}_${type}`, `${domain.title} — ${typeLabel}`);

  if (type === 'videos') {
    renderVideos(domain);
  } else {
    renderAssessment(domain, type);
  }
}

// ---- Urmărește timpul petrecut pe fiecare tab (Videos/Pre/Post), per domeniu ----
let _currentSectionKey = null;
let _currentSectionLabel = null;
let _sectionStartTime = null;

function trackSectionTime(newKey, newLabel) {
  if (_currentSectionKey && _sectionStartTime && typeof recordTimeSpent === 'function') {
    const elapsed = Math.round((Date.now() - _sectionStartTime) / 1000);
    recordTimeSpent(_currentSectionKey, _currentSectionLabel, elapsed);
  }
  _currentSectionKey = newKey;
  _currentSectionLabel = newLabel;
  _sectionStartTime = Date.now();
}

window.addEventListener('beforeunload', () => trackSectionTime(null, null));

function renderVideos(domain) {
  currentChapter = { domainId: domain.id, sectionIdx: 0, chapterIdx: 0 };

  mainAreaEl.innerHTML = `
    <div class="c-video-layout">
      <div class="c-video-player-col">
        <video class="c-player" id="videoPlayer" controls></video>
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
        html += `
          <div class="c-chapter-item" data-section="${sIdx}" data-chapter="${cIdx}">
            ${ch.title}
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

  if (chapter.src) {
    // chapter.src e doar numele fișierului (ex: "01-introduction.mp4");
    // calea completă e construită automat, relativ la cursuri.html.
    player.src = `${domain.folder}/Videos/${chapter.src}`;
    note.textContent = '';
    note.style.display = 'none';
  } else {
    player.removeAttribute('src');
    player.load();
    note.style.display = 'block';
    note.textContent = `Fișierul video pentru „${chapter.title}” nu a fost adăugat încă. ` +
      `Pune-l în folderul „${domain.folder}/Videos” și completează câmpul "src" din cursuri.js ` +
      `(doar numele fișierului, ex: "01-introduction.mp4").`;
  }
}

function renderAssessment(domain, type) {
  const domainNum = domain.folder.replace('Domain ', '');
  const kind = type === 'pre' ? 'PRE' : 'POST';
  const questions = getQuestionSet(domainNum, kind);
  const subfolder = type === 'pre' ? 'Pre-Assessment' : 'Post-Assessment';

  mainAreaEl.innerHTML = `<div class="c-assessment-wrap" id="assessmentWrap"></div>`;
  const container = document.getElementById('assessmentWrap');
  new QuestionEngine(container, questions, {
    title: `${domain.title} — ${type === 'pre' ? 'Pre-Assessment' : 'Post-Assessment'}`,
    basePath: `${domain.folder}/${subfolder}/`,
    showShortcuts: showShortcutsDefault,
    testId: `${SUBJECT}_${domainNum ? 'd' + domainNum : domain.id}_${type}`,
  });
}

document.getElementById('navPrev').addEventListener('click', () => selectItem(currentFlatIndex - 1));
document.getElementById('navNext').addEventListener('click', () => selectItem(currentFlatIndex + 1));

document.getElementById('subjectLogo').addEventListener('click', () => {
  // Decizia "unde te duce logo-ul" se ia pe index.html (vezi script.js),
  // nu aici — citirea Setărilor e nesigură cross-folder pe unele browsere.
  window.location.href = '../../index.html?logoFrom=Databases';
});

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

if (typeof initProgressBridge === 'function') {
  initProgressBridge('../../storage-bridge.html');
}

buildSidebar();
selectItem(0);
