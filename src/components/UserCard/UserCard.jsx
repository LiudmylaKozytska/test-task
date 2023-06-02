import React, { useState } from "react";

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
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(followers);

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
        <ButtonActive onClick={handleFollowClick}>Following</ButtonActive>
      ) : (
        <Button onClick={handleFollowClick}>Follow</Button>
      )}
    </UserItem>
  );
};

export default UserCard;
