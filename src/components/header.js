import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="">
      <div className="flex items-center justify-between px-10 py-3">
        <h1 className="font-bold text-3xl">
          <Link href="/">Learn Worker</Link>
        </h1>
        <nav>
          <ul className="flex items-center justify-center">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
