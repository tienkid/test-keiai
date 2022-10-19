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
import { Block } from '@components';
import { handleShowModalLoading } from '@components/modal-loading';
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
  const [height, setHeight] = useState<{ 1: number; 2: number } | null>(null);
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
        navigate(APP_SCREEN.REGISTER);
      }
    }, 2000);
  }, [currentStep, translateValue]);

  const handleBackStep = useCallback(() => {
    translateValue.value = withTiming(0);
    setCurrentStep(current => (current - 1 >= 1 ? current - 1 : 1));
  }, [translateValue]);

  // effect
  useEffect(() => {
    if (!height) {
      setHeight(heightMemory.current);
    }
  }, [height, setHeight]);

  // data render
  const listSteps = useMemo(
    () => [
      {
        step: StepValue.one,
        component: <FormInformationProfile onSubmit={handleSubmit} />,
      },
      {
        step: StepValue.two,
        component: (
          <ListPreview
            onBackStep={handleBackStep}
            onSubmit={handleSubmit}
            onGetHeight={handleGetHeight}
            currentHeight={heightMemory.current?.[StepValue.two]}
          />
        ),
      },
    ],
    [handleBackStep, handleSubmit],
  );

  // render
  return (
    <WrapperSteps
      title={'information_profile:step_1_title'}
      currentStep={currentStep}>
      <Animated.View
        style={[
          {
            flexDirection: 'row',
            width: WIDTH_SCREEN * listSteps.length,
          },
          { height: height?.[currentStep as 1 | 2] || '100%' },
          reStyle,
        ]}>
        {listSteps.map(item => (
          <React.Fragment key={`${item.step}-key-step`}>
            <Block block>{item.component}</Block>
          </React.Fragment>
        ))}
      </Animated.View>
    </WrapperSteps>
  );
};
