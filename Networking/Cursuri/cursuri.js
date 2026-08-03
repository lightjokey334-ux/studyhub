/* ===================================================================
   cursuri.js — DATELE specifice materiei Networking: doar SUBJECT și
   DOMAINS. Toată logica (sidebar, player video, teste, etc.) e în
   cursuri-engine.js, comun tuturor materiilor — NU se copiază aici.

   Structura fiecărui domeniu:
   {
     id, title,
     videoSections: [
       { section: "Nume secțiune", chapters: [ {title, src}, ... ] }
     ]
   }

   `src` e gol (""). Când primești numele fișierelor .mp4, completează-le
   cu DOAR NUMELE FIȘIERULUI (nu calea completă) — ex: "01-introduction.mp4".
   Fișierul trebuie pus în "Domain N/Videos/"; calea completă e construită
   automat de cod.
   =================================================================== */

const SUBJECT = 'Networking'; // folosit pentru namespacing în istoricul de progres

const DOMAINS = [
  {
  id: 'd1',
  title: 'Domain 1: Networking Fundamentals',
  folder: 'Domain 1',
  videoSections: [
    {
      section: 'Network Concepts',
      chapters: [
        { title: 'Introduction', src: 'H0001.mp4' },
        { title: 'How to Study for This Exam', src: 'F0001.mp4' },
        { title: 'Define Network Concepts', src: 'C0001.mp4' },
      ]
    },
    {
      section: 'Cloud and Virtualization Concepts',
      chapters: [
        { title: 'Hypervisors', src: 'M0001.mp4' },
        { title: 'Virtual Machines', src: 'M0002.mp4' },
        { title: 'Virtual Switches', src: 'M0003.mp4' },
        { title: 'VPN', src: 'M0004.mp4' },
        { title: 'Remote Desktop', src: 'M0005.mp4' },
      ]
    },
  ],
},
{
  id: 'd2',
  title: 'Domain 2: Network Infrastructures',
  folder: 'Domain 2',
  videoSections: [
    {
      section: 'Network Infrastructures',
      chapters: [
        { title: 'Perimeter Networks 1', src: 'H0001.mp4' },
        { title: 'Perimeter Networks 2', src: 'F0001.mp4' },
        { title: 'Addressing', src: 'M0001.mp4' },
        { title: 'Reserved Address Ranges', src: 'M0002.mp4' },
        { title: 'VLANs', src: 'F0002.mp4' },
        { title: 'Wired and Wireless LANs', src: 'F0003.mp4' },
      ]
    },
    {
      section: 'Wide Area Networks',
      chapters: [
        { title: 'Leased Lines, Dial-Up, ISDN', src: 'F0004.mp4' },
        { title: 'VPN', src: 'F0005.mp4' },
        { title: 'T1, T3, E1, E3', src: 'F0006.mp4' },
        { title: 'DSL, Cable Modem', src: 'F0007.mp4' },
        { title: 'Cellular, Satellite', src: 'C0001.mp4' },
      ]
    },
    {
      section: 'Wireless Networks',
      chapters: [
        { title: 'Standards and Characteristics', src: 'F0008.mp4' },
        { title: 'Types of Network Security', src: 'FM001.mp4' },
        { title: 'P2P and Ad Hoc Connections', src: 'M0003.mp4' },
        { title: 'Wireless Bridging', src: 'F0009.mp4' },
        { title: 'Wireless Interference', src: 'C0002.mp4' },
      ]
    },
    {
      section: 'Network Topologies',
      chapters: [
        { title: 'Star, Mesh', src: 'F0010.mp4' },
        { title: 'Ring, Bus', src: 'F0011.mp4' },
        { title: 'Logical and Physical Topologies', src: 'F0012.mp4' },
      ]
    },
  ],
},
{
  id: 'd3',
  title: 'Domain 3: Network Hardware',
  folder: 'Domain 3',
  videoSections: [
    {
      section: 'Understand Switches',
      chapters: [
        { title: 'Transmission Speeds 1', src: 'H0001.mp4' },
        { title: 'Transmission Speeds 2', src: 'F0001.mp4' },
        { title: 'Number and Type of Ports', src: 'F0002.mp4' },
        { title: 'Number and Speed of Uplinks', src: 'F0003.mp4' },
        { title: 'Managed or Unmanaged Switches', src: 'F0004.mp4' },
        { title: 'VLAN Capabilities', src: 'F0005.mp4' },
        { title: 'Layer 2 and Layer 3 Switches', src: 'FM001.mp4' },
        { title: 'Hardware Redundancy and Support', src: 'F0006.mp4' },
        { title: 'Backplane Speed', src: 'F0007.mp4' },
        { title: 'Switching Types and MAC Address Tables', src: 'F0008.mp4' },
        { title: 'Hubs vs. Switches', src: 'F0009.mp4' },
        { title: 'Virtual Switches', src: 'M0001.mp4' },
        { title: 'Spanning Tree Protocol', src: 'F0010.mp4' },
      ]
    },
    {
      section: 'Understand Routers',
      chapters: [
        { title: 'Transmission Speed Considerations', src: 'F0011.mp4' },
        { title: 'Directly Connected Routes', src: 'M0002.mp4' },
        { title: 'Static Routing', src: 'M0003.mp4' },
        { title: 'Dynamic Routing', src: 'M0004.mp4' },
        { title: 'RIP vs. OSPF', src: 'F0012.mp4' },
        { title: 'Default Routes', src: 'M0005.mp4' },
        { title: 'Routing Table and Selection', src: 'M0006.mp4' },
        { title: 'Routing Table Memory', src: 'F0013.mp4' },
        { title: 'Port Forwarding', src: 'M0007.mp4' },
        { title: 'Network Segmentation', src: 'F0014.mp4' },
        { title: 'Installing and Configuring Routing', src: 'M0008.mp4' },
        { title: 'Quality of Service', src: 'M0009.mp4' },
        { title: 'Convergence', src: 'F0015.mp4' },
      ]
    },
    {
      section: 'Understand Media Types',
      chapters: [
        { title: 'Cable Types and Characteristics', src: 'F0016.mp4' },
        { title: 'Fiber Optic', src: 'F0017.mp4' },
        { title: 'Twisted-Pair', src: 'F0018.mp4' },
        { title: 'CAT Cabling', src: 'F0019.mp4' },
        { title: 'Configuration', src: 'C0001.mp4' },
        { title: 'Susceptibility', src: 'F0020.mp4' },
      ]
    },
  ],
},
{
  id: 'd4',
  title: 'Domain 4: Protocols and Services',
  folder: 'Domain 4',
  videoSections: [
    {
      section: 'Understand the OSI Model',
      chapters: [
        { title: 'OSI Model 1', src: 'H0001.mp4' },
        { title: 'OSI Model 2', src: 'F0001.mp4' },
        { title: 'TCP Model', src: 'F0002.mp4' },
        { title: 'OSI/TCP Models and Layers', src: 'F0003.mp4' },
        { title: 'TCP and UDP', src: 'F0004.mp4' },
        { title: 'Well-Known Ports', src: 'F0005.mp4' },
        { title: 'Packets and Frames', src: 'F0006.mp4' },
      ]
    },
    {
      section: 'Transmission Control Protocol (TCP) Model',
      chapters: [
        { title: 'Identification and Purpose of Layers', src: 'F0007.mp4' },
        { title: 'Devices, Protocols, and Applications', src: 'F0008.mp4' },
      ]
    },
    {
      section: 'Understand IPv4',
      chapters: [
        { title: 'IPv4 Overview', src: 'M0001.mp4' },
        { title: 'Subnetting', src: 'F0009.mp4' },
        { title: 'IPv4 Ipconfig', src: 'M0002.mp4' },
        { title: 'Why Use IPv4', src: 'F0010.mp4' },
        { title: 'Addressing', src: 'F0011.mp4' },
        { title: 'IPv4 to IPv6 Tunneling Protocols', src: 'F0012.mp4' },
        { title: 'Dual IP Stack', src: 'F0013.mp4' },
        { title: 'Subnet Masks', src: 'FM001.mp4' },
        { title: 'Gateway', src: 'M0003.mp4' },
        { title: 'Ports and Packets', src: 'M0004.mp4' },
        { title: 'Reserved Address Ranges', src: 'M0005.mp4' },
        { title: 'Classful vs Classless', src: 'M0006.mp4' },
      ]
    },
    {
      section: 'Understand IPv6',
      chapters: [
        { title: 'IPv6 Subnetting', src: 'F0014.mp4' },
        { title: 'IPv6 Ipconfig', src: 'M0007.mp4' },
        { title: 'Why Use IPv6', src: 'F0015.mp4' },
        { title: 'IPv6 Addressing, Subnet Masks', src: 'F0016.mp4' },
        { title: 'IPv6 Gateways', src: 'M0008.mp4' },
        { title: 'IPv6 Ports and Packets', src: 'M0009.mp4' },
        { title: 'IPv6 Reserved Address Ranges', src: 'F0017.mp4' },
        { title: 'IPv6 Address Types', src: 'M0010.mp4' },
      ]
    },
    {
      section: 'Identify Well-Known Ports',
      chapters: [
        { title: 'HTTP, HTTPS, FTP', src: 'M0011.mp4' },
        { title: 'SMTP, IMAP', src: 'F0018.mp4' },
        { title: 'DNS', src: 'M0012.mp4' },
        { title: 'RDP, SSH', src: 'M0013.mp4' },
      ]
    },
    {
      section: 'Understand Name Resolution',
      chapters: [
        { title: 'DNS', src: 'M0014.mp4' },
        { title: 'Resource Records', src: 'M0015.mp4' },
        { title: 'WINS, Name Resolution Process Steps', src: 'F0019.mp4' },
        { title: 'HOSTS File', src: 'M0016.mp4' },
        { title: 'LMHOSTS File', src: 'M0017.mp4' },
        { title: 'Resource Records and Lookups', src: 'M0018.mp4' },
      ]
    },
    {
      section: 'Understand Networking Services',
      chapters: [
        { title: 'DHCP', src: 'M0019.mp4' },
        { title: 'Network Address Translation', src: 'F0020.mp4' },
        { title: 'Firewalls', src: 'M0020.mp4' },
        { title: 'Remote Access, VPNs', src: 'M0021.mp4' },
        { title: 'Private and Port NAT', src: 'F0021.mp4' },
      ]
    },
  ],
},
{
  id: 'd5',
  title: 'Domain 5: Troubleshooting',
  folder: 'Domain 5',
  videoSections: [
    {
      section: 'Troubleshooting',
      chapters: [
        { title: 'Steps in the Troubleshooting Process 1', src: 'H0001.mp4' },
        { title: 'Steps in the Troubleshooting Process 2', src: 'F0001.mp4' },
        { title: 'Etiquette/Professional Conduct', src: 'F0002.mp4' },
      ]
    },
    {
      section: 'Appropriate Hardware Troubleshooting Tools',
      chapters: [
        { title: 'Multimeter', src: 'C0001.mp4' },
        { title: 'Cable Tester', src: 'F0003.mp4' },
        { title: 'Toner', src: 'F0004.mp4' },
        { title: 'Time Domain Reflectometer (TDR), Optical TDR (OTDR)', src: 'F0005.mp4' },
      ]
    },
    {
      section: 'Understand TCP/IP',
      chapters: [
        { title: 'Ping', src: 'M0001.mp4' },
        { title: 'Tracert', src: 'M0002.mp4' },
        { title: 'Pathping', src: 'M0003.mp4' },
        { title: 'Telnet', src: 'F0006.mp4' },
        { title: 'Ipconfig', src: 'M0004.mp4' },
        { title: 'Netstat', src: 'M0005.mp4' },
        { title: 'Reserved Ranges, Protocols', src: 'FM001.mp4' },
      ]
    },
    {
      section: 'Linux Software Troubleshooting Tools',
      chapters: [
        { title: 'Tool Selection, Syntax 1', src: 'M0006.mp4' },
        { title: 'Tool Selection, Syntax 2', src: 'H0002.mp4' },
      ]
    },
  ],
},
];