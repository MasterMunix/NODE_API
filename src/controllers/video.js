const {getAllVideos} = require('../services/video');
const getList = (req, res) => {

    res.send(getAllVideos());
    
}; 
const getDetail = (req, res) => {
    res.send({
        data: "KLK"
    })
}; 
const updateItem = (req, res) => {
    res.send({
        data: "KLK"
    })
}; 
const createItem = (req, res) => {
    res.send({
        data: "KLK"
    })
}; 
const deleteItem = (req, res) => {
    res.send({
        data: "KLK"
    })
}; 


module.exports = {getList, getDetail, updateItem, createItem, deleteItem};