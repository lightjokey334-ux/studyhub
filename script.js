// Home page navigation: subject cards -> option cards -> actual pages.

const subjectScreen = document.getElementById('subjectScreen');
const optionsScreen = document.getElementById('optionsScreen');
const optionsTitle = document.getElementById('optionsTitle');
const backBtn = document.getElementById('backBtn');
const homeLogo = document.getElementById('homeLogo');

let currentSubject = null;

// Which subjects currently have real content built.
// Add "Python" / "Databases" here once those folders exist.
const READY_SUBJECTS = ['Networking', 'Databases', 'Python'];

// Maps an option key to the relative path (from index.html) that should open.
function buildPath(subject, optionKey){
  const settings = studyhubLoadSettings();
  const qs = `shortcutsPanel=${settings.shortcutsPanel}&autoSaveAnswers=${settings.autoSaveAnswers}`;

  switch(optionKey){
    case 'cursuri':
      return `${subject}/Cursuri/cursuri.html?videoSections=${settings.videoSections}&autoplayNextVideo=${settings.autoplayNextVideo}&${qs}`;
    case 'examen1':
      return `${subject}/Examene/Examen 1/examen1.html?${qs}`;
    case 'examen2':
      return `${subject}/Examene/Examen 2/examen2.html?${qs}`;
    case 'examen3':
      return `${subject}/Examene/Examen 3/examen3.html?${qs}`;
    default:
      return null;
  }
}

function showSubjectScreen(){
  optionsScreen.classList.remove('active');
  subjectScreen.classList.add('active');
  backBtn.classList.add('hidden');
  currentSubject = null;
  // curăță query string-ul ca să nu revină automat la ecranul de opțiuni la refresh
  history.replaceState(null, '', window.location.pathname);
}

function showOptionsScreen(subject){
  currentSubject = subject;
  optionsTitle.textContent = subject;
  subjectScreen.classList.remove('active');
  optionsScreen.classList.add('active');
  backBtn.classList.remove('hidden');
}

document.querySelectorAll('.subject-card').forEach(card => {
  card.addEventListener('click', () => {
    showOptionsScreen(card.dataset.subject);
  });
});

document.querySelectorAll('.option-card').forEach(card => {
  card.addEventListener('click', () => {
    if(!currentSubject) return;

    if(!READY_SUBJECTS.includes(currentSubject)){
      alert(`${currentSubject} este în lucru. Revino mai târziu!`);
      return;
    }

    const path = buildPath(currentSubject, card.dataset.option);
    if(path){
      // navigare în ACELAȘI tab (nu tab nou)
      window.location.href = path;
    }
  });
});

backBtn.addEventListener('click', showSubjectScreen);
homeLogo.addEventListener('click', showSubjectScreen);

// Suport pentru index.html?subject=Networking -> deschide direct ecranul
// de opțiuni al acelei materii.
//
// Suport pentru index.html?logoFrom=Networking -> folosit de logo-ul din
// Cursuri/Examene. Decizia (Setări -> unde te duce logo-ul) se ia AICI,
// pe index.html, și NU pe cursuri.html/examenX.html, pentru că acelea
// sunt în alt folder, iar unele browsere (mai ales pe file://) țin
// localStorage separat per-folder — setarea salvată din settings.html
// (același folder cu index.html) nu ar fi văzută sigur din Networking/
// Cursuri/. Aici, fiind în același folder cu settings.html, citirea e
// mereu sigură.
(function initFromQuery(){
  const params = new URLSearchParams(window.location.search);
  const subject = params.get('subject');
  const logoFrom = params.get('logoFrom');
  const validSubjects = ['Databases', 'Networking', 'Python'];

  if(logoFrom && validSubjects.includes(logoFrom)){
    const settings = studyhubLoadSettings();
    const key = logoFrom.toLowerCase();
    const target = settings[key] || 'home';

    if(target === 'cursuri'){
      window.location.replace(`${logoFrom}/Cursuri/cursuri.html?videoSections=${settings.videoSections}&autoplayNextVideo=${settings.autoplayNextVideo}&shortcutsPanel=${settings.shortcutsPanel}&autoSaveAnswers=${settings.autoSaveAnswers}`);
      return;
    }
    if(target === 'options'){
      showOptionsScreen(logoFrom);
    }
    // 'home' -> rămâne pe ecranul cu cele 3 carduri (deja default)
    history.replaceState(null, '', window.location.pathname);
    return;
  }

  if(subject && validSubjects.includes(subject)){
    showOptionsScreen(subject);
  }
})();