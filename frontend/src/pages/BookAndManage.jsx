import { NavBar } from "../components/NavBar";
import booking_img from "../assets/booking.jpeg"
export function BookAndManage() {
   return (
        <div className="home h-full w-full flex">
            <div className="h-[100vh] w-[100%]  fixed top-0">
                <img src={booking_img} alt="" className="w-[100%] h-[100vh]" />
            </div>
            <NavBar pageName="BookAndManage" />
        </div>
    );
}