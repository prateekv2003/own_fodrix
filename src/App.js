import React from "react";
import "./App.css";

import TermsConditions from "./components/footer_components/TermsConditions";
import { Route, Switch, withRouter, useHistory } from "react-router-dom";
import BookNow from "./components/bookashoot_components/BookNow";
import privacyPolicy from "./components/footer_components/PrivacyPolicy";
import CancPolicy from "./components/footer_components/CancPolicy";
import PhotographerLogin from "./components/login_components/PhotographerLogin";
import PhotoshootServices from "./components/homePage_components/PhotoshootServices";

import PaymentForm from "./components/bookashoot_components/PaymentForm";
import OTP from "./components/bookashoot_components/OTP.jsx";
import CityHome from "./components/CityHome_components/CityHome";
import Career from "./components/footer_components/Career";
import BecomeFodrixographer from "./components/footer_components/BecomeFodrixographer";
import BecomePartner from "./components/footer_components/BecomePartner";
import ContactUs from "./components/footer_components/contactUs";
import Testinomials from "./components/testinomial_components/Testinomials";
import NewDashboard from "./components/New-Dashboard__components/NewDashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/Dashboard_components/Authentication/ProtectedRoute";
import Footer from "./components/footer_components/Footer";
import OfferAlert from "./mainUtils/OfferAlert";
import NewUserDashboard from "./components/Dashboard_components/NewUserDashboard";
import PackageModal from "./components/package_modal/PackageModal";

// global.loggedIn = true;

function App() {
  const history = useHistory();
  return (
    <>
      {history.location.pathname.includes("dashboard") ||
      history.location.pathname.includes("userDashboard") ? null : (
        <>
          <OfferAlert />
          <Navbar />
        </>
      )}

      <Switch>
        <Route exact path="/tNc" component={TermsConditions} />

        <Route exact path="/book" component={BookNow} />
        <Route exact path="/privacyPolicy" component={privacyPolicy} />
        <Route exact path="/cancellationPolicy" component={CancPolicy} />
        <Route exact path="/pLogin" component={PhotographerLogin} />

        <Route exact path="/payment" component={PaymentForm} />
        <Route exact path="/OTP" component={OTP} />
        <Route exact path="/City_Home" component={CityHome} />
        <Route
          exact
          path="/BecomeFodrixographer"
          component={BecomeFodrixographer}
        />
        <Route exact path="/Career" component={Career} />
        <Route exact path="/BecomePartner" component={BecomePartner} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/testimonial" component={Testinomials} />
        <Route
          exact
          path="/photoshoot_services"
          component={PhotoshootServices}
        />
        <Route exact path="/dashboard/profile" component={NewDashboard} />
        <Route exact path="/book_package" component={PackageModal} />
        <ProtectedRoute
          exact
          path="/userdashboard"
          component={NewUserDashboard}
        ></ProtectedRoute>

        <ProtectedRoute
          exact
          path="/dashboard"
          component={NewDashboard}
        ></ProtectedRoute>
        
      </Switch>
      {history.location.pathname.includes("dashboard") ||
      history.location.pathname.includes("userDashboard") ? null : (
        <Footer />
      )}
    </>
  );
}

export default withRouter(App);
