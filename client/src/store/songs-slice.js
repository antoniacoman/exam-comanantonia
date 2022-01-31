import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [
    {
        "PlaylistID": 1,
        "Title": "title1",
        "SongUrl": "https://www.youtube.com/",
        "MusicGenre": "POP"
    }
  ],
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    addSong(state, action) {
      const newSong = {
        ...action.payload,
        comments: [],
      };
      state.songs.push(newSong);
    },
  },
});

export const songsActions = songsSlice.actions;

export default songsSlice.reducer;