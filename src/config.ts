export const siteConfig = {
  name: "Ronith Reddy P",
  title: "Data Center & Hardware Technician",
  description: "Portfolio website of Ronith Reddy P - Data Center & Hardware Technician",
  accentColor: "#1d4ed8",
  social: {
    email: "ronithreddy0306@gmail.com",
    linkedin: "https://www.linkedin.com/in/ronith03/",
    twitter: "",
    github: "",
  },
  resume: "/resume.pdf", // Path to your resume PDF file
  aboutMe:
    "Hey, I'm Ronith! For the past 3+ years, I've been the guy who makes sure data stays safe and servers keep running smoothly. Whether it's racking new equipment, running fiber cables, or troubleshooting a 3 AM issue, I actually enjoy being hands-on with it all. I have a knack for breaking down complex problems into simple solutions, and at my current job I even helped cut downtime by 20%. Outside of work, you'll probably find me at EDM concerts or keeping up with the latest tech trends. For me, technology should always make life easier, not harder—and that's exactly how I approach every challenge",
  skills: ["Data Center Operations", "Hardware Installation", "Structured Cabling", "Network Administration", "Linux/Unix", "AWS", "Python", "PowerShell", "SQL", "Power BI", "VMware", "Active Directory", "VPN", "DHCP", "DNS", "TCP/IP", "VLANs", "Preventive Maintenance", "Incident Management"],
  projects: [
    {
      name: "Data Center Lab & Cabling Practice",
      description:
        "Extended IT Technician role by developing a 6U lab environment to simulate enterprise data center operations. Practiced rack and stack installation of 6+ devices including servers, switches, and patch panels. Routed and labeled single-mode fiber and Cat6/Cat6A copper cabling, verifying terminations to TIA-568 standards. Achieved <1dB loss on fiber connections during testing, ensuring clean and reliable links.",
      link: "",
      skills: ["Structured Cabling", "Rack Installation", "Fiber Optics", "TIA-568 Standards", "Documentation"],
    },
    {
      name: "Office Network & Monitoring Setup",
      description:
        "Configured 2 switches, 1 router, and 3 access points to support a 15-user office environment. Created separate VLANs for workstations, printers, and guest Wi-Fi, improving security and reducing broadcast traffic. Deployed monitoring tools (Zabbix/PRTG) to track device health and generate alerts, reducing downtime by 25%.",
      link: "",
      skills: ["Network Configuration", "VLANs", "Monitoring Tools", "Zabbix", "PRTG", "Security"],
    },
    {
      name: "PC Build & System Recovery Practice",
      description:
        "Assembled a desktop PC from components (motherboard, CPU, PSU, storage, memory). Installed both Windows 10 and Ubuntu Linux, practiced OS reinstallation and driver recovery. Tested backup/restore workflows to simulate disaster recovery scenarios. Reflects the troubleshooting and hardware replacement technicians perform in enterprise environments.",
      link: "",
      skills: ["Hardware Assembly", "Windows 10", "Ubuntu Linux", "Disaster Recovery", "System Administration"],
    },
    {
      name: "Home Wi-Fi & Network Setup",
      description:
        "Configured a Wi-Fi router with dual SSIDs and DHCP, setting up basic firewall rules. Ran Cat6 Ethernet cabling to connect desktop and media devices, boosting connection reliability by 40%. Similar to how small offices manage user connectivity and troubleshoot everyday internet issues.",
      link: "",
      skills: ["Wi-Fi Configuration", "DHCP", "Firewall Rules", "Ethernet Cabling", "Network Troubleshooting"],
    },
  ],
  experience: [
    {
      company: "Liberty Dental Plan",
      title: "Data Analyst",
      dateRange: "Mar 2025 - Present",
      bullets: [
        "Resolved recurring infrastructure and reporting issues, reducing downtime incidents by 15%",
        "Automated SQL queries and Power BI workflows, saving 8–10 hours of manual effort per week",
        "Delivered 5+ interactive dashboards that improved KPI visibility for business leaders",
        "Conducted variance analysis on claims and operational data, identifying process gaps",
        "Provided technical support to non-technical staff, simplifying complex reporting concepts",
      ],
    },
    {
      company: "CoreWeave",
      title: "Data Center Technician",
      dateRange: "Feb 2024 - Feb 2025",
      bullets: [
        "Performed rack and stack installation of 150+ servers, switches, and storage systems across 20+ racks",
        "Executed hardware installation and replacement (servers, switches, PSUs, storage) to support growing workloads",
        "Managed inventory of server parts, improving availability and reducing procurement delays",
        "Installed and tested structured cabling (fiber/copper) across 20+ racks and maintained installation records",
        "Assisted system monitoring to detect faults early and supported capacity planning for upcoming deployments",
        "Authored and followed SOPs/MOPs, improving onboarding for new technicians and ensuring compliance with safety protocols",
      ],
    },
    {
      company: "Mana Broadband",
      title: "IT Technician",
      dateRange: "Mar 2020 - Dec 2021",
      bullets: [
        "Installed and repaired fiber and copper broadband cabling for 100+ residential and commercial clients",
        "Configured and troubleshot routers, modems, and CPE devices (VPN, DHCP, DNS)",
        "Responded to 25+ monthly service outages, restoring service in under 30 minutes on average",
        "Managed inventory of networking equipment (cables, routers, modems), ensuring 95% availability for field jobs",
        "Maintained installation and billing records in Excel, improving accuracy by 20%",
        "Gained foundational exposure to RAID, SAN, Hyper-V, Linux/Unix, and power/cooling systems",
      ],
    },
  ],
  education: [
    {
      school: "Lindsey Wilson University",
      degree: "Master of Science in Technology Management",
      dateRange: "2024",
      achievements: [
        "Specialized in Computer & Network Security",
        "Completed coursework in Disaster & Recovery Planning",
        "Advanced SQL & Database Management training",
      ],
    },
    {
      school: "GITAM University",
      degree: "Bachelor of Technology in Computer Science",
      dateRange: "May 2022",
      achievements: [
        "Comprehensive computer science foundation",
        "Hands-on experience with programming and system design",
        "Project-based learning in software development",
      ],
    },
  ],
};
