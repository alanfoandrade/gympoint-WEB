import React from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import { Wrapper, Content } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
