const sequelize= require('../config/psql').sequelize;
const Sequelize= require('../config/psql').Sequelize;
const routeLog=sequelize.define("routeLog",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:false,
        primaryKey:true
    },
    profile:{
        type:Sequelize.STRING(100),
        allowNull:false
    },
    start:{
        type:Sequelize.JSONB,
        allowNull:true
    },
    end:{
        type:Sequelize.JSONB,
        allowNull:true
    },
    result:{
        type:Sequelize.JSONB,
        allowNull:true
    },
    status:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    }
})

module.exports = routeLog;