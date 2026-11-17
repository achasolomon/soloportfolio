import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BriefcaseBusiness, HeartHandshake } from "lucide-react";

export default function EngagementList({ projects }) {
  return <div className="engagement-list">{projects.map(project => <Link href={`/work/${project.slug}`} className={`engagement-row${project.images?.length ? " engagement-row--screenshots" : ""}`} key={project.slug}>
    {project.images?.length ? <div className="engagement-preview">{project.images.map(image => <Image src={image.src} alt="" key={image.src} width={55} height={110} sizes="55px"/>)}</div> : <span className="engagement-icon">{project.volunteer ? <HeartHandshake size={21} strokeWidth={1.4}/> : <BriefcaseBusiness size={21} strokeWidth={1.4}/>}</span>}
    <div><div className="engagement-title"><h3>{project.title}</h3><span>{project.volunteer ? "VOLUNTEER" : "CLIENT ENGAGEMENT"}</span>{project.location && <span className="engagement-location">{project.location}</span>}</div><p className="engagement-attribution">{project.engagement}{project.period ? ` / ${project.period}` : ""}</p><p>{project.summary}</p>{project.tags.length > 0 && <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>}</div>
    <ArrowUpRight className="engagement-arrow" size={20}/>
  </Link>)}</div>;
}
