import { useState } from "react";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Home",
    icon: (
      <svg
        fill="none"
        width={24}
        height={24}
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        ></path>
      </svg>
    ),
    to: "/",
  },
  {
    label: "Movies",
    icon: (
      <svg
        fill="none"
        width={24}
        height={24}
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
        ></path>
      </svg>
    ),
    to: "/movies",
  },
  {
    label: "TV Shows",
    icon: (
      <svg
        fill="none"
        width={24}
        height={24}
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
        ></path>
      </svg>
    ),
    to: "/tv-shows",
  },
  {
    label: "About",
    icon: (
      <svg
        fill="none"
        width={24}
        height={24}
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        ></path>
      </svg>
    ),
    to: "/about",
  },
];

function Navbar() {
  const [mobileMenuToogle, setMobileMenuToogle] = useState<boolean>(false);

  return (
    <div className="col-span-1 bg-cyan-200 relative md:min-h-screen">
      <nav className="w-full">
        <div className="flex flex-col mx-4 justify-center align-middle relative">
          <div className="flex m-2 justify-start md:justify-between">
            <img
              src="/vite.svg"
              alt="App logo"
              className="mr-2 cursor-pointer"
            />
            <NavLink to="/">
              <h4 className="uppercase text-primary border-b border-primary text-center">
                Movies with Toni
              </h4>
            </NavLink>
          </div>

          <div className="absolute top-2 right-0 -translate-x-2 visible md:hidden">
            <a href="#" onClick={() => setMobileMenuToogle((prev) => !prev)}>
              {mobileMenuToogle ? (
                <div className="group flex w-8 h-8 cursor-pointer items-center justify-center p-2">
                  <div className="space-y-2">
                    <span className="block h-1 w-8 origin-center rounded-full bg-primary opacity-80 transition-transform ease-in-out translate-y-1.5 rotate-45"></span>
                    <span className="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out -translate-y-1.5 -rotate-45"></span>
                  </div>
                </div>
              ) : (
                <div className="group flex w-8 h-8 cursor-pointer items-center justify-center p-2">
                  <div className="space-y-2">
                    <span className="block h-1 w-8 origin-center rounded-full bg-primary opacity-80 transition-transform ease-in-out"></span>
                    <span className="block h-1 w-6 origin-center rounded-full bg-orange-500 transition-transform ease-in-out"></span>
                  </div>
                </div>
              )}
            </a>
          </div>

          <ul
            className={`my-2 transition-all duration-500 ease-in-out overflow-hidden md:max-h-max ${
              mobileMenuToogle ? "max-h-screen" : "max-h-0"
            }`}
          >
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className="hover:bg-primary hover:text-white hover:rounded"
              >
                <NavItem
                  item={menuItem}
                  onClick={() => setMobileMenuToogle(false)}
                ></NavItem>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
