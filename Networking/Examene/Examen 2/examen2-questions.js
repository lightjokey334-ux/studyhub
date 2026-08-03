/* ===================================================================
   Examen 2 — Networking
   Completează array-ul de mai jos cu întrebările testului (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext"
   =================================================================== */

var EXAM_TITLE = "Networking — Examen 2";
var EXAM_ID = "Networking_exam2"; // folosit pentru istoricul de progres

var EXAM_QUESTIONS = [
  {
    id: "ex2_01",
    type: "single",
    question: "TCP is used on which layer of the OSI Model?",
    image: null,
    options: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
    correct: [3]
  },
  {
    id: "ex2_02",
    type: "multi",
    question: "You work at the IT Help Desk for a large company. An employee calls and says they cannot connect to the company network. You are to help the employee resolve the issue.\n\nWhich are the first two steps you should perform? (Choose 2)",
    image: null,
    options: ["Log in to the employee's computer remotely.", "Conduct a line test to check connectivity between the ISP and the employee.", "Instruct the employee to update the operating system to the latest version.", "Instruct the employee to reboot the computer.", "Delete the employee's hosts file.", "Instruct the employee to disconnect and reconnect the network cable connection to the computer."],
    correct: [0, 3]
  },
  {
    id: "ex2_03",
    type: "single",
    question: "Your ISP recently installed a T1 line. What is the maximum throughput of a T1 line?",
    image: null,
    options: ["1.5 Mbps", "1.536 Mbps", "1.544 Mbps", "15.35 Mbps"],
    correct: [2]
  },
  {
    id: "ex2_04",
    type: "single",
    question: "Which type of virtual switch allows virtual machines to communicate with a host machine but no further?",
    image: null,
    options: ["Internal", "Private", "External", "Endpoint"],
    correct: [0]
  },
  {
    id: "ex2_05",
    type: "multi",
    question: "What are three common forwarding methods used by LAN switches? (Choose three)",
    image: null,
    options: ["Arpa Mapping", "Cut-Through", "Fragment-Free", "Packet Switching", "Routing", "Store-and-Forward"],
    correct: [1, 2, 5]
  },
  {
    id: "ex2_06",
    type: "single",
    question: "You are troubleshooting a server that needs to connect directly to the Internet. After you run an ipconfig/all, you discover the problem. The server has been auto-assigned the IPv6 address fe80::260:8ff:fe0:98d%4.\n\nThe server won't connect to the Internet because this is a ______ address.",
    image: null,
    options: ["Link-Local", "Link-Private", "Logic-Link", "Malformed"],
    correct: [0]
  },
  {
    id: "ex2_07",
    type: "match",
    question: "Match each 802.11 standard to its description.\n\nTo answer, drag each 802.11 standard from the column on the left to its description on the right. Each set may be used once, more than once, or not at all.",
    image: null,
    pairs: ["802.11b", "802.11a", "802.11ac", "802.11n", "802.11g"],
    options: ["Frequency range: 2.4 GHz or 5 GHz - Data rate: 65 - 600 Mbps", "Frequency range: 5 GHz - Data rate: 54 Mbps", "Frequency range: 5 GHz - Data rate: up to 1.3 Gbps", "Frequency: 2.4 GHz - Data rate: 11 Mbps", "Frequency: 2.4 GHz - Data rate: 54 Mbps"],
    correct: ["Frequency: 2.4 GHz - Data rate: 11 Mbps", "Frequency range: 5 GHz - Data rate: 54 Mbps", "Frequency range: 5 GHz - Data rate: up to 1.3 Gbps", "Frequency range: 2.4 GHz or 5 GHz - Data rate: 65 - 600 Mbps", "Frequency: 2.4 GHz - Data rate: 54 Mbps"]
  },
  {
    id: "ex2_08",
    type: "single",
    question: "Which type of switch is also known as a plug and play switch?",
    image: null,
    options: ["Managed", "Multilayer", "Unmanaged", "Virtual"],
    correct: [2]
  },
  {
    id: "ex2_09",
    type: "match",
    question: "Match each IP address to its corresponding IPv4 address class.\n\nTo answer, drag the appropriate IPv4 address from the column on the left to its IPv4 address class on the right. Each definition may be used once, more than once, or not at all.",
    image: null,
    pairs: ["130.34.3.223", "10.123.12.1", "199.11.221.4", "224.2.200.35"],
    options: ["Class A", "Class B", "Class C", "Class D"],
    correct: ["Class B", "Class A", "Class C", "Class D"]
  },
  {
    id: "ex2_10",
    type: "single",
    question: "Evaluate the underlined text in the statement below. Select the correct answer if the underlined text does not make the statement correct. Select \"No change is needed\" if the underlined text makes the statement correct.\n\n<u>f00::</u> is a valid IPv6 address that could be assigned to a host computer.",
    image: null,
    options: ["::1", "2001:db8::", "2003:dead:beef:4dad:23:46:bb:101", "No change is needed"],
    correct: [2]
  },
  {
    id: "ex2_11",
    type: "single",
    question: "Which layers of the OSI model are considered to be hardware layers?",
    image: null,
    options: ["1-2", "1-3", "3-7", "4-7"],
    correct: [0]
  },
  {
    id: "ex2_12",
    type: "truefalse",
    question: "For each of the following statements regarding NAT, select Yes if the statement is true and No if the statement is false.",
    image: null,
    statements: ["In Dynamic NAT, a pool of public IP addresses is used.", "In PAT, at least two public IP addresses are required.", "In Static NAT, each private IP address requires a separate public IP address for mapping."],
    labels: ["Yes", "No"],
    correct: [true, false, true],
    options: []
  },
  {
    id: "ex2_13",
    type: "single",
    question: "How many T1 lines are used for a full T3 connection?",
    image: null,
    options: ["16", "2", "28", "3"],
    correct: [2]
  },
  {
    id: "ex2_14",
    type: "multi",
    question: "Which two of the following WAN technologies are most commonly used to connect home devices to the Internet ? (Choose two)",
    image: null,
    options: ["Cable modems", "DSL", "E1", "ISDN", "T1"],
    correct: [0, 1]
  },
  {
    id: "ex2_15",
    type: "match",
    question: "Match each IP address to its class. Not all addresses will be used.",
    image: null,
    pairs: ["100.100.1.1", "170.100.1.5", "198.126.1.55", "224.0.0.2", "241.241.241.241"],
    options: ["Class A", "Class B", "Class C", "Class D", "Class E"],
    correct: ["Class A", "Class B", "Class C", "Class D", "Class E"]
  },
  {
    id: "ex2_16",
    type: "dropdown",
    question: "Use the dropdown menus to complete each statement regarding types of wireless networks.",
    image: null,
    statements: ["A wireless camera connects directly to a device and sends pictures to it. Which type of connection is this?", "This type of wireless network lacks security because there is no centralized device controlling security.", "Which type of wireless network is controlled through a wireless access point?", "What can be disabled on a wireless access point to help secure a wireless network?"],
    options: [["Ad hoc", "Infrastructure", "Peer-to-peer"], ["Ad hoc", "Infrastructure", "Peer-to-peer"], ["Ad hoc", "Infrastructure", "Peer-to-peer"], ["MAC filtering", "QoS", "SSID"]],
    correct: ["Ad hoc", "Ad hoc", "Infrastructure", "SSID"]
  },
  {
    id: "ex2_17",
    type: "dropdown",
    question: "Use the dropdown menus to complete each statement.",
    image: "ping-loopback.png",
    statements: ["The IP address tested in this ping is the ______ address.", "The equivalent IPv6 address is ___."],
    options: [["APIPA", "Default gateway", "Loopback"], ["::0", "::1", "::8/"]],
    correct: ["Loopback", "::1"]
  },
  {
    id: "ex2_18",
    type: "single",
    question: "Evaluate the underlined text in the following statement. Select the correct answer if the underlined text does not make the statement correct. Select \"No change is needed\" if the underlined text makes the statement correct.\n\nIn a <u>Diamond</u> topology, every single computer is connected to every other computer on the network.",
    image: null,
    options: ["Mesh", "No change is needed", "Ring", "Star"],
    correct: [0]
  },
  {
    id: "ex2_19",
    type: "multi",
    question: "Which are types of switch ports? (Choose three)",
    image: null,
    options: ["Access", "Managed", "Trunk", "Unmanaged", "Voice access"],
    correct: [0, 2, 4]
  },
  {
    id: "ex2_20",
    type: "dropdown",
    question: "Use the following screenshot to select the appropriate response from the dropdown menus to answer the questions:",
    image: "netstat-active.png",
    statements: ["Which command was run to generate these results?", "Which command should be run to just show these results for tcp connections?"],
    options: [["netstat -a", "netstat -p", "netstat -s"], ["netstat -a tcp", "netstat -p tcp", "netstat -proto tcp"]],
    correct: ["netstat -a", "netstat -p tcp"]
  },
  {
    id: "ex2_21",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if the statement is false.",
    image: null,
    statements: ["Layer 2 switches use MAC addresses.", "Layer 3 switches can use MAC addresses.", "Layer 3 switches use IP addresses."],
    labels: ["Yes", "No"],
    correct: [true, true, true],
    options: []
  },
  {
    id: "ex2_22",
    type: "dropdown",
    question: "You work in the IT Department of a mid-size corporation. The company's network is segmented into several subnets. The layout of the network is similar to the following image:\n\nUse the dropdown menus to complete each statement.",
    image: "network-topology.png",
    statements: ["The number of hops a packet must take from the source network to the destination network is...", "___ is a common routing protocol that uses hop count."],
    options: [["4", "5", "6"], ["EIGRP", "OSPF", "RIP"]],
    correct: ["4", "RIP"]
  },
  {
    id: "ex2_23",
    type: "single",
    question: "On which layer of the OSI model does encryption take place?",
    image: null,
    options: ["Application", "Data Link", "Presentation", "Session"],
    correct: [2]
  },
  {
    id: "ex2_24",
    type: "dropdown",
    question: "You receive a call from a friend whose computer is unable to connect to the Louvre Museum website located in France. Using a TCP/IP tool, you attempt to contact the website's host from your friend's computer and receive the information shown in the following image:\n\nUse the dropdown menus to complete each statement.",
    image: "tracert-louvre.png",
    statements: ["Which command-line tool was used to generate these results?", "Which command-line tool should be used if both hops and statistics showing a percentage of dropped packets need to be known?"],
    options: [["pathping", "ping", "tracert"], ["netstat", "pathping", "ping"]],
    correct: ["tracert", "pathping"]
  },
  {
    id: "ex2_25",
    type: "single",
    question: "You have just scanned the ports of your server and notice that port 3389 is open. What can you tell from this information?",
    image: null,
    options: ["Remote Desktop Services is running.", "RRAS is running.", "The DNS service is running.", "The WINS service is running."],
    correct: [0]
  },
  {
    id: "ex2_26",
    type: "dropdown",
    question: "You are troubleshooting a friend's computer that will not connect to a specific website on the Internet, yet it can connect to other websites. You can connect to the website with no problems using your smartphone. Using a TCP/IP tool on your friend's computer, you receive the information shown in the following image:\n\nUse the dropdown menus to complete each statement.",
    image: "dns-records.png",
    statements: ["Which command was used to generate these results?", "To solve the connectivity problem, you should clear the computer's memory by executing which command?"],
    options: [["ipconfig /displaydns", "ipconfig /dns", "ipconfig /flushdns"], ["ipconfig /cleardns", "ipconfig /emptydns", "ipconfig /flushdns"]],
    correct: ["ipconfig /displaydns", "ipconfig /flushdns"]
  },
  {
    id: "ex2_27",
    type: "truefalse",
    question: "For each situation regarding hardware troubleshooting tools, select Yes if the right tool is being used for a troubleshooting situation and No if the right tool is not being used for a troubleshooting situation.",
    image: null,
    statements: ["A TDR is used to find kinks and breaks in fiber optic cables.", "A toner is used to trace copper wire cable through a wall.", "A multimeter is used to see if an Ethernet cable is functional."],
    labels: ["Yes", "No"],
    correct: [true, true, true],
    options: []
  },
  {
    id: "ex2_28",
    type: "single",
    question: "Which data transmission method uses a private tunnel over a public network?",
    image: null,
    options: ["IPsec", "L2TP", "PPTP", "VPN"],
    correct: [3]
  },
  {
    id: "ex2_29",
    type: "single",
    question: "Evaluate the underlined text in the following statement. Select the correct answer if the underlined text does not make the statement correct. Select \"No change is needed\" if the underlined text makes the statement correct.\n\n<u>AAAA</u> records resolve hostnames to 128-bit IP addresses.",
    image: null,
    options: ["A", "IPv4", "IPv6", "No change is needed"],
    correct: [3]
  },
  {
    id: "ex2_30",
    type: "match",
    question: "Match each device with its function.\n\nTo answer, drag the appropriate device from the column on the left to its definition on the right. Each device may be used once, more than once, or not at all.",
    image: null,
    pairs: ["Ethernet", "Router", "Network Interface Card", "Layer 2 Switch"],
    options: ["A technology used on Layer 1 of the OSI model to transmit data", "Connects two networks using different protocols", "Uses MAC addressing to determine which port to forward a frame"],
    correct: ["A technology used on Layer 1 of the OSI model to transmit data", "Connects two networks using different protocols", "", "Uses MAC addressing to determine which port to forward a frame"]
  },
  {
    id: "ex2_31",
    type: "multi",
    question: "Which two statements are true about layer 2 switches? (Choose two)",
    image: null,
    options: ["A switch uses IP address tables to determine where to forward packets.", "A switch uses MAC address tables to determine where to forward frames.", "If a switch does not know where to forward a frame, it floods it out all ports.", "Store-and-forward is the fastest switching method available.", "Switches are faster than hubs in all circumstances."],
    correct: [1, 2]
  },
  {
    id: "ex2_32",
    type: "match",
    question: "Match the network type to the corresponding definition.\n\nTo answer, drag the appropriate term from the column on the left to its definition on the right. Each term may be used once, more than once, or not at all.",
    image: null,
    pairs: ["Internet", "Extranet", "Intranet"],
    options: ["A global system on interconnected computers", "A network restricted to users within an organization", "Provides access to services needed by partners and customers without granting them access to the entire network"],
    correct: ["A global system on interconnected computers", "Provides access to services needed by partners and customers without granting them access to the entire network", "A network restricted to users within an organization"]
  },
  {
    id: "ex2_33",
    type: "single",
    question: "Which Linux command shows a DNS server for a device plus the 13 root servers for DNS?",
    image: null,
    options: ["dig", "host", "nslookup", "dnslookup"],
    correct: [0]
  },
  {
    id: "ex2_34",
    type: "single",
    question: "All of your users connect to websites using Edge. They usually type domain names such as www.microsoft.com. What protocol is initiated by default when they press Enter after typing the domain name?",
    image: null,
    options: ["FTP", "HTTP", "HTTPS", "UDP"],
    correct: [1]
  },
  {
    id: "ex2_35",
    type: "match",
    question: "Match each function to its layer in the OSI Model. Each function may be used once, more than once, or not at all.",
    image: null,
    pairs: ["Word processors, spreadsheets, gaming software", "Determines data route using logical addressing", "Specifies voltage, media speeds, connector pin-outs", "ASCII, jpg, mp3", "User interface to the network", "Combines bytes into frames; uses MAC addressing", "Keeps conversations (data streams) separate", "Determines reliable or unreliable delivery"],
    options: ["Application Layer", "Data Link Layer", "Network Layer", "Physical Layer", "Presentation Layer", "Session Layer", "Transport Layer"],
    correct: ["Application Layer", "Network Layer", "Physical Layer", "Presentation Layer", "Application Layer", "Data Link Layer", "Session Layer", "Transport Layer"]
  },
  {
    id: "ex2_36",
    type: "single",
    question: "Which version of NAT allows for multiple private addresses to share a single public address?",
    image: null,
    options: ["Dynamic NAT", "One-to-many NAT", "PAT", "Static NAT"],
    correct: [2]
  },
  {
    id: "ex2_37",
    type: "single",
    question: "Which port does the Remote Desktop Protocol use?",
    image: null,
    options: ["3389", "389", "443", "636"],
    correct: [0]
  },
  {
    id: "ex2_38",
    type: "single",
    question: "Your neighbor has asked you to network his home office. He wants a wired connection, not wireless. The network needs to support approximately 1 Gigabit per second speeds. What is the least expensive options that meets this requirement?",
    image: null,
    options: ["CAT3", "CAT5e", "Coaxial", "Fiber Optic"],
    correct: [1]
  },
  {
    id: "ex2_39",
    type: "single",
    question: "Which type of route is manually configured by an administrator?",
    image: null,
    options: ["Direct", "Dynamic", "Floating", "Static"],
    correct: [3]
  },
  {
    id: "ex2_40",
    type: "multi",
    question: "Which known ports are used for incoming and outgoing email? (Choose two)",
    image: null,
    options: ["SMTP", "IMAP", "FTP", "SSH"],
    correct: [0, 1]
  },
  {
    id: "ex2_41",
    type: "single",
    question: "Which best describes a VPN?",
    image: null,
    options: ["A dynamic routing protocol", "A secure tunnel used to pass data through the Internet", "An encryption protocol", "Virtual Protocol Name"],
    correct: [1]
  },
  {
    id: "ex2_42",
    type: "single",
    question: "A ____ is a device that sets up different collision domains for each device connected to it, allowing the networked devices to run in Full Duplex without collisions.",
    image: null,
    options: ["Hub", "Repeater", "Router", "Switch"],
    correct: [3]
  },
  {
    id: "ex2_43",
    type: "match",
    question: "Using drag and drop, match each layer of the TCP model with one of the purposes of the layer.",
    image: null,
    pairs: ["Application layer", "Transport layer", "Internet layer", "Network Access layer"],
    options: ["Physical addresses are added to frames", "Data packets are addressed", "Data is segmented", "Data is encrypted"],
    correct: ["Data is encrypted", "Data is segmented", "Data packets are addressed", "Physical addresses are added to frames"]
  },
  {
    id: "ex2_44",
    type: "single",
    question: "What type of communication is defined at the physical and data link layers of the OSI model?",
    image: null,
    options: ["LAN protocols", "Routing", "Transport", "WAN protocols"],
    correct: [0]
  },
  {
    id: "ex2_45",
    type: "single",
    question: "Which twisted-pair cable category runs at 10 Gbps for 55 meters?",
    image: null,
    options: ["CAT5", "CAT6", "CAT6a", "CAT7"],
    correct: [2]
  },
  {
    id: "ex2_46",
    type: "multi",
    question: "Which two are characteristics of a LAN? (Choose 2)",
    image: null,
    options: ["It is a private network", "Control is by an outside regulatory body", "Speeds are relatively faster than a WAN", "Media access is restricted to only one method"],
    correct: [0, 2]
  }
];
