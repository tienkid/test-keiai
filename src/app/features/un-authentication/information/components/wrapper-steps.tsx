import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Block, Screen, Text } from '@components';
import { useTheme } from '@theme';
import { I18nKeys } from '@utils/i18n/locales';

import { STEP_REGISTER_PROFILE } from '../contain';
import { WrapperStepsProps } from '../type';

export const WrapperSteps = ({
  title,
  children,
  currentStep = 1,
}: WrapperStepsProps) => {
  // state
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  // render
  return (
    <Block block colorTheme="white">
      <Screen scroll hiddenStatusBar unsafe style={{ paddingTop: insets.top }}>
        <Block>
          <Text center t18n={title} preset={'linkLarge'} colorTheme="text" />
        </Block>
        <Block
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
        </Block>
        {children}
      </Screen>
    </Block>
  );
};
