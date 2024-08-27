import FooterImage from "../../../public/icons/FooterImage.svg";
import Copy from "../../../public/icons/Copy.svg"
import FaceBook from "../../../public/icons/FaceBook.svg"
import Twwiter from "../../../public/icons/Twwiter.svg"
import YouTube from "../../../public/icons/YouTube.svg"
import Instagram from "../../../public/icons/Instagram.svg"
import LinkedIn from "../../../public/icons/LinkedIn.svg"
import Button from "../Cors/Button";
import FooterHeading from "./FooterHeading";
import FooterText from "./FooterText";
const Footer = () => {
  return (
    <footer className="flex flex-col px-20 pt-24 pb-14 gap-12">
      <div className="flex justify-between">
        <div>
          <FooterImage className="w-" />
        </div>
        <div className="flex items-center">
            <div className="flex flex-col ">

          <FooterHeading text="Get involved in improving  tech education in Africa!" />
          <Button text="Support Us" />
            </div>
        </div>
        <div>
          <FooterHeading text="Link" />
          <div className="flex flex-col gap-4">
            <FooterText text="Home" />
            <FooterText text="Success Stories" />
            <FooterText text="About Us" />
            <FooterText text="Get Involved" />
          </div>
        </div>
        <div>
          <FooterHeading text="Teams" />
          <div className="flex flex-col gap-4">
            <FooterText text="Board Members" />
            <FooterText text="Advisors/Mentors" />
            <FooterText text="Executives" />
            <FooterText text="Staffs" />
          </div>
        </div>
        <div>
          <FooterHeading text="Blogs" />
          <div className="flex flex-col gap-4">
            <FooterText text="Recent Blogs" />
            <FooterText text="New Blogs" />
          </div>
        </div>
      </div>
      <hr className="w-full bg-black"/>
      <div className="flex justify-between">
        <div className="flex gap-2">
            <Copy />
            <FooterText text= "2020 Africa to Silicon Valley, Inc. All right reserved."/>
        </div>
        <div className="flex gap-10 items-center">
            <Twwiter />
            <FaceBook />
            <YouTube />
            <LinkedIn /> 
            <Instagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
