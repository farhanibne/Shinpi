import React, { useContext } from 'react';
import { Button, Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from '../drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router'
import Logo from 'components/logo';
import logoDark from 'assets/shinpi.svg';
import Link from 'next/link';
import {firebase } from '../../config/firebase'

const DLogin = () => {

  const router = useRouter()


  const move = () => {
    router.push('/Create')
  }

  const logout = () => {
    firebase.auth().signOut().then(() => {
      router.push('/')

    }).catch((error) => {
      console.log(error)
      return alert("Logout Failed")
    });
  }

  const { state, dispatch } = useContext(DrawerContext);

  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="22px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#02073E" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <img src={logoDark} style={{width:'10%'}} />
          <Box sx={styles.menu}>
            
          </Box>
          <Box sx={styles.menuFooter}>
          <Button style={{
            backgroundColor: '#0F2137',
            fontSize: '16px',
            padding:'15px',
            border:'none',
            width:'90%',
            fontWeight: 'bold',
            letterSpacing: '-0.16px',
            borderRadius: '5px',
            color: '#ffffff',
            display: ['none', null, null, null, 'inline-block'],
            ml: '5px',
            mr: '5px',
            '&:hover': {
            color: '#fff',
            
            }, 
          }} onClick={move}>
            Create Article 
          </Button>
          <br/>
          <Button style={{
            backgroundColor: '#ff4d4d',
            width:'90%',
            fontSize: '16px',
            padding:'15px',
            border:'none',

            fontWeight: 'bold',
            letterSpacing: '-0.16px',
            borderRadius: '5px',
            color: '#ffffff',
            display: ['none', null, null, null, 'inline-block'],
            ml: '5px',
            mr: '5px',
            '&:hover': {
            color: '#fff',
            },
          }} onClick={logout}>
            Logout
          </Button>

          </Box>

       
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 960px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    background: '#fff',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30px',
    right: '30px',
    zIndex: '1',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '30px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',

    a: {
      fontSize: '16px',
      fontWeight: '400',
      color: 'black',
      py: '5px',
      cursor: 'pointer',
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  button: {
    fontSize: '15px',
    fw: '700',
    height: '48px',
    borderRadius: '3px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
    backgroundColor: 'black',
    color: '#fff',
  },
};

export default DLogin;
