import ProjectCard from "@/components/ProjectCard";
import EngagementList from "@/components/EngagementList";
import { featuredProjects, additionalProjects } from "@/lib/portfolio";

export const metadata = { title: "Selected Work" };
export default function Work() {
  return <section className="section wrap page-intro"><p className="eyebrow">SELECTED PROFESSIONAL WORK</p><h1>Software for real business needs.</h1><div className="intro-bottom"><p className="lede">Selected work across financial technology, e-commerce, and childcare, followed by client engagements in banking, biometrics, document management, and application development.</p><span className="page-counter">{String(featuredProjects.length + additionalProjects.length).padStart(2,"0")} / PROJECTS & ENGAGEMENTS</span></div><div className="project-grid">{featuredProjects.map((project,index) => <ProjectCard project={project} index={index} key={project.slug}/>)}</div><div className="work-engagements"><p className="eyebrow">CLIENT & SPECIALIST ENGAGEMENTS</p><h2>Additional engineering experience.</h2><p>Standalone contract projects across banking, enterprise software, and AI/computer vision, plus volunteer mobile work at Nobzo.</p><EngagementList projects={additionalProjects}/></div></section>;
}
