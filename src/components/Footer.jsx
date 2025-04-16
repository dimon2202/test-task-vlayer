import React from "react";
import logoIcon from "/logo-icon.jpg";

function Footer() {
  return (
    <footer className="w-full bg-base-0 p-4 sm:p-16 flex flex-col items-center gap-10">
      <div className="flex flex-col gap-6 md:flex-row md:gap-0 w-full justify-between">
        <div className="flex items-center px-0 sm:px-8 space-x-1 md:px-0">
          <img
            src={logoIcon}
            alt="logo"
            width={32}
            height={32}
            className="min-w-8"
          />
          <p className="mt-1 text-xl font-bold text-darkBlue">Estatery</p>
        </div>
        <ul className="flex gap-x-8">
          <a href="#">Help center</a>
          <a href="#">FAQ</a>
          <a href="#">Terms & Privacy</a>
        </ul>
      </div>
      <hr className="w-full opacity-50" />
      <div className="flex w-full justify-between">
        <p className="text-base-1000 opacity-50 font-medium">
          © 2021 Estatery. All rights reserved.
        </p>
        <ul className="flex gap-x-8">
              
            </ul>
      </div>
    </footer>
  );
}

export default Footer;
