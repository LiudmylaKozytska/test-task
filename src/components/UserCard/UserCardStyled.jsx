import styled from '@emotion/styled';

export const UserItem = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  margin-bottom: 26px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoImage = styled.img`
  display: block;
  padding: 20px;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  display: block;
  top: 28px;
  left: 36px;
`;

export const DecorationLine = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.div`
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);
`;

export const DecorationCircle = styled.img`
  position: absolute;
  display: block;
  width: 80px;
  height: 80px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
`;

export const UserImage = styled.img`
  position: absolute;
  display: block;
  width: 64px;
  height: 64px;
  top: 0px;
  left: 50%;
  object-fit: cover;
  transform: translateX(-50%);
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 284px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;

  &:first-of-type {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  &:hover {
    background-color: #ffd8ff;
  }
`;

export const ButtonActive = styled.button`
  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #5cc2d3;
  }
`;
