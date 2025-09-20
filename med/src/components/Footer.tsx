import Image from "next/image";
import React from "react";
import { FaCcVisa, FaCcMastercard, FaCcApplePay } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">تواصل معنا</h2>
          <div className="flex items-center gap-2 mb-2">
            <MdEmail className="text-xl" />
            <a href="mailto:lilsenbi01@gmail.com" className="hover:text-white">
              lilsenbi01@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone className="text-xl" />
            <a href="tel:+962797743569" className="hover:text-white">
              +962797743569
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">روابط سريعة</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-white">
                من نحن
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                اتصل بنا
              </a>
            </li>
            <li>
              <a href="/policy" className="hover:text-white">
                سياسة الخصوصية
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                الشروط والأحكام
              </a>
            </li>
          </ul>
        </div>

        {/* Payment Methods */}
        {/* <div>
          <h2 className="text-lg font-semibold mb-4">طرق الدفع</h2>
          <div className="flex items-center gap-4 text-3xl">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcApplePay />
            <Image src="/images/stc.png" alt="STC PAY" height={90} width={90} />
          </div>
        </div>*/}
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} موقع وصلة جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};

export default Footer;
