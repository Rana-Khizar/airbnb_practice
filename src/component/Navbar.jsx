// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/airbnb.svg";
import user from "../assets/user.png";
import "./Navbar.css";

const Navbar = () => {
  return (
      <nav className="navbar container-fluid p-0">
        <div className="row w-100 ">
          <div className="col-md-2 d-flex justify-content-start ">
            {" "}
            <a className="navbar-brand w-100" href="#">
              {" "}
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>

          <div className="col-md-2 "></div>

          <div className="col-md-4 d-flex justify-content-start align-items-center">
            <div className="row ">
              <div className="col-md-6 d-flex justify-content-end align-items-center ">
                <button type="button" className="btn fw-bold">
                  Stays
                </button>
              </div>
              <div className="col-md-6 header-text-1 d-flex justify-content-start">
                <button type="button" className="btn">
                  <span>Experiences</span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-end align-items-center">
            <div className="row ">
              <div className="col-md-7 d-flex justify-content-end align-items-center">
                <span className="header-text">Airbnb your home</span>
              </div>
              <div className="col-md-1 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-globe header-globe"></i>
              </div>
              <div className="col-md-4 d-flex justify-content-start align-items-center">
                <button type="button" className="btn btn-outline-light header-btn">
                  <div className="row">
                    <div className="col-md-6 fs-5 ">
                      <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="col-md-6 fs-5 px-2 header-user-btn ">
                      {" "}
                      <img src={user} alt="user_icon" width={30} />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="search_container">
          <div className="row">
            <div className="col-md-3 column item d-flex justify-content-center align-items-center p-6">
              {" "}
              <span>
                <b>Where</b> <br /> Search 
              </span>
            </div>
            <div className="col-md-3 column item d-flex justify-content-center align-items-center p-2">
              <span>
                <b>Check in</b> <br />
                Add Dates
              </span>
            </div>
            <div className="col-md-3 column item d-flex justify-content-center align-items-center p-2">
              <span>
                <b>Check out</b> <br /> Add Dates
              </span>
            </div>
            <div className="col-md-3 column item  p-2">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  {" "}
                  <span>
                    <b> Who </b>
                    <br /> Add 
                  </span>
                </div>
                <div className="col-md-6 search_icon d-flex justify-content-around align-items-center pr-2">
                  <span>
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
