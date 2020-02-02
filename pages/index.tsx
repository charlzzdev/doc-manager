import React from 'react';
import {
  ThemeProvider,
  CSSReset
} from '@chakra-ui/core';

import { customTheme } from '../customTheme';
import Dashboard from '../components/dashboard';

const Index = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Dashboard />
    </ThemeProvider>
  )
}

export default Index;