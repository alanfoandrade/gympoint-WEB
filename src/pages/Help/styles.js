import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 34px auto 0;
  strong {
    color: #444;
    font-size: 24px;
  }
`;

export const HelpOrdersTable = styled.table`
  width: 100%;
  padding: 30px;
  margin-top: 24px;
  background: #fff;
  border-radius: 4px;
  border-spacing: 0;
  thead th {
    font-size: 16px;
    font-weight: bold;
    color: #444;
    text-align: left;
  }
  tbody td {
    padding: 20px 0;
    color: #666;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    &:nth-child(2) {
      text-align: right;
    }
    button {
      background: none;
      border: none;
      color: #4d85ee;
      font-size: 15px;
    }
  }
`;
