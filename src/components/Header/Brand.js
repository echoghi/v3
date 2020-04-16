import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../../config/theme';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
import { NavBrand } from './styles';

const Brand = props => {
    return (
        <NavBrand {...props}>
            <Link to="/#" aria-label="Navigate to Home">
                <FontAwesomeIcon
                    icon={faInfinity}
                    size="lg"
                    color={theme.colors.white.primary}
                />
            </Link>
        </NavBrand>
    );
};

export default Brand;
