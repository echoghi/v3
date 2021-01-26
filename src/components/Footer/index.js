import React from 'react';
import theme from '@theme';
import config from '@config';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import {
    Container,
    SocialContainer,
    SocialIcon,
    Attribution,
    SocialLink
} from './styles';
import HitCounter from '../HitCounter';

const Footer = () => {
    return (
        <Container>
            <HitCounter />

            <SocialContainer>
                <li>
                    <SocialLink
                        href={config.github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <SocialIcon
                            icon={faGithub}
                            size="lg"
                            color={theme.colors.white}
                        />
                    </SocialLink>
                </li>
                <li>
                    <SocialLink
                        href={config.linkedIn}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <SocialIcon
                            icon={faLinkedinIn}
                            size="lg"
                            color={theme.colors.white}
                        />
                    </SocialLink>
                </li>
            </SocialContainer>

            <Attribution>© {new Date().getFullYear()} Emile Choghi</Attribution>
        </Container>
    );
};

export default Footer;
