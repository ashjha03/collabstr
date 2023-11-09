import React from "react";

const Navbar = () => {
  return (
    <nav className="border border-gray-300 px-16 py-4 flex justify-between items-center font-semibold">
      <h1 className="text-4xl">Collabstr</h1>
      <ul className="flex gap-6">
        <li>Explore</li>
        <li>How it works</li>
        <li>Login</li>
        <li>Join as Brand</li>
        <li>Join as Creator</li>
      </ul>
    </nav>
  );
};

export default Navbar;
