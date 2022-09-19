import React from 'react';

import Animated, { Easing, timing } from 'react-native-reanimated';

import { Block, Button, Icon, Spacer, Text } from '@components';

export const PointCard = () => {
  // state
  const spinValue = new Animated.Value(0);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  }) as unknown as Animated.Node<string>;

  // func
  const handleUpdatePoint = () => {
    const timingValue = timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear as never,
    });

    timingValue.start(() => {
      timingValue.stop();
      setTimeout(() => {
        spinValue.setValue(0);
      }, 100);
    });
  };

  // render
  return (
    <Block colorTheme="primary" width={'100%'} height={220} borderRadius={14}>
      <Block paddingHorizontal={20} paddingTop={16}>
        <Text
          t18n="point:ki_club_member"
          preset="linkMedium"
          colorTheme={'white'}
        />
        <Spacer height={5} />
        <Block width={'100%'} height={1} colorTheme={'white'} />
      </Block>
      <Spacer height={35} />
      <Block alignSelf={'flex-end'}>
        <Text
          t18n="point:point_balance"
          preset="linkMedium"
          colorTheme={'white'}
        />
      </Block>
      <Block alignSelf={'flex-end'}>
        <Text
          t18n="point:point"
          t18nOptions={{
            point: 1000,
          }}
          preset={'textBold40'}
        />
      </Block>
      <Block block justifyContent={'flex-end'}>
        <Block
          direction={'row'}
          justifyContent="space-between"
          paddingHorizontal={20}
          paddingBottom={18}>
          <Text text="Đặng Thái Giám" colorTheme="white" preset="textBold16" />
          <Button.Default onPress={handleUpdatePoint}>
            <Animated.View style={[{ transform: [{ rotate: spin }] }]}>
              <Icon icon="auto_renew" size={25} />
            </Animated.View>
          </Button.Default>
        </Block>
      </Block>
    </Block>
  );
};
