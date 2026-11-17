import Link from "next/link";
import BrandMark from "./BrandMark";
import Nav from "./Nav";

export default function Header() {
  return <header className="site-header"><div className="header-inner wrap"><Link href="/" className="wordmark" aria-label="Solomon Ona, home"><BrandMark/><span className="brand-details">Solomon Ona<span>SOFTWARE ENGINEER</span></span></Link><Nav/></div></header>;
}
