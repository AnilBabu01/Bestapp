import React, { useState, useEffect } from "react";
import styles from "./GameList.module.css";
import GameCard from "./GameCard";
import {serverInstance}  from '../../../API/ServerInstance';
const GameList = () => {
  
  const [isdata, setisData] = useState([]);

  const getdata = () => {
    serverInstance("populargame", "get").then((res) => {
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
      <div className={styles.maingamelist}>
        <div className={styles.maingamelistH1div}>
          <h1 className={styles.maingamelistH1}>POPULAR BITCOIN GAMES</h1>
        </div>
        <div className={styles.flexidiv}>
          {isdata &&
            isdata?.map((item, index) => {
              return <GameCard key={index} item={item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default GameList;
