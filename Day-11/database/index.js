const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "123456789", {
        host: "localhost",
        dialect: "postgres" //dialect:"mysql" or any db
    }
);

sequelize.sync();
(async() => {
    try {
        await sequelize.authenticate();
        console.log("connection establised with DB");
    } catch (err) {
        console.error("Unable to connect to DB");

    }
})();

module.exports = sequelize;