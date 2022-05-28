export const authState = {
  user: null,
  authIsReady: false,
  message: {
    messageContent: null,
    messageHeader: null,
    messageType: null,
    messageFooter: null
  }
};
export const authReducer = (state, action) => {
  switch (action.type) {
    case "Make_Auth_Ready":
      return { ...state, authIsReady: true, user: action.payload };

    default:
      return state;
  }
};
