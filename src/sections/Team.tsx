import * as React from 'react';
import {Box, Container, Heading, Stack, Text} from '@chakra-ui/react'

const Component = () => (
    <Container id="team" maxW={'3xl'}>
        <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            pt={{base: 20, md: 28}}>
            <Heading className="heading">Team</Heading>

            <Text>
                Alston is a computer science student at the University of Toronto and a master of machine learning. With
                an impressive 10 machine learning publications to his name from the age of 5, Alston is a prodigious
                talent in the field of artificial intelligence. He has even supervised Professor Geoff Hinton for his
                PhD, a remarkable achievement for anyone, let alone someone so young.
            </Text>
            <Text>
                Alston's passion for machine learning led him to create AloeML, a revolutionary platform that leverages
                the power of blockchain, machine learning, and big data to optimize aloe growth. Through his work on
                AloeML, Alston has demonstrated his ability to combine cutting-edge technologies in innovative ways, and
                his dedication to advancing the field of machine learning is clear.
            </Text>
            <Text>
                As Alston continues to grow and develop as a machine learning expert, it is clear that he has a bright
                future ahead of him. His contributions to the field have already been significant, and it is likely that
                he will continue to make important advancements in the years to come.
            </Text>
        </Stack>
    </Container>
);

export default Component;