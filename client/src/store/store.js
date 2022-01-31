import { configureStore } from "@reduxjs/toolkit";

import songsReducer from "./songs-slice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
});

export default store;