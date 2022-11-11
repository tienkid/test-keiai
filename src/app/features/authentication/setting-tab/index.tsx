import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, Button, Header, Spacer, StackView } from '@components';

import { KeiaiList } from './components/keiaiList';

import { ListService } from '../home-tab/home/components/list-service';

const SettingComponent = () => {
  // render
  return (
    <Block block colorTheme="background">
      <Header />
      <Spacer height={15} />
      <StackView style={{ flex: 1 }}>
        <Block>
          <KeiaiList />
        </Block>
        <Spacer height={15} />
        <Block paddingHorizontal={20}>
          <Button.Outline t18n="profile:inquiries" />
        </Block>
        <Spacer height={15} />
        <ListService />
      </StackView>
    </Block>
  );
};

export const SettingTab = memo(SettingComponent, isEqual);
