var QUESTIONS_D5_PRE = [
  {
    id: "d5_pre_01",
    type: "multi",
    question: "What ping commands are used by administrators that need a larger ping sample size? Choose two answers.",
    image: null,
    options: ["ping -c", "ping -n", "ping -s", "ping -t"],
    correct: [1, 3],
    explanation: "`ping -n` specifică numărul de ping-uri (eșantion mai mare), iar `ping -t` rulează continuu până la oprire (Ctrl+C), permițând colectarea unui eșantion mai mare. `-c` nu există în Windows, iar `-s` setează dimensiunea pachetului (Video: Ping - M0001)."
  },
  {
    id: "d5_pre_02",
    type: "multi",
    question: "Which two tools are featured in pathping?",
    image: null,
    options: ["Netstat", "Ping", "Telnet", "Tracert"],
    correct: [1, 3],
    explanation: "Pathping combină funcțiile `ping` și `tracert` (traceroute), afișând fiecare hop și procentul de pachete pierdute (Video: Pathping - M0003)."
  },
  {
    id: "d5_pre_03",
    type: "single",
    question: "Which protocol should be used instead of Telnet for remote connections?",
    image: null,
    options: ["FTP", "SFTP", "SSH", "SSL"],
    correct: [2],
    explanation: "SSH (Secure Shell) este alternativa securizată la Telnet, deoarece criptează datele, inclusiv numele de utilizator și parolele (Video: Telnet - F0006)."
  },
  {
    id: "d5_pre_04",
    type: "single",
    question: "The 127 range is assigned to what addresses?",
    image: null,
    options: ["Local loopback IP addresses", "APIPA", "Class A addresses", "Class B addresses", "Class C addresses"],
    correct: [0],
    explanation: "Adresele care încep cu 127 sunt rezervate pentru loopback local (ex. 127.0.0.1) și nu sunt atribuite dispozitivelor (Video: Reserved Ranges, Protocols - FM001)."
  },
  {
    id: "d5_pre_05",
    type: "single",
    question: "Administrators can use tone generators to identify terminated cables in a ______ block.",
    image: null,
    options: ["90", "100", "110", "120", "130"],
    correct: [2],
    explanation: "Un toner probe (tone generator) este folosit pentru a identifica cablurile terminate într‑un bloc 110 (Video: Toner - F0004)."
  },
  {
    id: "d5_pre_06",
    type: "multi",
    question: "What metrics does a multimeter tool measure? Choose three answers.",
    image: null,
    options: ["Voltage", "Resistance", "Latency", "Speed", "Current"],
    correct: [0, 1, 4],
    explanation: "Un multimetru măsoară tensiunea (voltage), rezistența (resistance) și curentul (current) (Video: Multimeter - C0001)."
  },
  {
    id: "d5_pre_07",
    type: "single",
    question: "The dig command in Linux is equivalent to which command in Windows?",
    image: null,
    options: ["tracert", "nslookup", "arp", "netstat", "ping"],
    correct: [1],
    explanation: "`dig` în Linux este similar cu `nslookup` în Windows, ambele fiind folosite pentru interogări DNS (Video: Tool Selection, Syntax 1 - M0006)."
  },
  {
    id: "d5_pre_08",
    type: "single",
    question: "Since most network issues are time-sensitive, ______ a solution can prevent revenue loss and data loss.",
    image: null,
    options: ["documenting", "escalating", "centralizing", "delegating", "improving"],
    correct: [1],
    explanation: "În pasul 5 al procesului de depanare, dacă nu poți rezolva problema, trebuie să o escalezi (escalate) pentru a evita întârzieri care pot cauza pierderi financiare sau de date (Video: Steps in the Troubleshooting Process 2 - F0001)."
  }
];