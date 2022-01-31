import { EventEmitter } from 'fbemitter'
import Axios from 'axios'

const SERVER = 'http://localhost:3000'

class DBStore {
    constructor() {
        this.data = [];
        this.axios = Axios.create();
        this.emitter = new EventEmitter();
    }

    async getSongs() {
        /* try{
             const response = await fetch("/api/songs");
 
             if(response.status === 500) {
                 throw response;
             }
 
             this.data = await response.json();
             this.emitter.emit("GET_SONGS_SUCCESS");
         } catch (error) {
             console.warn(error)
             this.emitter.emit("GET_SONGS_FAILED");
         }*/


        this.axios.get("/api/songs").then((response) => {
            this.data = response.data;
            console.log(this.data)
            this.emitter.emit("GET_SONGS_SUCCESS");
        }).catch((error) => {
            console.warn(error)
            this.emitter.emit("GET_SONGS_FAILED");
        })
    }

    async addSong(song) {
        try {
            const response = await fetch(`/api/songs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(song)
            })
            if (!response.ok) {
                throw response
            }
            this.getSongs()
        } catch (err) {
            console.warn(err)
            this.emitter.emit('ADD_SONG_ERROR')
        }
    }
}

const store = new DBStore();

export default store;