import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Recipe = db.define('recipes',{
    title: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Recipe;

(async()=>{
    await db.sync();
})();