import React, { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar";
import home_img from "../assets/homepage.jpeg";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem("hasSeenPopup");

        if (!hasSeenPopup) {
            setModalIsOpen(true);
            localStorage.setItem("hasSeenPopup", "true");
        }

        const handleBeforeUnload = () => {
            // Remove the 'hasSeenPopup' key from localStorage when the user leaves the page
            localStorage.removeItem("hasSeenPopup");
        };

        // Add an event listener for beforeunload
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            // Cleanup function to remove the event listener when the component unmounts
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="home h-full w-full flex">
            <div className="h-[100vh] w-[100%]  fixed top-0">
                <img src={home_img} alt="" className="w-[100%] h-[100vh]" />
            </div>
            <NavBar pageName="Home" />
            {/*Create a popup window when the users open the page*/}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Welcome Popup"
                className="h-[40%] w-[40%] absolute top-[35%] left-[30%] bg-[#333333] border-transparent border-2 rounded-2xl bg-opacity-40 p-8"
            >
                <h2 className="text-3xl text-white bg-blue-300 p-4 rounded-2xl mb-4">
                    Welcome to Pushpaka Vimana!
                </h2>
                <p className="text-white font-sans">
                    This is an internship project made using the MERN(Mongo DB, Express JS,
                    React JS, Node JS) stack, <br /> The Main objective of this
                    Project is to make working prototype an airline booking
                    webisite's User :
                    <span className="font-bold text-blue-500 underline bg-white bg-opacity-60 px-4 mx-2">
                        Login, Sign-Up and Profile editing, deleting
                    </span>
                    (or for any other website) features.
                    <br />
                    The other part of the pages of are generally static other
                    than the Navigation Bar Visible on the top.
                </p>
                <button
                    onClick={closeModal}
                    className="py-2 border-transparent bg-blue-300 px-8 m-4 rounded-2xl hover:bg-red-300"
                >
                    OK !
                </button>
            </Modal>
        </div>
    );
}
