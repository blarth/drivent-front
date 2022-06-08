import styled from 'styled-components';

export const Box = styled.div`
  background-color: #f1f1f1;
  ${(props) => (props.active ? 'background-color:#FFEED2;' : '')};
  height: 264px;
  width: 196px;
  border-radius: 10px;
  padding: 15px;
  color: #3c3c3c;
  line-height: 14px;
  font-size: 12px;
  margin: 0 20px 20px 0;

  img {
    height: 109px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 20px;
    line-height: 23px;
    color: #343434;
  }

  h2 {
    font-weight: 700;
    margin: 11px 0 2px 0;
  }
`;
