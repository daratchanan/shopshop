module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define("User", {
      firstname: {
         type: DataTypes.STRING,
         allowNull: false,
         validate:{
            max:16,
            min:3
         }
      },
      lastname: {
         type: DataTypes.STRING,
         allowNull: false,
         validate:{
            max:16,
            min:3
         }
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            max:16,
            min:6
         }
      },
      phone_number: {
         type: DataTypes.STRING,
         allowNull: false
      },
      address: {
      type: DataTypes.STRING
      }
   }, {
      tableName: "users",
   });

   User.associate = models => {
      User.hasMany(models.Order, { foreignKey: "user_id" })
      User.hasMany(models.CartItem, { foreignKey: "user_id" })
   }

   return User;
};


