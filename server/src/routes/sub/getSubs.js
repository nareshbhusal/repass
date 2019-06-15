const Sub = require('../../models/Sub');

const getSubs = async(req, res) => {
    try {
        const subs = await Sub.findAll();
        return res.send(subs);
    } catch(err) {
        console.log(err);
        return res.send('awkwarrrrd');
    }
}

module.exports = getSubs;