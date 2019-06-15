const Listing = require('../../models/Listing');


const getListing = async (req, res) => {
    const { type, id } = req.params;
    return res.send(id);
}

module.exports = getListing;