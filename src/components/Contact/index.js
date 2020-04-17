import React from 'react';
import { Container, Text, Heading, Button } from './styles';
import { SectionNumber, SectionTitle } from '@styles';

const Contact = () => {
    return (
        <Container id="contact">
            <SectionTitle>
                <SectionNumber>03. </SectionNumber> What's next?
            </SectionTitle>
            <Heading>Get In Touch</Heading>
            <Text>
                Although I'm not currently looking for freelance opportunities,
                my inbox is always open. Whether for a potential project or just
                to say hi, I'll try my best to answer your email!
            </Text>
            <Button href="mailto:emchoghi@gmail.com">Say Hello</Button>
        </Container>
    );
};

export default Contact;
