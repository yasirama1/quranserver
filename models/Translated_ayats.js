module.exports = (sequelize, DataTypes) => {
  const tas = sequelize.define(
    'translated_ayats',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      surat_no: {
        type: DataTypes.INTEGER
      },
      ayat_no: {
        type: DataTypes.INTEGER
      },
      translation: {
        type: DataTypes.STRING
      },
      language: {
        type: DataTypes.STRING
      },
      translated_by: {
        type: DataTypes.STRING
      },
    },
    {
      timestamps: false
    }
  )

  return tas
}
