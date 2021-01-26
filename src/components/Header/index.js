import React, { useState, useEffect } from 'react';
import { useScrollData } from 'scroll-data-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faHome,
    faIdBadge
} from '@fortawesome/free-solid-svg-icons';

import theme from '@theme';
import Hamburger from './Hamburger';
import { Nav, Links, Link, Button } from './styles';
import Resume from '../../assets/files/Resume.pdf';
import Brand from './Brand';

const Header = () => {
    const { direction, position } = useScrollData();
    const [open, handleMenu] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('none');
    const closeMenu = () => handleMenu(false);
    const toggleMenu = () => handleMenu(!open);

    const handleActivePath = (path) => {};

    useEffect(() => {
        if (direction.y) {
            setScrollDirection(direction.y);
        }
    }, [direction]);

    return (
        <Nav scrollDirection={scrollDirection} position={position}>
            <Brand />
            <Hamburger open={open} onClick={toggleMenu} />
            <Links open={open} role="menu">
                <Link
                    onClick={closeMenu}
                    to="/#about"
                    exact="true"
                    active={handleActivePath('/#about')}
                    role="menuitem"
                >
                    About{' '}
                    <FontAwesomeIcon
                        icon={faHome}
                        size="lg"
                        color={theme.colors.white}
                    />
                </Link>

                <Link
                    onClick={closeMenu}
                    to="/#projects"
                    active={handleActivePath('/#projects')}
                    role="menuitem"
                >
                    Projects{' '}
                    <FontAwesomeIcon
                        icon={faBriefcase}
                        size="lg"
                        color={theme.colors.white}
                    />
                </Link>

                <Link
                    onClick={closeMenu}
                    active={handleActivePath('/#contact')}
                    to="/#contact"
                    role="menuitem"
                >
                    Contact{' '}
                    <FontAwesomeIcon
                        icon={faIdBadge}
                        size="lg"
                        color={theme.colors.white}
                    />
                </Link>
                <Button href={Resume} target="_blank">
                    Resume
                </Button>
            </Links>
        </Nav>
    );
};

export default Header;
