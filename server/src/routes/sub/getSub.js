const Sub = require('../../models/Sub');

const getSub = async(req, res) => {
    
    // const { batchNum } = req.body;
    let { batchNum, postsNum } = req.query;
    batchNum = batchNum || 0;
    postsNum = postsNum || 20;

    const sub = await Sub.findOne({
        where: {
            name: req.params.sub
        }
    });

    res.send(sub);
}

module.exports = getSub;