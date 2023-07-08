import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminUser.css";
import { apiGlobal } from "../API/Api.global";
import { Helmet, HelmetProvider } from "react-helmet-async";
import close from "../../assets/images/close.png";

const AdminUser = () => {
  const [role, setRole] = useState([]);
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [userOneWithId, setUserOneWithId] = useState({});
  const [changeUserId, setChangeUserId] = useState();

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

  useEffect(() => {
    fetch(`${apiGlobal}/users/find-all-users`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

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

  const updateUser = (userId) => {
    console.log(changeUserId);
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

  const getUserWithId = (userId) => {
    const foundUser = users.find((e) => e._id == userId);
    setUserOneWithId(foundUser);
  };

  return (
    <HelmetProvider>
      <div>
        {/* Modal EDIT */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Userni o'zgartirish
                </h1>
                <button
                  type="button"
                  className="btn-close btn-close-location"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={updateUser}>
                  <div className="row mb-3">
                    <label
                      htmlFor="name"
                      className="col-md-4 col-lg-3 col-form-label modal-label"
                    >
                      Ism
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="nameDevice"
                        type="text"
                        className="form-control"
                        id="nameUpdate"
                        defaultValue={userOneWithId.name}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="username"
                      className="col-md-4 col-lg-3 col-form-label modal-label"
                    >
                      Username
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="usernameUpdate"
                        type="text"
                        className="form-control"
                        id="username"
                        defaultValue={userOneWithId.username}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="district"
                      className="col-md-4 col-lg-3 col-form-label modal-label"
                    >
                      Telefon raqam
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="phoneNumberUpdate"
                        type="text"
                        className="form-control"
                        id="district"
                        defaultValue={userOneWithId.phoneNumber}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="imei"
                      className="col-md-4 col-lg-3 col-form-label modal-label"
                    >
                      Role
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <select
                        className="form-select select-user-create"
                        required
                        id="role"
                        name="roleUpdate"
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

                  <div className="text-end">
                    <button className="btn btn-primary devices-btn">
                      Saqlash
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL PERMISSION   */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header modal-header-permission border-bottom-0 bg-danger pt-4 pb-4 d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                  <p className="m-0 text-light fs-6 fw-bolder">
                    Haqiqatan ham o'chirmoqchimisiz?
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-close-location btn-close-delete-devices p-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={close} alt="cancel" width="18" height="18" />
                </button>
              </div>
              <div className="modal-body fw-semibold fs-5 text-dark text-center modal-delete-device">
                O'ylab ko'ring! userni oʻchirish doimiy boʻladi.
              </div>
              <div className="modal-footer border-top-0">
                <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                >
                  Yo'q
                </button>
                <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                >
                  Ha
                </button>
              </div>
            </div>
          </div>
        </div>

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
                  data-bs-target="#profile-users"
                >
                  Userlar ro'yhati
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link"
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
                className="tab-pane fade show active profile-users"
                id="profile-users"
              >
                <table className="c-table mt-4">
                  <thead className="c-table__header">
                    <tr>
                      <th className="c-table__col-label text-center">Ism</th>
                      <th className="c-table__col-label text-center">
                        Username
                      </th>
                      <th className="c-table__col-label text-center">Role</th>
                      <th className="c-table__col-label text-center">
                        Telefon raqam
                      </th>
                      <th className="c-table__col-label text-center">
                        O'zgartirish
                      </th>
                      <th className="c-table__col-label text-center">
                        O'chirish
                      </th>
                    </tr>
                  </thead>
                  <tbody className="c-table__body">
                    {users.map((e, i) => {
                      return (
                        <tr className="fs-6" key={i}>
                          <td className="c-table__cell text-center">
                            {e.name}
                          </td>
                          <td className="c-table__cell text-center">
                            {e.username}
                          </td>
                          <td className="c-table__cell text-center">
                            {
                              role.find((i) => {
                                if (i._id == e.roleId) {
                                  return i.name;
                                }
                              }).name
                            }
                          </td>
                          <td className="c-table__cell text-center">
                            {e.phoneNumber}
                          </td>
                          <td className="c-table__cell text-center">
                            <button
                              className="btn-devices-edit"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => {
                                setChangeUserId(e._id);
                                getUserWithId(e._id);
                              }}
                            >
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/9458/9458280.png"
                                alt="update"
                                width="16"
                                height="16"
                              />
                            </button>
                          </td>
                          <td className="c-table__cell text-center">
                            <button
                              className="btn-devices-edit"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/9713/9713380.png"
                                alt="update"
                                width="16"
                                height="16"
                              />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div
                className="tab-pane fade profile-overview"
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
              <div
                className="tab-pane fade profile-edit pt-3"
                id="profile-edit"
              >
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
      <Helmet>
        <script src="../src/assets/js/table.js"></script>
      </Helmet>
    </HelmetProvider>
  );
};

export default AdminUser;
