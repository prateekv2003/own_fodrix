import { GrLinkTop } from "react-icons/gr";
import React, { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop() {
  const [showBtT, setshowBtT] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrolled = window.scrollY;

      console.log(scrolled);

      if (scrolled > 2000) {
        setshowBtT(true);
      } else {
        setshowBtT(false);
      }
    });
  }, [window.scrollY]);
  return (
    <>
      <div id="navright-backToTop">
        {showBtT ? (
          <a href="#navbar">
            <GrLinkTop className="backToTop-icon" />{" "}
          </a>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default BackToTop;
