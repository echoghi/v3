import React from 'react';
import {
    Container,
    Text,
    Grid,
    Description,
    Tech,
    CaretRight,
    List,
    Img
} from './styles';
import config from '@config';
import theme from '@theme';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Image from '../../images/me.jpg';

const About = () => {
    const ListItems = config.stack.map(tech => {
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
        <Container id="about">
            <h1>About Me</h1>
            <Grid>
                <Description>
                    <Text>
                        I'm Emile, a software engineer living in San Francisco,
                        CA and working remotely where I build and maintain web
                        applications built primarily with React.
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
                <Img src={Image} />
            </Grid>
        </Container>
    );
};

export default About;
