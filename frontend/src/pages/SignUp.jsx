import { NavBar } from "../components/NavBar";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signup_img from "../assets/signup.jpeg";

export function SignUp() {
    const navigate = useNavigate();
    let [FirstName, setFirstName] = useState("");
    let [LastName, setLastName] = useState("");
    let [Email, setEmail] = useState("");
    let [Mobile, setMobile] = useState(0);
    let [UserID, setUserID] = useState("");
    let [Password, setPassword] = useState("");
    return (
        <div className="relative">
            <div className="h-[100vh] w-[100%]  fixed top-0">
                <img src={signup_img} alt="" className="w-[100%] h-[100vh]" />
            </div>
            <NavBar pageName={"SignUp"} />
            <div className="flex items-center justify-center absolute left-[30%] w-[40%] bg-[#555555] bg-opacity-50  rounded-3xl text-white">
                <div className="m-[2%] text-2xl w-[100%] align-middle justify-center p-4">
                    <p>First Name : </p>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="mx-[4%] border-black border-2 p-[2%] rounded-3xl mb-4 text-black"
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                    <p>Last Name :</p>
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="mx-[4%] border-black border-2 p-[2%] rounded-3xl mb-4 text-black"
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                    <p>Email :</p>
                    <input
                        type="email"
                        placeholder="Email Id"
                        className="mx-[4%] border-black border-2 p-[2%] rounded-3xl mb-4 text-black"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <p>Phone :</p>
                    <input
                        type="number"
                        placeholder="Phone Number"
                        className="mx-[4%] border-black border-2 p-[2%] rounded-3xl mb-4 text-black"
                        onChange={(e) => {
                            setMobile(e.target.value);
                        }}
                    />
                    <p>User ID :</p>
                    <input
                        type="text"
                        placeholder="User ID"
                        className="mx-[4%] border-black border-2 p-[2%] rounded-3xl mb-4 text-black"
                        onChange={(e) => {
                            setUserID(e.target.value);
                        }}
                    />
                    <p>Password :</p>
                    <input
                        type="password"
                        placeholder="Password"
                        className="mx-[4%] border-black border-2 p-[2%] rounded-3xl mb-4 text-black"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <button
                    className="text-3xl bg-blue-300 hover:bg-blue-500 m-8 p-2 pl-6 pr-4 ml-[2%] rounded-3xl"
                    onClick={async (e) => {
                        try {
                            let userdata = {
                                FirstName,
                                LastName,
                                Email,
                                Mobile,
                                UserID,
                                Password,
                            };
                            console.log(userdata);
                            if (
                                !(FirstName == "") ||
                                !(LastName == "") ||
                                !(Email == "") ||
                                !(Mobile == 0) ||
                                !(UserID == "") ||
                                !(Password == "")
                            ) {
                                await axios
                                    .post(
                                        "http://localhost:5000/user/create",
                                        userdata
                                    )
                                    .then((response) => {
                                        if (response.status == 201) {
                                            alert("Submitted Successfully");
                                            navigate("/login");
                                        } else if (response.status == 400) {
                                            alert("Provide All the fields");
                                        }
                                    })
                                    .catch((error) => {
                                        console.log("error : ", error);
                                    });
                            } else {
                                alert("Provide All the fields");
                            }
                        } catch (error) {}
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
