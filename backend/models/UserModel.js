import { connect, Schema, model } from "mongoose";

const userDriver = "mongodb+srv://Chethan-L701:QW12er@user.vmmawc5.mongodb.net/?retryWrites=true&w=majority&appName=user";

try {
    let driver = userDriver;
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
