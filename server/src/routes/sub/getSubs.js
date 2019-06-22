const Sub = require('../../models/Sub');

const getSubs = async(req, res) => {
    try {
        const subs = await Sub.findAll();
        return res.status(201).send(subs);
    } catch(err) {
        console.log(err);
        return res.status(500).send('awkwarrrrd');
    }
}

module.exports = getSubs;