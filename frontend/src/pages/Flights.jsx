import { NavBar } from "../components/NavBar";
import flight_img from "../assets/flights.jpeg"
export function Flights() {
       return (
        <div className="h-full w-full flex">
            <div className="h-[100vh] w-[100%]  fixed top-0">
                <img src={flight_img} alt="" className="w-[100%] h-[100vh]" />
            </div>
            <NavBar pageName="Flights" />
        </div>
    );
}