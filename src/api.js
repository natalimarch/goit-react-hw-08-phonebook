import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

// export const token = {
//   set(token) {
//     instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     instance.defaults.headers.common.Authorization = "";
//   },
// };

// export const userSignup = async (newUser) => {
//   const { data } = await instance.post("/users/signup", newUser);
//   return data;
// };

// export const userLogin = async (newLogin) => {
//   const { data } = await instance.post("/users/login", newLogin);
//   return data;
// };

// export const userLogout = async (newLogout) => {
//   const { data } = await instance.post("/users/logout", newLogout);
//   return data;
// };

// export const getCurrentUser = async () => {
//   const { data } = await instance.get("/users/current");
//   return data;
// };

export const getAllContacts = async () => {
  const { data } = await instance.get("/contacts");
  return data;
};

export const addNewContact = async (newContact) => {
  const { data } = await instance.post("/contacts", newContact);
  return data;
};

export const removeContact = async (id) => {
  const { data } = await instance.delete(`contacts/${id}`);
  return data;
};

export default {
  getAllContacts,
  addNewContact,
  removeContact,
};
