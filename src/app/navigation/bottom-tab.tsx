import React from 'react';

import { useTranslation } from 'react-i18next';

import { Block, Icon, Text } from '@components';
import { ContentDetail } from '@features/authentication/content-tab/content-detail';
import { ContentTab } from '@features/authentication/content-tab/content-screen';
import { HomeTab } from '@features/authentication/home-tab/home';
import { NotificationScreen } from '@features/authentication/home-tab/notification';
import { NotifyDetail } from '@features/authentication/home-tab/notification-detail';
import { PointTab } from '@features/authentication/point-tab';
import { SettingTab } from '@features/authentication/setting-tab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@theme';

import {
  BOTTOM_TAB,
  CONTENT_STACK,
  HOME_STACK,
  POINT_STACK,
  SETTING_STACK,
} from './screen-types';

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  // render
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={HOME_STACK.HOME} component={HomeTab} />
      <HomeStack.Screen
        name={HOME_STACK.NOTIFY}
        component={NotificationScreen}
      />
      <HomeStack.Screen
        name={HOME_STACK.NOTIFY_DETAIL}
        component={NotifyDetail}
      />
    </HomeStack.Navigator>
  );
};

const PointStack = createStackNavigator();

export const PointStackScreen = () => {
  // render
  return (
    <PointStack.Navigator screenOptions={{ headerShown: false }}>
      <PointStack.Screen name={POINT_STACK.POINT} component={PointTab} />
    </PointStack.Navigator>
  );
};

const ContentStack = createStackNavigator();

export const ContentStackScreen = () => {
  // render
  return (
    <ContentStack.Navigator screenOptions={{ headerShown: false }}>
      <ContentStack.Screen
        name={CONTENT_STACK.CONTENT}
        component={ContentTab}
      />
      <ContentStack.Screen
        name={CONTENT_STACK.CONTENT_DETAIL}
        component={ContentDetail}
      />
    </ContentStack.Navigator>
  );
};

const SettingStack = createStackNavigator();

export const SettingStackScreen = () => {
  // render
  return (
    <SettingStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingStack.Screen
        name={SETTING_STACK.SETTING}
        component={SettingTab}
      />
    </SettingStack.Navigator>
  );
};

export const BottomTabScreen = () => {
  // state
  const { colors } = useTheme();
  const [t] = useTranslation();
  // func

  // render
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#CCCCCC',
        tabBarStyle: {
          backgroundColor: colors.white,
          paddingTop: 5,
        },
      }}>
      <BottomTab.Screen
        options={{
          title: t('bottom_tab:home'),
          tabBarIcon: props => (
            <Icon icon={'home'} color={props.color} size={30} />
          ),
        }}
        name={BOTTOM_TAB.TAB_HOME}
        component={HomeStackScreen}
      />
      <BottomTab.Screen
        options={{
          title: t('bottom_tab:content'),
          tabBarIcon: props => (
            <Icon icon={'content'} color={props.color} size={30} />
          ),
        }}
        name={BOTTOM_TAB.TAB_CONTENT}
        component={ContentStackScreen}
      />
      <BottomTab.Screen
        options={{
          title: '',
          tabBarIcon: props => (
            <Block
              width={66}
              height={66}
              colorTheme="white"
              shadow
              borderRadius={33}
              borderColor={colors.border}
              borderWidth={0.5}
              justifyContent="center"
              zIndex={3}
              middle>
              <Block
                width={56}
                height={56}
                colorTheme={props.focused ? 'primary' : 'border'}
                justifyContent="center"
                middle
                zIndex={1}
                borderRadius={28}>
                <Icon
                  icon={'home_search'}
                  color={props.color}
                  size={30}
                  colorTheme="white"
                />
                <Text
                  t18n="bottom_tab:my_home"
                  preset="textXXSmall"
                  colorTheme="white"
                />
              </Block>
              <Block
                position={'absolute'}
                colorTheme="white"
                width={80}
                height={56}
                bottom={-6}
              />
            </Block>
          ),
        }}
        name={BOTTOM_TAB.TAB_MY_HOME}
        component={ContentStackScreen}
      />
      <BottomTab.Screen
        options={{
          title: t('bottom_tab:setting'),
          tabBarIcon: props => (
            <Icon icon={'service'} color={props.color} size={30} />
          ),
        }}
        name={BOTTOM_TAB.TAB_SETTING}
        component={SettingStackScreen}
      />
      <BottomTab.Screen
        options={{
          title: t('bottom_tab:point'),
          tabBarIcon: props => (
            <Icon icon={'point'} color={props.color} size={30} />
          ),
        }}
        name={BOTTOM_TAB.TAB_POINT}
        component={PointStackScreen}
      />
    </BottomTab.Navigator>
  );
};
