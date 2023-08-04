import styled from 'styled-components';
import { randomHexColor } from '../../utils/randomHexColor';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 500px;
  height: 200px;
  background-color: #fff;
  box-shadow: 1px 1px 8px 0px #000000;
  border-radius: 8px;
  overflow: hidden;
  padding-top: 50px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #008080;
  text-transform: uppercase;
  margin: 0;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatListItem = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  list-style: none;
  background-color: ${props => randomHexColor(props.index)};
`;

export const Label = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
