import React, { useState, useEffect } from "react";
import "./City_Home.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import PackageModal from "../package_modal/PackageModal";

import "bootstrap/dist/css/bootstrap.min.css";
import CallbackPopup from "../../mainUtils/CallbackPopup";
import FeaturedPhotographer from "./FeaturedPhotographer";
export default function CityHome() {
  let apiKey = process.env.REACT_APP_CITY_HOME;
  const history = useHistory();
  console.log("we r in cityhome");
  const imageurl = apiKey + "/downloadbycity/";
  const city = localStorage.getItem("city");
  const [Citydetails, setCitydetails] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  const getCityname = async () => {
    try {
      const response = await fetch(apiKey + "getCityDetails/" + city);
      const cityData = await response.json();
      if (cityData.status === true) {
        setCitydetails(cityData.data);
      } else {
        swal("please enter a valid city");
        history.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCityname();
  }, []);
  const dispatch = useDispatch();

  return (
    <>
      {displayModal && <PackageModal setDisplayModal={setDisplayModal} city={city}/>}
      <div className="bordered">
        <div className="card_body">
          <h1> Welcome to {Citydetails.place} </h1>{" "}
          <div className="card-description"> {Citydetails.about} </div>{" "}
        </div>{" "}
        <div className="img_random">
          <div className="img_body">
            {" "}
            <img
              loading="lazy"
              className="image"
              src={imageurl + Citydetails.id}
              alt="not found"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="second_row">
        <div className="card touristSpots">
          <div className="body_touristSpots">
            <h1>
              {" "}
              {Citydetails.place}
              &nbsp;Tourist Spots
            </h1>{" "}
            <ul className="tourist_spots" id="tourist_spots_ul">
              <li id="tourist_spots_li"> {Citydetails.spot1} </li>{" "}
              <li id="tourist_spots_li"> {Citydetails.spot2} </li>{" "}
              <li id="tourist_spots_li"> {Citydetails.spot3} </li>{" "}
              <li id="tourist_spots_li"> {Citydetails.spot4} </li>{" "}
              <li id="tourist_spots_li"> {Citydetails.spot5} </li>{" "}
              <li id="tourist_spots_li"> {Citydetails.spot6} </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="map">
          <iframe
            src={Citydetails.map_link}
            className="map_frame"
            title="map"
          ></iframe>{" "}
        </div>{" "}
      </div>{" "}
      {/* array of work images, profile image, name, address, description */}
      <div className="featuredPhotographer-cityHome__container">
        <FeaturedPhotographer />
      </div>
      <CallbackPopup popup={true} callBackForm={true} />
      {/* <div className="fourth-row">
        <h1>Featured Photographers</h1>
        <div className="fourth-container">

          {Photographer.map((data) => {
            return (
              <>
                <div className="city_cards">
                  <div className="background">
                    <Carousel>
                      {data.image.map((img) => {
                        return (
                          <>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={img.src}
                                alt="First slide"
                              />
                            </Carousel.Item>
                          </>
                        );
                      })}
                    </Carousel>

                    {data.image.map((img) => {
                      return (
                        <>
                          <div>
                            <img alt="img" src={img.src} />
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="profileimage">
                    <img alt="profile-image" src={data.phimage} />
                  </div>
                  <div className="nameph">
                    <h4>{data.name} </h4>
                  </div>
                  <div className="description_ph">
                    <p>{data.desc} </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div> */}
      <div className="third-row">
        <h1 className="heading-thirdCity"> Request your photographer </h1>{" "}
      </div>{" "}
      <button id="request_booking_btn" onClick={() => setDisplayModal(true)}>
        Request Booking
      </button>{" "}
    </>
  );
}
