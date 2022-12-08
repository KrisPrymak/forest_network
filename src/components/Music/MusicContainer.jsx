import { connect } from 'react-redux';
import { addSongAC, deleteSongAC, playSongAC, pauseSongAC } from '../../Redux/musicReducer';
import Music from './Music';

let mapStateToProps = (state) => {
    return {
        songs: state.musicPage.songs,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteSong: (id) => {
            dispatch(deleteSongAC(id))
        },
        addSong: (id) => {
            dispatch(addSongAC(id))
        },
        playSong: (id) => {
            dispatch(playSongAC(id))
        },
        pauseSong: (id) => {
            dispatch(pauseSongAC(id))
        },
    }
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer;