const Listing = require('../../models/Listing');
const sequelize = require('sequelize');

const postsPerBatch = 20;

const getQueryConfig = ({ username, search='', t, sub, page=1 }) => {
    const days= t;
    const offset = postsPerBatch * (page-1);
    const queryConfig = {
        where: {
            title: {
                [sequelize.Op.iLike]: `%${search}%`
            }
        },
        attributes: ['id'],
        limit:postsPerBatch,
        offset
    }
    if (days) {
        let startTime = new Date();
        startTime.setHours(startTime.getHours() - days*24);
        let endTime = new Date();
        startTime=startTime.getTime().toString();
        endTime=endTime.getTime().toString();

        queryConfig.order = [
            ['score', 'DESC']
        ];
        if (days !=='all') {
            queryConfig.where.createdAt = {
                [sequelize.Op.between]: [startTime, endTime]
            }
        }

    } else {
        // sortorder - `new`
        queryConfig.order = [
            ['createdAt', 'DESC']
        ]
    }
    if (sub && sub!=='all') {
        queryConfig.where.sub = sub;
    } else if (username) {
        queryConfig.where.user = username;
    }
    return queryConfig;
}

const getListings = async(req, res) => {
    try {
        const { username, sub } = req.params;
        let { t, search, page } = req.query; //top of time t
        const queryConfig = getQueryConfig({ username, sub, t, search, page });
        const listings = await Listing.findAll(queryConfig) || [];
        return res.send(listings);

    } catch(err) {
        console.log(err);
        return res.status(500).send({ err: 'server error' });
    }
}

module.exports = getListings;