import React from "react";
import axios from "axios";

import UserCard from "../components/UserCard";

const BASE_URL = "https://6477b01e9233e82dd53c08e4.mockapi.io/tweetsApp";

const Users = () => {
  async function getUsers() {
    try {
      const response = await axios.get(BASE_URL);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  getUsers();

  return (
    <>
      <h1>Users Page</h1>
      <ul>
        <UserCard />
      </ul>
    </>
  );
};

export default Users;
