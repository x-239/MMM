// import AboutUs from "@/components/AboutUs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Services from "@/components/Services";
import { Button, buttonVariants } from "@/components/ui/button";
import { Handshake, HeartPlus, Stethoscope } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const perks = [
    {
      name: "Foreign Airport Transit Assistance",
      Icon: Handshake,
    },
    {
      name: "Medical Visas",
      Icon: Stethoscope,
    },
    {
      name: "F24-Hrs Dedicated Case Manager",
      Icon: HeartPlus,
    },
  ];
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your one place for Foreign Medical
            <span className="text-[#0077B6]">Services</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-gray-600/65 ">
            Need help?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
            <Link href="/contact">
              <Button className="hover:bg-[#F8A53B] bg-[#42C2B5] cursor-pointer">
                Book Now! &rarr;
              </Button>
            </Link>
            <Link href="tel:+962797743569" className={buttonVariants()}>
              Contact Us
            </Link>
          </div>
        </div>
        {/* TODO: List Help */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50 shadow">
        <MaxWidthWrapper className="p-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 ">
                  <h3 className="text-base font-medium text-blue-950">
                    {perk.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Service Section */}
      <section id="Services">
        <Services />
      </section>
      {/* About Section */}
      {/* <section id="WhatWeDo">
        <AboutUs />
      </section> */}
    </>
  );
}
