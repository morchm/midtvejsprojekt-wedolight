"use client";
import Link from "next/link";
import Image from "next/image";
import style from "@/app/header.module.scss";

import img from "../../public/images/logo-final.png";

import { usePathname } from "next/navigation";
import ContactForm from "./components/ContactForm";

const Header = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "About",
      path: "/"
    },
    {
      name: "Tours",
      path: "/content/Tours"
    },
    {
      name: "Contact",
      path: "/content/Contact"
    }
  ]

  return (
    <div className={style.navContainer}>
      <Image
        className={style.navLogo}
        src={img}
        width={200}
        height={70}
        alt="logo"
      />

      <nav className={style.navBar}>
        <ul>
          {links.map((value)=> {
            return (
              <li key={value.name} className={style.navLink}>
                <Link className={`${pathname === value.path ? style.selected : ''}`} href={value.path}>{value.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>

          <ContactForm/>

    </div>
  );
};

export default Header;
