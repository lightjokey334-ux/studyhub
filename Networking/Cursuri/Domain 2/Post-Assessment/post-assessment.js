/* ===================================================================
   Domain 2 — Post-Assessment
   =================================================================== */

var QUESTIONS_D2_POST = [
  {
    id: "d2_post_01",
    type: "multi",
    question: "Which are the main purposes of wireless bridging? Choose two answers.",
    image: null,
    options: [
      "To boost a wireless signal",
      "To divide networks into segments",
      "To connect networks with the same 802.11 standards",
      "To connect multiple network segments"
    ],
    correct: [0, 3],
    explanation: "Wireless bridging conectează segmente de rețea (adesea cablate) și poate amplifica semnalul ca un repetor. Conectează rețele cu <u>diferite</u> standarde 802.11, nu neapărat aceleași (Video: Wireless Bridging)."
  },
  {
    id: "d2_post_02",
    type: "single",
    question: "Which form of DSL has a much higher download speed than upload speed?",
    image: null,
    options: ["SDSL", "HDSL", "ADSL", "VDSL"],
    correct: [2],
    explanation: "ADSL (Asynchronous DSL) are viteze diferite de descărcare/încărcare, descărcarea fiind mult mai mare. SDSL are viteze simetrice (Video: DSL, Cable Modem)."
  },
  {
    id: "d2_post_03",
    type: "single",
    question: "Which IP address can an administrator ping to test a network card on a device?",
    image: null,
    options: ["127.0.0.1", "169.254.0.1", "10.0.0.1", "192.168.0.1"],
    correct: [0],
    explanation: "127.0.0.1 este adresa de loopback; ping-ul verifică placa de rețea locală (Video: Reserved Address Ranges)."
  },
  {
    id: "d2_post_04",
    type: "single",
    question: "On what circuit does a PRI run?",
    image: null,
    options: ["T3", "T1", "E3", "E1"],
    correct: [1],
    explanation: "PRI (Primary Rate ISDN) rulează pe un circuit T1 (Video: Leased Lines, Dial-Up, ISDN)."
  },
  {
    id: "d2_post_05",
    type: "single",
    question: "How many 64 Kbps channels are used for a basic rate ISDN?",
    image: null,
    options: ["4", "24", "23", "2"],
    correct: [3],
    explanation: "BRI (Basic Rate ISDN) utilizează <b>2</b> canale de 64 Kbps (Video: Leased Lines, Dial-Up, ISDN)."
  },
  {
    id: "d2_post_06",
    type: "multi",
    question: "Which of these IP addresses are private? Choose three answers.",
    image: null,
    options: ["10.1.1.1", "192.200.1.1", "172.16.1.1", "192.168.1.1", "172.1.1.1", "172.33.1.1"],
    correct: [0, 2, 3],
    explanation: "IP-urile private sunt: 10.x.x.x, 172.16–31.x.x și 192.168.x.x. 172.1.x.x și 172.33.x.x nu sunt private (Video: Addressing)."
  },
  {
    id: "d2_post_07",
    type: "single",
    question: "Which is true about an Internet service using DSL and a cable modem?",
    image: null,
    options: [
      "Both use shared bandwidth",
      "Cable uses shared bandwidth while DSL uses dedicated lines",
      "Cable uses dedicated lines while DSL uses shared bandwidth",
      "Both use dedicated lines"
    ],
    correct: [1],
    explanation: "Cable modem folosește lățime de bandă partajată; DSL are linii dedicate (Video: DSL, Cable Modem)."
  },
  {
    id: "d2_post_08",
    type: "single",
    question: "Which is the top advertised speed for a dial-up connection?",
    image: null,
    options: ["56 Kbps", "38 Kbps", "64 Kbps", "128 Kbps"],
    correct: [0],
    explanation: "Viteza maximă anunțată pentru dial‑up este 56 Kbps (reală ~38 Kbps) (Video: Leased Lines, Dial-Up, ISDN)."
  },
  {
    id: "d2_post_09",
    type: "multi",
    question: "In a three-leg perimeter configuration, a firewall connects which security zones? Choose three answers.",
    image: null,
    options: ["Proxy", "Perimeter network", "Private", "Public", "Area network"],
    correct: [1, 2, 3],
    explanation: "Configurația three‑leg conectează: rețeaua perimetrală (DMZ), zona privată și zona publică (Video: Perimeter Networks 2)."
  },
  {
    id: "d2_post_10",
    type: "single",
    question: "How many connections are in a full mesh network with four devices?",
    image: null,
    options: ["4", "6", "3", "8"],
    correct: [1],
    explanation: "Formula n·(n‑1)/2 pentru n=4 dă 4·3/2 = <b>6</b> conexiuni (Video: Star, Mesh)."
  },
  {
    id: "d2_post_11",
    type: "match",
    question: "Match each leased line to its top speed.",
    image: null,
    pairs: ["T1", "E3", "T3", "E1"],
    options: ["1.544 Mbps", "44.736 Mbps", "2.048 Mbps", "34.368 Mbps"],
    correct: ["1.544 Mbps", "34.368 Mbps", "44.736 Mbps", "2.048 Mbps"],
    explanation: "T1=1.544 Mbps, E3=34.368 Mbps, T3=44.736 Mbps, E1=2.048 Mbps (Video: T1, T3, E1, E3)."
  },
  {
    id: "d2_post_12",
    type: "multi",
    question: "What do ad hoc and P2P networks lack when compared to an infrastructure network? Choose two answers.",
    image: null,
    options: ["A wireless access point", "Clients", "Antennas", "Encryption"],
    correct: [0, 3],
    explanation: "Ad‑hoc/P2P nu au un punct de acces central și nici criptare sau securitate (Video: P2P and Ad Hoc Connections)."
  },
  {
    id: "d2_post_13",
    type: "single",
    question: "To what are wireless LANs more susceptible than wired LANs?",
    image: null,
    options: ["Equipment failure", "Crosstalk", "EMI", "Signal interference"],
    correct: [3],
    explanation: "Rețelele wireless sunt mai sensibile la interferența semnalului (Video: Wired and Wireless LANs)."
  },
  {
    id: "d2_post_14",
    type: "single",
    question: "A ______ topology describes how data flows through a network, while a ______ topology is the actual appearance and setup of a network.",
    image: null,
    options: ["logical, physical", "physical, physical", "logical, logical", "physical, logical"],
    correct: [0],
    explanation: "Topologia <b>logică</b> = fluxul datelor; topologia <b>fizică</b> = aspectul cablajului/dispozitivelor (Video: Logical and Physical Topologies)."
  },
  {
    id: "d2_post_15",
    type: "multi",
    question: "Which are common perimeter network configurations? Choose two answers.",
    image: null,
    options: ["Three-leg perimeter", "Zone-based", "Back-to-back", "Two-leg perimeter"],
    correct: [0, 2],
    explanation: "Configurații comune: <b>three‑leg</b> (un singur firewall) și <b>back‑to‑back</b> (firewall pe ambele părți) (Video: Perimeter Networks 2)."
  },
  {
    id: "d2_post_16",
    type: "match",
    question: "Match each network topology to one of its characteristics.",
    image: null,
    pairs: ["Star", "Mesh", "Bus", "Ring"],
    options: [
      "Switch usually serves as a central point",
      "Network connections provide redundancy",
      "Only one device can transmit at a time",
      "Must have terminators on both ends"
    ],
    correct: ["Switch usually serves as a central point", "Network connections provide redundancy", "Must have terminators on both ends", "Only one device can transmit at a time"],
    explanation: "Star = switch central; Mesh = conexiuni redundante; Bus = terminatori la capete; Ring = transmisie token‑based (Video: Star, Mesh și Ring, Bus)."
  },
  {
    id: "d2_post_17",
    type: "multi",
    question: "How should users position a wireless access point to ensure high speeds? Choose two answers.",
    image: null,
    options: [
      "Place the wireless access point near electromagnetic equipment",
      "Place the wireless access point above ground",
      "Place the wireless access point centrally in a room",
      "Place the wireless access point in a crowded location"
    ],
    correct: [1, 2],
    explanation: "Poziționați AP-ul <b>central în încăpere</b> și <b>deasupra solului</b> pentru semnal clar; evitați echipamentele care interferează (Video: Wireless Interference)."
  },
  {
    id: "d2_post_18",
    type: "single",
    question: "Which form of wireless encryption is considered weak, as it has been cracked?",
    image: null,
    options: ["WPS", "WPA2", "WEP", "WPA"],
    correct: [2],
    explanation: "WEP este slab și a fost spart; nu trebuie utilizat (Video: Types of Network Security)."
  },
  {
    id: "d2_post_19",
    type: "match",
    question: "Match each IPsec protocol to its definition.",
    image: null,
    pairs: ["SA", "AH", "ESP"],
    options: [
      "Generates authentication and encryption keys",
      "Provides authentication and integrity of data",
      "Provides authentication, integrity, and encryption of data."
    ],
    correct: ["Generates authentication and encryption keys", "Provides authentication and integrity of data", "Provides authentication, integrity, and encryption of data."],
    explanation: "SA = generează chei; AH = autentificare + integritate (fără criptare); ESP = autentificare + integritate + criptare (Video: VPN)."
  },
  {
    id: "d2_post_20",
    type: "match",
    question: "Shown is a company floor plan for two teams, Operations and Project Management, on the same network. You have been tasked to connect all the users in one physical area. Complete the floor plan by dragging the Switch(es) and/or VLAN(s) to their correct places.",
    image: "floorplan.png",
    pairs: ["Box 1", "Box 2", "Box 3", "Box 4", "Box 5"],
    options: ["VLAN", "Switch"],
    correct: ["VLAN", "Switch", "VLAN", "VLAN", "VLAN"],
    explanation: "Cu un singur switch fizic se creează VLAN-uri logice pentru segmentele Operations și Project Management (Video: VLANs)."
  },
  {
    id: "d2_post_21",
    type: "single",
    question: "What is the biggest issue with satellite internet?",
    image: null,
    options: ["Connectivity", "Latency", "Availability", "Speed"],
    correct: [1],
    explanation: "Cea mai mare problemă este <b>latența</b> (semnalul parcurge ~20.000 mile dus‑întors) (Video: Cellular, Satellite)."
  },
  {
    id: "d2_post_22",
    type: "single",
    question: "Which best describes the type of connection generated from a leased line?",
    image: null,
    options: ["Private", "Public", "Dedicated", "Intermittent"],
    correct: [2],
    explanation: "Linia închiriată este <b>dedicatedă</b> – clientul are lățime de bandă constantă (Video: T1, T3, E1, E3)."
  },
  {
    id: "d2_post_23",
    type: "single",
    question: "Refer to the image. Which IP address is an example of APIPA?",
    image: "apipa.png",
    options: ["255.244.0.0", "169.254.0.1", "255.255.255.240", "172.22.126.33"],
    correct: [1],
    explanation: "APIPA = 169.254.x.x – se atribuie când DHCP nu răspunde (Video: Reserved Address Ranges)."
  },
  {
    id: "d2_post_24",
    type: "multi",
    question: "Which forms of wireless encryption are considered strong enough to use? Choose two answers.",
    image: null,
    options: ["WPA2", "WEP", "WPS", "WPA"],
    correct: [0, 3],
    explanation: "WPA și WPA2 sunt sigure; WEP este spart, iar WPS nu este o metodă de criptare (Video: Types of Network Security)."
  },
  {
    id: "d2_post_25",
    type: "match",
    question: "Match each aspect of 802.11x to an item it represents.",
    image: null,
    pairs: ["Authenticator", "Network", "Supplicant"],
    options: ["Remote client", "Router", "RADIUS server"],
    correct: ["Router", "RADIUS server", "Remote client"],
    explanation: "Authenticator = router; Network = server de autentificare (RADIUS); Supplicant = clientul remote (Video: Types of Network Security)."
  },
  {
    id: "d2_post_26",
    type: "single",
    question: "A network is set up with a central device but only one token transmits at a time. The network is a ______ star and a ______ ring.",
    image: null,
    options: ["logical, logical", "physical, logical", "physical, physical", "logical, physical"],
    correct: [1],
    explanation: "Configurația fizică este stea (central device), dar fluxul logic este inel (token‑based) (Video: Logical and Physical Topologies)."
  },
  {
    id: "d2_post_27",
    type: "match",
    question: "Match each wireless networking standard to its matching frequency and speed.",
    image: null,
    pairs: ["802.11n", "802.11ac", "802.11b", "802.11a", "802.11g"],
    options: [
      "5 GHz and 54 Mbps",
      "2.4 GHz and 11 Mbps",
      "2.4 GHz and 54 Mbps",
      "2.4 GHz or 5 GHz and 600 Mbps",
      "5 GHz and 1300 Mbps"
    ],
    correct: ["2.4 GHz or 5 GHz and 600 Mbps", "5 GHz and 1300 Mbps", "2.4 GHz and 11 Mbps", "5 GHz and 54 Mbps", "2.4 GHz and 54 Mbps"],
    explanation: "802.11n = 2.4/5 GHz, 600 Mbps; ac = 5 GHz, 1300 Mbps; b = 2.4, 11 Mbps; a = 5, 54 Mbps; g = 2.4, 54 Mbps (Video: Standards and Characteristics)."
  }
];