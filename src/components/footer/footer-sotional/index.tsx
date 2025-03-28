import { 
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest,
  FaPaypal, FaCcMastercard, FaCcVisa, FaCcAmex 
} from 'react-icons/fa';

const FooterSotional = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-bold text-[#3D3D3D] text-lg mb-3">Social Media</h2>
        <div className="flex gap-3">
          {[
            { icon: <FaFacebook />, name: "Facebook" },
            { icon: <FaInstagram />, name: "Instagram" },
            { icon: <FaTwitter />, name: "Twitter" },
            { icon: <FaLinkedin />, name: "LinkedIn" },
            { icon: <FaPinterest />, name: "Pinterest" }
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              aria-label={social.name}
              className="
                w-8 h-8 flex items-center justify-center
                border border-[#46A35833] rounded-sm
                text-[#3D3D3D] hover:text-[#46A358]
                transition-colors duration-200
                hover:border-[#46A35866]
              "
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-[#3D3D3D] text-lg mb-3">We accept</h2>
        <div className="flex gap-3">
          {[
            { icon: <FaPaypal />, name: "PayPal" },
            { icon: <FaCcMastercard />, name: "Mastercard" },
            { icon: <FaCcVisa />, name: "Visa" },
            { icon: <FaCcAmex />, name: "American Express" }
          ].map((payment) => (
            <div
              key={payment.name}
              aria-label={payment.name}
              className="
                text-2xl text-[#3D3D3D] 
                hover:text-[#46A358]
                transition-colors duration-200
              "
            >
              {payment.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSotional;