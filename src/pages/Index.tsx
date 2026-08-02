import thmLogo from "@/assets/tryhackme.png";
import htbLogo from "@/assets/htb.png";
import ldLogo from "@/assets/letsdefence.png";
import { Button } from "@/components/ui/button";
import { Shield, ExternalLink, Mail, Github, Linkedin, Terminal, Menu, X, ShieldCheck, Eye, Database, Activity, Monitor, FileSearch, AlertTriangle, Search, MessageSquare, Cpu, Server, Briefcase, ChevronLeft, ChevronRight, Award, FileText, Trophy, Globe, Users, Heart, Timer, MapPin, Star, ZoomIn, ChevronDown } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import useEmblaCarousel from "embla-carousel-react";

const ScrollReveal = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const StaggerContainer = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2 text-2xl font-bold font-mono tracking-tighter hover:text-primary transition-colors">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <span>BlueShield</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">
                {link.name}
              </a>
            ))}
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border p-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium font-mono">
              🛡️ Blue Team Defender
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hello I'm <br />
              <span className="text-primary gradient-text">Natto Muni Chakma</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
              Cybersecurity Analyst | Blue Team | SOC Enthusiast
            </p>
            <p className="text-muted-foreground max-w-md">
              Cybersecurity student specializing in SOC operations, threat detection,
and vulnerability assessment. Experienced in SIEM monitoring,
network analysis, and incident response through hands-on labs
and internship experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[150px]">
               View Projects
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 min-w-[150px]">
             Download Resume
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-[320px] md:w-[380px] aspect-[4/5] overflow-hidden rounded-2xl border border-primary/20 box-glow bg-card/50 mx-auto">
            <img 
  src={heroImage}
  alt="Natto Muni Chakma - Cybersecurity Analyst"
  className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
            
            <div className="absolute -z-10 top-1/4 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute -z-10 bottom-1/4 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-primary" />,
      title: "SOC Operations",
      description: "24/7 Security Operations Center monitoring, alert triage, and real-time threat detection using SIEM platforms."
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-primary" />,
      title: "Incident Response",
      description: "Rapid containment, eradication, and recovery from security incidents with detailed post-incident analysis."
    },
    {
      icon: <Search className="w-10 h-10 text-primary" />,
      title: "Threat Hunting",
      description: "Proactive hypothesis-driven searches through networks and endpoints to detect advanced persistent threats."
    },
    {
      icon: <FileSearch className="w-10 h-10 text-primary" />,
      title: "Digital Forensics",
      description: "Evidence collection, disk and memory forensics, and chain-of-custody preservation for investigations."
    },
    {
      icon: <Activity className="w-10 h-10 text-primary" />,
      title: "SIEM & Log Analysis",
      description: "Deploying and tuning SIEM solutions like Splunk, ELK, and Microsoft Sentinel for maximum visibility."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Security Hardening",
      description: "CIS benchmarks, endpoint protection, firewall rules, and zero-trust architecture implementation."
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Defensive Services</h2>
          <p className="text-muted-foreground">Comprehensive Blue Team security solutions to protect, detect, and respond to threats across your entire environment.</p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={staggerItem} className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 group">
              <div className="mb-6 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="aspect-video rounded-xl overflow-hidden bg-muted relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/40 transition-colors">
                <Terminal className="w-16 h-16 text-primary animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
              <div className="p-8 h-full flex items-end">
                <div className="font-mono text-sm text-primary-foreground/80">
                  <p>&gt; loading SIEM dashboard...</p>
                  <p>&gt; correlating threat intel feeds...</p>
                  <p>&gt; 0 active incidents. all clear.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <h3 className="text-xl text-primary font-medium">I am a cybersecurity student and SOC analyst intern with hands-on
experience in threat detection, vulnerability assessment,
and network security analysis.</h3>
             <h3 className="text-xl text-primary font-medium"> I have practical experience using tools such as Wireshark,
Nmap, Nessus, and SIEM platforms to analyze network traffic,
identify vulnerabilities, and investigate security incidents</h3>
             <h3 className="text-xl text-primary font-medium"> My goal is to work as a Security Analyst or SOC Analyst,
helping organizations detect and respond to cyber threats.</h3>
            <StaggerContainer className="grid grid-cols-2 gap-4 pt-4">
              {[
                { value: "200+", label: "Incidents Handled" },
                { value: "50+", label: "Clients Protected" },
                { value: "99.9%", label: "Uptime Maintained" },
                { value: "24/7", label: "Monitoring Coverage" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={staggerItem} className="space-y-1">
                  <h4 className="font-bold text-2xl text-primary">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
const Projects = () => {
  const projects = [
    {
      title: "Android Malware Detector",
      category: "Machine Learning & Reverse Engineering",
      description: "A hybrid static and dynamic Android malware analysis platform using machine learning classifiers (Random Forest & XGBoost) with a Next.js frontend.",
      link: "https://github.com/NATTOMR/Android-Malware-Detector--My-Final-Year-Project-2026-",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Wazuh SOC Home Lab",
      category: "SIEM & Incident Response",
      description: "A Wazuh-based Security Operations Center Home Lab for attack detection and log analysis using Ubuntu Server, Windows 11, Kali Linux, and Sysmon.",
      link: "https://github.com/NATTOMR/Design-and-Implementation-of-a-Wazuh-Based-SOC-Home-Lab-for-Attack-Detection-and-Log-Analysis",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "AD & EDR Home Lab",
      category: "Enterprise Security Hardening",
      description: "Enterprise-grade Active Directory domain environment integrated with EDR solutions for advanced threat monitoring and logging.",
      link: "https://github.com/NATTOMR/Enterprise-Grade-Home-Lab-Active-Directory-EDR-",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Intelligent Encrypted IDS",
      category: "Network Intrusion Detection",
      description: "Machine learning intrusion detection system classifying and detecting malicious patterns in encrypted network traffic.",
      link: "https://github.com/NATTOMR/Intelligent-Intrusion-Detection-System-for-Encrypted-Network-Traffic",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "AI SOC Automation",
      category: "Security Automation",
      description: "Automation tools for SOC using AI models to triage alerts, correlate threat logs, and accelerate response playbooks.",
      link: "https://github.com/NATTOMR/AI-SOC-Automation",
      icon: <Terminal className="w-8 h-8" />
    },
    {
      title: "AI Vulnerability Scanner",
      category: "Vulnerability Assessment",
      description: "Vulnerability scanner integrated with AI models to perform security assessments, prioritize risks, and suggest fixes.",
      link: "https://github.com/NATTOMR/AI-Assisted-Vulnerability-Scanner",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "TryHackMe Labs",
      category: "Blue Team Training",
      description: "Completed hands-on cybersecurity labs covering SOC analysis, threat detection and incident response.",
      link: "https://tryhackme.com/p/NATTO",
      logo: thmLogo
    },
    {
      title: "Hack The Box Challenges",
      category: "Penetration Testing Practice",
      description: "Solved multiple Hack The Box machines and challenges involving enumeration and privilege escalation.",
      link: "https://app.hackthebox.com/home",
      logo: htbLogo
    },
    {
      title: "LetsDefend SOC Platform",
      category: "SOC Analyst Training",
      description: "Practiced real-world SOC scenarios including phishing investigation and SIEM log analysis.",
      link: "https://app.letsdefend.io/",
      logo: ldLogo
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Case Studies & Projects</h2>
            <p className="text-muted-foreground">
              Real-world defensive security engagements, tools, and training profiles.
            </p>
          </div>

          <Button variant="outline" className="hidden md:flex">
            View All Cases
          </Button>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="aspect-video bg-muted relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="w-28 h-28 object-contain opacity-90 group-hover:scale-110 transition"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition duration-300">
                      {project.icon}
                    </div>
                  )}
                </div>

                {/* CLICKABLE BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      {project.logo ? "View Profile" : "View Code"}
                    </Button>
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <div>
                  <h3 className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mt-1">
                    {project.category}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm flex-grow">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center space-y-12">
        <ScrollReveal className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Strengthen Your Defenses</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Need a Blue Team specialist? Let's discuss how I can help protect your organization from evolving cyber threats.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Email */}
            <a 
              href="mailto:nattochakma29@gmail.com" 
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group box-glow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</span>
              <span className="text-sm font-medium text-foreground truncate max-w-full">nattochakma29@gmail.com</span>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/919121691958" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group box-glow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">WhatsApp</span>
              <span className="text-sm font-medium text-foreground truncate max-w-full">+91 9121691958</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/natto-muni-chakma-4b19b4259/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group box-glow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">LinkedIn</span>
              <span className="text-sm font-medium text-foreground truncate max-w-full">natto-muni-chakma-4b19b4259</span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/NATTOMR" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group box-glow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">GitHub</span>
              <span className="text-sm font-medium text-foreground truncate max-w-full">github.com/NATTOMR</span>
            </a>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const Certifications = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const certs = [
    {
      name: "Google Professional Cybersecurity Certificate",
      abbr: "Google Cybersecurity",
      org: "Google / Coursera",
      year: "2024",
      image: `${baseUrl}Certificate/google-cybersecurity-certificate.jpg`,
      pdf: `${baseUrl}Certificate/google-cybersecurity-certificate.pdf`,
      type: "cert",
      description: "Professional certification covering foundations of cybersecurity, networks, Linux, SQL, Python, and SIEM tools."
    },
    {
      name: "Cyber Security and Privacy Certificate",
      abbr: "Cybersecurity & Privacy",
      org: "Cyber Security & Privacy Certification",
      year: "2024",
      image: `${baseUrl}Certificate/cyber-security-privacy-certificate.jpg`,
      pdf: `${baseUrl}Certificate/cyber-security-privacy-certificate.pdf`,
      type: "cert",
      description: "Comprehensive certification covering data privacy regulations, information security fundamentals, risk management, and defensive controls."
    },
    {
      name: "Computer Network and Internet Protocols Certificate",
      abbr: "Networks & Protocols",
      org: "Computer Networks Certification",
      year: "2024",
      image: `${baseUrl}Certificate/computer-network-certificate.jpg`,
      pdf: `${baseUrl}Certificate/computer-network-certificate.pdf`,
      type: "cert",
      description: "In-depth certification covering OSI/TCP-IP architecture, routing protocols, DNS/DHCP, packet inspection, and network security."
    },
    {
      name: "Elevats Labs Cyber Certificate",
      abbr: "Elevats Labs",
      org: "Elevate Labs",
      year: "2024",
      image: `${baseUrl}Certificate/elevate-labs-certificate.jpg`,
      pdf: `${baseUrl}Certificate/elevate-labs-certificate.pdf`,
      type: "cert",
      description: "Hands-on certificate in web security, phishing simulation, firewall configuration, SIEM monitoring, and incident response."
    },
    {
      name: "Launched Cyber Certificate",
      abbr: "Launched Cyber",
      org: "Launched",
      year: "2024",
      image: `${baseUrl}Certificate/launched-cyber-certificate.jpg`,
      pdf: `${baseUrl}Certificate/launched-cyber-certificate.pdf`,
      type: "cert",
      description: "Certificate covering Linux, Windows AD, OSI/TCP-IP networking, secure protocols (DNS, SSH, TLS), and packet analysis."
    },
    {
      name: "Ethical Hacking Certificate",
      abbr: "Ethical Hacking",
      org: "EC-Council / Internship Studio",
      year: "2024",
      image: `${baseUrl}Certificate/ethical-hacking-certificate.jpg`,
      pdf: `${baseUrl}Certificate/ethical-hacking-certificate.pdf`,
      type: "cert",
      description: "Practical certification in ethical hacking, vulnerability assessment, penetration testing techniques, and system hardening."
    },
  ];

  const tools = [
    "Splunk", "Microsoft Sentinel", "Wazuh", "Wireshark", "Nmap",
    "Nessus", "Suricata", "TheHive", "MISP", "Elastic SIEM", "Volatility", "Kali Linux"
  ];

  // Duplicate items for seamless continuous looping
  const duplicatedCerts = [...certs, ...certs, ...certs];

  return (
    <section id="certifications" className="py-24 overflow-hidden">
      <style>{`
        @keyframes certMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-cert-marquee {
          display: flex;
          width: max-content;
          animation: certMarquee 35s linear infinite;
        }
        .animate-cert-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications & Experience</h2>
          <p className="text-muted-foreground">Industry-recognized credentials and hands-on cybersecurity experience.</p>
        </ScrollReveal>
      </div>

      {/* INFINITE HORIZONTAL MARQUEE CAROUSEL */}
      <div className="relative w-full mb-16">
        {/* Subtle gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="overflow-x-auto scroll-smooth py-6 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          onWheel={(e) => {
            if (e.deltaY !== 0) {
              e.currentTarget.scrollLeft += e.deltaY;
            }
          }}
        >
          <div className="animate-cert-marquee gap-6 pr-6">
            {duplicatedCerts.map((cert, i) => (
              <div
                key={i}
                className="w-[340px] shrink-0 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between overflow-hidden box-glow hover:scale-[1.02]"
              >
                {/* CERTIFICATE THUMBNAIL — real JPG preview, click to open PDF */}
                <a
                  href={cert.pdf || undefined}
                  target={cert.pdf ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`block relative aspect-[16/10] overflow-hidden border-b border-border group/thumb ${cert.pdf ? "cursor-pointer" : "cursor-default"}`}
                >
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={`${cert.name} Preview`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                      onError={(e) => {
                        // If image fails, hide it and show the gradient fallback
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                  ) : null}
                  {/* Fallback gradient (shown when no image or image fails) */}
                  <div
                    className="absolute inset-0 flex-col items-center justify-center gap-3 p-6"
                    style={{
                      display: cert.image ? "none" : "flex",
                      background: cert.type === "internship"
                        ? "linear-gradient(135deg, hsl(var(--accent)/0.15) 0%, hsl(var(--accent)/0.05) 100%)"
                        : "linear-gradient(135deg, hsl(var(--primary)/0.18) 0%, hsl(var(--primary)/0.05) 100%)"
                    }}
                  >
                    <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "20px 20px"}} />
                    <div className={`relative z-10 p-4 rounded-2xl ${cert.type === "internship" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"}`}>
                      {cert.type === "internship" ? <Briefcase className="w-10 h-10" /> : <Award className="w-10 h-10" />}
                    </div>
                    <p className="relative z-10 text-xs font-semibold text-foreground/70 text-center leading-tight max-w-[200px]">{cert.org}</p>
                  </div>

                  {/* Hover overlay */}
                  {cert.pdf && (
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <span className="px-4 py-2 rounded-full bg-background/90 text-primary text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                        <FileText className="w-3.5 h-3.5" /> Open PDF
                      </span>
                    </div>
                  )}

                  {/* Badge */}
                  <span className={`absolute top-3 right-3 z-20 text-xs font-mono font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${cert.type === "internship" ? "bg-accent/20 text-accent border border-accent/30" : "bg-background/80 text-primary border border-primary/30"}`}>
                    {cert.abbr}
                  </span>
                </a>

                {/* CARD CONTENT */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className={`text-xs font-medium ${cert.type === "internship" ? "text-accent" : "text-primary"}`}>
                      {cert.org} · {cert.year}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    {cert.pdf ? (
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 font-medium text-xs transition-all duration-200"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        View Certificate
                        <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-accent/10 text-accent border border-accent/30 font-medium text-xs">
                        <Briefcase className="w-3.5 h-3.5" />
                        Hands-on Experience
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* TOOLS & PLATFORMS */}
        <ScrollReveal className="text-center">
          <h3 className="text-xl font-bold mb-6">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {tools.map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/10 transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const Leadership = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const stats = [
    { icon: <Timer className="w-6 h-6" />, value: "2+", label: "Marathons Completed" },
    { icon: <Trophy className="w-6 h-6" />, value: "5+", label: "Sports Achievements" },
    { icon: <Globe className="w-6 h-6" />, value: "10+", label: "University Events" },
    { icon: <Users className="w-6 h-6" />, value: "20+", label: "Team Activities" },
    { icon: <Star className="w-6 h-6" />, value: "21.1", label: "KM Personal Best" },
  ];

  const activities = [
    {
      title: "Half Marathon Runner",
      badge: "Sports",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      icon: <Timer className="w-6 h-6 text-primary" />,
      description: "Successfully completed multiple long-distance marathon events demonstrating discipline, endurance, consistency, and mental resilience — proving that cybersecurity resilience starts with physical and mental training.",
      highlights: ["🏃 Half Marathon Finisher", "🏅 Vizag Navy Marathon 2025", "🏅 Sri Krishna Marathon 2025", "💪 Fitness & Discipline", "⭐ Personal Best: 21.1 KM"],
      images: [`${baseUrl}activities/marathon-running.jpg`, `${baseUrl}activities/marathon-finish.jpg`],
      glowColor: "hover:border-blue-500/60 hover:shadow-blue-500/20",
    },
    {
      title: "Badminton Champion",
      badge: "Champion",
      badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      description: "Represented my department in badminton competitions and became Department Day Champion through dedication, teamwork, and consistent practice.",
      highlights: ["🥇 Department Day Champion", "🏸 Competitive Badminton Player", "🏆 Multiple Tournament Participation", "🤝 Team Spirit"],
      images: [`${baseUrl}activities/trophy-photo.jpg`, `${baseUrl}activities/marathon-day.jpg`],
      glowColor: "hover:border-yellow-500/60 hover:shadow-yellow-500/20",
    },
    {
      title: "International Student Leadership",
      badge: "Leadership",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      description: "Actively represented international students while participating in cultural exchange programs, university events, and community activities that strengthened leadership and communication skills.",
      highlights: ["🌍 International Student", "🤝 Cultural Exchange", "🎓 University Representative", "🇧🇩 Proudly Represented Bangladesh"],
      images: [`${baseUrl}activities/marathon-award.jpg`, `${baseUrl}activities/marathon-finish.jpg`],
      glowColor: "hover:border-purple-500/60 hover:shadow-purple-500/20",
    },
    {
      title: "University Sports & Team Activities",
      badge: "Teamwork",
      badgeColor: "bg-green-500/20 text-green-400 border-green-500/30",
      icon: <Users className="w-6 h-6 text-green-400" />,
      description: "Regularly participated in university sports events including football and badminton, promoting teamwork, leadership, communication, and healthy competition.",
      highlights: ["⚽ Football Team", "🏸 Badminton Team", "👥 Team Collaboration", "💪 Physical Fitness"],
      images: [`${baseUrl}activities/marathon-day.jpg`, `${baseUrl}activities/trophy-photo.jpg`],
      glowColor: "hover:border-green-500/60 hover:shadow-green-500/20",
    },
    {
      title: "Awards & Recognition",
      badge: "Achievement",
      badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      icon: <Award className="w-6 h-6 text-orange-400" />,
      description: "Received multiple awards and recognitions for academic, cultural, sports, and leadership activities throughout my university journey.",
      highlights: ["🏆 Championship Winner", "🥇 Sports Awards", "🎖 University Recognition", "🌟 Leadership Recognition"],
      images: [`${baseUrl}activities/marathon-finish.jpg`, `${baseUrl}activities/trophy-photo.jpg`],
      glowColor: "hover:border-orange-500/60 hover:shadow-orange-500/20",
    },
    {
      title: "Community & Cultural Engagement",
      badge: "Community",
      badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      description: "Participated in cultural celebrations, university events, and community engagement programs, strengthening communication, adaptability, and leadership.",
      highlights: ["🎭 Cultural Events", "🤝 Community Participation", "🎉 University Celebrations", "🌏 International Networking"],
      images: [`${baseUrl}activities/marathon-award.jpg`, `${baseUrl}activities/marathon-running.jpg`],
      glowColor: "hover:border-pink-500/60 hover:shadow-pink-500/20",
    },
  ];

  const timeline = [
    { year: "2023", event: "Started University Sports Participation", icon: <Star className="w-4 h-4" /> },
    { year: "2024", event: "Department Day Badminton Champion", icon: <Trophy className="w-4 h-4" /> },
    { year: "2024", event: "International Student Cultural Activities", icon: <Globe className="w-4 h-4" /> },
    { year: "2025", event: "Vizag Navy Half Marathon — 21.1 KM", icon: <Timer className="w-4 h-4" /> },
    { year: "2025", event: "Sri Krishna Marathon Completion", icon: <MapPin className="w-4 h-4" /> },
  ];

  const galleryImages = [
    { src: `${baseUrl}activities/marathon-finish.jpg`, caption: "Vizag Navy Marathon Finish Line" },
    { src: `${baseUrl}activities/marathon-running.jpg`, caption: "Night Running at Vizag Navy Marathon" },
    { src: `${baseUrl}activities/marathon-day.jpg`, caption: "Day Action Shot — Vizag Navy Marathon" },
    { src: `${baseUrl}activities/marathon-award.jpg`, caption: "Sri Krishna Marathon Medal Ceremony" },
    { src: `${baseUrl}activities/trophy-photo.jpg`, caption: "Football Winners Trophy" },
  ];

  return (
    <section id="leadership" className="py-24 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox} alt="Activity" className="w-full h-auto rounded-2xl shadow-2xl border border-primary/30" />
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg hover:bg-primary/80 transition-colors shadow-lg"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-widest mb-6">
            <Star className="w-3.5 h-3.5" /> Beyond Cybersecurity
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tight">
            Leadership &{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
              Extra Activities
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed mb-4">
            Beyond Cybersecurity — Leadership, Sports, International Representation, Teamwork & Personal Growth
          </p>
          <p className="text-muted-foreground/80 max-w-3xl mx-auto text-sm leading-relaxed italic border-l-2 border-primary/40 pl-4 text-left mx-auto">
            "I believe that cybersecurity professionals should possess not only technical expertise but also discipline, resilience, teamwork, leadership, and the ability to perform under pressure. These experiences have helped shape my professional mindset."
          </p>
        </ScrollReveal>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                {stat.icon}
              </div>
              <span className="text-2xl font-bold font-mono text-foreground">{stat.value}</span>
              <span className="text-xs text-muted-foreground text-center leading-tight">{stat.label}</span>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Activity Cards */}
        <ScrollReveal className="mb-4">
          <h3 className="text-2xl font-bold font-mono text-center mb-10">My Activities</h3>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl border border-border bg-card/70 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl ${act.glowColor} group cursor-pointer flex flex-col`}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-muted/30">
                {act.images.map((img, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={img}
                    alt={act.title}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${imgIdx === 0 ? (activeCard === i ? "opacity-0" : "opacity-100") : (activeCard === i ? "opacity-100" : "opacity-0")} scale-105 group-hover:scale-110`}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                ))}
                {/* Gradient fallback background */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.12) 0%, hsl(var(--primary)/0.04) 100%)" }}
                >
                  <div className="p-6 rounded-2xl bg-primary/10">{act.icon}</div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                <button
                  className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => { e.stopPropagation(); if (act.images[0]) setLightbox(act.images[activeCard === i ? 1 : 0] || act.images[0]); }}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {/* Badge */}
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${act.badgeColor}`}>
                  {act.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow gap-3">
                <div className="flex items-center gap-2">
                  {act.icon}
                  <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors leading-tight">{act.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{act.description}</p>
                <ul className="grid grid-cols-1 gap-1 mt-auto pt-2">
                  {act.highlights.map((h, hi) => (
                    <li key={hi} className="text-xs text-foreground/75 font-medium">{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Photo Gallery */}
        <ScrollReveal className="mb-10 text-center">
          <h3 className="text-2xl font-bold font-mono mb-2">Journey Beyond Cybersecurity</h3>
          <p className="text-muted-foreground text-sm">Real moments from marathons, tournaments & university life</p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-24">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="relative rounded-xl overflow-hidden border border-border group cursor-pointer aspect-[4/3]"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { (e.currentTarget as HTMLImageElement).parentElement!.style.background = "hsl(var(--primary)/0.1)"; (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                <div className="flex justify-end">
                  <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
                <div
                  className="px-3 py-1.5 rounded-lg text-white text-xs font-semibold"
                  style={{ background: "hsl(var(--primary)/0.6)", backdropFilter: "blur(4px)" }}
                >
                  {img.caption}
                </div>
              </div>
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Timeline */}
        <ScrollReveal className="mb-10 text-center">
          <h3 className="text-2xl font-bold font-mono mb-2">My Journey</h3>
          <p className="text-muted-foreground text-sm">Key milestones beyond academics</p>
        </ScrollReveal>
        <div className="relative max-w-2xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 -translate-x-1/2" />
          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`flex items-center gap-4 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className={`inline-block p-4 rounded-xl border border-border bg-card/70 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-md ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                      <span className="text-xs font-mono font-bold text-primary block mb-1">{item.year}</span>
                      <span className="text-sm font-medium text-foreground">{item.event}</span>
                    </div>
                  </div>
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary shadow-lg shadow-primary/20">
                    {item.icon}
                  </div>
                  <div className="flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Certifications />
      <Projects />
      <Leadership />
      <Contact />
      
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-8 border-t border-border bg-card"
      >
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2024 BlueShield. Defending the digital frontier.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
