import Link from "next/link";
import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa';


const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/achasolomon/'},
    {icon: <FaLinkedin/>, path: 'www.linkedin.com/in/acha-solomon'},
    {icon: <FaYoutube/>, path: ''},
    {icon: <FaTwitter/>, path: ''},

]
function Socials({containerStyles, iconStyles}) {
  return  (
  <div className={containerStyles}>
    {socials.map((item, index)=> {
        return (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
        );
    })}
  </div>
  );

}

export default Socials