import React from 'react';
import { Flex } from '@chakra-ui/core';

import SideNav from './sideNav';
import Editor from './editor';
import Toolbar from './toolbar';

const Dashboard = () => {
  return (
    <>
      <Toolbar />
      <Flex>
        <SideNav />
        <Editor />
      </Flex>
    </>
  )
}

export default Dashboard;