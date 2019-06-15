const User = require('../models/User');

const updateSessionIDs = async (req, user) => {

    let session_ids = user.session_ids;
    if (session_ids) {
        session_ids = session_ids.split(',');
    } else {
        session_ids=[];
    }
    if (session_ids.length>4) {
        session_ids.pop();
        session_ids.unshift(req.sessionID);
    }
    session_ids = session_ids.toString();
    
    await User.update(
        { session_ids },
        {
            where: {
                username: user.username
        }
    }
    );
}

module.exports = updateSessionIDs;