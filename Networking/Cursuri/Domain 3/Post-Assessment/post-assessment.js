var QUESTIONS_D3_POST = [
  {
    id: "d3_post_01",
    type: "single",
    question: "Which routing protocol is the default dynamic routing protocol in Windows?",
    image: null,
    options: ["EIGRP", "OSPF", "RIP", "TCP/IP"],
    correct: [3]
  },
  {
    id: "d3_post_02",
    type: "multi",
    question: "How do administrators use switches to ensure network security? Choose two answers.",
    image: null,
    options: ["Administrators can use switches to control the flow of network traffic", "Administrators can create a block list of MAC addresses that switches will ignore", "Administrators can control the number of MAC addresses each switch port will memorize", "Administrators can use switches to close certain ports and protocols from unauthorized access", "Administrators can use switches to route traffic between networks"],
    correct: [2, 3]
  },
  {
    id: "d3_post_03",
    type: "single",
    question: "According to the image, which of the following is considered to be the best route?",
    image: "route_table.png",
    options: ["0.0.0.0", "10.0.2.0", "127.0.0.1", "169.254.0.0"],
    correct: [0]
  },
  {
    id: "d3_post_04",
    type: "single",
    question: "Which type of twisted-pair cable is required for running cable through walls or in between floors?",
    image: null,
    options: ["Plenum", "Stp", "Two-wired", "UTP"],
    correct: [0]
  },
  {
    id: "d3_post_05",
    type: "match",
    question: "Match each category of twisted-pair cable to its speed.",
    image: null,
    pairs: ["CAT5e", "CAT3", "CAT6a", "CAT5", "CAT6"],
    options: ["10 Mbps", "Fast Ethernet (100 Mbps)", "Both 100 Mbps and 1 Gbps", "10 Gbps (at about half the distance of normal twisted-pair cables)", "10 Gbps (at a full distance of 100 meters)"],
    correct: ["Both 100 Mbps and 1 Gbps", "10 Mbps", "10 Gbps (at a full distance of 100 meters)", "Fast Ethernet (100 Mbps)", "10 Gbps (at about half the distance of normal twisted-pair cables)"]
  },
  {
    id: "d3_post_06",
    type: "single",
    question: "The image shows a floor plan with an equal number of switch ports allocated to VLAN1 and VLAN2. If more users are assigned to Project Management, how might the floor plan change to accommodate their need for ports?",
    image: "vlan_floorplan.png",
    options: ["More physical ports are switched from VLAN2 to VLAN1", "More physical ports are switched from VLAN1 to VLAN2", "An extra physical port is added for both VLAN1 and VLAN2", "A second physical switch is added to connect VLAN1 to VLAN2"],
    correct: [1]
  },
  {
    id: "d3_post_07",
    type: "multi",
    question: "Which can lead to signal interference in wireless networks? Choose three answers.",
    image: null,
    options: ["Walls", "Elevator shafts", "Wireless modems", "Open spaces", "Cordless phones"],
    correct: [0, 1, 4]
  },
  {
    id: "d3_post_08",
    type: "single",
    question: "Which type of line connects multiple physical switches in a VLAN environment?",
    image: null,
    options: ["Access", "Dedicated", "Reserved", "Trunk"],
    correct: [3]
  },
  {
    id: "d3_post_09",
    type: "multi",
    question: "Which is true about uplink ports on a switch? Choose two answers.",
    image: null,
    options: ["They are usually faster than other ports", "They are usually slower than other ports", "They accept connections from crossover cables", "They accept connections from straight-through and crossover cables"],
    correct: [0, 3]
  },
  {
    id: "d3_post_10",
    type: "multi",
    question: "Which are common types of virtual switches? Choose three answers.",
    image: null,
    options: ["External", "Internal", "Internet", "Private", "Public"],
    correct: [0, 1, 3]
  },
  {
    id: "d3_post_11",
    type: "single",
    question: "A Spanning Tree Protocol (STP) transmits ______ to identify redundant links in switches.",
    image: null,
    options: ["Rapid Tunnel Units", "TCP timestamps", "MAC sublayers", "Bridge Protocol Data Units"],
    correct: [3]
  },
  {
    id: "d3_post_12",
    type: "single",
    question: "A computer training center contains three classrooms for students, an office for administrative staff, and a repair shop all located in the same building. If the groups are isolated from each other, how many network segments are in this scenario from a logical standpoint?",
    image: null,
    options: ["Two", "Three", "Four", "Five"],
    correct: [3]
  },
  {
    id: "d3_post_13",
    type: "single",
    question: "Which data transmission method for a switch has a switch receive a data frame, check it for errors, and then send the frame?",
    image: null,
    options: ["Cut-forward", "Cut-through", "Store-and-forward", "Store-and-send"],
    correct: [2]
  },
  {
    id: "d3_post_14",
    type: "single",
    question: "Which type of routing protocol is OSPF?",
    image: null,
    options: ["Distance-vector", "Hybrid", "Link-state", "Static"],
    correct: [2]
  },
  {
    id: "d3_post_15",
    type: "single",
    question: "Which data transmission method for a switch sends a frame on the basis of just the destination MAC address?",
    image: null,
    options: ["Cut-forward", "Cut-through", "Store-and-forward", "Store-and-send"],
    correct: [1]
  },
  {
    id: "d3_post_16",
    type: "single",
    question: "What do switches store that hubs do not store?",
    image: null,
    options: ["Data forwarders", "IP addresses", "MAC addresses", "Routing tables"],
    correct: [2]
  },
  {
    id: "d3_post_17",
    type: "single",
    question: "In convergence, a root bridge router learns the ______ of an entire network and then distributes it to the remaining routers on the network.",
    image: null,
    options: ["route protocols", "MAC address", "topology", "network segmentation"],
    correct: [2]
  },
  {
    id: "d3_post_18",
    type: "single",
    question: "Which network speed is represented as Fast Ethernet?",
    image: null,
    options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
    correct: [1]
  },
  {
    id: "d3_post_19",
    type: "single",
    question: "Which protocol takes up the most memory within a router?",
    image: null,
    options: ["Routing Information Protocol (RIP)", "Open Quickest Path First (OQPF)", "Exit Gateway Routing Protocol (EGRP)", "Border Gateway Protocol (BGP)"],
    correct: [3]
  },
  {
    id: "d3_post_20",
    type: "single",
    question: "A switch has forty-eight 100 Mbps ports. What is the backplane speed of the switch?",
    image: null,
    options: ["100 Mbps", "200 Mbps", "4.8 Gbps", "48 Gbps"],
    correct: [2]
  },
  {
    id: "d3_post_21",
    type: "single",
    question: "Which is the default route in a routing table?",
    image: null,
    options: ["0.0.0.0", "1.1.1.1", "127.0.0.1", "255.255.255.255"],
    correct: [0]
  },
  {
    id: "d3_post_22",
    type: "single",
    question: "An 802.11n router with a Fast Ethernet port has a wired connection to a device. What will be the top speed of transmission from the device to the router?",
    image: null,
    options: ["100 Mbps", "300 Mbps", "600 Mbps", "1 Gbps"],
    correct: [0]
  },
  {
    id: "d3_post_23",
    type: "single",
    question: "Which type of network connection is best suited for two routers connected to each other?",
    image: null,
    options: ["Static route", "Dynamic route", "Direct connection", "Default route"],
    correct: [2]
  },
  {
    id: "d3_post_24",
    type: "single",
    question: "Refer to the image. Which path would RIP identify as the best route from Router A to Router D?",
    image: "rip_diagram.png",
    options: ["Router A to Router D at 10 Mbps", "Router A to Router B to Router C to Router D at 100 Mbps", "Router A to Router D at 100 Mbps", "Router A to Router B to Router C to Router D at 10 Mbps"],
    correct: [0]
  },
  {
    id: "d3_post_25",
    type: "single",
    question: "What is an added benefit to hardware redundancy?",
    image: null,
    options: ["High availability", "Increased speed", "Increased throughput", "Load balancing"],
    correct: [0]
  },
  {
    id: "d3_post_26",
    type: "single",
    question: "What does a yellow light on a switch connection usually indicate?",
    image: null,
    options: ["The connection is being interrupted intermittently", "The connection is running at full speed", "The connection is running at less than full speed", "The connection is not running"],
    correct: [2]
  },
  {
    id: "d3_post_27",
    type: "single",
    question: "An administrator needs to carry a signal for one mile. Which is the best type of cable to use?",
    image: null,
    options: ["Coaxial", "Multimode", "Single-mode", "Twisted-pair"],
    correct: [2]
  },
  {
    id: "d3_post_28",
    type: "multi",
    question: "What are wired networks susceptible to for losing quality in data transmissions? Choose three answers.",
    image: null,
    options: ["Cordless phones", "EMI", "Fluorescent lighting", "Power cables", "Walls"],
    correct: [1, 2, 3]
  },
  {
    id: "d3_post_29",
    type: "single",
    question: "Which type of switch is a plug and play switch?",
    image: null,
    options: ["Core", "Distributed", "Managed", "Unmanaged"],
    correct: [3]
  },
  {
    id: "d3_post_30",
    type: "single",
    question: "Refer to the image. How many switches are in use on the Windows Server 2016 365 DC virtual machine?",
    image: "hyperv_settings.png",
    options: ["One", "Two", "Three", "Four"],
    correct: [0]
  },
  {
    id: "d3_post_31",
    type: "single",
    question: "What is the top distance for data transmissions over twisted-pair cables?",
    image: null,
    options: ["100 feet", "328 feet", "500 feet", "600 feet"],
    correct: [1]
  },
  {
    id: "d3_post_32",
    type: "single",
    question: "Which type of fiber optic cable carries signals for a maximum of 600 meters?",
    image: null,
    options: ["Coaxial", "Multimode", "Single-mode", "Twisted-pair"],
    correct: [1]
  },
  {
    id: "d3_post_33",
    type: "single",
    question: "How many devices are involved in a directly connected route?",
    image: null,
    options: ["1", "2", "The number of gateways on the network", "The number of routers on a network"],
    correct: [1]
  },
  {
    id: "d3_post_34",
    type: "single",
    question: "Which set of wireless channels is safe to use on a 2.4 GHz network to avoid overlapping?",
    image: null,
    options: ["1, 2, 3", "1, 5, 9", "1, 6, 11", "2, 4, 12"],
    correct: [2]
  }
];
