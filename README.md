# StudyHub — Networking (README)

> **Actualizare:** am reparat un bug care făcea ca întrebările adăugate în
> fișierele `.js` să nu apară (`const` nu se atașa la `window` — acum toate
> fișierele folosesc `var`, vezi secțiunea 5). Am schimbat și navigarea să
> rămână în **același tab**, plus am adăugat o pagină de **Setări** unde
> alegi unde te duce logo-ul fiecărei materii (secțiunea 8).
>
> **A doua actualizare:** am reparat afișarea imaginilor (`image: "nume.png"`
> — acum se rezolvă automat calea, fără să mai trebuiască să scrii calea
> completă) și am adăugat un tip nou de întrebare, `match`, pentru
> întrebările „Match each X to its Y" (afișate ca listă de perechi, nu ca
> propoziție cu spații libere) — vezi secțiunea 4, literele e) și f).
> Cele 6 întrebări din Domain 2 Post-Assessment care foloseau greșit
> `dragtext` pentru acest tip de listă au fost convertite la `match`.
>
> **A treia actualizare:** am găsit cauza reală a bug-ului din Setări —
> unele browsere țin `localStorage` separat per-folder pe `file://`, deci
> o setare salvată din `settings.html` (rădăcina proiectului) nu ajungea
> sigur la `cursuri.html` (2 foldere mai adânc). Am mutat decizia să se ia
> mereu pe `index.html` (același folder cu `settings.html`), vezi secțiunea
> 8. Am adăugat și: header-ele din panoul video au acum buton de
> restrângere + culoare mai deschisă; sidebar-ul stâng ține minte automat
> ce domenii ai lăsat deschise; și o setare nouă, globală, pentru ca
> secțiunile video să pornească extinse sau restrânse (secțiunea 8).
>
> **A patra actualizare:** am construit fereastra de **Progres** (📊,
> lângă Setări) — istoric complet de teste + timp petrecut, organizat
> exact ca pagina de Cursuri (taburi Networking/Python/Databases →
> domenii → Videos/Pre/Post), cu greșelile exacte per încercare
> expandabile. A necesitat un mecanism nou, `storage-bridge.html` +
> `progress-bridge.js`, ca datele să ajungă sigur într-un singur loc
> indiferent din ce folder pornesc — vezi secțiunea 9. Am reparat și
> bara de scroll inutilă din Cursuri (secțiunea 10) și un bug de
> clipping la highlight-ul întrebării curente din panou.
>
> **A cincea actualizare:** am construit **Databases** complet, cu
> aceeași arhitectură ca Networking (5 domenii, Cursuri + 3 Examene,
> fără Exercise Labs). Domeniile: Database Design, Database Object
> Management, Data Retrieval, Data Manipulation, Troubleshooting.
> Progresul, Setările și tot restul funcționează automat, fără cod nou —
> doar am reutilizat arhitectura existentă. **De verificat:**
> - Domain 1 → secțiunea „Identify Data Protection Measures" avea
>   „Permission of Roles" listat de două ori în captură — am păstrat
>   ambele („Permission of Roles" și „Permission of Roles (2)"), dar
>   verifică dacă al doilea are alt nume în realitate.
> - Domain 2, 3, 4, 5 — listele de capitole video din capturi păreau
>   tăiate la capătul de jos (mai era loc de scroll). Am transcris doar
>   ce s-a văzut; dacă mai sunt capitole, trimite-mi capturi cu restul și
>   le adaug.

> **A șasea actualizare** (sesiune de fixuri + funcții noi):
> - Testul nu mai rămâne editabil la infinit după „Finalizează testul" —
>   inputurile se blochează, iar butonul de finalizare nu mai poate fi
>   apăsat a doua oară (evita dubla înregistrare în Progres).
> - `match`/`dragtext`: în loc de drag&drop nativ (care nu mergea deloc pe
>   telefon), acum atingi/dai click pe o opțiune ca s-o selectezi, apoi pe
>   caseta unde vrei s-o pui — merge identic cu mouse și cu degetul. Pe
>   calculator, drag&drop nativ a fost readăugat ca variantă suplimentară
>   (cine preferă să tragă direct, poate).
> - `order`: în loc de drag, butoane ▲▼ pe fiecare element — fără
>   ambiguitate, merge peste tot la fel.
> - Panoul „Întrebări" pe mobil e acum un sertar care culisează din
>   marginea dreaptă (buton fix 📋 + fundal semi-transparent), nu mai e
>   panoul plutitor trăgut cu mâna de dinainte.
> - Bara de sus din Cursuri are 2 rânduri pe mobil (titlul domeniului nu
>   se mai înghesuie lângă butoane); pe calculator, neschimbată.
> - Fereastra de Progres nu mai e lentă pe ecran mare — am scos
>   `backdrop-filter: blur` (cost de GPU care crește cu suprafața
>   ecranului) și animațiile de `max-height` de la listele expandabile.
>   Arată acum valori la zi chiar în clipa în care o deschizi, nu doar
>   după ce schimbi domeniul/cursul (vezi „checkpoint" în secțiunea 9).
> - Cronometrele (durata unei încercări + timpul per secțiune) se pun
>   acum pe pauză automat cât timp fila e ascunsă sau ai un modal deschis
>   peste pagină, ca să nu se adune timp care nu are legătură cu învățatul.
> - Setare nouă, „Salvare automată a răspunsurilor" (Setări → Teste și
>   examene, implicit activă) — dacă închizi din greșeală un test
>   neterminat, îl reiei exact de unde ai rămas, ordine inclusă.
> - Tip nou de întrebare, `truefalse` (tabel cu afirmații Da/Nu, oricâte
>   rânduri) — vezi secțiunea 4, litera g). Plus o convenție pentru
>   cuvinte subliniate în enunț, fără tip nou de întrebare — vezi aceeași
>   secțiune.

> **A șaptea actualizare:** câmp nou, opțional, `explanation`, pe orice
> întrebare (orice tip) — text care explică răspunsul corect. Apare exact
> când apare și corectarea normală (verde/roșu): fie după „Finalizează
> testul", fie în Modul Învățare, la Enter/Următor — corectă sau greșită,
> la fel — vezi secțiunea 4. Am construit și scheletul complet de
> **Cursuri** pentru **Python** (6 domenii, cu titlurile secțiunilor/
> capitolelor pe care mi le-ai trimis) — vezi secțiunea 1 și 4. Python va
> avea 4 Examene (nu 3, ca Networking/Databases) — de reținut la
> extinderea la Examene.

> **A opta actualizare:** un domeniu poate acum avea tipuri de test
> CUSTOM, diferite de simplul Pre/Post — Python are, pe lângă
> Pre/Post-Assessment, și **Fill in the Blanks** și **Practical
> Application** la fiecare domeniu (Domain 1: Practical Application
> Part 1 + Part 2, separat) — vezi secțiunea 1, „Tipuri de test custom
> per domeniu". Networking/Databases NU sunt afectate — comportamentul
> lor (doar Pre/Post) a rămas exact la fel, fără nicio modificare la
> `cursuri.js`-urile lor.

> **A noua actualizare:** cod (Python/SQL) în enunț sau explicație —
> `<code>...</code>`, randat cu font monospace (Cascadia Code / Consolas),
> indentare păstrată exact — vezi secțiunea 4. Am documentat aici și
> convenția `<br>` pentru rânduri noi în enunț, care exista deja în
> `DEEPSEEK_PROMPT.md` dar îmi lipsea din README. Am reordonat și sidebar-ul
> de la Python: Pre-Assessment → Videos → Fill in the Blanks → Practical
> Application → Post-Assessment (înainte Videos era mereu primul). Cursuri
> are acum și o bifă verde ✓ la orice video vizionat integral, la orice
> materie — vezi secțiunea 3.

> **A zecea actualizare:** cardul unei întrebări nu se mai întinde inutil
> pe verticală la întrebări scurte (`.qe-body` avea `min-height: 220px`,
> redus la `60px`) — se vedea urât mai ales la `blank`. Am întărit și
> regula pentru `blank` în `DEEPSEEK_PROMPT.md`/README: `question`
> TREBUIE să conțină `{{1}}` undeva în text (altfel nu apare inputul,
> fără nicio eroare vizibilă) — și, pentru capturile cu etichetă
> „Answer:" separată sub întrebare (nu inline într-o propoziție), regula
> nouă e să scrie explicit `Answer: {{1}}` la final, ca să reproducă
> același aspect.

> **A unsprezecea actualizare:** salvarea automată (autosave) NU mai ține
> o "poză" completă a întrebărilor — dacă rescriai o întrebare (text, cod,
> imagine) cât aveai un test cu progres salvat în curs, la reluare vedeai
> versiunea VECHE, salvată, nu fișierul proaspăt. Acum se salvează doar
> poziția/ordinea și "rețeta" de amestecare (`questionOrder` +
> `shuffleRecipes`), nu conținutul — la reluare, conținutul e mereu citit
> din fișierul `.js` curent, cu aceleași poziții/amestec ca înainte.
> Sesiunile salvate în formatul vechi (dinainte de acest fix) încă se
> citesc normal, o singură dată, și se rescriu automat în formatul nou la
> următoarea salvare.

> **A douăsprezecea actualizare:** corectat `DEEPSEEK_PROMPT.md` — regula
> pentru `order` zicea greșit „utilizatorul trebuie să tragă elementele"
> (moștenire dintr-o formulare veche), exact opusul realității (`order`
> foloseste butoane ▲▼, NU tragere — asta era sursa confuziei cu
> `dragtext`). Am scos și blocurile de cod indentate în interiorul unor
> bullet-uri (fence-uri imbricate), care randau urât, cu scrollbar
> orizontal, în unele viewere de markdown — înlocuite cu text simplu, ca
> restul exemplelor din fișier.

> **A treisprezecea actualizare:** **Examene la Python — complet, 4 (nu 3
> ca Networking/Databases)** — `exam.css`, `exam-runner.js`, Examen 1-4,
> fiecare cu fișier de întrebări gol + folder `Images/`. Numărul de
> examene per materie e acum configurabil (`EXAM_COUNT` în `script.js`),
> cardurile de pe ecranul de opțiuni se generează dinamic — nu mai sunt
> hardcodate în `index.html`. Am mai adăugat:
> - Câmp nou, opțional, `sourceImage` — numele capturii originale din care
>   a fost extrasă o întrebare (sau un array `{ label, file }`, pentru
>   cazuri cu mai multe capturi per întrebare, ex: `dropdown` cu screenshot
>   separat per opțiune). Vezi secțiunea 4.
> - Setare nouă, **Setări → Teste și examene → „Buton imagine sursă"**
>   (implicit oprit) — activează un buton „🖼 Imagine sursă" lângă
>   „Resetează întrebarea", la orice test, care arată captura din
>   `sourceImage` într-un lightbox (cu taburi, dacă sunt mai multe).
> - Foldere `Images/` — de lângă fiecare fișier de întrebări (Pre/Post-
>   Assessment, Fill in the Blanks, Practical Application, Examene) —
>   aici pui capturile referite de `sourceImage`. Le-am creat deja în
>   structura Python generată; **Networking/Databases nu le au încă**,
>   creează-le manual acolo dacă vrei să folosești funcția și la ele.
> - `DEEPSEEK_PROMPT.md` cere acum modelului să completeze `sourceImage`
>   la FIECARE întrebare, întotdeauna.

> **A paisprezecea actualizare:** blocul `<code>` avea `display:
> inline-block` — se amesteca cu textul dinainte/după (ex: "Evaluate the
> following SQL statement:" și "What would cause..." se lipeau de cutia
> de cod, pe același rând). Schimbat la `display: block` — acum se
> desparte mereu pe rândul lui, indiferent de conținutul din jur.

> **A cincisprezecea actualizare:** am analizat 49 de întrebări reale
> (Databases, Examen 1, SQL) — **niciuna nu are nevoie de un tip nou** de
> întrebare, toate se încadrează în cele 8 tipuri existente. Am documentat
> 4 convenții noi, în `DEEPSEEK_PROMPT.md` și aici: opțiuni de răspuns
> care sunt cod (`single`/`multi`), „completează query-ul" trăgând bucăți
> de cod (`dragtext`, în 3 variante — șablon cu spații goale, pași
> numerotați, canvas gol), tabel de date + cod combinate în aceeași
> întrebare, și liste (`<ul>`/`<ol>`) în enunț — cu stil CSS nou pentru
> ultima. Verificat concret (nu presupus): chip-urile la `dragtext`/
> `match` NU dispar din pool după prima folosire, deci reutilizarea
> („may be used once, more than once, or not at all", frază frecventă la
> SQL) mergea deja, fără nimic de schimbat.

> **A șaisprezecea actualizare:** câmp nou, opțional, `noShuffle: true` —
> oprește amestecul de opțiuni/ordine la o întrebare (implicit, orice
> întrebare se amestecă la fiecare pornire de test). Rolul principal:
> permite întrebări „direct din imagine" — pui captura întreagă la
> `image`, opțiuni cu etichete generice ("Opțiunea 1", "Opțiunea 2"...) și
> `noShuffle: true`, fără să mai transcrii deloc enunțul/opțiunile reale.
> Fără `noShuffle`, etichetele generice s-ar amesteca și nu ar mai
> corespunde cu poziția din imagine — verificat direct în motor, era un
> bug real, nu doar o presupunere. Vezi secțiunea 4.

> **A șaptesprezecea actualizare:** tip nou, al 9-lea, `info` — un slide
> DOAR cu imagine, fără nicio opțiune de răspuns, care nu se scorează
> niciodată (exclus explicit din progres, din „X / Y răspunse" și din
> rezultatul final — testat direct în motor, cu întrebări reale mixate
> cu un slide info, rezultatul nu s-a schimbat). Are Următor/Anterior
> normal, ca restul testului — util pentru capturi pe care nu vrei să le
> transformi acum într-o întrebare reală. Are și un status vizual propriu
> (mov) în panoul de întrebări. Vezi secțiunea 4, litera i).

Platformă locală, offline-first, pentru studiu — dark mode, în română,
inspirată vizual după interfața LearnKey/GMetrix. Deocamdată e construită
complet secțiunea **Networking** și **Databases**; Python e schelet gol,
gata de construit după același model (vezi `Python/README.txt`).

## 1. Structura proiectului

```
SiteFile/
├─ index.html            ← pagina principală (cele 3 carduri)
├─ style.css              stilul paginii principale
├─ script.js              logica de navigare (card → opțiuni → pagină)
│
├─ engine.js              motorul unic de întrebări (folosit peste tot)
├─ engine.css             stilul motorului de întrebări
│
├─ cursuri-engine.js      logica COMUNĂ a paginii Cursuri (identică pentru
│                         toate materiile — vezi secțiunea 3)
├─ cursuri-shared.css     stilul paginii Cursuri (la fel, comun)
│
├─ settings.js            citire/scriere Setări (localStorage)
├─ settings.html          pagina propriu-zisă de Setări
├─ settings.css           stilul paginii de Setări
├─ settings-modal.js       deschide Setări SAU Progres ca fereastră plutitoare
├─ settings-modal.css      fereastra plutitoare (fundal simplu, fără blur)
│
├─ history.html           pagina de Progres (istoric teste + timp petrecut)
├─ history.css            stilul paginii de Progres
├─ history.js             citește/scrie istoricul, taburi pe materii
│
├─ storage-bridge.html    iframe ascuns — vezi secțiunea 10 (de ce există)
├─ progress-bridge.js     funcțiile recordTestAttempt() / recordTimeSpent()
│
├─ Networking/
│  ├─ Cursuri/
│  │  ├─ cursuri.html     pagina cu sidebar stânga + player video / test
│  │  ├─ cursuri.js       DOAR SUBJECT + DOMAINS (titluri, capitole, src video)
│  │  ├─ Domain 1/ … Domain 5/
│  │  │  ├─ Videos/                  (.mp4 + opțional .vtt cu același nume)
│  │  │  ├─ Pre-Assessment/
│  │  │  │  ├─ pre-assessment.js     ← întrebările Pre-Assessment
│  │  │  │  └─ Images/               ← capturi sursă (sourceImage), opțional
│  │  │  └─ Post-Assessment/ (la fel: post-assessment.js + Images/)
│  │
│  └─ Examene/
│     ├─ exam.css
│     ├─ exam-runner.js   logica comună pentru toate examenele (3 la Networking/Databases)
│     ├─ Examen 1/
│     │  ├─ examen1.html
│     │  ├─ examen1-questions.js     ← întrebările Examenului 1
│     │  └─ Images/                  ← capturi sursă (sourceImage), opțional
│     ├─ Examen 2/ (la fel)
│     └─ Examen 3/ (la fel)
│
├─ Databases/  (structură identică cu Networking — 5 domenii, 3 Examene)
│
└─ Python/  (structură EXTINSĂ față de Networking/Databases — vezi mai jos)
   ├─ Cursuri/
   │  ├─ cursuri.html / cursuri.js   (cursuri.js: SUBJECT + DOMAINS, cu `assessments`
   │  │                               custom per domeniu — vezi secțiunea „Tipuri de
   │  │                               test custom per domeniu" mai jos)
   │  └─ Domain 1/ … Domain 6/, fiecare cu:
   │     ├─ Videos/
   │     ├─ Pre-Assessment/ (+ Images/)
   │     ├─ Post-Assessment/ (+ Images/)
   │     ├─ Fill in the Blanks/ (+ Images/)
   │     └─ Practical Application/ (+ Images/) — la Domain 1: Part 1 + Part 2, separat
   └─ Examene/
      ├─ exam.css / exam-runner.js
      └─ Examen 1/ … Examen 4/ (Python are 4, nu 3 — vezi EXAM_COUNT în script.js)
```

**Numărul de Examene per materie** e configurabil, în `script.js`, în
`EXAM_COUNT = { Networking: 3, Databases: 3, Python: 4 }` — cardurile de
pe ecranul de opțiuni (index.html) se generează dinamic din acest obiect,
nu mai sunt hardcodate în HTML. Dacă mai adaugi vreodată un Examen la o
materie, crești doar numărul de-aici — restul (buildPath, navigare) merge
automat.

**De ce e construit așa:** fiecare test/evaluare are propriul fișier `.js`
care conține DOAR datele întrebărilor (un array). Motorul care le afișează
(`engine.js`) e unic și partajat de toate testele, așa cum ai cerut. Așa
poți completa fișierele de întrebări unul câte unul, fără să atingi codul
de randare.

Același principiu se aplică și paginii Cursuri: `cursuri-engine.js` +
`cursuri-shared.css` (la rădăcină) conțin TOATĂ logica/stilul, identice
pentru orice materie — nu se copiază, nu se editează per materie. Singurul
lucru care diferă între Networking/Databases/Python e `cursuri.js`, mic,
cu DOAR `SUBJECT` și `DOMAINS`. `cursuri.html` diferă și el minim (doar
titlul paginii + emoji-ul din brand), fără nicio logică proprie.

⚠️ **Ordinea scripturilor în `cursuri.html` contează**: `cursuri.js`
(datele materiei) TREBUIE încărcat înaintea lui `cursuri-engine.js` (care
le folosește ca variabile globale — `SUBJECT`, `DOMAINS`). Dacă adaugi
Cursuri la o materie nouă (Python), copiază `cursuri.html` de la
Networking/Databases ca șablon (schimbi doar titlul + emoji) și păstrează
exact această ordine.

## 2. Cum deschizi site-ul

Deschide `index.html` direct în browser (dublu-click, funcționează pe
`file://`, la fel ca la GMetrix Student). Nu e nevoie de server local.

Fluxul de navigare:
1. `index.html` → alegi un card (Databases / Networking / Python).
2. Apar opțiunile materiei: **Cursuri** + câte un **Examen** pentru
   fiecare din `EXAM_COUNT[materie]` (3 la Networking/Databases, 4 la
   Python) — generate dinamic, vezi secțiunea 1.
3. Fiecare opțiune se deschide în **același tab** (nu tab nou).
   (Networking și Databases sunt „active"; Python încă arată un mesaj
   „în lucru" — vezi `READY_SUBJECTS` din `script.js` când vrei să-l
   activezi și pe el.)

Din interiorul Cursurilor/Examenelor, apeși pe numele materiei
(ex: „🌐 Networking") ca să te întorci — vezi secțiunea 8 (Setări) pentru
a alege exact unde te duce acel click.

## 3. Pagina „Cursuri" (cursuri.html)

- **Sidebar stânga**: fiecare domeniu, cu 🎥 Videos + orice teste are
  domeniul respectiv (implicit: 📊 Pre-Assessment + 📊 Post-Assessment —
  dar poate fi altfel, vezi „Tipuri de test custom per domeniu" mai jos).
  *(„Exercise Labs" a fost exclus intenționat, conform cerinței tale.)*
  Fiecare header de domeniu se poate restrânge/extinde (click pe el,
  săgeata „›" se rotește). Domeniul care conține item-ul curent selectat
  se extinde automat, ca să vezi mereu ce e activ. Domeniul/itemul curent
  apare evidențiat, iar iconițele lui devin „active" (culoare verde
  `--accent`); restul rămân gri, exact ca în referințele GMetrix pe care
  mi le-ai trimis.
- **Zona video**: player HTML5 + panou din dreapta cu capitolele grupate
  pe secțiuni (ex: „Understand Switches", „Understand Routers"...) — click
  pe un capitol schimbă videoclipul redat. Când un videoclip ajunge la
  final (`ended`), capitolul primește o bifă verde ✓ în listă — reper
  vizual de unde ai rămas. Salvat în `localStorage`
  (`studyhub_watched_videos_v1`), persistent între vizite, per materie +
  domeniu + capitol. Merge automat la orice materie, fără nimic de adăugat
  în `cursuri.js`.
- **Orice test dintr-un domeniu** (Pre/Post-Assessment, sau oricare din
  tipurile custom de mai jos): randează testul cu `QuestionEngine`, citind
  din fișierul `.js` corespunzător al domeniului.

### Tipuri de test custom per domeniu (opțional)

Implicit, orice domeniu are, în ordinea asta: 🎥 Videos, 📊 Pre-Assessment,
📊 Post-Assessment — exact comportamentul de dinainte, valabil azi pentru
**Networking** și **Databases** (`cursuri.js`-urile lor NU au fost atinse,
nu au nevoie de nimic în plus).

O materie poate declara, per domeniu, o listă `assessments` proprie care
înlocuiește ÎNTREAGA listă implicită de mai sus — inclusiv unde apare
Videos în ea (nu neapărat primul). **Python** face exact asta: ordinea e
Pre-Assessment → Videos → Fill in the Blanks → Practical Application →
Post-Assessment (Domain 1 are Practical Application împărțit în Part 1 +
Part 2, între Fill in the Blanks și Post-Assessment). Exemplu, din
`Python/Cursuri/cursuri.js`:

```js
{
  id: 'd2',
  title: 'Domain 2: Branching and Iteration',
  folder: 'Domain 2',
  videoSections: [...],
  assessments: [
    { key: 'pre', label: 'Pre-Assessment', icon: '📊' },
    { key: 'videos', label: 'Videos', icon: '🎥' },
    { key: 'fillblanks', label: 'Fill in the Blanks', icon: '✏️',
      questionsVar: 'QUESTIONS_D2_FILLBLANKS', folder: 'Fill in the Blanks' },
    { key: 'practical', label: 'Practical Application', icon: '💻',
      questionsVar: 'QUESTIONS_D2_PRACTICAL', folder: 'Practical Application' },
    { key: 'post', label: 'Post-Assessment', icon: '📊' },
  ],
}
```

Reguli:
- `key` — identificator scurt, unic în cadrul domeniului (folosit intern,
  la navigare/progres — nu-l schimba după ce ai progres salvat pe el).
- Poziția din array = poziția din sidebar ȘI din navigarea secvențială
  (‹ ›) — pune-le exact în ordinea în care vrei să apară.
- `label` / `icon` — ce apare în sidebar.
- Intrarea `videos` (key: `'videos'`) NU are `questionsVar`/`folder` — e
  cazul special, randat de player-ul video, nu de motorul de întrebări.
- `questionsVar` — numele EXACT al variabilei globale (`var ...`) definite
  în fișierul `.js` al testului — trebuie încărcat în `cursuri.html`,
  ÎNAINTE de `cursuri-engine.js`, la fel ca Pre/Post.
- `folder` — numele folderului fizic unde stă acel fișier `.js`, relativ
  la folderul domeniului (ex: `Domain 2/Fill in the Blanks/fillblanks.js`).
- Pre/Post STANDARD (fără `questionsVar`/`folder`) nu au nevoie de ele —
  motorul le rezolvă automat, ca înainte (`QUESTIONS_D{n}_PRE`/`POST`,
  foldere „Pre-Assessment"/„Post-Assessment").

Progresul (istoric + timp petrecut) se salvează automat per tip, la fel ca
Pre/Post — cheia e `{SUBJECT}_{domainId}_{key}` (ex: `Python_d2_practical`).
Pagina de Progres (`history.js`) citește aceeași listă `assessments` —
dacă adaugi un tip nou în `cursuri.js`, adaugă-l și acolo, în `SUBJECTS`,
identic (`key`+`label`), altfel nu apare în Progres.



### Adăugarea fișierelor video

Titlurile capitolelor sunt deja completate în `cursuri.js` (extrase din
capturile pe care mi le-ai dat). Câmpul `src` e gol. Când îmi dai numele
fișierelor `.mp4`:

1. Pune fișierele în `Domain N/Videos/`.
2. În `cursuri.js`, la domeniul respectiv, completează DOAR numele
   fișierului (nu calea completă — se construiește automat):
   ```js
   { title: 'Introduction', src: '01-introduction.mp4' }
   ```

**Subtitrări (`.vtt`):** dacă pui, în același folder `Videos/`, un fișier
cu EXACT același nume ca videoclipul dar cu extensia `.vtt` (ex:
`01-introduction.vtt` lângă `01-introduction.mp4`), apare automat, fără
nicio configurare suplimentară — playerul caută mereu `.vtt`-ul cu numele
derivat din `src`. Dacă fișierul `.vtt` nu există, playerul funcționează
normal, pur și simplu fără subtitrări (nicio eroare). Subtitrările NU
pornesc automat afișate — apare un buton „CC" nativ al browserului în
controalele playerului, din care le activezi.

⚠️ **De verificat:** la Domain 4 → „Understand IPv6", ultimul capitol din
capturi apărea ca „File Address Types" — pare o eroare de transcriere din
interfața originală (probabil „IPv6 Address Types"). Am pus „IPv6 Address
Types" în `cursuri.js`; verifică și corectează dacă e nevoie.

### Pe mobil, pagina Videos nu se scrolează

Doar lista de capitole din dreapta (jos, pe mobil) are scroll propriu —
playerul rămâne mereu vizibil, fix, în partea de sus. Pre/Post-Assessment
rămân cu scroll normal (au conținut de lungime variabilă, nu are sens să
fie fixate). Tehnic: `selectItem()` din `cursuri-engine.js` pune o clasă,
`c-main-video`, pe containerul principal DOAR când tab-ul activ e Videos;
`cursuri-shared.css` o folosește ca să transforme `.c-main` într-un
container cu `overflow: hidden` pe mobil, cu playerul la înălțime naturală
și lista de capitole ocupând tot spațiul rămas (`flex: 1`, cu scroll intern).

## 4. Schema unei întrebări (folosită peste tot: Pre/Post-Assessment + Examene)

Fiecare întrebare e un obiect JS cu această formă:

```js
{
  id: "d1_pre_01",       // identificator unic, orice string
  type: "single",        // "single" | "multi" | "order" | "blank" | "dragtext" | "match" | "truefalse" | "dropdown" | "info"
  question: "...",       // textul întrebării
  image: null,           // null SAU doar numele fișierului, ex: "schema1.png"
  options: [...],        // vezi mai jos, diferă în funcție de tip
  pairs: [...],          // DOAR la tipul "match" — vezi litera f) mai jos
  statements: [...],     // DOAR la "truefalse" (litera g) și "dropdown" (litera h)
  correct: [...],        // vezi mai jos, diferă în funcție de tip
  explanation: "...",    // OPȚIONAL — vezi nota de mai jos
  sourceImage: "...",    // OPȚIONAL — vezi nota de mai jos
  noShuffle: true        // OPȚIONAL — vezi nota de mai jos
}
```

### Câmpul opțional `explanation` (orice tip de întrebare)
Dacă îl adaugi, e text (poate conține HTML, la fel ca `question` — deci
merge și `<u>`, `<table>`, etc.) care explică răspunsul corect:
```js
explanation: "DNS rezolvă nume în adrese IP; DHCP alocă automat adresele — de-asta primul spațiu e DNS, al doilea DHCP."
```
Apare într-o casetă distinctă sub întrebare, în același moment în care
apare și corectarea normală (verde/roșu): fie **după „Finalizează
testul"**, fie **în Modul Învățare, imediat ce ai apăsat Enter/Următor**
pe o întrebare la care ai răspuns deja — la fel indiferent dacă răspunsul
a fost corect sau greșit. Dacă răspunsul era corect în Modul Învățare,
reține că testul trece automat mai departe după 1 secundă — s-ar putea
să fie prea puțin timp să citești o explicație lungă (spune-mi dacă vrei
să mărim acea pauză când există `explanation` pe întrebare). Dacă nu
adaugi câmpul, nu se întâmplă nimic diferit — e complet opțional,
întrebare cu întrebare.

### Câmpul opțional `sourceImage` (orice tip de întrebare)
Numele fișierului capturii de ecran originale din care a fost extrasă
întrebarea — DOAR pentru verificare de către tine, nu se arată niciodată
automat celui care dă testul. Se activează din **Setări → Teste și
examene → „Buton imagine sursă"** (implicit oprit) — când e pornită,
apare un buton „🖼 Imagine sursă" lângă „Resetează întrebarea", la orice
test (Cursuri ȘI Examene), dar DOAR la întrebările care au acest câmp
completat.

Forma simplă (o singură captură):
```js
sourceImage: "os-path-exists.png"
```
Forma cu mai multe capturi (ex: `dropdown`, unde enunțul are propria
captură ȘI fiecare opțiune dintr-un meniu are propria ei captură) — un
array de `{ label, file }`, cu taburi în lightbox ca să comuți între ele:
```js
sourceImage: [
  { label: "Întrebare", file: "d1_post_05_q.png" },
  { label: "Opțiunea 1", file: "d1_post_05_opt1.png" },
  { label: "Opțiunea 2", file: "d1_post_05_opt2.png" },
]
```
Fișierele stau într-un folder `Images/`, de lângă fișierul de întrebări
(ex: `Domain 1/Post-Assessment/Images/`, sau `Examene/Examen 1/Images/`
la examene) — creezi tu acest folder și pui capturile acolo, cu numele
exact din `sourceImage`. `DEEPSEEK_PROMPT.md` cere modelului să completeze
acest câmp la FIECARE întrebare — dacă nu-l completezi tu manual mai
târziu sau nu îl folosești deloc, nu se întâmplă nimic diferit, câmpul e
complet opțional.

### Câmpul opțional `noShuffle` (orice tip de întrebare)
Implicit, motorul amestecă opțiunile/ordinea unei întrebări de fiecare
dată când pornești testul (randomizare — vezi și „A unsprezecea
actualizare" din changelog, despre salvarea acestei amestecări). Dacă
adaugi `noShuffle: true` pe o întrebare, acea întrebare NU se mai
amestecă deloc — rămâne exact în ordinea din date, de fiecare dată.

### Întrebare „direct din imagine" (fără transcriere)
Combinând `image` (câmpul normal, NU `sourceImage`) cu `noShuffle` și
opțiuni cu etichete generice, poți sări complet peste transcrierea
enunțului/opțiunilor dintr-o captură — utilă când transcrierea exactă (cod
SQL complex, tabele, diagrame) ar dura mult sau ar risca greșeli. Toată
interfața de test (buton Următor, progres, verificare, istoric) merge la
fel ca la orice altă întrebare — doar conținutul vizibil e chiar captura,
nu text scris de tine:
```js
{
  id: "ex1_05",
  type: "single",
  question: "", // sau o instrucțiune scurtă, ex: "Alege răspunsul corect."
  image: "ex1_05_full.png", // captura ÎNTREAGĂ — enunț + toate opțiunile vizibile
  options: ["Opțiunea 1", "Opțiunea 2", "Opțiunea 3", "Opțiunea 4"], // etichete generice, NU textul real
  correct: [2], // indexul opțiunii corecte DIN IMAGINE, în ordinea în care apar acolo
  noShuffle: true, // OBLIGATORIU aici — altfel etichetele generice se amestecă și nu mai corespund cu poza
}
```
⚠️ `noShuffle: true` e OBLIGATORIU la acest tipar — fără el, „Opțiunea 2"
ar putea apărea prima pe ecran, complet desincronizată de la ce arată
captura. Verificat direct în motor (nu presupus): fără `noShuffle`,
opțiunile generice chiar se amestecau.

Merge la fel la `match`/`truefalse`/`dropdown`/`order` — pui etichete
generice (ex: „Rândul 1"/„Rândul 2" la `truefalse`, „Eticheta 1" la
`pairs` pentru `match`) și `noShuffle: true`, cu imaginea întreagă
arătând tabelul/lista reală. Fișierul de imagine stă direct în folderul
testului (ca la `image` normal — NU în `Images/`, ăla e doar pentru
`sourceImage`).

### a) `single` — alegere unică (radio button)
```js
{
  id: "d1_pre_01",
  type: "single",
  question: "Care e viteza maximă a 802.11g?",
  image: null,
  options: ["11 Mbps", "54 Mbps", "128 Mbps", "600 Mbps"],
  correct: [1]              // indexul răspunsului corect (0 = primul)
}
```

### b) `multi` — alegere multiplă (checkbox-uri)
```js
{
  id: "d2_pre_03",
  type: "multi",
  question: "Care dintre următoarele sunt topologii de rețea?",
  image: null,
  options: ["Star", "Mesh", "DHCP", "Bus"],
  correct: [0, 1, 3]         // indecșii TUTUROR răspunsurilor corecte
}
```

### c) `order` — pune elementele în ordinea corectă (butoane ▲▼, nu drag)
```js
{
  id: "d5_post_02",
  type: "order",
  question: "Ordonează pașii procesului de troubleshooting.",
  image: null,
  options: [
    "Identifică problema",
    "Stabilește o teorie",
    "Testează teoria",
    "Rezolvă problema",
    "Documentează"
  ],
  correct: [0, 1, 2, 3, 4]   // ordinea corectă, ca indecși în array-ul options
}
```
Utilizatorul reordonează cu butoane ▲▼ pe fiecare element (nu drag & drop
— merge identic pe telefon și pe calculator, fără ambiguitate). `options`
e amestecat automat la fiecare încărcare a testului (motorul randomizează
implicit ordinea afișată — nu trebuie făcut nimic special în fișierul de
întrebări, doar pui `options`/`correct` în ordinea corectă ca mai sus).

### d) `blank` — completează spațiul liber (răspuns tastat)
Folosește `{{1}}`, `{{2}}`, ... direct în textul întrebării pentru fiecare
spațiu liber:
```js
{
  id: "d4_pre_07",
  type: "blank",
  question: "Protocolul {{1}} rezolvă nume de domenii în adrese IP, iar {{2}} alocă automat adrese IP.",
  image: null,
  options: [],                    // nu se folosește la acest tip
  correct: ["DNS", "DHCP"]        // câte un răspuns acceptat per spațiu, în ordine
}
```
Poți accepta mai multe variante corecte pentru un spațiu, folosind un
array în loc de string:
```js
correct: [["DNS", "dns server"], "DHCP"]
```
⚠️ **Obligatoriu**: `question` trebuie să conțină cel puțin un `{{1}}`
undeva în text — fără el, motorul nu are unde desena inputul, iar
întrebarea rămâne needitabilă, FĂRĂ nicio eroare vizibilă. Nu se adaugă
niciodată automat la finalul textului.

Unele capturi GMetrix arată spațiul liber ca un rând separat, sub
întrebare, gen „Answer: [_______]" (nu inline într-o propoziție). Pentru
acest caz, scrie chiar tu `Answer: {{1}}` la finalul lui `question`:
```js
question: "For this line of code, which built-in Python module needs to be imported?<br><br><code>text_stream.seek(0)</code><br><br>Answer: {{1}}"
```
Dacă în captură NU apare eticheta „Answer:" (blank-ul e deja inline, ex:
`import {{1}}`), NU adaugi „Answer:" — pui `{{1}}` direct la locul lui
firesc din text/cod, fără etichetă în plus.

### e) `dragtext` — pui un „chip" într-un spațiu liber DIN MIJLOCUL unei propoziții
Are exact aceeași sintaxă `{{1}}`, `{{2}}` ca la `blank`, dar în loc de
input, utilizatorul alege un cuvânt dintr-o listă (`options`) și-l pune
direct în propoziție (atinge/dă click pe opțiune, apoi pe spațiul liber —
merge la fel pe telefon și pe calculator; pe calculator, drag&drop nativ
merge și el, ca variantă suplimentară):
```js
{
  id: "d3_post_05",
  type: "dragtext",
  question: "Un switch operează la nivelul {{1}} al modelului OSI, iar un router la nivelul {{2}}.",
  image: null,
  options: ["2", "3", "4", "1"],     // „chip"-urile disponibile (poți include și distractori)
  correct: ["2", "3"]                // valoarea corectă pentru fiecare spațiu, în ordine
}
```
⚠️ **Nu folosi `dragtext` pentru întrebări „Match each X to its Y"** (o
listă de perechi, ex: „Match each leased line to its top speed") — acelea
sunt tipul `match` de mai jos. `dragtext` e doar pentru propoziții
narative cu spații libere în mijlocul textului.

### f) `match` — „Match each X to its Y" (listă de perechi)
Cel mai des întâlnit tip la testele GMetrix cu drag & drop — etichetele
fixe apar de obicei în DREAPTA capturii, iar variantele de răspuns
disponibile în STÂNGA (la fel randează și motorul: pool-ul de opțiuni în
stânga, rândurile cu etichete în dreapta):
```js
{
  id: "d2_post_11",
  type: "match",
  question: "Match each leased line to its top speed.",
  image: null,
  pairs: ["T1", "E3", "T3", "E1"],                              // etichetele fixe, în ordine
  options: ["1.544 Mbps", "44.736 Mbps", "2.048 Mbps", "34.368 Mbps"],  // „chip"-urile disponibile
  correct: ["1.544 Mbps", "34.368 Mbps", "44.736 Mbps", "2.048 Mbps"]   // răspunsul corect per element din "pairs", în aceeași ordine
}
```
Se afișează ca listă: fiecare rând are eticheta din `pairs` + o zonă unde
pui un „chip" din `options` (atinge/click pentru a selecta, apoi
atinge/click pe casetă — plus drag&drop nativ, opțional, pe calculator).
Merge și pentru variantele cu imagine (ex: floor plan cu „Box 1", „Box
2"...) — pui etichetele „Box 1"..„Box N" în `pairs` și adaugi `image`.

### g) `truefalse` — tabel cu afirmații Da/Nu (oricâte rânduri)
Pentru întrebări gen „For each of the following statements, select Yes if
the statement is true and No if it is false" — un tabel cu o afirmație
per rând, fiecare cu propriile butoane radio independente:
```js
{
  id: "d4_pre_09",
  type: "truefalse",
  question: "For each of the following statements, select Yes if the statement is true and No if it is false.",
  image: null,
  statements: [
    "A secondary name server gets its data from another name server using a zone transfer.",
    "AAAA records resolve hostnames to IPv4 addresses.",
    "Entries in a HOSTS file on a local computer take precedence over DNS."
  ],
  labels: ["Yes", "No"],           // opțional — dacă lipsește, implicit exact asta
  correct: [true, false, true]     // true = prima coloană (labels[0]), false = a doua (labels[1])
}
```
`statements` poate avea oricâte elemente (2, 5, 10...), nu doar 3 — fiecare
devine un rând în tabel. `labels` schimbă doar textul din header (ex.
`["True","False"]`, `["Adevărat","Fals"]`) — sunt tot 2 coloane, mereu.
Toate rândurile trebuie corecte ca întrebarea să conteze ca răspunsă corect.

### h) `dropdown` — completează propoziții cu meniuri `<select>` (oricâte)
Pentru întrebări gen „Use the dropdown menus to complete each statement" —
una sau mai multe propoziții, fiecare cu propriul meniu de alegere:
```js
{
  id: "d5_pre_03",
  type: "dropdown",
  question: "A user in your company cannot connect to the Internet. You execute the ipconfig command...",
  image: "ipconfig-result.png",
  statements: ["The problem is ....", "The solution is ...."],
  options: [
    ["Incorrect subnet mask", "Incorrect default gateway", "DHCP is disabled"],
    ["Enable DHCP", "Change the default gateway", "Change the subnet mask"]
  ],
  correct: ["Incorrect default gateway", "Change the default gateway"]
}
```
`statements` poate avea oricâte elemente (1, 2, 5...), nu doar 2 ca în
exemplu — fiecare devine un rând cu propriul dropdown. `options` e un
array DE ARRAY-URI — o listă de variante separată pentru FIECARE rând, în
aceeași ordine ca `statements` (pot avea număr diferit de variante între
ele). `correct` conține răspunsul corect ca TEXT (nu index), tot în
aceeași ordine. Spre deosebire de `truefalse`/`match`, ordinea rândurilor
(`statements`) NU se amestecă automat (poate avea o logică proprie, ex.
„problema" înaintea „soluției") — dar opțiunile din interiorul fiecărui
dropdown SE amestecă.

### i) `info` — slide doar cu imagine, fără scor
Nu e o întrebare propriu-zisă — e o „pagină" de răsfoit, cu
Următor/Anterior ca restul testului, dar FĂRĂ nicio opțiune de răspuns și
FĂRĂ să afecteze scorul/progresul (exclus explicit din calculul de
„X / Y răspunse" și din rezultatul final — verificat direct în motor).
```js
{
  id: "ex1_09",
  type: "info",
  image: "captura-prea-complexa.png",
  question: "" // opțional — poate fi și un text scurt sub imagine
}
```
Nu are `options`, `pairs`, `statements`, `labels` sau `correct` — nu le
adaugi deloc. Util pentru capturi pe care nu vrei să le transformi acum
într-o întrebare reală (prea complexe, risc de greșeală la transcriere),
dar tot vrei să le poți vedea în ordine, alături de restul testului —
util mai ales dacă vrei să te ajut eu, direct în chat, să interpretez
o parte din ele mai târziu, fără să te pun pe verificat 40+ obiecte JSON
unul câte unul.

### Cuvinte/fraze subliniate în enunț (orice tip de întrebare)
Nu există un tip special pentru asta — textul din `question` se randează
direct ca HTML, deci pui `<u>` și `</u>` în jurul porțiunii subliniate,
exact ca în captură:
```js
question: "A router is a device that functions primarily on the <u>Data Link</u> layer of the OSI Model."
```
Se folosește cel mai des la `single` (întrebări „Evaluate the underlined
words... select the correct answer"), dar merge la orice tip — nu are
nevoie de nimic altceva în cod, doar tag-ul direct în text.

### Tabele în enunț (orice tip de întrebare)
La fel ca la subliniere — dacă o întrebare are informații structurate
într-un tabel (nu unul cu butoane radio Yes/No, acela e tipul `truefalse`
de mai sus; ăsta e un tabel doar informativ, fără interacțiune), pui HTML
de tabel direct în `question`:
```js
question: "Match the port number to its protocol:<table><tr><th>Port</th><th>Protocol</th></tr><tr><td>21</td><td>FTP</td></tr><tr><td>80</td><td>HTTP</td></tr></table>"
```
`engine.css` are deja stil pregătit pentru `<table>`/`<th>`/`<td>` simple
(fără nevoie de `style=`/`class=`) — borduri, header evidențiat, culori
potrivite temei dark. Pe telefon, dacă tabelul e prea lat, scrolează doar
el pe orizontală, nu toată pagina.
*(Notă tehnică: textul întrebării era înainte într-un `<p>`, care nu
poate conține valid un `<table>` — browserul rupea automat paragraful,
stricând stilul. Am schimbat la `<div>` peste tot, identic vizual, dar
corect pentru orice HTML din enunț.)*

### Rânduri noi / paragrafe în enunț (orice tip de întrebare)
La fel ca la subliniere și tabele — dacă textul dintr-o captură are un
rând nou vizibil în sursă (nu doar întins din cauza lățimii ferestrei),
pui `<br>` exact acolo, direct în `question`:
```js
question: "Read the scenario below.<br><br>A user reports slow file transfers on the network."
```

### Cod (Python/SQL) în enunț sau explicație (orice tip de întrebare)
Încadrează codul în `<code>` și `</code>`, direct în `question` sau
`explanation` — merge și pe o mențiune scurtă inline, și pe un bloc întreg
de mai multe rânduri (cu `<br>` pentru fiecare rând nou, ca mai sus):
```js
question: "Input the missing code to import the io library.<br><br><code>import {{1}}<br>game_stream = io.StringIO()<br>print(game_stream.read())</code>"
```
Se randează cu font monospace (**Cascadia Code**, cu **Consolas** ca
rezervă — amândouă fonturi de sistem, fără nicio dependență de internet,
la fel ca restul site-ului), într-o cutie cu fundal ușor diferit, ca să se
distingă clar de restul textului. `white-space: pre-wrap` păstrează EXACT
spațiile de indentare pe care le scrii — important la Python, unde
indentarea e parte din sintaxă, nu doar stil vizual. Cutia se desparte
SINGURĂ pe rândul ei, automat (`display: block`) — nu se mai amestecă
niciodată cu textul dinainte/după, indiferent dacă pui sau nu `<br><br>`
în jurul ei (rămâne opțional, doar cosmetic — un rând gol în plus).

### Opțiuni de răspuns care sunt cod (tipurile `single`/`multi`)
`options` acceptă ACELAȘI HTML ca `question` — deci o variantă de răspuns
poate fi ea însăși un bloc de cod întreg, încadrat în `<code>`:
```js
options: [
  "<code>SELECT lastname, firstname<br>FROM customers<br>WHERE sales >=50000 AND (...)</code>",
  "<code>SELECT lastname, firstname<br>FROM customers<br>WHERE sales >=50000 OR (...)</code>",
]
```
Restul schemei (`correct`: indecși) rămâne exact la fel — doar textul
opțiunii e cod în loc de cuvinte simple.

### „Completează query-ul" (tipul `dragtext`)
Trei variante ale aceluiași tip, pentru capturi unde tragi bucăți de cod
dintr-un pool ca să construiești o interogare — alegi ce pui în `question`:

- **Șablon cu spații goale în interiorul codului** (ex: `CREATE TABLE` cu
  câmpuri lipsă) — codul complet, cu `{{1}}`, `{{2}}`... exact la spațiile
  libere:
  ```js
  question: "<code>CREATE TABLE [dbo].[Member]<br>(<br>[Id] {{1}},<br>[FirstName] NCHAR(255) NULL,<br>[LastName] {{2}},<br>{{3}},<br>[DateOfBirth] {{4}},<br>[PhoneNumber] NCHAR(10) NULL,<br>{{5}}<br>)</code>"
  ```
- **Pași numerotați goi** („Step 1"..."Step N") — un blank per pas:
  ```js
  question: "Step 1: {{1}}<br>Step 2: {{2}}<br>Step 3: {{3}}"
  ```
- **Canvas complet gol** (construiești de la zero) — doar blank-uri:
  ```js
  question: "{{1}}<br>{{2}}<br>{{3}}"
  ```
La toate: `options` = toate bucățile disponibile (inclusiv distractori
nefolosiți), `correct` = valoarea corectă pentru fiecare `{{n}}`, în
ordine — schema `dragtext` normală, neschimbată (litera e) mai sus).
Motorul permite deja ca ACEEAȘI bucată să fie trasă la mai multe blank-uri
deodată — chip-urile nu dispar din pool după prima folosire — deci fraza
„each item may be used once, more than once, or not at all", frecventă la
capturile astea, funcționează deja, fără nimic special de făcut în date.

### Tabel de date + cod, în aceeași întrebare
`<table>` și `<code>` se pot combina liber în același `question`:
```js
question: "Evaluate the following table of data:<table><tr><th>ID</th><th>Salary</th></tr><tr><td>1</td><td>83000</td></tr></table>What is the result of the following query?<br><br><code>SELECT MAX(salary) FROM employee;</code>"
```

### Liste (orice tip de întrebare)
Pentru liste cu marcatori, `<ul>` + câte un `<li>` per element:
```js
question: "Each record will contain:<ul><li>First name</li><li>Last name</li></ul>"
```
Pentru liste numerotate, `<ol>` în loc de `<ul>`, la fel.

### Notă despre amestecare (shuffle)
Motorul amestecă automat, la fiecare încărcare a testului: ordinea
întrebărilor, opțiunile la `single`/`multi`, ordinea inițială afișată la
`order`, „chip"-urile disponibile la `dragtext`/`match`, și rândurile la
`truefalse`. Nu trebuie să faci nimic special pentru asta în fișierele de
întrebări — pui datele corecte (`correct` etc.) ca în exemplele de mai
sus, indiferent de ordine, iar motorul se ocupă de restul.

Excepție: la `dropdown`, doar variantele din INTERIORUL fiecărui dropdown
se amestecă — ordinea rândurilor (`statements`) rămâne fixă, exact cum ai
scris-o, pentru că poate avea o logică narativă proprie.

### Câmpul `image`
Orice tip de întrebare poate avea o imagine. Pune DOAR NUMELE FIȘIERULUI
(nu calea completă) — calea se completează automat, pe baza domeniului
și a tipului de test din care face parte întrebarea:
```js
image: "topologie1.png"
```
Fișierul trebuie pus lângă `.js`-ul testului respectiv, ex:
`Domain 2/Pre-Assessment/topologie1.png`. Dacă nu ai imagine, lasă
`image: null`.

## 5. Unde pui întrebările

| Fișier | Variabilă globală obligatorie |
|---|---|
| `Domain N/Pre-Assessment/pre-assessment.js` | `QUESTIONS_D{N}_PRE` (ex: `QUESTIONS_D1_PRE`) |
| `Domain N/Post-Assessment/post-assessment.js` | `QUESTIONS_D{N}_POST` |
| `Examene/Examen X/examenX-questions.js` | `EXAM_TITLE` (string) + `EXAM_QUESTIONS` (array) + `EXAM_ID` (string) |

Fiecare fișier există deja, gol, cu comentarii-exemplu. Trebuie doar să
înlocuiești array-ul cu întrebările reale — numele variabilei NU trebuie
schimbat, altfel `cursuri-engine.js` / `exam-runner.js` nu le va găsi.

⚠️ **`EXAM_ID` e ușor de uitat, dar esențial** — fără el, `exam-runner.js`
nu are cum să lege încercarea de o cheie în Progres, și scorul acelui
examen pur și simplu NU se salvează, fără nicio eroare vizibilă. Trebuie
să includă prefixul materiei, la fel ca restul cheilor (vezi secțiunea 9,
„Namespacing pe materie"), ex: `var EXAM_ID = "Networking_exam1";`.

⚠️ **Important:** declară variabila cu `var`, NU cu `const` sau `let`.
Site-ul caută întrebările prin `window["QUESTIONS_D1_PRE"]`, iar doar
`var` atașează automat o variabilă globală la `window` (asta a fost
bug-ul inițial — dacă ai copiat cod care folosea `const`, schimbă-l în
`var` și va funcționa).

## 6. Fluxul de lucru recomandat (cu Deepseek)

1. Deschide `DEEPSEEK_PROMPT.md` (lângă acest README).
2. Copiază promptul de acolo în Deepseek.
3. Atașează capturile cu întrebările pentru un domeniu/examen anume.
4. Deepseek îți va da direct codul JS gata de lipit în fișierul potrivit.
5. Lipești rezultatul peste conținutul fișierului `.js` corespunzător
   (păstrează numele variabilei globale!).
6. Deschide `cursuri.html` sau `examenX.html` și testează.

## 7. Extinderea la Python / Databases

Când vrei să construiesc și celelalte două secțiuni, spune-mi — voi crea
aceeași arhitectură (Cursuri/Domain-uri/Videos+Pre+Post + Examene), doar
că domeniile/capitolele vor fi altele. Codul din `engine.js` rămâne
neschimbat, e complet independent de materie.

## 8. Setări

Pagina `settings.html` (link „⚙ Setări" din topbar-ul paginii principale)
are două părți.

### a) Unde te duce logo-ul fiecărei materii

Alegi, per materie, ce se întâmplă când apeși pe numele ei
(„🌐 Networking" etc.) din interiorul Cursurilor sau Examenelor:

- **Pagina principală (StudyHub)** — te duce la `index.html` (ecranul cu
  cele 3 carduri). Aceasta e valoarea implicită.
- **Ecranul de opțiuni al materiei** — te duce direct la ecranul cu
  Cursuri/Examen 1/2/3 al acelei materii, sărind peste ecranul cu cele
  3 carduri.
- **Direct la Cursuri** — sare peste tot și te duce direct în cursul
  materiei. Dacă ești deja acolo, logo-ul te resetează la primul item
  (Domain 1 — Videos).

**De ce nu funcționa înainte:** unele browsere (mai ales pe `file://`)
țin `localStorage` separat per-folder. `settings.html` e în rădăcina
proiectului, dar `cursuri.html` e la 2 foldere distanță
(`Networking/Cursuri/`) — citirea directă a setării de acolo nu era
sigură, și de-aia logo-ul te ducea mereu la comportamentul implicit
(pagina principală), indiferent ce alegeai în Setări.

**Fix-ul:** decizia nu se mai ia pe `cursuri.html`/`examenX.html`. Acum,
click pe logo te duce mereu întâi pe `index.html?logoFrom=Networking`
(sau `?logoFrom=Python`, etc.), iar `index.html` — fiind în ACELAȘI folder
cu `settings.html` — citește Setările sigur și redirecționează mai
departe, dacă e nevoie (vezi `initFromQuery()` din `script.js`).

### b) Secțiuni video (Cursuri) — restrânse sau deschise

Setare globală: capitolele video din panoul din dreapta (ex: „Wide Area
Networks", „Wireless Networks") pornesc **extinse** (implicit) sau
**restrânse**, pentru toate domeniile. Se transmite tot prin
`index.html` (ca `?videoSections=expanded|collapsed` în link-ul spre
Cursuri), din același motiv de mai sus — și e reținută local, în
`cursuri.html`, pentru vizitele directe (ex: din Prev/Next dintr-un
examen).

### c) Domeniile din sidebar (stânga) — ținute minte automat

Nu există o setare separată pentru asta — fiecare header de domeniu
(Domain 1-5) își reține automat starea deschis/închis, între sesiuni,
direct în `cursuri.html` (stocare locală acelui folder, deci mereu
sigură, spre deosebire de (a) și (b) care vin din alt folder).

Setările se salvează în `localStorage` (cheia `studyhub_settings_v1`
pentru (a), (b) și (e); `studyhub_cursuri_domains_v1` pentru (c)).

### d) Fereastra de Setări e un modal plutitor, nu o pagină separată

Din orice pagină (StudyHub, Cursuri, Examen 1/2/3), butonul „⚙ Setări"
deschide o fereastră plutitoare PESTE pagina curentă — nu mai navighează
nicăieri. Se închide cu ✕, click pe fundal, sau Escape, și rămâi exact
unde erai (asta rezolvă și un bug vechi: înainte, dacă deschideai
Setările din Cursuri și apoi dădeai „Înapoi", ajungeai greșit pe pagina
principală).
*(Fundalul avea inițial un `backdrop-filter: blur` — a fost scos, era
foarte costisitor pe GPU-uri slabe/integrate; vezi actualizarea de la
începutul acestui README.)*

Tehnic, fereastra e un `<iframe>` care încarcă `settings.html` — asta
contează: conținutul Setărilor tot rulează „legat" de folderul rădăcină
(unde `index.html` le poate citi sigur), indiferent din ce pagină ai
deschis fereastra. `settings.html` detectează dacă rulează într-un iframe
(`window.self !== window.top`) și își ascunde propriul topbar în acest
caz, ca să nu existe două seturi de butoane de închidere.

Fișierele implicate: `settings.html`, `settings.css`, `settings.js`
(logica setărilor + pagina propriu-zisă) și `settings-modal.js` +
`settings-modal.css` (fereastra plutitoare, incluse în `index.html`,
`cursuri.html` și `examenX.html`).

### e) Salvare automată a răspunsurilor

Toggle în „Teste și examene", implicit **activ**. Când e activ, `engine.js`
salvează direct în `localStorage` (fără bridge — rulează mereu pe aceeași
pagină unde se și citește) ordinea întrebărilor + răspunsurile + marcajele
+ poziția curentă, la fiecare interacțiune. Dacă închizi din greșeală un
test neterminat, la redeschidere reiei exact de unde ai rămas — inclusiv
ordinea amestecată, ca să nu ajungi la altă întrebare sub același număr.
La „Finalizează testul", datele salvate se șterg (un test terminat nu
mai are sens să rămână „în progres"). Se transmite tot prin `index.html`
(`?autoSaveAnswers=on|off`), la fel ca (a) și (b).

## 9. Progresul tău — istoric teste + timp petrecut

Buton „📊 Progres" (lângă „⚙ Setări", pe StudyHub/Cursuri/Examene) deschide
aceeași fereastră plutitoare, dar cu `history.html` în loc de
`settings.html`. Se deschide direct pe tab-ul materiei din care ai apăsat
butonul (`?subject=Networking` în link), dar poți comuta oricând la
Python/Databases din taburile de sus.

Pentru materia activă, structura oglindește exact pagina de Cursuri —
un card per Domeniu, fiecare cu:

- **🎥 Videos** — timpul total petrecut la videoclipurile acelui domeniu.
- **📊 Pre-Assessment** / **📊 Post-Assessment** — câte încercări ai făcut,
  cel mai bun scor, media; click pe rând extinde lista completă de
  încercări (dată, scor, durată). Fiecare încercare cu greșeli are un
  buton „▸ Greșeli (N)" care extinde și arată textul exact al
  întrebărilor la care ai greșit.
- În header-ul cardului de domeniu apare **timpul total învățat**
  (Videos + Pre + Post adunate), ca să vezi dintr-o privire cât ai băgat
  la fiecare domeniu.

Mai jos, o secțiune separată **Examene** (Examen 1/2/3), cu același
format de încercări + greșeli expandabile.

**🗑 Resetează tot progresul**: șterge istoricul + timpul, pentru toate
materiile deodată (cu confirmare).

### Valorile de timp sunt mereu la zi (checkpoint) + pauză automată

Timpul per secțiune se scria inițial în `localStorage` DOAR la schimbarea
secțiunii (sau la închiderea paginii) — deci dacă deschideai Progres în
timp ce stăteai pe loc, vedeai valori vechi. `cursuri-engine.js` are acum o
funcție `flushSectionTime()` („checkpoint"): scrie timpul acumulat până
acum și repornește cronometrul, FĂRĂ să schimbe secțiunea urmărită.
`trackSectionTime()` (schimbarea reală) o folosește ca prim pas, dar ea
se declanșează și direct pe evenimentul `studyhub:modal-open` — deci
chiar în clipa în care apeși 📊 sau ⚙, timpul e scris înainte ca
fereastra să-l citească.

Separat, atât acest cronometru cât și durata unei încercări de test
(`engine.js`) se pun pe pauză automat cât timp fila e ascunsă (ai
schimbat tab-ul din browser) sau e deschis un modal peste pagină — vezi
`onActivityPause()`/`onActivityResume()` în `progress-bridge.js` — ca să
nu se adune timp care nu are legătură cu învățatul.

### De ce a fost nevoie de un "bridge"

La fel ca la Setări: `history.html` e în rădăcină, deci citește sigur
din `localStorage`. Dar înregistrarea propriu-zisă a unei încercări se
întâmplă în `engine.js`, care rulează pe `cursuri.html`
(`Networking/Cursuri/`) sau `examenX.html`
(`Networking/Examene/Examen X/`) — foldere diferite, cu potențial
`localStorage` izolat pe file://.

Soluția: un iframe ASCUNS (`storage-bridge.html`, în rădăcină) e încărcat
pe `cursuri.html`/`examenX.html`; orice salvare de progres trece prin el
(`postMessage`), deci ajunge mereu în `localStorage`-ul rădăcinii,
indiferent din ce folder pornește. Fișierele implicate:
`storage-bridge.html` (bridge-ul propriu-zis) și `progress-bridge.js`
(funcțiile `recordTestAttempt()` / `recordTimeSpent()`, apelate din
`engine.js` și `cursuri-engine.js`).

Chei folosite: `studyhub_test_history_v1` (istoricul testelor, cu
greșelile per încercare), `studyhub_time_spent_v1` (timpul per secțiune).

### Namespacing pe materie

Toate cheile interne (timp + istoric) sunt prefixate cu numele materiei,
ex: `Networking_d1_pre`, `Networking_d1_videos`, `Networking_exam1`.
Asta ține datele separate corect când vei construi și Python/Databases —
fiecare materie are constanta `SUBJECT` la începutul propriului
`cursuri.js` (și `EXAM_ID` în fiecare `examenX-questions.js`), pe care
trebuie doar s-o schimbi cu numele materiei respective quando construiești
acele secțiuni.

## 10. Limitări cunoscute / lucruri de verificat

- Titlul „IPv6 Address Types" la Domain 4 e o presupunere (vezi punctul 3).
- Video playerul citește fișiere locale direct din `Videos/`; nu am
  adăugat conversie/compresie — pune fișierele deja în format `.mp4`
  redabil în browser (H.264/AAC).
- `EXAM_ID` trebuie completat manual în fiecare `examenX-questions.js`
  (vezi secțiunea 5) — nu e validat automat, deci o greșeală acolo nu dă
  nicio eroare vizibilă, doar progresul acelui examen nu se salvează.
- **`exam-runner.js` e ÎNCĂ duplicat per materie** (spre deosebire de
  `cursuri.js`, care s-a rezolvat — vezi secțiunea 1: logica lui e acum
  în `cursuri-engine.js`, comun). `exam-runner.js` are 2 string-uri
  hardcodate cu numele materiei (link-ul logo-ului + butonul „✕ Închide"),
  plus întreaga funcționalitate de sesiuni multiple, auto-salvare, etc. —
  orice fix făcut pe copia din Networking trebuie oglindit manual în
  Databases (și, mai târziu, Python), altfel materia respectivă rămâne cu
  o versiune mai veche/incompletă, fără nicio eroare care să te avertizeze.
  Dacă vrei, se poate aplica exact același tipar de despărțire ca la
  `cursuri.js` (fișier comun + o mică bucată per materie cu `SUBJECT`).