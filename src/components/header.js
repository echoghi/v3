import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';

const Container = styled.header`
  background: ${theme.colors.darkBlue};
  box-shadow ${theme.boxShadow};
  margin-bottom: 1.45rem;
`;

const Heading = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1400px;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <Heading>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          E
        </Link>
      </h1>
    </Heading>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
