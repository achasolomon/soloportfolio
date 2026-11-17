import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return <Link href={`/work/${project.slug}`} className="project-card">
    <div className="project-screenshot"><Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(max-width: 480px) 90vw, (max-width: 900px) 45vw, 32vw"/></div>
    <div className="project-card-body">
      <span className="project-number">0{index+1}.</span>
      <h3>{project.title}</h3>
      <p className="project-category">{project.category}{project.location && ` · ${project.location}`}</p>
      <p className="project-description">{project.summary}</p>
      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <span className="case-link">View case study <ArrowRight size={14}/></span>
    </div>
  </Link>;
}
