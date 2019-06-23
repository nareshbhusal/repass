const changeTheme = async (req, res) => {
    try {
        const {theme} = req.params;
        req.session.theme = theme;
        return res.status(200).send('changed theme');
    } catch(err) {
        console.log(err);
    }
    
}

module.exports = changeTheme;