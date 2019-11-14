import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  max-width: 1380px;
  margin-top: 20px;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  border-spacing: 0;

  thead th {
    text-align: left;
    color: #444;
    font-weight: bold;
    font-size: 16px;

    &:nth-child(2) {
      text-align: center;
    }

    &:nth-child(3) {
      text-align: center;
    }

    &:nth-child(4) {
      text-align: center;
    }

    &:nth-child(5) {
      text-align: center;
    }
  }

  tbody td {
    padding: 20px 0;
    font-size: 16px;
    color: #666;
    border-bottom: 1px solid #eee;

    &:nth-child(2) {
      text-align: center;
    }

    &:nth-child(3) {
      text-align: center;
    }

    &:nth-child(4) {
      text-align: center;
    }

    &:nth-child(5) {
      text-align: center;
    }

    div {
      button {
        background: none;
        border: 0;
        font-size: 15px;
      }

      a {
        color: #4d85ee;
        margin-right: 25px;
        transition: color 0.2s;
      }

      button#delete {
        color: #de3b3b;
        transition: color 0.2s;
      }
    }
  }
`;
