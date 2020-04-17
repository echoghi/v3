import React, { useState } from 'react';
import Hamburger from './Hamburger';
import { Nav, Links, Link, Button } from './styles';
import { useScrollData } from 'scroll-data-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from '../../assets/files/Resume.pdf';
import {
    faBriefcase,
    faHome,
    faIdBadge
} from '@fortawesome/free-solid-svg-icons';
import theme from '@theme';
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
            return 'true';
        } else {
            return '';
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