// import DBstore from './components/Playlists/DBstore'
// import Song from './components/Playlists/Song';
import {useSelector} from 'react-redux'
import SongItem from './SongItem'

function AllSong(props){

    const songs = useSelector((state) => 
        state.songs.songs
    )

    return(<>
     <ul >
        {songs.map((song) => (
          <SongItem
            key={song.id}
            playlistID={song.playlistID}
            title={song.title}
            songUrl={song.songUrl}
            musicGenre={song.musicGenre}
          />
        ))}
      </ul>
    </>)
}

export default AllSong
