import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import theme from '@theme';
import config from '@config';
import {
    Container,
    SocialContainer,
    Attribution,
    SocialLink,
    SocialListItem
} from './styles';
import HitCounter from '../HitCounter';

const Footer = () => {
    return (
        <Container>
            <HitCounter />

            <SocialContainer>
                <SocialListItem>
                    <SocialLink
                        href={config.github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="lg"
                            color={theme.colors.white}
                        />
                    </SocialLink>
                </SocialListItem>
                <SocialListItem>
                    <SocialLink
                        href={config.linkedIn}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedinIn}
                            size="lg"
                            color={theme.colors.white}
                        />
                    </SocialLink>
                </SocialListItem>
            </SocialContainer>

            <Attribution>© {new Date().getFullYear()} Emile Choghi</Attribution>
        </Container>
    );
};

export default Footer;
