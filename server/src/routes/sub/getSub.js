const Sub = require('../../models/Sub');

const getSub = async(req, res) => {
    
    let { batchNum, postsNum } = req.body;

    batchNum = batchNum || 0;
    postsNum = postsNum || 20;

    try {
        const sub = await Sub.findOne({
            where: {
                name: req.params.sub
            }
        });
        // determine if current user is subbed
        
        if (sub) {
            sub.dataValues.isSubbed = false;
            if (req.session) {
                if (req.session.user) {
                    if (req.session.user.username) {
                        if (sub.users) {
                            if (sub.users.length) {
                                if (sub.users.indexOf(req.session.user.username) !==-1) {
                                    sub.dataValues.isSubbed = true;
                                }
                            }
                        }
                    }
                }
            }
            return res.status(200).send(sub);
        }
        return res.status(404).send({err: 'sub not found'});
    } catch (err) {
        console.log(':(');
        console.log(err);
    }
}

module.exports = getSub;