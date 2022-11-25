import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import { Block, Spacer, Text } from '@components';
import { useTheme } from '@theme';

import { styles } from '../style';

export const PointCard = () => {
  // state
  // const point = useSelector(x => x.app.point);
  const { colors } = useTheme();

  // render
  return (
    <Block
      // colorTheme="primary"
      borderBottomLeftRadius={14}
      borderBottomRightRadius={14}
      marginBottom={6}>
      <LinearGradient
        style={styles.pointCard}
        useAngle
        angle={15}
        locations={[0.1, 0.5, 0.9, 1]}
        angleCenter={{ x: 0.5, y: 0.5 }}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.red_black, '#F0333390', colors.red_black]}>
        <LinearGradient
          style={styles.pointCard}
          useAngle
          angle={-15}
          locations={[0.1, 0.5, 0.9, 1]}
          angleCenter={{ x: 0.5, y: 0.5 }}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.red_black, '#F0333390', colors.red_black]}>
          <Spacer height={25} />
          <Block alignSelf={'center'}>
            <Text
              t18n="point:point_balance"
              preset="linkSmall"
              colorTheme={'white'}
            />
          </Block>
          <Block alignSelf={'center'} direction="row" alignItems={'flex-end'}>
            <Text text={'5000'} preset={'textBold40'} />
            <Text preset={'textBold40'} t18n={'point:point'} />
          </Block>
          <Spacer height={40} />
        </LinearGradient>
      </LinearGradient>
    </Block>
  );
};
