import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 10px;
  width: 250px;
  height: 350px;
  text-align: center;
  border-radius: 25px;
  box-shadow: 1px 1px 5px 0px #000000;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  overflow: hidden;
`;

export const Images = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: auto;
`;

export const Text = styled.p`
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #008080;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80px;
  border-top: 2px solid #000000;
  background-color: #80808050;
`;

export const StatsList = styled.li`
  list-style: none;
  padding: 5%;
  font-size: 14px;
  display: block;
  height: 100%;

  &:not(:last-child) {
    border-right: 1px solid #000000;
  }
`;

export const Label = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
