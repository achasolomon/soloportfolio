import "./globals.css";
import Header from "@/components/Header";
import BrandMark from "@/components/BrandMark";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";

export const metadata = {
  title: { default: "Solomon Ona | Software Engineer & AI Integration", template: "%s | Solomon Ona" },
  description: "Solomon Ona is a software engineer working across financial systems, full-stack applications, AI/computer-vision integration, mobile development, and technical leadership.",
};
export default function RootLayout({children}) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><footer className="site-footer wrap"><Link className="footer-brand" href="/"><BrandMark/><span>Solomon Ona <small>Software Engineer</small></span></Link><div className="footer-socials"><a href="https://github.com/achasolomon" aria-label="GitHub"><FaGithub/></a><a href="mailto:solomoneyen@gmail.com" aria-label="Email Solomon Ona"><Mail size={18}/></a></div><span className="footer-copyright">© {new Date().getUTCFullYear()} Solomon Ona.</span></footer></body></html>;
}
