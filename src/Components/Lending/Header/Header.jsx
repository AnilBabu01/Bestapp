import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import Top from "./Top";
import { toast } from "react-toastify";
const Header = () => {
  const navigate = useRouter();
  const [isMobile, setisMobile] = useState(false);
  const [token, settoken] = useState("");
  useEffect(() => {}, [isMobile]);

  const logout = () => {
    localStorage.removeItem("tokengame");
    toast.success("You Have Logout Successfully!!", {
      autoClose: 1000,
    });

    window.location.reload();
  };
  useEffect(() => {
    settoken(localStorage.getItem("tokengame"));
  }, []);

  return (
    <>
      <div className={style.totpmainis}>
        <Top />
        <div className={style.maindiv}>
          <nav className={style.navbar}>
            <div onClick={() => navigate.push("/")} className={style.logo}>
              <img src="/images/Logo.avif" alt=" Logo" />
              <p className={style.logotext}>BestEarningApp</p>
            </div>

            <ul
              className={isMobile ? style.mobilelinks : style.Links}
              onClick={() => setisMobile(false)}
            >
              <li>
                <Link
                  href="/"
                  className={({ isActive }) =>
                    isActive ? style.active : style.about
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className={({ isActive }) =>
                    isActive ? style.active : style.about
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className={({ isActive }) =>
                    isActive ? style.active : style.about
                  }
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className={({ isActive }) =>
                    isActive ? style.active : style.about
                  }
                >
                  Policy
                  {/* for Certificate/Diploma */}
                </Link>
              </li>

              {token ? (
                <>
                  <li>
                    <Link
                      href="/Admin/Game/AddGame"
                      className={({ isActive }) =>
                        isActive ? style.active : style.about
                      }
                    >
                      AddGame
                      {/* for Certificate/Diploma */}
                    </Link>
                  </li>
                  <li onClick={() => login()}>
                    <Link
                      href="/Admin/Slider/AddSlider"
                      className={({ isActive }) =>
                        isActive ? style.active : style.about
                      }
                    >
                      AddSlider
                      {/* for Certificate/Diploma */}
                    </Link>
                  </li>
                  <li onClick={() => logout()}>
                    <Link
                      // href="/Admin/Login"
                      href="#"
                      className={({ isActive }) =>
                        isActive ? style.active : style.about
                      }
                    >
                      Logout
                      {/* for Certificate/Diploma */}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/Admin/Login"
                      className={({ isActive }) =>
                        isActive ? style.active : style.about
                      }
                    >
                      Login
                      {/* for Certificate/Diploma */}
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <i
              style={{ marginRight: "20px" }}
              onClick={() => setisMobile(!isMobile)}
              className={style.mobileMenuIcon}
            >
              {isMobile ? (
                <>
                  <CloseIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                </>
              ) : (
                <>
                  <MenuIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                </>
              )}
            </i>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
