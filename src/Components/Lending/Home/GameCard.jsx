import React from "react";
import styles from "./GameList.module.css";
import { backendUrl } from "../../../config/config";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Edit from "../../../pages/images/Edit.png";
import downloadImage from "../../../pages/images/icons8-download (1).gif";
import Image from "next/image";
const GameCard = ({ item }) => {
  console.log("data is data", item);
  return (
    <>
      <div className={styles.maingamediv}>
        {item?.gameimg ? (
          <>
            <img
              src={`${backendUrl}public/upload/${item?.gameimg}`}
              alt="nhbbb"
            />
          </>
        ) : (
          <>
            <img src="/images/slider1.png" alt="nhbbb" />
          </>
        )}
        <div className={styles.overdiv}>
          <h1>{item?.gamename}</h1>
          <p>{item?.gameversion}</p>
          <p className={styles.milinons_text}>
            ⤓<span className={styles.main_mil}>{item?.gamedownload}</span> |
            Bonus Rs.
            {item?.gamebonus}
          </p>
          <a className={styles.btndiv} href={item?.downloadurl}>
            <Image
              onClick={() => ClickOpendelete(row?.id)}
              src={downloadImage}
              height={30}
              width={40}
            />
            {/* <FileDownloadIcon />  */}
            Download
          </a>
        </div>
      </div>
    </>
  );
};

export default GameCard;
