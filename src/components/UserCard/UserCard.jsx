import React from "react";

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
} from "./UserCardStyled";

import logo from "../../images/logo.png";
import background_image from "../../images/background_image.png";
import user from "../../images/user.png";

const UserCard = () => {
  return (
    <UserItem>
      <LogoImage src={logo} alt="logo" />
      <BackgroundImage src={background_image} alt="background image" />
      <DecorationLine />
      <UserImage src={user} alt="avatar" />
      <TextContainer>
        <Text>tweets</Text>
        <Text>followers</Text>
      </TextContainer>
      <Button>follow</Button>
      <ButtonActive>following</ButtonActive>
    </UserItem>
  );
};

export default UserCard;
