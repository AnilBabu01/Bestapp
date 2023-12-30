import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={style.container} style={{ marginTop: "0px" }}>
        <div className={style.footer_main}>
          <div className={style.main_Tele_div}>
            <TelegramIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
            <YouTubeIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
            <InstagramIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
            <WhatsAppIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
            <FacebookIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
          </div>
          <div className={style.main_booton_link_div}>
            <a href="/dsd">About Us</a>&nbsp;┊ &nbsp;
            <a href="/sdhjhs">Contact Us</a>&nbsp;┊ &nbsp;
            <a href="/sdhs">Private Policy</a>&nbsp;┊ &nbsp;
            <a href="/sdds">T&C</a>
          </div>
          <p className={style.copy_text_right}>
            Copyright ©BestEarningApps All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
