const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const colors = require("colors");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
const cors = require("cors");

const healthRoutes = require("./routes/healthRoutes");
const userRoutes = require("./routes/userRoutes");
const fileRoutes = require("./routes/fileRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDb();

app.get('/', (req, res) => {
    res.send('Server API is running');
});

app.use('/api/check', healthRoutes);
app.use('/api/users', userRoutes);
app.use('/api/files', fileRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV||"development"} mode on port ${PORT}...`.yellow.bold));