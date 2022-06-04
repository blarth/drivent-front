import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 30px;
  color: #454545;
  font-size: 16px;
  line-height: 19px;

  div {
    display: flex;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Icon = styled.img`
  width: 40.33px;
  margin-right: 14px;
`;

export const ConfirmationTitle = styled.div`
  font-weight: 700;
`;

export const Paragraph = styled.div`
  font-weight: 400;
`;
