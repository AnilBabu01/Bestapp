import React from "react";
import style from "./Top.module.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
const Top = () => {
  return (
    <>
      <div className={style.mainTop}>
        <div>
          <p>demo@gmail.com</p>
        </div>
        <div>
          <YouTubeIcon CloseIcon className={style.iconmedia} />
          <TelegramIcon CloseIcon className={style.iconmedia} />
        </div>
      </div>
    </>
  );
};

export default Top;
