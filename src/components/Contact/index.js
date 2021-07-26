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
        <h2>User {contact.id}</h2>
        <div className="user">
          <img className="user__avatar" src={contact.avatar} />
          <div className="user__info">
            <div className="user__field">
              <span className="user__label">First name:</span>{" "}
              <span className="user__value">{contact.first_name}</span>
            </div>
            <div className="user__field">
            <span className="user__label">Last name:</span>{" "}
            <span className="user__value"> {contact.last_name}</span>
            </div>
            <div className="user__field">
              <span className="user__label">Email:</span>{" "}
              <span className="user__value"> {contact.email}</span>
            </div>
             </div>
          </div>
        </div>
    </>
  );
};

export default Contact;
