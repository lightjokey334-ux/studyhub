var QUESTIONS_D4_POST = [
  {
    id: "d4_post_01",
    type: "multi",
    question: "Which IPv6 address ranges are used for examples and documentation? Choose two answers.",
    image: null,
    options: ["2001:0DB8::/32", "3FFF:FFFF::/32", "FE80::/10", "FF00::/8"],
    correct: [0, 1]
  },
  {
    id: "d4_post_02",
    type: "single",
    question: "IPv4 addresses range from _______ and display in blocks of four numbers.",
    image: null,
    options: ["0 to 100", "0 to 255", "100 to 355", "255 to 500"],
    correct: [1]
  },
  {
    id: "d4_post_03",
    type: "single",
    question: "In a typical IPv6 address, which group(s) of numbers typically represent the subnet portion of the address?",
    image: null,
    options: ["The first group", "The first three groups", "The first four groups", "The fourth group"],
    correct: [3]
  },
  {
    id: "d4_post_04",
    type: "single",
    question: "How is the IP address 192.168.1.1 represented as an IPv6 address?",
    image: null,
    options: ["192.168.1.1", "::192.168.1.1", "::ffff:192.168.1.1", "ffff::192.168.1.1"],
    correct: [2]
  },
  {
    id: "d4_post_05",
    type: "single",
    question: "Which layer on the OSI model is responsible for encrypting data?",
    image: null,
    options: ["Application", "Data-link", "Presentation", "Session"],
    correct: [2]
  },
  {
    id: "d4_post_06",
    type: "match",
    question: "Match the form of address translation to the scenario.",
    image: null,
    pairs: ["NAT (3): Port NAT", "NAT (1): Every private IP gets a public IP", "NAT (2): Utilizing a NAT pool"],
    options: ["A customer with a private IP is assigned a port from a public IP address", "Ten private IP addresses send a request for a public IP address and are approved", "A private IP address is placed on a waitlist because all available public IP addresses in a pool have been taken"],
    correct: ["A customer with a private IP is assigned a port from a public IP address", "Ten private IP addresses send a request for a public IP address and are approved", "A private IP address is placed on a waitlist because all available public IP addresses in a pool have been taken"]
  },
  {
    id: "d4_post_07",
    type: "single",
    question: "Refer to the image. An administrator is tasked to go through the devices on a network and find one with a specific MAC address. Which IP address will expedite the process by broadcasting their query to all devices on the network?",
    image: "routeprint-screenshot.png",
    options: ["127.0.0.0", "192.168.2.0", "224.0.0.0", "255.255.255.255"],
    correct: [3]
  },
  {
    id: "d4_post_08",
    type: "match",
    question: "Match each email protocol to its definition.",
    image: null,
    pairs: ["Outgoing mail protocol that runs on port 25", "Protocol that downloads email from a server onto a client device", "Incoming mail protocol that runs on port 143"],
    options: ["SMTP", "POP3", "IMAP"],
    correct: ["SMTP", "POP3", "IMAP"]
  },
  {
    id: "d4_post_09",
    type: "match",
    question: "Match each type of NAT to its definition.",
    image: null,
    pairs: ["Static NAT", "PAT", "Dynamic NAT"],
    options: ["A one-to-one mapping from a private to public IP address", "Data requests are assigned a port number", "A many-to-many mapping of private to public IP addresses"],
    correct: ["A one-to-one mapping from a private to public IP address", "Data requests are assigned a port number", "A many-to-many mapping of private to public IP addresses"]
  },
  {
    id: "d4_post_10",
    type: "order",
    question: "Arrange the protocols from least secure to most secure.",
    image: null,
    options: ["Telnet", "RDP", "SSH"],
    correct: [0, 1, 2]
  },
  {
    id: "d4_post_11",
    type: "single",
    question: "Refer to the image. Which of the following is an IPv6 address classified as a global unicast address?",
    image: "ipconfig-screenshot.png",
    options: ["2601:681:8500:3600:f5d5", "fe80::574:8dda:4735:a4db%25", "255.255.255.0", "10.0.0.1"],
    correct: [0]
  },
  {
    id: "d4_post_12",
    type: "single",
    question: "Which IPv6 address is not a legitimate address?",
    image: null,
    options: ["2001::eeee:ffff::0001", "2001::eeee:ffff:0000:0000:0001", "2000:0000:0000:eeee:ffff:0001", "2001:0000:0000:eeee:ffff:0000:0000:0001"],
    correct: [0]
  },
  {
    id: "d4_post_13",
    type: "single",
    question: "A DNS table maps hostnames to IP addresses using ______ records, or hostname-to-IP address lookup records.",
    image: null,
    options: ["A", "B", "C", "D", "E"],
    correct: [0]
  },
  {
    id: "d4_post_14",
    type: "match",
    question: "Match each DNS resource record type to its definition.",
    image: null,
    pairs: ["A", "SOA", "MX", "CNAME", "PTR", "AAAA"],
    options: ["Resolves hostnames to IPv4 addresses", "Contains data for DNS zones", "Indicates a mail server", "Creates an alias for a hostname", "Resolves IP addresses to fully qualified domain names", "Resolves hostnames to IPv6 addresses"],
    correct: ["Resolves hostnames to IPv4 addresses", "Contains data for DNS zones", "Indicates a mail server", "Creates an alias for a hostname", "Resolves IP addresses to fully qualified domain names", "Resolves hostnames to IPv6 addresses"]
  },
  {
    id: "d4_post_15",
    type: "multi",
    question: "Why is UDP rather than TCP the preferred protocol for audio and video streaming? Choose two answers.",
    image: null,
    options: ["UDP is more reliable because it requires acknowledgement of received data", "UDP does not require data to be resent if streams are briefly interrupted", "UDP organizes data into numbered segments for ease of streaming", "UDP takes up less bandwidth than TCP", "UDP uses less overhead than TCP"],
    correct: [1, 4]
  },
  {
    id: "d4_post_16",
    type: "multi",
    question: "What does IPv6 provide on data to help secure data transmissions? Choose two answers.",
    image: null,
    options: ["Authentication", "Confidentiality", "Encryption", "Integrity"],
    correct: [0, 2]
  },
  {
    id: "d4_post_17",
    type: "match",
    question: "Match each TCP layer and its OSI counterpart to their duties.",
    image: null,
    pairs: ["Application (TCP) and Application, Presentation, Session (OSI)", "Transport (TCP) and Transport (OSI)", "Internet (TCP) and Network (OSI)", "Network Access (TCP) and Data-link, Physical (OSI)"],
    options: ["Format data and open a session with a data recipient", "Segment data", "Place data into packets and address those packets", "Transfer bits from a source to a destination"],
    correct: ["Format data and open a session with a data recipient", "Segment data", "Place data into packets and address those packets", "Transfer bits from a source to a destination"]
  },
  {
    id: "d4_post_18",
    type: "single",
    question: "Which command shows dynamic port numbers and their connections on a device?",
    image: null,
    options: ["nbtstat -a", "netstat -a", "ping -a", "tracert -a"],
    correct: [1]
  },
  {
    id: "d4_post_19",
    type: "order",
    question: "Arrange the layers of the OSI model from top to bottom.",
    image: null,
    options: ["Application", "Presentation", "Session", "Transport", "Network", "Data-link", "Physical"],
    correct: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    id: "d4_post_20",
    type: "single",
    question: "On which layer of the OSI model do the SMTP and DNS protocols run?",
    image: null,
    options: ["Application", "Presentation", "Session", "Physical"],
    correct: [0]
  },
  {
    id: "d4_post_21",
    type: "single",
    question: "Refer to the image. Which of the following is an IPv6 address that can communicate with other devices on the local network?",
    image: "ipconfig-screenshot.png",
    options: ["2601:681:8500:3600:f5d5", "fe80::574:8dda:4735:a4db%25", "255.255.255.0", "10.0.0.1"],
    correct: [1]
  },
  {
    id: "d4_post_22",
    type: "single",
    question: "Refer to the image. The DHCP server has been set to define up to how many addresses in the address pool?",
    image: "dhcp-screenshot.png",
    options: ["100", "50", "1440", "0"],
    correct: [1]
  },
  {
    id: "d4_post_23",
    type: "single",
    question: "Which is the best reason to use IPv4?",
    image: null,
    options: ["It is a 32-bit address", "It is a 64-bit address", "Most devices will automatically obtain an IP address when connected to a network", "There are plenty of IPv4 addresses left"],
    correct: [2]
  },
  {
    id: "d4_post_24",
    type: "multi",
    question: "Which two layers of the OSI model are responsible for addressing data?",
    image: null,
    options: ["Application", "Data-link", "Network", "Transport"],
    correct: [1, 2]
  },
  {
    id: "d4_post_25",
    type: "single",
    question: "Which IP address would be categorized as a classless address?",
    image: null,
    options: ["An IP address with a subnet mask of 255.0.0.0", "An IP address with a subnet mask of 255.255.0.0", "An IP address with a subnet mask of 255.255.255.0", "An IP address with a subnet mask of 255.255.240.0"],
    correct: [3]
  },
  {
    id: "d4_post_26",
    type: "single",
    question: "In which class is an IP address of 172.30.30.30?",
    image: null,
    options: ["A", "B", "C", "D"],
    correct: [1]
  },
  {
    id: "d4_post_27",
    type: "multi",
    question: "Which four layers from the OSI model are also on the TCP model?",
    image: null,
    options: ["Application", "Data-link", "Network", "Physical", "Presentation", "Session", "Transport"],
    correct: [0, 1, 2, 6]
  },
  {
    id: "d4_post_28",
    type: "multi",
    question: "What are two ways in which a user can access a device remotely?",
    image: null,
    options: ["Remote Access", "Remote Assistance", "Remote Desktop", "Remote VPN"],
    correct: [1, 2]
  },
  {
    id: "d4_post_29",
    type: "single",
    question: "Which is the correct order of processing data as it moves down the OSI model?",
    image: null,
    options: ["Packets, segments, bits, frames", "Packets, segments, frames, bits", "Segments, packets, bits, frames", "Segments, packets, frames, bits"],
    correct: [3]
  },
  {
    id: "d4_post_30",
    type: "match",
    question: "Match each reserved IPv6 address or address range to its description.",
    image: null,
    pairs: ["Link-local unicast", "Unique local unicast", "Global unicast", "Loopback address", "Multicast"],
    options: ["FE80::/10", "FC00::/7", "2000::/3", "::1", "FF00::/8"],
    correct: ["FE80::/10", "FC00::/7", "2000::/3", "::1", "FF00::/8"]
  },
  {
    id: "d4_post_31",
    type: "single",
    question: "Which device, besides a Windows Server, commonly hosts a VPN?",
    image: null,
    options: ["Hub", "Switch", "Wireless access point", "Wireless controller"],
    correct: [2]
  },
  {
    id: "d4_post_32",
    type: "match",
    question: "Match each ipconfig command to its function.",
    image: null,
    pairs: ["ipconfig", "ipconfig /release", "ipconfig /renew", "ipconfig /all", "ipconfig /displaydns", "ipconfig /flushdns"],
    options: ["Provides IP address information for each network adapter on a device", "Releases an IP address", "Obtains an IP address", "Displays DHCP server information for each network adapter", "Shows DNS server addresses of recently visited sites", "Empties a DNS cache"],
    correct: ["Provides IP address information for each network adapter on a device", "Releases an IP address", "Obtains an IP address", "Displays DHCP server information for each network adapter", "Shows DNS server addresses of recently visited sites", "Empties a DNS cache"]
  },
  {
    id: "d4_post_33",
    type: "match",
    question: "Match each port range to its range numbers.",
    image: null,
    pairs: ["Well-known ports", "Registered ports", "Dynamic and private ports"],
    options: ["0-1023", "1024-49151", "49152-65535"],
    correct: ["0-1023", "1024-49151", "49152-65535"]
  },
  {
    id: "d4_post_34",
    type: "single",
    question: "An administrator is looking at a netstat output and sees a few lines with :: as the IP address. What does :: represent?",
    image: null,
    options: ["An IPv6 address with all fs", "An IPv6 address with all 0s", "An IPv6 address with all 1s", "That every port is open for IPv6 traffic"],
    correct: [1]
  },
  {
    id: "d4_post_35",
    type: "single",
    question: "Which type of DNS servers have massive tables of hostnames and IP addresses?",
    image: null,
    options: ["Backbone", "External", "ISP", "Root"],
    correct: [3]
  },
  {
    id: "d4_post_36",
    type: "match",
    question: "Match each IPv4 to IPv6 tunneling protocol with its description.",
    image: null,
    pairs: ["Transmits IPv6 packets between dual stack nodes", "A router with a public IPv4 address is an IPv6 gateway", "Provides IPv6 connectivity to IPv4 hosts"],
    options: ["ISATAP", "Teredo", "6 to 4"],
    correct: ["ISATAP", "6 to 4", "Teredo"]
  },
  {
    id: "d4_post_37",
    type: "single",
    question: "Which numeric range represents IP addresses that are multicast addresses?",
    image: null,
    options: ["Numbers that start with 0", "Numbers that start with 224 to 239", "Numbers that start with 240 to 254", "Numbers that start with 255"],
    correct: [1]
  },
  {
    id: "d4_post_38",
    type: "single",
    question: "In the TCP model, hardware pieces appear in the _______ layer and software pieces in the _______ layer.",
    image: null,
    options: ["Transport; Application", "Network Access; Internet", "Internet; Application", "Network Access; Transport", "Application; Network Access"],
    correct: [2]
  },
  {
    id: "d4_post_39",
    type: "single",
    question: "NAT allows devices with _______ IP addresses to use _______ IP addresses to communicate with other networks.",
    image: null,
    options: ["private, private", "private, public", "public, private", "public, public"],
    correct: [1]
  },
  {
    id: "d4_post_40",
    type: "single",
    question: "A network administrator has separated a physical network into three subnets. What device is needed to connect those subnets?",
    image: null,
    options: ["Firewall", "Hub", "Router", "Switch"],
    correct: [2]
  },
  {
    id: "d4_post_41",
    type: "match",
    question: "Match each internet protocol to its definition.",
    image: null,
    pairs: ["FTP", "HTTP", "HTTPS"],
    options: ["Protocol used to upload or download files to or from a web server", "Main protocol used for webpages", "Protocol in which data in transit is encrypted"],
    correct: ["Protocol used to upload or download files to or from a web server", "Main protocol used for webpages", "Protocol in which data in transit is encrypted"]
  },
  {
    id: "d4_post_42",
    type: "single",
    question: "The image shows an IPv4 address of 10.0.0.72 with a subnet mask of 255.255.255.0. Based on this information, what class is the IP address?",
    image: "ipconfig-screenshot.png",
    options: ["A", "B", "C", "D", "E"],
    correct: [0]
  },
  {
    id: "d4_post_43",
    type: "single",
    question: "In which class is an IP address of 200.201.202.203?",
    image: null,
    options: ["A", "B", "C", "D"],
    correct: [2]
  },
  {
    id: "d4_post_44",
    type: "single",
    question: "Refer to the image. A device has an IP address of 10.0.2.46 and a subnet mask of 255.255.255.0. Which portion of the IP address will be the same for every device on the subnet?",
    image: "ipconfigipv6-screenshot.png",
    options: ["10", "10.0", "10.0.2", "46"],
    correct: [2]
  },
  {
    id: "d4_post_45",
    type: "single",
    question: "Which best describes the role of a default gateway?",
    image: null,
    options: ["Connects an internal network with an ISP", "Connects segments of a LAN", "Routes traffic meant for the current network", "Routes traffic not meant for the current network"],
    correct: [3]
  },
  {
    id: "d4_post_46",
    type: "single",
    question: "Entries in an lmhosts file resolve IP addresses to ________ names on devices.",
    image: null,
    options: ["DHCP", "DNS", "NetBIOS", "WINS"],
    correct: [2]
  },
  {
    id: "d4_post_47",
    type: "single",
    question: "Hubs operate on which layer of the OSI model?",
    image: null,
    options: ["Data-link", "Network", "Physical", "Transport"],
    correct: [2]
  },
  {
    id: "d4_post_48",
    type: "single",
    question: "Which protocol resolves NetBIOS names to IP addresses?",
    image: null,
    options: ["DNS", "DHCP", "WINS", "HOSTSWindows Internet Name Service (WINS) resolves NetBIOS names to IP addresses."],
    correct: [2]
  },
  {
    id: "d4_post_49",
    type: "single",
    question: "What is the address of a host before it receives an IPv6 address?",
    image: null,
    options: ["0:0:0:0:0", "::1", "FF00::/8", "2001:0DB8::/32"],
    correct: [0]
  },
  {
    id: "d4_post_50",
    type: "single",
    question: "Which command will release IPv6 addresses from a device?",
    image: null,
    options: ["ipconfig /release6", "ipconfig /releasev6", "ipconfig /release /6", "ipconfig /release -6"],
    correct: [0]
  },
  {
    id: "d4_post_51",
    type: "single",
    question: "Refer to the image. Where would an administrator select to set the default IPv6 gateway for this device?", image: "adapter-properties.png", options: ["Configure", "Install", "Properties", "Sharing"], correct: [2] }
];