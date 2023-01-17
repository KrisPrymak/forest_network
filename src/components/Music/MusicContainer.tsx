import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/reduxStore';
import Music from './Music';
import { actionsMusic } from '../../Redux/musicReducer';

let mapStateToProps = (state: AppStateType) => {
    return {
        songs: state.musicPage.songs,
    }
}

const actions = actionsMusic;

let mapDispatchToProps = (dispatch: any) => {
    return {
        deleteSong: (id: number) => {
            dispatch(actions.deleteSongAC(id))
        },
        addSong: (id: number) => {
            dispatch(actions.addSongAC(id))
        },
        playSong: (id: number) => {
            dispatch(actions.playSongAC(id))
        },
        pauseSong: (id: number) => {
            dispatch(actions.pauseSongAC(id))
        },
    }
}



const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer;