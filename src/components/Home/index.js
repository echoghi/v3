import React from 'react';
import { OverLine, Container, Title, TagLine, Description } from './styles';

const Home = () => {
    return (
        <Container>
            <OverLine>Hi, my name is </OverLine>
            <Title>Emile Choghi.</Title>

            <Description>
                I'm a software engineer based in San Francisco, CA specializing
                in building exceptional, high-quality websites and applications.
            </Description>
        </Container>
    );
};

export default Home;
