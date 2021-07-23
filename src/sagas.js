import { takeLatest } from "redux-saga/effects";
import { fork } from "redux-saga/effects";
import Types from "./store/actions/types";
import { getContacts, addContact, updateContact, deleteContact } from "./user_sagas";

// Register all watchers
export default function* sagaWatcher() {

  yield [
    fork(takeLatest, Types.REQUEST_CONTACTS, getContacts),
    fork(takeLatest, Types.CREATE_CONTACT_REQUEST, addContact),
    fork(takeLatest, Types.UPDATE_CONTACT_REQUEST, updateContact),
    fork(takeLatest, Types.DELETE_CONTACT_REQUEST, deleteContact),
  ];
}

