import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, Header } from '@components';

import { BodyNotify } from './components/body-notify';

const NotificationComponent = () => {
  // render
  return (
    <Block block colorTheme="background">
      <Header />
      <BodyNotify />
    </Block>
  );
};

export const NotificationScreen = memo(NotificationComponent, isEqual);
