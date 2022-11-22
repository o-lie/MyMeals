import {Sequelize} from "sequelize";

const db = new Sequelize('react_crud','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;