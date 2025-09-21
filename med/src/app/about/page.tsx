import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* العنوان الرئيسي */}
      <h1 className="font-semibold text-3xl md:text-4xl text-center mb-12">
        About Us
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* الصورة */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src="/images/about.jpg"
            alt="about"
            width={800}
            height={600}
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>

        {/* النصوص */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              1. خدمات التنسيق والدعم
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>تنسيق المواعيد الطبية (بدون نقل او علاج).</li>
              <li>خدمات الوساطة الادارية او متابعة معاملات لدى جهات اخرى</li>
              <li>تنظيم المواعيد والجدولة</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              2. الاستشارات الادارية البسيطة
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>استشارات في ادارة المكاتب او التنظيم الاداري</li>
              <li>خدمات المساندة الادارية</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
