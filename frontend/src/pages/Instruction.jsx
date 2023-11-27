import { NavBar } from "../components/NavBar";
import safety_img from "../assets/safety.jpeg"
export function Instruction() {
   return (
        <div className="home h-full w-full flex">
            <div className="h-[100vh] w-[100%]  fixed top-0">
                <img src={safety_img} alt="" className="w-[100%] h-[100vh]" />
            </div>
            <NavBar pageName="Instructions" />
        </div>
    );
}