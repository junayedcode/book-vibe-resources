import React from "react";
import logo from "@/assets/book.ico";
import Image from "next/image";
import Link from "next/link";

const Navber = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={48} height={48} />
          <span className="text-lg font-medium">Book Vibe</span>
        </div>

        {/* Menu */}
        <div className="mx-auto">
          <ul className="flex items-center gap-6">
            <li>
             <Link href="/books">Books</Link>

            </li>

            <li>
             <Link href="/Listed-Books">Listde Books</Link>

            </li>

            <li>
                <Link href="/read-book">Read Book</Link>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="btn btn-outline btn-success">
            Sign In
          </button>

          <button className="btn btn-outline btn-info">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navber;