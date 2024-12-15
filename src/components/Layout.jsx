import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useData } from "../contexts/DataProvider";

const Layout = () => {
  const { footerHeight, navHeight } = useData();
  return (
    <div>
      <Navbar />
      <div
        style={{
          minHeight: `calc(100vh - ${footerHeight}px)`,
          paddingTop: `calc(${navHeight}px + 0.5rem)`,
        }}
        className={`w-full pb-4`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
