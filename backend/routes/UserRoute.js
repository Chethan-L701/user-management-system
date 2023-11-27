import express from "express";
import User from "../models/UserModel.js";

const userRoute = express.Router("/user");

userRoute.use(express.json());

userRoute.get("/", (request, response) => {
    return response.status(200).send({
        messege: "Connected to user Route",
    });
});

userRoute.get("/all", async (request, response) => {
    let data = await User.find({});
    return response.status(200).json({
        messege: "Connected to user route",
        data: data,
    });
});

userRoute.get("/login/:userid", async (request, response) => {
    const id = request.params.userid;
    try {
        const res = await User.findOne({ UserID: id });
        if (!res || res == {}) {
            return response.status(400).send({
                messege: `Could not find the user with id : ${id}`,
            });
        }
        return response.status(200).json({ data: res });
    } catch (error) {
        return response.status(500).send({
            message: "something went wrong",
            ereor: error,
        });
    }
});

userRoute.post("/create", async (request, response) => {
    try {
        let { FirstName, LastName, Email, Mobile, UserID, Password } =
            request.body;
        if (
            !FirstName ||
            !LastName ||
            !Email ||
            !Mobile ||
            !UserID ||
            !Password
        ) {
            return response.status(400).send({
                message: "provide all the values",
            });
        }
        const record = await User.create({
            FirstName,
            LastName,
            Email,
            Mobile,
            UserID,
            Password,
        });
        return response.status(201).send({
            messege: "Entry created succesfully",
            data: record,
        });
    } catch (error) {
        return response.status(500).send({
            messege: "Failed to create the record",
            error: error,
        });
    }
});

userRoute.delete("/delete/:id", async (request, response) => {
    let id = request.params.id;
    try {
        await User.deleteOne({ _id: id });
        return response.status(200).send({
            messege: "Deletion sucsesfull",
        });
    } catch (error) {
        return response.status(402).send({
            message: "Failed to delete the entry",
            error: error,
        });
    }
});

userRoute.put("/update/:id", async (request, response) => {
    let id = request.params.id;
    try {
        let res = User.findById(id);
        if (!res || res == {}) {
            return response.status(404).send({
                messege: `Could not find the record with id : ${id}`,
            });
        } else {
            let { FirstName, LastName, Email, Mobile, UserID, Password } =
                request.body;
            if (
                !FirstName ||
                !LastName ||
                !Email ||
                !Mobile ||
                !UserID ||
                !Password
            ) {
                return response.status(400).send({
                    message:
                        "provide all the values : FirstName , LastName, Email, Mobile, UserID, Password",
                });
            }
            const record = await User.findOneAndUpdate(
                { _id: id },
                {
                    FirstName,
                    LastName,
                    Email,
                    Mobile,
                    UserID,
                    Password,
                }
            );
            let updatedRecord = await User.findById(id);
            return response.status(200).send({
                message: `Succesfully updated the record with id : ${id}`,
                data: {
                    old: record,
                    new: updatedRecord,
                },
            });
        }
    } catch (error) {
        return response.status(500).send({
            messege: `Something went wrong in the server`,
            error: error,
        });
    }
});

export default userRoute;
