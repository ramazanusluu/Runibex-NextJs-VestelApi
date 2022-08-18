import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/header-logo.png"

function Header() {
  return (
    <div>
      <div className="my-1">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link active">
                <Image src={logo} alt="vestel-logo" width={145} height={40}/>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
