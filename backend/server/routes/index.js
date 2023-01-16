const userRouter = require('./user.routes');

function route(app) {
    app.use('/quiz', userRouter);
    app.use((err, req, res, next) => {
        console.log(err);
        return res.status(500).send("something went wrong")
    });

    app.use((req, res, next) => {
        res.status(400).send("Sorry can't find that!")
    })
}

module.exports = route;