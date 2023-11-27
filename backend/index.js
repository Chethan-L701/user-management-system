import express from "express";
import UserRoute from "./routes/UserRoute.js";
import cors from "cors";

const PORT = 5000;
let server = express();
server.use(cors());
server.get("/", (request, response) => {
    return response.status(200).send({
        message: "Request Successfull",
    });
});

server.use("/user", UserRoute);

server.listen(PORT, () => {
    console.log(`listening to the port :${PORT} at localhost`);
});
