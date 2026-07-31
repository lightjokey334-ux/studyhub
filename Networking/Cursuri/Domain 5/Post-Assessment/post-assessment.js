var QUESTIONS_D5_POST = [
  {
    id: "d5_post_01",
    type: "order",
    question: "Arrange the steps of the troubleshooting process in the correct order.",
    image: null,
    options: ["Establish a plan to solve the problem", "Establish a theory of probable cause", "Identify the problem", "Implement or escalate the solution", "Verify the success of the solution", "Test the theory", "Document the solution"],
    correct: [2, 1, 5, 0, 3, 4, 6]
  },
  {
    id: "d5_post_02",
    type: "multi",
    question: "What tips should network administrators follow to maintain good customer relations? Choose three answers.",
    image: null,
    options: ["Keep confidential information confidential", "Work quickly but avoid giving deadlines", "Avoid social media distractions", "Use appropriate titles", "Provide thorough explanations using technical terms"],
    correct: [0, 2, 3]
  },
  {
    id: "d5_post_03",
    type: "match",
    question: "Match each netstat command to the command prompt results.",
    image: null,
    pairs: ["Netstat -p", "Netstat -a", "Netstat -s"],
    options: ["Active connections (with PID)", "Active connections (no PID)", "ICMPv6 Statistics"],
    correct: ["Active connections (with PID)", "Active connections (no PID)", "ICMPv6 Statistics"]
  },
  {
    id: "d5_post_04",
    type: "single",
    question: "Which netstat command will an administrator run to just see port information for TCP ports?",
    image: null,
    options: ["netstat -a", "netstat -p tcp", "netstat -proto tcp", "netstat -tcp"],
    correct: [1]
  },
  {
    id: "d5_post_05",
    type: "single",
    question: "A multimeter is plugged into a computer's power supply, but does not provide any readings. What does this indicate?",
    image: null,
    options: ["The power supply is functioning normally", "The power supply has been overclocked", "The power supply is compatible with the computer", "The power supply needs to be replaced", "The power supply cannot effectively charge the computer"],
    correct: [3]
  },
  {
    id: "d5_post_06",
    type: "single",
    question: "An administrator uses an OTDR to locate faults in a fiber-optic cable. The OTDR sends a signal down the cable and is bounced back to the origin. What does this reaction indicate?",
    image: null,
    options: ["The cable is functioning correctly", "The cable has suffered a break", "The cable must be measured using a TDR instead", "The cable is incompatible with the network", "The cable needs to be relocated"],
    correct: [1]
  },
  {
    id: "d5_post_07",
    type: "single",
    question: "Refer to the image. Which hop shows a slight delay in returning statistics?",
    image: "tracert-delay.png",
    options: ["Hop 0", "Hop 1", "Hop 2", "Hop 3"],
    correct: [3]
  },
  {
    id: "d5_post_08",
    type: "single",
    question: "Which port is used for SSH?",
    image: null,
    options: ["20", "21", "22", "23"],
    correct: [2]
  },
  {
    id: "d5_post_09",
    type: "single",
    question: "An administrator wants to ping an IP address and keep pinging that address until the administrator stops the process. Which command should the administrator use?",
    image: null,
    options: ["ping -c", "ping -n", "ping -s", "ping -t"],
    correct: [3]
  },
  {
    id: "d5_post_10",
    type: "single",
    question: "Which best describes the use of tracert?",
    image: null,
    options: ["Show a routing table", "Show routing statistics", "Troubleshoot connectivity problems", "Troubleshoot specific routes"],
    correct: [3]
  },
  {
    id: "d5_post_11",
    type: "single",
    question: "After using tracert, which series of symbols in the command prompt indicates that a router is experiencing problems?",
    image: null,
    options: ["!!!", "???", "***", "%%%", "###"],
    correct: [2]
  },
  {
    id: "d5_post_12",
    type: "multi",
    question: "What aspects of an optic-fiber cable do OTDRs measure? Choose two answers.",
    image: null,
    options: ["Overall attenuation", "Overall latency", "Network speed", "Electromagnetic interference", "Cable length"],
    correct: [0, 4]
  },
  {
    id: "d5_post_13",
    type: "match",
    question: "Match each Linux command to its function.",
    image: null,
    pairs: ["Ping", "Traceroute", "Host", "Netstat", "Arp"],
    options: ["Indicates whether a destination can be reached", "Displays the complete path from a source to a destination", "Shows IP addresses and accompanying MAC addresses", "Performs DNS lookups", "Displays open and listening ports on a device"],
    correct: ["Indicates whether a destination can be reached", "Displays the complete path from a source to a destination", "Performs DNS lookups", "Displays open and listening ports on a device", "Shows IP addresses and accompanying MAC addresses"]
  },
  {
    id: "d5_post_14",
    type: "multi",
    question: "A cable tester can identify an Ethernet cable as one of which types of cable? Choose two answers.",
    image: null,
    options: ["STP", "UTP", "Straight-through", "Twisted pair", "Crossover"],
    correct: [2, 4]
  },
  {
    id: "d5_post_15",
    type: "single",
    question: "How does data transmit over a Telnet connection?",
    image: null,
    options: ["Using asymmetric encryption", "Using cleartext", "Using hashes", "Using symmetric encryption"],
    correct: [1]
  },
  {
    id: "d5_post_16",
    type: "single",
    question: "Refer to the image. How many echo replies did the ping to learnkey.com return?",
    image: "ping-replies.png",
    options: ["1", "2", "3", "4", "5"],
    correct: [2]
  },
  {
    id: "d5_post_17",
    type: "multi",
    question: "Which statements are true of a tone generator? Choose three answers.",
    image: null,
    options: ["Consists of a tone generator and a toner probe", "Emits a tone if a cable connection is functional", "Emits a tone if a cable connection is faulty or has terminated", "Traces copper cable wires in walls"],
    correct: [0, 1, 3]
  },
  {
    id: "d5_post_18",
    type: "single",
    question: "What should an administrator type to see all possible options for the ipconfig command?",
    image: null,
    options: ["ipconfig /all", "ipconfig /help", "ipconfig /man", "ipconfig /?"],
    correct: [3]
  },
 {
   id: "d5_post_19",
   type: "single",
   question: "Which is a Class B private IP address?",
   image: null,
   options: ["10.0.0.1", "169.254.0.1", "172.16.0.0", "192.168.0.0"],
   correct: [2]
 }
];