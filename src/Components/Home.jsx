import React from "react";
import "../Styles/Home.css";

export const Home = () => {
  return (
    <>
      <div className="main">
        <div className="top">
          <h1>Welcome To Our Kindergarten</h1>
          <p>
            Our set he for firmament morning sixth subdue today the darkness
            creeping gathered divide our let god moving today. Moving in fourth
            air night bring upon lesser subdue fowl male signs.
          </p>
        </div>
        <div className="box">
          <div className="item">
            <div className="list">
              <img
                src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg"
                alt=""
              />
              <div className="text">
                <h3>Inter School Sports</h3>
                <p>
                  The words you use in your written communica speak volumes.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="list">
              <img
                src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg"
                alt=""
              />
              <div className="text">
                <h3>Inter School Sports</h3>
                <p>
                  The words you use in your written communica speak volumes.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="list">
              <img
                src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg"
                alt=""
              />
              <div className="text">
                <h3>Inter School Sports</h3>
                <p>
                  The words you use in your written communica speak volumes.
                </p>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="imgBx">
            <img
              src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
