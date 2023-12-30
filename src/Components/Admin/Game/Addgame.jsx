import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../../../pages/Admin/Game/Game.module.css";
// import { GetHostel } from "../../../redux/actions/hostelActions";
// import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import axios from "axios";
import { backendApiUrl } from "../../../config/config";
const formData = new FormData();
function Addgame({ setOpen }) {
  //   const dispatch = useDispatch();
  const [gamename, setgamename] = useState("");
  const [gameversion, setgameversion] = useState("");
  const [gamedownloads, setgamedownloads] = useState("");
  const [gamebonus, setgamebonus] = useState("");
  const [gameurl, setgameurl] = useState("");
  const [img1, setimg1] = useState("");
  const [previewprofile1, setpreviewprofile1] = useState("");
  const [loading, setloading] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      ////
      setloading(true);
      formData.set("gamename", gamename);
      formData.set("gameversion", gameversion);
      formData.set("gamedownload", gamedownloads);
      formData.set("gamebonus", gamebonus);
      formData.set("downloadurl", gameurl);
      formData.set("gameimg", img1);

      axios.defaults.headers.post[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("tokengame")}`;

      const res = await axios.post(`${backendApiUrl}populargame`, formData);

      if (res?.status) {
        setOpen(false);
        setloading(false);

        toast.success(res?.data?.msg, {
          autoClose: 1000,
        });
      }
    } catch (error) {
      toast.success("Something Went Wrong!!", {
        autoClose: 1000,
      });
    }
  };

  return (
    <>
      <div className={styles.divmainlogin}>
        <div className={styles.closeicondiv} onClick={() => setOpen(false)}>
          <CloseIcon />
        </div>
        <h1>Add Game</h1>
        <form onSubmit={handlesubmit}>
          <div className={styles.inputdiv20}>
            <label>Game Name</label>
            <input
              type="text"
              placeholder="Enter the Game Name"
              value={gamename}
              name="gamename"
              onChange={(e) => setgamename(e.target.value)}
            />
          </div>

          <div className={styles.inputdiv20}>
            <label>Game Version</label>
            <input
              type="text"
              placeholder="Enter the Game Version"
              value={gameversion}
              name="gameversion"
              onChange={(e) => setgameversion(e.target.value)}
            />
          </div>

          <div className={styles.inputdiv20}>
            <label>Game Bonus</label>
            <input
              type="text"
              placeholder="Enter the Game Bonus"
              value={gamebonus}
              name="gamebonus"
              onChange={(e) => setgamebonus(e.target.value)}
            />
          </div>

          <div className={styles.inputdiv20}>
            <label>Game Downloads</label>
            <input
              type="text"
              placeholder="Enter the Game Downloads"
              value={gamedownloads}
              name="gamedownloads"
              onChange={(e) => setgamedownloads(e.target.value)}
            />
          </div>

          <div className={styles.inputdiv20}>
            <label>Game Url</label>
            <input
              type="text"
              placeholder="Enter the Game Url"
              value={gameurl}
              name="gameurl"
              onChange={(e) => setgameurl(e.target.value)}
            />
          </div>
          <div className={styles.inputdiv20}>
            {previewprofile1 ? (
              <>
                <div className={styles.main_img_divvvv}>
                  <img
                    alt="img"
                    className={styles.dharamshala_imgggg}
                    src={previewprofile1}
                  />
                </div>
              </>
            ) : (
              <>
                <div className={styles.main_img_divvvv}>
                  <img alt="img" src="/images/camera.png" />
                </div>
              </>
            )}

            <div className={styles.formdivvv_imf}>
              <input
                type="file"
                onChange={(e) => {
                  setimg1(e.target.files[0]);
                  console.log(e.target.files[0]);
                  setpreviewprofile1(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </div>
          </div>
          <div className={styles.logbtnstylediv}>
            <button
              disabled={loading ? true : false}
              className={styles.logbtnstyle}
            >
              {loading ? (
                <CircularProgress size={25} style={{ color: "red" }} />
              ) : (
                "Save"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addgame;
