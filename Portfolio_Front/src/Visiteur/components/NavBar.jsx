import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css";
function NavBar() {
  return (
    <>
      <header className="navbar-custom" >
        <nav className="navbar navbar-expand-lg mt-3 ">
         

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/myProjects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/aboutMe">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/contactMe">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
