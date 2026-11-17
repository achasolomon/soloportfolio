import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { experience, additionalProjects } from "@/lib/portfolio";
import EngagementList from "@/components/EngagementList";

export const metadata = { title: "Experience & AI Capabilities" };
export default function Resume() {
  return <section className="section wrap page-intro"><p className="eyebrow">EXPERIENCE / ENGINEERING / APPLIED AI</p><h1>Building the system.<br/>Leading the delivery.</h1>
    <div className="intro-bottom"><p className="lede">Hands-on software engineering across financial services, commerce, childcare, mobile applications, and AI-enabled biometric systems. My roles connect implementation with architecture, business requirements, and the people who depend on the result.</p><a href="/assets/resume/Solomon-Ona-CV.docx" download className="button">Download CV (.docx) <ArrowDownToLine size={17}/></a></div>
    <div className="experience-timeline">{experience.map(item => <div className="experience-row experience-detail" key={`${item.company}-${item.role}`}><span>{item.date || "PROJECT ENGAGEMENT"}</span><div><h3>{item.role}</h3><p>{item.company}{item.location && ` · ${item.location}`}</p></div><div><p>{item.summary}</p>{item.highlights?.length > 0 && <ul>{item.highlights.map(point => <li key={point}>{point}</li>)}</ul>}</div></div>)}</div>
    <div className="skills-section"><p className="eyebrow">TECHNICAL CAPABILITIES</p><h2>Depth across the stack.<br/>Context across the business.</h2><div className="skill-grid">{[["01 / LANGUAGES","C# · Java · PHP · JavaScript · Python · SQL"],["02 / BACKEND & WEB",".NET · Spring Boot · Laravel · NestJS · React · Node.js · Express"],["03 / DESKTOP & MOBILE","WPF · React Native · Expo"],["04 / AI INTEGRATION & COMPUTER VISION","OpenCV · Facial alignment, capture & recognition · Computer-vision integration"],["05 / CLOUD, DATA & INTEGRATION","MySQL · AWS · API design · Google OAuth · Payment integration"],["06 / QUALITY & DELIVERY","Code review · Functional testing · UAT · Deployment oversight · User training"],["07 / BANKING & FINANCIAL SYSTEMS","Transaction processing · Ledger & accounting · Payments · Reconciliation · Access controls"],["08 / TECHNICAL LEADERSHIP","System design · Requirements analysis · Developer guidance · Stakeholder collaboration"]].map(([title,description]) => <div key={title}><p className="eyebrow">{title}</p><h3>{description}</h3></div>)}</div></div>
    <div className="work-engagements"><p className="eyebrow">STANDALONE PROJECT EXPERIENCE</p><h2>Specialist systems.<br/>Specific contributions.</h2><p>Contract engagements in banking, document tracking, biometric verification, and public services, alongside a separate volunteer mobile development contribution.</p><EngagementList projects={additionalProjects}/></div>
    <Link className="text-link resume-work-link" href="/work">See the work behind the experience <ArrowUpRight size={17}/></Link>
  </section>;
}
