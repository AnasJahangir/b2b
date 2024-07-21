// src/components/Header.js
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [drop, setDrop] = useState(false);
  return (
    <header className="bg-black text-white">
      <div className="container px-5 md:px-32 flex justify-between items-center relative">
        <div>
          <img src={Logo} alt="logo" className="w-40 md:w-52" />
        </div>
        <div>
          <ul className="text-[11px] flex gap-5 ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-[rgb(205,85,33)]" : ""
                }
              >
                B2B
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/fotos"}
                className={({ isActive }) =>
                  isActive ? "text-[rgb(205,85,33)]" : ""
                }
              >
                FOTOS
              </NavLink>
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={() => setDrop(!drop)}
              >
                More
              </span>
              <div
                id="dropdown"
                class={`z-[100] ${!drop && "hidden"} absolute  right-5 md:right-20  top-[100%] md:top-[60%]`}
              >
                <ul
                  class="py-4 text-[11px] flex flex-col gap-4 uppercase"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <NavLink
                      to={"/moda2024"}
                      className={({ isActive }) =>
                        isActive ? "text-[rgb(205,85,33)]" : ""
                      }
                    >
                      MODA
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/hoteloficial"}
                      className={({ isActive }) =>
                        isActive ? "text-[rgb(205,85,33)]" : ""
                      }
                    >
                      hotel oficial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/cadastro"}
                      className={({ isActive }) =>
                        isActive ? "text-[rgb(205,85,33)]" : ""
                      }
                    >
                      cadastro
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
