const path = require('path');
const indexRouter = require('express').Router();

indexRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = indexRouter;
