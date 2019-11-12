import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  border: 4px;
  margin: 30px auto 0;
`;

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    font-size: 24px;
    font-weight: bold;
  }

  aside {
    display: flex;
    align-items: center;

    a {
      background: #de3b3b;
      font-size: 14px;
      font-weight: bold;
      padding: 10px 16px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      display: flex;
      align-items: center;
      margin-right: 16px;

      svg {
        margin-right: 16px;
      }
    }
  }
`;

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
