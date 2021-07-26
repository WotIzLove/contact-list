import React, { useState } from "react";
import { Form, Field, useFormState } from "react-final-form";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./../../store/actions/contacts";

import "./style.sass";

const AddContact = (props) => {

  const { total, show, closeModal } = props;

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    
    let id = total + 1;

    let contact = {
      id: id,
      avatar: `https://reqres.in/img/faces/${id}-image.jpg`,
      email: values.email,
      first_name: values.firstName,
      last_name: values.lastName,
    };

    dispatch(Actions.requestAddContacts(contact));
    closeModal();
  };

  const required = (value) => (value ? undefined : "Required");


  return (
    <>
      <div className={show ? "overlay" : "hide"} >
      <div className={show ? "modal" : "hide"}>
        <button className="modal__close" onClick={closeModal}>X</button>
        <h2 className="modal__title"></h2>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form className="form" onSubmit={handleSubmit}>
              <Field name="firstName" validate={required}>
                {({ input, meta }) => (
                  <div className="form__item">
                    <label className="form__label">First Name</label>
                    <input
                      className="form__input"
                      {...input}
                      type="text"
                      placeholder="First Name"
                    />
                    {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="lastName" validate={required}>
                {({ input, meta }) => (
                  <div className="form__item">
                    <label className="form__label">Last Name</label>
                    <input
                      className="form__input"
                      {...input}
                      type="text"
                      placeholder="Last Name"
                    />
                    {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <div className="form__item">
                    <label className="form__label">Email</label>
                    <input
                      className="form__input"
                      {...input}
                      type="text"
                      placeholder="Email"
                    />
                    {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="form__buttons buttons">
                <button className="button button_edit" type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  className="button button_delete"
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </div>
      </div>
    </>
  );
};

export default AddContact;
