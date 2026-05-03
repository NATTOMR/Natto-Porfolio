import { Button } from "@/components/ui/button";
import { Shield, ExternalLink, Mail, Github, Linkedin, Terminal, Menu, X, ShieldCheck, Eye, Activity, Monitor, FileSearch, AlertTriangle, Search } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
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
          <button className="p-2 rounded-lg hover:bg-primary/10 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-72 bg-background/95 backdrop-blur-md border-l border-border z-50 flex flex-col shadow-2xl"
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-border">
          <span className="font-bold font-mono text-lg text-primary">Menu</span>
          <button className="p-2 rounded-lg hover:bg-primary/10 transition-colors" onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col px-6 py-8 space-y-2">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 30 }}
              transition={{ duration: 0.25, delay: i * 0.07 }}
              className="text-lg font-medium hover:text-primary hover:bg-primary/10 transition-colors uppercase tracking-wider px-4 py-3 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="space-y-6">
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
            Cybersecurity student specializing in SOC operations, threat detection, and vulnerability assessment. Experienced in SIEM monitoring, network analysis, and incident response through hands-on labs and internship experience.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[150px]" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
            <a href="/NATTO_MUNI_CHAKMA_CV.pdf" download="NATTO_MUNI_CHAKMA_CV.pdf">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 min-w-[150px]">
                Download Resume
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} className="relative">
          <div className="relative w-[320px] md:w-[380px] aspect-[4/5] overflow-hidden rounded-2xl border border-primary/20 box-glow bg-card/50 mx-auto">
            <img src={heroImage} alt="Natto Muni Chakma - Cybersecurity Analyst" className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
          </div>
          <div className="absolute -z-10 top-1/4 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute -z-10 bottom-1/4 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
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
          <h3 className="text-xl text-primary font-medium">I am a cybersecurity student and SOC analyst intern with hands-on experience in threat detection, vulnerability assessment, and network security analysis.</h3>
          <h3 className="text-xl text-primary font-medium">I have practical experience using tools such as Wireshark, Nmap, Nessus, and SIEM platforms to analyze network traffic, identify vulnerabilities, and investigate security incidents.</h3>
          <h3 className="text-xl text-primary font-medium">My goal is to work as a Security Analyst or SOC Analyst, helping organizations detect and respond to cyber threats.</h3>
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

const Certifications = () => {
  const certs = [
    { name: "Google Professional Cybersecurity Certificate", abbr: "Google Cyber", org: "Google / Coursera", year: "2025", link: "/Google Professional Cybersecurity Certificate.pdf" },
    { name: "Ethical Hacking Certificate", abbr: "Ethical Hacking", org: "NPTEL / Swayam", year: "2025", link: "/Ethical HAcking.pdf" },
    { name: "Elevats Labs Cyber Certificate", abbr: "Elevats Labs", org: "Elevats Labs", year: "2025", link: "/Elevats Labs Cyber Certificate.pdf" },
    { name: "Launced Cyber Certificate", abbr: "Launced Cyber", org: "Launced Cyber", year: "2025", link: "/Launced Cyber Certificate.pdf" },
    { name: "Cybersecurity Analyst", abbr: "SOC Analyst", org: "Cisco", year: "2025" },
  ];

  const tools = [
    "Splunk", "Microsoft Sentinel", "CrowdStrike", "Wireshark", "Volatility",
    "YARA", "Suricata", "Velociraptor", "TheHive", "MISP", "Elastic SIEM", "Autopsy"
  ];

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications & Tools</h2>
          <p className="text-muted-foreground">Industry-recognized credentials and the defensive tools I work with daily.</p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certs.map((cert, i) => (
            <motion.div key={i} variants={staggerItem} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{cert.abbr}</h3>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                      <Eye className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{cert.name}</p>
                <p className="text-xs text-primary mt-1">{cert.org} · {cert.year}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <ScrollReveal className="text-center">
          <h3 className="text-xl font-bold mb-6">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3">
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

const Projects = () => {
  const projects = [
    {
      title: "Log Monitoring & Analysis with Splunk",
      category: "SIEM / Log Analysis",
      description: "Built a Splunk-based log monitoring pipeline to detect anomalies, correlate events, and generate real-time security alerts from system and network logs.",
      tags: ["Splunk", "SIEM", "Log Analysis"],
      icon: <Activity className="w-12 h-12 text-primary/40 group-hover:text-primary/70 transition-colors" />,
      link: "https://github.com/NATTOMR/Task_12-Log-Monitoring-Analysis-by-using-splunk"
    },
    {
      title: "Phishing Attack Simulation & Detection",
      category: "Threat Detection",
      description: "Simulated phishing campaigns and developed detection rules to identify malicious emails, analyze headers, and block attack vectors in a SOC environment.",
      tags: ["Phishing", "Email Security", "Detection"],
      icon: <AlertTriangle className="w-12 h-12 text-primary/40 group-hover:text-primary/70 transition-colors" />,
      link: "https://github.com/NATTOMR/Task_11-Phishing-Attack-Simulation-Detection"
    },
    {
      title: "Secure API Testing & Authorization Validation",
      category: "API Security",
      description: "Performed security testing on REST APIs including authentication bypass, broken object-level authorization (BOLA), and JWT token validation vulnerabilities.",
      tags: ["API Security", "Authorization", "JWT"],
      icon: <Shield className="w-12 h-12 text-primary/40 group-hover:text-primary/70 transition-colors" />,
      link: "https://github.com/NATTOMR/Task_13-Secure-API-Testing-Authorization-Validation"
    },
    {
      title: "Linux SSH Attack Monitoring with Splunk SIEM",
      category: "SIEM / Threat Hunting",
      description: "Monitored and detected SSH brute-force attacks on Linux systems using Splunk SIEM, creating dashboards and alerts for real-time threat visibility.",
      tags: ["Splunk", "SSH", "Linux", "SIEM"],
      icon: <Monitor className="w-12 h-12 text-primary/40 group-hover:text-primary/70 transition-colors" />,
      link: "https://github.com/NATTOMR/Linux-SSH-Attack-Monitoring-Splunk-SIEM-Lab"
    },
    {
      title: "Network Vulnerability Scanning",
      category: "Vulnerability Assessment",
      description: "Conducted comprehensive network vulnerability assessments using Nmap and Nessus, identified open ports, misconfigurations, and CVEs with remediation guidance.",
      tags: ["Nmap", "Nessus", "Vulnerability"],
      icon: <Search className="w-12 h-12 text-primary/40 group-hover:text-primary/70 transition-colors" />,
      link: "https://github.com/NATTOMR/Task_9-Network-Vulnerability-Scanning"
    },
    {
      title: "Android Malware Detector",
      category: "Malware Analysis / ML",
      description: "Built a machine-learning-based hybrid Android malware detection system that analyzes static and dynamic features of APKs to classify benign and malicious apps.",
      tags: ["Python", "ML", "Android", "Malware"],
      icon: <FileSearch className="w-12 h-12 text-primary/40 group-hover:text-primary/70 transition-colors" />,
      link: "https://github.com/NATTOMR/android-malware-detector"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Real Projects</h2>
            <p className="text-muted-foreground">Hands-on cybersecurity projects from my GitHub — real tools, real threats, real impact.</p>
          </div>
          <a href="https://github.com/NATTOMR" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="hidden md:flex gap-2">
              <Github className="w-4 h-4" /> View All on GitHub
            </Button>
          </a>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div key={i} variants={staggerItem} className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:from-primary/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.icon}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Github className="w-4 h-4" /> View on GitHub
                    </Button>
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-3 flex flex-col flex-grow">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{project.category}</p>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-snug">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        <ScrollReveal className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Strengthen Your Defenses</h2>
            <p className="text-muted-foreground">Need a Blue Team specialist? Let's discuss how I can help protect your organization from evolving cyber threats.</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email Me</p>
                <a href="mailto:nattochakma29@gmail.com" className="font-medium hover:text-primary transition-colors">nattochakma29@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">linkedin.com/in/natto-muni-chakma</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <a href="https://github.com/NATTOMR" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">github.com/NATTOMR</a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form className="space-y-6 p-8 rounded-2xl bg-card border border-border box-glow">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <input className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <input className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all min-h-[120px]" placeholder="Describe your security needs..." />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg">
              Request Consultation
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <Hero />
    <About />
    <Certifications />
    <Projects />
    <Contact />
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 border-t border-border bg-card"
    >
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        <p>© 2025 BlueShield · Natto Muni Chakma · Defending the digital frontier.</p>
      </div>
    </motion.footer>
  </div>
);

export default Index;
