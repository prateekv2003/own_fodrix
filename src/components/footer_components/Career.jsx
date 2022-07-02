import React, { useEffect } from "react";
import "./become.css";
import "./career.css";

export default function Career() {
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Career | Fodrix`;

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/Career");
  }, []);
  return (
    <>
      <div className="main">
        <h1>Work at Fodrix</h1>
        <p className="">
          Grow your network, life skills, practical knowledge and experience at
          India’s fastest growing startup in photography industry.
        </p>
      </div>
      <div className="join">
        Want to join Fodrix as a photographer?
        <a
          href="https://forms.gle/bmyKvQhk7PHmSxuu6"
          style={{ color: "#007bff", textDecoration: "None" }}
          target="blank"
        >
          {" "}
          Apply Here{" "}
        </a>
      </div>
      {/* <div className="image_space">
        <img src="https://lh3.googleusercontent.com/proxy/5CD4NzxGzuk8u6PGRJ1CdsWpKOdFOe2LmsZ2bdTqUPhrapzSmbz5N1BXg484L7zG2OyZATOaOdzmjeYOpgsPvC9w5i937TVc9j_RG4YAVokK8jXUJzKJK2qAJco"
  className="space"  alt=" not Found"/>
      </div> */}

      <div className="second">
        <h4>
          We are a young team of super talented professionals and we look
          forward to working with you
        </h4>
      </div>
      <div className="send">
        Send us your resume and we’ll get back to you
      </div>
      <div className="upload_btn">
        <label for="file">Upload Resume</label>
        <input type="file" id="file" className="input_resume" />
      </div>
    </>
  );
}