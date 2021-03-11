const app = require("./app");

const PORT = process.env.PORT || 1000;

const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});
