import React, { useState, useContext} from 'react';
import axios from 'axios';
import './musicUploader.css';
import { AppStateContext } from './../../AppStateContext/AppStateContext';

function MusicUploader() {
    const {appState, setAppState} = useContext(AppStateContext);

    const [file, setFile] = useState(null);
    const [trackName, setTrackName] = useState(null);
    const [trackID, setTrackID] = useState(null);

    const [message, setMessage] = useState('');


    const handleUpload = async (e) => {
        e.preventDefault();
        console.log(file);

        const formData = new FormData();
        formData.append('file', file);

        try {
        const response = await axios.post('http://localhost:9090/v1/tracks/upload', formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });

        setMessage(response.data.message);
        } catch (error) {
        console.error(error);
        setMessage('An error occurred during the upload.');
        }
    };

    if(!appState.musicUploader) return;
    return (
        <div className='music-upload-component'>
            <form onSubmit={handleUpload} className='internal'>
                    <h1>Upload Music Here</h1>
                    <div className='upload-form'>
                        <input type="text" placeholder='Track Name' onChange={(e)=>{setTrackName(e.target.value)}}/>
                        <input type="text" placeholder='Track ID'  onChange={(e)=>{setTrackID(e.target.value)}}/>
                        <input type="file" accept=".mp3" onChange={(e)=>{setFile(e.target.files[0])}} />
                        <input type="submit" value="Upload"/>
                        <div id="message">{message}</div>
                    </div>
            </form>
        </div>
    );
}


export default MusicUploader;