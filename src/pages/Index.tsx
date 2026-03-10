import { Button } from "@/components/ui/button";
import { Shield, ExternalLink, Mail, Github, Linkedin, Terminal, Menu, X, ShieldCheck, Eye, Database, Activity, Monitor, FileSearch, AlertTriangle, Search } from "lucide-react";
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
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Hire Me
            </Button>
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
              <span className="text-primary gradient-text">Jason Beaudry</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
              Blue Team Security Analyst & Incident Response Specialist
            </p>
            <p className="text-muted-foreground max-w-md">
              Defending organizations against cyber threats through proactive monitoring, threat hunting, incident response, and building resilient security architectures.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[150px]">
                Get Protected
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 min-w-[150px]">
                View My Work
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl border border-primary/20 box-glow bg-card/50">
              <img 
                src={heroImage}
                alt="Jason Beaudry - Blue Team Security Analyst" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
            <h3 className="text-xl text-primary font-medium">Blue Team Analyst & Incident Responder</h3>
            <p className="text-muted-foreground">
              With over 8 years in defensive cybersecurity, I specialize in SOC operations, threat hunting, and incident response. I hold certifications including GCIA, GCIH, and CySA+, and have defended enterprise environments against nation-state and cybercriminal threat actors.
            </p>
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
      title: "Enterprise SOC Buildout",
      category: "SOC Operations",
      description: "Designed and deployed a 24/7 SOC for a Fortune 500 company using Splunk, CrowdStrike, and custom SOAR playbooks."
    },
    {
      title: "Ransomware Incident Response",
      category: "Incident Response",
      description: "Led containment and recovery for a critical ransomware attack, restoring operations within 48 hours with zero data loss."
    },
    {
      title: "Threat Hunting Program",
      category: "Threat Hunting",
      description: "Built a proactive threat hunting program using MITRE ATT&CK framework, uncovering 12 previously undetected intrusions."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Case Studies</h2>
            <p className="text-muted-foreground">Real-world defensive security engagements and outcomes.</p>
          </div>
          <Button variant="outline" className="hidden md:flex">View All Cases</Button>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div key={i} variants={staggerItem} className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck className="w-12 h-12 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" /> View Case Study
                  </Button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">{project.title}</h3>
                  <p className="text-sm text-primary mt-1">{project.category}</p>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <ScrollReveal className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Strengthen Your Defenses</h2>
              <p className="text-muted-foreground">
                Need a Blue Team specialist? Let's discuss how I can help protect your organization from evolving cyber threats.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Me</p>
                  <p className="font-medium">contact@jasonbeaudry.sec</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/jasonbeaudry</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium">github.com/jasonbeaudry</p>
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
};

const Certifications = () => {
  const certs = [
    { name: "GIAC Certified Intrusion Analyst", abbr: "GCIA", org: "SANS / GIAC", year: "2022" },
    { name: "GIAC Certified Incident Handler", abbr: "GCIH", org: "SANS / GIAC", year: "2021" },
    { name: "CompTIA CySA+", abbr: "CySA+", org: "CompTIA", year: "2020" },
    { name: "Certified SOC Analyst", abbr: "CSA", org: "EC-Council", year: "2019" },
    { name: "Splunk Core Certified Power User", abbr: "SCPU", org: "Splunk", year: "2023" },
    { name: "Microsoft SC-200", abbr: "SC-200", org: "Microsoft", year: "2023" },
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
              <div>
                <h3 className="font-bold text-lg">{cert.abbr}</h3>
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
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
          <p>© 2024 BlueShield. Defending the digital frontier.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
