import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetHostel } from "../../../redux/actions/hostelActions";
import styles from "./Game.module.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Button } from "@mui/material";
import Addgame from "@/Components/Admin/Game/Addgame";
import Updategame from "@/Components/Admin/Game/Updategame";
import { serverInstance } from "../../../API/ServerInstance";
import { toast } from "react-toastify";
import LoadingSpinner from "@/Components/loader/LoadingSpinner";
import Edit from "../../../pages/images/Edit.png";
import Delete from "../../../pages/images/Delete.png";
import Image from "next/image";
function AddGame() {
  // const dispatch = useDispatch();

  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openupdate, setOpenupdate] = useState(false);
  const [openalert, setOpenalert] = useState(false);
  const [updatedata, setupdatedata] = useState("");
  const [deleteid, setdeleteid] = useState("");
  const [hostelname, sethostelname] = useState("");
  const [isdata, setisData] = useState([]);
  const [userdata, setuserdata] = useState("");
  // const { user } = useSelector((state) => state.auth);
  // const { hostel, loading } = useSelector((state) => state.GetHostel);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="top" ref={ref} {...props} />;
  });

  const handleCloseregister = () => {
    setOpen(false);
  };

  const ClickOpenupdate = (data) => {
    setOpenupdate(true);
    setupdatedata(data);
  };

  const handleCloseupadte = () => {
    setOpenupdate(false);
  };

  const ClickOpendelete = (id) => {
    setOpenalert(true);
    setdeleteid(id);
  };

  const handleClosedelete = () => {
    setOpenalert(false);
  };

  const getdata = () => {
    serverInstance("populargame", "get").then((res) => {
      if (res?.status === true) {
        console.log("game list is", res);
        setisData(res?.data[0]);
      }
    });
  };
  useEffect(() => {
    getdata();
  }, [open]);

  const handledelete = () => {
    serverInstance("populargame", "delete", {
      id: deleteid,
    }).then((res) => {
      if (res?.status === true) {
        toast.success(res?.msg, {
          autoClose: 1000,
        });
        setOpenalert(false);
        getdata();
      }
      if (res?.status === false) {
        toast.error(res?.msg, {
          autoClose: 1000,
        });
        setOpenalert(false);
        getdata();
      }
    });
  };

  return (
    <>
      {open && (
        <div>
          <Dialog
            open={open}
            // TransitionComponent={Transition}
            onClose={handleCloseregister}
            aria-describedby="alert-dialog-slide-description"
            sx={{
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "60rem",
                },
              },
            }}
          >
            <Addgame setOpen={setOpen} />
          </Dialog>
        </div>
      )}
      {openupdate && (
        <div>
          <Dialog
            open={openupdate}
            TransitionComponent={Transition}
            onClose={handleCloseupadte}
            aria-describedby="alert-dialog-slide-description"
            sx={{
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "60rem",
                },
              },
            }}
          >
            <Updategame setOpen={setOpenupdate} updatedata={updatedata} />
          </Dialog>
        </div>
      )}

      {openalert && (
        <>
          <Dialog
            open={openalert}
            onClose={handleClosedelete}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Do you want to delete"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                After delete you cannot get again
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClosedelete}>Disagree</Button>
              <Button onClick={handledelete} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
      <div className={styles.mainContainer}>
        <div>
          <div className={styles.addtopmenubar}>
            <button
              className={styles.addtopmenubarbuttonactive}
              onClick={() => handleClickOpen()}
            >
              Add Game
            </button>
          </div>

          <div className={styles.add_divmarginn}>
            <div className={styles.tablecontainer}>
              <table className={styles.tabletable}>
                <tbody>
                  <tr className={styles.tabletr}>
                    <th className={styles.tableth}>S.No</th>
                    <th className={styles.tableth}>Game Name</th>
                    <th className={styles.tableth}>Game Version</th>
                    <th className={styles.tableth}>Game Downloads</th>
                    <th className={styles.tableth}>Game Bonus</th>
                    <th className={styles.tableth}>Action</th>
                  </tr>
                  {isdata?.map((row, index) => {
                    return (
                      <tr key={index} className={styles.tabletr}>
                        <td className={styles.tabletd}>{index + 1}</td>
                        <td className={styles.tabletd}>{row?.gamename}</td>
                        <td className={styles.tabletd}>{row?.gameversion}</td>
                        <td className={styles.tabletd}>{row?.gamedownload}</td>
                        <td className={styles.tabletd}>{row?.gamebonus}</td>

                        <td className={styles.tabkeddd}>
                          <button>
                            <Image
                              onClick={() => ClickOpendelete(row?.id)}
                              src={Delete}
                              height={30}
                              width={40}
                            />
                          </button>
                          <button>
                            <Image
                              onClick={() => ClickOpenupdate(row)}
                              src={Edit}
                              height={30}
                              width={40}
                            />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {loading && <LoadingSpinner />}
    </>
  );
}

export default AddGame;
