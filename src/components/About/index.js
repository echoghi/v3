import React, { useRef, useEffect } from 'react';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import config from '@config';
import sr, { scrollConfig } from '@lib/sr';
import theme from '@theme';
import { Section, SectionTitle, SectionNumber } from '@styles';
import { Text, Grid, Description, Tech, CaretRight, List, Img } from './styles';

const About = () => {
    const revealContainer = useRef(null);

    useEffect(() => {
        sr.reveal(revealContainer.current, scrollConfig());
    }, []);

    const ListItems = config.stack.map((tech) => {
        return (
            <Tech key={tech}>
                <CaretRight
                    icon={faCaretRight}
                    size="1x"
                    color={theme.colors.teal}
                />
                {tech}
            </Tech>
        );
    });

    return (
        <Section id="about" ref={revealContainer}>
            <SectionTitle>
                <SectionNumber>01.</SectionNumber>About Me
            </SectionTitle>
            <Grid>
                <Description>
                    <Text>
                        I'm Emile, a software engineer living in San Francisco,
                        CA where I build and maintain web applications built
                        primarily with React.
                    </Text>

                    <Text>
                        When I'm not coding, you can usually find me in the gym,
                        out for a run in the Marina district, or hiking across
                        the city to find the perfect photo.
                    </Text>
                    <Text>
                        Here are a few technologies I've been working with
                        recently:
                    </Text>
                    <List>{ListItems}</List>
                </Description>
                <Img
                    src="https://res.cloudinary.com/dp7726gkk/image/upload/w_400,c_scale/v1601579233/me_cxgaxy.jpg"
                    alt="Emile Choghi"
                />
            </Grid>
        </Section>
    );
};

export default About;
