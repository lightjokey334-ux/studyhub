var QUESTIONS_D1_PRE = [
  {
    id: "d1_pre_01",
    type: "single",
    question: "Which type of VPN connection allows two businesses or two locations within a network to connect to each other?",
    image: null,
    options: ["Remote-to-remote connection", "Remote-to-site connection", "Site-to-remote connection", "Site-to-site connection"],
    correct: [3],
    explanation: "VPN site-to-site conectează două afaceri sau locații; remote-to-site este pentru utilizatori individuali care se conectează la o rețea (Video: VPN)."
  },
  {
    id: "d1_pre_02",
    type: "single",
    question: "A hypervisor is a tool that manages physical system resources for ______.",
    image: null,
    options: ["online databases", "wireless networks", "operating systems", "virtual machines"],
    correct: [3],
    explanation: "Un hypervisor gestionează resursele fizice pentru mașini virtuale (Video: Hypervisors)."
  },
  {
    id: "d1_pre_03",
    type: "multi",
    question: "Which statements are true when Remote Desktop Connection is used to access a device? Choose two answers.",
    image: null,
    options: ["Control can be passed back and forth between the remote user and the user on the device", "The remote user is given total control over the device", "Other persons can view the actions performed by the remote user on the device", "The remote user must input the proper credentials to access the device"],
    correct: [1, 3],
    explanation: "Remote Desktop Connection oferă control total utilizatorului la distanță și necesită acreditări; nu permite altora să vadă acțiunile și nici transferul de control (Video: Remote Desktop)."
  },
  {
    id: "d1_pre_04",
    type: "single",
    question: "A network administrator provides a few logins and passwords for external users to an internal secure network. Which type of network is this?",
    image: null,
    options: ["Intranet", "VPN", "Internet", "Extranet"],
    correct: [3],
    explanation: "Un extranet permite acces limitat utilizatorilor externi într-o rețea internă; intranetul este doar intern, VPN-ul este tunel securizat, internetul este public (Video: Define Network Concepts)."
  },
  {
    id: "d1_pre_05",
    type: "multi",
    question: "Which statements are true of virtual machines? Choose two answers.",
    image: null,
    options: ["Virtual machines are fully functional instances of an operating system inside a hypervisor", "Virtual machines provide an area to test apps and features without risking a host operating system", "Virtual machines utilize private networks to transmit data from a source to an operating system", "Virtual machines rely on specific hardware to allocate resources within an operating system"],
    correct: [0, 1],
    explanation: "Mașinile virtuale sunt instanțe complete de sistem de operare într-un hypervisor și oferă un mediu sigur pentru testare; ele nu folosesc rețele private pentru transmitere și nu depind de hardware specific pentru alocarea resurselor (Video: Virtual Machines)."
  }
];