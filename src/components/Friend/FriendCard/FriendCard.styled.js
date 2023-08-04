import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  max-width: 100%;
  height: auto;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  margin: 0 auto;
  padding: 10px;

  max-width: 100%;
  width: 360px;

  border-radius: 8px;
  box-shadow: 1px 1px 5px 0px #babecc;
`;

export const Status = styled.span`
  display: block;
  margin-left: 1.625rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 60px;

  background-color: #ecf0f3;
  border-radius: 10%;

  &:hover {
    background: #008080;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }
`;

export const Name = styled.p`
  margin-left: 10px;
  color: #008080;
  text-shadow: 1px 1px 1px #fff;
  font-size: 16px;
  font-weight: 700;
`;
