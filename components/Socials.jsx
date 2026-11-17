import Link from "next/link";
import {FaGithub, FaEnvelope} from 'react-icons/fa';


const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/achasolomon/', label: 'GitHub'},
    {icon: <FaEnvelope/>, path: 'mailto:solomoneyen@gmail.com', label: 'Email Solomon Ona'},

]
function Socials({containerStyles, iconStyles}) {
  return  (
  <div className={containerStyles}>
    {socials.map((item, index)=> {
        return (
        <Link key={index} href={item.path} className={iconStyles} aria-label={item.label}>
            {item.icon}
        </Link>
        );
    })}
  </div>
  );

}

export default Socials
