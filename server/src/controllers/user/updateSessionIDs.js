
const updateUser = require('./updateUser');

const updateSessionIDs = async (req, user) => {

    let session_ids = user.session_ids;

    if (session_ids) {
        session_ids = session_ids.split(',');
    } else {
        session_ids=[];
    }
    if (session_ids.length>4) {
        session_ids.pop();
    }
    session_ids.unshift(req.sessionID);
    session_ids = session_ids.toString();
    await updateUser(user.username, { session_ids });
}

module.exports = updateSessionIDs;