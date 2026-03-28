import React from 'react';
import dolarImg from "../../assets/dollar 1.png"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="btn flex justify-between items-center gap-2 font-bold">
        0 Coin
      <img src={dolarImg} alt="" />
    </button>
  </div>
</div>
    );
};

export default Navbar;