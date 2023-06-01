import React, { useState, useEffect } from "react";
import axios from "axios";

import UserCard from "../components/UserCard/UserCard";

const BASE_URL = "https://6477b01e9233e82dd53c08e4.mockapi.io/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  console.log(users);

  return (
    <>
      <h1>Users Page</h1>
      <ul>
        {users.map(({ id, tweets, followers }) => (
          <UserCard key={id} tweets={tweets} followers={followers} />
        ))}
      </ul>
    </>
  );
};

export default Users;
