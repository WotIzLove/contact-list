import { call, put } from "redux-saga/effects";
import Actions from "./store/actions/contacts";
import axios from "axios";

export function* getContacts(action) {

  console.log('test')
    
  const { currentPage } = action;

  // make the call to the api
  const response = yield call(
    axios.get(`https://reqres.in/api/users?page=${currentPage}`)
  );

  // check if response is success
  if (response.staus == 200) {
    // dispatch successful receiving children
    yield put(Actions.receiveContacts(response.data.data));
  } else {
    // dispatch failure
    console.log("Error");
  }
}

export function* getContact(action) {
    const { id } = action;
    // make the call to the api
    const response = yield call(axios.get(`https://reqres.in/api/users/${id}`));
      // check if response is success
    if (response.staus == 200) {
        // dispatch successful receiving children
      yield put(Actions.receiveContact(response.data.data));
    } else {
      // dispatch failure
      console.log('Error');
    }
  }

export function* addContact(action) {

    console.log('action', action)
  const { newContact } = action;
  // make the call to the api
  const response = yield call(
    axios.post(`https://reqres.in/api/users`),
    newContact
  );
  // check if response is success
  if (response.staus == 200) {
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
  // make the call to the api
  const response = yield call(
    axios.put(`https://reqres.in/api/users/${id}`, contact)
  );
  // check if response is success
  if (response.staus == 200) {
    // dispatch successful receiving children
    yield put(Actions.receiveUpdateContacts(response.data));
    yield put(Actions.requestContacts());
  } else {
    // dispatch failure
    console.log("Error");
  }
}

export function* deleteContact(action) {
  const { id } = action;
  // make the call to the api
  const response = yield call(
    axios.delete(`https://reqres.in/api/users/${id}`)
  );
  // check if response is success
  if (response.staus == 200) {
    // dispatch successful receiving children
    yield put(Actions.receiveDeleteContacts(response.data));
    yield put(Actions.requestContacts());
  } else {
    // dispatch failure
    console.log("Error");
  }
}
