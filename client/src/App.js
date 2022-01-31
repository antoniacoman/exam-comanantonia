import logo from './logo.svg';
import './App.css';
import { Switch, Router, Routes, Route } from 'react-router-dom'
import { StaticRouter } from 'react-router'
import { useEffect, useState } from 'react';
import DBstore from './components/Playlists/DBstore'
import Song from './components/Playlists/Song';
import AddSongForm from './AddSongForm'
import store from './components/Playlists/DBstore';
import AllSongs from './components/AllSongs';




function App() {

  const [ids, setIds] = useState([])

  useEffect(() => {
    DBstore.getSongs();
    DBstore.emitter.addListener('GET_SONGS_SUCCESS', () => {
      setIds(DBstore.data)
    })
  }, [])

  const addSong = (song) => {
    DBstore.addSong(song)
  }

  return (
    <>
      <h1>Exam</h1>
      <a href = "/3">3</a>
      
        <Routes>
          {ids.map((song) => {
            let id = song.SongID
            return <Route path={"/" + id} element={<Song key={song.SongID} member={song} />} />
          })}
        </Routes>

        {/* <Routes>
          <Route path="/" exact>
              <AllSongs />
            </Route>
        </Routes> */}

        <h3>Add a song</h3>
        <AddSongForm onAdd={addSong} />

    </>
  );

}

export default App;
