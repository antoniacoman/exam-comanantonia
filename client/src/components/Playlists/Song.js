import { useState } from 'react'

function Song(props) {
    const { member } = props;
    const [songID, setSongID] = useState(member.SongID);
    const [playlistID, setPlaylistID] = useState(member.PlaylistID)
    const [title, setTitle] = useState(member.Title);
    const [songUrl, setSongUrl] = useState(member.SongUrl);
    const [musicGenre, setMusicGenre] = useState(member.MusicGenre);

    return (<>
        <h1>Song</h1>
        <p>ID: {songID}</p>
        <p>PlaylistID: {playlistID}</p>
        <p>Title: {title}</p>
        <p>SongUrl: {songUrl}</p>      
        <p>MusicGenre: {musicGenre}</p>     
    </>)
}

export default Song;