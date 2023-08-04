import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  padding: 0;
  width: 500px;
  border-radius: 10px;
  border: 2px solid #babecc;
  box-shadow: 1px 1px 8px 0px #000000;
`;

export const Thead = styled.thead`
  background-color: #babecc;
  color: #fff;
  text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
    background-color: rgb(115, 120, 175);
    box-shadow: 0 6px 6px -6px #0e1119;
    color: #ffffff;
    text-shadow: 1px 1px 8px 0px #000000;
  }
`;

export const Th = styled.th`
  text-align: center;
  border: 1px solid #0e1119;

  &:first-child {
    border-top-left-radius: 5px;
  }

  &:last-child {
    border-top-right-radius: 5px;
  }
`;

export const Tbody = styled.tbody`
  background-color: #ffffff;
`;

export const Td = styled.td`
  text-align: center;
  width: 100%;
  height: 20px;

  border: 1px solid #0e1119;

  /* &:first-child {
    border-bottom-left-radius: 5px;
  } */

  /* &:nth-last-child(-n+1) {
    border-bottom-right-radius: 5px;
  } */
`;
