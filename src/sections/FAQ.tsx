

import * as React from 'react';
import {Container, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, Heading, Stack, Image} from '@chakra-ui/react';
import {MinusIcon, AddIcon} from '@chakra-ui/icons';
import blueBlob from '../img/blue_blob.svg';

const Component = () => (
    <Container id="faq" maxW={'3xl'}>
        <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            pt={{base: 20, md: 28}}>
            <Heading className="heading">FAQ</Heading>
            <div className="backgroundGraphicParent" style={{zIndex: '-2'}}>
                <Image src={blueBlob} className="backgroundGraphic pulse" style={{left: '-20%'}}/>
            </div>
            
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>

                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            What is a hackathon?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            A hackathon is a social event where developers, designers, and any solution-solvers collaborate to identify and solve a problem.
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>                       
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>

                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            Who can join?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            High school, undergraduate, and graduate students with some programming experience.
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                 <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>            
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>

                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            What are the themes for Hack the MIST?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            Hack the MIST has challenges revolving around NLP, Art, and Climate Change. Your team can address any theme(s) of your choice and build a project using machine learning to solve a real-world problem in that realm.                         </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                 <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>                        
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>

                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            I don't have a team, what can I do?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            No worries! You can submit your application as an individual and you can find teammates in the #team-formation channel on our Hack the MIST Discord later. You will get to join Discord after being accepted.
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                 <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>                        
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>
                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            How do I apply with a team?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            Each individual has to submit their own application. We will share a form after the hackathon starts, and you can declare your team then.
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                 <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>                       
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>
                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            I have no experience? Can I still come?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            This hackathon is open to beginners with some programming experience. If you've taken a beginners programming class or have programmed in any language before, you will be just fine! We also plan to have workshops and on-site mentors to support you. If this sounds like you and you're looking for a platform to build your first machine learning project, we'll see you there.
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                 <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>  
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>

                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            How much does it cost to participate?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            It's completely free! Just bring your laptop and your passion.
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                 <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>                        
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>

                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            When is the deadline to apply?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            March 3rd for Hackers. March 7th for Mentors.
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                 <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>        
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>

                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            How can I participate in Hack the MIST?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            The registration form will be out early next year. While applying, just by showing enthusiasm for machine learning will get you a spot in Hack the MIST! But note that we are accepting registration on a first come first serve basis and the spots are limited. So make sure to secure yours before they run out!
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                 <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>      
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>

                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            What is the minimum and maximum team size?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            You need to have at least 2 members in your team and at most 4 members. If you lack members, you can find teammates in the #team-formation channel on our Hack the MIST Discord later. You will get to join Discord after being accepted.
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                 <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>          
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>

                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            Where is the hackathon? Will it be in-person?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            Yes, the hackathon will be in-person at the University of Toronto.
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                 <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>            
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>

                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            Will there be prizes for the winners?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            Yes! The prizes will be announced closer to the Hack the MIST date.
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>
                 <AccordionItem borderStyle='unset' paddingBottom='5'>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>            
                    <Image src={blueBlob} className="backgroundGraphicFAQ" style={{width: '40px', boxSizing: 'border-box', borderRadius: '50%', border: '2px solid #FFFFFF'}}/>

                        {isExpanded ? (
                            <MinusIcon fontSize='12px' marginLeft='14px'/>
                            ) : (
                            <AddIcon fontSize='12px' marginLeft='14px'/>
                        )}
                        <Box as="span" flex='1' textAlign='left' paddingLeft='10'>
                        <b>
                            What are some learning outcomes and benefits of Hack the MIST?
                        </b>
                        </Box>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                       <Box paddingLeft='26px'>
                        <Box paddingLeft='10'>
                            Beyond building an end-to-end project tackling real-world problems in a team setting, you will get a chance to learn the Introductions to NLP and How to build a Reinforcement Learning Model for the Breakout game, during technical workshops! Feel free to apply your learning in your hackathon project. You will likely use programming languages such as Python, popular ML frameworks such as Keras, Torch, Tensorflow, and ML deployment infrastructures such as AWS and GCP, as well as emerging technologies developed by sponsored companies.<br/><br/>You will also meet and connect with talented on-site mentors, company representatives, and judges who're experienced professionals at speaker panels, a networking session, technical workshops, an internal job fair, and a social gathering event. 
                        </Box>
                       </Box>
                    </AccordionPanel>
                </>
                )}
                 </AccordionItem>










            </Accordion>
        </Stack>
    </Container>
);

export default Component;