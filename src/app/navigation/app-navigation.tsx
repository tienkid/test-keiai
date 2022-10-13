import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';

import { dispatch, RXStore } from '@common';
import {
  hideLoading,
  PortalHost,
  ProgressDialog,
  showLoading,
  SnackBar,
} from '@components';
import { ImageTransition } from '@components/light-box/image-transition';
import { ModalLoading } from '@components/modal-loading';
import { useSelector } from '@hooks';
import { AppModule } from '@native-module';
import { navigationRef } from '@navigation/navigation-service';
import { RootNavigation } from '@navigation/root-navigator';
import analytics from '@react-native-firebase/analytics';
import { NavigationContainer } from '@react-navigation/native';
import { appActions } from '@redux-slice';
import { MyAppTheme } from '@theme';

export const AppContainer = () => {
  // state
  const { loadingApp, showDialog, theme } = useSelector(x => x.app);
  const routeNameRef = useRef<string | undefined>(undefined);

  // effect
  useEffect(() => {
    dispatch(appActions.startLoadApp());
    (async () => {
      await analytics().logAppOpen();
      await analytics().setAnalyticsCollectionEnabled(true);
    })();
  }, []);

  useEffect(() => {
    if (showDialog) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [showDialog]);

  useEffect(() => {
    if (theme === 'dark') {
      AppModule.setIQKeyboardOption({
        keyboardAppearance: 'dark',
      });
    } else {
      AppModule.setIQKeyboardOption({
        keyboardAppearance: 'light',
      });
    }
  }, [theme]);

  // render
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={MyAppTheme[theme]}
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        if (currentRouteName && previousRouteName !== currentRouteName) {
          console.log({ currentRouteName });

          await analytics().logScreenView({
            screen_class: currentRouteName,
            screen_name: currentRouteName,
          });
        }

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}>
      <>
        <StatusBar translucent backgroundColor={'transparent'} />
        {!loadingApp && (
          <>
            <PortalHost name={'AppModal'} />
            <RootNavigation />
            <ProgressDialog />
            <SnackBar />
            <ImageTransition />
            <ModalLoading />
          </>
        )}
        <RXStore />
      </>
    </NavigationContainer>
  );
};
