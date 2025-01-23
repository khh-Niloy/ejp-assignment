"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/profile">Pofile</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 px-20 pt-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="font-semibold text-xl">Blogs</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-12 text-md menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <Button size="sm" className="">Sign in</Button>
          <Button size="sm" className="">Sign out</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
