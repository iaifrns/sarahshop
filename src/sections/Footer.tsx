import { Icon } from "@iconify/react/dist/iconify.js";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="text-white text-4xl font-thin">
            SARAH
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((media, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <Icon icon={media.src} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((footer, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {footer.title}
              </h4>
              <ul>
                {footer.links.map((link, index) => (
                  <li
                    key={index}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
<div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
  <Icon icon={"iconoir:copyright"} width={20} height={20} className="rounded-full m-0" />
  <p>Copyright. All rights reserved.</p>
</div>
<p className="font-montserrat cursor-pointer">Terms & conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
