import React, { useState } from 'react';
import Hamburger from './Hamburger';
import { Nav, Links, Link, ExternalLink } from './styles';
import { useScrollData } from 'scroll-data-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faBriefcase,
    faHome,
    faIdBadge,
} from '@fortawesome/free-solid-svg-icons';
import theme from '../../../config/theme';
import { useEffect } from 'react';
import Brand from './Brand';

const Header = () => {
    const { direction } = useScrollData();
    const [open, handleMenu] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('none');
    const closeMenu = () => handleMenu(false);
    const toggleMenu = () => handleMenu(!open);

    const handleActivePath = path => {
        if (window.location.pathname === path) {
            return 'active';
        } else {
            return null;
        }
    };

    useEffect(() => {
        if (direction.y) {
            setScrollDirection(direction.y);
        }
    }, [direction]);

    return (
        <Nav scrollDirection={scrollDirection}>
            <Brand />
            <Hamburger open={open} onClick={toggleMenu} />
            <Links open={open} role="menu">
                <Link
                    onClick={closeMenu}
                    to="/#about"
                    exact="true"
                    className={handleActivePath('/#about')}
                    role="menuitem"
                >
                    About{' '}
                    <FontAwesomeIcon
                        icon={faHome}
                        size="lg"
                        color={theme.colors.white.primary}
                    />
                </Link>

                <Link
                    onClick={closeMenu}
                    to="/#projects"
                    className={handleActivePath('/#projects')}
                    role="menuitem"
                >
                    Projects{' '}
                    <FontAwesomeIcon
                        icon={faBriefcase}
                        size="lg"
                        color={theme.colors.white.primary}
                    />
                </Link>

                <ExternalLink
                    onClick={closeMenu}
                    href="/#contact"
                    role="menuitem"
                >
                    Contact{' '}
                    <FontAwesomeIcon
                        icon={faIdBadge}
                        size="lg"
                        color={theme.colors.white.primary}
                    />
                </ExternalLink>
            </Links>
        </Nav>
    );
};

export default Header;
