const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

let initialState = {
  users: [],
  pageSize: 3, 
  totalUsersCount: 0,
  currentPage: 1,
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
        }
    default:
      return state;
  }
};



export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};

export const setUsersAC = (usersArray) => {
  return {
    type: SET_USERS,
    usersArray: usersArray,
  };
};

export const setCurrentPageAC = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    pageNumber,
  };
};

export const setTotalUsersCountAC = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
  };
};

export default usersReducer;