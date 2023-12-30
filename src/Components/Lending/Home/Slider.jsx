import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { serverInstance } from "../../../API/ServerInstance";
import { backendUrl } from "../../../config/config";
import styles from "./Slider.module.css";

const Slider = () => {
  const [isdata, setisData] = useState([]);

  const getdata = () => {
    serverInstance("uploadslider", "get").then((res) => {
      if (res?.status === true) {
        setisData(res?.data[0]);
      }
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className={styles.maisliderdiv}>
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showIndicators={true}
          stopOnHover={true}
          autoFocus={true}
          showStatus={false}
          showThumbs={false}
          showArrows={true}
          dots={true}
        >
          {isdata?.map((item, index) => {
            return (
              <div key={index} className={styles.slie_img_div}>
                <img src={`${backendUrl}${item?.imgurl}`} alt="nhbbb" />
                {console.log(`${backendUrl}${item?.imgurl}`)}
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
