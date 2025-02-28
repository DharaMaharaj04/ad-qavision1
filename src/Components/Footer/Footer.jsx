import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneVolume, FaMapMarkerAlt } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import Logo from "../../assets/images/logo-QA.png";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#F0F8FF] via-gray-800 to-gray-700 pt-16 pb-8 mt-8">
        {/* Wavy Divider (SVG) */}
        <div className="absolute top-0 w-full footer-svg"></div>

        {/* Footer Content */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-20 md:pt-4">
          {/* Footer Logo & Social Links */}
          <div className="">
            <div className="flex justify-center lg:justify-start">
              <a href="/">
                <img src={Logo} alt="Company Logo" className="w-32" />
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 text-white md:text-black mt-4">
              <a href="https://www.instagram.com/qavisiontestlab/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 transition-all duration-300 hover:scale-110">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.linkedin.com/company/qavision-test-lab-llp" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 transition-all duration-300 hover:scale-110">
                <FaLinkedin size={30} />
              </a>
              <a href="https://x.com/QAVisionTestLab" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 transition-all duration-300 hover:scale-110">
                <BsTwitterX size={25} />
              </a>
              <a href="mailto:sales@qavisiontestlab.com" className="hover:text-cyan-700 ml-1">
                <FaEnvelope size={25} />
              </a>
            </div>
          </div>

          {/* Explore Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-6 tracking-wide text-white md:text-black">Explore</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white md:text-black">
              {[
                { label: "Home", link: "/" },
                { label: "About Us", link: "/about-us" },
                { label: "Industries", link: "/industries" },
                { label: "Blogs", link: "/blogs" },
                { label: "Career", link: "/carrers" },
                { label: "Contact Us", link: "/contact-us" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-lg hover:text-cyan-700 transition-colors duration-300 hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-3xl font-bold mb-6 tracking-wide text-white md:text-black">Contact Us</h2>
            
            <p className="text-lg flex items-center">
            <FaPhoneVolume className="mr-2 text-xl" />
            <a href="tel:+8780834040" className="hover:text-cyan-700 ml-1">8780834040</a>
          </p>
          <p className="text-lg flex items-center">
            <FaMapMarkerAlt className="mr-2 text-3xl" />
            <span className="hover:text-cyan-700  ml-1">
              A-9, Sangath-1, B/h Parimal Hospital, Narendra Modi Stadium Road, Motera, Ahmedabad, Gujarat 380005
            </span>
          </p>
          </div>

          {/* Address & Phone */}
        
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-[#2196f3] text-center py-4">
        <p className="text-white">&copy; 2024 <a className='hover:text-cyan-900' href="/">QAVision</a>. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
