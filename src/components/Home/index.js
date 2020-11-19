import React from 'react';
import Sparkles from '../Sparkles';
import { OverLine, Container, Title, Button, Description } from './styles';

const Home = () => {
    return (
        <Container>
            <OverLine>Hi, my name is </OverLine>
            <Sparkles>
                <Title>Emile Choghi.</Title>
            </Sparkles>

            <Description>
                I'm a software engineer based in San Francisco, CA specializing
                in building exceptional, high-quality websites and applications.
            </Description>
            <Button href="mailto:emchoghi@gmail.com">Get In Touch</Button>
        </Container>
    );
};

export default Home;
