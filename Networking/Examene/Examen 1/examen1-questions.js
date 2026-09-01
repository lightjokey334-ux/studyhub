var EXAM_TITLE = "Examen 1";
var EXAM_ID = "Networking_exam1";
var EXAM_QUESTIONS = [
  {
    id: "ex1_01",
    type: "single",
    question: "You are a network technician working on a number of calls for small businesses and you realize you are going to be late to your next call. What is the best course of action?",
    image: null,
    options: [
      "Wait until you arrive and then apologize",
      "Cancel the appointment",
      "Call the customer to let the customer know you are running behind schedule",
      "Offer the customer a discount on services"
    ],
    correct: [2],
    explanation: "Eticheta profesională impune anunțarea întârzierii (Video: Etiquette/Professional Conduct - F0002)."
  },
  {
    id: "ex1_02",
    type: "multi",
    question: "Which of the following statements are true about RIP router protocols? (Choose two)",
    image: null,
    options: [
      "A route cannot contain more than 15 hops.",
      "Route changes are broadcast instantly through the network.",
      "Route management becomes more effective as the network expands.",
      "Routes are calculated based on the number of hops required."
    ],
    correct: [0, 3],
    explanation: "RIP are un hop count maxim de 15 și calculează rutele pe baza numărului de hop-uri (Video: RIP vs. OSPF - F0012)."
  },
  {
    id: "ex1_03",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if it is false.",
    image: null,
    statements: [
      "CNAME records must be created manually.",
      "DNS resolves host names to IP addresses.",
      "LMHOSTS files resolve hostnames to IP addresses."
    ],
    labels: ["Yes", "No"],
    correct: [true, true, false],
    explanation: "CNAME și MX trebuie create manual; DNS rezolvă hostname-uri; LMHOSTS rezolvă NetBIOS, nu hostname-uri (Video: Resource Records - M0015, LMHOSTS File - M0017)."
  },
  {
    id: "ex1_04",
    type: "single",
    question: "Evaluate the underlined text in the following sentence. Select the correct answer if the underlined text does not make the statement correct. Select \"No change is needed\" if the underlined text makes the statement correct.\n\nA directly connected route has an administrative distance of <u>0</u>.",
    image: null,
    options: [
      "1",
      "120",
      "255",
      "No change is needed"
    ],
    correct: [3],
    explanation: "Rutele direct conectate au administrativ distance 0 (Video: Routing Table and Selection - M0006)."
  },
  {
    id: "ex1_05",
    type: "match",
    question: "Match each layer in the OSI Model with the encapsulation state of data.",
    image: null,
    pairs: ["Bit", "Frame", "Packet", "Segment"],
    options: [
      "Application Layer",
      "Session Layer",
      "Physical Layer",
      "Presentation Layer",
      "Data Link Layer",
      "Transport Layer",
      "Network Layer"
    ],
    correct: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    explanation: "Bit → Physical, Frame → Data-link, Packet → Network, Segment → Transport (Video: Packets and Frames - F0006)."
  },
  {
    id: "ex1_06",
    type: "single",
    question: "Connecting several computers together in a circle without the use of a hub or switch is using what kind of topology?",
    image: null,
    options: [
      "Diamond",
      "Mesh",
      "Ring",
      "Star"
    ],
    correct: [2],
    explanation: "Topologia în cerc este ring (Video: Ring, Bus - F0011)."
  },
  {
    id: "ex1_07",
    type: "single",
    question: "Which protocol in IPSec provides both authentication and encryption?",
    image: null,
    options: [
      "AH",
      "ESP",
      "L2TP",
      "PPTP"
    ],
    correct: [1],
    explanation: "ESP oferă autentificare și criptare; AH doar autentificare (Video: VPN - F0005)."
  },
  {
    id: "ex1_08",
    type: "single",
    question: "Which encryption standard is considered to be the weakest for wireless networks?",
    image: null,
    options: [
      "AES",
      "WEP",
      "WPA",
      "WPA2"
    ],
    correct: [1],
    explanation: "WEP este cel mai slab și a fost spart (Video: Types of Network Security - FM001)."
  },
  {
    id: "ex1_09",
    type: "single",
    question: "Which DNS servers hold complete tables of mappings of Internet addresses to IP addresses?",
    image: null,
    options: [
      "DNSEC",
      "External",
      "Namespace",
      "Root"
    ],
    correct: [3],
    explanation: "Cele 13 servere DNS rădăcină au tabele complete (Video: DNS - M0014)."
  },
  {
    id: "ex1_10",
    type: "single",
    question: "Which file resolves NetBIOS names to IP addresses?",
    image: null,
    options: [
      "DNS",
      "HOSTS",
      "LMHOSTS",
      "WINS"
    ],
    correct: [2],
    explanation: "LMHOSTS rezolvă nume NetBIOS în adrese IP (Video: LMHOSTS File - M0017)."
  },
  {
    id: "ex1_11",
    type: "single",
    question: "Which IEEE standard is used for wireless networks?",
    image: null,
    options: [
      "802.11",
      "802.2",
      "802.3",
      "802.5"
    ],
    correct: [0],
    explanation: "Standardul pentru wireless este 802.11 (Video: Standards and Characteristics - F0008)."
  },
  {
    id: "ex1_12",
    type: "single",
    question: "An administrator wants to give priority to video conferencing traffic on a router. What should be configured on the router to facilitate this?",
    image: null,
    options: [
      "Firewall",
      "Floating static routes",
      "QoS",
      "Static routing"
    ],
    correct: [2],
    explanation: "QoS (Quality of Service) prioritizează traficul (Video: Quality of Service - M0009)."
  },
  {
    id: "ex1_13",
    type: "single",
    question: "On which port does Remote Desktop run?",
    image: null,
    options: [
      "3389",
      "389",
      "636",
      "53"
    ],
    correct: [0],
    explanation: "RDP rulează pe portul 3389 (Video: RDP, SSH - M0013)."
  },
  {
    id: "ex1_14",
    type: "multi",
    question: "What are two advantages of using mesh topology in a network? (Choose two)",
    image: null,
    options: [
      "Data travels from node to node, with each node in the network handling each packet",
      "It is considered more reliable than other networks",
      "It is self-healing and can still operate when one node breaks down",
      "The protocols used are very lightweight with little overhead"
    ],
    correct: [1, 2],
    explanation: "Mesh este mai fiabil și auto-vindecător (Video: Star, Mesh - F0010)."
  },
  {
    id: "ex1_15",
    type: "truefalse",
    question: "For each of the following statements regarding causes of signal interference in networks, select Yes if the statement is true and No if the statement is false.",
    image: null,
    statements: [
      "Cordless phones can cause interference for wireless networks.",
      "Fluorescent lighting can cause EMI.",
      "Microwave ovens tend to cause interference in wired networks."
    ],
    labels: ["Yes", "No"],
    correct: [true, true, false],
    explanation: "Telefoanele fără fir și cuptoarele cu microunde interferează cu rețelele wireless, nu cu cele cablate; fluorescentele cauzează EMI (Video: Susceptibility - F0020)."
  },
  {
    id: "ex1_16",
    type: "dropdown",
    question: "A user in your company cannot connect to the Internet. You execute the ipconfig command on the user's computer and see the results displayed in the following image:",
    image: "image(35).png",
    statements: ["The problem is", "The solution is"],
    options: [
      ["DHCP should be enabled", "The default gateway is a broadcast address", "The default gateway is a network address", "The subnet mask is incorrect"],
      ["DHCP needs to be enabled", "The default gateway address needs to be changed", "The subnet mask needs to be changed"]
    ],
    correct: ["The default gateway is a broadcast address", "The default gateway address needs to be changed"],
    explanation: "Gateway-ul 10.1.13.255 este adresă de broadcast; trebuie schimbat (Video: Reserved Address Ranges - M0005)."
  },
  {
    id: "ex1_17",
    type: "dropdown",
    question: "For each situation, use the dropdown menus to select the correct response.",
    image: null,
    statements: [
      "A smart thermostat controlled by",
      "All IoT devices must have"
    ],
    options: [
      ["heat sensor", "motion detector", "an app"],
      ["a firewall", "an IP address", "an account"]
    ],
    correct: ["an app", "an IP address"],
    explanation: "Dispozitivele IoT sunt controlate prin aplicații și au nevoie de o adresă IP (Video: Define Network Concepts - C0001)."
  },
  {
    id: "ex1_18",
    type: "truefalse",
    question: "For each of the following statements regarding firewalls, select Yes if the statement is true and No if the statement is false.",
    image: null,
    statements: [
      "Firewalls are only set up on individual host machines.",
      "Firewalls can be hardware or software-based.",
      "Firewalls mainly use user accounts to filter data packets."
    ],
    labels: ["Yes", "No"],
    correct: [false, true, false],
    explanation: "Firewall-urile pot fi hardware sau software; nu sunt doar pe host-uri; filtrează după IP, port, protocol, nu conturi (Video: Firewalls - M0020)."
  },
  {
    id: "ex1_19",
    type: "multi",
    question: "Your purchasing department has purchased new single-band 802.11ac wireless routers. You want to make sure all of your wireless devices are compatible with this new router. Besides 802.11ac, which wireless standards will work with these wireless routers? (Choose two)",
    image: null,
    options: [
      "802.11a",
      "802.11b",
      "802.11g",
      "802.11n"
    ],
    correct: [0, 3],
    explanation: "802.11ac (single-band 5 GHz) este compatibil cu 802.11a și 802.11n (care suportă 5 GHz); 802.11b/g sunt doar 2.4 GHz (Video: Standards and Characteristics - F0008)."
  },
  {
    id: "ex1_20",
    type: "single",
    question: "Evaluate the underlined text in the statement below. Select the correct answer if the underlined text does not make the statement correct. Select \"No change is needed\" if the underlined text makes the statement correct.\n\nE1 connections use 32 channels to obtain a top speed of <u>2.048 Mbps</u>.",
    image: null,
    options: [
      "1.544 Mbps",
      "34.368 Mbps",
      "44.736 Mbps",
      "No change is needed"
    ],
    correct: [3],
    explanation: "E1 are 32 de canale × 64 Kbps = 2.048 Mbps (Video: T1, T3, E1, E3 - F0006)."
  },
  {
    id: "ex1_21",
    type: "single",
    question: "Which network troubleshooting tool is used to measure electrical currents and voltage?",
    image: null,
    options: [
      "Multimeter",
      "TDR",
      "OTDR",
      "Toner"
    ],
    correct: [0],
    explanation: "Multimetrul măsoară curent, tensiune și rezistență (Video: Multimeter - C0001)."
  },
  {
    id: "ex1_22",
    type: "single",
    question: "You have been tasked with installing a routing protocol that monitors the network for routers that have changed their link state. Which routing protocol will accomplish this?",
    image: null,
    options: [
      "IGRP",
      "NAT",
      "OSPF",
      "RIP"
    ],
    correct: [2],
    explanation: "OSPF este link-state și monitorizează schimbările de stare (Video: RIP vs. OSPF - F0012)."
  },
  {
    id: "ex1_23",
    type: "match",
    question: "Match each Maximum Data Transfer Rate to a WAN Technology.",
    image: null,
    pairs: ["128 Kbps", "56 Kbps", "1.536 Mbps", "2.048 Mbps"],
    options: ["Dial-up", "E1", "ISDN", "T1"],
    correct: ["ISDN", "Dial-up", "T1", "E1"],
    explanation: "ISDN BRI = 128 Kbps; Dial-up = 56 Kbps; T1 = 1.544 Mbps (aprox. 1.536); E1 = 2.048 Mbps (Video: Leased Lines, Dial-Up, ISDN - F0004; T1, T3, E1, E3 - F0006)."
  },
  {
    id: "ex1_24",
    type: "single",
    question: "Which type of hypervisor does not sit inside of an operating system?",
    image: null,
    options: [
      "Type I",
      "Type II",
      "Type III",
      "Type IV"
    ],
    correct: [0],
    explanation: "Hypervizorii de tip I (bare-metal) nu rulează într-un OS (Video: Hypervisors - M0001)."
  },
  {
    id: "ex1_25",
    type: "multi",
    question: "Which are the two main filters that firewalls use for data packets? (Choose two)",
    image: null,
    options: [
      "Applications",
      "IP addresses",
      "Ports",
      "Protocols",
      "User accounts"
    ],
    correct: [1, 2],
    explanation: "Firewall-urile filtrează pe baza adreselor IP și a porturilor (Video: Firewalls - M0020)."
  },
  {
    id: "ex1_26",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if it is not.",
    image: null,
    statements: [
      "IP is connection-oriented and reliable.",
      "TCP is connection-oriented and reliable.",
      "UDP is connectionless and unreliable."
    ],
    labels: ["Yes", "No"],
    correct: [false, true, true],
    explanation: "IP este connectionless; TCP este connection-oriented; UDP este connectionless (Video: TCP and UDP - F0004)."
  },
  {
    id: "ex1_27",
    type: "match",
    question: "Match each port speed to its definition. Each port speed may be used once, more than once, or not at all.",
    image: null,
    pairs: ["1000 Kbps", "1 Gbps", "1 Kbps", "10 Mbps"],
    options: [
      "1 Mbps",
      "1,000 bits per second",
      "1,000 Megabits per second",
      "10,000,000 bits per second"
    ],
    correct: [
      "1 Mbps",
      "1,000 Megabits per second",
      "1,000 bits per second",
      "10,000,000 bits per second"
    ],
    explanation: "1000 Kbps = 1 Mbps; 1 Gbps = 1000 Mbps; 1 Kbps = 1000 bps; 10 Mbps = 10.000.000 bps."
  },
  {
    id: "ex1_28",
    type: "single",
    question: "You need to set up 750 computers on the same network. Which IP class is the best option?",
    image: null,
    options: [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    correct: [1],
    explanation: "Clasa B suportă până la ~65.000 de gazde (Video: Addressing - F0011)."
  },
  {
    id: "ex1_29",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if the statement is false.",
    image: null,
    statements: [
      "In a star topology, a bad cable affects only two interfaces.",
      "In a star topology, a central connection point allows for flexibility and scalability.",
      "In a star topology, failure of a central connectivity device does not bring down the entire network."
    ],
    labels: ["Yes", "No"],
    correct: [true, true, false],   // ← AM CORECTAT AICI (era false, true, false)
    explanation: "În stea, un cablu defect afectează doar acea conexiune (două interfețe); punctul central oferă flexibilitate; defectarea dispozitivului central întrerupe întreaga rețea (Video: Star, Mesh - F0010)."
  },
  {
    id: "ex1_30",
    type: "single",
    question: "Which of the following is a member of the IPsec protocol suite and provides origin authenticity, integrity, and confidentiality protection of packets?",
    image: null,
    options: [
      "AH",
      "ESP",
      "L2TP",
      "PPTP"
    ],
    correct: [1],
    explanation: "ESP oferă autenticitate, integritate și confidențialitate (Video: VPN - F0005)."
  },
  {
    id: "ex1_31",
    type: "match",
    question: "Using drag and drop, match each port with its port number.",
    image: null,
    pairs: ["443", "21", "25", "53", "22"],
    options: ["FTP", "SSH", "SMTP", "HTTPS", "DNS"],
    correct: ["HTTPS", "FTP", "SMTP", "DNS", "SSH"],
    explanation: "443=HTTPS, 21=FTP, 25=SMTP, 53=DNS, 22=SSH (Video: Well-Known Ports - F0005; RDP, SSH - M0013)."
  },
  {
    id: "ex1_32",
    type: "single",
    question: "Which type of cable is least susceptible to EMI?",
    image: null,
    options: [
      "Coaxial",
      "Fiber optic",
      "STP",
      "UTP"
    ],
    correct: [1],
    explanation: "Fibra optică nu este afectată de interferențe electromagnetice (Video: Fiber Optic - F0017)."
  },
  {
    id: "ex1_33",
    type: "multi",
    question: "Which two statements are true about Microsoft security zones? (Choose two)",
    image: null,
    options: [
      "Adding a website to a security zone blocks access to that website.",
      "Internet Explorer has four security zones.",
      "The default security level for Local intranet and Trusted sites is the same.",
      "The security level for Restricted sites can be changed.",
      "Windows Firewall is the application you must use to add or remove websites to security zones."
    ],
    correct: [1, 3],
    explanation: "IE are patru zone de securitate; nivelul pentru siturile restricționate poate fi modificat (Video: nu este în material, dar este corect)."
  },
  {
    id: "ex1_34",
    type: "single",
    question: "You need to subnet a 192.168.1.0 network using a class C network. What will be the subnet mask?",
    image: null,
    options: [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    correct: [2],
    explanation: "Clasa C are masca implicită 255.255.255.0 (Video: Subnet Masks - FM001)."
  },
  {
    id: "ex1_35",
    type: "single",
    question: "You need to find the MAC address of the network adapter for the computer you are currently working on. What command line command will give you the information you need?",
    image: null,
    options: [
      "arp",
      "grep",
      "ipconfig",
      "ipconfig /all"
    ],
    correct: [3],
    explanation: "`ipconfig /all` afișează adresa MAC (Physical Address) (Video: IPv4 Ipconfig - M0002)."
  },
  {
    id: "ex1_36",
    type: "dropdown",
    question: "The corporation where you work has asked you to telecommute from home two days per week. The access you've been provided to your company network looks similar to the following image:",
    image: "image(36).png",
    statements: ["The access you will use to securely connect your home computer to your company intranet is a", "Which type of VPN is in use in this example?"],
    options: [
      ["GRE", "IPsec", "VPN"],
      ["Host-to-Host", "Host-to-Site", "Site-to-Site"]
    ],
    correct: ["VPN", "Host-to-Site"],
    explanation: "VPN oferă acces securizat; conexiunea de la un computer individual la un site este Host-to-Site (Video: VPN - M0004)."
  },
  {
    id: "ex1_37",
    type: "dropdown",
    question: "Your small business has been growing and so has the number of computers on your network. Your employees are starting to complain that their computers are responding slowly whenever they access network resources. The layout of your LAN is similar to the following image:",
    image: "image(37).png",
    statements: ["The physical topology of this network is which kind of topology?", "Which device change on the network would greatly improve network speed?"],
    options: [
      ["Bus", "Mesh", "Star"],
      ["Replace the hub with a router", "Replace the hub with a switch", "Replace twisted-pair cables with fiber-optic cables"]
    ],
    correct: ["Star", "Replace the hub with a switch"],
    explanation: "Topologia fizică este stea (hub central); înlocuirea hub-ului cu un switch îmbunătățește viteza (Video: Hubs vs. Switches - F0009)."
  },
  {
    id: "ex1_38",
    type: "single",
    question: "You need to connect three wireless networks together: an 802.11a, an 802.11g, and an 802.11n. Which wireless tool should you use to accomplish this task?",
    image: null,
    options: [
      "Wireless access point",
      "Wireless bridge",
      "Wireless network adapter",
      "Wireless router"
    ],
    correct: [1],
    explanation: "Un pod wireless (wireless bridge) poate conecta rețele cu standarde diferite (Video: Wireless Bridging - F0009)."
  },
  {
    id: "ex1_39",
    type: "single",
    question: "You need to set up 200 computers on a Class A private network. Which of the following network IDs meet all the criteria of a Class A private network?",
    image: null,
    options: [
      "10.0.0.0",
      "100.10.1.0",
      "172.168.0.1",
      "192.168.1.0"
    ],
    correct: [0],
    explanation: "Clasa A privată este 10.0.0.0/8 (Video: Addressing - F0011)."
  },
  {
    id: "ex1_40",
    type: "dropdown",
    question: "For each situation, use the dropdown menu to select the correct DNS record type.",
    image: null,
    statements: [
      "Which record type should an administrator create to have a more user-friendly name for a host machine?",
      "Which type of record resolves IP addresses to hostnames?"
    ],
    options: [
      ["A", "CNAME", "PTR"],
      ["A", "CNAME", "PTR"]
    ],
    correct: ["CNAME", "PTR"],
    explanation: "CNAME creează alias; PTR rezolvă IP în hostname (Video: Resource Records - M0015)."
  },
  {
    id: "ex1_41",
    type: "single",
    question: "You need to set up a group of IPv6 network interfaces in such a way that each packet is delivered to each interface. You should implement a(n) ______ address.",
    image: null,
    options: [
      "Anycast",
      "Broadcast",
      "Multicast",
      "Singlecast"
    ],
    correct: [2],
    explanation: "Multicast trimite fiecărui membru al grupului; IPv6 nu are broadcast (Video: IPv6 Address Types - M0010)."
  },
  {
    id: "ex1_42",
    type: "multi",
    question: "You are a junior network administrator for a large company that spans several buildings. The company uses Linux as its operating system. Monday morning, none of the computers in your building can connect to resources stored on a server located several buildings away.\n\nWhich three are Linux command-line tools that will help you identify connectivity problems? (Choose 3)",
    image: null,
    options: [
      "netbios",
      "netstat",
      "ip",
      "ipconfig",
      "ping"
    ],
    correct: [1, 2, 4],
    explanation: "Linux folosește `ping`, `ip` și `netstat`; `ipconfig` este Windows (Video: Tool Selection, Syntax 1 - M0006)."
  },
  {
    id: "ex1_43",
    type: "single",
    question: "Evaluate the underlined text in the statement below. Select the correct answer if the underlined text does not make the statement correct. Select \"No change is needed\" if the underlined text makes the statement correct.\n\nA cable that meets the 1000BaseT standard has a maximum length of <u>1,000</u> meters.",
    image: null,
    options: [
      "100 meters",
      "250 meters",
      "500 meters",
      "No change is needed"
    ],
    correct: [0],
    explanation: "1000BaseT are lungimea maximă de 100 de metri (Video: Cable Types and Characteristics - F0016)."
  },
  {
    id: "ex1_44",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if the statement is false.",
    image: null,
    statements: [
      "dhcp -release is the command that deletes an IP address bound to an interface.",
      "dhcp -renew is the command that acquires an IP address from a DHCP server.",
      "ipconfig /release is the command that deletes an IP address bound to an interface.",
      "ipconfig /renew is the command that acquires an IP address from a DHCP server."
    ],
    labels: ["Yes", "No"],
    correct: [false, false, true, true],
    explanation: "În Windows, `ipconfig /release` și `/renew` sunt corecte; comenzile `dhcp -...` nu există (Video: IPv4 Ipconfig - M0002)."
  },
  {
    id: "ex1_45",
    type: "single",
    question: "Evaluate the underlined text in the following statement. Select the correct answer if the underlined text does not make the statement correct. Select \"No change is needed\" if the underlined text makes the statement correct.\n\n<u>WEP</u> provides the strongest encryption for a wireless network.",
    image: null,
    options: [
      "No change is needed",
      "RADIUS",
      "WPA",
      "WPA2"
    ],
    correct: [3],
    explanation: "WPA2 este cel mai puternic standard de criptare wireless (Video: Types of Network Security - FM001)."
  },
  {
    id: "ex1_46",
    type: "single",
    question: "You can truncate IPv6 addresses to save time. The fully truncated version of 2001:4860:0000:2001:0000:0000:0000:0068 would be",
    image: null,
    options: [
      "2001:4860::68",
      "2001:4860:0:2001:0:0:68",
      "21:486::21::68"
    ],
    correct: [1],
    explanation: "Forma corectă (cu eliminarea zerourilor din față, dar fără compresia ultimelor trei blocuri) este `2001:4860:0:2001:0:0:68`; opțiunea cu `::` singur ar omite secțiunea `2001`. (Video: IPv6 Addressing, Subnet Masks - F0016)."
  }
];