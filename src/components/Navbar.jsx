import React from "react";

import Images from "../All_Images/Images";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins/navbar";
import { Nav, Navbar, Container } from "react-bootstrap";
import ProtectedRoute from "./Dashboard_components/Authentication/ProtectedRoute";
import Dashboard from "./Dashboard_components/Dashboard";

import "../css/Navbar.css";
import Temp from "./Temp";
import { connect } from "react-redux";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      loginlink: localStorage.getItem("auth"),
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.collapsMenu = this.collapsMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  collapsMenu() {
    this.setState({ menu: false });
  }

  bookAShootHandler() {
    this.props.bookAShoot();
  }

  // authenticated() {
  //   console.log("component did mount is called");

  //   if (global.loggeduserlogged === true) {
  //     console.log("if excuted");
  //     this.setState({
  //       loginlink: "/dashboard",
  //       logtext: "dashboard",
  //     });
  //   }
  // }
  render() {
    const show = this.state.menu ? "show" : "";

    // if (Auth() === true) {
    //   link = "/dashboard";
    //   ltext = "Dashboard";
    // }
    // var navlog = window.localStorage.getItem("isAuth");
    // console.log(navlog);
    
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          id="navbar"
        >
          <Link onClick={this.collapsMenu} className="navbar-brand" to="/">
            {" "}
            <img
              src={Images.fodrixiconnew}
              className="image"
              width="130px"
              height="71px"
              alt="Fodrix Logo"
              style={{ height: "57px", width: "100px" }}
            />{" "}
          </Link>{" "}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleMenu}
          >
            <span className="navbar-toggler-icon"> </span>{" "}
          </button>{" "}
          <div id="collapse" className={"collapse navbar-collapse " + show}>
            <div id="right" className="navbar-nav bg-light">
              <Link onClick={this.collapsMenu} className="nav-item nav-link" to="/photoshoot_services">
                Services
              </Link>{" "}
              <Link onClick={this.collapsMenu} className="nav-item nav-link" to="/packages">
                {" "}
                Packages{" "}
              </Link>{" "}
              <Link onClick={this.collapsMenu} className="nav-item nav-link" to="/HowItWorks">
                {" "}
                How it Works{" "}
              </Link>{" "}
              <Link onClick={this.collapsMenu} className="nav-item nav-link" to="/about_us">
                {" "}
                AboutUs{" "}
              </Link>{" "}
              <Link
                onClick={this.collapsMenu}
                id="logout"
                className="nav-item nav-link"
                to={this.state.loginlink === "true" ? "/dashboard" : "/login"}
              >
                {this.state.loginlink === "true" ? "Dashboard" : "Login"}
              </Link>
              <a onClick={this.collapsMenu} className="nav-item nav-link" href="tel:07020147576">
                {" "}
                <i className="fas fa-phone-alt"> </i> 07020147576{" "}
              </a>
              <Link onClick={this.collapsMenu} className="nav-item nav-link" to="/userdashboard">
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={this.bookAShootHandler.bind(this)}
                >
                  {" "}
                  Book A Shoot <i className="fas fa-hand-point-up"> </i>{" "}
                </button>{" "}
              </Link>
            </div>{" "}
          </div>{" "}
        </nav>

        <Temp />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookAShoot: () => dispatch({ type: "bookAShoot" }),
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
