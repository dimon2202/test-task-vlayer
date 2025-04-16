import React, { useState } from "react";
import logoIcon from "/logo-icon.jpg";
import { Bars2Icon } from "@heroicons/react/24/outline";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative container flex items-center justify-between mx-auto mt-6 mb-8 md:px-4">
      <div className="flex items-center px-8 space-x-1 md:px-0">
        <img
          src={logoIcon}
          alt="logo"
          width={32}
          height={32}
          className="min-w-8"
        />
        <p className="mt-1 text-xl font-bold text-darkBlue">Estatery</p>
      </div>
      <div className="justify-between hidden w-1/5 mt-1 md:flex lg:w-2/5 xl:ml-32">
        <a
          href="#"
          className="font-semibold text-darkBlue hover:text-lightPurple"
        >
          Rent
        </a>
        <a
          href="#"
          className="font-semibold text-darkBlue hover:text-lightPurple"
        >
          Buy
        </a>
        <a
          href="#"
          className="font-semibold text-darkBlue hover:text-lightPurple"
        >
          Sell
        </a>
        <a
          href="#"
          className="hidden font-semibold lg:block text-darkBlue hover:text-lightPurple"
        >
          Manage Property
        </a>
        <a
          href="#"
          className="hidden font-semibold lg:block text-darkBlue hover:text-lightPurple"
        >
          Resources
        </a>
      </div>
      <div className="hidden space-x-4 md:block">
        <button className="px-6 py-3 font-bold text-black bg-white border-2 rounded-lg border-lighterPurple hover:border-lightPurple">
          Login
        </button>
        <button className="px-6 py-3 font-semibold text-white border-2 rounded-lg border-lightPurple bg-lightPurple hover:bg-[rgba(139,138,255,1)] hover:border-[rgba(139,138,255,1)]">
          Sign up
        </button>
      </div>
      <div className="block mt-1 pr-[34px] md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
          onClick={() => setOpen((prev) => !prev)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>
      <div
        className={
          open
            ? "top-0 left-0 h-[100vh] w-[100vw] fixed z-[1000] bg-white/50 backdrop-blur"
            : "hidden"
        }
      >
        <div className="flex flex-col m-8 h-10/12 justify-between">
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
              onClick={() => setOpen((prev) => !prev)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-6 text-[26px]">
            <a
              href="#"
              className="font-semibold text-darkBlue hover:text-lightPurple"
            >
              Rent
            </a>
            <a
              href="#"
              className="font-semibold text-darkBlue hover:text-lightPurple"
            >
              Buy
            </a>
            <a
              href="#"
              className="font-semibold text-darkBlue hover:text-lightPurple"
            >
              Sell
            </a>
            <a
              href="#"
              className="font-semibold text-darkBlue hover:text-lightPurple"
            >
              Manage Property
            </a>
            <a
              href="#"
              className="font-semibold text-darkBlue hover:text-lightPurple"
            >
              Resources
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <button className="px-6 py-3 font-bold text-black bg-white border-2 rounded-lg border-lighterPurple hover:border-lightPurple">
              Login
            </button>
            <button className="px-6 py-3 font-semibold text-white border-2 rounded-lg border-lightPurple bg-lightPurple hover:bg-[rgba(139,138,255,1)] hover:border-[rgba(139,138,255,1)]">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
