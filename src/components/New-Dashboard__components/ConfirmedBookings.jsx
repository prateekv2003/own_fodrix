import React, { useEffect, useState } from "react";
import styles from "./ConfirmedBookings.module.css";

const PendingBookings = () => {
  const [confirmedShoot, setconfirmedShoot] = useState([]);
  let url = "https://api.fodrix.com/user/clientRecord_success/";
  const fetchPendingBookings = () => {
    let api = url + localStorage.getItem("userEmail");
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        setconfirmedShoot(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchPendingBookings();
  }, []);

  return (
    <div className={styles["NewDashboard-photoshootCard"]}>
      {confirmedShoot
        ?
        confirmedShoot.map((request, id) => (
          <div className={styles["pending-booking__container"]} key={id}>
            <h6>{request.date}</h6>

            <div className={styles["pending-booking__inner"]}>
              <h3>{request.location}</h3>
              <p>₹ {request["c_package"]}</p>
            </div>
          </div>
        ))
        :
        <h3 className={styles["no_confirm_booking_heading"]}>No confirmed bookings to show!</h3>
      }
    </div>
  );
};

export default PendingBookings;
