const Sub = require('../../models/Sub');

const getSub = async(req, res) => {
    
    // const { batchNum } = req.body;
    let { batchNum, postsNum } = req.query;
    batchNum = batchNum || 0;
    postsNum = postsNum || 20;

    try {
        const sub = await Sub.findOne({
            where: {
                name: req.params.sub
            }
        });
    
        return res.send(sub);
    } catch (err) {
        console.log(':(');
    }
}

module.exports = getSub;