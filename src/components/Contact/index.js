import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Actions from "./../../store/actions/contacts";
import "./style.sass";

const Contact = () => {
  const { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();

  const contact = useSelector((state) => state.contacts.contact);

  useEffect(() => {
    dispatch(Actions.requestContact(id));
  }, []);

  return (
    <>
      <div className="wrapper">
        <button className="button button_add" onClick={() => history.goBack()}>
          Go back
        </button>
        <div>User {contact.id}</div>
        <div className="user">
          <img classNmae="user__avatar" src={contact.avatar} />
        </div>
        <div className="user__info">
          <div>{contact.first_name}</div>
          <div>{contact.last_name}</div>
          <div>{contact.email}</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
