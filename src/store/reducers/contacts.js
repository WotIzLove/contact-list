import Types from "./../actions/types";

const initialState = {
  fetching: false,
  list: [],
  contact: {},
};

export default function contacts(state = initialState, action) {
  switch (action.type) {

    case Types.REQUEST_CONTACTS:
      return Object.assign({}, state, { fetching: true });
    case Types.RECEIVE_CONTACTS:
      return Object.assign({}, state, {
        fetching: false,
        list: action.contacts,
      });
      
    case Types.REQUEST_CONTACT:
      return Object.assign({}, state, { fetching: true });
    case Types.RECEIVE_CONTACT:
      return Object.assign({}, state, {
        fetching: false,
        contact: action.contact,
      });

    default:
      return { ...state };
  }
}
