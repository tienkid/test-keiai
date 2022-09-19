import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, Header } from '@components';

import { BodyContent } from './components/body-content';

const ContentComponent = () => {
  // render
  return (
    <Block block colorTheme="background">
      <Header />
      <BodyContent />
    </Block>
  );
};

export const ContentTab = memo(ContentComponent, isEqual);
