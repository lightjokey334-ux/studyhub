var QUESTIONS_D3_POST = [
  {
    id: "d3_post_01",
    type: "single",
    question: "Which routing protocol is the default dynamic routing protocol in Windows?",
    image: null,
    options: ["EIGRP", "OSPF", "RIP", "TCP/IP"],
    correct: [3],
    explanation: "În Windows, protocolul implicit de rutare dinamică este TCP/IP (Video: Dynamic Routing - M0004)."
  },
  {
    id: "d3_post_02",
    type: "multi",
    question: "How do administrators use switches to ensure network security? Choose two answers.",
    image: null,
    options: ["Administrators can use switches to control the flow of network traffic", "Administrators can create a block list of MAC addresses that switches will ignore", "Administrators can control the number of MAC addresses each switch port will memorize", "Administrators can use switches to close certain ports and protocols from unauthorized access", "Administrators can use switches to route traffic between networks"],
    correct: [2, 3],
    explanation: "Pe switch-urile gestionate se poate controla numărul de adrese MAC memorate pe port și se pot închide porturi/protocoale pentru securitate (Video: Layer 2 and Layer 3 Switches - FM001)."
  },
  {
    id: "d3_post_03",
    type: "single",
    question: "According to the image, which of the following is considered to be the best route?",
    image: "route_table.png",
    options: ["0.0.0.0", "10.0.2.0", "127.0.0.1", "169.254.0.0"],
    correct: [0],
    explanation: "Ruta implicită (0.0.0.0) are cel mai mic metric și este considerată cea mai bună rută pentru traficul care nu aparține rețelelor locale (Video: Default Routes - M0005)."
  },
  {
    id: "d3_post_04",
    type: "single",
    question: "Which type of twisted-pair cable is required for running cable through walls or in between floors?",
    image: null,
    options: ["Plenum", "Stp", "Two-wired", "UTP"],
    correct: [0],
    explanation: "Cablul plenum este necesar pentru cablarea prin pereți sau între etaje, deoarece nu emană fum toxic în caz de incendiu (Video: Twisted-Pair - F0018)."
  },
  {
    id: "d3_post_05",
    type: "match",
    question: "Match each category of twisted-pair cable to its speed.",
    image: null,
    pairs: ["CAT5e", "CAT3", "CAT6a", "CAT5", "CAT6"],
    options: ["10 Mbps", "Fast Ethernet (100 Mbps)", "Both 100 Mbps and 1 Gbps", "10 Gbps (at about half the distance of normal twisted-pair cables)", "10 Gbps (at a full distance of 100 meters)"],
    correct: ["Both 100 Mbps and 1 Gbps", "10 Mbps", "10 Gbps (at a full distance of 100 meters)", "Fast Ethernet (100 Mbps)", "10 Gbps (at about half the distance of normal twisted-pair cables)"],
    explanation: "CAT5e = 100 Mbps și 1 Gbps; CAT3 = 10 Mbps; CAT6a = 10 Gbps la 100m; CAT5 = 100 Mbps; CAT6 = 10 Gbps până la 55m (Video: CAT Cabling - F0019)."
  },
  {
    id: "d3_post_06",
    type: "single",
    question: "The image shows a floor plan with an equal number of switch ports allocated to VLAN1 and VLAN2. If more users are assigned to Project Management, how might the floor plan change to accommodate their need for ports?",
    image: "vlan_floorplan.png",
    options: ["More physical ports are switched from VLAN2 to VLAN1", "More physical ports are switched from VLAN1 to VLAN2", "An extra physical port is added for both VLAN1 and VLAN2", "A second physical switch is added to connect VLAN1 to VLAN2"],
    correct: [1],
    explanation: "VLAN-urile permit realocarea porturilor fizice între VLAN-uri – dacă Project Management are nevoie de mai multe porturi, se mută porturi de la VLAN1 la VLAN2 (Video: VLAN Capabilities - F0005)."
  },
  {
    id: "d3_post_07",
    type: "multi",
    question: "Which can lead to signal interference in wireless networks? Choose three answers.",
    image: null,
    options: ["Walls", "Elevator shafts", "Wireless modems", "Open spaces", "Cordless phones"],
    correct: [0, 1, 4],
    explanation: "Pereții, puțurile de lift și telefoanele fără fir pot interfera cu semnalele wireless (Video: Susceptibility - F0020)."
  },
  {
    id: "d3_post_08",
    type: "single",
    question: "Which type of line connects multiple physical switches in a VLAN environment?",
    image: null,
    options: ["Access", "Dedicated", "Reserved", "Trunk"],
    correct: [3],
    explanation: "Linia trunk conectează switch-uri și extinde VLAN-urile între ele (Video: VLAN Capabilities - F0005)."
  },
  {
    id: "d3_post_09",
    type: "multi",
    question: "Which is true about uplink ports on a switch? Choose two answers.",
    image: null,
    options: ["They are usually faster than other ports", "They are usually slower than other ports", "They accept connections from crossover cables", "They accept connections from straight-through and crossover cables"],
    correct: [0, 3],
    explanation: "Porturile uplink sunt de obicei mai rapide și acceptă atât cabluri straight-through cât și crossover (Video: Number and Speed of Uplinks - F0003)."
  },
  {
    id: "d3_post_10",
    type: "multi",
    question: "Which are common types of virtual switches? Choose three answers.",
    image: null,
    options: ["External", "Internal", "Internet", "Private", "Public"],
    correct: [0, 1, 3],
    explanation: "Tipurile de switch virtual sunt: External, Internal și Private (Video: Virtual Switches - M0001)."
  },
  {
    id: "d3_post_11",
    type: "single",
    question: "A Spanning Tree Protocol (STP) transmits ______ to identify redundant links in switches.",
    image: null,
    options: ["Rapid Tunnel Units", "TCP timestamps", "MAC sublayers", "Bridge Protocol Data Units"],
    correct: [3],
    explanation: "STP transmite BPDU-uri (Bridge Protocol Data Units) pentru a identifica legăturile redundante (Video: Spanning Tree Protocol - F0010)."
  },
  {
    id: "d3_post_12",
    type: "single",
    question: "A computer training center contains three classrooms for students, an office for administrative staff, and a repair shop all located in the same building. If the groups are isolated from each other, how many network segments are in this scenario from a logical standpoint?",
    image: null,
    options: ["Two", "Three", "Four", "Five"],
    correct: [3],
    explanation: "Fiecare dintre cele trei săli de clasă este un segment logic separat, plus biroul administrativ și atelierul de reparații, rezultând cinci segmente (Video: Network Segmentation - F0014)."
  },
  {
    id: "d3_post_13",
    type: "single",
    question: "Which data transmission method for a switch has a switch receive a data frame, check it for errors, and then send the frame?",
    image: null,
    options: ["Cut-forward", "Cut-through", "Store-and-forward", "Store-and-send"],
    correct: [2],
    explanation: "Store-and-forward primește întregul cadru, verifică erorile și apoi îl trimite (Video: Switching Types and MAC Address Tables - F0008)."
  },
  {
    id: "d3_post_14",
    type: "single",
    question: "Which type of routing protocol is OSPF?",
    image: null,
    options: ["Distance-vector", "Hybrid", "Link-state", "Static"],
    correct: [2],
    explanation: "OSPF este un protocol de rutare link-state (Video: RIP vs. OSPF - F0012)."
  },
  {
    id: "d3_post_15",
    type: "single",
    question: "Which data transmission method for a switch sends a frame on the basis of just the destination MAC address?",
    image: null,
    options: ["Cut-forward", "Cut-through", "Store-and-forward", "Store-and-send"],
    correct: [1],
    explanation: "Cut-through forwardează cadrul imediat ce a citit adresa MAC destinație, fără a verifica erorile (Video: Switching Types and MAC Address Tables - F0008)."
  },
  {
    id: "d3_post_16",
    type: "single",
    question: "What do switches store that hubs do not store?",
    image: null,
    options: ["Data forwarders", "IP addresses", "MAC addresses", "Routing tables"],
    correct: [2],
    explanation: "Switch-urile stochează adrese MAC, hub-urile nu (Video: Hubs vs. Switches - F0009)."
  },
  {
    id: "d3_post_17",
    type: "single",
    question: "In convergence, a root bridge router learns the ______ of an entire network and then distributes it to the remaining routers on the network.",
    image: null,
    options: ["route protocols", "MAC address", "topology", "network segmentation"],
    correct: [2],
    explanation: "În convergență, router-ul rădăcină învață topologia întregii rețele și o distribuie celorlalte routere (Video: Convergence - F0015)."
  },
  {
    id: "d3_post_18",
    type: "single",
    question: "Which network speed is represented as Fast Ethernet?",
    image: null,
    options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
    correct: [1],
    explanation: "Fast Ethernet = 100 Mbps (Video: Transmission Speeds 2 - F0001)."
  },
  {
    id: "d3_post_19",
    type: "single",
    question: "Which protocol takes up the most memory within a router?",
    image: null,
    options: ["Routing Information Protocol (RIP)", "Open Quickest Path First (OQPF)", "Exit Gateway Routing Protocol (EGRP)", "Border Gateway Protocol (BGP)"],
    correct: [3],
    explanation: "BGP construiește tabele de rutare foarte mari și consumă multă memorie (Video: Routing Table Memory - F0013)."
  },
  {
    id: "d3_post_20",
    type: "single",
    question: "A switch has forty-eight 100 Mbps ports. What is the backplane speed of the switch?",
    image: null,
    options: ["100 Mbps", "200 Mbps", "4.8 Gbps", "48 Gbps"],
    correct: [2],
    explanation: "Backplane speed = 100 Mbps × 48 = 4.8 Gbps (Video: Backplane Speed - F0007)."
  },
  {
    id: "d3_post_21",
    type: "single",
    question: "Which is the default route in a routing table?",
    image: null,
    options: ["0.0.0.0", "1.1.1.1", "127.0.0.1", "255.255.255.255"],
    correct: [0],
    explanation: "Ruta implicită este 0.0.0.0 (Video: Default Routes - M0005)."
  },
  {
    id: "d3_post_22",
    type: "single",
    question: "An 802.11n router with a Fast Ethernet port has a wired connection to a device. What will be the top speed of transmission from the device to the router?",
    image: null,
    options: ["100 Mbps", "300 Mbps", "600 Mbps", "1 Gbps"],
    correct: [0],
    explanation: "Portul Fast Ethernet limitează viteza la 100 Mbps, indiferent de capacitatea wireless a routerului (Video: Transmission Speed Considerations - F0011)."
  },
  {
    id: "d3_post_23",
    type: "single",
    question: "Which type of network connection is best suited for two routers connected to each other?",
    image: null,
    options: ["Static route", "Dynamic route", "Direct connection", "Default route"],
    correct: [2],
    explanation: "O conexiune directă între două routere este o rută direct conectată (Video: Directly Connected Routes - M0002)."
  },
  {
    id: "d3_post_24",
    type: "single",
    question: "Refer to the image. Which path would RIP identify as the best route from Router A to Router D?",
    image: "rip_diagram.png",
    options: ["Router A to Router D at 10 Mbps", "Router A to Router B to Router C to Router D at 100 Mbps", "Router A to Router D at 100 Mbps", "Router A to Router B to Router C to Router D at 10 Mbps"],
    correct: [0],
    explanation: "RIP prioritizează hop count-ul, deci alege calea directă (un hop) chiar dacă este mai lentă (Video: RIP vs. OSPF - F0012)."
  },
  {
    id: "d3_post_25",
    type: "single",
    question: "What is an added benefit to hardware redundancy?",
    image: null,
    options: ["High availability", "Increased speed", "Increased throughput", "Load balancing"],
    correct: [0],
    explanation: "Redundanța hardware asigură disponibilitate ridicată (high availability) – dacă un dispozitiv cade, altul preia (Video: Hardware Redundancy and Support - F0006)."
  },
  {
    id: "d3_post_26",
    type: "single",
    question: "What does a yellow light on a switch connection usually indicate?",
    image: null,
    options: ["The connection is being interrupted intermittently", "The connection is running at full speed", "The connection is running at less than full speed", "The connection is not running"],
    correct: [2],
    explanation: "LED galben indică o conexiune care rulează la o viteză mai mică decât cea maximă (Video: Number and Type of Ports - F0002)."
  },
  {
    id: "d3_post_27",
    type: "single",
    question: "An administrator needs to carry a signal for one mile. Which is the best type of cable to use?",
    image: null,
    options: ["Coaxial", "Multimode", "Single-mode", "Twisted-pair"],
    correct: [2],
    explanation: "Fibra optică single-mode este cea mai bună pentru distanțe mari (până la 70 km) – un mile este aproximativ 1,6 km (Video: Fiber Optic - F0017)."
  },
  {
    id: "d3_post_28",
    type: "multi",
    question: "What are wired networks susceptible to for losing quality in data transmissions? Choose three answers.",
    image: null,
    options: ["Cordless phones", "EMI", "Fluorescent lighting", "Power cables", "Walls"],
    correct: [1, 2, 3],
    explanation: "Cablurile twisted-pair sunt susceptibile la EMI, lumini fluorescente și cabluri de alimentare (Video: Susceptibility - F0020)."
  },
  {
    id: "d3_post_29",
    type: "single",
    question: "Which type of switch is a plug and play switch?",
    image: null,
    options: ["Core", "Distributed", "Managed", "Unmanaged"],
    correct: [3],
    explanation: "Switch-urile neadministrate (unmanaged) sunt plug and play (Video: Managed or Unmanaged Switches - F0004)."
  },
  {
    id: "d3_post_30",
    type: "single",
    question: "Refer to the image. How many switches are in use on the Windows Server 2016 365 DC virtual machine?",
    image: "hyperv_settings.png",
    options: ["One", "Two", "Three", "Four"],
    correct: [0],
    explanation: "Mașina virtuală are un singur comutator virtual configurat (Video: Virtual Switches - M0001)."
  },
  {
    id: "d3_post_31",
    type: "single",
    question: "What is the top distance for data transmissions over twisted-pair cables?",
    image: null,
    options: ["100 feet", "328 feet", "500 feet", "600 feet"],
    correct: [1],
    explanation: "Distanța maximă pentru cablul twisted-pair este de 328 de picioare (100 de metri) (Video: Cable Types and Characteristics - F0016)."
  },
  {
    id: "d3_post_32",
    type: "single",
    question: "Which type of fiber optic cable carries signals for a maximum of 600 meters?",
    image: null,
    options: ["Coaxial", "Multimode", "Single-mode", "Twisted-pair"],
    correct: [1],
    explanation: "Fibra optică multimode este utilizată pentru distanțe mai scurte (până la 600 de metri) (Video: Fiber Optic - F0017)."
  },
  {
    id: "d3_post_33",
    type: "single",
    question: "How many devices are involved in a directly connected route?",
    image: null,
    options: ["1", "2", "The number of gateways on the network", "The number of routers on a network"],
    correct: [1],
    explanation: "O rută direct conectată implică două dispozitive (de obicei două routere) (Video: Directly Connected Routes - M0002)."
  },
  {
    id: "d3_post_34",
    type: "single",
    question: "Which set of wireless channels is safe to use on a 2.4 GHz network to avoid overlapping?",
    image: null,
    options: ["1, 2, 3", "1, 5, 9", "1, 6, 11", "2, 4, 12"],
    correct: [2],
    explanation: "Canalele 1, 6 și 11 sunt singurele care nu se suprapun în banda de 2.4 GHz (Video: Standards and Characteristics - F0008)."
  }
];