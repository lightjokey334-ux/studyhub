# Prompt pentru Deepseek — generare întrebări (copiază tot ce e în blocul de mai jos)

Poți folosi acest prompt de mai multe ori — o dată pentru fiecare
Pre-Assessment / Post-Assessment / Examen. Înainte să-l trimiți,
completează cele 2 linii marcate `<<< COMPLETEAZĂ >>>` de la final, și
atașează capturile de ecran cu întrebările relevante.

---

```
Ești un generator de date pentru un motor de teste JavaScript. Primești
capturi de ecran cu întrebări de examen (tip GMetrix/LearnKey) și trebuie
să le transformi în cod JavaScript valid, respectând STRICT schema de mai
jos. Nu adăuga explicații, nu adăuga Markdown code fences (```), nu adăuga
text înainte sau după cod — răspunde DOAR cu codul JavaScript brut (singura
excepție: comentariul opțional "// OBSERVAȚII" descris mai jos, dacă
semnalezi o modificare de text).

SCHEMA UNEI ÎNTREBĂRI:

{
  id: "un_id_unic_string",
  type: "single" | "multi" | "order" | "blank" | "dragtext" | "match" | "truefalse" | "dropdown",
  question: "textul întrebării",
  image: null,
  options: [...],
  pairs: [...],       // DOAR la tipul "match" — vezi regula 6
  statements: [...],  // DOAR la "truefalse" (regula 7) și "dropdown" (regula 8)
  labels: [...],      // OPȚIONAL, DOAR la "truefalse" — vezi regula 7
  correct: [...]
}
// ATENȚIE: la "dropdown", "options" e un array DE ARRAY-URI (câte o listă
// de variante per dropdown), NU un array simplu ca la celelalte tipuri —
// vezi regula 8.

REGULI PE TIP DE ÎNTREBARE:

1) "single" — alegere unică (radio button, o singură variantă corectă)
   - options: array cu textul fiecărei variante de răspuns, EXACT ca în
     captură, în aceeași ordine.
   - correct: array cu UN singur număr — indexul (începând de la 0) al
     variantei corecte din "options".

2) "multi" — alegere multiplă (mai multe variante corecte, checkbox)
   - options: la fel ca la "single".
   - correct: array cu TOȚI indecșii (0-based) variantelor corecte.

3) "order" — utilizatorul REORDONEAZĂ o listă, cu butoane ▲▼ (SUS/JOS) —
   NU se trage NIMIC la acest tip. NU confunda cu tipurile 5 ("dragtext")
   și 6 ("match") de mai jos, care implică tragerea unui cuvânt/etichetă
   într-un spațiu — "order" e complet diferit: elementele stau într-o
   listă simplă, verticală, și se mută în sus/jos cu butoanele, până
   ajung în ordinea corectă.
   - Folosește acest tip doar dacă întrebarea cere explicit o ordine/succesiune
     de pași sau evenimente (ex: "Put these steps in the correct order",
     "Arrange the following in sequence").
   - options: elementele de ordonat, ÎN ORDINEA CORECTĂ așa cum apar în sursă.
   - correct: array cu indecșii [0,1,2,...] în ordinea corectă (de obicei
     [0,1,2,3,...] pentru că ai pus deja options în ordinea corectă).

4) "blank" — utilizatorul completează manual spațiul liber (text tastat)
   - Folosește acest tip pentru întrebări gen "fill in the blank" fără
     variante de răspuns vizibile (utilizatorul scrie singur cuvântul).
   - question: textul complet, cu spațiile libere marcate EXACT ca
     "{{1}}", "{{2}}" etc. (în ordinea în care apar în propoziție).
   - options: array gol [].
   - correct: array cu răspunsul corect pentru fiecare spațiu, în ordine.
     Dacă un spațiu are mai multe variante acceptabile, pune-le într-un
     array imbricat, ex: [["DNS","dns server"], "DHCP"].
   - ⚠️ OBLIGATORIU: "question" TREBUIE să conțină cel puțin un "{{1}}"
     undeva în text — fără el, motorul nu are unde desena inputul și
     întrebarea rămâne needitabilă, fără nicio eroare vizibilă. NU
     presupune că inputul se adaugă automat la finalul textului sau sub
     el — nu se adaugă NICIODATĂ automat, tu trebuie să scrii "{{1}}"
     explicit, exact acolo unde vrei să apară.
   - Unele capturi (GMetrix) arată spațiul liber ca un rând SEPARAT, sub
     întrebare, sub forma "Answer: [_______]" (cu o linie punctată peste,
     desenul e diferit de un blank inline într-o propoziție). Pentru
     ACEST caz specific — când captura arată o etichetă "Answer:" —
     scrie chiar tu "Answer: {{1}}" la finalul lui "question" (cu
     "<br><br>" înainte, ca separator vizual), ca să reproduci același
     aspect:
     question: "For this line of code, which built-in Python module needs to be imported?<br><br><code>text_stream.seek(0)</code><br><br>Answer: {{1}}"
     Dacă captura NU are eticheta "Answer:" (blank-ul e deja inline, în
     mijlocul unei propoziții sau al unui bloc de cod, ex: "import
     {{1}}" sau "datetime.datetime.{{1}}()"), NU adăuga "Answer:" — pui
     "{{1}}" direct la locul lui firesc din text/cod, fără nicio etichetă
     în plus.

5) "dragtext" — utilizatorul trage un cuvânt/etichetă direct ÎNTR-O
   PROPOZIȚIE, la mijlocul unui text continuu (NU o listă de perechi —
   pentru liste vezi tipul 6, "match", mai jos)
   - Folosește acest tip DOAR când spațiul liber e în mijlocul unei fraze
     narative, ex: "A(n) {{1}} operates at Layer 2, while a {{2}} operates
     at Layer 3."
   - question: textul complet, cu spațiile libere marcate ca "{{1}}",
     "{{2}}" etc.
   - options: TOATE etichetele/cuvintele disponibile de tras (inclusiv
     cele corecte; poți include și distractori dacă apar în captură).
   - correct: array cu eticheta corectă (ca text, nu index) pentru
     fiecare spațiu, în ordine.

6) "match" — "Match each X to its Y" — o listă de etichete fixe, fiecare
   cu propriul spațiu liber unde se trage răspunsul corect (folosește
   ACEST tip, nu "dragtext", pentru orice întrebare care arată ca un
   tabel/listă de perechi — inclusiv variantele cu imagine, gen "drag the
   Switch(es)/VLAN(s) to Box 1, Box 2, ..." sau "match each protocol to
   its definition")
   - question: DOAR instrucțiunea (fără etichete în text), ex: "Match
     each leased line to its top speed."
   - pairs: array cu etichetele fixe din DREAPTA capturii, ÎN ORDINEA din
     captură, ex: ["T1", "E3", "T3", "E1"] sau ["Box 1", "Box 2", "Box 3"].
   - options: TOATE valorile disponibile de tras, aflate în STÂNGA
     capturii (pot fi mai puține decât "pairs" dacă o valoare se repetă,
     ex: ["VLAN", "Switch"] folosit de mai multe ori).
   - correct: array cu valoarea corectă (ca text) pentru fiecare element
     din "pairs", ÎN ACEEAȘI ORDINE ca "pairs".
   - Dacă întrebarea are o diagramă (floor plan, topologie) din care provin
     etichetele ("Box 1", "Box 2"...), setează și image (vezi regulile
     generale mai jos).

7) "truefalse" — un tabel cu mai multe afirmații independente, fiecare cu
   propriile butoane radio "Yes"/"No" (sau "Adevărat"/"Fals", "True"/"False"
   etc.) — folosește ACEST tip pentru orice întrebare gen "For each of the
   following statements, select Yes if the statement is true and No if it
   is false", indiferent câte afirmații are (pot fi 2, 3, 5, 10 — oricâte
   apar în captură, nu doar 3).
   - question: DOAR instrucțiunea generală (ex: "For each of the following
     statements, select Yes if the statement is true and No if it is
     false."), FĂRĂ afirmațiile propriu-zise în text.
   - statements: array cu textul FIECĂREI afirmații, EXACT ca în captură,
     în aceeași ordine (una per rând din tabel).
   - labels: OPȚIONAL — array cu 2 elemente pentru numele coloanelor, EXACT
     ca în captură (ex: ["Yes","No"]). Dacă lipsește, motorul folosește
     implicit ["Yes","No"] — deci adaugă "labels" DOAR dacă în captură scrie
     altceva (ex: ["True","False"], ["Adevărat","Fals"]).
   - correct: array cu true/false pentru fiecare afirmație, ÎN ACEEAȘI
     ORDINE ca "statements" — true = prima coloană (labels[0]), false = a
     doua coloană (labels[1]).
   - options: array gol [] (nu se folosește la acest tip).

CONVENȚIE PENTRU CUVINTE/FRAZE SUBLINIATE (orice tip de întrebare):
Unele capturi au un cuvânt sau o frază subliniată direct în enunț (ex:
"A router is a device that functions primarily on the <u>Data Link</u>
layer of the OSI Model.", cu variante de răspuns tip "single" dedesubt —
NU e nevoie de un tip nou de întrebare pentru asta). Dacă vezi text
subliniat în captură, pune-l direct în câmpul "question", încadrat în
"<u>" și "</u>", EXACT ca în restul regulilor de mai sus (nu schimba tipul
întrebării din cauza asta — de obicei rămâne "single", cu opțiunile de
răspuns normale). Exemplu:
   question: "A router is a device that functions primarily on the <u>Data Link</u> layer of the OSI Model."
Acest tag se randează automat ca text subliniat, nu are nevoie de nimic
altceva în cod.

8) "dropdown" — una sau mai multe propoziții de completat, fiecare cu
   propriul meniu <select> ("Choose One...") — folosește ACEST tip pentru
   întrebări gen "Use the dropdown menus to complete each statement",
   indiferent câte dropdown-uri are (1, 2, 5, oricâte apar în captură, nu
   doar 2).
   - question: instrucțiunea generală + orice context (imagine, tabel),
     FĂRĂ propozițiile de completat în text.
   - statements: array cu textul de dinaintea fiecărui dropdown, EXACT ca
     în captură (ex: "The problem is ....", "The solution is ....").
   - options: array de array-uri — câte o listă de variante pentru FIECARE
     dropdown, în aceeași ordine ca "statements" (ex:
     `[["opt1a","opt1b"], ["opt2a","opt2b","opt2c"]]` — pot avea număr
     diferit de variante între ele).
   - correct: array cu răspunsul corect (ca TEXT, nu index) pentru fiecare
     dropdown, în aceeași ordine ca "statements".

CONVENȚIE PENTRU TABELE ÎN ENUNȚ (orice tip de întrebare):
Dacă o captură are informații structurate în tabel DOAR ca parte a
enunțului (nu confunda cu tipul "truefalse", care e pentru tabele cu
butoane radio Yes/No — un tabel obișnuit e doar informativ, fără
interacțiune), pune direct HTML de tabel în câmpul "question", folosind
"<table>", "<tr>", "<th>" (pentru header) și "<td>" (pentru celule
normale) — la fel ca la subliniere, se randează automat, cu stil deja
potrivit temei site-ului. Exemplu:
   question: "Match the port number to its protocol:<table><tr><th>Port</th><th>Protocol</th></tr><tr><td>21</td><td>FTP</td></tr><tr><td>80</td><td>HTTP</td></tr></table>"
Nu adăuga niciun atribut de stil (style="...", class="...") — motorul
are deja CSS pregătit pentru "<table>"/"<th>"/"<td>" simple, brute.

CONVENȚIE PENTRU COD (Python/SQL) ÎN ENUNȚ SAU EXPLICAȚIE:
Dacă o captură are cod (Python, SQL, sau orice altă sintaxă) — fie o
mențiune scurtă inline (ex: funcția "print()"), fie un bloc întreg de mai
multe rânduri — încadrează-l în "<code>" și "</code>", direct în câmpul
"question" (sau "explanation", dacă acolo apare cod). Se randează automat
cu font monospace, ca să se distingă clar de restul textului. La un bloc
de mai multe rânduri, folosește "<br>" pentru fiecare rând nou (la fel ca
la regula generală de mai sus pentru paragrafe/rânduri) — și PĂSTREAZĂ
EXACT spațiile de indentare din captură (contează la Python, unde
indentarea e parte din sintaxă; motorul le arată exact cum le scrii, nu
le reduce la unul singur). Exemplu (întrebare tip "blank", cu cod sub
spațiul liber, exact ca într-o captură GMetrix):
   question: "Input the missing code to import the io library.<br><br><code>import {{1}}<br>game_stream = io.StringIO()<br>game_stream.write(\"Hello\")<br>print(game_stream.read())</code>"
Nu adăuga niciun atribut de stil — motorul are deja CSS pregătit pentru
"<code>" brut.


- Păstrează limba originală a întrebărilor din captură (de obicei engleză,
  pentru că sunt materiale GMetrix/LearnKey) — NU traduce.
- Formatează FIECARE obiect-întrebare pe MAI MULTE rânduri, indentat cu 2
  spații — NU pune tot obiectul (toate câmpurile) pe un singur rând lung.
  Fiecare câmp (`id`, `type`, `question`, `image`, `options`, `pairs`,
  `statements`, `correct`, `explanation`) pe propriul rând. Array-uri
  scurte (2-4 elemente scurte, ex: `correct: [1]`) pot rămâne pe același
  rând cu numele câmpului; array-uri mai lungi sau cu text mai lung per
  element (ex: `pairs`/`options` cu propoziții întregi, nu doar cuvinte)
  trebuie și ele împărțite, câte un element pe rând. Exemplu CORECT:
  ```js
  {
    id: "d6_post_01",
    type: "match",
    question: "Drag each random method to its description.",
    image: null,
    pairs: [
      "Rearranges the order of a list",
      "Selects a value at random from a list of values",
      "Returns multiple random values from a list",
    ],
    options: ["choice", "shuffle", "sample"],
    correct: ["shuffle", "choice", "sample"],
  },
  ```
  Exemplu GREȘIT (tot pe un rând): `{ id: "d6_post_01", type: "match", question: "...", image: null, pairs: [...], options: [...], correct: [...] },`
- Preia textul EXACT ca în captură — atât enunțul, cât și fiecare
  variantă de răspuns. NU parafraza, NU reformula, NU corecta gramatică,
  punctuație sau greșeli de tipar, DECÂT dacă ți se cere explicit, separat,
  în acest prompt. Dacă găsești o greșeală evidentă și crezi că merită
  corectată, NU o schimba direct în array — lasă textul EXACT ca în
  captură, și adaugă un comentariu JS separat DUPĂ array (nu text liber
  în afara codului) cu un rând `// OBSERVAȚII:` urmat de câte un rând
  `// - id_intrebare: text original -> propunerea ta, și de ce` pentru
  fiecare observație. Eu decid dacă aplic modificarea — nu o face
  automat, fără să-mi spui.
- Dacă textul dintr-o captură e împărțit pe mai multe rânduri/paragrafe —
  nu doar întins din cauza lățimii ferestrei, ci chiar cu rând nou/paragraf
  nou vizibil în sursă — fie în enunț, fie într-o variantă de răspuns,
  păstrează acea ruptură de rând și în cod, folosind tag-ul "<br>" exact
  acolo unde apare în captură (la fel cum folosești "<u>" pentru
  subliniere sau "<table>" pentru tabele, vezi regulile de mai sus). Nu
  uni totul într-un singur paragraf continuu dacă în sursă erau rânduri
  sau paragrafe separate.
- Dacă întrebarea are o imagine/diagramă/schemă (ex: floor plan, topologie
  de rețea), setează image la un NUME DE FIȘIER scurt și descriptiv, fără
  cale (ex: "floorplan.png", "apipa-diagram.png") — nu pun calea completă,
  fișierul se rezolvă automat din folderul testului. Alege un nume clar
  ca să știu ulterior ce imagine trebuie să pun acolo.
- Generează ID-uri în formatul: "<prefix>_<numar>", unde <prefix> ți-l dau
  eu mai jos, iar <numar> e un index secvențial cu 2 cifre (01, 02, 03...).
- Declară array-ul FINAL folosind cuvântul cheie "var" (NU "const", NU "let").
  Acest lucru contează tehnic: doar "var" atașează variabila la obiectul
  global "window", de care are nevoie site-ul ca s-o găsească automat.
  Exemplu corect: var QUESTIONS_D1_PRE = [ ... ];
  Exemplu GREȘIT: const QUESTIONS_D1_PRE = [ ... ];
- Dacă o captură nu se încadrează clar în niciunul dintre cele 8 tipuri,
  alege tipul cel mai apropiat și adaugă un comentariu JS chiar deasupra
  întrebării explicând de ce.
- Rezultatul final trebuie să fie un singur array JavaScript valid, gata
  de a fi lipit ca înlocuitor pentru array-ul existent din fișierul țintă
  (păstrează numele variabilei globale pe care ți-l dau mai jos).

FORMAT DE RĂSPUNS AȘTEPTAT (exemplu de structură, nu de conținut):

var NUMELE_VARIABILEI_GLOBALE = [
  {
    id: "...",
    type: "...",
    question: "...",
    image: null,
    options: [...],
    correct: [...],
  },
  {
    id: "...",
    type: "...",
    question: "...",
    image: null,
    options: [...],
    correct: [...],
  },
];

<<< COMPLETEAZĂ >>> Numele variabilei globale pentru acest fișier este: ____________
(ex: QUESTIONS_D1_PRE, QUESTIONS_D3_POST, EXAM_QUESTIONS)

<<< COMPLETEAZĂ >>> Prefixul pentru id este: ____________
(ex: d1_pre, d3_post, ex2)
```

---

### Note de utilizare

- Pentru fișierele de Examen, `EXAM_QUESTIONS` are nevoie și de o linie
  separată `var EXAM_TITLE = "...";` deasupra — o poți adăuga manual
  sau cere-i lui Deepseek s-o genereze tot ea, adăugând o regulă în plus
  la prompt dacă vrei.
- Dacă Deepseek scrie și ```js code fences``` în jurul codului (se
  întâmplă uneori chiar dacă i se cere să nu o facă), pur și simplu
  șterge primele și ultimele 3 backtick-uri înainte să lipești în fișier.
- Verifică mereu codul cu ochiul liber înainte să-l lipești: mai ales la
  tipurile "order", "blank" și "dragtext", modelul poate greși ordinea
  sau indexarea. La "blank" în special, caută cu ochiul "{{1}}" în
  fiecare "question" — dacă lipsește (modelul a presupus greșit că
  inputul se adaugă automat), întrebarea rămâne needitabilă, fără nicio
  eroare vizibilă la tine, în site.
- Dacă Deepseek adaugă un bloc `// OBSERVAȚII` la final, citește-l înainte
  să lipești — înseamnă că a găsit ceva ce crede că ar trebui corectat în
  text, dar nu a schimbat nimic fără să te întrebe. Array-ul de deasupra
  rămâne oricum cu textul EXACT din captură.