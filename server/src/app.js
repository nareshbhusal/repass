const app = require('./index');
let { port } = require('./config');

port = port || 5000;
app.listen(port, () => {
    console.log(`listening at port ${port}`);
})