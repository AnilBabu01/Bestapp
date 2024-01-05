import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import {backendApiUrl}  from '../../config/config';
const Login = ({ setLoadingshow }) => {
  const navigate = useRouter();
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  useEffect(() => {
    setLoadingshow(false);
  }, []);
  const handlesubmit = async () => {
    try {
      console.log("clicked");

      setloading(true);
      const res = await axios.post(`${backendApiUrl}login`, {
        email: email,
        password: password,
      });

      if (res?.status) {
        setloading(false);
        localStorage.setItem("tokengame", res?.data?.data[0]?.token);

        toast.success(res?.data?.msg, {
          autoClose: 1000,
        });
        navigate.push("/");
      }
    } catch (error) {
      toast.success(error, {
        autoClose: 1000,
      });
      setloading(false);
    }
  };

  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.inneardiv}>
          <h1>Admin</h1>
          <div className={styles.maininput}>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              name="email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className={styles.maininput}>
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              name="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button onClick={() => handlesubmit()} className={styles.loginbtn}>
            {loading ? (
              <CircularProgress size={25} style={{ color: "red" }} />
            ) : (
              "Login"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
