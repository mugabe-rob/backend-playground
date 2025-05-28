'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return{...this.get(), id: undefined}
    }
  }
  User.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
  type: DataTypes.STRING,
  validate: {
    is: {
      args: /^\d{10}$/,
      msg: 'Contact number must be 10 digits'
    }
  },
  allowNull: false,
},
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};