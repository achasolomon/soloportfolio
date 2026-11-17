"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useRef, useState } from "react";

export default function ProjectGallery({ images, title }) {
  const [active, setActive] = useState(0);
  const dialog = useRef(null);
  const image = images[active];
  const mobile = image.height > image.width * 1.3;
  function move(direction) {
    setActive(index => (index + direction + images.length) % images.length);
  }
  return <section className={`project-gallery${mobile ? " project-gallery--mobile" : ""}`} aria-label={`${title} screenshots`}>
    <button className="gallery-main" type="button" onClick={() => dialog.current?.showModal()} aria-label={`Enlarge ${image.alt}`}>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 760px) 90vw, 65vw" />
      <span className="gallery-expand"><Expand size={15}/> Enlarge screenshot</span>
    </button>
    <div className="gallery-thumbnails">{images.map((item, index) => <button key={item.src} type="button" onClick={() => setActive(index)} aria-pressed={index === active} aria-label={`Show ${item.alt}`}><Image src={item.src} alt="" width={150} height={75} sizes="150px"/><span>{item.caption}</span></button>)}</div>
    <p className="gallery-caption">{image.caption}</p>
    <dialog ref={dialog} className="screenshot-dialog" data-format={mobile ? "mobile" : "desktop"} aria-label={`${title} screenshot viewer`} onClick={event => { if (event.target === dialog.current) dialog.current.close(); }} onKeyDown={event => { if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } if (event.key === "ArrowRight") { event.preventDefault(); move(1); } }}>
      <div className="dialog-toolbar"><span>{title} / {image.caption}</span><button type="button" onClick={() => dialog.current.close()} aria-label="Close screenshot viewer"><X size={23}/></button></div>
      <div className="dialog-image"><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="95vw"/></div>
      <div className="dialog-controls"><button type="button" onClick={() => move(-1)} aria-label="Previous screenshot"><ChevronLeft size={20}/></button><span>{active + 1} / {images.length}</span><button type="button" onClick={() => move(1)} aria-label="Next screenshot"><ChevronRight size={20}/></button></div>
    </dialog>
  </section>;
}
