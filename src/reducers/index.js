import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {title: 'Tell me your name', duration: '4:05'},
        {title: "Don't me your name", duration: '4:05'},
        {title: 'Why I should', duration: '4:05'},
        {title: "What's in your name", duration: '4:05'},
        {title: 'Hey mama me your name', duration: '4:05'}
    ]
};

const selectedSongReducer = ( selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});