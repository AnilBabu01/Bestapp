import React, { useState, useEffect } from "react";
import logo from "../../../pages/images/Logo (2).png";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
// import { Link } from "react-scroll";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const Navbar = () => {
  const navigate = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY > 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  });

  const [isMobile, setisMobile] = useState(false);
  const [token, settoken] = useState("");
  useEffect(() => {}, [isMobile]);

  const logout = () => {
    localStorage.removeItem("tokengame");
    toast.success("You Have Logout Successfully!!", {
      autoClose: 1000,
    });
    navigate.push("/");
    window.location.reload();
  };
  useEffect(() => {
    settoken(localStorage.getItem("tokengame"));
  }, []);

  return (
    <div className={fix ? styles.fixedNavbar : styles.Header}>
      <div className={styles.Logo}>
        <Link href="/" className={styles.logoplex}>
          <Image src={logo} height={80} width={300} />
        </Link>
      </div>

      <div className={styles.HeaderLink}>
        <ul>
          {/* <li>
            <Link
              href="/"
              //   onClick={() => setShowMenu(false)}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
            >
              Home
            </Link>
          </li> */}
          <li>
            <Link
              href="/"
              //   onClick={() => setShowMenu(false)}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              className={styles.downloadNavbar}
            >
              <img
                className={styles.downloadImage}
                src="/images/icons8-download (1).gif"
                alt=""
                srcset=""
              />
              <p>
              Download
              </p>
            </Link>
          </li>
          {/* <li>
            <Link
              href="#"
              //   onClick={() => setShowMenu(false)}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
            >
              About
            </Link>
          </li> */}
          {/* <li>
            <Link
              href="#"
              //   onClick={() => setShowMenu(false)}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
            >
              contact
            </Link>
          </li> */}
          {/* <li>
            <Link
              href="#"
              //   onClick={() => setShowMenu(false)}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
            >
              Policy
            </Link>
          </li> */}
          {token && (
            <>
              <li>
                <Link
                  href="/Admin/Game/AddGame"
                  //   onClick={() => setShowMenu(false)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                >
                  Add Game
                </Link>
              </li>
              <li>
                <Link
                  href="/Admin/Slider/AddSlider"
                  //   onClick={() => setShowMenu(false)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                >
                  Add Slider
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={styles.btn}>
        {token ? (
          <>
            <button
              onClick={() => logout()}
              type="button"
              style={{ border: "2px solid #525ceb", color: "#000" }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate.push("/Admin/Login")}
              type="button"
              style={{ border: "2px solid #525ceb", color: "#000" }}
            >
              Login
            </button>
          </>
        )}

        {/* <button type="button" style={{ background: "#525ceb" }}>
          SignUp
        </button> */}
      </div>
      {/* </div> */}
      {showMenu && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuShow}>
            <div className={styles.mobileLogo}>
              <div>
                <Link href="#">
                  <Image src={logo} height={100} width={150} />
                </Link>
                <div className={styles.mobileContent}>
                  <p>Best Earning App</p>
                </div>
              </div>
              <div className={styles.mobileClose}>
                <span
                  onClick={() => setShowMenu(false)}
                  className={styles.navCloseMenu}
                >
                  <MdClose />
                </span>
              </div>
            </div>
            <div className={styles.mobileNavlink}>
              <ul>
                {/* <li>
                  <Link
                    href="/"
                    onClick={() => setShowMenu(false)}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                  >
                    Home
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    href="/"
                    onClick={() => setShowMenu(false)}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                  >
                    About
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    href="/"
                    onClick={() => setShowMenu(false)}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                  >
                    Contact
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    href="#"
                    onClick={() => setShowMenu(false)}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                  >
                    Policy
                  </Link>
                </li> */}
                {token && (
                  <>
                    <li>
                      <Link
                        href="/Admin/Game/AddGame"
                        onClick={() => setShowMenu(false)}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        spy={true}
                      >
                        Add Game
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Admin/Slider/AddSlider"
                        onClick={() => setShowMenu(false)}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        spy={true}
                      >
                        Add Slider
                      </Link>
                    </li>
                  </>
                )}
                {token ? (
                  <>
                    <li>
                      <Link
                        href="#"
                        onClick={() => {
                          setShowMenu(false);
                          logout();
                        }}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        spy={true}
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        href="/Admin/Login"
                        onClick={() => {
                          setShowMenu(false);
                        }}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        spy={true}
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className={styles.desktopMenu}>
        <span onClick={() => setShowMenu(!showMenu)} className={styles.navMenu}>
          <FiMenu />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
