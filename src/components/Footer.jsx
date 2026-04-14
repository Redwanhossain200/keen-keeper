import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-5xl font-bold mb-4">
          Keen<span className="text-[#EFAD44]">Keeper</span>
        </h2>

        <p className="max-w-md mx-auto text-xs md:text-sm text-gray-300 mb-10 px-4 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-12">
          <h4 className="font-bold mb-5 text-xl uppercase tracking-widest">Social Links</h4>
          <div className="flex justify-center gap-5">
            <button className="bg-white p-3 cursor-pointer rounded-full text-[#244D3F] hover:scale-110 transition-transform shadow-lg">
              <FaInstagramSquare size={22} />
            </button>
            <button className="bg-white p-3 cursor-pointer rounded-full text-[#244D3F] hover:scale-110 transition-transform shadow-lg">
              <FaFacebookSquare size={22} />
            </button>
            <button className="bg-white p-3 cursor-pointer rounded-full text-[#244D3F] hover:scale-110 transition-transform shadow-lg">
              <FaXTwitter size={22} />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-500/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-sm text-gray-400">
          <p className="order-2 md:order-1 font-medium text-center md:text-left">
            &copy; 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 order-2 md:order-1">
            <a href="#" className="hover:text-white transition-all font-medium text-[13px] md:text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all font-medium text-[13px] md:text-sm">Terms of Service</a>
            <a href="#" className="hover:text-white transition-all font-medium text-[13px] md:text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;