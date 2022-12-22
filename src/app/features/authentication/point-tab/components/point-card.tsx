import React, { useState } from 'react';

import AnimatedNumbers from 'react-native-animated-numbers';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  EasingNode,
  Easing as OldEasing,
  timing,
} from 'react-native-reanimated';

import { dispatch, generateNumber, sizeScale } from '@common';
import { Block, Button, Spacer, Text } from '@components';
import { useSelector } from '@hooks';
import { useFocusEffect } from '@react-navigation/native';
import { pointAction } from '@redux-slice';
import { useTheme } from '@theme';
import { ColorDefault } from '@theme/color';
import { FontDefault } from '@theme/typography';
import Icon from 'react-native-vector-icons/EvilIcons';

import { styles } from '../style';
const Easing = EasingNode || OldEasing;

export const PointCard = () => {
  // state
  const pointCard = useSelector(x => x.app.point);
  const { colors } = useTheme();
  const [point, setPoint] = useState<string | number>(pointCard);

  useFocusEffect(
    React.useCallback(() => {
      // setPoint(generateNumber(`${pointCard}`, '1'));
      // setTimeout(() => {
      //   setPoint(generateNumberUp(`${pointCard}`));
      // }, 10);
      setPoint(generateNumber(`${pointCard}`, '9'));
      const timeOut = setTimeout(() => {
        setPoint(pointCard ?? 0);
      }, 1000);
      return () => {
        setPoint(generateNumber(pointCard.toString(), '9'));
        clearTimeout(timeOut);
      };
    }, [pointCard]),
  );

  const onGetPointSucceeded = (data: number) => {
    // console.log(data);
    setPoint(generateNumber(`${data}`, '9'));
    // setTimeout(() => {
    //   setPoint(generateNumberUp(`${data}`));
    // }, 10);
    // setTimeout(() => {
    setPoint(data);
    // }, 1000);
    // clearTimeout(timeOut);
  };

  const spinValue = new Animated.Value(0);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  }) as unknown as Animated.Node<string>;

  // func
  const animationPoint = () => {
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

  const handleUpdatePoint = () => {
    dispatch(pointAction.getPoint(onGetPointSucceeded));
    animationPoint();
  };

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
          <Spacer height={10} />
          <Block alignSelf={'center'} direction="row">
            <Spacer width={5} />
            <Block direction="row" alignItems={'flex-end'}>
              <AnimatedNumbers
                animateToNumber={parseInt(point.toString(), 10)}
                animationDuration={2000}
                fontStyle={{
                  fontSize: sizeScale(40),
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  textAlign: 'right',
                  lineHeight: 46,
                  fontFamily: FontDefault.primary,
                }}
                // easing={Easing.circle(1.2)}
              />
              <Block position={'absolute'} right={-30} bottom={2}>
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
          <Block position={'absolute'} bottom={10} right={10}>
            <Button.Default onPress={handleUpdatePoint}>
              <Animated.View
                style={[
                  {
                    transform: [{ rotate: spin }],
                    // backgroundColor: 'white',
                  },
                ]}>
                <Icon name="redo" size={35} color={ColorDefault.white} />
              </Animated.View>
            </Button.Default>
          </Block>
        </LinearGradient>
      </LinearGradient>
    </Block>
  );
};
