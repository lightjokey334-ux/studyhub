/* ===================================================================
   engine.js — Motor unic de întrebări, folosit atât de Pre/Post
   Assessment (în Cursuri) cât și de Examene.

   SCHEMA UNEI ÎNTREBĂRI (vezi README.md pentru detalii complete):
   {
     id: "d1_pre_01",
     type: "single" | "multi" | "order" | "blank" | "dragtext" | "match",
     question: "text...",       // pentru blank/dragtext folosește {{1}}, {{2}}...
     image: null | "cale/catre/imagine.png",
     options: [...],
     pairs: [...],              // DOAR la tipul "match" — etichetele fixe din stânga
     correct: [...],
     explanation: "text..."     // OPȚIONAL — vezi nota de mai jos
   }

   Câmpul opțional "explanation": dacă e prezent, se afișează sub
   întrebare exact când apare și corectarea — adică fie după „Finalizează
   testul" (this.submitted === true), fie în Modul Învățare, imediat ce
   întrebarea a fost "verificată" la Enter/Următor (vezi _learnRevealed
   din goNext()). Corectă sau greșită, oricum — vezi renderQuestion().

   "match" vs "dragtext": amândouă înseamnă "trage un chip peste răspuns",
   dar "match" e pentru liste (ex: "Match each X to its Y" — o etichetă
   fixă + o zonă goală, unul sub altul), iar "dragtext" e pentru propoziții
   cu spații libere ÎN INTERIORUL textului (ex: "Un switch operează la
   nivelul {{1}}."). Majoritatea întrebărilor stil GMetrix "Match each..."
   sunt de fapt "match", nu "dragtext".
   =================================================================== */

class QuestionEngine {
  constructor(container, questions, opts = {}) {
    this.container = container;
    this.current = 0;
    this.userAnswers = {}; // id -> raspuns dat
    this.marked = new Set(); // id-uri de intrebari marcate
    this.submitted = false; // devine true după "Finalizează testul"
    this.onFinish = opts.onFinish || null;
    this.title = opts.title || 'Test';
    this.basePath = opts.basePath || ''; // prefixat automat la image (și, pe viitor, alte assets)
    this.randomize = opts.randomize !== false; // implicit: da
    this.testId = opts.testId || null; // ex: "d1_pre", "exam1" — folosit pentru istoricul de progres
    this.testLabel = opts.title || 'Test';
    this._pausedAccumMs = 0; // timp total petrecut cu fila ascunsă / un modal deschis peste test
    this._pausedAt = null; // momentul la care a început pauza curentă (null = nu e în pauză acum)
    this.showShortcuts = opts.showShortcuts !== false; // implicit: da
    this.keyMode = opts.keyMode === 'answer' ? 'answer' : 'navigate'; // 'navigate' | 'answer' — vezi butonul rotund din topbar
    this._answerCursorIdx = 0; // poziția evidențiată în modul "Răspuns" (multi)
    this.autoSaveAnswers = opts.autoSaveAnswers === true; // setarea din Setări -> Teste și examene
    this.showSourceImageBtn = opts.showSourceImageBtn === true; // setarea din Setări -> Teste și examene ("Buton imagine sursă")
    this.mode = 'test'; // 'test' | 'learn' — ales din ecranul de start, sau restaurat dintr-o sesiune salvată
    this._learnRevealed = new Set(); // ID-urile întrebărilor deja "verificate" în Modul Învățare (vezi goNext())
    this.multiSession = opts.multiSession === true; // implicit: nu — vezi ecranul de sesiuni, doar la examene
    this.sessionNum = null; // numărul sesiunii curente, DOAR când multiSession e activ

    const source = questions || [];

    if (source.length === 0) {
      this.questions = [];
      this.renderEmpty();
      return;
    }

    this._pendingSource = source;

    if (this.multiSession) {
      // Examene: poți avea mai multe încercări nefinalizate în paralel —
      // arată mereu un ecran cu "Sesiune nouă" + una câte una din cele
      // existente, înainte de alegerea Test/Învățare.
      const sessions = this.autoSaveAnswers ? this.loadSessionsIndex() : [];
      this.renderSessionPicker(sessions);
      return;
    }

    // Cursuri (Pre/Post-Assessment): un singur "slot" de progres salvat,
    // ca până acum — dacă există, sărim peste ecranul de alegere a
    // modului și reluăm direct în modul cu care a fost pornită sesiunea.
    const restored = this.autoSaveAnswers ? this.loadAutoSave() : null;

    if (restored) {
      this.questions = restored.questions;
      this.userAnswers = restored.userAnswers || {};
      this.marked = new Set(restored.marked || []);
      this.current = Math.min(Math.max(restored.current || 0, 0), Math.max(this.questions.length - 1, 0));
      this.mode = restored.mode === 'learn' ? 'learn' : 'test';
      this._learnRevealed = new Set(restored.learnRevealed || []);
      this.renderModePicker();
    } else {
      this.renderModePicker();
    }
  }

  // Ecran de sesiuni (doar la examene, multiSession) — apare mereu, chiar
  // dacă nu ai nicio sesiune nefinalizată încă (atunci arată doar "Sesiune
  // nouă"). O sesiune = o încercare la care ai salvat răspunsuri, dar n-ai
  // apăsat încă "Finalizează testul".
  renderSessionPicker(sessions) {
    const sorted = sessions.slice().sort((a, b) => a.num - b.num);
    const rows = sorted.map(s => {
      const dateStr = s.updatedAt
        ? new Date(s.updatedAt).toLocaleDateString('ro-RO', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
        : '';
      return `
        <div class="qe-session-card-row">
          <button type="button" class="qe-session-card" data-session="${s.num}">
            <span class="qe-session-card-title">Sesiunea ${s.num}</span>
            <span class="qe-session-card-desc">${s.answered} / ${s.total} răspunse · ${dateStr}</span>
          </button>
          <button type="button" class="qe-session-delete-btn" data-delete-session="${s.num}" title="Șterge sesiunea" aria-label="Șterge sesiunea">✕</button>
        </div>`;
    }).join('');

    this.container.innerHTML = `
      <div class="qe-mode-picker">
        <h2 class="qe-mode-picker-title">${this.testLabel}</h2>
        <p class="qe-mode-picker-sub">${sorted.length
          ? `Ai ${sorted.length} sesiune${sorted.length === 1 ? '' : 'i'} nefinalizată${sorted.length === 1 ? '' : 'e'}. Continui una, sau începi una nouă?`
          : 'Pornește o sesiune nouă.'}</p>
        <div class="qe-session-list">
          <button type="button" class="qe-session-card qe-session-card-new" data-session="new">
            <span class="qe-session-card-title">+ Sesiune nouă</span>
            <span class="qe-session-card-desc">Pornește un test complet nou</span>
          </button>
          ${rows}
        </div>
      </div>`;

    this.container.querySelectorAll('[data-session]').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.session;
        if (val === 'new') {
          this.sessionNum = this.getNextSessionNum(sorted);
          this.renderModePicker();
          return;
        }
        this.sessionNum = parseInt(val, 10);
        const restored = this.loadAutoSave();
        if (restored) {
          this.questions = restored.questions;
          this.userAnswers = restored.userAnswers || {};
          this.marked = new Set(restored.marked || []);
          this.current = Math.min(Math.max(restored.current || 0, 0), Math.max(restored.questions.length - 1, 0));
          this.mode = restored.mode === 'learn' ? 'learn' : 'test';
          this._learnRevealed = new Set(restored.learnRevealed || []);
          this.startTest();
        } else {
          // date lipsă/corupte -> curăță intrarea orfană din index, tratează ca sesiune nouă
          this.removeSessionIndexEntry();
          this.renderModePicker();
        }
      });
    });

    this.container.querySelectorAll('[data-delete-session]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const num = parseInt(btn.dataset.deleteSession, 10);
        if (!confirm(`Ștergi Sesiunea ${num}? Nu se poate anula.`)) return;
        try { localStorage.removeItem(`studyhub_autosave_${this.testId}_s${num}`); } catch (err) { /* ignoră */ }
        const list = this.loadSessionsIndex().filter(s => s.num !== num);
        this.saveSessionsIndex(list);
        this.renderSessionPicker(list);
      });
    });
  }

  // Ecran de start: alegi Modul Test (ca până acum — corectarea apare
  // toată la final) sau Modul Învățare (corectarea apare imediat, după
  // fiecare întrebare răspunsă, fără să blocheze editarea). Apare doar la
  // pornirea unei sesiuni noi — dacă exista deja o sesiune auto-salvată,
  // se sare peste acest ecran (vezi constructor).
  loadAttemptHistory() {
    if (!this.testId) return [];
    try {
      const raw = localStorage.getItem('studyhub_test_history_v1');
      if (!raw) return [];
      const history = JSON.parse(raw) || {};
      const attempts = (history[this.testId] && Array.isArray(history[this.testId].attempts)) ? history[this.testId].attempts : [];
      return attempts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (e) {
      return [];
    }
  }

  resumeSavedAttempt() {
    const restored = this.autoSaveAnswers ? this.loadAutoSave() : null;
    if (!restored) return;
    this.questions = restored.questions;
    this.userAnswers = restored.userAnswers || {};
    this.marked = new Set(restored.marked || []);
    this.current = Math.min(Math.max(restored.current || 0, 0), Math.max(this.questions.length - 1, 0));
    this.mode = restored.mode === 'learn' ? 'learn' : 'test';
    this._learnRevealed = new Set(restored.learnRevealed || []);
    this.submitted = false;
    this.startTest();
  }

  startFreshAttempt() {
    this.userAnswers = {};
    this.marked = new Set();
    this.submitted = false;
    this._learnRevealed = new Set();
    this.mode = this.mode === 'learn' ? 'learn' : 'test';
    const source = this._pendingSource || [];
    this.questions = this.randomize
      ? this.shuffleArray(source).map(q => this.shuffleQuestionOptions(q))
      : source.map(q => {
          const copy = JSON.parse(JSON.stringify(q));
          copy._shuffleRecipe = {};
          return copy;
        });
    this.current = 0;
    this.startTest();
  }

  renderReviewQuestionCard(q, idx, given) {
    const correct = this.isCorrect(q, given);
    const statusText = correct ? 'Corect' : 'Greșit';
    const answerParts = this.buildAnswerParts(q, given);
    const imageHtml = q.image ? `<img class="qe-image qe-review-image" src="${escapeAttr(resolveAssetPath(q.image, this.basePath))}" alt="">` : '';

    let optionsHtml = '';
    if (q.type === 'single' || q.type === 'multi') {
      const selectedSet = new Set(Array.isArray(given) ? given : [given].filter(v => v !== undefined && v !== null));
      const rows = q.options.map((opt, i) => {
        const isCorrect = q.correct.includes(i);
        const isChosen = q.type === 'single' ? given === i : selectedSet.has(i);
        const rowClass = [
          'qe-review-option',
          isCorrect ? 'qe-review-option-correct' : '',
          isChosen && !isCorrect ? 'qe-review-option-incorrect' : ''
        ].filter(Boolean).join(' ');
        return `
          <div class="${rowClass}">
            <span class="qe-review-option-mark">${isCorrect ? '✓' : (isChosen ? '✕' : '')}</span>
            <span>${opt}</span>
          </div>`;
      }).join('');
      optionsHtml = `<div class="qe-review-options">${rows}</div>`;
    } else if (q.type === 'blank') {
      const blanks = (q.correct || []).map((acceptable, i) => {
        const value = Array.isArray(given) ? (given[i] || '') : '';
        const acceptableOptions = Array.isArray(acceptable) ? acceptable : [acceptable];
        const ok = acceptableOptions.some(v => (value || '').toLowerCase().trim() === v.toLowerCase().trim());
        return `
          <div class="qe-review-blank-row">
            <span class="qe-review-answer-label">${q.correct.length > 1 ? `Spațiul ${i + 1}` : 'Răspuns'}</span>
            <span class="qe-review-blank-value ${ok ? 'qe-review-correct' : 'qe-review-incorrect'}">${value || '(fără răspuns)'}</span>
            <span class="qe-review-blank-hint">Corect: ${acceptableOptions[0]}</span>
          </div>`;
      }).join('');
      optionsHtml = `<div class="qe-review-blank-list">${blanks}</div>`;
    } else if (q.type === 'order') {
      const userOrder = Array.isArray(given) ? given.map(v => q.options[v]).join(' → ') : '(fără răspuns)';
      const correctOrder = q.correct.map(v => q.options[v]).join(' → ');
      optionsHtml = `
        <div class="qe-review-answer-row">
          <span class="qe-review-answer-label">Răspuns</span>
          <span class="qe-review-answer-your">${userOrder}</span>
          <span class="qe-review-answer-correct">Corect: ${correctOrder}</span>
        </div>`;
    } else if (q.type === 'truefalse') {
      const labels = (Array.isArray(q.labels) && q.labels.length === 2) ? q.labels : ['Yes', 'No'];
      const rows = q.statements.map((stmt, i) => {
        const userVal = Array.isArray(given) ? given[i] : undefined;
        const selectedLabel = userVal === true ? labels[0] : (userVal === false ? labels[1] : 'N/A');
        const correctLabel = q.correct[i] ? labels[0] : labels[1];
        const ok = userVal === q.correct[i];
        return `
          <div class="qe-review-answer-row qe-review-truefalse-row">
            <span class="qe-review-answer-label">${stmt}</span>
            <span class="qe-review-answer-your ${ok ? '' : 'qe-review-incorrect'}">${selectedLabel}</span>
            <span class="qe-review-answer-correct">Corect: ${correctLabel}</span>
          </div>`;
      }).join('');
      optionsHtml = `<div class="qe-review-truefalse-list">${rows}</div>`;
    } else if (q.type === 'dropdown') {
      const rows = q.statements.map((stmt, i) => {
        const userVal = Array.isArray(given) ? (given[i] || '(fără răspuns)') : '(fără răspuns)';
        const correctVal = q.correct[i] || '(fără răspuns)';
        const ok = (userVal || '').trim() === (correctVal || '').trim();
        return `
          <div class="qe-review-answer-row">
            <span class="qe-review-answer-label">${stmt}</span>
            <span class="qe-review-answer-your ${ok ? '' : 'qe-review-incorrect'}">${userVal}</span>
            <span class="qe-review-answer-correct">Corect: ${correctVal}</span>
          </div>`;
      }).join('');
      optionsHtml = rows;
    } else {
      const rows = answerParts.map(part => `
        <div class="qe-review-answer-row">
          <span class="qe-review-answer-label">${part.label || 'Răspuns'}</span>
          <span class="qe-review-answer-your ${part.yourAnswer === part.correctAnswer ? '' : 'qe-review-incorrect'}">${part.yourAnswer}</span>
          <span class="qe-review-answer-correct">Corect: ${part.correctAnswer}</span>
        </div>`).join('');
      optionsHtml = rows;
    }

    const explanation = q.explanation ? `<div class="qe-review-explanation"><strong>Explicație:</strong> ${q.explanation}</div>` : '';
    return `
      <div class="qe-review-question ${correct ? 'qe-review-correct' : 'qe-review-incorrect'}">
        <div class="qe-review-question-head">
          <span>Întrebarea ${idx + 1}</span>
          <span class="qe-review-status">${statusText}</span>
        </div>
        <div class="qe-review-text">${q.question || ''}</div>
        ${imageHtml}
        ${optionsHtml}
        ${explanation}
      </div>`;
  }

  renderAttemptReviewDetail(attempt) {
    const source = this._pendingSource || [];
    const byId = {};
    source.forEach(q => { byId[q.id] = q; });
    const orderedIds = Array.isArray(attempt.questionOrder) && attempt.questionOrder.length
      ? attempt.questionOrder
      : source.map(q => q.id);
    const savedRecipes = attempt.shuffleRecipes || {};
    const attemptName = attempt.name || 'Încercare';

    const questionCards = orderedIds.map((id, idx) => {
      const sourceQuestion = byId[id];
      const q = sourceQuestion && this.randomize
        ? this.shuffleQuestionOptions(sourceQuestion, savedRecipes[id])
        : sourceQuestion;
      if (!q) return '';
      const given = attempt.answers && Object.prototype.hasOwnProperty.call(attempt.answers, q.id) ? attempt.answers[q.id] : undefined;
      return this.renderReviewQuestionCard(q, idx, given);
    }).join('');

    this.container.innerHTML = `
      <div class="qe-mode-picker qe-review-panel">
        <div class="qe-review-header-row">
          <button type="button" class="qe-mode-card qe-back-card" data-action="back-review">← Înapoi</button>
          <div class="qe-review-summary">
            <h2 class="qe-mode-picker-title">${attemptName}</h2>
            <p class="qe-mode-picker-sub">${new Date(attempt.date).toLocaleString('ro-RO')} · ${attempt.correct}/${attempt.total} (${attempt.pct}%)</p>
          </div>
          <div class="qe-review-spacer"></div>
        </div>
        <div class="qe-review-list">${questionCards}</div>
      </div>`;

    this.container.querySelector('[data-action="back-review"]').addEventListener('click', () => this.renderModePicker());
  }

  renderModePicker() {
    const saved = this.autoSaveAnswers ? this.loadAutoSave() : null;
    const attempts = this.loadAttemptHistory();
    const attemptCards = attempts.length
      ? attempts.map((attempt, i) => {
          const name = attempt.name || `Încercarea ${attempts.length - i}`;
          return `
          <button type="button" class="qe-attempt-card" data-review-attempt="${i}">
            <span class="qe-attempt-name">${name}</span>
            <span class="qe-attempt-date">${new Date(attempt.date).toLocaleString('ro-RO')}</span>
            <span class="qe-attempt-score ${attempt.pct >= 70 ? 'qe-attempt-good' : attempt.pct >= 40 ? 'qe-attempt-mid' : 'qe-attempt-bad'}">${attempt.correct}/${attempt.total} · ${attempt.pct}%</span>
          </button>`;
        }).join('')
      : '<div class="qe-attempt-empty">Nicio încercare finalizată încă.</div>';

    const continueCard = saved ? `
      <button type="button" class="qe-mode-card qe-mode-continue" data-action="continue-saved">
        <span class="qe-mode-card-icon">↩️</span>
        <span class="qe-mode-card-title">Continuă încercarea</span>
        <span class="qe-mode-card-desc">Reluai răspunsurile salvate și poți continua testul de unde ai rămas.</span>
      </button>` : '';

    this.container.innerHTML = `
      <div class="qe-mode-picker">
        <h2 class="qe-mode-picker-title">Cum vrei să faci testul?</h2>
        <p class="qe-mode-picker-sub">${this.testLabel}</p>

        ${attempts.length ? `
          <div class="qe-attempts-block">
            <h3 class="qe-attempts-title">Încercările tale</h3>
            <div class="qe-attempts-list">${attemptCards}</div>
          </div>` : ''}

        <div class="qe-mode-picker-grid">
          ${continueCard}
          <button type="button" class="qe-mode-card" data-mode="test">
            <span class="qe-mode-card-icon">📝</span>
            <span class="qe-mode-card-title">Mod Test</span>
            <span class="qe-mode-card-desc">Răspunzi la toate întrebările; corectarea completă apare abia după „Finalizează testul".</span>
          </button>
          <button type="button" class="qe-mode-card" data-mode="learn">
            <span class="qe-mode-card-icon">🎓</span>
            <span class="qe-mode-card-title">Mod Învățare</span>
            <span class="qe-mode-card-desc">Vezi imediat dacă ai răspuns corect, după fiecare întrebare — poți să-ți schimbi răspunsul oricând.</span>
          </button>
        </div>
      </div>`;

    this.container.querySelectorAll('[data-review-attempt]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.reviewAttempt, 10);
        this.renderAttemptReviewDetail(attempts[idx]);
      });
    });

    const continueBtn = this.container.querySelector('[data-action="continue-saved"]');
    if (continueBtn) {
      continueBtn.addEventListener('click', () => this.resumeSavedAttempt());
    }

    this.container.querySelectorAll('.qe-mode-card[data-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.mode = btn.dataset.mode === 'learn' ? 'learn' : 'test';
        if (this.autoSaveAnswers) this.clearAutoSave();
        this.startFreshAttempt();
      });
    });
  }

  // Randează efectiv testul — apelat fie imediat după alegerea modului,
  // fie direct din constructor, la reluarea unei sesiuni salvate.
  startTest() {
    this._startTime = Date.now(); // pornește abia acum — nu contorizăm timpul petrecut pe ecranul de alegere a modului
    this.renderShell();
    this.renderQuestion();
    this.bindKeyboardShortcuts();
    this.bindActivityPause();
  }

  // ---- Auto-salvare (opțională, din Setări) ----
  // Cheia e legată de testId, deci fiecare test (domeniu/tip sau examen)
  // are propriul progres salvat. Se face direct în localStorage, fără
  // bridge — motorul rulează mereu pe aceeași pagină unde se și citește.
  // La examene (multiSession), cheia include și numărul sesiunii, ca
  // fiecare încercare nefinalizată să aibă propriul "slot", separat.
  _autoSaveKey() {
    if (!this.testId) return null;
    if (this.multiSession && this.sessionNum) return `studyhub_autosave_${this.testId}_s${this.sessionNum}`;
    return `studyhub_autosave_${this.testId}`;
  }

  loadAutoSave() {
    const key = this._autoSaveKey();
    if (!key) return null;
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const saved = JSON.parse(raw);
      if (!saved) return null;
      // Format vechi (dinainte de fix-ul cu "recipe") — mai avea încă
      // "questions" complet salvat. Îl mai citim, ca sesiunile pornite
      // înainte de acest fix să nu se piardă, dar NU mai scriem niciodată
      // în formatul ăsta (vezi saveAutoSave).
      if (Array.isArray(saved.questions) && saved.questions.length > 0) return saved;
      if (!Array.isArray(saved.questionOrder) || saved.questionOrder.length === 0) return null;
      const questions = this.rebuildQuestionsFromSaved(saved.questionOrder, saved.shuffleRecipes);
      if (questions.length === 0) return null; // toate întrebările salvate au fost șterse din sursă
      return { ...saved, questions };
    } catch (e) {
      return null;
    }
  }

  saveAutoSave() {
    const key = this._autoSaveKey();
    if (!key) return;
    try {
      // NU salvăm this.questions (conținutul complet) — doar ORDINEA
      // (id-uri) + "rețeta" de amestecare per întrebare. La reluare,
      // reconstruim din fișierul .js proaspăt (this._pendingSource),
      // aplicând aceeași rețetă — vezi rebuildQuestionsFromSaved(). Așa,
      // dacă rescrii o întrebare (text/cod/imagine) cât ai un test salvat
      // în curs, la reluare vezi versiunea NOUĂ, nu o "poză" veche.
      const shuffleRecipes = {};
      this.questions.forEach(q => { if (q._shuffleRecipe) shuffleRecipes[q.id] = q._shuffleRecipe; });
      localStorage.setItem(key, JSON.stringify({
        questionOrder: this.questions.map(q => q.id),
        shuffleRecipes,
        userAnswers: this.userAnswers,
        marked: [...this.marked],
        current: this.current,
        mode: this.mode,
        learnRevealed: [...this._learnRevealed],
      }));
    } catch (e) { /* ex: localStorage plin — ignorăm, nu blocăm testul */ }
    if (this.multiSession) this.updateSessionIndexEntry();
  }

  clearAutoSave() {
    const key = this._autoSaveKey();
    if (!key) return;
    try { localStorage.removeItem(key); } catch (e) { /* ignoră */ }
    if (this.multiSession) this.removeSessionIndexEntry();
  }

  // ---- Sesiuni multiple (doar la examene, multiSession) ----
  // O listă separată ("indexul"), cu câte o intrare per sesiune
  // nefinalizată — doar metadate (nu întregul test), ca ecranul de
  // alegere să se randeze rapid, fără să încarce fiecare sesiune întreagă.
  _sessionsIndexKey() {
    return this.testId ? `studyhub_sessions_${this.testId}` : null;
  }

  loadSessionsIndex() {
    const key = this._sessionsIndexKey();
    if (!key) return [];
    try {
      const raw = localStorage.getItem(key);
      const list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list : [];
    } catch (e) {
      return [];
    }
  }

  saveSessionsIndex(list) {
    const key = this._sessionsIndexKey();
    if (!key) return;
    try { localStorage.setItem(key, JSON.stringify(list)); } catch (e) { /* ignoră */ }
  }

  getNextSessionNum(list) {
    if (!list.length) return 1;
    return Math.max(...list.map(s => s.num)) + 1;
  }

  updateSessionIndexEntry() {
    if (!this.sessionNum) return;
    const list = this.loadSessionsIndex();
    const scorable = this.questions.filter(q => !this.isInfoSlide(q));
    const entry = {
      num: this.sessionNum,
      updatedAt: new Date().toISOString(),
      answered: scorable.filter(q => this.isAnswered(q.id)).length,
      total: scorable.length,
      mode: this.mode,
    };
    const idx = list.findIndex(s => s.num === this.sessionNum);
    if (idx >= 0) list[idx] = entry; else list.push(entry);
    this.saveSessionsIndex(list);
  }

  removeSessionIndexEntry() {
    if (!this.sessionNum) return;
    const list = this.loadSessionsIndex().filter(s => s.num !== this.sessionNum);
    this.saveSessionsIndex(list);
  }

  // Pauzează cronometrul duratei testului cât timp fila e ascunsă (ai
  // schimbat tab-ul din browser) sau e deschis un modal peste pagină
  // (Setări/Progres) — vezi onActivityPause/onActivityResume din
  // progress-bridge.js. Fără asta, timpul "irosit" se aduna în durata
  // încercării din Progres.
  bindActivityPause() {
    if (typeof onActivityPause !== 'function' || typeof onActivityResume !== 'function') return;

    onActivityPause(() => {
      if (!document.body.contains(this.container)) return; // instanță veche, container deja înlocuit
      if (this._pausedAt == null) this._pausedAt = Date.now();
    });

    onActivityResume(() => {
      if (!document.body.contains(this.container)) return;
      if (this._pausedAt != null) {
        this._pausedAccumMs += Date.now() - this._pausedAt;
        this._pausedAt = null;
      }
    });
  }

  // ---- Randomizare (ordinea întrebărilor + ordinea răspunsurilor) ----

  shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Întoarce o COPIE a întrebării, cu opțiunile amestecate — niciodată nu
  // modifică array-ul original din fișierul QUESTIONS_..., ca să rămână
  // intact pentru următoarea încărcare a testului.
  // Amestecă opțiunile/ordinea unei întrebări — SAU, dacă i se dă un
  // "recipe" (salvat anterior din autosave), reproduce EXACT aceeași
  // amestecare, dar aplicată pe conținutul PROASPĂT din "question" (nu pe
  // o copie veche salvată). Așa, la autosave, salvăm doar "rețeta" de
  // amestecare (poziții), NU conținutul întrebării — dacă rescrii fișierul
  // de întrebări cât ai un test salvat în curs, la reluare vezi conținutul
  // ACTUALIZAT (text/cod/imagine), cu aceleași poziții/amestec ca înainte.
  shuffleQuestionOptions(question, recipe) {
    // O întrebare poate cere explicit să NU fie amestecată deloc — esențial
    // pentru întrebări "din imagine" (question.image arată tot: enunț +
    // opțiuni, exact ca-n captură), unde opțiunile din date sunt doar
    // etichete generice ("Opțiunea 1", "Opțiunea 2"...) care TREBUIE să
    // rămână în aceeași poziție ca-n imagine — un amestec le-ar desincroniza
    // complet de la ce se vede în poză.
    // Totodată, un test poate fi declarat explicit "fără amestecare la
    // nivelul întregului set" prin `randomize: false` la crearea motorului.
    if (!this.randomize || question.noShuffle) {
      const q = JSON.parse(JSON.stringify(question));
      q._shuffleRecipe = {};
      return q;
    }

    const q = JSON.parse(JSON.stringify(question));
    const r = recipe ? { ...recipe } : {};
    const isReplay = !!recipe;
    const idx = arr => arr.map((_, i) => i);

    if ((q.type === 'single' || q.type === 'multi') && Array.isArray(q.options)) {
      const order = isReplay ? r.optionsOrder : this.shuffleArray(idx(q.options)); // order[newIdx] = oldIdx
      const oldToNew = {};
      order.forEach((oldIdx, newIdx) => { oldToNew[oldIdx] = newIdx; });
      q.options = order.map(oldIdx => question.options[oldIdx]);
      q.correct = question.correct.map(oldIdx => oldToNew[oldIdx]);
      r.optionsOrder = order;
    }

    if (q.type === 'order' && Array.isArray(q.options)) {
      // "correct" rămâne neschimbat (indecși în options, neschimbat);
      // doar ordinea AFIȘATĂ inițial se amestecă, altfel întrebarea
      // apare deja rezolvată din oficiu.
      q._initialOrder = isReplay ? r.initialOrder : this.shuffleArray(idx(q.options));
      r.initialOrder = q._initialOrder;
    }

    if ((q.type === 'dragtext' || q.type === 'match') && Array.isArray(q.options)) {
      const order = isReplay ? r.poolOrder : this.shuffleArray(idx(q.options));
      q.options = order.map(i => question.options[i]);
      r.poolOrder = order;
    }

    if (q.type === 'match' && Array.isArray(q.pairs)) {
      const order = isReplay ? r.pairsOrder : this.shuffleArray(idx(q.pairs));
      q.pairs = order.map(i => question.pairs[i]);
      q.correct = order.map(i => question.correct[i]);
      r.pairsOrder = order;
    }

    if (q.type === 'truefalse' && Array.isArray(q.statements)) {
      const order = isReplay ? r.statementsOrder : this.shuffleArray(idx(q.statements));
      q.statements = order.map(i => question.statements[i]);
      q.correct = order.map(i => question.correct[i]);
      r.statementsOrder = order;
    }

    if (q.type === 'dropdown' && Array.isArray(q.options)) {
      // amestecă doar opțiunile din fiecare dropdown — NU ordinea rândurilor
      // (statements), care poate avea o logică proprie (ex: "problema" apoi
      // "soluția"), spre deosebire de "truefalse"/"match".
      const orders = isReplay ? r.dropdownOrders : q.options.map(row => this.shuffleArray(idx(row)));
      q.options = question.options.map((row, rowIdx) => orders[rowIdx].map(i => row[i]));
      r.dropdownOrders = orders;
    }

    q._shuffleRecipe = r;
    return q;
  }

  // Reconstruiește this.questions dintr-un "questionOrder" + "shuffleRecipes"
  // salvate (autosave), dar folosind conținutul PROASPĂT din sursă (fișierul
  // .js încărcat acum) — nu conținutul salvat. Întrebările șterse din sursă
  // de la ultima sesiune sunt ignorate silențios (nu pot fi reconstruite).
  rebuildQuestionsFromSaved(order, recipes) {
    const source = this._pendingSource || [];
    const byId = {};
    source.forEach(q => { byId[q.id] = q; });
    recipes = recipes || {};
    return (order || [])
      .map(id => byId[id])
      .filter(Boolean)
      .map(freshQ => this.randomize ? this.shuffleQuestionOptions(freshQ, recipes[freshQ.id]) : freshQ);
  }

  renderEmpty() {
    this.container.innerHTML = `
      <div class="qe-empty">
        <p>Nu există încă întrebări încărcate pentru acest test.</p>
        <p class="qe-empty-sub">Adaugă-le în fișierul JS corespunzător.</p>
      </div>`;
  }

  renderShell() {
    const shortcutsHtml = `
        <aside class="qe-shortcuts-panel">
          <h3 class="qe-shortcuts-title">Comenzi rapide</h3>
          <div class="qe-shortcuts-list">
            <div class="qe-shortcut-row"><span class="qe-shortcut-key">→</span><span>Următoarea întrebare</span></div>
            <div class="qe-shortcut-row"><span class="qe-shortcut-key">Enter</span><span>Următoarea întrebare</span></div>
            <div class="qe-shortcut-row"><span class="qe-shortcut-key">←</span><span>Întrebarea anterioară</span></div>
            <div class="qe-shortcut-row"><span class="qe-shortcut-key">↑ ↓</span><span>Sari un rând (Navigare) / alege răspuns (Răspuns)</span></div>
            <div class="qe-shortcut-row"><span class="qe-shortcut-key">Space</span><span>Bifează opțiunea evidențiată (multi, mod Răspuns)</span></div>
            <div class="qe-shortcut-row"><span class="qe-shortcut-key">Ctrl+Shift</span><span>Comută Navigare ↔ Răspuns</span></div>
          </div>
          <p class="qe-shortcuts-note">Poți opri acest panou din Setări.</p>
        </aside>`;

    this.container.innerHTML = `
      <div class="qe-layout${this.showShortcuts ? '' : ' qe-shortcuts-hidden'}" id="qeLayout">
        <div class="qe-wrap">
          <div class="qe-topbar">
            <button class="qe-nav-btn" id="qePrev">← Anterior</button>
            <div class="qe-topbar-center">
              <button class="qe-nav-btn" id="qeReset">↺ Resetează întrebarea</button>
              ${this.showSourceImageBtn ? '<button class="qe-nav-btn hidden" id="qeSourceImageBtn" type="button">🖼 Imagine sursă</button>' : ''}
              <button class="qe-nav-btn qe-mark-btn" id="qeMark">🚩 Marchează</button>
              <button class="qe-nav-btn qe-round-btn" id="qeKeyModeToggle" type="button">⇅</button>
              <button class="qe-nav-btn qe-exit-btn" id="qeExitBtn" type="button">⤴ Ieși din test</button>
              <div class="qe-progress" id="qeProgress"></div>
            </div>
            <button class="qe-nav-btn qe-primary" id="qeNext">Următor →</button>
          </div>
          <div class="qe-body" id="qeBody"></div>
        </div>
        <aside class="qe-side-panel" id="qeSidePanel">
          <div id="qeListPanel"></div>
          <button class="qe-nav-btn qe-primary qe-submit-btn" id="qeSubmit">Finalizează testul</button>
          <div class="qe-result hidden" id="qeResult"></div>
        </aside>
        ${shortcutsHtml}
        <button class="qe-panel-fab" id="qePanelFab" type="button" title="Întrebări" aria-label="Deschide lista de întrebări">📋</button>
        <div class="qe-panel-backdrop" id="qePanelBackdrop"></div>
        <div class="qe-lightbox-overlay hidden" id="qeSourceImageOverlay">
          <button class="qe-lightbox-close" id="qeSourceImageClose" aria-label="Închide" title="Închide">✕</button>
          <div class="qe-lightbox-tabs hidden" id="qeSourceImageTabs"></div>
          <img class="qe-lightbox-img" id="qeSourceImageImg" src="" alt="Imagine sursă a întrebării">
        </div>
      </div>`;

    this.container.querySelector('#qePrev').addEventListener('click', () => this.go(-1));
    this.container.querySelector('#qeNext').addEventListener('click', () => this.goNext());
    this.container.querySelector('#qeReset').addEventListener('click', () => this.resetCurrent());
    this.container.querySelector('#qeSubmit').addEventListener('click', () => this.finish());
    this.container.querySelector('#qeMark').addEventListener('click', () => this.toggleMark());
    this.container.querySelector('#qeExitBtn').addEventListener('click', () => this.exitTest());
    this.container.querySelector('#qePanelFab').addEventListener('click', () => this.openPanel());
    this.container.querySelector('#qePanelBackdrop').addEventListener('click', () => this.closePanel());
    this.container.querySelector('#qeKeyModeToggle').addEventListener('click', () => this.toggleKeyMode());
    if (this.showSourceImageBtn) {
      this.container.querySelector('#qeSourceImageBtn').addEventListener('click', () => this.openSourceImage());
      this.container.querySelector('#qeSourceImageClose').addEventListener('click', () => this.closeSourceImage());
      this.container.querySelector('#qeSourceImageOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'qeSourceImageOverlay') this.closeSourceImage();
      });
    }
    this.updateKeyModeButton();
  }

  // Butonul "🖼 Imagine sursă" (opțional, din Setări -> Teste și examene) —
  // arată captura originală (q.sourceImage) din care a fost extrasă
  // întrebarea curentă, ca reper rapid de verificare. Butonul însuși e
  // ascuns automat la întrebările fără acest câmp opțional completat.
  //
  // "sourceImage" acceptă DOUĂ forme:
  //   - un singur nume de fișier (string) — cazul simplu, o singură captură
  //   - un array de { label, file } — mai multe capturi pentru ACEEAȘI
  //     întrebare (ex: "dropdown" cu screenshot separat per opțiune) —
  //     apar ca taburi în lightbox, ca să comuți între ele.
  openSourceImage() {
    const q = this.questions[this.current];
    if (!q || !q.sourceImage) return;
    const overlay = this.container.querySelector('#qeSourceImageOverlay');
    const img = this.container.querySelector('#qeSourceImageImg');
    const tabsEl = this.container.querySelector('#qeSourceImageTabs');
    if (!overlay || !img || !tabsEl) return;

    const images = Array.isArray(q.sourceImage)
      ? q.sourceImage
      : [{ label: null, file: q.sourceImage }];
    if (images.length === 0) return;

    const showImageAt = (idx) => {
      img.src = resolveAssetPath(`Images/${images[idx].file}`, this.basePath);
      tabsEl.querySelectorAll('.qe-lightbox-tab').forEach((btn, i) => btn.classList.toggle('active', i === idx));
    };

    if (images.length > 1) {
      tabsEl.innerHTML = images
        .map((im, i) => `<button class="qe-lightbox-tab" type="button">${escapeAttr(im.label || `Imaginea ${i + 1}`)}</button>`)
        .join('');
      tabsEl.classList.remove('hidden');
      tabsEl.querySelectorAll('.qe-lightbox-tab').forEach((btn, i) => btn.addEventListener('click', () => showImageAt(i)));
    } else {
      tabsEl.innerHTML = '';
      tabsEl.classList.add('hidden');
    }

    showImageAt(0);
    overlay.classList.remove('hidden');
  }

  closeSourceImage() {
    const overlay = this.container.querySelector('#qeSourceImageOverlay');
    if (overlay) overlay.classList.add('hidden');
  }

  // Aplică live setarea "Panou comenzi rapide" din Setări, fără să
  // reconstruiască testul (deci fără să pierzi întrebarea/răspunsurile
  // curente) — necesar pentru că Setările se deschid ca fereastră
  // plutitoare PESTE pagina curentă, nu navighează nicăieri, deci nimic
  // altceva nu declanșează automat o re-randare.
  setShowShortcuts(show) {
    this.showShortcuts = show;
    const layout = this.container.querySelector('#qeLayout');
    if (layout) layout.classList.toggle('qe-shortcuts-hidden', !show);
  }

  // Panoul "Întrebări" pe mobil: sertar (drawer) care culisează din marginea
  // dreaptă, deschis printr-un buton fix (📋) și închis prin backdrop, prin
  // ✕ din interior, sau automat când sari la altă întrebare din listă.
  // Înlocuiește fostul panou plutitor/trăgut cu mâna, care era confuz.
  // Pe desktop, clasele de mai jos nu au niciun efect — panoul rămâne
  // mereu vizibil, fix în layout, exact ca înainte.
  openPanel() {
    const panel = this.container.querySelector('#qeSidePanel');
    const backdrop = this.container.querySelector('#qePanelBackdrop');
    const fab = this.container.querySelector('#qePanelFab');
    if (panel) panel.classList.add('qe-panel-open');
    if (backdrop) backdrop.classList.add('qe-panel-open');
    if (fab) fab.classList.add('qe-panel-open');
  }

  closePanel() {
    const panel = this.container.querySelector('#qeSidePanel');
    const backdrop = this.container.querySelector('#qePanelBackdrop');
    const fab = this.container.querySelector('#qePanelFab');
    if (panel) panel.classList.remove('qe-panel-open');
    if (backdrop) backdrop.classList.remove('qe-panel-open');
    if (fab) fab.classList.remove('qe-panel-open');
  }

  toggleKeyMode() {
    this.keyMode = this.keyMode === 'answer' ? 'navigate' : 'answer';
    this._answerCursorIdx = 0;
    this.updateKeyModeButton();
  }

  updateKeyModeButton() {
    const btn = this.container.querySelector('#qeKeyModeToggle');
    if (!btn) return;
    if (this.keyMode === 'answer') {
      btn.textContent = '⌨';
      btn.title = 'Mod tastatură: Răspuns — săgețile sus/jos aleg răspunsul, Enter trece mai departe. Click ca să treci la Navigare.';
      btn.classList.add('qe-mode-answer');
    } else {
      btn.textContent = '⇅';
      btn.title = 'Mod tastatură: Navigare — săgețile schimbă întrebarea. Click ca să treci la modul Răspuns.';
      btn.classList.remove('qe-mode-answer');
    }
  }

  go(delta) {
    this.saveCurrentAnswer();
    const next = this.current + delta;
    if (next < 0 || next >= this.questions.length) return;
    this.current = next;
    this.renderQuestion();
  }

  // Folosită de butonul "Următor →" și de tasta Enter. În Modul Învățare,
  // dacă întrebarea curentă e răspunsă dar încă NEverificată, primul apel
  // doar arată corectarea și NU navighează încă — dacă era corect, trece
  // singură mai departe după 1 secundă; dacă era greșit, rămâi pe loc ca
  // să vezi greșeala, și abia o a doua apăsare chiar navighează. Săgeata
  // dreapta din tastatură ocolește tot asta și navighează direct (go(1)).
  goNext() {
    const q = this.questions[this.current];
    if (this.mode === 'learn' && !this.submitted && q && this.isAnswered(q.id) && !this._learnRevealed.has(q.id)) {
      this.saveCurrentAnswer();
      this._learnRevealed.add(q.id);
      this.renderQuestion(); // re-randează tot (corectare + explicație), nu doar clase peste DOM-ul vechi
      if (this.autoSaveAnswers) this.saveAutoSave();

      if (this.isCorrect(q, this.userAnswers[q.id])) {
        const idxAtReveal = this.current;
        setTimeout(() => {
          if (this.current === idxAtReveal) this.go(1);
        }, 1000);
      }
      // dacă e greșit, ne oprim aici — rămânem pe întrebarea curentă
      return;
    }
    this.go(1);
  }

  jumpBy(delta) {
    this.saveCurrentAnswer();
    const next = this.current + delta;
    if (next < 0 || next >= this.questions.length) return;
    this.current = next;
    this.renderQuestion();
  }

  getListColumnCount() {
    const grid = this.container.querySelector('.qe-list-grid');
    if (!grid) return 4;
    const cols = getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length;
    return cols || 4;
  }

  // Săgeți/Enter pentru navigare — se auto-dezactivează dacă acest
  // QuestionEngine nu mai e afișat (ex: ai schimbat tab-ul din Cursuri).
  //
  // Mod "Navigare" (implicit): săgețile schimbă întrebarea.
  // Mod "Răspuns" (buton rotund ⇅/⌨ din topbar): săgeata sus/jos alege
  // răspunsul (single/multi) sau te duce direct în câmpul de scris
  // (blank); stânga/dreapta rămân mereu "schimbă întrebarea".
  bindKeyboardShortcuts() {
    this._keydownHandler = (e) => {
      if (!document.body.contains(this.container)) {
        document.removeEventListener('keydown', this._keydownHandler);
        return;
      }

      // Ctrl+Shift (în orice ordine) -> comută Navigare <-> Răspuns.
      // e.repeat: cât timp ții tastele apăsate, browserul retrimite keydown
      // în buclă — fără paza asta, o singură apăsare comuta modul de mai
      // multe ori la rând și ateriza imprevizibil pe "Răspuns".
      if ((e.key === 'Shift' && e.ctrlKey) || (e.key === 'Control' && e.shiftKey)) {
        e.preventDefault();
        if (e.repeat) return;
        this.toggleKeyMode();
        return;
      }

      if (e.ctrlKey || e.altKey || e.metaKey) return;

      const activeEl = document.activeElement;
      const tag = (activeEl && activeEl.tagName) || '';
      const inputType = (activeEl && activeEl.type) || '';
      // Doar input de TEXT/textarea sunt "scriere" — radio/checkbox/select
      // NU trebuie tratate ca atare, altfel browserul le mișcă nativ cu
      // săgețile (schimbă radio-ul selectat / valoarea din dropdown) ÎNAINTE
      // să apucăm noi să facem preventDefault() pentru navigare, exact
      // bug-ul "săgeata îmi schimbă răspunsul în loc să navigheze".
      const isTyping = tag === 'TEXTAREA' || (tag === 'INPUT' && inputType !== 'radio' && inputType !== 'checkbox');

      if (e.key === 'Enter') {
        e.preventDefault();
        this.goNext();
        return;
      }
      if (isTyping) return; // nu interceptăm săgețile cât timp tastezi un răspuns

      const q = this.questions[this.current];
      const body = this.container.querySelector('#qeBody');

      if (e.key === 'ArrowRight') { e.preventDefault(); this.go(1); return; }
      if (e.key === 'ArrowLeft') { e.preventDefault(); this.go(-1); return; }

      const isUp = e.key === 'ArrowUp';
      const isDown = e.key === 'ArrowDown';
      if (!isUp && !isDown && !(e.key === ' ')) return;

      // După "Finalizează testul" tratăm mereu ca mod Navigare, indiferent
      // ce arată butonul ⇅/⌨ — altfel puteai edita răspunsul din tastatură
      // chiar dacă mouse-ul/atingerea erau deja blocate (vezi disabledAttr
      // de mai sus din renderQuestion()).
      const effectiveMode = this.submitted ? 'navigate' : this.keyMode;

      if (effectiveMode === 'answer') {
        // În modul Răspuns, sus/jos NU mai navighează niciodată prin
        // întrebări — chiar dacă tipul curent nu are comportament
        // definit (match/dragtext/order), rămân inerte, ca să nu se
        // amestece cu navigarea.
        if ((isUp || isDown) && q && body) {
          e.preventDefault();
          this.handleAnswerModeArrow(q, body, isDown);
          return;
        }
        if (e.key === ' ' && q && q.type === 'multi' && body) {
          e.preventDefault();
          this.handleAnswerModeSpace(body);
          return;
        }
        return;
      }

      if (isUp) { e.preventDefault(); this.jumpBy(-this.getListColumnCount()); }
      if (isDown) { e.preventDefault(); this.jumpBy(this.getListColumnCount()); }
    };
    document.addEventListener('keydown', this._keydownHandler);
  }

  // Întoarce true dacă a gestionat săgeata (deci nu mai sare la altă
  // întrebare) — pentru tipurile fără mod "Răspuns" definit (match/
  // dragtext/order), întoarce false și sare la comportamentul normal.
  handleAnswerModeArrow(q, body, isDown) {
    if (q.type === 'single') {
      const inputs = [...body.querySelectorAll('.qe-option input[name="qOpt"]')];
      if (!inputs.length) return false;
      const checked = inputs.findIndex(i => i.checked);
      let next;
      if (checked === -1) next = 0;
      else next = isDown ? (checked + 1) % inputs.length : (checked - 1 + inputs.length) % inputs.length;
      inputs[next].checked = true;
      inputs[next].dispatchEvent(new Event('change', { bubbles: true }));
      inputs[next].closest('.qe-option').scrollIntoView({ block: 'nearest' });
      return true;
    }

    if (q.type === 'multi') {
      const options = [...body.querySelectorAll('.qe-option')];
      if (!options.length) return false;
      const alreadyFocused = options.some(o => o.classList.contains('qe-option-focused'));
      options.forEach(o => o.classList.remove('qe-option-focused'));
      if (!alreadyFocused) {
        this._answerCursorIdx = 0;
      } else {
        this._answerCursorIdx = isDown
          ? (this._answerCursorIdx + 1) % options.length
          : (this._answerCursorIdx - 1 + options.length) % options.length;
      }
      const target = options[this._answerCursorIdx];
      target.classList.add('qe-option-focused');
      target.scrollIntoView({ block: 'nearest' });
      return true;
    }

    if (q.type === 'blank') {
      const firstInput = body.querySelector('.qe-blank-input');
      if (firstInput) {
        firstInput.focus();
        return true;
      }
      return false;
    }

    return false; // match / dragtext / order — fără mod "Răspuns" dedicat
  }

  handleAnswerModeSpace(body) {
    const opt = body.querySelectorAll('.qe-option')[this._answerCursorIdx];
    if (!opt) return;
    const input = opt.querySelector('input');
    if (!input) return;
    input.checked = !input.checked;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  resetCurrent() {
    const q = this.questions[this.current];
    delete this.userAnswers[q.id];
    this._learnRevealed.delete(q.id);
    this.renderQuestion();
  }

  exitTest() {
    if (this.autoSaveAnswers) {
      this.saveAutoSave();
    } else {
      this.clearAutoSave();
    }
    if (this.multiSession) {
      this.renderSessionPicker(this.loadSessionsIndex());
    } else {
      this.renderModePicker();
    }
  }

  toggleMark() {
    const q = this.questions[this.current];
    if (this.marked.has(q.id)) this.marked.delete(q.id);
    else this.marked.add(q.id);
    this.updateMarkButton();
    this.updateListPanel();
    if (this.autoSaveAnswers) this.saveAutoSave();
  }

  updateMarkButton() {
    const q = this.questions[this.current];
    const btn = this.container.querySelector('#qeMark');
    if (!btn) return;
    const isMarked = this.marked.has(q.id);
    btn.classList.toggle('qe-mark-active', isMarked);
    btn.textContent = isMarked ? '🚩 Marcată' : '🚩 Marchează';
  }

  // Un slide "info" (type: 'info') nu se scorează NICIODATĂ — nu are
  // opțiuni, nu are răspuns corect, e doar imaginea de răsfoit. Exclus
  // explicit din orice calcul de progres/scor (vezi finish(),
  // updateListPanel(), getStatus()).
  isInfoSlide(q) {
    return !!q && q.type === 'info';
  }

  isAnswered(id) {
    const val = this.userAnswers[id];
    if (val === undefined || val === null) return false;
    if (Array.isArray(val)) {
      return val.some(v => v !== null && v !== undefined && v !== '');
    }
    return true;
  }

  getStatus(q) {
    if (this.isInfoSlide(q)) return 'info';
    if (this.submitted) {
      return this.isCorrect(q, this.userAnswers[q.id]) ? 'correct' : 'incorrect';
    }
    if (this.mode === 'learn' && this._learnRevealed.has(q.id)) {
      return this.isCorrect(q, this.userAnswers[q.id]) ? 'correct' : 'incorrect';
    }
    if (this.marked.has(q.id)) return 'marked';
    if (this.isAnswered(q.id)) return 'answered';
    return 'unanswered';
  }

  updateListPanel() {
    const panel = this.container.querySelector('#qeListPanel');
    if (!panel) return;

    // Slide-urile "info" nu se numără la progres (nu au ce răspuns să
    // dea) — dar rămân în grilă mai jos, ca să poți naviga la ele.
    const scorable = this.questions.filter(q => !this.isInfoSlide(q));
    const total = scorable.length;
    const answeredCount = scorable.filter(q => this.isAnswered(q.id)).length;
    const pct = total ? Math.round((answeredCount / total) * 100) : 0;

    let html = `
      <div class="qe-list-panel-header">
        <h3 class="qe-list-panel-title">Întrebări</h3>
        <button class="qe-panel-close-btn" id="qePanelCloseBtn" type="button" title="Închide" aria-label="Închide">✕</button>
      </div>
      <div class="qe-list-panel-body" id="qeListPanelBody">
        <div class="qe-progress-track">
          <div class="qe-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="qe-progress-label">${answeredCount} / ${total} răspunse</div>
        <div class="qe-list-grid">`;

    this.questions.forEach((q, i) => {
      const status = this.getStatus(q);
      const currentClass = i === this.current ? ' qe-list-item-current' : '';
      html += `<button class="qe-list-item qe-status-${status}${currentClass}" data-idx="${i}">${i + 1}</button>`;
    });

    const hasInfoSlides = this.questions.some(q => this.isInfoSlide(q));
    const infoLegend = hasInfoSlides ? `<span><span class="qe-legend-dot qe-status-info"></span> Info</span>` : '';
    const legend = this.submitted
      ? `<span><span class="qe-legend-dot qe-status-correct"></span> Corect</span>
         <span><span class="qe-legend-dot qe-status-incorrect"></span> Greșit</span>
         ${infoLegend}`
      : `<span><span class="qe-legend-dot qe-status-marked"></span> Marcată</span>
         <span><span class="qe-legend-dot qe-status-answered"></span> Cu răspuns</span>
         <span><span class="qe-legend-dot qe-status-unanswered"></span> Fără răspuns</span>
         ${infoLegend}`;

    html += `
        </div>
        <div class="qe-list-legend">${legend}</div>
      </div>`;

    panel.innerHTML = html;

    panel.querySelector('#qePanelCloseBtn').addEventListener('click', () => this.closePanel());

    panel.querySelectorAll('.qe-list-item').forEach(btn => {
      btn.addEventListener('click', () => {
        this.saveCurrentAnswer();
        this.current = parseInt(btn.dataset.idx, 10);
        this.renderQuestion();
        this.closePanel(); // pe mobil, dai tap pe un număr -> vezi imediat întrebarea, fără sertar peste ea
      });
    });
  }

  saveCurrentAnswer() {
    const q = this.questions[this.current];
    if (!q) return;
    const body = this.container.querySelector('#qeBody');
    if (!body) return;

    if (q.type === 'single') {
      const checked = body.querySelector('input[name="qOpt"]:checked');
      this.userAnswers[q.id] = checked ? parseInt(checked.value, 10) : null;
    } else if (q.type === 'multi') {
      const checked = [...body.querySelectorAll('input[name="qOpt"]:checked')];
      this.userAnswers[q.id] = checked.map(c => parseInt(c.value, 10));
    } else if (q.type === 'order') {
      const items = [...body.querySelectorAll('.qe-order-item')];
      this.userAnswers[q.id] = items.map(i => parseInt(i.dataset.idx, 10));
    } else if (q.type === 'blank') {
      const inputs = [...body.querySelectorAll('.qe-blank-input')];
      this.userAnswers[q.id] = inputs.map(i => i.value.trim());
    } else if (q.type === 'dragtext' || q.type === 'match') {
      const zones = [...body.querySelectorAll('.qe-dropzone')];
      this.userAnswers[q.id] = zones.map(z => z.dataset.filled || '');
    } else if (q.type === 'truefalse') {
      this.userAnswers[q.id] = q.statements.map((_, i) => {
        const checked = body.querySelector(`input[name="qTf${i}"]:checked`);
        if (!checked) return null;
        return checked.value === 'true';
      });
    } else if (q.type === 'dropdown') {
      const dropdownCount = /____+/.test(q.question || '')
        ? (q.question.match(/____+/g) || []).length
        : (q.statements || []).length;
      this.userAnswers[q.id] = Array.from({ length: dropdownCount }, (_, i) => {
        const sel = body.querySelector(`.qe-dd-select[data-row="${i}"]`);
        return (sel && sel.value) ? sel.value : null;
      });
    }

    if (this.autoSaveAnswers) this.saveAutoSave();

    // Modul Învățare: NU arătăm corectarea la fiecare schimbare (ar fi
    // prematur la match/order/etc., unde răspunsul se construiește din mai
    // mulți pași) — verificarea reală se declanșează doar din goNext()
    // (butonul "Următor" sau Enter). Aici doar ținem corectarea la zi DACĂ
    // întrebarea a fost deja verificată o dată (ex: ai greșit, o corectezi).
    if (this.mode === 'learn' && !this.submitted && this._learnRevealed.has(q.id)) {
      if (this.isAnswered(q.id)) this.applyCorrectnessUI(q, body);
      else this.clearCorrectnessUI(body);
    }
  }

  renderQuestion() {
    const q = this.questions[this.current];
    const body = this.container.querySelector('#qeBody');
    const progress = this.container.querySelector('#qeProgress');
    progress.textContent = `Întrebarea ${this.current + 1} / ${this.questions.length}`;
    this.updateMarkButton();
    this.updateListPanel();
    if (this.showSourceImageBtn) {
      const srcBtn = this.container.querySelector('#qeSourceImageBtn');
      const hasSourceImage = Array.isArray(q.sourceImage) ? q.sourceImage.length > 0 : !!q.sourceImage;
      if (srcBtn) srcBtn.classList.toggle('hidden', !hasSourceImage);
    }
    this.closeSourceImage(); // ascunde lightbox-ul rămas deschis de la întrebarea anterioară

    let html = `<div class="qe-question">`;
    if (q.image) html += `<img class="qe-image" src="${escapeAttr(resolveAssetPath(q.image, this.basePath))}" alt="">`;

    const disabledAttr = this.submitted ? 'disabled' : '';

    switch (q.type) {
      case 'single':
        html += `<div class="qe-text">${q.question}</div>`;
        html += `<div class="qe-options">`;
        q.options.forEach((opt, i) => {
          const checked = this.userAnswers[q.id] === i ? 'checked' : '';
          html += `
            <label class="qe-option">
              <input type="radio" name="qOpt" value="${i}" ${checked} ${disabledAttr}>
              <span>${opt}</span>
            </label>`;
        });
        html += `</div>`;
        break;

      case 'multi':
        html += `<div class="qe-text">${q.question}</div>`;
        html += `<p class="qe-hint">Selectează toate răspunsurile corecte.</p>`;
        html += `<div class="qe-options">`;
        q.options.forEach((opt, i) => {
          const savedArr = this.userAnswers[q.id] || [];
          const checked = savedArr.includes(i) ? 'checked' : '';
          html += `
            <label class="qe-option">
              <input type="checkbox" name="qOpt" value="${i}" ${checked} ${disabledAttr}>
              <span>${opt}</span>
            </label>`;
        });
        html += `</div>`;
        break;

      case 'order': {
        html += `<div class="qe-text">${q.question}</div>`;
        html += `<p class="qe-hint">Folosește ▲▼ ca să pui elementele în ordinea corectă.</p>`;
        const order = this.userAnswers[q.id] || q._initialOrder || q.options.map((_, i) => i);
        html += `<div class="qe-order-list" id="qeOrderList">`;
        order.forEach((idx, pos) => {
          const upDisabled = this.submitted || pos === 0;
          const downDisabled = this.submitted || pos === order.length - 1;
          html += `
            <div class="qe-order-item" data-idx="${idx}">
              <span class="qe-order-text">${q.options[idx]}</span>
              <span class="qe-order-controls">
                <button type="button" class="qe-order-btn" data-action="up" ${upDisabled ? 'disabled' : ''} aria-label="Mută în sus">▲</button>
                <button type="button" class="qe-order-btn" data-action="down" ${downDisabled ? 'disabled' : ''} aria-label="Mută în jos">▼</button>
              </span>
            </div>`;
        });
        html += `</div>`;
        break;
      }

      case 'blank': {
        html += `<div class="qe-text">${this.renderBlankText(q, 'input')}</div>`;
        break;
      }

      case 'match': {
        html += `<div class="qe-text">${q.question}</div>`;
        html += `<p class="qe-hint">Atinge o opțiune, apoi atinge caseta unde vrei s-o pui.</p>`;
        const savedMatch = this.userAnswers[q.id] || [];

        html += `<div class="qe-match-container">`;

        // Coloana 1: răspunsurile disponibile, aranjate vertical, în stânga.
        html += `<div class="qe-match-pool" id="qeChipPool">`;
        q.options.forEach(opt => {
          html += `<div class="qe-chip qe-chip-vertical" draggable="true" data-value="${escapeAttr(opt)}">${opt}</div>`;
        });
        html += `</div>`;

        // Coloana 2 + 3: zona unde pui răspunsul, apoi eticheta ghid.
        html += `<div class="qe-match-rows">`;
        q.pairs.forEach((label, i) => {
          const val = savedMatch[i] || '';
          const filledClass = val ? ' qe-dropzone-filled' : '';
          html += `
            <div class="qe-match-row">
              <span class="qe-dropzone${filledClass}" data-blank="${i}" data-filled="${escapeAttr(val)}" draggable="${val ? 'true' : 'false'}">${val}</span>
              <span class="qe-match-label">${label}</span>
            </div>`;
        });
        html += `</div>`;

        html += `</div>`;
        break;
      }

      case 'dragtext': {
        html += `<div class="qe-text">${this.renderBlankText(q, 'drag')}</div>`;
        html += `<p class="qe-hint">Atinge o opțiune, apoi atinge spațiul liber unde vrei s-o pui.</p>`;
        html += `<div class="qe-chip-pool" id="qeChipPool">`;
        q.options.forEach(opt => {
          html += `<div class="qe-chip" draggable="true" data-value="${escapeAttr(opt)}">${opt}</div>`;
        });
        html += `</div>`;
        break;
      }

      case 'truefalse': {
        html += `<div class="qe-text">${q.question}</div>`;
        const labels = (Array.isArray(q.labels) && q.labels.length === 2) ? q.labels : ['Yes', 'No'];
        const saved = this.userAnswers[q.id] || [];
        html += `<div class="qe-tf-table">`;
        html += `<div class="qe-tf-cell qe-tf-corner"></div>`;
        html += `<div class="qe-tf-cell qe-tf-headlabel">${labels[0]}</div>`;
        html += `<div class="qe-tf-cell qe-tf-headlabel">${labels[1]}</div>`;
        q.statements.forEach((stmt, i) => {
          const val = saved[i]; // true | false | undefined (nerăspuns)
          html += `<div class="qe-tf-cell qe-tf-statement">${stmt}</div>`;
          html += `
            <div class="qe-tf-cell qe-tf-radio" data-row="${i}" data-val="true">
              <input type="radio" name="qTf${i}" value="true" ${val === true ? 'checked' : ''} ${disabledAttr}>
            </div>
            <div class="qe-tf-cell qe-tf-radio" data-row="${i}" data-val="false">
              <input type="radio" name="qTf${i}" value="false" ${val === false ? 'checked' : ''} ${disabledAttr}>
            </div>`;
        });
        html += `</div>`;
        break;
      }

      case 'dropdown': {
        const saved = this.userAnswers[q.id] || [];
        const renderSelect = (i) => {
          const val = saved[i] || '';
          const rowOptions = (q.options && q.options[i]) || [];
          return `<select class="qe-dd-select" data-row="${i}" ${disabledAttr}>
            <option value="" ${!val ? 'selected' : ''} disabled>Alege...</option>
            ${rowOptions.map(opt => `<option value="${escapeAttr(opt)}" ${val === opt ? 'selected' : ''}>${opt}</option>`).join('')}
          </select>`;
        };

        if (/____+/.test(q.question || '')) {
          let dropdownIndex = 0;
          const inlineText = q.question.replace(/____+/g, () => renderSelect(dropdownIndex++));
          html += `<div class="qe-text qe-dd-inline-text">${inlineText}</div>`;
        } else {
          html += `<div class="qe-text">${q.question}</div>`;
          html += `<div class="qe-dd-list">`;
          (q.statements || []).forEach((stmt, i) => {
            html += `
              <div class="qe-dd-row">
                <span class="qe-dd-label">${stmt}</span>
                ${renderSelect(i)}
              </div>`;
          });
          html += `</div>`;
        }
        break;
      }
      case 'info': {
        // Slide informativ — DOAR imagine (deja randată mai sus, comun
        // tuturor tipurilor) + text opțional, FĂRĂ nicio opțiune de
        // răspuns. Nu se scorează niciodată (vezi isCorrect/finish/
        // updateListPanel — toate îl exclud explicit din total). Util
        // pentru capturi pe care nu vrei să le transformi într-o
        // întrebare reală (ex: prea complexe ca să le transcrii acum),
        // dar tot vrei să le poți răsfoi în ordine, cu Următor/Anterior,
        // alături de restul testului.
        if (q.question) html += `<div class="qe-text">${q.question}</div>`;
        break;
      }
    }
    html += `</div>`;

    // Explicație (opțional, q.explanation) — apare exact când apare și
    // corectarea (applyCorrectnessUI, mai jos): fie după "Finalizează
    // testul" (this.submitted), fie în Modul Învățare, imediat ce
    // întrebarea curentă a fost "verificată" la Enter/Următor
    // (this._learnRevealed — vezi goNext()). Corectă sau greșită, oricum.
    const showExplanation = this.submitted || (this.mode === 'learn' && this._learnRevealed.has(q.id));
    if (showExplanation && q.explanation) {
      html += `
        <div class="qe-explanation">
          <div class="qe-explanation-label">💡 Explicație</div>
          <div class="qe-explanation-text">${q.explanation}</div>
        </div>`;
    }

    body.innerHTML = html;
    body.classList.toggle('qe-locked', this.submitted);

    if (q.type === 'order') this.wireOrder(body);
    if (q.type === 'dragtext' || q.type === 'match') this.wireDragText(body, q);

    // actualizează panoul lateral imediat, fără să aștepți Anterior/Următor
    const liveUpdate = () => { this.saveCurrentAnswer(); this.updateListPanel(); };
    body.querySelectorAll('input[name="qOpt"]').forEach(el => el.addEventListener('change', liveUpdate));
    body.querySelectorAll('.qe-blank-input').forEach(el => el.addEventListener('input', liveUpdate));
    if (q.type === 'truefalse') {
      body.querySelectorAll('.qe-tf-radio input[type="radio"]').forEach(el => el.addEventListener('change', liveUpdate));
    }
    if (q.type === 'dropdown') {
      body.querySelectorAll('.qe-dd-select').forEach(el => el.addEventListener('change', liveUpdate));
    }

    // Zăvorăște butoanele de acțiune odată ce testul a fost finalizat —
    // altfel testul rămâne "editabil" la infinit după ce ai văzut corectarea.
    const submitBtn = this.container.querySelector('#qeSubmit');
    const resetBtn = this.container.querySelector('#qeReset');
    const keyModeBtn = this.container.querySelector('#qeKeyModeToggle');
    if (submitBtn) submitBtn.disabled = this.submitted;
    if (resetBtn) resetBtn.disabled = this.submitted;
    if (keyModeBtn) keyModeBtn.disabled = this.submitted;

    if (this.submitted || (this.mode === 'learn' && this._learnRevealed.has(q.id))) this.applyCorrectnessUI(q, body);
    if (this.autoSaveAnswers && !this.submitted) this.saveAutoSave();
  }

  renderBlankText(q, mode) {
    const saved = this.userAnswers[q.id] || [];
    const readonlyAttr = this.submitted ? 'readonly' : '';
    let blankIndex = 0;
    return q.question.replace(/\{\{\d+\}\}/g, () => {
      const i = blankIndex++;
      if (mode === 'input') {
        const val = saved[i] || '';
        return `<input type="text" class="qe-blank-input" data-blank="${i}" value="${escapeAttr(val)}" ${readonlyAttr}>`;
      } else {
        const val = saved[i] || '';
        const filledClass = val ? ' qe-dropzone-filled' : '';
        return `<span class="qe-dropzone${filledClass}" data-blank="${i}" data-filled="${escapeAttr(val)}" draggable="${val ? 'true' : 'false'}">${val}</span>`;
      }
    });
  }

  // Reordonare prin butoane ▲▼ — merge identic cu mouse și cu atingere,
  // fără nicio urmărire de gest (spre deosebire de HTML5 drag&drop, care
  // nu funcționează deloc pe touch).
  wireOrder(body) {
    const list = body.querySelector('#qeOrderList');
    if (!list) return;

    const refreshButtons = () => {
      const items = [...list.querySelectorAll('.qe-order-item')];
      items.forEach((item, i) => {
        const up = item.querySelector('[data-action="up"]');
        const down = item.querySelector('[data-action="down"]');
        if (up) up.disabled = this.submitted || i === 0;
        if (down) down.disabled = this.submitted || i === items.length - 1;
      });
    };

    list.querySelectorAll('.qe-order-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.submitted) return;
        const item = btn.closest('.qe-order-item');
        if (btn.dataset.action === 'up') {
          const prev = item.previousElementSibling;
          if (prev) list.insertBefore(item, prev);
        } else {
          const next = item.nextElementSibling;
          if (next) list.insertBefore(next, item);
        }
        this.saveCurrentAnswer();
        this.updateListPanel();
        refreshButtons();
      });
    });
  }

  // Două moduri de interacțiune, active simultan, fără să se calce pe
  // picioare:
  //  - tap/click pe o opțiune, apoi tap/click pe casetă -> pentru telefon
  //    (unde HTML5 drag&drop nativ nu are suport deloc).
  //  - drag&drop nativ (draggable="true" + dragstart/dragover/drop) -> pentru
  //    mouse, pentru cine preferă tragerea directă pe calculator. Un click
  //    simplu (fără mișcare) nu declanșează niciodată un drag, deci cele
  //    două moduri nu intră în conflict.
  wireDragText(body, q) {
    const chips = [...body.querySelectorAll('.qe-chip')];
    const zones = [...body.querySelectorAll('.qe-dropzone')];
    let selected = null; // fie un .qe-chip din pool, fie un .qe-dropzone deja plin (pe care vrei să-l muți)
    let dragValue = null; // valoarea "în zbor" în timpul unui drag nativ (doar mouse)

    const clearSelection = () => {
      if (selected) selected.classList.remove('qe-selected');
      selected = null;
      zones.forEach(z => z.classList.remove('qe-dropzone-target'));
    };

    const selectEl = (el) => {
      clearSelection();
      selected = el;
      el.classList.add('qe-selected');
      zones.forEach(z => { if (z !== el) z.classList.add('qe-dropzone-target'); });
    };

    const fillZone = (zone, value) => {
      zone.dataset.filled = value;
      zone.textContent = value;
      zone.classList.add('qe-dropzone-filled');
      zone.setAttribute('draggable', 'true');
    };

    const clearZone = (zone) => {
      zone.dataset.filled = '';
      zone.textContent = '';
      zone.classList.remove('qe-dropzone-filled');
      zone.setAttribute('draggable', 'false');
    };

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (this.submitted) return;
        if (selected === chip) { clearSelection(); return; } // tap din nou -> anulează selecția
        selectEl(chip);
      });

      chip.addEventListener('dragstart', (e) => {
        if (this.submitted) { e.preventDefault(); return; }
        dragValue = chip.dataset.value;
        clearSelection(); // un drag nativ pornit anulează orice selecție făcută prin tap
        if (e.dataTransfer) e.dataTransfer.effectAllowed = 'move';
      });
    });

    zones.forEach(zone => {
      zone.addEventListener('click', () => {
        if (this.submitted) return;
        if (selected === zone) {
          // a doua atingere pe caseta deja "ridicată" -> golește-o de tot
          clearZone(zone);
          clearSelection();
          this.saveCurrentAnswer();
          this.updateListPanel();
          return;
        }

        if (selected) {
          const value = selected.classList.contains('qe-dropzone') ? selected.dataset.filled : selected.dataset.value;
          if (selected.classList.contains('qe-dropzone')) clearZone(selected); // era mutat dintr-o altă casetă
          fillZone(zone, value);
          clearSelection();
          this.saveCurrentAnswer();
          this.updateListPanel();
        } else if (zone.dataset.filled) {
          selectEl(zone); // nimic selectat -> "ridică" ce e deja pus, ca să-l muți în altă parte
        }
      });

      zone.addEventListener('dragstart', (e) => {
        if (this.submitted || !zone.dataset.filled) { e.preventDefault(); return; }
        dragValue = zone.dataset.filled;
        clearZone(zone);
        clearSelection();
        this.saveCurrentAnswer();
        this.updateListPanel();
      });
      zone.addEventListener('dragover', (e) => {
        if (dragValue != null) e.preventDefault();
      });
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        if (this.submitted || dragValue == null) return;
        fillZone(zone, dragValue);
        dragValue = null;
        this.saveCurrentAnswer();
        this.updateListPanel();
      });
    });
  }

  // Curăță orice corectare arătată anterior pentru întrebarea curentă —
  // necesar în Modul Învățare, unde applyCorrectnessUI() poate fi apelată
  // de mai multe ori pentru ACEEAȘI întrebare (pe măsură ce răspunzi),
  // fără o re-randare completă de fiecare dată.
  clearCorrectnessUI(body) {
    const oldBanner = body.querySelector('.qe-correctness-banner');
    if (oldBanner) oldBanner.remove();
    const oldOrderNote = body.querySelector('.qe-correct-note');
    if (oldOrderNote) oldOrderNote.remove();
    body.querySelectorAll('.qe-correct-inline-hint').forEach(el => el.remove());
    body.querySelectorAll('.qe-opt-correct, .qe-opt-incorrect')
      .forEach(el => el.classList.remove('qe-opt-correct', 'qe-opt-incorrect'));
    body.querySelectorAll('.qe-input-correct, .qe-input-incorrect')
      .forEach(el => el.classList.remove('qe-input-correct', 'qe-input-incorrect'));
    body.querySelectorAll('.qe-dropzone-correct, .qe-dropzone-incorrect')
      .forEach(el => el.classList.remove('qe-dropzone-correct', 'qe-dropzone-incorrect'));
    body.querySelectorAll('.qe-tf-correct, .qe-tf-incorrect')
      .forEach(el => el.classList.remove('qe-tf-correct', 'qe-tf-incorrect'));
    body.querySelectorAll('.qe-dd-correct, .qe-dd-incorrect')
      .forEach(el => el.classList.remove('qe-dd-correct', 'qe-dd-incorrect'));
  }

  applyCorrectnessUI(q, body) {
    this.clearCorrectnessUI(body);
    const given = this.userAnswers[q.id];
    const correct = this.isCorrect(q, given);
    const questionEl = body.querySelector('.qe-question');

    const banner = document.createElement('div');
    banner.className = `qe-correctness-banner ${correct ? 'qe-correctness-ok' : 'qe-correctness-bad'}`;
    banner.textContent = correct ? '✓ Răspuns corect' : '✕ Răspuns greșit';
    questionEl.prepend(banner);

    if (q.type === 'single' || q.type === 'multi') {
      const givenArr = q.type === 'single' ? [given] : (given || []);
      body.querySelectorAll('.qe-option').forEach(opt => {
        const input = opt.querySelector('input');
        const idx = parseInt(input.value, 10);
        if (q.correct.includes(idx)) opt.classList.add('qe-opt-correct');
        else if (givenArr.includes(idx)) opt.classList.add('qe-opt-incorrect');
      });
    }

    if (q.type === 'order') {
      const note = document.createElement('div');
      note.className = 'qe-correct-note';
      const correctText = q.correct.map(idx => q.options[idx]).join(' → ');
      note.innerHTML = `<strong>Ordinea corectă:</strong> ${correctText}`;
      questionEl.appendChild(note);
    }

    if (q.type === 'blank') {
      body.querySelectorAll('.qe-blank-input').forEach((input, i) => {
        const acceptable = Array.isArray(q.correct[i]) ? q.correct[i] : [q.correct[i]];
        const val = (input.value || '').toLowerCase().trim();
        const ok = acceptable.some(a => a.toLowerCase().trim() === val);
        input.classList.add(ok ? 'qe-input-correct' : 'qe-input-incorrect');
        if (!ok) {
          const hint = document.createElement('span');
          hint.className = 'qe-correct-inline-hint';
          hint.textContent = `(corect: ${acceptable[0]})`;
          input.insertAdjacentElement('afterend', hint);
        }
      });
    }

    if (q.type === 'dragtext' || q.type === 'match') {
      body.querySelectorAll('.qe-dropzone').forEach((zone, i) => {
        const val = (zone.dataset.filled || '').trim();
        const correctVal = (q.correct[i] || '').trim();
        const ok = val === correctVal;
        zone.classList.add(ok ? 'qe-dropzone-correct' : 'qe-dropzone-incorrect');
        if (!ok) {
          const hint = document.createElement('span');
          hint.className = 'qe-correct-inline-hint';
          hint.textContent = `(corect: ${correctVal})`;
          zone.insertAdjacentElement('afterend', hint);
        }
      });
    }

    if (q.type === 'truefalse') {
      const givenArr = Array.isArray(given) ? given : [];
      body.querySelectorAll('.qe-tf-radio').forEach(cell => {
        const row = parseInt(cell.dataset.row, 10);
        const val = cell.dataset.val === 'true';
        if (q.correct[row] === val) cell.classList.add('qe-tf-correct');
        else if (givenArr[row] === val) cell.classList.add('qe-tf-incorrect');
      });
    }

    if (q.type === 'dropdown') {
      const givenArr = Array.isArray(given) ? given : [];
      body.querySelectorAll('.qe-dd-select').forEach((sel, i) => {
        const ok = (givenArr[i] || '').trim() === (q.correct[i] || '').trim();
        sel.classList.add(ok ? 'qe-dd-correct' : 'qe-dd-incorrect');
      });
    }
  }

  // Transformă răspunsul dat + cel corect în rânduri lizibile ("partea
  // ta" vs "partea corectă"), la fel pentru orice tip de întrebare — așa
  // poate fereastra de Progres să le arate fără să știe nimic despre
  // tipurile de întrebări.
  buildAnswerParts(q, given) {
    const NONE = '(fără răspuns)';

    if (q.type === 'single') {
      const yourAnswer = (given !== null && given !== undefined && q.options[given] !== undefined)
        ? q.options[given] : NONE;
      return [{ label: null, yourAnswer, correctAnswer: q.options[q.correct[0]] }];
    }

    if (q.type === 'multi') {
      const arr = Array.isArray(given) ? given : [];
      const yourAnswer = arr.length ? arr.map(i => q.options[i]).join(', ') : NONE;
      const correctAnswer = q.correct.map(i => q.options[i]).join(', ');
      return [{ label: null, yourAnswer, correctAnswer }];
    }

    if (q.type === 'order') {
      const arr = Array.isArray(given) ? given : null;
      const yourAnswer = arr ? arr.map(i => q.options[i]).join(' → ') : NONE;
      const correctAnswer = q.correct.map(i => q.options[i]).join(' → ');
      return [{ label: null, yourAnswer, correctAnswer }];
    }

    if (q.type === 'blank') {
      const arr = Array.isArray(given) ? given : [];
      return q.correct.map((acceptable, i) => {
        const accepted = Array.isArray(acceptable) ? acceptable : [acceptable];
        const val = (arr[i] || '').trim();
        return {
          label: q.correct.length > 1 ? `Spațiul ${i + 1}` : null,
          yourAnswer: val || NONE,
          correctAnswer: accepted[0],
        };
      });
    }

    if (q.type === 'dragtext') {
      const arr = Array.isArray(given) ? given : [];
      return q.correct.map((c, i) => ({
        label: q.correct.length > 1 ? `Spațiul ${i + 1}` : null,
        yourAnswer: (arr[i] || '').trim() || NONE,
        correctAnswer: c,
      }));
    }

    if (q.type === 'match') {
      const arr = Array.isArray(given) ? given : [];
      return q.pairs.map((label, i) => ({
        label,
        yourAnswer: (arr[i] || '').trim() || NONE,
        correctAnswer: q.correct[i],
      }));
    }

    if (q.type === 'truefalse') {
      const labels = (Array.isArray(q.labels) && q.labels.length === 2) ? q.labels : ['Yes', 'No'];
      const arr = Array.isArray(given) ? given : [];
      return q.statements.map((stmt, i) => {
        const val = arr[i];
        const yourAnswer = val === true ? labels[0] : (val === false ? labels[1] : NONE);
        const correctAnswer = q.correct[i] ? labels[0] : labels[1];
        return { label: stmt, yourAnswer, correctAnswer };
      });
    }

    if (q.type === 'dropdown') {
      const arr = Array.isArray(given) ? given : [];
      const labels = q.statements || q.correct.map((_, i) => `Spațiul ${i + 1}`);
      return q.correct.map((correctAnswer, i) => ({
        label: labels[i],
        yourAnswer: arr[i] || NONE,
        correctAnswer,
      }));
    }

    return [];
  }

  finish() {
    if (this.submitted) return; // previne retrimiterea / o a doua înregistrare în istoric
    this.saveCurrentAnswer();
    this.submitted = true;
    if (this.autoSaveAnswers) this.clearAutoSave();
    let correctCount = 0;
    const wrongQuestions = [];

    this.questions.forEach(q => {
      if (this.isInfoSlide(q)) return; // slide informativ — nu se scorează
      const given = this.userAnswers[q.id];
      if (this.isCorrect(q, given)) {
        correctCount++;
      } else {
        wrongQuestions.push({
          id: q.id,
          question: (q.question || '').replace(/\{\{\d+\}\}/g, '___'),
          parts: this.buildAnswerParts(q, given),
        });
      }
    });

    const total = this.questions.filter(q => !this.isInfoSlide(q)).length;
    const pct = Math.round((correctCount / total) * 100);
    const resultEl = this.container.querySelector('#qeResult');
    resultEl.classList.remove('hidden');
    resultEl.innerHTML = `
      <h3>Rezultat: ${correctCount} / ${total} (${pct}%)</h3>
      <p>${pct >= 70 ? 'Felicitări, ai promovat testul!' : 'Mai exersează puțin și încearcă din nou.'}</p>`;

    this.renderQuestion(); // reafișează întrebarea curentă cu răspunsul corect evidențiat

    if (this.testId && typeof recordTestAttempt === 'function') {
      const pausedMs = this._pausedAccumMs + (this._pausedAt != null ? Date.now() - this._pausedAt : 0);
      const durationSec = Math.max(0, Math.round((Date.now() - this._startTime - pausedMs) / 1000));
      const shuffleRecipes = {};
      this.questions.forEach(q => { if (q._shuffleRecipe) shuffleRecipes[q.id] = q._shuffleRecipe; });
      recordTestAttempt({
        testId: this.testId,
        testLabel: this.testLabel,
        correct: correctCount,
        total,
        pct,
        durationSec,
        wrongQuestions,
        answers: this.userAnswers,
        questionOrder: this.questions.map(q => q.id),
        shuffleRecipes,
      });
    }

    if (this.onFinish) this.onFinish({ correctCount, total, pct, answers: this.userAnswers });
  }

  isCorrect(q, given) {
    if (given == null) return false;
    switch (q.type) {
      case 'single':
        return given === q.correct[0];
      case 'multi': {
        const a = [...given].sort();
        const b = [...q.correct].sort();
        return a.length === b.length && a.every((v, i) => v === b[i]);
      }
      case 'order':
        return Array.isArray(given) && given.length === q.correct.length &&
               given.every((v, i) => v === q.correct[i]);
      case 'blank':
        return q.correct.every((acceptable, i) => {
          const userVal = (given[i] || '').toLowerCase().trim();
          const options = Array.isArray(acceptable) ? acceptable : [acceptable];
          return options.some(opt => opt.toLowerCase().trim() === userVal);
        });
      case 'dragtext':
      case 'match':
        return q.correct.every((val, i) => (given[i] || '').trim() === val.trim());
      case 'truefalse':
        return Array.isArray(given) && given.length === q.correct.length &&
               given.every((v, i) => v === q.correct[i]);
      case 'dropdown':
        return Array.isArray(given) && given.length === q.correct.length &&
               given.every((v, i) => (v || '').trim() === (q.correct[i] || '').trim());
      default:
        return false;
    }
  }
}

function resolveAssetPath(path, basePath) {
  if (!path) return path;
  const isAbsolute = /^(https?:)?\/\//.test(path) || path.startsWith('/') || path.startsWith('data:');
  return isAbsolute ? path : `${basePath}${path}`;
}

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}