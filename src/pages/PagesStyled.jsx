import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const UsersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
`;

export const LoadMoreButton = styled.button`
  width: 196px;
  height: 50px;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  cursor: pointer;

  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background: #5cd3a8;
  }
`;

export const BackLink = styled(Link)`
  display: block;
  cursor: pointer;
  ${
    "" /* width: 44px;
  height: 44px; */
  }
`;
