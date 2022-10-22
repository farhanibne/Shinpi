import React,{  useRef, useState  } from 'react'
import { firebase } from '../../config/firebase'
import { Box, Container} from "theme-ui";
import {Label,Input,Button} from "theme-ui";
import { useRouter } from 'next/router'

function Loginpage() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter();


  const login = async (e) => {
    e.preventDefault()
    setLoading(true)
    const email = emailRef.current.value
    const password = passwordRef.current.value
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      router.push("/Dashboard")
      console.log("login success")
    } catch (error) {
      setError(error.message)
      return alert("Wrong email or password")
    }
    setLoading(false)
  }

  
  



  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.container}>
          <h2>Login to Shinpi 神秘</h2>

          <Label htmlFor="username">Email</Label>
          <input name="email" id="email" mb={3}  ref={emailRef} autoComplete="off"  placeholder='Email' style={{
                fontSize: "28px",
                color: "black",
                marginTop: "28px",
                marginLeft: "25px",
                marginBottom: "10px",
                borderRadius:'5px 5px 0 0 ',
                width:'90%',
                outline:'none',
                background:'transparent',
                border:'none',
                padding:'15px',
                margin:'25px',
                borderBottom:'3px solid #d9d9d9'
              }}/>
          <Label htmlFor="password">Password</Label>
          <input type="password" name="password" id="password" mb={3} autoComplete="off" ref={passwordRef} placeholder="Password" style={{
                fontSize: "28px",
                color: "black",
                marginTop: "28px",
                marginLeft: "25px",
                marginBottom: "10px",
                borderRadius:'5px 5px 0 0 ',
                width:'90%',
                outline:'none',
                background:'transparent',
                border:'none',
                padding:'15px',
                borderBottom:'3px solid #d9d9d9',
                margin:'25px',
              }}/>     <br/><br/>
          <Button style={{backgroundColor:'black'}} id="myBtn" onClick={login}>Login</Button>

      </Container>
    </Box>
  );
}


const styles = {
  banner: {
    overflow: "hidden",
    backgroundColor: "#F9FBFD",
    width:'100%',
    height:'100%',
    position:'absolute',
    textAlign: "center",
    pt: ["110px", null, null, null, "130px"],
    h2: {
      fontSize: ["28px", null, null, "32px", "38px", "48px", "64px"],
      lineHeight: 1.25,
      color: "#02073E",
      fontWeight: 700,
      width: "100%",
      maxWidth: ["100%", null, null, "55%", "500px", "640px", "851px"],
      mx: "auto",
      mt: "30px",
      mb: ["40px", null, null, "65px"],
    },
  },
  logo: {
    display: "block",
    width: "7%",
    borderRadius: "50%",
    mx: "auto",
    boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.12)",
  },
  bannerImage: {
    display: "block",
    mx: "auto",
    position: "relative",
    maxWidth: ["100%", null, null, "80%", null, "100%"],
  },
  container: {
    position: "relative",
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"],
    },
  },
};

export default Loginpage;
