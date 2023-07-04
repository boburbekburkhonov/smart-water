import React from 'react';
import "./Admin.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import menuBar from "../../assets/images/menu-bar.png";
import dashboard from "../../assets/images/dashboard.png";
import news from "../../assets/images/news.png";
import stations from "../../assets/images/station.png";
import devices from "../../assets/images/devices.png";
import user from "../../assets/images/user.png";
import userLogout from "../../assets/images/user-logout.png";
import logout from "../../assets/images/logout.png";

const Admin = () => {
  return (
    <HelmetProvider>
      <div className="admin-wrapper">
        <div className="sidebar">
          <div className="logo-details">
            <img
              className="bx bx-menu"
              src={menuBar}
              alt="menuBar"
              width={42}
              height={25}
            />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">
                <img
                  className="bx bx-menu"
                  src={dashboard}
                  alt="menuBar"
                  width={30}
                  height={30}
                />
                <span className="link_name ms-3">Dashboard</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Dashboard
                  </a>
                </li>
              </ul>
            </li>
            <li className="mt-3">
              <div className="icon-link">
                <a href="#">
                  <img
                    className="bx bx-menu"
                    src={news}
                    alt="menuBar"
                    width={30}
                    height={30}
                  />
                  <span className="link_name ms-3">Ma'lumotlar</span>
                </a>
                <i className="bx bxs-chevron-down arrow"></i>
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name" href="#">
                    Ma'lumotlar
                  </a>
                </li>
                <li>
                  <a href="#">HTML & CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
                <li>
                  <a href="#">PHP & MySQL</a>
                </li>
              </ul>
            </li>
            <li className="mt-3">
              <div className="icon-link">
                <a href="#">
                  <img
                    className="bx bx-menu"
                    src={stations}
                    alt="menuBar"
                    width={30}
                    height={30}
                  />
                  <span className="link_name ms-3">Stansiyalar</span>
                </a>
                <i className="bx bxs-chevron-down arrow"></i>
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name" href="#">
                    Stansiyalar
                  </a>
                </li>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Login Form</a>
                </li>
                <li>
                  <a href="#">Card Design</a>
                </li>
              </ul>
            </li>
            <li className="mt-3">
              <a href="#">
                <img
                  className="bx bx-menu"
                  src={devices}
                  alt="menuBar"
                  width={30}
                  height={30}
                />
                <span className="link_name ms-3">Ishlamayotgan qurilmalar</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Ishlamayotgan qurilmalar
                  </a>
                </li>
              </ul>
            </li>
            <li className="mt-3">
              <a href="#">
                <img
                  className="bx bx-menu"
                  src={user}
                  alt="menuBar"
                  width={30}
                  height={27}
                />
                <span className="link_name ms-3">User</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    User
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <header className="home-section">
          <div className="container-fluid py-2">
            <div class="dropdown text-end">
              <button
                class="btn-logout dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="bx bx-menu"
                  src={userLogout}
                  alt="menuBar"
                  width={30}
                  height={30}
                />
                <span className="mx-1">Smart Water</span>
              </button>
              <ul class="dropdown-menu">
                <li className="d-flex align-items-center justify-content-center ms-auto">
                  <img
                    className="bx bx-menu ms-2"
                    src={logout}
                    alt="menuBar"
                    width={22}
                    height={22}
                  />
                  <a class="dropdown-item ps-1" href="#">
                    Chiqish
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
      <Helmet>
        <script src="src/assets/js/Admin.js"></script>
      </Helmet>
    </HelmetProvider>
  );
};

export default Admin;