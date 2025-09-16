import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <Image
            src="/images/about.jpg"
            alt="about"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-2">About</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            praesentium unde cumque distinctio rerum impedit sapiente ipsum
            reiciendis adipisci, doloribus beatae doloremque voluptatem est
            optio itaque animi. Atque, voluptas laboriosam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
