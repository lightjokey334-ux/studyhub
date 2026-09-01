/* ===================================================================
   Examen 3 — Networking
   =================================================================== */

var EXAM_TITLE = "Networking — Examen 3";
var EXAM_ID = "Networking_exam3";
var EXAM_RANDOMIZE = true;

var EXAM_QUESTIONS = [
  {
    id: "ex3_01",
    type: "single",
    question: "What best describes a virtual machine?",
    image: null,
    options: [
      "Multiple operating systems running on one physical computer",
      "Cloud-based file storage",
      "A server used to authenticate users",
      "A smart device that can be controlled with an app"
    ],
    correct: [0],
    sourceImage: "Screenshot (1186).png",
    explanation: "Mașinile virtuale sunt instanțe software ale unui sistem de operare care rulează pe un singur computer fizic (Video: Virtual Machines)."
  },
  {
    id: "ex3_02",
    type: "single",
    question: "Evaluate the underlined text in the following statement. Select the correct answer if the underlined text does not make the statement correct. Select \"No change is needed\" if the underlined text makes the statement correct. A <u>WAN</u> is a connection that uses a dedicated phone line from a customer to a telco provider's office.",
    image: null,
    options: [
      "Cable",
      "DSL",
      "ISDN",
      "No change is needed"
    ],
    correct: [1],   // corectat de la [2]
    sourceImage: "Screenshot (1187).png",
    explanation: "Descrierea corespunde DSL-ului, nu WAN-ului (Video: DSL, Cable Modem)."
  },
  {
    id: "ex3_03",
    type: "dropdown",
    question: "Your IT Manager has asked you to identify and label a box of miscellaneous networking components. In the box is a cable wired as in the following image:\nUse the dropdown menus to complete each statement.",
    image: "crossover-cable.png",
    statements: [
      "The cable is a ______ cable.",
      "In which type of connection would this cable be used?"
    ],
    options: [
      ["Crossover", "Rollover", "Straight-through"],
      ["Switch to computer", "Switch to router", "Switch to switch"]
    ],
    correct: ["Crossover", "Switch to switch"],
    sourceImage: [
      { label: "Intrebare", file: "Screenshot (1188)q37.png" },
      { label: "Raspunsul 1", file: "Screenshot (1189)q37 r1.png" },
      { label: "Raspunsul 2", file: "Screenshot (1190)q37 r2.png" }
    ],
    explanation: "Cablul crossover se folosește pentru conectarea dispozitivelor similare (switch-switch) (Video: Configuration)."
  },
  {
    id: "ex3_04",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if the statement is false.",
    image: null,
    statements: [
      "Public websites are accessed through port 25.",
      "Secured websites are accessed through port 443 by default.",
      "Unsecured websites are accessed through port 80 by default."
    ],
    labels: ["Yes", "No"],
    options: [],
    correct: [false, true, true],
    sourceImage: "Screenshot (1191).png",
    explanation: "Port 25 = SMTP; 443 = HTTPS; 80 = HTTP (Video: Well-Known Ports)."
  },
  {
    id: "ex3_05",
    type: "dropdown",
    question: "The local university uses a network layout for their routers similar to the following image:\nUse the dropdown menus to complete each statement.",
    image: "mesh-topology.png",
    statements: [
      "What is the physical topology of this network?",
      "How many connections are there among the routers?"
    ],
    options: [
      ["Bus", "Mesh", "Star"],
      ["3", "4", "6"]
    ],
    correct: ["Mesh", "6"],
    sourceImage: [
      { label: "Întrebare", file: "screenshot (1141)q1.png" },
      { label: "Raspusul 1", file: "screenshot (1142)q1 r1.png" },
      { label: "Raspusul 2", file: "screenshot (1143)q1 r2.png" }
    ],
    explanation: "Topologie Mesh (fiecare nod conectat la toate celelalte); 4 noduri → 6 conexiuni (Video: Star, Mesh)."
  },
  {
    id: "ex3_06",
    type: "single",
    question: "Your IT Director wants you to group all of the Administrative Assistants' computers so they can communicate as if they were on the same network. The challenge is that they are located in different areas of a building. What should you do?",
    image: null,
    options: [
      "Configure a VLAN.",
      "Connect all the Administrative Assistants to one dedicated router.",
      "Connect all the Administrative Assistants to one dedicated switch.",
      "Reconfigure the entire company onto one large class B subnet."
    ],
    correct: [0],
    sourceImage: "Screenshot (1144).png",
    explanation: "VLAN-urile permit gruparea logică a dispozitivelor indiferent de locația fizică (Video: VLAN Capabilities)."
  },
  {
    id: "ex3_07",
    type: "single",
    question: "You've been assigned to support your company's marketing team at a trade show. While setting up the booth you discover you must make some custom length Ethernet cables. Before connecting the cables, you want to make sure you wired them correctly.\nWhat tool should you use to test if your Ethernet cables are wired correctly?",
    image: null,
    options: [
      "Cable tester",
      "Time domain reflectometer (TDR)",
      "Toner",
      "Multimeter"
    ],
    correct: [0],
    sourceImage: "Screenshot (1145).png",
    explanation: "Cable tester-ul verifică integritatea și tipul cablului Ethernet (Video: Cable Tester)."
  },
  {
    id: "ex3_08",
    type: "single",
    question: "You need to connect a network adapter to a switch. You need the connection to be able to send and receive data at the same time. What type of connection should you use?",
    image: null,
    options: [
      "Full duplex",
      "Gigabit",
      "Half duplex",
      "Simplex"
    ],
    correct: [0],
    sourceImage: "Screenshot (1146).png",
    explanation: "Full duplex permite transmiterea și recepția simultană a datelor (Video: Hubs vs. Switches)."
  },
  {
    id: "ex3_09",
    type: "multi",
    question: "What is the main criteria used by firewalls to filter traffic? (Choose two)",
    image: null,
    options: [
      "Applications",
      "Ports",
      "Protocols",
      "User accounts"
    ],
    correct: [1, 2],
    sourceImage: "Screenshot (1147).png",
    explanation: "Firewall-urile filtrează pe baza porturilor și protocoalelor (Video: Firewalls)."
  },
  {
    id: "ex3_10",
    type: "dropdown",
    question: "Your friend just got a home router and has asked you to set up his computer to use it. You open the IP settings on the computer and see the information shown in the following image:\nUse the dropdown menus to complete each statement.",
    image: "ipconfig-dhcp.png",
    statements: [
      "What must be changed to receive an IP address from the DHCP service on the router?",
      "Once the address is set to use DHCP, how should the DNS address be obtained?"
    ],
    options: [
      ["Configure options by clicking the Advanced button", "Enable Obtain an IP address automatically", "Enable Obtain DNS server address automatically"],
      ["Automatically, through the DHCP server", "Manually", "Through the Advanced button"]
    ],
    correct: ["Enable Obtain an IP address automatically", "Automatically, through the DHCP server"],
    sourceImage: [
      {label: "Intrebare", file: "Screenshot (1148)q6.png"},
      {label: "Raspunsul 1", file: "Screenshot (1149)q6 r1.png"},
      {label: "Raspunsul 2", file: "Screenshot (1150)q6 r2.png"}
    ],
    explanation: "Pentru a primi IP prin DHCP, se activează 'Obtain an IP address automatically'; DNS-ul se obține automat de la DHCP (Video: DHCP)."
  },
  {
    id: "ex3_11",
    type: "multi",
    question: "Which two types of servers are typically placed in a perimeter network?",
    image: null,
    options: [
      "Email server",
      "File server",
      "Print server",
      "Web server"
    ],
    correct: [0, 3],
    sourceImage: "Screenshot (1151).png",
    explanation: "Într-o rețea perimetrală (DMZ) se plasează servere web și de email (Video: Perimeter Networks)."
  },
  {
    id: "ex3_12",
    type: "single",
    question: "Which one of the following is a second-level domain?",
    image: null,
    options: [
      ".edu",
      "in-addr.arpa",
      "support.microsoft.com",
      "www.gmetrix.com"
    ],
    correct: [1],
    sourceImage: "Screenshot (1152).png",
    explanation: "in-addr.arpa este un domeniu de nivel 2 invers (Video: DNS)."
  },
  {
    id: "ex3_13",
    type: "single",
    question: "Which IP address in a routing table signifies a default route?",
    image: null,
    options: [
      "0.0.0.0",
      "1.1.1.1",
      "127.0.0.1",
      "255.255.255.255"
    ],
    correct: [0],
    sourceImage: "Screenshot (1153).png",
    explanation: "Ruta implicită este 0.0.0.0 (Video: Default Routes)."
  },
  {
    id: "ex3_14",
    type: "dropdown",
    question: "The layout of your LAN is similar to the following image:\nUse the dropdown menus to complete each statement.",
    image: "lan-hub-switch.png",
    statements: [
      "You should use a ______ cable to connect each computer to the hub.",
      "You should use a ______ cable to connect each hub to the switch."
    ],
    options: [
      ["Crossover", "Rollover", "Straight-through"],
      ["Crossover", "Rollover", "Straight-through"]
    ],
    correct: ["Straight-through", "Crossover"],
    sourceImage: [
      {label: "Intrebare", file: "Screenshot (1154)q10.png"},
      {label: "Raspunsul 1", file: "Screenshot (1155)q10 r1.png"},
      {label: "Raspunsul 2", file: "Screenshot (1156)q10 r2.png"}
    ],
    explanation: "PC-hub = straight-through; hub-switch (dispozitive similare) = crossover (Video: Configuration)."
  },
  {
    id: "ex3_15",
    type: "truefalse",
    question: "For each statement involving Linux troubleshooting tools, select Yes if the statement is true and No if the statement is false.",
    image: null,
    statements: [
      "Ping is used to see if one can connect to a destination's IP address.",
      "Tracert shows actual IP addresses on a path from a source to a destination.",
      "The host command performs DNS lookups.",
      "Netstat shows open and listening ports on a device."
    ],
    labels: ["Yes", "No"],
    options: [],
    correct: [true, true, true, true],
    sourceImage: "Screenshot (1157).png",
    explanation: "Toate afirmațiile sunt adevărate pentru uneltele Linux (Video: Tool Selection, Syntax 1)."
  },
  {
    id: "ex3_16",
    type: "match",
    question: "Match each WAN Technology to its corresponding Connection Type.\nTo answer, drag the appropriate Connection Type from the column on the left to the corresponding WAN Technologies on the right. Each Connection Type may be used once, more than once, or not at all.",
    image: null,
    pairs: ["Cable modems", "DSL", "ISDN"],
    options: [
      "Use connections over shared broadband",
      "Uses dedicated phone lines to connect to telco provider offices",
      "Uses two 64Kbps channels"
    ],
    correct: [
      "Use connections over shared broadband",
      "Uses dedicated phone lines to connect to telco provider offices",
      "Uses two 64Kbps channels"
    ],
    sourceImage: "Screenshot (1158).png",
    explanation: "Cable = shared; DSL = dedicat; ISDN = 2x64 Kbps (Video: DSL, Cable Modem; Leased Lines, Dial-Up, ISDN)."
  },
  {
    id: "ex3_17",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if it is false.",
    image: null,
    statements: [
      "A secondary name server gets its data from another name server using a zone transfer.",
      "AAAA records resolve hostnames to IPv4 addresses.",
      "Entries in a HOSTS file on a local computer take precedence over DNS."
    ],
    labels: ["Yes", "No"],
    options: [],
    correct: [true, false, true],
    sourceImage: "Screenshot (1159).png",
    explanation: "Zone transfer true; AAAA = IPv6, nu IPv4; HOSTS are prioritate față de DNS (Video: DNS, Resource Records, HOSTS File)."
  },
  {
    id: "ex3_18",
    type: "single",
    question: "Which is the local loopback address in IPv6?",
    image: null,
    options: [
      "::0",
      "::1",
      "::127",
      "::87"
    ],
    correct: [1],
    sourceImage: "Screenshot (1160).png",
    explanation: "Adresa loopback IPv6 este ::1 (Video: IPv6 Reserved Address Ranges)."
  },
  {
    id: "ex3_19",
    type: "multi",
    question: "Which three layers on the OSI model make up the Application layer on the TCP model? (Choose three)",
    image: null,
    options: [
      "Application",
      "Data Link",
      "Network",
      "Physical",
      "Presentation",
      "Session",
      "Transport"
    ],
    correct: [0, 4, 5],
    sourceImage: "Screenshot (1161).png",
    explanation: "TCP Application layer corespunde OSI: Application, Presentation, Session (Video: TCP Model)."
  },
  {
    id: "ex3_20",
    type: "dropdown",
    question: "The LAN at your workplace uses a layout similar to the following image:\nUse the dropdown menus to complete each statement. Each correct selection is worth one point",
    image: "star-topology.png",
    statements: [
      "The physical topology of this network is a ...",
      "An example that typically uses this topology is ..."
    ],
    options: [
      ["Bus", "Mesh", "Star"],
      ["Ethernet", "FDDI", "Internet"]
    ],
    correct: ["Star", "Ethernet"],
    sourceImage: [
      {label: "Intrebare", file: "Screenshot (1162)q18.png"},
      {label: "Raspunsul 1", file: "Screenshot (1163)q18 r1.png"},
      {label: "Raspunsul 2", file: "Screenshot (1164)q18 r2.png"}
    ],
    explanation: "Topologie stea cu hub central; Ethernet este un exemplu tipic (Video: Star, Mesh)."
  },
  {
    id: "ex3_21",
    type: "single",
    question: "Which step is the first step in troubleshooting a network-related problem in a small to medium-sized business?",
    image: null,
    options: [
      "Identify the problem",
      "Run a network test",
      "Question end-users on what they see is the problem",
      "Identify the number of users affected by the problem"
    ],
    correct: [0],
    sourceImage: "Screenshot (1166).png",
    explanation: "Primul pas în depanare este identificarea problemei (Video: Steps in the Troubleshooting Process)."
  },
  {
    id: "ex3_22",
    type: "single",
    question: "Which is a characteristic of a peer-to-peer network?",
    image: null,
    options: [
      "A person signs in once and has access to multiple resources",
      "Uses Active Directory",
      "Usually connects 10 or fewer devices",
      "Uses RADIUS to authenticate users"
    ],
    correct: [2],
    sourceImage: "Screenshot (1167).png",
    explanation: "Rețelele peer-to-peer au de obicei maxim 10 dispozitive (Video: Define Network Concepts)."
  },
  {
    id: "ex3_23",
    type: "dropdown",
    question: "A user in your company cannot connect to any of the servers which are on the 192.168.1.0 network. You execute the ipconfig command on the user's computer and see the results displayed in the following image:\nUse the dropdown menus to complete each statement.",
    image: "ipconfig-gateway.png",
    statements: [
      "The problem is ...",
      "The solution is ..."
    ],
    options: [
      ["The DNS server is incorrect", "The IP address should be on the 192.168.1.x network", "The subnet mask is incorrect", "There is no default gateway"],
      ["Configure a default gateway in the 10.1.3.x network", "Configure a default gateway in the 192.168.1.x network", "Configure a default gateway in the 255.255.255.x network", "Configure a static IP address"]
    ],
    correct: ["The IP address should be on the 192.168.1.x network", "Configure a static IP address"],
    sourceImage: [
      {label: "Intrebare", file: "Screenshot (1168)q19.png"},
      {label: "Raspunsul 1", file: "Screenshot (1169)q19 r1.png"},
      {label: "Raspunsul 2", file: "Screenshot (1170)q19 r2.png"}
    ],
    explanation: "IP-ul este în altă subrețea; trebuie configurat static corect (Video: IPv4 Ipconfig)."
  },
  {
    id: "ex3_24",
    type: "multi",
    question: "You must manually configure a computer with an IP address on the same network as a router. The router's interface is configured as 192.168.1.100 with a subnet mask of 255.255.255.0. Which two options are valid IP addresses you could assign the computer? (Choose two)",
    image: null,
    options: [
      "192.168.0.10",
      "192.168.1.100",
      "192.168.1.254",
      "192.168.1.255",
      "192.168.1.5",
      "192.168.100.1"
    ],
    correct: [2, 4],
    sourceImage: "Screenshot (1171).png",
    explanation: "Pe rețeaua 192.168.1.0/24, adresele valide sunt 192.168.1.1-254 (excluzând .100, .255 broadcast). Deci .254 și .5 sunt valide (Video: Subnet Masks)."
  },
  {
    id: "ex3_25",
    type: "match",
    question: "Match each PING command with its result.\nEach PING command may be used once, more than once, or not at all.",
    image: null,
    pairs: ["ping -n", "ping -t", "ping -l", "ping 127.0.0.1"],
    options: [
      "Assigns a specific number of packets to transmit",
      "Continuously pings a remote host until stopped",
      "Sends four packets to the local loopback address",
      "Specifies the size of the packet to transmit"
    ],
    correct: [
      "Assigns a specific number of packets to transmit",
      "Continuously pings a remote host until stopped",
      "Specifies the size of the packet to transmit",
      "Sends four packets to the local loopback address"
    ],
    sourceImage: "Screenshot (1172).png",
    explanation: "-n = număr; -t = continuu; -l = dimensiune; 127.0.0.1 = loopback (Video: Ping)."
  },
  {
    id: "ex3_26",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if the statement is false.",
    image: null,
    statements: [
      "A Firewall can be a hardware device.",
      "A Firewall can be a software package.",
      "A Firewall is a special room to protect servers."
    ],
    labels: ["Yes", "No"],
    options: [],
    correct: [true, true, false],
    sourceImage: "Screenshot (1173).png",
    explanation: "Firewall-urile pot fi hardware sau software, nu o cameră specială (Video: Firewalls)."
  },
  {
    id: "ex3_27",
    type: "multi",
    question: "Which are examples of leased lines? (Choose two)",
    image: null,
    options: [
      "Cable broadband",
      "Dial-ups",
      "DSL",
      "T1"
    ],
    correct: [2, 3],
    sourceImage: "Screenshot (1174).png",
    explanation: "DSL și T1 sunt linii închiriate (dedicate); cable broadband nu este dedicat, dial-up nu este leased line (Video: DSL, Cable Modem; T1, T3, E1, E3)."
  },
  {
    id: "ex3_28",
    type: "single",
    question: "Which layer in the TCP model has TCP as its main protocol?",
    image: null,
    options: [
      "Network Access",
      "Transport",
      "Internet",
      "Application"
    ],
    correct: [1],
    sourceImage: "Screenshot (1175).png",
    explanation: "TCP este protocolul principal la nivelul Transport în modelul TCP (Video: TCP Model)."
  },
  {
    id: "ex3_29",
    type: "single",
    question: "Which type of network cables can carry signals over the longest distances?",
    image: null,
    options: [
      "Coaxial",
      "Multimode fiber",
      "Single-mode fiber",
      "Twisted-Pair"
    ],
    correct: [2],
    sourceImage: "Screenshot (1176).png",
    explanation: "Fibra optică single-mode poate transmite pe distanțe foarte mari (până la 70 km) (Video: Fiber Optic)."
  },
  {
    id: "ex3_30",
    type: "multi",
    question: "Which are tunnels used to transmit IPv6 address information over IPv4? (Choose two)",
    image: null,
    options: [
      "GRE",
      "ISATAP",
      "Teredo",
      "VPN"
    ],
    correct: [1, 2],
    sourceImage: "Screenshot (1177).png",
    explanation: "ISATAP și Teredo sunt tuneluri IPv6-over-IPv4 (Video: IPv4 to IPv6 Tunneling Protocols)."
  },
  {
    id: "ex3_31",
    type: "match",
    question: "Match each Networking Service to its function. Each Networking Service may be used once, more than once, or not at all.",
    image: null,
    pairs: ["NAT", "DHCP", "Remote Access Server", "Firewall", "VPN"],
    options: [
      "Allows or blocks data packets",
      "Authenticates a user from an external network",
      "Distributes IP addresses",
      "Makes a request from a private IP address routable",
      "Uses a public network for private data communications"
    ],
    correct: [
      "Makes a request from a private IP address routable",
      "Distributes IP addresses",
      "Authenticates a user from an external network",
      "Allows or blocks data packets",
      "Uses a public network for private data communications"
    ],
    sourceImage: "Screenshot (1178).png",
    explanation: "NAT = routabil; DHCP = distribuie IP; Remote Access = autentifică; Firewall = blochează/permite; VPN = tunel privat (Video: Network Address Translation, DHCP, Remote Access, Firewalls, VPN)."
  },
  {
    id: "ex3_32",
    type: "single",
    question: "You are needing to set up a VPN between two companies that are collaborating on a project. Which type of VPN will you set up?",
    image: null,
    options: [
      "Host-to-Host",
      "Host-to-Site",
      "Site-to-Host",
      "Site-to-Site"
    ],
    correct: [3],
    sourceImage: "Screenshot (1179).png",
    explanation: "Conectarea a două companii se face prin VPN Site-to-Site (Video: VPN)."
  },
  {
    id: "ex3_33",
    type: "single",
    question: "What is the primary disadvantage of a bus topology?",
    image: null,
    options: [
      "Each node in the network acts as an independent router",
      "It consists of one central switch, hub, or computer",
      "One node or device contains multiple radio cards or modules",
      "The network has a single point of failure"
    ],
    correct: [3],
    sourceImage: "Screenshot (1180).png",
    explanation: "Topologia bus are un singur punct de defect (cablul principal) (Video: Ring, Bus)."
  },
  {
    id: "ex3_34",
    type: "single",
    question: "Evaluate the underlined text in the following statement. Select the correct answer if the underlined text does not make the statement correct. Select \"No change is needed\" if the underlined text makes the statement correct. A <u>Mesh</u> network has to have termination points at both ends of the network.",
    image: null,
    options: [
      "Bus",
      "No change is needed",
      "Ring",
      "Star"
    ],
    correct: [0],
    sourceImage: "Screenshot (1181).png",
    explanation: "Terminatori sunt necesari în topologia Bus, nu Mesh (Video: Ring, Bus)."
  },
  {
    id: "ex3_35",
    type: "multi",
    question: "In which directions can communication occur between layers of the OSI model? (Choose three)",
    image: null,
    options: [
      "all layers above",
      "all layers below",
      "layer directly above",
      "layer directly below",
      "peer layer in other networked computer systems",
      "there is not communication"
    ],
    correct: [2, 3, 4],
    sourceImage: "Screenshot (1182).png",
    explanation: "Comunicarea între straturi are loc cu stratul imediat superior, imediat inferior și cu stratul pereche de pe alt sistem (Video: OSI Model 2)."
  },
  {
    id: "ex3_36",
    type: "single",
    question: "Which command-line tool is used to display IP address information and, where applicable, DHCP server information?",
    image: null,
    options: [
      "ipconfig",
      "ipconfig /all",
      "ping",
      "ping -d"
    ],
    correct: [1],
    sourceImage: "Screenshot (1183).png",
    explanation: "ipconfig /all afișează informații detaliate, inclusiv serverul DHCP (Video: IPv4 Ipconfig)."
  },
  {
    id: "ex3_37",
    type: "single",
    question: "Which role needs to be added to an on-premises Windows Server in order to enable routing through the server?",
    image: null,
    options: [
      "Network Controller",
      "Remote Access",
      "Remote Desktop Services",
      "Windows Deployment Services"
    ],
    correct: [1],
    sourceImage: "Screenshot (1184).png",
    explanation: "Rolul Remote Access include servicii de rutare și VPN (Video: Installing and Configuring Routing)."
  },
  {
    id: "ex3_38",
    type: "match",
    question: "Match each port speed to its definition.\nEach cable may be used once, more than once, or not at all.",
    image: null,
    pairs: ["Cat5e", "Cat2", "Cat3", "Cat5"],
    options: [
      "1 Gbps",
      "10 Mbps",
      "100 Mbps"
    ],
    correct: ["1 Gbps", "", "10 Mbps", "100 Mbps"],
    sourceImage: "Screenshot (1185).png",
    explanation: "Cat5e = 1 Gbps; Cat3 = 10 Mbps; Cat5 = 100 Mbps (Cat2 nu se potrivește) (Video: CAT Cabling)."
  },
  {
    id: "ex3_39",
    type: "single",
    question: "How can you connect computer devices using a public network and ensure their messages are safe from being intercepted by unauthorized users?",
    image: null,
    options: [
      "ISDN",
      "LAN",
      "VPN",
      "WAN"
    ],
    correct: [2],
    sourceImage: "Screenshot (1192).png",
    explanation: "VPN oferă un tunel securizat printr-o rețea publică (Video: VPN)."
  },
  {
    id: "ex3_40",
    type: "single",
    question: "Evaluate the underlined text in the following statement. Select the correct answer if the underlined text does not make the statement correct. Select \"No change is needed\" if the underlined text makes the statement correct.\nAn example of a physical <u>ring</u> topology would be eight hubs connected to a single switch.",
    image: null,
    options: [
      "Bus",
      "Mesh",
      "No change is needed",
      "Star"
    ],
    correct: [3],
    sourceImage: "Screenshot (1193).png",
    explanation: "Opt hub-uri conectate la un singur switch este topologie stea, nu inel (Video: Star, Mesh)."
  },
  {
    id: "ex3_41",
    type: "single",
    question: "Evaluate the underlined words in the following statement. Select the correct answer if the underlined text does not make the statement correct. Select \"No change is needed\" if the underlined text makes the statement correct.\nA router is a device that functions primarily on the <u>Data Link</u> layer of the OSI Model.",
    image: null,
    options: [
      "Network",
      "No change is needed",
      "Physical",
      "Transport"
    ],
    correct: [0],
    sourceImage: "Screenshot (1194).png",
    explanation: "Router-ul funcționează la nivelul Network (Layer 3), nu Data Link (Video: OSI/TCP Models and Layers)."
  },
  {
    id: "ex3_42",
    type: "match",
    question: "Match each address type to its appropriate range.\nTo answer, drag the appropriate address type from the column on the left to its range on the right. Each address type may be used once, more than once, or not at all.",
    image: null,
    pairs: [
      "Private network addresses",
      "Public network addresses",
      "Multicast addresses"
    ],
    options: [
      "192.168.0.0 - 192.168.255.255",
      "224.0.0.0 - 239.255.255.255",
      "75.0.0.0 - 75.255.255.255"
    ],
    correct: [
      "192.168.0.0 - 192.168.255.255",
      "75.0.0.0 - 75.255.255.255",
      "224.0.0.0 - 239.255.255.255"
    ],
    sourceImage: "Screenshot (1195).png",
    explanation: "192.168.x.x = privat; 75.x.x.x = public; 224.x.x.x = multicast (Video: Addressing, Reserved Address Ranges)."
  },
  {
    id: "ex3_43",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if it is false.",
    image: null,
    statements: [
      "A layer 2 switch is also called a bridge.",
      "A layer 2 switch uses routing tables.",
      "A switch floods ports if it does not know where to send a packet."
    ],
    labels: ["Yes", "No"],
    options: [],
    correct: [true, false, true],
    sourceImage: "Screenshot (1196).png",
    explanation: "Layer 2 switch = bridge; nu folosește tabele de rutare; flood-ează dacă nu știe destinația (Video: Hubs vs. Switches)."
  },
  {
    id: "ex3_44",
    type: "dropdown",
    question: "You work in the IT Department of a small corporation. The company's network is protected by a firewall and provides several servers within a perimeter network for access by customers and partners. The layout of your network is similar to the following image:\nUse the dropdown menus to complete each statement.",
    image: "firewall-diagram.png",
    statements: [
      "The portion of the diagram labeled \"A\" is the ______ portion of the network.",
      "The portion of the diagram labeled \"B\" is the ______ portion of the network.",
      "The portion of the diagram labeled \"C\" is the ______ portion of the network."
    ],
    options: [
      ["Extranet", "Internet", "Intranet"],
      ["Extranet", "Internet", "Intranet"],
      ["Extranet", "Internet", "Intranet"]
    ],
    correct: ["Internet", "Intranet", "Extranet"],
    sourceImage: [
      { label: "Intrebare", file: "Screenshot (1197)q44.png" },
      { label: "Raspunsul 1", file: "Screenshot (1198)q44 r1.png" },
      { label: "Raspunsul 2", file: "Screenshot (1199)q44 r2.png" },
      { label: "Raspunsul 3", file: "Screenshot (1200)q44 r3.png" }
    ],
    explanation: "A = Internet, B = Intranet (rețeaua internă), C = Extranet (perimetral) (Video: Perimeter Networks)."
  },
  {
    id: "ex3_45",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if the statement is false.",
    image: null,
    statements: [
      "A router is used to separate multiple networks.",
      "A VLAN is typically configured on a router.",
      "NAT is the mapping of a private LAN IP address to a public IP address."
    ],
    labels: ["Yes", "No"],
    options: [],
    correct: [true, false, true],
    sourceImage: "Screenshot (1201).png",
    explanation: "Router separă rețele; VLAN-urile se configurează pe switch-uri; NAT mapează private → public (Video: VLAN Capabilities, Network Address Translation)."
  },
  {
    id: "ex3_46",
    type: "single",
    question: "Which type of wireless network does not have a centralized device, such as a wireless access point or wireless router?",
    image: null,
    options: [
      "Ad hoc",
      "Bridged",
      "Infrastructure",
      "Peer-to-peer"
    ],
    correct: [0],
    sourceImage: "Screenshot (1202).png",
    explanation: "Rețelele ad-hoc nu au un dispozitiv central (Video: P2P and Ad Hoc Connections)."
  }
];