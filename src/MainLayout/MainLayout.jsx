import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Banner from "../Common/Banner";
import solar from "../assets/solar.avif"; // Import the image

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${solar})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div> 

      {/* Content with z-index to appear above overlay */}
      <div className="relative z-10">
        <Navbar />
        <div className="flex  justify-center items-center min-h-screen">
          <Banner />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
