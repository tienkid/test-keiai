import React, { forwardRef, useImperativeHandle, useState } from 'react';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { useInterpolate } from '@animated';
import { sizeScale } from '@common';
import { Block } from '@components/block';
import { Icon } from '@components/icon';
import { Modal } from '@components/modal';
import { Spacer } from '@components/spacer';
import { Text } from '@components/text';
import { I18nKeys } from '@utils/i18n/locales';

interface ModalLoadingProps {
  show: (props: ShowModalLoadingProps) => void;
  hide: () => void;
}

const ModalLoadingComponent = forwardRef((_, ref) => {
  // state
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState<I18nKeys | undefined>(undefined);
  const spinValue = useSharedValue(0);

  const spin = useInterpolate(spinValue, [0, 1], [0, 360]);

  const reStyleSpin = useAnimatedStyle(() => ({
    transform: [{ rotate: `${spin.value}deg` }],
  }));

  // effect
  useImperativeHandle(
    ref,
    () => ({
      show: ({ title: titleValue }: ShowModalLoadingProps) => {
        setIsVisible(true);
        !!titleValue && setTitle(titleValue);
        spinValue.value = withRepeat(
          withTiming(1, {
            duration: 1000,
            easing: Easing.linear,
          }),
          -1,
        );
      },
      hide: () => {
        setIsVisible(false);
        setTitle(undefined);
        spinValue.value = 0;
      },
    }),
    [spinValue],
  );

  // render
  return (
    <Modal
      isVisible={isVisible}
      hasGesture={false}
      style={{ justifyContent: 'flex-start', paddingTop: sizeScale(150) }}>
      <Block width={'100%'} alignItems={'center'}>
        <Block
          alignItems={'center'}
          colorTheme="white"
          height={211}
          width={'90%'}
          borderRadius={8}>
          <Spacer height={30} />
          <Text
            t18n={title ? title : 'login:loading_title'}
            preset="linkMedium"
          />
          <Spacer height={50} />
          <Animated.View style={[reStyleSpin]}>
            <Icon icon="ic_loading_dot" size={60} colorTheme="primary" />
          </Animated.View>
        </Block>
      </Block>
    </Modal>
  );
});

const refLoadingComponent = React.createRef<ModalLoadingProps>();

interface ShowModalLoadingProps {
  title?: I18nKeys;
}

export const ModalLoading = () => (
  <ModalLoadingComponent ref={refLoadingComponent} />
);

export const handleShowModalLoading = (props?: ShowModalLoadingProps) => {
  refLoadingComponent.current?.show(props || {});
};

export const handleHideModalLoading = () => {
  refLoadingComponent.current?.hide();
};
