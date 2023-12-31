// import { Home } from '@features/authentication/home';
// import { Login } from '@features/un-authentication/login';
// import { WelcomeScreen } from '@features/un-authentication/welcome';
import React, { useEffect } from 'react';

import BootSplash from 'react-native-bootsplash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { InformationProfileStep2 } from '@features/un-authentication/infomation-step2';
import { InformationProfile } from '@features/un-authentication/information';
import { ModalSelectedCountry } from '@features/un-authentication/information/modal-selected-country';
import { Login } from '@features/un-authentication/login';
import { OTPScreen } from '@features/un-authentication/otp-screen';
import { Register } from '@features/un-authentication/register';
// import { WelcomeScreen } from '@features/un-authentication/welcome';
import { WelcomeScreen } from '@features/un-authentication/welcome';
import { useSelector } from '@hooks';
import { AppModule } from '@native-module';
import { APP_SCREEN, RootStackParamList } from '@navigation/screen-types';
import { createStackNavigator } from '@react-navigation/stack';

import { DrawerNavigator } from './drawer';

import { isIos } from '../common/method';

// import { CarouselAdvance } from '../course-animation/Advanced-carousel';
// import { CarouselParallax } from '../course-animation/parallax-carousel';

// import { Carousel3D } from '../course-animation/carousel-3d';
// import { HomeAnimate } from '../course-animation/home';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  // state
  const token = useSelector(x => x.app.token);
  const profile = useSelector(x => x.app.profile);

  // effect
  useEffect(() => {
    const id = setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!token) {
      // clean cache when logout
      AppModule.clearCache();
    }
  }, [token]);
  const insets = useSafeAreaInsets();
  // render
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!profile?.phone_number ? (
        <RootStack.Group
          screenOptions={{
            animationTypeForReplace: 'pop',
            gestureEnabled: false,
          }}>
          {/* <RootStack.Screen
            name={APP_SCREEN.HOME_ANIMATE}
            component={HomeAnimate}
          /> */}
          {/* <RootStack.Screen
            name={APP_SCREEN.CAROUSEL_3D}
            component={Carousel3D}
          /> */}
          {/* <RootStack.Screen
            name={APP_SCREEN.CAROUSEL_PARALLAX}
            component={CarouselParallax}
          /> */}
          {/* <RootStack.Screen
            name={APP_SCREEN.CAROUSEL_ADVANCED}
            component={CarouselAdvance}
          /> */}
          <RootStack.Screen
            name={APP_SCREEN.WELCOME}
            component={WelcomeScreen}
          />
          <RootStack.Screen name={APP_SCREEN.LOGIN} component={Login} />
          <RootStack.Screen name={APP_SCREEN.REGISTER} component={Register} />
          <RootStack.Screen
            name={APP_SCREEN.OTP_SCREEN}
            component={OTPScreen}
          />
          <RootStack.Screen
            name={APP_SCREEN.INFORMATION_PROFILE}
            component={InformationProfile}
          />
          <RootStack.Screen
            name={APP_SCREEN.INFORMATION_PROFILE_STEP2}
            component={InformationProfileStep2}
          />
          <RootStack.Group
            screenOptions={{
              presentation: 'modal',
              headerStyle: { backgroundColor: 'transparent' },
              headerTransparent: true,
              cardStyle: { marginTop: isIos ? 10 : insets.top + 10 },
            }}>
            <RootStack.Screen
              name={APP_SCREEN.MODAL_SELECTED_COUNTY}
              component={ModalSelectedCountry}
            />
          </RootStack.Group>
        </RootStack.Group>
      ) : (
        <RootStack.Group
          screenOptions={{
            gestureEnabled: false,
          }}>
          <RootStack.Screen
            name={APP_SCREEN.AUTHORIZE}
            component={DrawerNavigator}
          />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};
