import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="border-b fixed w-full top-0 z-50 bg-gradient-to-r from-[#1B1B1D] via-[#272730] to-[#6E2B4E] text-white">
      <div className="navbar w-11/12 mx-auto px-0">
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
              className="menu menu-sm dropdown-content bg-green-400 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">
                  <h1 className="font-medium">HOME</h1>
                </Link>
              </li>
              <Link href="/profile">
                <h1 className="font-medium">PROFILE</h1>
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">
                <h1 className="font-medium hover:text-green-500">HOME</h1>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <h1 className="font-medium hover:text-green-500">PROFILE</h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {(await isAuthenticated()) ? (
            <>
              <LogoutLink>
                <button className="btn border-none text-white bg-red-500 px-5 rounded-md items-center">
                  Sign Out
                </button>
              </LogoutLink>
            </>
          ) : (
            <div className="flex gap-4">
              <LoginLink postLoginRedirectURL="/">
                <button className="btn bg-green-500 px-6 border-none text-white py-1 rounded-md items-center">
                  Sign In
                </button>
              </LoginLink>
              <RegisterLink postLoginRedirectURL="/">
                <button className="btn bg-teal-500 px-6 border-none text-white py-1 rounded-md items-center">
                  Sign Up
                </button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;