const env = require("dotenv").config();

const config = {
    PORT_APP: process.env.PORT_APP,
    VERSION_APP: process.env.VERSION_APP,
    API_KEY: process.env.API_KEY,
    HOST_DB: process.env.HOST_DB,
    PORT_DB: process.env.PORT_DB,
    NAME_DB: process.env.NAME_DB,
    USER_DB: process.env.USER_DB,
    PASS_DB: process.env.PASS_DB,
    HOST_ORS: process.env.HOST_ORS,
    PORT_ORS: process.env.PORT_ORS,
    LOGGIN_DB: process.env.LOGGIN_DB,
};
module.exports = config;
