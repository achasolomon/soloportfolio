import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Monitor } from "lucide-react";
import { projects } from "@/lib/portfolio";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: projects.find(project => project.slug === slug)?.title || "Project" };
}
export default async function Project({ params }) {
  const { slug } = await params;
  const index = projects.findIndex(project => project.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return <article className="section wrap page-intro">
    <Link className="text-link" href="/work"><ArrowLeft size={15}/> Selected work</Link>
    <p className="eyebrow case-eyebrow">{project.sector}</p>
    <h1>{project.title}<span className="case-period">.</span></h1>
    <p className="lede">{project.summary}</p>
    <div className="case-meta"><div><span>MY ROLE</span><p>{project.role}</p></div>{project.period && <div><span>PERIOD</span><p>{project.period}</p></div>}<div><span>{project.engagement ? "ENGAGEMENT" : "PLATFORM"}</span><p>{project.engagement || project.category}</p></div>{project.location && <div><span>ORGANISATION LOCATION</span><p>{project.location}</p></div>}</div>
    <div className="case-layout"><div className="prose">
      {project.images?.length > 0 && <ProjectGallery images={project.images} title={project.title}/>}
      <p className="eyebrow">PROJECT OVERVIEW</p><h2>Project context</h2><p>{project.context}</p>
      {project.contributionSummary && <><h2>My involvement</h2><p>{project.contributionSummary}</p></>}
      {project.contributions?.length > 0 && <><p className="eyebrow case-eyebrow">ENGINEERING CONTRIBUTIONS</p><h2>My contributions</h2><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></>}
      {project.scope?.length > 0 && <><p className="eyebrow case-eyebrow">PLATFORM FEATURES</p><h2>Project scope</h2><ul>{project.scope.map(item => <li key={item}>{item}</li>)}</ul></>}
      {project.outcome && <><p className="eyebrow case-eyebrow">WHAT CHANGED</p><h2>The outcome</h2><p>{project.outcome}</p></>}
      <div className="next-project"><p className="eyebrow">NEXT PROJECT</p><Link href={`/work/${next.slug}`}>{next.title} <ArrowUpRight size={28}/></Link></div>
    </div><aside className="case-aside">{project.tags.length > 0 && <><p className="eyebrow">{project.tagLabel || "TECHNOLOGIES"}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></>}<Monitor size={21} strokeWidth={1.4}/><h3>{project.images?.length ? "Website & application" : "Client work & access"}</h3><p>{project.accessNote}</p>{project.website && <a href={project.website} className="text-link">{project.websiteLabel || "Company website"} <ArrowUpRight size={16}/></a>}<Link href="/contact" className="text-link">Discuss this project <ArrowUpRight size={16}/></Link></aside></div>
  </article>;
}
