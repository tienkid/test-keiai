import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
import { Block, Header } from '@components';
import { useFocusEffect } from '@react-navigation/native';
import { getContentAction } from '@redux-slice';

import { BodyContent } from './components/body-content';

const ContentComponent = () => {
  const getContent = () => {
    dispatch(
      getContentAction.getContent({
        page: 1,
        perPage: 10,
      }),
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      getContent();
    }, []),
  );
  // render
  return (
    <Block block colorTheme="background">
      <Header />
      <BodyContent />
    </Block>
  );
};

export const ContentTab = memo(ContentComponent, isEqual);
