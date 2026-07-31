var QUESTIONS_D4_PRE = [
  {
    id: "d4_pre_01",
    type: "single",
    question: "What does DHCP provide?",
    image: null,
    options: ["IP addresses for clients connecting to a network", "IP addresses for name resolution", "IP address to MAC address mapping", "IP address to NetBIOS name mapping"],
    correct: [0]
  },
  {
    id: "d4_pre_02",
    type: "multi",
    question: "The nslookup command can be used to display which information in the command prompt? Choose two answers.",
    image: null,
    options: ["Connected routers", "Internet protocols", "MAC addresses", "Mail exchange records", "DNS server addresses"],
    correct: [3, 4]
  },
  {
    id: "d4_pre_03",
    type: "single",
    question: "Which is true about TCP and UDP?",
    image: null,
    options: ["Both are connectionless", "Both are connection-oriented", "TCP is connectionless while UDP is connection-oriented", "TCP is connection-oriented while UDP is connectionless"],
    correct: [3]
  },
  {
    id: "d4_pre_04",
    type: "single",
    question: "Before DNS, which file was the main file used to resolve hostnames to IP addresses?",
    image: null,
    options: ["hosts", "lmhosts", "NetBIOS", "WINS"],
    correct: [0]
  },
  {
    id: "d4_pre_05",
    type: "single",
    question: "What is the default status of inbound ports on a firewall?",
    image: null,
    options: ["Blocked", "Conditionally blocked", "Open", "Conditionally open"],
    correct: [0]
  },
  {
    id: "d4_pre_06",
    type: "multi",
    question: "On which two layers of the OSI model do switches operate?",
    image: null,
    options: ["Application", "Data-link", "Network", "Physical"],
    correct: [1, 2]
  },
  {
    id: "d4_pre_07",
    type: "single",
    question: "What does a double colon represent in an IPv6 address notation?",
    image: null,
    options: ["A contiguous group of four-zero blocks", "Four zeros", "One zero", "Two or three zeros"],
    correct: [0]
  },
  {
    id: "d4_pre_08",
    type: "single",
    question: "Which protocol should be employed when transmitting sensitive information over the internet?",
    image: null,
    options: ["HTTP", "HTTPS", "FTP", "HTTP and FTP"],
    correct: [1]
  },
  {
    id: "d4_pre_09",
    type: "single",
    question: "An ________ is common in dual IP stacks which implement both IPv4 and IPv6 within an operating system.",
    image: null,
    options: ["IPv4 dynamic address", "IPv6 dynamic address", "IPv4 mapped address", "IPv6 mapped address"],
    correct: [2]
  },
  {
    id: "d4_pre_10",
    type: "single",
    question: "In which layer of the OSI model are IP addresses added to data?",
    image: null,
    options: ["Physical", "Transport", "Data-link", "Network"],
    correct: [3]
  },
  {
    id: "d4_pre_11",
    type: "multi",
    question: "A unique local IPv6 address begins with which letters? Choose two answers.",
    image: null,
    options: ["FA", "FB", "FC", "FD", "FE"],
    correct: [2, 3]
  },
  {
    id: "d4_pre_12",
    type: "single",
    question: "An administrator wants to set up an alias record in a DNS table. Which type of record should the administrator set up?",
    image: null,
    options: ["A", "CNAME", "MX", "PTR"],
    correct: [1]
  },
  {
    id: "d4_pre_13",
    type: "single",
    question: "In which layer of the TCP model does encryption take place?",
    image: null,
    options: ["Transport", "Network access", "Internet", "Application"],
    correct: [3]
  },
  {
    id: "d4_pre_14",
    type: "single",
    question: "How many bits are in an IPv6 address?",
    image: null,
    options: ["32", "48", "64", "128"],
    correct: [3]
  },
  {
    id: "d4_pre_15",
    type: "multi",
    question: "Port numbers typically fall under which categories? Choose three answers.",
    image: null,
    options: ["Dynamic and static ports", "Dynamic and private ports", "Well-known ports", "Authorized ports", "Registered ports"],
    correct: [1, 2, 4]
  },
  {
    id: "d4_pre_16",
    type: "single",
    question: "Which layer of the OSI model is responsible for getting data into segments?",
    image: null,
    options: ["Physical", "Network", "Session", "Transport"],
    correct: [3]
  },
  {
    id: "d4_pre_17",
    type: "single",
    question: "Which IPv6 address is used as the loopback address?",
    image: null,
    options: ["::", "::1", "::127", "::127.0.0.1"],
    correct: [1]
  },
  {
    id: "d4_pre_18",
    type: "multi",
    question: "What are the responsibilities of the Network Access layer in the TCP model? Choose three answers.",
    image: null,
    options: ["To add a physical address to frames", "To format and number bits", "To break down data into frames", "To break down data into packets", "To break down data into bits"],
    correct: [0, 2, 4]
  },
  {
    id: "d4_pre_19",
    type: "single",
    question: "The first and last IP addresses in a range are reserved for the _____ address and _____ address, respectively.",
    image: null,
    options: ["broadcast; network", "network; broadcast", "host; subnet", "subnet; host"],
    correct: [1]
  },
  {
    id: "d4_pre_20",
    type: "single",
    question: "Multicast transmissions are assigned to which class of IP address?",
    image: null,
    options: ["A", "B", "C", "D", "E"],
    correct: [3]
  },
  {
    id: "d4_pre_21",
    type: "single",
    question: "IPv4 addresses are _____ addresses, referring to binary numbers.",
    image: null,
    options: ["8-bit", "16-bit", "32-bit", "64-bit"],
    correct: [2]
  },
  {
    id: "d4_pre_22",
    type: "multi",
    question: "What are the main reasons for utilizing IPv6? Choose two answers.",
    image: null,
    options: ["Adaptability", "Address space", "Security", "Universality", "Speed"],
    correct: [1, 2]
  },
  {
    id: "d4_pre_23",
    type: "single",
    question: "Which ipconfig command, when input into the command-line tool, has the side effect of a loss in network connectivity?",
    image: null,
    options: ["ipconfig /all", "ipconfig /release", "ipconfig /renew", "ipconfig /flushdns"],
    correct: [1]
  },
  {
    id: "d4_pre_24",
    type: "single",
    question: "How many root DNS servers carry the tables for all web addresses worldwide?",
    image: null,
    options: ["5", "7", "11", "13", "15"],
    correct: [3]
  },
  {
    id: "d4_pre_25",
    type: "single",
    question: "What does WINS resolve to IP addresses?",
    image: null,
    options: ["DNS names", "FQDN names", "NetBIOS names", "Netstat names"],
    correct: [2]
  },
  {
    id: "d4_pre_26",
    type: "single",
    question: "Which protocol is the most secure choice for handling incoming email?",
    image: null,
    options: ["SMTP", "IMAP", "POP3", "HTTP", "HTTPS"],
    correct: [1]
  },
  {
    id: "d4_pre_27",
    type: "single",
    question: "Which IP address serves as the overall broadcast address?",
    image: null,
    options: ["0.0.0.0", "1.1.1.1", "255.255.255.0", "255.255.255.255"],
    correct: [3]
  },
  {
    id: "d4_pre_28",
    type: "single",
    question: "Which type of NAT needs a public IP address for every private IP address trying to send a data request?",
    image: null,
    options: ["Dynamic NAT", "NAT", "Standard NAT", "Static NAT"],
    correct: [3]
  },
  {
    id: "d4_pre_29",
    type: "single",
    question: "In which class is the IP address 11.11.11.11?",
    image: null,
    options: ["A", "B", "C", "D"],
    correct: [0]
  }
];