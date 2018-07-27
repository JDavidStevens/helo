const initialState = {
  user: {}
};

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export function updateUserInfo(user) {
  return {
    type: UPDATE_USER_INFO,
    payload: user
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return Object.assign({}, state, { user: action.payload });

    default:
      return state;
  }
}
