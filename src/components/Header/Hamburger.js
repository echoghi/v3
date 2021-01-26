import React from 'react';

import { Container, Line } from './styles';

const Hamburger = ({ open, ...props }) => (
    <Container
        role="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Open Mobile Menu"
        open={open}
        {...props}
    >
        <Line />
        <Line />
        <Line />
    </Container>
);

export default Hamburger;
