import Types from "./../actions/types";

const initialState = {
  fetching: false,
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  support: {},
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
        page: action.contacts.page,
        per_page: action.contacts.per_page,
        total: action.contacts.total,
        total_pages: action.contacts.total_pages,
        support: action.contacts.support,
        list: action.contacts.data,
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
