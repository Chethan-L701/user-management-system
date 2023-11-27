import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Flights } from "./pages/Flights";
import { Home } from "./pages/Home";
import { BookAndManage } from "./pages/BookAndManage";
import { Instruction } from "./pages/Instruction";
import { LoginPage } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/Profile";
import { Edit } from "./pages/Edit";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/bookings" element={<BookAndManage />}></Route>
            <Route path="/flights" element={<Flights />}></Route>
            <Route path="/instructions" element={<Instruction />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/profile/edit" element={<Edit />}></Route>
        </Routes>
    );
}

export default App;
