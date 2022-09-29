import React, { useEffect, useRef } from 'react';

import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Block, Screen, Text } from '@components';

import { WrapperStepsProps } from '../type';

export const WrapperSteps = ({
  title,
  children,
  currentStep = 1,
  HeaderTitleComponent = null,
}: WrapperStepsProps) => {
  // state
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<Animated.ScrollView | undefined | null>(undefined);

  // effect
  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({ y: 0, x: 0, animated: true });
    }, 500);
  }, [currentStep]);

  // render
  return (
    <Block block colorTheme="white">
      <Block paddingTop={insets.top}>
        {title && (
          <Block>
            <Text center t18n={title} preset={'linkLarge'} colorTheme="text" />
          </Block>
        )}
        {HeaderTitleComponent}
        {/* <Block
          direction={'row'}
          justifyContent="space-between"
          marginTop={26}
          paddingHorizontal={10}>
          {Array(STEP_REGISTER_PROFILE)
            .fill(0)
            .map((_, index) => (
              <React.Fragment key={`${index}-key`}>
                <Block
                  colorTheme={currentStep === index + 1 ? 'primary' : 'border'}
                  height={20}
                  width={index !== 2 ? 95 : 110}
                  marginLeft={3}
                  alignItems={'center'}
                  justifyContent={'center'}
                  marginRight={3}
                  paddingLeft={index !== 2 ? 10 : 0}>
                  <Text
                    t18n={`information_profile:step_${index + 1}` as I18nKeys}
                    colorTheme="white"
                    center
                    preset="linkXXSmall"
                    fontWeight={'700'}
                  />
                  {index !== 2 ? (
                    <Block
                      position={'absolute'}
                      right={-20}
                      color="transparent"
                      borderLeftWidth={20}
                      borderLeftColor={
                        currentStep === index + 1
                          ? theme.colors.primary
                          : theme.colors.border
                      }
                      borderTopWidth={10}
                      borderBottomWidth={10}
                      borderTopColor={'transparent'}
                      borderBottomColor={'transparent'}
                      width={0}
                      height={0}
                    />
                  ) : null}
                </Block>
              </React.Fragment>
            ))}
        </Block> */}
      </Block>
      <Screen
        onGetRef={ref => (scrollRef.current = ref)}
        scroll
        hiddenStatusBar
        unsafe>
        {children}
      </Screen>
    </Block>
  );
};
