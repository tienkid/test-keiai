import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, Header } from '@components';

const ContentDetailComponent = () => {
  // render
  return (
    <Block block colorTheme="background">
      <Header />
    </Block>
  );
};

export const ContentDetail = memo(ContentDetailComponent, isEqual);
