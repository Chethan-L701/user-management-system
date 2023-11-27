import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { GiRingedPlanet } from "react-icons/gi";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { LoginComponent } from "./Login";
import { BiUser } from "react-icons/bi";
import logo from "../assets/logo.png";

function PageIcon({ name }) {
    if (name == "Home") {
        return (
            <div className="text-white text-5xl font-bold pl-8 pr-10">
                <HiHome />
            </div>
        );
    } else if (name == "BookAndManage") {
        return (
            <div className="text-white text-5xl font-bold pl-8 pr-10">
                <MdOutlineCollectionsBookmark />
            </div>
        );
    } else if (name == "Flights") {
        return (
            <div className="text-white text-5xl font-bold pl-8 pr-10">
                <GiRingedPlanet />
            </div>
        );
    } else if (name == "Instructions") {
        return (
            <div className="text-white text-5xl font-bold pl-8 pr-10">
                <HiMiniInformationCircle />
            </div>
        );
    } else if (name == "Profile") {
        return (
            <div className="text-white text-5xl font-bold pl-8 pr-10">
                <BiUser />
            </div>
        );
    }
}
export function NavBar({ pageName }) {
    return (
        <div className="h-[18vh] w-full bg-transparent flex items-center transition-all duration-500 hover:bg-blue-300 sticky top-0">
            <PageIcon name={pageName} />
            <img src={logo} alt="" className="pl-4 m-0 w-[8%]" />
            <h1 className="text-white text-5xl font-bold  flex">
                Pushpaka Vimana
            </h1>
            <div className="font-medium text-white text-2xl flex  h-max w-[55%] justify-end mr-[2%]">
                <Link to="/">
                    <button className="font-medium p-2 pb-0 hover:border-b-4 hover:border-red-300">
                        Home
                    </button>
                </Link>
                <Link to="/bookings">
                    <button className="font-medium p-2 pb-0 hover:border-b-4 hover:border-red-300">
                        Book & Manage
                    </button>
                </Link>
                <Link to="/flights">
                    <button className="font-medium p-2 pb-0 hover:border-b-4 hover:border-red-300">
                        Where We Fly
                    </button>
                </Link>
                <Link to="/instructions">
                    <button className="font-medium p-2 pb-0 hover:border-b-4 hover:border-red-300">
                        Guidelines
                    </button>
                </Link>
                <LoginComponent loginStatus={localStorage.getItem("login")} />
            </div>
        </div>
    );
}
