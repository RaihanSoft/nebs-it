import { Outlet } from "react-router-dom"
import Navbar from "../Common/Navbar"
import Footer from "../Common/Footer"
import Banner from "../Common/Banner"

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center " >
                <Banner />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
