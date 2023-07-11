import React, { useEffect, useState } from "react";
import { apiGlobal } from "../API/Api.global";
import ReactPaginate from "react-paginate";
import "./AdminStation.css";
import next from "../../assets/images/next.png";
import circle from "../../assets/images/circle.png";

const AdminStation = () => {
  const [allStation, setAllStation] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch(`${apiGlobal}/stations/all?page=1&perPage=10`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllStation(data.data);
        setTotalPages(data.metadata.lastPage);
      });
  }, []);

  const handlePageChange = (selectedPage) => {
    fetch(
      `${apiGlobal}/stations/all?page=${selectedPage.selected + 1}&perPage=10`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAllStation(data.data);
      });
  };

  const createStation = (e) => {
    e.preventDefault();

    const {
      imei,
      regionId,
      districtId,
      balansOrg,
      name,
      usernamePhone,
      devicephoneNumber,
      location,
      temperature,
      batery,
      signal,
      programVersion,
      sendDataTime,
      sendInfoTime,
      sensorTypeId,
      date,
    } = e.target;

    fetch(`${apiGlobal}/stations/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        imel: imei.value,
        region_id: Number(regionId.value),
        district_id: Number(districtId.value),
        balance_organization_id: Number(balansOrg.value),
        name: name.value,
        userPhoneNum: usernamePhone.value,
        devicePhoneNum: devicephoneNumber.value,
        location: location.value,
        temperture: Number(temperature.value),
        battery: Number(batery.value),
        signal: Number(signal.value),
        programVersion: programVersion.value,
        sendDataTime: sendDataTime.value,
        sendInfoTime: sendInfoTime.value,
        sensorTypeId: sensorTypeId.value,
        date: date.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    imei.value = "";
    regionId.value = "";
    districtId.value = "";
    balansOrg.value = "";
    name.value = "";
    usernamePhone.value = "";
    devicephoneNumber.value = "";
    location.value = "";
    temperature.value = "";
    batery.value = "";
    signal.value = "";
    programVersion.value = "";
    sendDataTime.value = "";
    sendInfoTime.value = "";
    sensorTypeId.value = "";
    date.value = "";
  };

  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog table-location-width modal-dialog-centered">
          <div className="modal-content table-location-scrol">
            <div className="modal-header lastdata-close  pb-0">
              <button
                type="button"
                className="btn-close btn-close-location mb-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body pt-0 pt-2 pb-4">
              <div className="modal-body-item m-auto d-flex align-items-center justify-content-between flex-wrap">
                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly mt-3">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">Nomi</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">Yangi alish-2</p>
                </div>

                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">Imei</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">24e32143543534</p>
                </div>

                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">Viloyat id</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">24e32143543534</p>
                </div>

                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">Tuman id</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">24e32143543534</p>
                </div>

                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">Balans tashkilot id</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">24e32143543534</p>
                </div>

                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">User telefon raqami</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">24e32143543534</p>
                </div>

                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">Qurilma telefon raqami</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">24e32143543534</p>
                </div>

                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">Lokatsiya</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">24e32143543534</p>
                </div>

                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">Datani yuborish vaqti</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">24e32143543534</p>
                </div>

                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">Infoni yuborish vaqti</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">24e32143543534</p>
                </div>

                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">Programma versiyasi</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">24e32143543534</p>
                </div>

                <div className="modal-item-wrapper d-flex align-items-center justify-content-evenly">
                  <img src={circle} alt="name" width={20} height={20} />
                  <p className="m-0">Sensor type id</p>
                  <img src={next} alt="name" width={17} height={17} />
                  <p className="m-0 fw-semibold">24e32143543534</p>
                </div>

                {/* <table className="c-table mt-4 table-scroll">
                  <thead className="c-table__header">
                    <tr>
                      <th className="c-table__col-label text-center">Nomi</th>
                      <th className="c-table__col-label text-center">Imei</th>
                      <th className="c-table__col-label text-center">
                        Viloyat id
                      </th>
                      <th className="c-table__col-label text-center">
                        Tuman id
                      </th>
                      <th className="c-table__col-label text-center">
                        Balans tashkilot id
                      </th>
                      <th className="c-table__col-label text-center">
                        User telefon raqami
                      </th>
                      <th className="c-table__col-label text-center">
                        Qurilma telefon raqami
                      </th>
                      <th className="c-table__col-label text-center">
                        Lokatsiya
                      </th>
                      <th className="c-table__col-label text-center">
                        Datani yuborish vaqti
                      </th>
                      <th className="c-table__col-label text-center">
                        Infoni yuborish vaqti
                      </th>
                      <th className="c-table__col-label text-center">
                        Programma versiyasi
                      </th>
                      <th className="c-table__col-label text-center">Sana</th>
                      <th className="c-table__col-label text-center">
                        Sensor type id
                      </th>
                    </tr>
                  </thead>
                  <tbody className="c-table__body">
                    {data.length > 0 &&
                        data.map((element, index) => {
                          const time = new Date(element.time);
                          time.setHours(time.getHours() - 5);
                          return (
                            <tr className="fs-6" key={index}>
                              <td className="c-table__cell text-center">
                                {String(element.time).slice(11, 19)}
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body pt-3">
          <ul className="nav nav-tabs nav-tabs-bordered">
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#profile-users"
              >
                Stansiyalar ro'yhati
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#profile-overview"
              >
                Stansiya yaratish
              </button>
            </li>
          </ul>
          <div className="tab-content pt-2">
            <div
              className="tab-pane fade show active profile-users table-scroll"
              id="profile-users"
            >
              <table className="c-table mt-4">
                <thead className="c-table__header">
                  <tr>
                    <th className="c-table__col-label text-center">Nomi</th>
                    <th className="c-table__col-label text-center">Imei</th>
                    <th className="c-table__col-label text-center">Status</th>
                    <th className="c-table__col-label text-center">
                      Temperatura
                    </th>
                    <th className="c-table__col-label text-center">Batareya</th>
                    <th className="c-table__col-label text-center">Signal</th>
                    <th className="c-table__col-label text-center">
                      O'zgartirish
                    </th>
                    <th className="c-table__col-label text-center">
                      O'chirish
                    </th>
                  </tr>
                </thead>
                <tbody className="c-table__body">
                  {allStation.map((e, i) => {
                    return (
                      <tr
                        className="fs-6 column-admin-station"
                        key={i}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <td className="c-table__cell text-center">{e.name}</td>
                        <td className="c-table__cell text-center">{e.imel}</td>
                        <td className="c-table__cell text-center">
                          {e.status}
                        </td>
                        <td className="c-table__cell text-center">
                          {e.temperture}
                        </td>
                        <td
                          className={
                            "c-table__cell text-center " +
                            (e.battery > 77
                              ? "text-success"
                              : e.battery <= 77 && e.battery >= 50
                              ? "text-warning"
                              : e.battery < 50
                              ? "text-danger"
                              : "")
                          }
                        >
                          {e.battery}%
                        </td>
                        <td className="c-table__cell text-center">
                          {e.signal}
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

              <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageChange}
                forcePage={currentPage}
                previousLabel={"<<"}
                nextLabel={">>"}
                activeClassName={"pagination__link--active"}
                pageRangeDisplayed={1}
              />
            </div>

            <div
              className="tab-pane fade profile-overview"
              id="profile-overview"
            >
              <form
                className="pt-4 ps-4 form-user-create-wrapper d-flex flex-wrap align-items-center"
                onSubmit={createStation}
              >
                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="imei"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Imei
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="imei"
                      type="text"
                      className="form-control input-user"
                      id="imei"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="regionId"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Viloyat id
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="regionId"
                      type="text"
                      className="form-control input-user"
                      id="regionId"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="districtId"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Tuman id
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="districtId"
                      type="text"
                      className="form-control input-user"
                      id="districtId"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="balansOrg"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Balans tashkiloti id
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="balansOrg"
                      type="text"
                      className="form-control input-user"
                      id="balansOrg"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="name"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Nomi
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
                    htmlFor="usernamePhone"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    User telefon raqami
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="usernamePhone"
                      type="text"
                      className="form-control input-user"
                      id="usernamePhone"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="devicephoneNumber"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Qurilma telefon raqami
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="devicephoneNumber"
                      type="text"
                      className="form-control input-user"
                      id="devicephoneNumber"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="location"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Lokatsiya
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="location"
                      type="text"
                      className="form-control input-user"
                      id="location"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="temperature"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Temperatura
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="temperature"
                      type="text"
                      className="form-control input-user"
                      id="temperature"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="batery"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Batareya
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="batery"
                      type="text"
                      className="form-control input-user"
                      id="batery"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="signal"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Signal
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="signal"
                      type="text"
                      className="form-control input-user"
                      id="signal"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="programVersion"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Programma versiyasi
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="programVersion"
                      type="text"
                      className="form-control input-user"
                      id="programVersion"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="sendDataTime"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Datani yuborish vaqti
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="sendDataTime"
                      type="text"
                      className="form-control input-user"
                      id="sendDataTime"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="sendInfoTime"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Infoni yuborish vaqti
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="sendInfoTime"
                      type="text"
                      className="form-control input-user"
                      id="sendInfoTime"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="sensorTypeId"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Sensor type id
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="sensorTypeId"
                      type="text"
                      className="form-control input-user"
                      id="sensorTypeId"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3 d-flex flex-column input-label-wrapper">
                  <label
                    htmlFor="date"
                    className="col-md-4 col-lg-3 col-form-label profile-heading fw-bold w-100"
                  >
                    Sana
                  </label>
                  <div className="col-md-8 input-wrapper col-lg-9">
                    <input
                      name="date"
                      type="text"
                      className="form-control input-user"
                      id="date"
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

export default AdminStation;
