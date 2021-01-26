import React, { useRef, useEffect } from 'react';

import sr, { scrollConfig } from '@lib/sr';
import { Container, Text, Heading, Button } from './styles';
import { SectionNumber, SectionTitle } from '@styles';

const Contact = () => {
    const revealContainer = useRef(null);

    useEffect(() => {
        sr.reveal(revealContainer.current, scrollConfig());
    }, []);

    return (
        <Container id="contact" ref={revealContainer}>
            <SectionTitle>
                <SectionNumber>03. </SectionNumber> What's next?
            </SectionTitle>
            <Heading>Get In Touch</Heading>
            <Text>
                I'm currently in the process of launching a web development
                agency and am accepting new clients. So whether you have a need
                for a simple website or complex web application, feel free to
                drop a line!
            </Text>
            <Button href="mailto:emchoghi@gmail.com">Say Hello</Button>
        </Container>
    );
};

export default Contact;
