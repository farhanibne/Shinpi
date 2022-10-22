import LoginHeader from 'components/login/Login-header'
import React from 'react'
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Loginpage from 'components/login/Loginpage';
import Layoutlo from 'components/layoutlo';

function Login() {
  return (
   

    <ThemeProvider theme={theme}>
    <StickyProvider>
      <Layoutlo>
        <SEO title="Shinpi 神秘" />

      <LoginHeader/>

      <Loginpage/>


      </Layoutlo>
      </StickyProvider>
    </ThemeProvider>
    

  )
}

export default Login