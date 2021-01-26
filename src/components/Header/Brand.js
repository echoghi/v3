import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import theme from '@theme';
import { NavBrand } from './styles';

const Brand = (props) => {
    return (
        <NavBrand {...props}>
            <Link to="/#" aria-label="Navigate to Home">
                <FontAwesomeIcon
                    icon={faCode}
                    size="3x"
                    color={theme.colors.white}
                />
            </Link>
        </NavBrand>
    );
};

export default Brand;
