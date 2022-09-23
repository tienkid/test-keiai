import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useWindowDimensions } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useInterpolate } from '@animated';
import { Block, Icon } from '@components';
import {
  handleShowModalLoading,
  ModalLoading,
} from '@components/modal-loading';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';

import { FormInformationProfile } from './components/form-profile';
import { ListPreview } from './components/list-preview';
import { WrapperSteps } from './components/wrapper-steps';
import { STEP_REGISTER_PROFILE, StepValue } from './contain';
import { StepType } from './type';

import { handleHideModalLoading } from '../../../library/components/modal-loading/index';

export const InformationProfile = () => {
  // state
  const { width: WIDTH_SCREEN } = useWindowDimensions();
  const [currentStep, setCurrentStep] = useState(1);
  const translateValue = useSharedValue(0);
  const [height, setHeight] = useState<string | number>('100%');
  const heightMemory = useRef<{ 1: number; 2: number }>({
    1: 0,
    2: 0,
  });

  const translateX = useInterpolate(translateValue, [0, 1], [0, -WIDTH_SCREEN]);
  const reStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  // func
  const handleGetHeight = (height: number, step: StepType) => {
    heightMemory.current[step] = height + (step === StepValue.one ? 10 : 0);
  };
  const handleSubmit = useCallback(() => {
    if (currentStep === STEP_REGISTER_PROFILE - 1) {
      setCurrentStep(currentStep + 1);
    }
    handleShowModalLoading({ title: 'information_profile:registration' });
    setTimeout(() => {
      if (currentStep !== STEP_REGISTER_PROFILE - 1) {
        setCurrentStep(currentStep + 1);
        translateValue.value = withTiming(1);
      }
      handleHideModalLoading();
      if (currentStep === STEP_REGISTER_PROFILE - 1) {
        navigate(APP_SCREEN.LOGIN);
      }
    }, 2000);
  }, [currentStep, translateValue]);

  const handleBackStep = useCallback(() => {
    translateValue.value = withTiming(0);
    setCurrentStep(current => (current - 1 >= 1 ? current - 1 : 1));
  }, [translateValue]);

  // effect
  useEffect(() => {
    const heightOfStep = heightMemory.current?.[currentStep as 1 | 2];
    if (heightOfStep && heightOfStep > 0) {
      setHeight(heightOfStep);
    }
  }, [currentStep, setHeight]);

  // data render
  const listSteps = useMemo(
    () => [
      {
        step: StepValue.one,
        component: (
          <FormInformationProfile
            onSubmit={handleSubmit}
            onGetHeight={handleGetHeight}
          />
        ),
      },
      {
        step: StepValue.two,
        component: (
          <ListPreview
            onBackStep={handleBackStep}
            onSubmit={handleSubmit}
            onGetHeight={handleGetHeight}
          />
        ),
      },
    ],
    [handleBackStep, handleSubmit],
  );

  // render
  return (
    <WrapperSteps
      title={
        currentStep === Number(StepValue.one)
          ? 'information_profile:step_1_title'
          : null
      }
      currentStep={currentStep}
      HeaderTitleComponent={
        currentStep !== Number(StepValue.one) && (
          <Block
            justifyContent={'center'}
            width={105}
            height={26}
            alignSelf={'center'}
            overflow={'hidden'}>
            <Icon icon="icon_text" size={105} />
          </Block>
        )
      }>
      <Animated.View
        style={[
          {
            flexDirection: 'row',
            width: WIDTH_SCREEN * listSteps.length,
          },
          { height },
          reStyle,
        ]}>
        {listSteps.map(item => (
          <React.Fragment key={`${item.step}-key-step`}>
            <Block width={WIDTH_SCREEN - 35} alignSelf={'baseline'}>
              {item.component}
            </Block>
          </React.Fragment>
        ))}
      </Animated.View>
      <ModalLoading />
    </WrapperSteps>
  );
};