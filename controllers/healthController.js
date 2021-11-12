const async_handler = require("express-async-handler");

const getHealth = async_handler(async (req, res) => {
    const response = {
        "message": "Api route works"
    }
    res.json(response);
})


const get404 = async_handler(async (req, res) => {
    res.status(404);
    throw new Error("A sample 404 route")
})


const get500 = async_handler(async (req, res) => {
    throw new Error("A sample 500 error")
})


module.exports = {
    getHealth,
    get404,
    get500
}