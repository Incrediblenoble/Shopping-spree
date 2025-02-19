import React from 'react';
import logos from "@/assets/logos/logos.svg"
import Image from "next/image";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className={"bg-[#2A2A2A]"}>
      <div className={"p-20 mt-[9.6rem] flex gap-12 flex-col items-center"}>
        {/*<Image src={logo} alt={"Logo white"}/>*/}
        {/*<div className={"h-[1px] w-full bg-[#63605E]"}></div>*/}
        <div
          className={"text-[1.6rem] text-[#F2EEEA] w-full flex gap-y-[3.2rem] flex-col lg:flex-row items-center justify-between"}>
          <Image src={logos} alt={"Logo white"}/>
          <p>&copy; {date} AG-Ezenard All rights reserved </p>
          {/*<nav>*/}
          {/*  <ul className={'flex gap-[1.6rem]'}>*/}
          {/*    <li><Link href={"/"}>About Us</Link></li>*/}
          {/*    <li><Link href={"/"}>Contact Us</Link></li>*/}
          {/*    <li><Link href={"/"}>FAQs</Link></li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}
          {/*<div className={'flex gap-[1.6rem]'}>*/}
          {/*  <Link href={'/'}>Terms & Conditions</Link>*/}
          {/*  <Link href={'/'}>Privacy Policy</Link>*/}
          {/*</div>*/}
        </div>
      </div>
    </footer>
  );
}

export default Footer;