import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetHostel } from "../../../redux/actions/hostelActions";
import styles from "./AddSlider.module.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Button } from "@mui/material";
import AddSlider10 from "@/Components/Admin/Slider/AddSlider";
import UpdateSlider from "@/Components/Admin/Slider/UpdateSlider";
import { serverInstance } from "../../../API/ServerInstance";
import { toast } from "react-toastify";
import LoadingSpinner from "@/Components/loader/LoadingSpinner";
import { backendApiUrl, backendUrl } from "../../../config/config";
function AddSlider() {
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
    serverInstance("uploadslider", "get").then((res) => {
      if (res?.status === true) {
        console.log("Slider list is", res?.data[0]);
        setisData(res?.data[0]);
      }
    });
  };
  useEffect(() => {
    getdata();
  }, [open]);


  
  const handledelete = () => {
    serverInstance("uploadslider", "delete", {
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
            <AddSlider10 setOpen={setOpen} />
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
            <UpdateSlider setOpen={setOpenupdate} updatedata={updatedata} />
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
              Add Slider
            </button>
          </div>

          <div className={styles.add_divmarginn}>
            <div className={styles.tablecontainer}>
              <table className={styles.tabletable}>
                <tbody>
                  <tr className={styles.tabletr}>
                    <th className={styles.tableth}>S.NO</th>

                    <th className={styles.tableth}>Image</th>
                    <th className={styles.tableth}>Action</th>
                  </tr>
                  {isdata?.map((item, index) => {
                    return (
                      <tr key={index} className={styles.tabletr}>
                        <td className={styles.tabletd}>{index + 1}</td>

                        <td className={styles.tabletd}>
                          <img
                            alt="img"
                            className={styles.sliderimg}
                            src={`${backendUrl}${item?.imgurl}`}
                          />
                        </td>
                        <td className={styles.tabkeddd}>
                          <button>
                            <img
                              className={styles.tabkedddimgactive}
                              onClick={() => ClickOpendelete(item?.id)}
                              src="/images/Delete.png"
                              alt="imgss"
                            />
                          </button>
                          {/* <button>
                            <img
                              className={styles.tabkedddimgactive}
                              onClick={() => ClickOpenupdate(item)}
                              src="/images/Edit.png"
                              alt="imgss"
                            />
                          </button> */}
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

export default AddSlider;
