const {MOCKE_VIDEO} = require('../models/video');

const getAllVideos = () => {
    return MOCKE_VIDEO;
};

module.exports = {getAllVideos};