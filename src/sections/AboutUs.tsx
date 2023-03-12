import * as React from 'react';
import {Container, Grid, GridItem, Heading, Stack, Box, Image, Text, Show, Hide} from '@chakra-ui/react'

const Component = () => (
    <Container id="about-us" maxW={'3xl'}>
        <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            pt={{base: 20, md: 28}}>
            <Heading className="heading">About Us</Heading>

            <Text>
                AloeML is a blockchain-based platform that uses machine learning and big data to optimize aloe growth.
                It securely stores and manages data using distributed ledgers, ensuring that information is
                tamper-proof.
            </Text>
            <Text>
                By combining blockchain and machine learning, AloeML analyzes data from sensors and IoT devices
                to predict growth trends. Growers can make informed decisions and improve cultivation processes
                to increase yields and improve crop quality.
            </Text>
            <Text>
                AloeML includes tools such as automated irrigation systems and nutrient management systems to
                provide precise care for each plant. This ensures that plants receive the optimal level of
                nutrients and water to grow and thrive.
            </Text>
            <Text>
                With AloeML, growers can optimize their cultivation processes and increase yields, crop quality, and
                profits. Sign up for AloeML today and grow your best aloe crop yet!
            </Text>
        </Stack>
    </Container>
);

export default Component;