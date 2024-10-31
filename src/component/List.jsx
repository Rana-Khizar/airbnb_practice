import React, { useEffect } from "react";
import filter from "../assets/panel.png";
import "./List.css";
import right from "../assets/right.png";
import left from "../assets/arrow-left.png";

const List = () => {
  useEffect(() => {
    const initializeCarousel = () => {
      if (window.jQuery) {
        $(".owl-carousel").owlCarousel({
          margin: 2,
          nav: false,
          dots: false,
          loop: true, // Enable loop
          responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 7 },
          },
        });

        // Handle forward and backward navigation
        $(".btn-left").click(() => {
          $(".owl-carousel").trigger("prev.owl.carousel");
        });

        $(".btn-right").click(() => {
          $(".owl-carousel").trigger("next.owl.carousel");
        });
      }
    };

    initializeCarousel();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 d-flex align-items-center">
          {/* Left Arrow Button */}
          <div className="item text-center mr-2 btn-left">
            <img src={left} alt="left arrow" />
          </div>

          {/* Owl Carousel */}
          <div className="owl-carousel owl-theme">
            {[
              { icon: "fa-mountain-sun", label: "Rooms" },
              { icon: "fa-hospital", label: "Hospitals" },
              { icon: "fa-bed", label: "Breakfasts" },
              { icon: "fa-icons", label: "Icons" },
              { icon: "fa-city", label: "Top Cities" },
              { icon: "fa-hourglass-end", label: "Trending" },
              { icon: "fa-landmark", label: "History" },
              { icon: "fa-landmark-dome", label: "Mansions" },
              { icon: "fa-chess-rook", label: "Castles" },
              { icon: "fa-mountain-sun", label: "Rooms" },
              { icon: "fa-hospital", label: "Hospitals" },
              { icon: "fa-bed", label: "Breakfasts" },
              { icon: "fa-icons", label: "Icons" },
              { icon: "fa-city", label: "Top Cities" },
              { icon: "fa-hourglass-end", label: "Trending" },
              { icon: "fa-landmark", label: "History" },
              { icon: "fa-landmark-dome", label: "Mansions" },
              { icon: "fa-chess-rook", label: "Castles" },
            ].map((item, index) => (
              <div key={index} className="item text-center  box1">
                <i className={`fa-solid ${item.icon} fs-5`}></i>
                <br />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <div className="item text-center ml-2 btn-right">
            <img src={right} alt="right arrow" />
          </div>
        </div>

        {/* Filter and Tax Buttons */}
        <div className="col-md-4 d-flex">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-2">
              <button
                type="button"
                className="btn  btn-filter d-flex px-3 py-3"
                style={{
                  borderRadius: "15px",
                  margin: "8px",
                }}
              >
                <img src={filter} alt="filter" width={20} />
                <span>Filter</span>
              </button>
            </div>
            <div className="col-md-9">
              <button
                type="button"
                className="btn  btn-lg btn-tax py-3"
                style={{ borderRadius: "15px" }}
              >
                Display total before taxes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
