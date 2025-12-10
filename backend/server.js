const express = require("express");
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const dbConnect = require("./config/database");
const ApiError = require("./utils/ApiError");
const errorMiddleware = require("./middlewares/errorMiddleware");

require("dotenv").config({ path: "config.env" });

const app = express();

// middlewares :

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    console.log(`mode : ${process.env.NODE_ENV}`)
}

app.use(express.json());

// handle routes :

    // handle product routes :

    const productRoutes = require("./api/ProductRoutes");
    app.use("/api/v1/products", productRoutes);

app.all(/.*/, (req, res, next) => {
    next(new ApiError(`can't find this route : ${req.originalUrl}`, 404))
})

// global error middleware handling :

app.use(errorMiddleware);

// connect to the DB : 

const server = () => {
    return app.listen(PORT, () => {
        console.log(`the server is running on the port ${PORT}`);
    });
}

dbConnect().then(() => {
    server();
}).catch((err) => {
    console.log("failed to start the server : ", err);
});

// Handle rejection outside express
process.on('unhandledRejection', (err) => {
    console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
    server.close(() => {
        console.error('Shutting down....');
        process.exit(1);
    });
});