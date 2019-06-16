const Listing = require('../../models/Listing');


const getListing = async (req, res) => {
    
    try {
        const { id } = req.params;
        const listing = await Listing.findOne({
            where: {
                id
            }
        });
        return res.send(listing);
    } catch(err) {
        console.log(err);
        return res.send('Listing not found');
    }
}

module.exports = getListing;