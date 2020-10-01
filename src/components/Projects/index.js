import React from 'react';
import {
    Project as Container,
    Description,
    ProjectImage,
    Text,
    Featured,
    TechList,
    Icons,
    Name
} from './styles';
import { Section, SectionTitle } from '@styles';
import Doughboy from '@images/doughboy.png';
import Corona from '@images/corona.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '@theme';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { SectionNumber } from '../../assets/styles';

const Project = ({ name, description, img, tech, url, github, index }) => {
    return (
        <Container>
            <ProjectImage src={img} left={!!index} alt={name} />
            <Description right={!!index}>
                <Featured>Featured Project</Featured>
                <Name>{name}</Name>
                <Text>{description}</Text>
                <TechList right={!!index}>
                    {tech.map((str) => (
                        <li key={str}>{str}</li>
                    ))}
                </TechList>
                <Icons>
                    {/* <a href={github}>
                        <FontAwesomeIcon
                            icon={faGithubSquare}
                            size="lg"
                            color={theme.colors.white}
                        />
                    </a> */}
                    <a
                        href={url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            size="lg"
                            color={theme.colors.white}
                        />
                    </a>
                </Icons>
            </Description>
        </Container>
    );
};

const projects = [
    {
        name: 'Doughboy',
        img: Doughboy,
        tech: ['Netlify', 'TypeScript', 'React'],
        url: 'https://doughboy.io/',
        github: 'https://github.com/echoghi/doughboy',
        description:
            'A nutrition tracker PWA built with TypeScript, React, and Firebase.'
    },
    {
        name: 'Covid-19 Dashboard',
        img: Corona,
        tech: ['Netlify', 'Gatsby', 'React'],
        url: 'https://mycovid19tracker.netlify.app/',
        github: 'https://github.com/echoghi/corona',
        description:
            'A simple Covid-19 tracker built with  React, Gatsby, and Leaflet.'
    }
];

const Projects = () => {
    return (
        <Section id="projects">
            <SectionTitle>
                <SectionNumber>02. </SectionNumber>Some Things I've Built
            </SectionTitle>
            {projects.map((project, index) => {
                return <Project {...project} index={index} />;
            })}
        </Section>
    );
};

export default Projects;
