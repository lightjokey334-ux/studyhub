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
│  │  ├─ cursuri.css
│  │  ├─ cursuri.js       ← aici sunt titlurile capitolelor video pe domenii
│  │  ├─ Domain 1/ … Domain 5/
│  │  │  ├─ Videos/                  (.mp4 + opțional .vtt cu același nume)
│  │  │  ├─ Pre-Assessment/
│  │  │  │  └─ pre-assessment.js     ← întrebările Pre-Assessment
│  │  │  └─ Post-Assessment/
│  │  │     └─ post-assessment.js    ← întrebările Post-Assessment
│  │
│  └─ Examene/
│     ├─ exam.css
│     ├─ exam-runner.js   logica comună pentru toate cele 3 examene
│     ├─ Examen 1/
│     │  ├─ examen1.html
│     │  └─ examen1-questions.js     ← întrebările Examenului 1
│     ├─ Examen 2/ (la fel)
│     └─ Examen 3/ (la fel)
│
├─ Python/     (gol, deocamdată)
└─ Databases/  (structură completă, la fel ca Networking — vezi mai jos)
   ├─ Cursuri/
   │  ├─ cursuri.html / cursuri.css / cursuri.js
   │  └─ Domain 1/ … Domain 5/  (Videos + Pre-Assessment + Post-Assessment)
   └─ Examene/
      ├─ exam.css / exam-runner.js
      └─ Examen 1/ … Examen 3/
```

**De ce e construit așa:** fiecare test/evaluare are propriul fișier `.js`
care conține DOAR datele întrebărilor (un array). Motorul care le afișează
(`engine.js`) e unic și partajat de toate testele, așa cum ai cerut. Așa
poți completa fișierele de întrebări unul câte unul, fără să atingi codul
de randare.

## 2. Cum deschizi site-ul

Deschide `index.html` direct în browser (dublu-click, funcționează pe
`file://`, la fel ca la GMetrix Student). Nu e nevoie de server local.

Fluxul de navigare:
1. `index.html` → alegi un card (Databases / Networking / Python).
2. Apar 4 opțiuni: **Cursuri**, **Examen 1**, **Examen 2**, **Examen 3**.
3. Fiecare opțiune se deschide în **același tab** (nu tab nou).
   (Deocamdată doar Networking e „activ" — celelalte două arată un mesaj
   „în lucru"; vezi `READY_SUBJECTS` din `script.js` când vrei să activezi
   Python/Databases.)

Din interiorul Cursurilor/Examenelor, apeși pe numele materiei
(ex: „🌐 Networking") ca să te întorci — vezi secțiunea 8 (Setări) pentru
a alege exact unde te duce acel click.

## 3. Pagina „Cursuri" (cursuri.html)

- **Sidebar stânga**: cele 5 domenii, fiecare cu 3 sub-opțiuni:
  🎥 Videos, 📊 Pre-Assessment, 📊 Post-Assessment.
  *(„Exercise Labs" a fost exclus intenționat, conform cerinței tale.)*
  Fiecare header de domeniu se poate restrânge/extinde (click pe el,
  săgeata „›" se rotește). Domeniul care conține item-ul curent selectat
  se extinde automat, ca să vezi mereu ce e activ. Domeniul/itemul curent
  apare evidențiat, iar iconițele lui devin „active" (culoare verde
  `--accent`); restul rămân gri, exact ca în referințele GMetrix pe care
  mi le-ai trimis.
- **Zona video**: player HTML5 + panou din dreapta cu capitolele grupate
  pe secțiuni (ex: „Understand Switches", „Understand Routers"...) — click
  pe un capitol schimbă videoclipul redat.
- **Pre/Post-Assessment**: randează testul cu `QuestionEngine`, citind din
  fișierul `.js` corespunzător al domeniului.

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
fie fixate). Tehnic: `selectItem()` din `cursuri.js` pune o clasă,
`c-main-video`, pe containerul principal DOAR când tab-ul activ e Videos;
`cursuri.css` o folosește ca să transforme `.c-main` într-un container cu
`overflow: hidden` pe mobil, cu playerul la înălțime naturală și lista de
capitole ocupând tot spațiul rămas (`flex: 1`, cu scroll intern).

## 4. Schema unei întrebări (folosită peste tot: Pre/Post-Assessment + Examene)

Fiecare întrebare e un obiect JS cu această formă:

```js
{
  id: "d1_pre_01",       // identificator unic, orice string
  type: "single",        // "single" | "multi" | "order" | "blank" | "dragtext" | "match" | "truefalse" | "dropdown"
  question: "...",       // textul întrebării
  image: null,           // null SAU doar numele fișierului, ex: "schema1.png"
  options: [...],        // vezi mai jos, diferă în funcție de tip
  pairs: [...],          // DOAR la tipul "match" — vezi litera f) mai jos
  statements: [...],     // DOAR la "truefalse" (litera g) și "dropdown" (litera h)
  correct: [...]         // vezi mai jos, diferă în funcție de tip
}
```

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
schimbat, altfel `cursuri.js` / `exam-runner.js` nu le va găsi.

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
timp ce stăteai pe loc, vedeai valori vechi. `cursuri.js` are acum o
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
`engine.js` și `cursuri.js`).

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

- Video playerul citește fișiere locale direct din `Videos/`; nu am
  adăugat conversie/compresie — pune fișierele deja în format `.mp4`
  redabil în browser (H.264/AAC).
- `EXAM_ID` trebuie completat manual în fiecare `examenX-questions.js`
  (vezi secțiunea 5) — nu e validat automat, deci o greșeală acolo nu dă
  nicio eroare vizibilă, doar progresul acelui examen nu se salvează.
- `cursuri.js`/`exam-runner.js` sunt duplicate per materie (fiecare cu
  propriul `SUBJECT`/link-uri hardcodate la numele materiei) — orice fix
  făcut pe copia din Networking trebuie oglindit manual și în Databases
  (și, mai târziu, Python), inclusiv câteva string-uri hardcodate direct
  (ex: link-ul logo-ului din `cursuri.js`), nu doar constanta `SUBJECT`.