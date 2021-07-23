import React, { Component, useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import Pagination from "react-js-pagination";
import history from "./../../history";

import "./style.sass";

import ContactCard from "./../ContactCard";
import AddContact from "./../AddContact";
import Actions from "./../../store/actions/contacts";

const ContactList = () => {
  const { currentPage } = useParams();

  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.list);

  console.log(currentPage, contacts);

  const [total, setTotal] = useState(null);

  const [pagination, setPagination] = useState({
    page: null,
    per_page: null,
    total_pages: null,
  });

  console.log(history);

  const isItemLoaded = (index) =>
    index < contacts.length && contacts[index] !== null;

  useEffect(() => {
    dispatch(Actions.requestContacts(currentPage));
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    history.push(`/users/page/${pageNumber}`);
  };

  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <div className="wrapper">
        <div className="control">
          <button className="button button_add" onClick={openModal}>
            Add contact
          </button>
        </div>

        <AddContact total={total} closeModal={closeModal} show={show} />
        <div
          style={{
            height: "2700px",
            width: "100%",
          }}
        >
          <AutoSizer>
            {({ height, width }) => (
              <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={contacts.length}
              >
                {({ onItemsRendered, ref }) => (
                  <List
                    className="List"
                    height={height}
                    width={width}
                    itemCount={contacts.length}
                    itemSize={386}
                    itemData={contacts}
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                    layout="vertical"
                  >
                    {ContactCard}
                  </List>
                )}
              </InfiniteLoader>
            )}
          </AutoSizer>
        </div>
      </div>
      <Pagination
        activePage={pagination.page}
        itemsCountPerPage={pagination.per_page}
        totalItemsCount={total}
        pageRangeDisplayed={pagination.per_page}
        onChange={handlePageChange}
      />
    </>
  );
};

export default ContactList;
