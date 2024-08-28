import { useState } from "react";
import Logo from "../../../public/icons/Logo.svg";
import Link from "next/link";
import Button from "../Cors/Button";

const Header = () => {
  return (
    <header className=" flex flex-row justify-between  text-[#565656] font-semibold px-12 mt-2 h-[118px]">
      <div className="flex pt-[26px]">
        <Logo />
      </div>
      <div className="flex flex-row gap-5 text-[#565656] font-semibold pt-10">
        <div>
          <Link href={""}>Home</Link>
        </div>
        <div>
          <Link href={""}>Teams</Link>
        </div>
        <div>
          <Link href={""}>SuccessStories</Link>
        </div>
        <div>
          <Link href={""}>About Us</Link>
        </div>
        <div className="text-[#264FAD] w-fit">
          <Link href={"/blogs"}>Blogs</Link>
          <div className="w-full h-1 bg-[#264FAD] rounded-lg"></div>
        </div>
        <div>
          <Link href={""}>Get Involved</Link>
        </div>
      </div>
      <div className="flex flex-row gap-10 pt-5">
        <Link href={""} className="text-[#3C3C3C] font-bold text-lg pt-4">
          Login
        </Link>
        <Button text={"Donate"}/>
      </div>
    </header>
  );
};

export default Header;
