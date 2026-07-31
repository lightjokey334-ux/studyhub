var QUESTIONS_D1_POST = [
  {
    id: "d1_post_01",
    type: "match",
    question: "Match each network term to its definition.",
    image: null,
    pairs: ["Internet", "Intranet", "Client-server network", "Extranet", "Peer-to-peer network"],
    options: ["Large collection of public networks", "Internal network of devices", "A network with limited, authenticated public access", "Utilized by home and small office networks in which each device is responsible for managing access to its own resources", "Utilized by medium and large-sized businesses that require a central server for hosting user accounts, devices, and permissions"],
    correct: ["Large collection of public networks", "Internal network of devices", "Utilized by medium and large-sized businesses that require a central server for hosting user accounts, devices, and permissions", "A network with limited, authenticated public access", "Utilized by home and small office networks in which each device is responsible for managing access to its own resources"]
  },
  {
    id: "d1_post_02",
    type: "single",
    question: "A user accidentally sends sensitive data to all the devices in a company network. Which type of data transmission is described in the scenario?",
    image: null,
    options: ["Multicast", "Unicast", "Broadcast", "IoT"],
    correct: [2]
  },
  {
    id: "d1_post_03",
    type: "match",
    question: "Match each virtual switch type to its definition.",
    image: null,
    pairs: ["Private", "External", "Internal"],
    options: ["Provides VMs the same access permissions of the host PC", "Provides VMs access to other VMs and the host machine", "Provides VMs access only to other VMs"],
    correct: ["Provides VMs access only to other VMs", "Provides VMs the same access permissions of the host PC", "Provides VMs access to other VMs and the host machine"]
  },
  {
    id: "d1_post_04",
    type: "single",
    question: "Refer to the image. A user can create a remote connection to a device by entering its ______.",
    image: "rdp_connection.png",
    options: ["Wi-Fi credentials", "IP address", "domain information", "product number"],
    correct: [1]
  },
  {
    id: "d1_post_05",
    type: "single",
    question: "Refer to the image. How many virtual machines are on the device and which operating system instances do they run?",
    image: "virtualbox_manager.png",
    options: ["Two, one macOS and one Linux", "Two, one UNIX and one Linux", "Two, one Linux and one Windows", "Two, one macOS and one Windows"],
    correct: [2]
  },
  {
    id: "d1_post_06",
    type: "multi",
    question: "Which statements are true of Type II hypervisors? Choose two answers.",
    image: null,
    options: ["Type II hypervisors run on their own independent operating systems", "Type II hypervisors include Hyper-V manager and Citrix XenServer", "Type II hypervisors allocate system resources such as RAM to virtual machines", "Type II hypervisors are located within existing operating systems such as Windows 10 Pro", "Type II hypervisors are also known as bare-metal hypervisors"],
    correct: [2, 3]
  },
  {
    id: "d1_post_07",
    type: "single",
    question: "Refer to the image. Where can a user specify the encrypted connection utilized by a VPN?",
    image: "vpn_settings.png",
    options: ["Pre-shared key", "Connection name", "VPN type", "Type of sign-in info", "Server name or address"],
    correct: [2]
  },
  {
    id: "d1_post_08",
    type: "single",
    question: "What remote tool allows someone to see what a remote user is doing when connected to a machine?",
    image: null,
    options: ["RemoteApp", "Remote Device", "Remote Assistance", "Remote Helper"],
    correct: [2]
  }
];
