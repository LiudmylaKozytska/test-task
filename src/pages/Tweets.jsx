import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import UserCard from '../components/UserCard/UserCard';

import {
  UsersList,
  LoadMoreButton,
  BackLink,
  BackLinkText,
} from './PagesStyled';

const BASE_URL = 'https://6477b01e9233e82dd53c08e4.mockapi.io/tweetsApp/users';
const USERS_PER_PAGE = 3;

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const location = useLocation();
  const backPage = useRef(location.state?.from ?? '/');

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

  useEffect(() => {
    setVisibleUsers([]);
  }, [users]);

  useEffect(() => {
    const firstIndex = (page - 1) * USERS_PER_PAGE;
    const nextIndex = firstIndex + USERS_PER_PAGE;
    setVisibleUsers(prevVisibleUsers => [
      ...prevVisibleUsers,
      ...users.slice(firstIndex, nextIndex),
    ]);
  }, [users, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <BackLink to={backPage.current}>
        <BsArrowLeft size={30} />
        <BackLinkText>Go back</BackLinkText>
      </BackLink>
      <UsersList>
        {visibleUsers.map(({ id, tweets, followers, avatar }) => (
          <UserCard
            key={id}
            id={id}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        ))}
      </UsersList>
      {users.length > visibleUsers.length && (
        <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
      )}
    </>
  );
};

export default Tweets;
