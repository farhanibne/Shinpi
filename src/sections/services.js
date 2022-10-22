import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'pages/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'No matter what you are and what you are looking for, we are on a mission to solve mystery.',
    heading: 'Security is our priority',

  },
  {
    image: serviceImage2,
    text:
      'We believe in single currency and open network. We are on a mission to solve mystery.',
    heading: 'Blockchain',

  },
  {
    image: serviceImage3,
    text:
      'Get your info tests delivered at home collect a sample from the your progress tests.',
    heading: 'Business Enterprise',

  },
  {
    image: serviceImage4,
    text:
      'We are not interested to marketing and selling. We are on a mission and if you wanna be a part of them, you are welcome.',
    heading: 'Marketing & advertising',

  },
  {
    image: serviceImage5,
    text:
      'Yes, we are great developers with full of various knowledges in our bucket. That might help us to solve mystery.',
    heading: 'Ultimate development',

  },
  {
    image: serviceImage6,
    text:
      'If you are interested to contact us, just mail us rather you have no other way to contact us.',
    heading: 'Online',

  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="What is our purpose"
          text="Features are highlighted what we are doing"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
