import { call, put } from "redux-saga/effects";
import Actions from "./../actions/contacts";
import axios from "axios";

export function* getContacts(action) {
  const { currentPage } = action;

  const getContactsApi = (currentPage) =>
    axios.get(`https://reqres.in/api/users?page=${currentPage}`);

  // make the call to the api
  const response = yield call(getContactsApi, currentPage);

  // check if response is success
  if (response.status == 200) {
    // dispatch successful receiving children
    yield put(Actions.receiveContacts(response.data));
  } else {
    // dispatch failure
    console.log("Error");
  }
}

export function* getContact(action) {
  const getContactApi = (id) => axios.get(`https://reqres.in/api/users/${id}`);

  const { id } = action;
  // make the call to the api
  const response = yield call(getContactApi, id);
  // check if response is success
  if (response.status == 200) {
    // dispatch successful receiving children
    yield put(Actions.receiveContact(response.data.data));
  } else {
    // dispatch failure
    console.log("Error");
  }
}

export function* addContact(action) {
  const addContactApi = (newContact) =>
    axios.post(`https://reqres.in/api/users`, newContact);

  const { newContact } = action;
  // make the call to the api
  const response = yield call(addContactApi, newContact);

  console.log(response);

  // check if response is success
  if (response.status == 201) {
    // dispatch successful receiving children
    yield put(Actions.receiveAddContacts(response.data));
    yield put(Actions.requestContacts());
  } else {
    // dispatch failure
    console.log("Error");
  }
}

export function* updateContact(action) {
  const { contact, id } = action;

  const updateContactApi = (contact, id) =>
    axios.post(`https://reqres.in/api/users/${id}`, contact);

  // make the call to the api

  const response = yield call(updateContactApi, contact, id);

  // check if response is success

  if (response.status == 201) {
    // dispatch successful receiving children
    yield put(Actions.receiveUpdateContacts(response.data));
    yield put(Actions.requestContacts());
  } else {
    // dispatch failure
    console.log("Error");
  }
}

export function* deleteContact(action) {

  const deleteContactApi = (id) =>
    axios.delete(`https://reqres.in/api/users/${id}`);
  

  const { id } = action;
  // make the call to the api
  const response = yield call(deleteContactApi, id);

  console.log('delete', response)
  // check if response is success
  if (response.status == 204) {
    // dispatch successful receiving children
    yield put(Actions.receiveDeleteContacts(response.data));
    yield put(Actions.requestContacts());
  } else {
    // dispatch failure
    console.log("Error");
  }
}
