import { connect, Schema, model } from "mongoose";
import data from "./drivers.json" assert { type: "json" };
try {
    let driver = data.userDriver;
    await connect(driver);
} catch (error) {
    console.log(error);
}
const User = model(
    "User",
    new Schema(
        {
            FirstName: String,
            LastName: String,
            Email: String,
            Mobile: Number,
            UserID: String,
            Password: String,
        },
        {
            timestamps: true,
        }
    )
);
export default User ;
