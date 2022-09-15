import React from 'react';

import { Block, Button, WrapperBackground } from '@components';

export const WelcomeScreen = () => {
  // render
  return (
    <WrapperBackground title="会員登録済みの方">
      <Block paddingHorizontal={24}>
        <Button.Primary text="SMS認証をしてアプリ利用を開始" />
      </Block>
    </WrapperBackground>
  );
};
