import Types from './types';

const requestContacts = currentPage => ({ 
  type: Types.REQUEST_CONTACTS, 
  currentPage 
});

const receiveContacts = contacts => ({
  type: Types.RECEIVE_CONTACTS,
  contacts,
});

const requestAddContacts = newContact => ({ 
  type: Types.CREATE_CONTACT_REQUEST,
   newContact 
});

const receiveAddContacts = addedContact => ({
  type: Types.CREATE_CONTACT_RECIEVE,
  addedContact,
});

const requestUpdateContacts = (contact, id) => ({
  type: Types.PRODUCTS_UPDATE_REQUEST,
  contact,
  id,
});

const receiveUpdateContacts = updateContact => ({
  type: Types.UPDATE_CONTACT_RECIEVE,
  updateContact,
});

const requestDeleteContacts = id => ({ 
  type: Types.DELETE_CONTACT_REQUEST, id
 });

const receiveDeleteContacts = deletedContact => ({
  type: Types.DELETE_CONTACT_RECIEVE,
  deletedContact,
});

const requestContact = id => ({
   type: Types.REQUEST_CONTACT,
   id
});
const receiveContact = contact => ({ 
  type: Types.RECEIVE_CONTACT,
   contact
});



export default {

  requestContacts,
  receiveContacts,

  requestAddContacts,
  receiveAddContacts,

  requestUpdateContacts,
  receiveUpdateContacts,

  requestDeleteContacts,
  receiveDeleteContacts,

  requestContact,
  receiveContact

};
