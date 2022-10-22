/** @jsx jsx */
import {useState,useEffect} from 'react';
import { jsx, Container, Flex } from 'theme-ui';
import { Link } from 'components/link';
import { Link as ScrollLink } from 'react-scroll';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import DLogin from './d-mob';
import logoDark from 'assets/shinpi.svg';
import {firebase} from '../../config/firebase'
import { useRouter } from 'next/router'
import {Button} from 'theme-ui'




export default function DHeader({ className,user }) {




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


//   const [title,setTitle] = useState('')
//   const [body,setBody] = useState('')
//   const [image,setImage] = useState(null)


// const handleSubmit = () => {
//   firebase.firestore().collection("articles").add({
//     title: title,
//     description: body,
//     Image: image,
//     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//     user: firebase.auth().currentUser,
//   });

//   setTitle("");
//   setBody("");
//   setImage("");
// };

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>

          <img src={logoDark} sx={styles.img}  alt="Shinpi " />
      
          <a style={{textDecoration:'none', color:'black'}} href="/">
         <h4 style={{marginLeft:'10px'}}>Shinpi 神秘</h4>
         </a>
          <Flex as="nav" sx={styles.nav}>
            
              <ScrollLink
              style={{visibility:'hidden'}}
              >
                hi
              </ScrollLink>

          </Flex>

          <Button  sx={styles.headerBtn} style={{
    backgroundColor: '#0F2137',
    fontSize: '16px',
    padding:'15px',
    border:'none',

    fontWeight: 'bold',
    letterSpacing: '-0.16px',
    borderRadius: '5px',
    color: '#ffffff',
    display: ['none', null, null, null, 'inline-block'],
    ml: ['0', null, null, 'auto', '0'],
    mr: ['0', null, null, '20px', '0'],
    '&:hover': {
    color: '#fff',
    },
  }} onClick={move}  >
 
   Create Article
  </Button>

  <Button  sx={styles.headerBtn} style={{
    backgroundColor: '#ff4d4d',
    marginLeft:'10px',
    fontSize: '16px',
    padding:'15px',
    border:'none',

    fontWeight: 'bold',
    letterSpacing: '-0.16px',
    borderRadius: '5px',
    color: '#ffffff',
    display: ['none', null, null, null, 'inline-block'],
    ml: ['0', null, null, 'auto', '0'],
    mr: ['0', null, null, '20px', '0'],
    '&:hover': {
    color: '#fff',
    

    },
  }} onClick={logout}>
    Logout
  </Button>


  <DLogin />
        </Container>
      </header>
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
