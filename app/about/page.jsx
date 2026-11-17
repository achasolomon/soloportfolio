import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Code2, ShieldCheck } from "lucide-react";

export const metadata = { title: "About Solomon Ona" };

export default function About() {
  return <>
    <section className="section wrap page-intro"><p className="eyebrow">ABOUT SOLOMON ONA</p><h1>Technical depth.<br/>Practical business impact.</h1>
      <div className="about-layout"><div className="about-portrait"><Image src="/assets/me2.png" alt="Solomon Ona" width={1536} height={1024} sizes="(max-width: 760px) 85vw, 35vw"/><span>SOLOMON ONA / ABUJA, NIGERIA</span></div>
        <div className="prose"><p className="lede">I’m Solomon Ona, a software engineer who brings together full-stack development, AI/computer-vision integration, and the discipline to turn complex requirements into working systems.</p>
          <p>My work spans Java/Spring Boot banking backends, Laravel and React business platforms, React Native mobile applications, and C#/.NET desktop biometrics, including engineering leadership for Canada-based Spicedchildcare. That range lets me work across the system: the customer interface, the services behind it, the data it depends on, and the people who need it to work.</p>
          <p>I currently serve as Chief Technical Officer at Vetandpay, combining hands-on development with architecture, code review, and engineering guidance. Alongside that, my contract work with Lightgate connects stakeholder requirements, developer designs, and user acceptance testing for a public-sector budgeting system.</p>
          <p>I have led an e-commerce platform that handled 500+ transactions in its first month, helped improve government document processing efficiency by 35%, and delivered targeted biometric-system optimisations that improved performance and API response time by 25%. My focus is the same across each engagement: understand the operational problem, make clear technical decisions, and deliver software that earns its place in daily use.</p>
          <Link href="/resume" className="text-link">Explore my experience <ArrowUpRight size={17}/></Link>
        </div>
      </div>
    </section>
    <section className="section wrap about-ai"><div className="section-heading"><div><p className="eyebrow">SOFTWARE ENGINEERING & APPLIED AI</p><h2>Intelligence belongs<br/>inside the workflow.</h2></div><p className="engagement-intro">Useful AI integration connects the capability to the application, the user, and a clear operational need.</p></div>
      <div className="about-capabilities"><div><BrainCircuit size={27} strokeWidth={1.4}/><h3>AI & computer vision</h3><p>At Euphoria Press, I integrated OpenCV-based facial alignment, capture, and recognition into passport biometric verification, connecting intelligent processing with a WPF desktop application and supporting services.</p></div><div><Code2 size={27} strokeWidth={1.4}/><h3>Systems that connect</h3><p>My delivery work links interfaces, APIs, data, and infrastructure—from React administration tools and Node.js biometric APIs to AWS deployment and Java banking services. At Canada-based Kwildigital, I designed a bank support system bringing together account-issue reporting, AI-automated assistance, and ticket handling during a short Software & AI Expert contract in 2026.</p></div><div><ShieldCheck size={27} strokeWidth={1.4}/><h3>Quality through delivery</h3><p>A background in software quality shapes how I build and lead. I review implementation against requirements, test real workflows, guide developers, and consider deployment, adoption, and ongoing operation as part of the engineering work.</p></div></div>
    </section>
    <section className="education-section"><div className="section wrap"><p className="eyebrow">FOUNDATIONS & COMMUNITY</p><h2>A foundation in analysis.<br/>A commitment to building.</h2><div className="skill-grid"><div><h3>B.Sc., Human Physiology</h3><p>University of Calabar · 2023. A scientific background that complements my analytical approach to engineering problems.</p></div><div><h3>Software development training</h3><p>Certificate in Software Development and hands-on experience across web, mobile, desktop, and backend systems.</p></div><div><h3>Diploma in Computer Application</h3><p>O’net Computer Institute · 2016.</p></div><div><h3>Technology & community</h3><p>Volunteer mobile development at Nobzo and IT support with the USA-based Youth for Technology Foundation.</p></div></div></div></section>
  </>;
}
