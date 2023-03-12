import * as React from 'react';
import {Box, Container, Heading, Stack, Text} from '@chakra-ui/react'

const Component = () => (
    <Container id="design" maxW={'3xl'}>
        <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            pt={{base: 20, md: 28}}>
            <Heading className="heading">Design</Heading>

            <Text>
                AloeML is built on a distributed architecture that leverages the power of blockchain, machine learning,
                and big data. At its core, AloeML uses a decentralized blockchain network to securely store and manage
                data. This allows growers to store information about their aloe plants in a tamper-proof and immutable
                manner, ensuring the integrity of the data.
            </Text>
            <Text>
                To analyze this data, AloeML uses machine learning algorithms that are specifically designed for aloe
                growth. These algorithms are trained on large sets of historical data, allowing them to identify
                patterns and predict future growth trends. This information is then used to provide growers with
                insights and recommendations on how to optimize their cultivation processes.
            </Text>
            <Text>
                AloeML also includes a suite of tools for managing aloe cultivation processes. For example, it includes
                automated irrigation systems that can be controlled remotely, ensuring that each plant receives the
                optimal amount of water. It also includes nutrient management systems that can be used to provide
                precise, targeted care to each individual plant, based on its specific needs.
            </Text>
            <Text>
                All of these components are seamlessly integrated into a single platform, allowing growers to manage
                their aloe cultivation processes with ease. The platform is designed to be user-friendly, with intuitive
                interfaces that allow growers to access and analyze data, make informed decisions, and optimize their
                cultivation processes. Additionally, the platform is highly scalable, allowing it to handle large
                amounts of data and support a growing number of users.
            </Text>
        </Stack>
    </Container>
);

export default Component;