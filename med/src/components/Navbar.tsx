"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import NavItems from "./NavItems";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-[#0077B6]">
        <MaxWidthWrapper>
          <div>
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="logoImage"
                  height={120}
                  width={120}
                />
              </Link>
              {/* Navigation */}
              <NavItems />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
