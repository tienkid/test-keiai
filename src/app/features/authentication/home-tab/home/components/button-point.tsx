import React from 'react';

import { Block, Button, Text } from '@components';
import { useSelector } from '@hooks';
import { navigate } from '@navigation/navigation-service';
import { BOTTOM_TAB } from '@navigation/screen-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ButtonPoint = () => {
  // state
  const point = useSelector(x => x.app.point);
  //func
  const handleGoToPointScreen = () => {
    navigate(BOTTOM_TAB.TAB_POINT);
  };

  // render
  return (
    <Block middle height={80} padding={15}>
      <Button.Default
        buttonColorTheme="primary"
        onPress={handleGoToPointScreen}
        style={{
          flex: 1,
          width: '100%',
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          justifyContent: 'space-between',
        }}>
        <Text preset="textNormal" t18n="home:text_point" />
        <Block direction={'row'} alignItems={'center'} justifyContent="center">
          <Text preset="textNormal">{point} P</Text>
          <Icon name="chevron-right" size={25} color={'#FFFFFF'} />
        </Block>
      </Button.Default>
    </Block>
  );
};
