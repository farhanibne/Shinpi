/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import { Link } from 'components/link';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import MobileLogin from './login-mobile';
import menuItems from './login-header-data';
import logoDark from '../../assets/shinpi.svg';


export default function LoginHeader() {
  return (
   
    <DrawerProvider>
    <div style={{display:'absolute'}}>

    
      <header sx={styles.header} >
        <Container sx={styles.container}>
          <img src={logoDark} sx={styles.img}  alt="Shinpi " />


         <a style={{textDecoration:'none', color:'black'}} href="/">
         <h4 style={{marginLeft:'10px'}}>Shinpi 神秘</h4>
         </a>
          
        
           <Flex as="nav" sx={styles.nav}>
          
          </Flex> 

          <Link
            path="/"
            ml={2}
            label="Home"
            sx={styles.headerBtn}
            variant="buttons.primary"
          />

          <MobileLogin />
        </Container>
      </header>
      </div>
    </DrawerProvider>

  );
}

const styles = {
  headerBtn: {
    backgroundColor: 'black',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '-0.16px',
    borderRadius: '5px',
    color: '#ffffff',
    padding: '6.5px 24px',
    display: ['none', null, null, null, 'inline-block'],
    ml: ['0', null, null, 'auto', '0'],
    mr: ['0', null, null, '20px', '0'],
    '&:hover': {
      color: '#fff',
    },
  },
  img:{

    width:'7%',
    '@media screen and (max-width: 960px)': {
     width: '10%',
    },

  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',

    '&.sticky': {
      backgroundColor: 'background',
      position: 'fixed',
      color: 'text',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: [null, null, null, null, null, null, '1390px'],
    '@media screen and (max-width: 960px)': {
      justifyContent: 'space-between',
    },
  },
 
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 960px)': {
      display: 'none',
    },
    navLink: {
      fontSize: '16px',
      color: '#02073E',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0',
      },
      '&:hover, &.active': {
        color: 'primary',
      },
    },
  },
};
