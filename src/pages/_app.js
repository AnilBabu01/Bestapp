import "@/styles/globals.css";
import Main from "@/provider/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Main Component={Component} pageProps={pageProps} />
      <ToastContainer position="top-center" />
    </>
  );
}
