import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import DashboardBooking from "./DashboardBooking";
import DashboardNav from "./DashboardNav";
import DashboardProfile from "./DashboardProfile";
import styles from "./NewDashboard.module.css";
import Images from "../../All_Images/Images";

const NewDashboard = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const history = useHistory();
  const pathArray = history.location.pathname.split("/");
  const currentPath = pathArray[pathArray.length - 1];

  // useEffect(() => {
  //   if (window.innerWidth >= 810) setMenuDisplay(true);
  // }, [menuDisplay]);

  // const dashboardNavCloseHandler = (handle) => {
  //   if (handle) setMenuDisplay(false);
  //   if (window.innerWidth >= 810) setMenuDisplay(true);
  // };
  const menuDisplayHandler = (val)=>{
    setMenuDisplay(val);
  }

  return (
    <div className={styles["NewDashboard-container"]}>
      {menuDisplay && (
        <DashboardNav
          menuDisplayHandler={menuDisplayHandler} 
          sideNavDisplay={false}
        />
      )}

      <DashboardNav menuDisplayHandler={menuDisplayHandler} sideNavDisplay={true} />

      {currentPath == "dashboard" ? <DashboardBooking menuDisplayHandler={menuDisplayHandler}/> : <DashboardProfile menuDisplayHandler={menuDisplayHandler}/>}
    </div>
  );
};

export default NewDashboard;
