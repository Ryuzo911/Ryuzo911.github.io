import Link from "next/link"
import {FaGithub, FaFacebook, FaInstagram} from "react-icons/fa";

const socials = [
    {icon: FaGithub, path: "https://github.com/Ryuzo911" },
    {icon: FaFacebook, path: "" },
    {icon: FaInstagram, path: "https:instagram.com/mhmmddrizalll_" },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                <item.icon />
            </Link>
        )
      })}
    </div>
  )
}

export default Social
