var QUESTIONS_D3_PRE = [
  {
    id: "d3_pre_01",
    type: "single",
    question: "Twisted-pair cables are particularly susceptible to which issue, usually the result of a damaged cable?",
    image: null,
    options: ["Surges", "EMI", "Spikes", "Crosstalk"],
    correct: [3],
    explanation: "Crosstalk-ul apare la cablurile deteriorate și afectează transmisia (Video: Susceptibility - F0020)."
  },
  {
    id: "d3_pre_02",
    type: "single",
    question: "What is the speed range of fiber-optic cables?",
    image: null,
    options: ["From 10 Mbps to 100 Mbps", "From 10 Mbps to 10 Gbps", "From 100 Mbps to 10 Gbps", "From 10 Gbps to 100 Gbps"],
    correct: [2],
    explanation: "Fibra optică are viteze cuprinse între 100 Mbps și 10 Gbps (Video: Cable Types and Characteristics - F0016)."
  },
  {
    id: "d3_pre_03",
    type: "single",
    question: "What should administrators disable in order to secure a wireless network?",
    image: null,
    options: ["VPN", "SSID", "OAuth", "MFA"],
    correct: [1],
    explanation: "Dezactivarea broadcast-ului SSID ascunde rețeaua wireless, sporind securitatea (Video: Securitate wireless – nu este în listă, dar este o practică standard)."
  },
  {
    id: "d3_pre_04",
    type: "single",
    question: "In Windows, administrators can type which command to include a static route to a network?",
    image: null,
    options: ["route find", "route add", "route identity", "route select"],
    correct: [1],
    explanation: "Comanda 'route add' adaugă o rută statică în Windows (Video: Static Routing - M0003)."
  },
  {
    id: "d3_pre_05",
    type: "multi",
    question: "What does QoS address with data transfers? Choose three answers.",
    image: null,
    options: ["App performance", "Bandwidth", "Delay", "Dropped packets", "Jitter"],
    correct: [2, 3, 4],
    explanation: "QoS abordează întârzierea (delay), pachetele pierdute (dropped packets) și jitter-ul (Video: Quality of Service - M0009)."
  },
  {
    id: "d3_pre_06",
    type: "single",
    question: "Backplane speed is the total ______ a switch is capable of at any given time.",
    image: null,
    options: ["throughput", "workload", "power", "resistance"],
    correct: [0],
    explanation: "Backplane speed = throughput-ul total pe care switch-ul îl poate susține (Video: Backplane Speed - F0007)."
  },
  {
    id: "d3_pre_07",
    type: "single",
    question: "Before switches became popular, what type of network device was used to direct traffic in LANs?",
    image: null,
    options: ["Bridges", "Hubs", "Routers", "Data centers"],
    correct: [1],
    explanation: "Înainte de switch-uri, hub-urile erau dispozitivele centrale din LAN-uri (Video: Hubs vs. Switches - F0009)."
  },
  {
    id: "d3_pre_08",
    type: "single",
    question: "What does RIP use to determine the best routes on a network?",
    image: null,
    options: ["Bandwidth", "Hop count", "Neighboring routers", "Speed"],
    correct: [1],
    explanation: "RIP folosește numărul de hop-uri (hop count) pentru a determina cea mai bună rută (Video: RIP vs. OSPF - F0012)."
  },
  {
    id: "d3_pre_09",
    type: "single",
    question: "In addition to regular switch duties, which additional duty does a layer 3 switch perform?",
    image: null,
    options: ["Physical transport", "Routing", "Segmenting", "Session initiation"],
    correct: [1],
    explanation: "Switch-ul de layer 3 poate face rutare între rețele, pe lângă funcțiile obișnuite ale unui switch (Video: Layer 2 and Layer 3 Switches - FM001)."
  },
  {
    id: "d3_pre_10",
    type: "single",
    question: "Which type of route will tend to have the lowest metric?",
    image: null,
    options: ["Directly connected", "Dynamic", "Multiple-hops", "Static"],
    correct: [0],
    explanation: "Rutele direct conectate au cel mai mic metric (Video: Routing Table and Selection - M0006)."
  },
  {
    id: "d3_pre_11",
    type: "single",
    question: "What type of loop occurs when a device is plugged into itself, overloading a switch?",
    image: null,
    options: ["Broadcast radiation", "Broadcast storm", "Broadcast attack", "Broadcast flood"],
    correct: [1],
    explanation: "O buclă fizică (un dispozitiv conectat la el însuși) poate cauza o furtună de broadcast (broadcast storm) (Video: Spanning Tree Protocol - F0010)."
  },
  {
    id: "d3_pre_12",
    type: "multi",
    question: "Why is UTP more commonly used than STP as a cable option for LANs? Choose two answers.",
    image: null,
    options: ["UTP is less expensive than STP and easier to install", "UTP is more resistant to fire than STP", "UTP is more useful in locations with machinery or fluorescent lighting", "STP emits a noxious odor when encountering EMI, while UTP does not", "While STP offers extra cable shielding, UTP's twisted-wire design can already reliably hold off EMI"],
    correct: [0, 4],
    explanation: "UTP este mai ieftin și mai ușor de instalat, iar torsada firelor oferă suficientă protecție împotriva EMI (Video: Twisted-Pair - F0018)."
  },
  {
    id: "d3_pre_13",
    type: "single",
    question: "A network switch utilizes a ______ to direct traffic within a network.",
    image: null,
    options: ["IP address table", "port and protocol sheet", "MAC address table", "data transmission chart"],
    correct: [2],
    explanation: "Switch-ul folosește un tabel de adrese MAC pentru a dirija traficul în rețea (Video: Transmission Speeds 2 - F0001)."
  },
  {
    id: "d3_pre_14",
    type: "multi",
    question: "Which two types of switches are typically available as virtual switches?",
    image: null,
    options: ["Public", "Internal", "Internet", "External"],
    correct: [1, 3],
    explanation: "Switch-urile virtuale includ tipurile Internal și External (Video: Virtual Switches - M0001)."
  },
  {
    id: "d3_pre_15",
    type: "single",
    question: "Network segmentation is the act of ______ and/or ______ breaking up a network into smaller networks.",
    image: null,
    options: ["centrally; independently", "technically; organically", "physically; logically", "legally; illegally"],
    correct: [2],
    explanation: "Segmentarea rețelei poate fi fizică și/sau logică (Video: Network Segmentation - F0014)."
  },
  {
    id: "d3_pre_16",
    type: "single",
    question: "In cut-through forwarding, if a frame is sent with an error, what happens to the frame when it reaches its destination?",
    image: null,
    options: ["It is corrected", "It is discarded", "It is flagged", "It is returned"],
    correct: [1],
    explanation: "În cut-through, cadrele cu erori sunt eliminate la destinație (Video: Switching Types and MAC Address Tables - F0008)."
  },
  {
    id: "d3_pre_17",
    type: "single",
    question: "Which type of switch can have an IP address set and security settings enabled?",
    image: null,
    options: ["Core", "Distributed", "Managed", "Unmanaged"],
    correct: [2],
    explanation: "Switch-urile gestionate (managed) pot avea IP și setări de securitate (Video: Managed or Unmanaged Switches - F0004)."
  },
  {
    id: "d3_pre_18",
    type: "single",
    question: "On a router, where is the routing table information stored?",
    image: null,
    options: ["In a file", "In RAM", "In ROM", "On the hard disk"],
    correct: [1],
    explanation: "Tabelele de rutare sunt stocate în memoria RAM a routerului (Video: Routing Table Memory - F0013)."
  },
  {
    id: "d3_pre_19",
    type: "multi",
    question: "What are the disadvantages of using fiber-optic cables? Choose two answers.",
    image: null,
    options: ["They are expensive", "They are inflexible", "They are slow", "They are prone to latency", "They are susceptible to interference"],
    correct: [0, 1],
    explanation: "Fibra optică este mai scumpă și mai puțin flexibilă decât cablul de cupru (Video: Fiber Optic - F0017)."
  },
  {
    id: "d3_pre_20",
    type: "single",
    question: "Any traffic not accounted for in a network address will route through the ______ gateway.",
    image: null,
    options: ["authorized", "original", "previous", "default"],
    correct: [3],
    explanation: "Traficul nedestinat rețelelor locale este trimis către gateway-ul implicit (default) (Video: Default Routes - M0005)."
  },
  {
    id: "d3_pre_21",
    type: "single",
    question: "Which CAT cable can only carry its top speed for 55 meters?",
    image: null,
    options: ["CAT3", "CAT5", "CAT6", "CAT6a"],
    correct: [2],
    explanation: "CAT6 suportă 10 Gbps doar până la 55 de metri (Video: CAT Cabling - F0019)."
  }
];