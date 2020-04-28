import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledLayout = styled.div``;

const Container = styled.div``;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Container>{children}</Container>
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
