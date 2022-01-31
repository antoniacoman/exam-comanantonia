const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize")

const Songs = sequelize.define("Songs", {
    SongID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },

    PlaylistID: {
        type: DataTypes.INTEGER,
        references: { model: 'Playlists', key: 'PlaylistID'},
        allowNull: true
    },

    Title: {
        type: DataTypes.STRING,
        validate: {
            len:[5,255]
        },
        allowNull: false
    },

    SongUrl: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        allowNull: false
    },

    MusicGenre: {
        type: DataTypes.ENUM("POP", "ALTERNATIVE", "ROCK")
    }

})

module.exports = Songs;