import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Banner from "../Common/Banner";
import solar from "../assets/solar.avif";
const MainLayout = () => {
  return (
    <div className=" p-2 relative bg-no-repeat  bg-cover bg-center bg-fixed -top-2" style={{ backgroundImage: `url(${solar})` }}>
      {/* Overlay */}
      <div className="absolute inset-0  bg-black/60"></div>

      {/* Content with z-index to appear above overlay */}
      <div className="relative z-10 container mx-auto">
        <Navbar />
        <div className=" -mt-20 flex flex-col lg:flex-row justify-center items-center min-h-screen">
          <Banner />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
