const app = require('./index');
const { PORT } = process.env;

const port = PORT || 5000;
app.listen(port, () => {
    console.log(`listening at port ${port}`);
})