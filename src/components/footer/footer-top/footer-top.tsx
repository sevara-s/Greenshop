import type { FC } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from "../../../assets/svgs/logo.svg";

const FooterTop: FC = () => {
  return (
    <div className="bg-[#edf6ef] mt-10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo Column */}
        <div className="flex items-center sm:col-span-2 md:col-span-1">
          <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-[#46A358] rounded">
            <img 
              src={logo} 
              alt="GreenShop Logo" 
              className="h-10 w-auto" 
              loading="lazy"
            />
          </Link>
        </div>

        {/* Contact Info Columns */}
        <div className="space-y-1">
          <a
            href="https://maps.app.goo.gl/JsBEY9JET5mrALtH6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-[#3D3D3D] hover:text-[#46A358] transition-colors"
          >
            <FaMapMarkerAlt className="mt-0.5 flex-shrink-0 text-lg" />
            <span className="text-sm leading-5">
              70 West Buckingham Ave.<br />
              Farmingdale, NY 11735
            </span>
          </a>
        </div>

        <div className="space-y-1">
          <a
            href="mailto:contact@greenshop.com"
            className="flex items-center gap-3 text-[#3D3D3D] hover:text-[#46A358] transition-colors"
          >
            <FaEnvelope className="flex-shrink-0 text-lg" />
            <span className="text-sm">contact@greenshop.com</span>
          </a>
        </div>

        <div className="space-y-1">
          <a
            href="tel:+8801911717490"
            className="flex items-center gap-3 text-[#3D3D3D] hover:text-[#46A358] transition-colors"
          >
            <FaPhoneAlt className="flex-shrink-0 text-lg" />
            <span className="text-sm">+88 01911 717 490</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;