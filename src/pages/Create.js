import React from 'react'
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import QQ from '../components/Dashboard/QQ';
import CNavbar from '../components/Create/CNavbar';
import {firebase } from '../config/firebase'
import Noentry from './Noentry';

function Create() {
  if(firebase.auth().currentUser != null){
  return (
  
    <ThemeProvider theme={theme}>
      <QQ/>
  </ThemeProvider>
  )}
  else{
    return(
      <Noentry/>
    )
  }
}

export default Create