import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import menuBar from "../../assets/images/menu-bar.png";
import dashboard from "../../assets/images/dashboard.png";
import dashboardBlue from "../../assets/images/dashboard-blue.png";
import news from "../../assets/images/news.png";
import newsBLue from "../../assets/images/news-blue.png";
import stations from "../../assets/images/station.png";
import stationBlue from "../../assets/images/station-blue.png";
import devices from "../../assets/images/devices.png";
import devicesBlue from "../../assets/images/devices-blue.png";
import user from "../../assets/images/user.png";
import userBlue from "../../assets/images/user-blue.png";
import userLogout from "../../assets/images/user-logout.png";
import logout from "../../assets/images/logout.png";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AdminNew from "../AdminNews/AdminNew";
import AdminStation from "../AdminStation/AdminStation";
import AdminDevicesNotWorking from "../AdminDevicesNotWorking/AdminDevicesNotWorking";
import AdminUser from "../AdminUser/AdminUser";
import { apiGlobal } from "../API/Api.global";
import Cookies from "js-cookie";

const Admin = () => {
  Cookies.set("refresh_token", window.localStorage.getItem("accessToken"));
  const [data, setData] = useState([]);
  const token = window.localStorage.getItem("accessToken");
  const location = useLocation();
  const navigate = useNavigate();

  if (!token) {
    window.location.href = "/";
  }

  function logoutFunction() {
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");
    window.location.reload();
  }

  // useEffect(() => {
  //   fetch(`${apiGlobal}/users/find-all-users`, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data.data));
  // }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:9090/films`, {
  //     method: "GET",
  //     "Access-Control-Allow-Origin": "*",
  //     headers: {
  //       "content-type": "application/json",
  //       Cookie: "access_token=" + window.localStorage.getItem("refreshToken"),
  //       Authorization: "Bearer " + window.localStorage.getItem("refreshToken"),
  //     },
  //     withCredentials: true,
  //     credentials: "same-origin",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

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
              <a
                href="#"
                className={
                  location.pathname == "/admin"
                    ? "sidebar-active sidebar-style"
                    : "sidebar-style"
                }
                onClick={() => navigate("/admin")}
              >
                <img
                  className="bx bx-menu"
                  src={
                    location.pathname == "/admin" ? dashboardBlue : dashboard
                  }
                  alt="menuBar"
                  width={26}
                  height={26}
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
                <a
                  href="#"
                  className={
                    location.pathname == "/admin/news"
                      ? "sidebar-active sidebar-style"
                      : "sidebar-style"
                  }
                  onClick={() => navigate("/admin/news")}
                >
                  <img
                    className="bx bx-menu"
                    src={location.pathname == "/admin/news" ? newsBLue : news}
                    alt="menuBar"
                    width={26}
                    height={26}
                  />
                  <span className="link_name ms-3">Ma'lumotlar</span>
                </a>
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name" href="#">
                    Ma'lumotlar
                  </a>
                </li>
              </ul>
            </li>
            <li className="mt-3">
              <div className="icon-link">
                <a
                  href="#"
                  className={
                    location.pathname == "/admin/stations"
                      ? "sidebar-active sidebar-style"
                      : "sidebar-style"
                  }
                  onClick={() => navigate("/admin/stations")}
                >
                  <img
                    className="bx bx-menu"
                    src={
                      location.pathname == "/admin/stations"
                        ? stationBlue
                        : stations
                    }
                    alt="menuBar"
                    width={26}
                    height={26}
                  />
                  <span className="link_name ms-3">Stansiyalar</span>
                </a>
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name" href="#">
                    Stansiyalar
                  </a>
                </li>
              </ul>
            </li>
            <li className="mt-3">
              <a
                href="#"
                className={
                  location.pathname == "/admin/devices/notworking"
                    ? "sidebar-active sidebar-style"
                    : "sidebar-style"
                }
                onClick={() => navigate("/admin/devices/notworking")}
              >
                <img
                  className="bx bx-menu"
                  src={
                    location.pathname == "/admin/devices/notworking"
                      ? devicesBlue
                      : devices
                  }
                  alt="menuBar"
                  width={26}
                  height={26}
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
              <a
                href="#"
                className={
                  location.pathname == "/admin/users"
                    ? "sidebar-active sidebar-style"
                    : "sidebar-style"
                }
                onClick={() => navigate("/admin/users")}
              >
                <img
                  className="bx bx-menu"
                  src={location.pathname == "/admin/users" ? userBlue : user}
                  alt="menuBar"
                  width={26}
                  height={26}
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
        <header className="home-section-header">
          <div className="container-fluid py-3">
            <div className="dropdown text-end">
              <button
                className="btn-logout dropdown-toggle"
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
                <span className="mx-2">Smart Water</span>
              </button>
              <ul className="dropdown-menu">
                <li className="d-flex align-items-center justify-content-center ms-auto">
                  <a
                    className="dropdown-item ps-1 d-flex align-items-center"
                    href="#"
                    onClick={logoutFunction}
                  >
                    <img
                      className="bx bx-menu mx-2"
                      src={logout}
                      alt="menuBar"
                      width={22}
                      height={22}
                    />
                    <span>Chiqish</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <section className="home-section py-3">
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/news" element={<AdminNew />} />
              <Route path="/stations" element={<AdminStation />} />
              <Route
                path="/devices/notworking"
                element={<AdminDevicesNotWorking />}
              />
              <Route path="/users" element={<AdminUser />} />
            </Routes>
          </div>
        </section>
      </div>

      <Helmet>
        <script src="../src/assets/js/Admin.js"></script>
      </Helmet>
    </HelmetProvider>
  );
};

export default Admin;
