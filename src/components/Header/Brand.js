import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../../config/theme';
import { faCannabis } from '@fortawesome/free-solid-svg-icons';
import { NavBrand } from './styles';

const Brand = props => {
    return (
        <NavBrand {...props}>
            <Link to="/#" aria-label="Navigate to Home">
                <FontAwesomeIcon
                    icon={faCannabis}
                    size="3x"
                    color={theme.colors.white}
                />
            </Link>
        </NavBrand>
    );
};

export default Brand;
