import React, { useState, useEffect } from "react";

import {
  UserItem,
  LogoImage,
  BackgroundImage,
  DecorationLine,
  UserImage,
  Text,
  TextContainer,
  Button,
  ButtonActive,
  DecorationCircle,
  Avatar,
} from "./UserCardStyled";

import logo from "../../images/logo.png";
import background_image from "../../images/background_image.png";
import user from "../../images/user.png";
import ellipse from "../../images/ellipse.png";

const UserCard = ({ id, tweets, followers, avatar }) => {
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`isFollowing-${id}`)) ?? false
  );
  const [followerCount, setFollowerCount] = useState(
    JSON.parse(localStorage.getItem(`followers-${id}`)) ?? followers
  );

  useEffect(() => {
    localStorage.setItem(`isFollowing-${id}`, JSON.stringify(isFollowing));
    localStorage.setItem(`followers-${id}`, JSON.stringify(followerCount));
  }, [isFollowing, followerCount, id]);

  const handleFollowClick = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount((prevCount) => prevCount - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount((prevCount) => prevCount + 1);
    }
  };

  let newFollowers = followerCount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
  });

  return (
    <UserItem key={id}>
      <LogoImage src={logo} alt="logo" />
      <BackgroundImage src={background_image} alt="background image" />
      <DecorationLine />
      <Avatar>
        <DecorationCircle src={ellipse} alt="" />
        <UserImage src={avatar ? avatar : user} alt="avatar" />
      </Avatar>
      <TextContainer>
        <Text>{tweets} tweets</Text>
        <Text>{newFollowers} followers</Text>
      </TextContainer>
      {isFollowing ? (
        <ButtonActive type="button" onClick={handleFollowClick}>
          Following
        </ButtonActive>
      ) : (
        <Button type="button" onClick={handleFollowClick}>
          Follow
        </Button>
      )}
    </UserItem>
  );
};

export default UserCard;
