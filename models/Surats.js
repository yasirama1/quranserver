module.exports = (sequelize, DataTypes) => {
  const surats = sequelize.define(
    'surats',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
    },
    {
      timestamps: false
    }
  )

  return surats
}
