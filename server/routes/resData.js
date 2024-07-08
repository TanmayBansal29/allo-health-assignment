const express = require("express");
const router = express.Router();
const fs = require('fs')
const path = require('path')

function readJSONFile(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if(err) reject(err);
            resolve(JSON.parse(data))
        })
    })
}

const resDataPath = path.join('data', 'allo-fullstack-dataset.json')

router.get('/resData', async (req, res) => {
    try{
        const data = await readJSONFile(resDataPath)
        res.json(data)
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Data Not Fetched",
        })
    }
})

module.exports = router