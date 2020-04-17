import React from 'react';
import { OverLine, Container, Title, Button, Description } from './styles';

const Home = () => {
    return (
        <Container>
            <OverLine>Hi, my name is </OverLine>
            <Title>Emile Choghi.</Title>

            <Description>
                I'm a software engineer based in San Francisco, CA specializing
                in building exceptional, high-quality websites and applications.
            </Description>
            <Button href="mailto:emchoghi@gmail.com">Get In Touch</Button>
        </Container>
    );
};

export default Home;
