const PlaylistDB = require("../models/playlists")
const SongDB = require("../models/songs")
var express = require("express");
const { Op } = require("sequelize");
const { route } = require("../app");
var path = require('path');
var router = express.Router();

router.get("/playlists", async (req, res, next) => {
    try {
        const playlists = await PlaylistDB.findAll({
            order: [
                ['PlaylistID', 'DESC']
            ]
        });

        res.status(200).json(playlists);
    } catch (err) {
        console.log(err)
        next(err);
    }
});

router.get("/songs", async (req, res, next) => {
    try {
        const songs = await SongDB.findAll();
        res.status(200).json(songs);
    } catch (err) {
        next(err);
    }
});


router.get("/songs/:id", async (req, res, next) => {
    try {
        const songs = await SongDB.findByPk(req.params.id);
        res.status(200).json(songs);
    } catch (err) {
        next(err);
    }
});

router.post("/playlists", async (req, res, next) => {
    try {
        await PlaylistDB.create(req.body);
        res.status(201).json({ message: "Playlist Created!" });
    } catch (err) {
        next(err);
    }
});

router.post("/songs", async (req, res, next) => {
    try {
        await SongDB.create(req.body);
        res.status(201).json({ message: "Song Created!" });
    } catch (err) {
        next(err);
    }
});

router.get("/playlists/:id/songs", async (req, res, next) => {
    try {
        const songs = await SongDB.findAll({ where: { PlaylistDB: `${req.params.id}` } })
        if (songs) {
            return res.status(200).json(songs);
        } else {
            return res.status(404).json({ message: "Not found" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error })
    }
})

router.put("/playlists/:id", async (req, res, next) => {
    try {
        const { Description, CreateDate } = req.body;
        await PlaylistDB.update({
            Description: Description,
            CreateDate: CreateDate

        }, {
            where: {
                PlaylistID: `${req.params.id}`
            }
        })
        return res.status(200).json({ message: "Successfully updated playlist!" });
    } catch (err) {
        console.log(err)
        next(err);
    }
})

router.delete("/playlists/:id", async (req, res, next) => {
    try {
        await PlaylistDB.destroy({ where: { PlaylistID: `${req.params.id}` } })
        return res.status(200).json({ message: "Successfully deleted playlist!" });
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.put("/playlists/:id/songs/:songID", async (req, res, next) => {
    try {
        const { PlaylistID, Title, SongUrl, MusicGenre } = req.body;
        const playlist = await PlaylistDB.findByPk(req.params.id);
        if (playlist) {
            const song = await SongDB.findByPk(req.params.songID, { where: { PlaylistID: `${playlist.PlaylistID}` } })
            if (song) {
                await SongDB.update({
                    PlaylistID: PlaylistID,
                    Title: Title,
                    SongUrl: SongUrl,
                    MusicGenre: MusicGenre,
                }, {
                    where: {
                        SongID: song.SongID
                    }
                })
            }
            return res.status(200).json({ message: "Successfully updated song!" })
        }
    } catch (err) {
        console.log(err);
        next(err)
    }
})

router.delete("/playlists/:id/songs/:songID", async (req, res, next) => {
    try {
        const playlist = await PlaylistDB.findByPk(req.params.id);
        if (playlist) {
            const song = await SongDB.findByPk(req.params.songID, { where: { PlaylistID: `${playlist.PlaylistID}` } })
            if (song) {
                await SongDB.destroy({ where: { SongID: song.SongID } })
            }
            return res.status(200).json({ message: "Successfully deleted song!" })
        }
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.post("/playlists/:id/songs", async (req, res, next) => {
    try {
        const playlist = await PlaylistDB.findByPk(req.params.id);
        if (playlist) {
            const song = await SongDB.create(req.body)
            if (song) {
                return res.status(201).json({ message: "Successfully inserted song!!" })
            }
        }
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.get("/playlists/:description/:createDate", async (req, res, next) => {
    try {
        const playlists = await PlaylistDB.findAll({
            where: {
                Description: req.params.description,
                CreateDate: req.params.createDate
            }
        })
        if (playlists) {
            return res.status(200).json(playlists);
        }
    } catch (err) {
        console.log(err)
        next(err)
    }
})

module.exports = router;