"use client";

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}

              <Link
                href="/"
                className="flex items-center gap-2"
                // style={{ background: "#fff", padding: "10px" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="logoImage"
                  height={120}
                  width={120}
                  // style={{
                  //   background: "transparent",
                  //   display: "block",
                  // }}
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
