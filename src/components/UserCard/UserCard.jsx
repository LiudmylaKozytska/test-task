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
  const [state, setState] = useState(null);
  const newFollowers = followers.toLocaleString("en-US", {
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
      <ButtonActive>following</ButtonActive>
      <Button>follow</Button>
    </UserItem>
  );
};

export default UserCard;
