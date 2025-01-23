import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ProfileButton from "@/components/ProfileButton";
import { Button } from "./ui/button";

const Navbar = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <ProfileButton>Profile</ProfileButton>
    </>
  );

  const authLinks = (
    <>
      {isUserAuthenticated ? (
        <LogoutLink redirectUri="/">
          <Button
            size="sm"
            className="active:scale-105 hover:scale-[1.03] duration-300 shadow-xl"
          >
            Logout
          </Button>
        </LogoutLink>
      ) : (
        <LoginLink>
          <Button
            size="sm"
            className="active:scale-105 hover:scale-[1.03] duration-300 shadow-xl"
          >
            Login
          </Button>
        </LoginLink>
      )}
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
          {isUserAuthenticated && (
            <h1 className="text-sm">Hi, {user?.given_name}</h1>
          )}
          {authLinks}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
