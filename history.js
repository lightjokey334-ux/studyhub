/* ===================================================================
   history.js — citește direct din localStorage (suntem deja în
   rădăcina proiectului, la fel ca settings.html, deci citirea e sigură
   fără bridge).

   Structură: taburi pe materii (Networking/Python/Databases) -> pentru
   materia activă, câte un card per Domeniu (Videos + Pre + Post, cu
   timpul total învățat) + o secțiune de Examene.
   =================================================================== */

const HISTORY_KEY = 'studyhub_test_history_v1';
const TIME_KEY = 'studyhub_time_spent_v1';

// Lista implicită de rânduri per domeniu (Pre + Post) — folosită dacă un
// domeniu NU declară propriul `assessments` mai jos. Comportament vechi,
// neschimbat pentru Networking/Databases.
const DEFAULT_HIST_ASSESSMENTS = [
  { key: 'pre', label: '📊 Pre-Assessment' },
  { key: 'post', label: '📊 Post-Assessment' },
];

const SUBJECTS = {
  Networking: {
    label: 'Networking',
    icon: '🌐',
    ready: true,
    domains: [
      { id: 'd1', title: 'Domain 1: Networking Fundamentals' },
      { id: 'd2', title: 'Domain 2: Network Infrastructures' },
      { id: 'd3', title: 'Domain 3: Network Hardware' },
      { id: 'd4', title: 'Domain 4: Protocols and Services' },
      { id: 'd5', title: 'Domain 5: Troubleshooting' },
    ],
    exams: [
      { id: 'exam1', label: 'Examen 1' },
      { id: 'exam2', label: 'Examen 2' },
      { id: 'exam3', label: 'Examen 3' },
    ],
  },
  Python: {
    label: 'Python',
    icon: '🐍',
    ready: true,
    domains: [
      { id: 'd1', title: 'Domain 1: Data Types and Operators', assessments: [
        { key: 'pre', label: '📊 Pre-Assessment' },
        { key: 'post', label: '📊 Post-Assessment' },
        { key: 'fillblanks', label: '✏️ Fill in the Blanks' },
        { key: 'practical1', label: '💻 Practical Application Part 1' },
        { key: 'practical2', label: '💻 Practical Application Part 2' },
      ] },
      { id: 'd2', title: 'Domain 2: Branching and Iteration', assessments: [
        { key: 'pre', label: '📊 Pre-Assessment' },
        { key: 'post', label: '📊 Post-Assessment' },
        { key: 'fillblanks', label: '✏️ Fill in the Blanks' },
        { key: 'practical', label: '💻 Practical Application' },
      ] },
      { id: 'd3', title: 'Domain 3: Input and Output', assessments: [
        { key: 'pre', label: '📊 Pre-Assessment' },
        { key: 'post', label: '📊 Post-Assessment' },
        { key: 'fillblanks', label: '✏️ Fill in the Blanks' },
        { key: 'practical', label: '💻 Practical Application' },
      ] },
      { id: 'd4', title: 'Domain 4: Code Documentation and Functions', assessments: [
        { key: 'pre', label: '📊 Pre-Assessment' },
        { key: 'post', label: '📊 Post-Assessment' },
        { key: 'fillblanks', label: '✏️ Fill in the Blanks' },
        { key: 'practical', label: '💻 Practical Application' },
      ] },
      { id: 'd5', title: 'Domain 5: Errors, Exceptions and Testing', assessments: [
        { key: 'pre', label: '📊 Pre-Assessment' },
        { key: 'post', label: '📊 Post-Assessment' },
        { key: 'fillblanks', label: '✏️ Fill in the Blanks' },
        { key: 'practical', label: '💻 Practical Application' },
      ] },
      { id: 'd6', title: 'Domain 6: Modules and Problem Solving', assessments: [
        { key: 'pre', label: '📊 Pre-Assessment' },
        { key: 'post', label: '📊 Post-Assessment' },
        { key: 'fillblanks', label: '✏️ Fill in the Blanks' },
        { key: 'practical', label: '💻 Practical Application' },
      ] },
    ],
    exams: [
      { id: 'exam1', label: 'Examen 1' },
      { id: 'exam2', label: 'Examen 2' },
      { id: 'exam3', label: 'Examen 3' },
      { id: 'exam4', label: 'Examen 4' },
    ],
  },
  Databases: {
    label: 'Databases',
    icon: '🗄️',
    ready: true,
    domains: [
      { id: 'd1', title: 'Domain 1: Database Design' },
      { id: 'd2', title: 'Domain 2: Database Object Management' },
      { id: 'd3', title: 'Domain 3: Data Retrieval' },
      { id: 'd4', title: 'Domain 4: Data Manipulation' },
      { id: 'd5', title: 'Domain 5: Troubleshooting' },
    ],
    exams: [
      { id: 'exam1', label: 'Examen 1' },
      { id: 'exam2', label: 'Examen 2' },
      { id: 'exam3', label: 'Examen 3' },
    ],
  },
};

let activeSubject = 'Networking';

function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}

function loadTimeSpent() {
  try {
    const raw = localStorage.getItem(TIME_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}

function scoreClass(pct) {
  if (pct >= 70) return 'hist-score-good';
  if (pct >= 40) return 'hist-score-mid';
  return 'hist-score-bad';
}

function formatDate(iso) {
  const d = new Date(iso);
  const date = d.toLocaleDateString('ro-RO', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const time = d.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });
  return `${date} ${time}`;
}

function formatDuration(totalSec) {
  if (!totalSec || totalSec < 1) return '0s';
  if (totalSec < 60) return `${totalSec}s`;
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  if (min < 60) return sec ? `${min} min ${sec}s` : `${min} min`;
  const h = Math.floor(min / 60);
  const remMin = min % 60;
  return remMin ? `${h} h ${remMin} min` : `${h} h`;
}

// ---------------------------------------------------------------------
// Taburi materii
// ---------------------------------------------------------------------
function renderSubjectTabs() {
  const wrap = document.getElementById('subjectTabs');
  wrap.innerHTML = Object.keys(SUBJECTS).map(key => {
    const s = SUBJECTS[key];
    const activeClass = key === activeSubject ? ' hist-tab-active' : '';
    return `<button class="hist-tab${activeClass}" data-subject="${key}">${s.icon} ${s.label}</button>`;
  }).join('');

  wrap.querySelectorAll('.hist-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSubject = btn.dataset.subject;
      renderSubjectTabs();
      renderSubjectContent();
    });
  });
}

// ---------------------------------------------------------------------
// Conținutul materiei active
// ---------------------------------------------------------------------
function renderSubjectContent() {
  const container = document.getElementById('subjectContent');
  const subject = SUBJECTS[activeSubject];

  if (!subject.ready) {
    container.innerHTML = `
      <div class="history-empty">
        <p>${subject.label} e în lucru încă.</p>
        <p class="history-empty-sub">Progresul va apărea aici de îndată ce secțiunea e construită.</p>
      </div>`;
    return;
  }

  const history = loadHistory();
  const timeLog = loadTimeSpent();

  let html = '<div class="hist-domain-list">';

  subject.domains.forEach(domain => {
    const videoKey = `${activeSubject}_${domain.id}_videos`;
    const videoSec = (timeLog[videoKey] && timeLog[videoKey].seconds) || 0;

    const assessments = domain.assessments || DEFAULT_HIST_ASSESSMENTS;
    let totalSec = videoSec;
    let assessmentRowsHtml = '';
    assessments.forEach(a => {
      const key = `${activeSubject}_${domain.id}_${a.key}`;
      const sec = (timeLog[key] && timeLog[key].seconds) || 0;
      totalSec += sec;
      assessmentRowsHtml += renderAssessmentRow(key, a.label, history[key], sec);
    });

    html += `
      <div class="hist-domain-card">
        <div class="hist-domain-header">
          <span class="hist-domain-title">${domain.title}</span>
          <span class="hist-domain-total">${formatDuration(totalSec)} învățat</span>
        </div>
        <div class="hist-domain-body">
          <div class="hist-subrow">
            <span class="hist-subrow-icon">🎥</span>
            <span class="hist-subrow-label">Videos</span>
            <span class="hist-subrow-value">${formatDuration(videoSec)}</span>
          </div>
          ${assessmentRowsHtml}
        </div>
      </div>`;
  });

  html += '</div>';

  html += '<h2 class="settings-section-title">Examene</h2><div class="hist-domain-list">';
  subject.exams.forEach(exam => {
    const examKey = `${activeSubject}_${exam.id}`;
    html += `
      <div class="hist-domain-card">
        <div class="hist-domain-body" style="padding-top:6px;">
          ${renderAssessmentRow(examKey, `📝 ${exam.label}`, history[examKey], null)}
        </div>
      </div>`;
  });
  html += '</div>';

  container.innerHTML = html;
  wireExpandToggles(container);
}

// Randează un rând de evaluare (Pre/Post/Examen), cu lista de încercări
// ascunsă dedesubt, expandabilă.
function renderAssessmentRow(key, label, testData, timeSec) {
  const attempts = testData ? testData.attempts : [];
  const hasAttempts = attempts.length > 0;

  let summary = 'Nicio încercare încă';
  if (hasAttempts) {
    const scores = attempts.map(a => a.pct);
    const best = Math.max(...scores);
    const avg = Math.round(scores.reduce((s, v) => s + v, 0) / scores.length);
    summary = `${attempts.length} încercăr${attempts.length === 1 ? 'e' : 'i'} · cel mai bun ${best}% · media ${avg}%`;
  }

  let html = `
    <div class="hist-subrow hist-subrow-clickable" data-toggle-row="${key}">
      <span class="hist-subrow-icon">${label.slice(0, 2)}</span>
      <span class="hist-subrow-label">${label.replace(/^\S+\s/, '')}</span>
      <span class="hist-subrow-summary">${summary}</span>
      ${timeSec !== null ? `<span class="hist-subrow-value">${formatDuration(timeSec)}</span>` : ''}
      <span class="hist-chevron">›</span>
    </div>
    <div class="hist-attempts-list hist-collapsed" data-attempts-for="${key}">`;

  if (!hasAttempts) {
    html += `<div class="hist-attempt-row"><span class="hist-attempt-date">Nu ai dat încă acest test.</span></div>`;
  } else {
    [...attempts].reverse().forEach((a, i) => {
      const attemptKey = `${key}__${attempts.length - 1 - i}`;
      const wrongCount = (a.wrongQuestions || []).length;
      html += `
        <div class="hist-attempt-block">
          <div class="hist-attempt-row">
            <span class="hist-attempt-date">${formatDate(a.date)}</span>
            <span class="hist-attempt-score ${scoreClass(a.pct)}">${a.correct}/${a.total} (${a.pct}%)</span>
            <span class="hist-attempt-duration">${formatDuration(a.durationSec)}</span>
            ${wrongCount > 0 ? `<button class="hist-mistakes-toggle" data-toggle-mistakes="${attemptKey}">▸ Greșeli (${wrongCount})</button>` : '<span class="hist-mistakes-none">Fără greșeli 🎉</span>'}
          </div>
          ${wrongCount > 0 ? `
          <div class="hist-mistakes-list hist-collapsed" data-mistakes="${attemptKey}">
            ${a.wrongQuestions.map(w => `
              <div class="hist-mistake-item">
                <div class="hist-mistake-question">${w.question}</div>
                ${(w.parts || []).map(p => `
                  <div class="hist-mistake-part">
                    ${p.label ? `<span class="hist-mistake-part-label">${p.label}</span>` : ''}
                    <span class="hist-mistake-your">✕ ${p.yourAnswer}</span>
                    <span class="hist-mistake-correct">✓ ${p.correctAnswer}</span>
                  </div>`).join('')}
              </div>`).join('')}
          </div>` : ''}
        </div>`;
    });
  }

  html += `</div>`;
  return html;
}

function wireExpandToggles(container) {
  container.querySelectorAll('[data-toggle-row]').forEach(row => {
    row.addEventListener('click', () => {
      const key = row.dataset.toggleRow;
      const list = container.querySelector(`[data-attempts-for="${CSS.escape(key)}"]`);
      const chevron = row.querySelector('.hist-chevron');
      if (list) list.classList.toggle('hist-collapsed');
      if (chevron) chevron.classList.toggle('hist-chevron-open');
    });
  });

  container.querySelectorAll('[data-toggle-mistakes]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.dataset.toggleMistakes;
      const list = container.querySelector(`[data-mistakes="${CSS.escape(key)}"]`);
      if (list) list.classList.toggle('hist-collapsed');
    });
  });
}

document.getElementById('resetProgressBtn').addEventListener('click', () => {
  const ok = confirm('Sigur vrei să ștergi tot istoricul testelor și timpul înregistrat, pentru toate materiile? Nu se poate anula.');
  if (!ok) return;
  try {
    localStorage.removeItem(HISTORY_KEY);
    localStorage.removeItem(TIME_KEY);
  } catch (e) { /* ignoră */ }
  renderSubjectContent();
});

// Dacă rulăm în modal (iframe deschis de settings-modal.js), ascunde
// navigarea proprie a paginii — se închide din fereastra părinte.
if (window.self !== window.top) {
  document.getElementById('historyTopbar').style.display = 'none';
  document.querySelector('.history-main').style.paddingTop = '24px';
}

// Deschide direct tab-ul materiei din care ai apăsat "📊 Progres".
(function initFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const subject = params.get('subject');
  if (subject && SUBJECTS[subject]) activeSubject = subject;
})();

renderSubjectTabs();
renderSubjectContent();
