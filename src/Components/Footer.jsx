import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">UnifyConnect</h2>
          <p className="text-sm mt-2">Enhancing university communication and collaboration.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <div className="mt-2 space-y-2">
            <p className="flex items-center"><Phone size={16} className="mr-2" /> +1 234 567 890</p>
            <p className="flex items-center"><Mail size={16} className="mr-2" /> support@unifyconnect.com</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm border-t border-gray-700 mt-6 pt-4">
        © 2025 UnifyConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
