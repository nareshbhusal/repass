const getTheme = async(req, res) => {
    try {
        const theme = req.session.theme;
        if (theme === 'light' || theme || 'dark') {
            return res.send(theme);
        } else {
            throw 'Invalid theme falling back to default';
        }
        
    } catch(err) {
        console.log(err);
        return res.send('light');
    }
}

module.exports = getTheme;