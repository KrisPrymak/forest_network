const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  users: [],
  pageSize: 3, 
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};


let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true
            };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false
            };
          }
          return u;
        }),
      };
      case SET_USERS:
        return {
          ...state,
          users: action.usersArray,
        };
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.pageNumber,
        };
      case SET_TOTAL_USERS_COUNT:
        return {
          ...state,
          totalUsersCount: action.totalCount,
        };
      case TOGGLE_IS_FETCHING:
        return {
          ...state,
          isFetching: action.isFetching,
        }
    default:
      return state;
  }
};



export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};

export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};

export const setUsers = (usersArray) => {
  return {
    type: SET_USERS,
    usersArray: usersArray,
  };
};

export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    pageNumber,
  };
};

export const setTotalUsersCount = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  }
}

export default usersReducer;