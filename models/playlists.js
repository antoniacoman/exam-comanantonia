const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize")

const Playlists = sequelize.define("Playlists", {
    PlaylistID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },

    Description: {
        type: DataTypes.STRING,
        validate: {
            len:[3,255]
        },
        allowNull: false
    },

    CreateDate: {
        type: DataTypes.DATE
    }
})

module.exports = Playlists;