import React, { useState } from 'react';
import { Flex } from '@chakra-ui/core';

import SideNav from './sideNav';
import Editor from './editor';
import Toolbar from './toolbar';

const Dashboard = () => {
  const [docInnerHTML, setDocInnerHTML] = useState('');

  return (
    <>
      <Toolbar docInnerHTML={docInnerHTML} />
      <Flex>
        <SideNav />
        <Editor setDocInnerHTML={setDocInnerHTML} />
      </Flex>
    </>
  )
}

export default Dashboard;