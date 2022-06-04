import styled from 'styled-components';
import Cards from 'react-credit-cards';

export const Card = styled(Cards)`
  margin: 0 !important;
`;

export const Box = styled.div`
  padding: 30px 0 40px 0;
`;

export const CardInfos = styled.div`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;

  input {
    height: 42px;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 15px;
    margin: 0;
  }

  p {
    color: gray;
  }

  .line {
    display: flex;
    gap: 20px;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  p {
    margin-top: 5px;
  }
`;
