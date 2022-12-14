import React, { useState } from 'react';

import AnimatedNumbers from 'react-native-animated-numbers';
import LinearGradient from 'react-native-linear-gradient';

import { sizeScale } from '@common';
import { Block, Spacer, Text } from '@components';
import { useSelector } from '@hooks';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from '@theme';

// import { pointAction } from '@redux-slice';
// import { ColorDefault } from '@theme/color';
// import Animated, { Easing, timing } from 'react-native-reanimated';
// import Icon from 'react-native-vector-icons/EvilIcons';
import { styles } from '../style';

export const PointCard = () => {
  // state
  const pointCard = useSelector(x => x.app.point);
  const { colors } = useTheme();
  const [point, setPoint] = useState(pointCard);
  // const spinValue = new Animated.Value(0);

  // const spin = spinValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '720deg'],
  // }) as unknown as Animated.Node<string>;

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

  // const onGetPointSucceeded = (data: number) => {
  //   setPoint(data);
  // };
  // const handleUpdatePoint = () => {
  //   setPoint(0);
  //   dispatch(pointAction.getPoint(onGetPointSucceeded));
  //   const timingValue = timing(spinValue, {
  //     toValue: 1,
  //     duration: 3000,
  //     easing: Easing.linear as never,
  //   });

  //   timingValue.start(() => {
  //     timingValue.stop();
  //     setTimeout(() => {
  //       spinValue.setValue(0);
  //     }, 100);
  //   });
  // };
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
          <Block alignSelf={'center'} direction="row">
            <Block direction="row" alignItems={'flex-end'}>
              <AnimatedNumbers
                includeComma
                animateToNumber={point}
                fontStyle={{
                  fontSize: sizeScale(40),
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  textAlign: 'right',
                  padding: 0,
                }}
              />
              <Block position={'absolute'} right={-30} bottom={4}>
                <Text
                  preset={'textBold30'}
                  t18n={'point:point'}
                  textAlign="center"
                />
              </Block>
            </Block>
            <Text
              color={'transparent'}
              preset={'textBold30'}
              t18n={'point:point'}
              textAlign="center"
            />
          </Block>

          <Spacer height={40} />
          {/* <Block position={'absolute'} bottom={10} right={10}>
            <Button.Default onPress={handleUpdatePoint}>
              <Animated.View style={[{ transform: [{ rotate: spin }] }]}>
                <Icon name="redo" size={35} color={ColorDefault.white} />
              </Animated.View>
            </Button.Default>
          </Block> */}
        </LinearGradient>
      </LinearGradient>
    </Block>
  );
};
