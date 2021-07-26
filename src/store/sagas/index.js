import { takeEvery, takeLatest } from "redux-saga/effects";
import { fork, all, cancel, take } from "redux-saga/effects";
import Types from "./../actions/types";
import { getContacts, addContact, updateContact, deleteContact, getContact } from "./contacts";

// Register all watchers
export default function* sagaWatcher() {
  yield all([
    takeLatest(Types.REQUEST_CONTACTS, getContacts),
    takeLatest(Types.REQUEST_CONTACT, getContact),
    takeLatest(Types.CREATE_CONTACT_REQUEST, addContact),
    takeLatest(Types.UPDATE_CONTACT_REQUEST, updateContact),
    takeLatest(Types.DELETE_CONTACT_REQUEST, deleteContact),
  ]
  );
}

