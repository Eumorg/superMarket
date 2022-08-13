'use strict';
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, { through: 'Carts', foreignKey: 'device_id' });
    };
  }
  Device.init({
    model: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    type: DataTypes.STRING,
    color: DataTypes.STRING,
    picture: DataTypes.STRING,
    picture_2: DataTypes.STRING,
    picture_3: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};