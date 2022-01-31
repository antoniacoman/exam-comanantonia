import {useState} from 'react'

function AddSongForm (props) {
    const { onAdd } = props
    //const [songID, setSongID] = useState('')
    const [playlistID, setPlaylistID] = useState('')
    const [title, setTitle] = useState('')
    const [songUrl, setSongUrl] = useState('')
    const [musicGenre, setMusicGenre] = useState('')

    const add = (evt) => {
        onAdd({
            //songID,
            playlistID,
            title,
            songUrl,
            musicGenre
        })
        //setSongID('')
        setPlaylistID('')
        setTitle('')
        setSongUrl('')
        setMusicGenre('')
    }

    return (
        <div>
            <div>
                <input type='text' placeholder='playlistID' value={playlistID} onChange={(evt) => setPlaylistID(evt.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='title' value={title} onChange={(evt) => setTitle(evt.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='songUrl' value={songUrl} onChange={(evt) => setSongUrl(evt.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='musicGenre' value={musicGenre} onChange={(evt) => setMusicGenre(evt.target.value)} />
            </div>
            <div>
                <input type='button' value='add me!' onClick={add} />
            </div>
        </div>
    )
}

export default AddSongForm