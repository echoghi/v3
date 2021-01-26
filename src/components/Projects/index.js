import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import sr, { scrollConfig } from '@lib/sr';
import {
    Project as Container,
    Description,
    ProjectImage,
    Text,
    Featured,
    TechList,
    Icons,
    Name,
    ProjectLink
} from './styles';
import { Section, SectionTitle, SectionNumber } from '@styles';
import theme from '@theme';

const Project = ({ name, description, img, tech, url, github, index }) => {
    const revealContainer = useRef(null);

    useEffect(() => {
        sr.reveal(revealContainer.current, scrollConfig());
    }, []);

    return (
        <Container ref={revealContainer}>
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
                    <ProjectLink
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="lg"
                            color={theme.colors.white}
                        />
                    </ProjectLink>
                    <ProjectLink
                        href={url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            size="lg"
                            color={theme.colors.white}
                        />
                    </ProjectLink>
                </Icons>
            </Description>
        </Container>
    );
};

const projects = [
    {
        name: 'Doughboy',
        img:
            'https://res.cloudinary.com/dp7726gkk/image/upload/w_800,c_scale/v1601579233/doughboy_c499xq.png',
        tech: ['Netlify', 'TypeScript', 'React'],
        url: 'https://doughboy.io/',
        github: 'https://github.com/echoghi/doughboy',
        description:
            'A nutrition tracker PWA built with TypeScript, React, and Firebase.'
    },
    {
        name: 'Covid-19 Dashboard',
        img:
            'https://res.cloudinary.com/dp7726gkk/image/upload/w_800,c_scale/v1601579233/corona_dqfn6y.png',
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
                return (
                    <Project {...project} index={index} key={project.name} />
                );
            })}
        </Section>
    );
};

export default Projects;
