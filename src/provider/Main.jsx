import React, { useState, useEffect } from "react";
import Header from "@/Components/Lending/Header/Header";
import Navbar from "@/Components/Lending/Header/Navbar";
import { NextUIProvider } from "@nextui-org/react";
// import { useDispatch } from "react-redux";
// import { loadUser } from "../redux/actions/authActions";
function Main({ Component, pageProps }) {
  // const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loadingshow, setLoadingshow] = useState(true);

  useEffect(() => {
    // dispatch(loadUser());
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadingshow(false);
  //   }, 1000);
  // }, []);

  return (
    <>
      {loadingshow && (
        <>
          <Navbar setLoadingshow={setLoadingshow} />
          {/* <Header setLoadingshow={setLoadingshow} /> */}
        </>
      )}
      <NextUIProvider>
        <Component
          {...pageProps}
          setLoadingshow={setLoadingshow}
          loadingshow={loadingshow}
        />
      </NextUIProvider>
    </>
  );
}

export default Main;
