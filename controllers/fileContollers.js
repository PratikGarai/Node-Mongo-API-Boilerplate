const File = require("../models/fileModel");
const fStorage = require("../config/fileStorage");
const async_handler = require("express-async-handler");
const path = require("path");

const sampleFileUplaod = async_handler((req, res) => {
    fStorage.upload(req, res, () => {
        const file = new File();
        file.meta_data = req.file;
        file
            .save()
            .then(() => {
                res.send({
                    message: "Uploaded successfully",
                    meta_data: file.meta_data
                })
            })
    });
})

const sampleFileDownload = async_handler(async(req, res) => {
    try {
        const file = await File.findById(req.params.id);
        const filepath = path.join(__dirname, '..', file.meta_data.path);
        res.set({
            'Content-Type': file.meta_data.mimetype
        });
        res.sendFile(filepath);
    } catch (error) {
        res.status(400);
        throw new Error('Error while downloading file. Try again later.');
    }
})

module.exports = {
    sampleFileUplaod,
    sampleFileDownload
}