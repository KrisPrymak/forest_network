const PLAY_SONG = "PLAY-SONG";
const PAUSE_SONG = "PAUSE-SONG";
const ADD_SONG = "ADD-SONG";
const DELETE_SONG = "DELETE-SONG";

let initialState = {
  songs: [
    {
      id: 1,
      add: true,
      play: false,
      name: "Bohemian Rhapsody",
      author: "Queen",
      length: { min: 3, sec: 45 },
    },
    {
      id: 2,
      add: true,
      play: false,
      name: "Monotonia",
      author: "shakira",
      length: { min: 2, sec: 39 },
    },
    {
      id: 3,
      add: false,
      play: false,
      name: "Talking to the moon",
      author: "Bruno Mars",
      length: { min: 3, sec: 38 },
    },
    {
      id: 4,
      add: false,
      play: false,
      name: "Under the influence",
      author: "Chris Brown",
      length: { min: 3, sec: 14 },
    },
  ],
};

let musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        songs: state.songs.map((s) => {
          if (s.id === action.id) {
            return {
              ...s,
              add: true,
            };
          }
          return s;
        }),
      };
    case DELETE_SONG:
      return {
        ...state,
        songs: state.songs.map((s) => {
          if (s.id === action.id) {
            return {
              ...s,
              add: false,
            };
          }
          return s;
        }),
      };
    case PLAY_SONG:
      return {
        ...state,
        songs: state.songs.map((s) => {
          if (s.id === action.id) {
            return {
              ...s,
              play: true,
            };
          } else if (s.play) {
            return {
                ...s,
                play: false
            }
          }
          return s;
        }),
      };
    case PAUSE_SONG:
      return {
        ...state,
        songs: state.songs.map((s) => {
          if (s.id === action.id) {
            return {
              ...s,
              play: false,
            };
          }
          return s;
        })
      };
    default:
      return state;
  }
};

export const playSongAC = (id) => {
  return {
    type: PLAY_SONG,
    id: id,
  };
};

export const pauseSongAC = (id) => {
  return {
    type: PAUSE_SONG,
    id: id,
  };
};

export const addSongAC = (id) => {
  return {
    type: ADD_SONG,
    id: id,
  };
};

export const deleteSongAC = (id) => {
  return {
    type: DELETE_SONG,
    id: id,
  };
};

export default musicReducer;
