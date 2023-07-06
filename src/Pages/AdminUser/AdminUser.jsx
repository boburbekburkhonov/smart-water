import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminUser.css";
import { apiGlobal } from "../API/Api.global";

const AdminUser = () => {
  const [role, setRole] = useState([]);
  const [count, setCount] = useState(0);

  const createUser = (e) => {
    e.preventDefault();

    const { name, phoneNumber, login, password, role } = e.target;

    fetch(`${apiGlobal}/users/create-user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        name: name.value,
        phoneNumber: phoneNumber.value,
        login: login.value,
        password: password.value,
        role: role.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode == 200) {
          toast.success("User yaratildi!");
        }
      });

    name.value = "";
    phoneNumber.value = "";
    login.value = "";
    password.value = "";
    role.value = "";
  };

  const createRole = (e) => {
    e.preventDefault();

    const { roleCreate } = e.target;

    fetch(`${apiGlobal}/users/create-role`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        name: roleCreate.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode == 200) {
          setCount(count + 1);
          toast.success("Role yaratildi");
        }
      });

    roleCreate.value = "";
  };

  useEffect(() => {
    fetch(`${apiGlobal}/users/find-all-roles`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => setRole(data.data));
  }, [count]);

  return (
    <div>
      {/* ToastContainer */}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="card">
        <div className="card-body pt-3">
          <ul className="nav nav-tabs nav-tabs-bordered">
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#profile-overview"
              >
                User yaratish
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#profile-edit"
              >
                Role yaratish
              </button>
            </li>
          </ul>
          <div className="tab-content pt-2">
            <div
              className="tab-pane fade show active profile-overview"
              id="profile-overview"
            >
              <form
                className="pt-4 ps-5 form-user-create-wrapper d-flex flex-wrap align-items-center"
                onSubmit={createUser}
              >
                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="name"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Ism
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="name"
                      type="text"
                      className="form-control input-user"
                      id="name"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="phoneNumber"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Telefon raqam
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="phoneNumber"
                      type="text"
                      className="form-control input-user"
                      id="phoneNumber"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="login"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Login
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="login"
                      type="text"
                      className="form-control input-user"
                      id="login"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="password"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Parol
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="password"
                      type="text"
                      className="form-control input-user"
                      id="password"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="role"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Role
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <select
                      className="form-select select-user-create"
                      required
                      id="role"
                      name="role"
                    >
                      {role.map((e, i) => {
                        return (
                          <option key={i} value={e._id}>
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="w-50">
                  <button className="btn btn-primary btn-create-user w-25">
                    Saqlash
                  </button>
                </div>
              </form>
            </div>

            <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
              <form
                className=" ps-5 form-user-create-wrapper d-flex flex-wrap align-items-center"
                onSubmit={createRole}
              >
                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="rol"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Role
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="roleCreate"
                      type="text"
                      className="form-control input-user"
                      id="rol"
                      required
                    />
                  </div>
                </div>
                <div className="w-50">
                  <button className="btn btn-primary btn-create-user w-25">
                    Saqlash
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
