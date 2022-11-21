import React from 'react'
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Panel from 'components/Dashboard/Panel';
import Layout from 'components/layoutd';
import {firebase} from '../config/firebase'
import Noentry from './Noentry';
import Search from 'components/Dashboard/Search';





function Dashboard() {
  if(firebase.auth().currentUser != null){
    return (
      <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
        <Panel />  
        </Layout>
      </StickyProvider>
    </ThemeProvider>
    )
  }

  else{
    return(
    <Noentry/>
  )}
  
}

export default Dashboard
