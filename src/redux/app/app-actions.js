import axios from "axios";
import { createAction } from "@reduxjs/toolkit";


axios.defaults.baseURL = "http://localhost:4040";

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

const fetchContactRequest = createAction("contacts/fetchContactRequest");
const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
const fetchContactError = createAction("contacts/fetchContactError");


const filterSet = createAction("app/setFilterArr");

// eslint-disable-next-line
export default {
  filterSet,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};
