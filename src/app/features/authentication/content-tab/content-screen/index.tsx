import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, Header } from '@components';

import { BodyContent } from './components/body-content';

const ContentComponent = () => {
  // const getContent = () => {
  //   dispatch(
  //     getContentAction.getContent({
  //       page: 1,
  //       perPage: 10,
  //     }),
  //   );
  // };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getContent();
  //   }, []),
  // );

  // render
  return (
    <Block block colorTheme="white">
      <Header />
      <BodyContent />
    </Block>
  );
};

export const ContentTab = memo(ContentComponent, isEqual);
