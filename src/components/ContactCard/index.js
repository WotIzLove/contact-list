import React, { useState, useEffect } from "react";
import Actions from "./../../store/actions/contacts";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import './style.sass'

const ContactCard = ({ index, style, data }) => {
  

  const name = data[index].first_name + " " + data[index].last_name;
  const email = data[index].email;
  const avatar = data[index].avatar;

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  
  const [inputs, setInputs] = useState({ name, email });

  const updateFormValue = ({ target: { name, value } }) =>
    setInputs((inputObj) => ({ ...inputObj, [name]: value }));

  const toggleEditMode = () => setEditMode((mode) => !mode);

  const updateContactData = () => {
    let firstName = inputs.name.split(" ")[0];
    let lastName = inputs.name.split(" ")[1];
    let contactData = {
      id: data[index].id,
      avatar: data[index].avatar,
      email: inputs.email,
      first_name: firstName,
      last_name: lastName,
    };

    dispatch(Actions.requestUpdateContacts(contactData, data[index].id));
    toggleEditMode();
  };

  const deleteContactFromList = () => {
    dispatch(Actions.requestDeleteContacts(data[index].id));
  };

  return (
    <>
      <div className="card">
        <div className="card__header">

        <div className="card__controls">
        {!editMode && (
           <>
              <button
                type="button"
                className="button button_edit"
                onClick={toggleEditMode}
              >
                <i className="fas fa-edit mr-2"></i>
                Edit
              </button>
              <button
                type="button"
                className="button button_delete"
                onClick={deleteContactFromList}
              >
                <i className="fas fa-trash mr-2"></i>
                Delete
              </button>
            </>
          )}
          {editMode && (
            <>
              <button
                type="button"
                className="button button_edit"
                onClick={updateContactData}
              >
                Save
              </button>
              <button
                type="button"
                className="button button_delete"
                onClick={toggleEditMode}
              >
                Cancel
              </button>
            </>
          )}
          </div>
          <div className="card__image-wrapper">
            <img
              className="card__image"
              src={avatar}
              alt={name}
            />
          </div>

          <div className="card__description">
            <div className="card__field">
              {!editMode && <h1 className="card__title">{name}</h1>}
              {editMode && (
                <input
                  type="text"
                  className="card__input card__input_title"
                  value={inputs.name}
                  name="name"
                  onChange={(e) => updateFormValue(e)}
                />
              )}
            </div>
            <div className="card__field">
              {!editMode && <p className="card__email">{email}</p>}
              {editMode && (
                <input
                  type="text"
                  className="card__input card__input_email"
                  value={inputs.email}
                  name="email"
                  onChange={(e) => updateFormValue(e)}
                />
              )}
            </div>
            <div className="card__line"></div>
          </div>
          </div>

          <Link className="card__link" to={`/user/${data[index].id}`}>View user profile</Link>

                
         
      </div>
    </>
  );
};

export default React.memo(ContactCard);
