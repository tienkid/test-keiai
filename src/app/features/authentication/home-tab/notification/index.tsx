import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block } from '@components';
import { HeaderBack } from '@components/header-back';

import { BodyNotify } from './components/body-notify';

const NotificationComponent = () => {
  // render
  return (
    <Block block colorTheme="background">
      <HeaderBack headerText="notify:header" />
      <BodyNotify />
    </Block>
  );
};

export const NotificationScreen = memo(NotificationComponent, isEqual);
