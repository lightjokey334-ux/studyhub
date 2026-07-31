/* ===================================================================
   cursuri.js — Interfața "Cursuri" pentru Networking.

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

const SUBJECT = 'Networking'; // folosit pentru namespacing în istoricul de progres

const DOMAINS = [
  {
  id: 'd1',
  title: 'Domain 1: Networking Fundamentals',
  folder: 'Domain 1',
  videoSections: [
    {
      section: 'Network Concepts',
      chapters: [
        { title: 'Introduction', src: 'H0001.mp4' },
        { title: 'How to Study for This Exam', src: 'F0001.mp4' },
        { title: 'Define Network Concepts', src: 'C0001.mp4' },
      ]
    },
    {
      section: 'Cloud and Virtualization Concepts',
      chapters: [
        { title: 'Hypervisors', src: 'M0001.mp4' },
        { title: 'Virtual Machines', src: 'M0002.mp4' },
        { title: 'Virtual Switches', src: 'M0003.mp4' },
        { title: 'VPN', src: 'M0004.mp4' },
        { title: 'Remote Desktop', src: 'M0005.mp4' },
      ]
    },
  ],
},
{
  id: 'd2',
  title: 'Domain 2: Network Infrastructures',
  folder: 'Domain 2',
  videoSections: [
    {
      section: 'Network Infrastructures',
      chapters: [
        { title: 'Perimeter Networks 1', src: 'H0001.mp4' },
        { title: 'Perimeter Networks 2', src: 'F0001.mp4' },
        { title: 'Addressing', src: 'M0001.mp4' },
        { title: 'Reserved Address Ranges', src: 'M0002.mp4' },
        { title: 'VLANs', src: 'F0002.mp4' },
        { title: 'Wired and Wireless LANs', src: 'F0003.mp4' },
      ]
    },
    {
      section: 'Wide Area Networks',
      chapters: [
        { title: 'Leased Lines, Dial-Up, ISDN', src: 'F0004.mp4' },
        { title: 'VPN', src: 'F0005.mp4' },
        { title: 'T1, T3, E1, E3', src: 'F0006.mp4' },
        { title: 'DSL, Cable Modem', src: 'F0007.mp4' },
        { title: 'Cellular, Satellite', src: 'C0001.mp4' },
      ]
    },
    {
      section: 'Wireless Networks',
      chapters: [
        { title: 'Standards and Characteristics', src: 'F0008.mp4' },
        { title: 'Types of Network Security', src: 'FM001.mp4' },
        { title: 'P2P and Ad Hoc Connections', src: 'M0003.mp4' },
        { title: 'Wireless Bridging', src: 'F0009.mp4' },
        { title: 'Wireless Interference', src: 'C0002.mp4' },
      ]
    },
    {
      section: 'Network Topologies',
      chapters: [
        { title: 'Star, Mesh', src: 'F0010.mp4' },
        { title: 'Ring, Bus', src: 'F0011.mp4' },
        { title: 'Logical and Physical Topologies', src: 'D0012.mp4' },
      ]
    },
  ],
},
{
  id: 'd3',
  title: 'Domain 3: Network Hardware',
  folder: 'Domain 3',
  videoSections: [
    {
      section: 'Understand Switches',
      chapters: [
        { title: 'Transmission Speeds 1', src: 'H0001.mp4' },
        { title: 'Transmission Speeds 2', src: 'F0001.mp4' },
        { title: 'Number and Type of Ports', src: 'F0002.mp4' },
        { title: 'Number and Speed of Uplinks', src: 'F0003.mp4' },
        { title: 'Managed or Unmanaged Switches', src: 'F0004.mp4' },
        { title: 'VLAN Capabilities', src: 'F0005.mp4' },
        { title: 'Layer 2 and Layer 3 Switches', src: 'FM001.mp4' },
        { title: 'Hardware Redundancy and Support', src: 'F0006.mp4' },
        { title: 'Backplane Speed', src: 'F0007.mp4' },
        { title: 'Switching Types and MAC Address Tables', src: 'F0008.mp4' },
        { title: 'Hubs vs. Switches', src: 'F0009.mp4' },
        { title: 'Virtual Switches', src: 'M0001.mp4' },
        { title: 'Spanning Tree Protocol', src: 'F0010.mp4' },
      ]
    },
    {
      section: 'Understand Routers',
      chapters: [
        { title: 'Transmission Speed Considerations', src: 'F0011.mp4' },
        { title: 'Directly Connected Routes', src: 'M0002.mp4' },
        { title: 'Static Routing', src: 'M0003.mp4' },
        { title: 'Dynamic Routing', src: 'M0004.mp4' },
        { title: 'RIP vs. OSPF', src: 'F0012.mp4' },
        { title: 'Default Routes', src: 'M0005.mp4' },
        { title: 'Routing Table and Selection', src: 'M0006.mp4' },
        { title: 'Routing Table Memory', src: 'F0013.mp4' },
        { title: 'Port Forwarding', src: 'M0007.mp4' },
        { title: 'Network Segmentation', src: 'F0014.mp4' },
        { title: 'Installing and Configuring Routing', src: 'M0008.mp4' },
        { title: 'Quality of Service', src: 'M0009.mp4' },
        { title: 'Convergence', src: 'F0015.mp4' },
      ]
    },
    {
      section: 'Understand Media Types',
      chapters: [
        { title: 'Cable Types and Characteristics', src: 'F0016.mp4' },
        { title: 'Fiber Optic', src: 'F0017.mp4' },
        { title: 'Twisted-Pair', src: 'F0018.mp4' },
        { title: 'CAT Cabling', src: 'F0019.mp4' },
        { title: 'Configuration', src: 'C0001.mp4' },
        { title: 'Susceptibility', src: 'F0020.mp4' },
      ]
    },
  ],
},
{
  id: 'd4',
  title: 'Domain 4: Protocols and Services',
  folder: 'Domain 4',
  videoSections: [
    {
      section: 'Understand the OSI Model',
      chapters: [
        { title: 'OSI Model 1', src: 'H0001.mp4' },
        { title: 'OSI Model 2', src: 'F0001.mp4' },
        { title: 'TCP Model', src: 'F0002.mp4' },
        { title: 'OSI/TCP Models and Layers', src: 'F0003.mp4' },
        { title: 'TCP and UDP', src: 'F0004.mp4' },
        { title: 'Well-Known Ports', src: 'F0005.mp4' },
        { title: 'Packets and Frames', src: 'F0006.mp4' },
      ]
    },
    {
      section: 'Transmission Control Protocol (TCP) Model',
      chapters: [
        { title: 'Identification and Purpose of Layers', src: 'F0007.mp4' },
        { title: 'Devices, Protocols, and Applications', src: 'F0008.mp4' },
      ]
    },
    {
      section: 'Understand IPv4',
      chapters: [
        { title: 'IPv4 Overview', src: 'M0001.mp4' },
        { title: 'Subnetting', src: 'F0009.mp4' },
        { title: 'IPv4 Ipconfig', src: 'M0002.mp4' },
        { title: 'Why Use IPv4', src: 'F0010.mp4' },
        { title: 'Addressing', src: 'F0011.mp4' },
        { title: 'IPv4 to IPv6 Tunneling Protocols', src: 'F0012.mp4' },
        { title: 'Dual IP Stack', src: 'F0013.mp4' },
        { title: 'Subnet Masks', src: 'FM001.mp4' },
        { title: 'Gateway', src: 'M0003.mp4' },
        { title: 'Ports and Packets', src: 'M0004.mp4' },
        { title: 'Reserved Address Ranges', src: 'M0005.mp4' },
        { title: 'Classful vs Classless', src: 'M0006.mp4' },
      ]
    },
    {
      section: 'Understand IPv6',
      chapters: [
        { title: 'IPv6 Subnetting', src: 'F0014.mp4' },
        { title: 'IPv6 Ipconfig', src: 'M0007.mp4' },
        { title: 'Why Use IPv6', src: 'F0015.mp4' },
        { title: 'IPv6 Addressing, Subnet Masks', src: 'F0016.mp4' },
        { title: 'IPv6 Gateways', src: 'M0008.mp4' },
        { title: 'IPv6 Ports and Packets', src: 'M0009.mp4' },
        { title: 'IPv6 Reserved Address Ranges', src: 'F0017.mp4' },
        { title: 'IPv6 Address Types', src: 'M0010.mp4' },
      ]
    },
    {
      section: 'Identify Well-Known Ports',
      chapters: [
        { title: 'HTTP, HTTPS, FTP', src: 'M0011.mp4' },
        { title: 'SMTP, IMAP', src: 'F0018.mp4' },
        { title: 'DNS', src: 'M0012.mp4' },
        { title: 'RDP, SSH', src: 'M0013.mp4' },
      ]
    },
    {
      section: 'Understand Name Resolution',
      chapters: [
        { title: 'DNS', src: 'M0014.mp4' },
        { title: 'Resource Records', src: 'M0015.mp4' },
        { title: 'WINS, Name Resolution Process Steps', src: 'F0019.mp4' },
        { title: 'HOSTS File', src: 'M0016.mp4' },
        { title: 'LMHOSTS File', src: 'M0017.mp4' },
        { title: 'Resource Records and Lookups', src: 'M0018.mp4' },
      ]
    },
    {
      section: 'Understand Networking Services',
      chapters: [
        { title: 'DHCP', src: 'M0019.mp4' },
        { title: 'Network Address Translation', src: 'F0020.mp4' },
        { title: 'Firewalls', src: 'M0020.mp4' },
        { title: 'Remote Access, VPNs', src: 'M0021.mp4' },
        { title: 'Private and Port NAT', src: 'F0021.mp4' },
      ]
    },
  ],
},
{
  id: 'd5',
  title: 'Domain 5: Troubleshooting',
  folder: 'Domain 5',
  videoSections: [
    {
      section: 'Troubleshooting',
      chapters: [
        { title: 'Steps in the Troubleshooting Process 1', src: 'H0001.mp4' },
        { title: 'Steps in the Troubleshooting Process 2', src: 'F0001.mp4' },
        { title: 'Etiquette/Professional Conduct', src: 'F0002.mp4' },
      ]
    },
    {
      section: 'Appropriate Hardware Troubleshooting Tools',
      chapters: [
        { title: 'Multimeter', src: 'C0001.mp4' },
        { title: 'Cable Tester', src: 'F0003.mp4' },
        { title: 'Toner', src: 'F0004.mp4' },
        { title: 'Time Domain Reflectometer (TDR), Optical TDR (OTDR)', src: 'F0005.mp4' },
      ]
    },
    {
      section: 'Understand TCP/IP',
      chapters: [
        { title: 'Ping', src: 'M0001.mp4' },
        { title: 'Tracert', src: 'M0002.mp4' },
        { title: 'Pathping', src: 'M0003.mp4' },
        { title: 'Telnet', src: 'F0006.mp4' },
        { title: 'Ipconfig', src: 'M0004.mp4' },
        { title: 'Netstat', src: 'M0005.mp4' },
        { title: 'Reserved Ranges, Protocols', src: 'FM001.mp4' },
      ]
    },
    {
      section: 'Linux Software Troubleshooting Tools',
      chapters: [
        { title: 'Tool Selection, Syntax 1', src: 'M0006.mp4' },
        { title: 'Tool Selection, Syntax 2', src: 'H0002.mp4' },
      ]
    },
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
// Stocare LOCALĂ acestui folder (Networking/Cursuri/), deci sigură — spre
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

function renderVideos(domain) {
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
  const kind = type === 'pre' ? 'PRE' : 'POST';
  const questions = getQuestionSet(domainNum, kind);
  const subfolder = type === 'pre' ? 'Pre-Assessment' : 'Post-Assessment';

  mainAreaEl.innerHTML = `<div class="c-assessment-wrap" id="assessmentWrap"></div>`;
  const container = document.getElementById('assessmentWrap');
  new QuestionEngine(container, questions, {
    title: `${domain.title} — ${type === 'pre' ? 'Pre-Assessment' : 'Post-Assessment'}`,
    basePath: `${domain.folder}/${subfolder}/`,
    showShortcuts: showShortcutsDefault,
    autoSaveAnswers: autoSaveAnswersDefault,
    testId: `${SUBJECT}_${domainNum ? 'd' + domainNum : domain.id}_${type}`,
  });
}

document.getElementById('navPrev').addEventListener('click', () => selectItem(currentFlatIndex - 1));
document.getElementById('navNext').addEventListener('click', () => selectItem(currentFlatIndex + 1));

document.getElementById('subjectLogo').addEventListener('click', () => {
  // Decizia "unde te duce logo-ul" se ia pe index.html (vezi script.js),
  // nu aici — citirea Setărilor e nesigură cross-folder pe unele browsere.
  window.location.href = '../../index.html?logoFrom=Networking';
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