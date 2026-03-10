import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Menu,
  X,
  Monitor,
  AlertTriangle,
  Search,
  FileSearch,
  Activity
} from "lucide-react";

import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

/* ---------------- Scroll Animations ---------------- */

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const StaggerContainer = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
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
  visible: { opacity: 1, y: 0 },
};

/* ---------------- Navigation ---------------- */

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2 font-bold text-xl">
          <ShieldCheck className="text-primary" />
          <span>NattoSec</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

/* ---------------- Hero ---------------- */

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center pt-20">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">

      <div className="space-y-6">
        <div className="text-primary font-mono">
          🛡 Blue Team Defender
        </div>

        <h1 className="text-5xl font-bold">
          Hello I'm <br />
          <span className="text-primary">Natto Muni Chakma</span>
        </h1>

        <p className="text-xl text-muted-foreground">
          Cybersecurity Analyst | SOC Enthusiast
        </p>

        <p className="text-muted-foreground max-w-lg">
          Cybersecurity student specializing in SOC operations, threat
          detection, and vulnerability assessment. Experienced in SIEM
          monitoring, network analysis, and incident response through
          hands-on labs and internship experience.
        </p>

        <div className="flex gap-4">
          <Button>View Projects</Button>
          <Button variant="outline">Download Resume</Button>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-primary/20">
        <img
          src={heroImage}
          alt="Natto Muni Chakma - Cybersecurity Analyst"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </section>
);

/* ---------------- About ---------------- */

const About = () => {

  const stats = [
    { value: "15+", label: "Security Labs Completed" },
    { value: "2", label: "Cybersecurity Internships" },
    { value: "3+", label: "Security Projects" },
    { value: "10+", label: "Security Tools Used" },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div className="rounded-xl bg-muted p-8 font-mono text-sm">
          <p>&gt; loading SIEM dashboard...</p>
          <p>&gt; correlating threat intel feeds...</p>
          <p>&gt; system secure</p>
        </div>

        <div className="space-y-6">

          <h2 className="text-4xl font-bold">About Me</h2>

          <p className="text-muted-foreground">
            I am a cybersecurity student and SOC analyst intern with
            hands-on experience in threat detection, vulnerability
            assessment, and network security analysis.

            I have practical experience using tools such as Wireshark,
            Nmap, Nessus, and SIEM platforms to analyze network traffic,
            identify vulnerabilities, and investigate security incidents.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <h4 className="text-primary text-2xl font-bold">{s.value}</h4>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

/* ---------------- Projects ---------------- */

const Projects = () => {

  const projects = [
    {
      title: "Hybrid Malware Detection System",
      description:
        "Developed a hybrid Android malware detection system using reverse engineering and machine learning (Random Forest, XGBoost).",
    },
    {
      title: "Offensive & Defensive Security Lab",
      description:
        "Hands-on cybersecurity labs including phishing simulation, SQL injection testing, SIEM log analysis, and firewall configuration.",
    },
    {
      title: "Vulnerability Assessment with Nessus",
      description:
        "Performed vulnerability scanning on an Ubuntu machine using Nessus and analyzed CVE/CVSS risk levels.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/20">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Security Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

/* ---------------- Certifications ---------------- */

const Certifications = () => {

  const certs = [
    {
      name: "Google Cybersecurity Certificate",
      org: "Google",
      year: "2025",
    },
    {
      name: "Ethical Hacking",
      org: "NPTEL",
      year: "2025",
    },
  ];

  const tools = [
    "Splunk",
    "Wireshark",
    "Nmap",
    "Nessus",
    "Metasploit",
    "tcpdump",
    "Shodan",
    "VirusTotal",
    "Linux",
    "MITRE ATT&CK",
  ];

  return (
    <section id="certifications" className="py-24">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Certifications & Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {certs.map((cert) => (

            <div key={cert.name} className="p-6 border rounded-xl">

              <h3 className="font-bold">{cert.name}</h3>

              <p className="text-sm text-muted-foreground">
                {cert.org} · {cert.year}
              </p>

            </div>

          ))}

        </div>

        <div className="flex flex-wrap gap-3">

          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 border rounded-full text-sm"
            >
              {tool}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
};

/* ---------------- Contact ---------------- */

const Contact = () => (
  <section id="contact" className="py-24">

    <div className="container mx-auto px-6 space-y-8">

      <h2 className="text-4xl font-bold">Contact</h2>

      <div className="space-y-4">

        <div className="flex items-center space-x-4">
          <Mail className="text-primary" />
          <span>nattochakma29@gmail.com</span>
        </div>

        <div className="flex items-center space-x-4">
          <Github className="text-primary" />
          <span>github.com/NATTOMR</span>
        </div>

        <div className="flex items-center space-x-4">
          <Linkedin className="text-primary" />
          <span>linkedin.com/in/nattochakma</span>
        </div>

      </div>

    </div>

  </section>
);

/* ---------------- Page ---------------- */

const Index = () => {
  return (
    <div className="bg-background text-foreground">

      <Nav />

      <Hero />

      <About />

      <Projects />

      <Certifications />

      <Contact />

      <footer className="py-8 text-center text-muted-foreground border-t">
        © 2026 Natto Muni Chakma | Cybersecurity Portfolio
      </footer>

    </div>
  );
};

export default Index;
