import React, { useState } from 'react';

import AnimatedNumbers from 'react-native-animated-numbers';
import LinearGradient from 'react-native-linear-gradient';

import { sizeScale } from '@common';
import { Block, Spacer, Text } from '@components';
import { useSelector } from '@hooks';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from '@theme';

import { styles } from '../style';

export const PointCard = () => {
  // state
  const pointCard = useSelector(x => x.app.point);
  const { colors } = useTheme();
  const [point, setPoint] = useState(pointCard);

  useFocusEffect(
    React.useCallback(() => {
      const timeOut = setTimeout(() => {
        setPoint(pointCard ?? 0);
      }, 500);

      return () => {
        setPoint(0);
        clearTimeout(timeOut);
      };
    }, [pointCard]),
  );

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
        colors={[
          colors.red_black,
          '#F0333390',
          colors.red_black,
          colors.red_black,
        ]}>
        <LinearGradient
          style={styles.pointCard}
          useAngle
          angle={-15}
          locations={[0.1, 0.5, 0.9, 1]}
          angleCenter={{ x: 0.5, y: 0.5 }}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1, y: 0 }}
          colors={[
            colors.red_black,
            '#F0333390',
            colors.red_black,
            colors.red_black,
          ]}>
          <Spacer height={25} />
          <Block alignSelf={'center'}>
            <Text
              t18n="point:point_balance"
              preset="linkSmall"
              colorTheme={'white'}
            />
          </Block>
          <Block alignSelf={'center'} direction="row" alignItems={'flex-end'}>
            <AnimatedNumbers
              includeComma
              animateToNumber={point}
              fontStyle={{
                fontSize: sizeScale(40),
                fontWeight: 'bold',
                color: '#FFFFFF',
              }}
            />
            <Text preset={'textBold40'} t18n={'point:point'} />
          </Block>
          <Spacer height={40} />
        </LinearGradient>
      </LinearGradient>
    </Block>
  );
};
