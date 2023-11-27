import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
export function LoginComponent({ loginStatus }) {
    if (!loginStatus) {
        return (
            <Link to="/login">
                <button className="text-white bg-blue-400 hover:bg-red-300 p-2 pl-4 pr-4 rounded-3xl ml-6">
                    Login
                </button>
            </Link>
        );
    } else {
        let userName = JSON.parse(localStorage.getItem("user_info")).UserID;
        return (
            <Link to="/profile">
                <button className="text-white bg-blue-400 hover:bg-red-300 p-2 pl-4 pr-4 rounded-3xl ml-6">
                    <div className="flex gap-2">
                        <BiUser className="pt-2" /> <p>{userName}</p>
                    </div>
                </button>
            </Link>
        );
    }
}
