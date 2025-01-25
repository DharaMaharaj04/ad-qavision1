import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneVolume } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import Logo from "../../assets/images/logo-QA.png";



const Footer = () => {
  return (
    <footer className="relative bg-blue-500 via-gray-800 to-gray-700 pt-16 pb-8 mt-8">
      {/* Wavy Divider (SVG) */}
      <div className="absolute top-0 w-full footer-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F0F8FF" fillOpacity="1" d="M0,224L60,234.7C120,245,240,267,360,272C480,277,600,267,720,256C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-20 md:pt-4">
        {/* Footer Menu */}
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
      <a
        href={item.link}
        className="text-lg hover:text-cyan-700 transition-colors duration-300 hover:underline"
      >
        {item.label}
      </a>
    </li>
  ))}
</ul>
</div>

        {/* Contact & Social Links */}
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-3xl font-bold mb-6 tracking-wide text-white md:text-black">Connect with Us</h2>
          <div className="flex justify-center lg:justify-start space-x-8 text-white md:text-black">
            <a href="https://www.instagram.com/qavisiontestlab/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 transition-all duration-300 hover:scale-110">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/qavision-test-lab-819b69330/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 transition-all duration-300 hover:scale-110">
              <FaLinkedin size={30} />
            </a>
            <a href="https://x.com/QAVisionTestLab" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 transition-all duration-300 hover:scale-110">
            <BsTwitterX size={25} />
            </a>
            
          </div>
          <div className="mt-4 space-y-2 text-white md:text-black sm:justify-center footer-4">
          <p className="text-lg flex items-center">
            <FaEnvelope className="mr-2" />
             <a href="mailto:sales@qavisiontestlab.com" className="hover:text-cyan-700 ml-1">sales@qavisiontestlab.com</a>
          </p>
          <p className="text-lg flex items-center">
            <FaPhoneVolume className="mr-2 text-xl" />
            <a href="tel:+8780834040" className="hover:text-cyan-700 ml-1">8780834040</a>
          </p>
        </div>
        </div>

        {/* Newsletter Signup or CTA */}
        <div className="text-center lg:text-center">
        <div className="space-y-6">
        {/* Logo */}
        <div className="flex justify-center lg:justify-center">
          <a href='/'>
          <img src={Logo} alt="Company Logo" className="w-48" /> {/* Adjust width as necessary */}
          </a>
        </div>
        </div>
      </div>
   </div>
      {/* Footer Bottom */}
      <div className="mt-16 border-t border-gray-600 pt-6">
        <p className="text-center text-white">&copy; 2024 <a className='hover:text-cyan-900' href="/">QAVision</a>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
