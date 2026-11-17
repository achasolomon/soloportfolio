"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";

export default function Nav() {
  const path = usePathname();
  const [open,setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    const close = event => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener("keydown",close);
    return () => document.removeEventListener("keydown",close);
  },[open]);
  const links = [["Home","/"],["About","/about"],["Projects","/work"],["Experience","/resume"],["Skills","/#skills"],["Approach","/#approach"],["Contact","/contact"]];
  return <div className="navigation"><button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button><nav id="primary-navigation" className={open ? "nav-open" : ""} aria-label="Main navigation">{links.map(([label,href]) => <Link href={href} key={label} onClick={() => setOpen(false)} aria-current={(href === "/" ? path === "/" : !href.includes("#") && path.startsWith(href)) ? "page" : undefined}>{label}</Link>)}<a href="/assets/resume/Solomon-Ona-CV.docx" download className="nav-download" onClick={() => setOpen(false)}><Download size={14}/>Download CV</a></nav></div>;
}
