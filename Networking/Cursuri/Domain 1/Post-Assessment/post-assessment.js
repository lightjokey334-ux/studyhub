var QUESTIONS_D1_POST = [
  {
    id: "d1_post_01",
    type: "match",
    question: "Match each network term to its definition.",
    image: null,
    pairs: ["Internet", "Intranet", "Client-server network", "Extranet", "Peer-to-peer network"],
    options: ["Large collection of public networks", "Internal network of devices", "A network with limited, authenticated public access", "Utilized by home and small office networks in which each device is responsible for managing access to its own resources", "Utilized by medium and large-sized businesses that require a central server for hosting user accounts, devices, and permissions"],
    correct: ["Large collection of public networks", "Internal network of devices", "Utilized by medium and large-sized businesses that require a central server for hosting user accounts, devices, and permissions", "A network with limited, authenticated public access", "Utilized by home and small office networks in which each device is responsible for managing access to its own resources"],
    explanation: "Internet = rețea publică globală; Intranet = rețea internă; Client-server = server central cu conturi și permisiuni; Extranet = acces limitat pentru externi; Peer-to-peer = fiecare dispozitiv își gestionează propriile resurse (Video: Define Network Concepts)."
  },
  {
    id: "d1_post_02",
    type: "single",
    question: "A user accidentally sends sensitive data to all the devices in a company network. Which type of data transmission is described in the scenario?",
    image: null,
    options: ["Multicast", "Unicast", "Broadcast", "IoT"],
    correct: [2],
    explanation: "Broadcast transmite date către toate dispozitivele din rețea; unicast este unu-la-unu, multicast către un grup selectat (Video: Define Network Concepts)."
  },
  {
    id: "d1_post_03",
    type: "match",
    question: "Match each virtual switch type to its definition.",
    image: null,
    pairs: ["Private", "External", "Internal"],
    options: ["Provides VMs the same access permissions of the host PC", "Provides VMs access to other VMs and the host machine", "Provides VMs access only to other VMs"],
    correct: ["Provides VMs access only to other VMs", "Provides VMs the same access permissions of the host PC", "Provides VMs access to other VMs and the host machine"],
    explanation: "Private = doar alte VM-uri; External = acces identic cu gazda; Internal = VM-uri + gazdă (Video: Virtual Switches)."
  },
  {
    id: "d1_post_04",
    type: "single",
    question: "Refer to the image. A user can create a remote connection to a device by entering its ______.",
    image: "rdp_connection.png",
    options: ["Wi-Fi credentials", "IP address", "domain information", "product number"],
    correct: [1],
    explanation: "Conexiunea Remote Desktop necesită adresa IP a dispozitivului țintă (Video: Remote Desktop)."
  },
  {
    id: "d1_post_05",
    type: "single",
    question: "Refer to the image. How many virtual machines are on the device and which operating system instances do they run?",
    image: "virtualbox_manager.png",
    options: ["Two, one macOS and one Linux", "Two, one UNIX and one Linux", "Two, one Linux and one Windows", "Two, one macOS and one Windows"],
    correct: [2],
    explanation: "Imaginea arată două mașini virtuale: una Linux și una Windows (Video: Virtual Machines)."
  },
  {
    id: "d1_post_06",
    type: "multi",
    question: "Which statements are true of Type II hypervisors? Choose two answers.",
    image: null,
    options: ["Type II hypervisors run on their own independent operating systems", "Type II hypervisors include Hyper-V manager and Citrix XenServer", "Type II hypervisors allocate system resources such as RAM to virtual machines", "Type II hypervisors are located within existing operating systems such as Windows 10 Pro", "Type II hypervisors are also known as bare-metal hypervisors"],
    correct: [2, 3],
    explanation: "Hypervizorii de tip II rulează într-un sistem de operare existent (ex. Windows 10 Pro) și alocă resurse; tip I sunt bare-metal (Video: Hypervisors)."
  },
  {
    id: "d1_post_07",
    type: "single",
    question: "Refer to the image. Where can a user specify the encrypted connection utilized by a VPN?",
    image: "vpn_settings.png",
    options: ["Pre-shared key", "Connection name", "VPN type", "Type of sign-in info", "Server name or address"],
    correct: [2],
    explanation: "Setarea 'VPN type' permite alegerea protocolului de criptare pentru conexiune (Video: VPN)."
  },
  {
    id: "d1_post_08",
    type: "single",
    question: "What remote tool allows someone to see what a remote user is doing when connected to a machine?",
    image: null,
    options: ["RemoteApp", "Remote Device", "Remote Assistance", "Remote Helper"],
    correct: [2],
    explanation: "Remote Assistance permite vizualizarea acțiunilor utilizatorului la distanță; Remote Desktop nu oferă această funcție (Video: Remote Desktop)."
  }
];