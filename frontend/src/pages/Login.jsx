import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import LoginImage from "../assets/login_img.jpeg";
import axios from "axios";

export function LoginPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [userName, setUserName] = useState("");
    const [passwd, setpasswd] = useState("");
    return (
        <div className="h-full w-full flex">
            <div className="h-[100vh] w-[60%] flex items-center justify-center">
                <img src={LoginImage} alt="" className="h-[100vh] w-[100%]"/>
            </div>
            <div className="h-[100vh] w-[40%] flex justify-center items-center">
                <div className="h-[60vh] w-[80%] flex justify-center items-center ml-[10%]]">
                    <div className="h-[30vh] w-[80%] flex-col items-center justify-center gap-4">
                        <Link to="/">
                            <img
                                src={logo}
                                alt=""
                                className="pl-4 m-0 w-[25%]"
                            />
                        </Link>
                        <input
                            className="border-2 border-gray-900 rounded-2xl text-2xl  m-4 p-4"
                            type="text"
                            placeholder="user name"
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                        <br />
                        <input
                            className="border-2 border-gray-900 rounded-2xl text-2xl  m-4 p-4"
                            type="password"
                            placeholder="password"
                            onChange={(e) => {
                                setpasswd(e.target.value);
                            }}
                        />
                        <br />
                        <button
                            className="ml-[27%] text-white transition text-2xl bg-red-400 hover:bg-cyan-600 rounded-3xl p-2 pl-4 pr-4"
                            onClick={async (e) => {
                                console.log({ name: userName, passwd: passwd });
                                try {
                                    await axios
                                        .get(
                                            `http://localhost:5000/user/login/${userName}`
                                        )
                                        .then((respose) => {
                                            setUser(respose.data.data);
                                        })
                                        .catch((error) => {
                                            console.log(
                                                "You may have entered invalid id or password"
                                            );
                                            setUser({});
                                        });
                                    if (user != {}) {
                                        if (user.Password == passwd) {
                                            alert("login succecfull");
                                            localStorage.setItem("login", true);
                                            localStorage.setItem("user_info",JSON.stringify( {
                                                id: user._id,
                                                FirstName: user.FirstName,
                                                LastName: user.LastName,
                                                Email: user.Email,
                                                Mobile: user.Mobile,
                                                UserID: user.UserID,
                                                Password: user.Password,
                                            }));
                                            navigate("/");
                                        } else {
                                            alert("Invalid Password or try login agian");
                                        }
                                    }
                                } catch (error) {}
                            }}
                        >
                            Login
                        </button>
                        <Link to="/signup">
                            <button className="bg-blue-600 p-2 rounded-3xl ml-[10%] mt-[5%] hover:bg-blue-400">
                                Don't have an account? Sign Up.
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
