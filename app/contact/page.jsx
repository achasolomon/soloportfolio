import { ArrowUpRight, Mail } from "lucide-react";
import CopyEmail from "@/components/CopyEmail";

export const metadata = { title: "Contact" };
export default function Contact() {
  return <section className="section wrap page-intro">
    <p className="eyebrow">CONTACT</p>
    <h1>Discuss an engineering opportunity.</h1>
    <p className="lede">For software engineering roles, technical discussions, or project enquiries, contact me directly by email. Download my CV to review my background, or explore my public work on GitHub.</p>
    <div className="contact-feature"><div><Mail size={28} strokeWidth={1.3} /><p className="eyebrow">THE BEST WAY TO REACH ME</p><a className="contact-email" href="mailto:solomoneyen@gmail.com">solomoneyen@gmail.com <ArrowUpRight size={29} /></a><CopyEmail /></div><div className="contact-location"><span className="status-dot" /><p>Abuja, Nigeria</p><span>ENGINEERING OPPORTUNITIES<br />TECHNICAL DISCUSSIONS<br />PROJECT ENQUIRIES</span></div></div>
    <div className="contact-grid"><a href="/assets/resume/Solomon-Ona-CV.docx" download><span className="eyebrow">PROFESSIONAL BACKGROUND</span><h2>Download my CV <ArrowUpRight size={23} /></h2><p>Engineering experience, technical capabilities, and selected project contributions.</p></a><a href="https://github.com/achasolomon"><span className="eyebrow">CODE PROFILE</span><h2>Find me on GitHub <ArrowUpRight size={23} /></h2><p>My public development profile.</p></a></div>
  </section>;
}
