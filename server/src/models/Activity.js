const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
       type:DataTypes.INTEGER,
       primaryKey:true,
       allowNull:false,
       autoIncrement:true,
       
         },
        name:{
          
            type: DataTypes.STRING,
            allowNull: false
    
        },
        
    difficulty: {
       //type: DataTypes.STRING,
           type: DataTypes.ENUM('1','2','3','4','5'),
           allowNull: false
    },
    duration: {
           type: DataTypes.TIME,
           allowNull: false
    },
    season: {
       //type: DataTypes.STRING,
           type: DataTypes.ENUM('Summer','Autumn','Winter','Spring'), 
          allowNull: false
    }
    
     
  });
};