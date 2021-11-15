const File = require("../models/fileModel");
const fStorage = require("../config/fileStorage");

const sampleFileUplaod = (req, res) => {
    fStorage.upload(req, res, () => {
        const file = new File();
        file.meta_data = req.file;
        file
            .save()
            .then(() => {
                res.send({
                    message: "Uploaded successfully"
                })
            })
    });
}

module.exports = {
    sampleFileUplaod
}