import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'pages/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'Does Shinpi have a referral program?',
    contents: (
      <div>
       Actually, we don't have a referral program. It's because we are a peace secret agent. We don't want to reveal our identity. Better have keep it secret.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Can anyone join Shinpi?',
    contents: (
      <div>
        It is still limited to access Shinpi. We are still in the beta version. We will open it to the public soon.
        Furthermore, we are looking for extraordinary people to join our team. If you are interested, please contact us via email.
        Believe in peace and joy. That's all we need. "Everything is mystery" - Shinpi
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Is Shinpi a scam?',
    contents: (
      <div>
        Of course not. We are a peace secret agent. We don't want to reveal our identity. We don't even need your personal information to reveal. We are in a mission to spread peace toward the planet earth.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Does Shinpi need any payment ?',
    contents: (
      <div>
       A big no ! 
       Shinpi is a free platform. We don't need any payment. We don't even need your personal information to reveal. Shinpi as well as other premium are free for the special members.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Whats the basic rules for the members of shinpi ?',
    contents: (
      <div>
        There is a lot.
        1. Keep everything secret.
        2. Don't reveal your identity.
        3. Don't reveal your location.
        4. Don't reveal your personal information.
        5. Never Leave Shinpi.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Whats the rules to post articles ?',
    contents: (
      <div>
      First of all, posting article is private and only available for members. Then again, before posting you have to maintain some rules, which are:
      1. Post meaningful articles.
      2. Don't post any article copied directly from internet.
      3. Don't post any article copied from other members.
      4. Make the article title fit under 20 aplhabets.
      5. Main content has no limitaion. Feel free to write as much as you want.
      </div>
    ),
  },
 
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Frequently Ask Question"
          text="Ask your question and meet"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to answer
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              question via email. 
              email us - info.shinpi@gmail.com
            </Text> <br/>
            <a target={"_blank"} href={"mailto: info.shinpi@gmail.com"} style={{textDecoration:'none',color:'azure',padding:'15px',backgroundColor:'#02073E',borderRadius:'5px'}} >
              Ask your Question
            </a>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};
