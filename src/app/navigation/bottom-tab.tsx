import React from 'react';

import { useTranslation } from 'react-i18next';

import { ContentTab } from '@features/authentication/content-tab';
import { HomeTab } from '@features/authentication/home-tab/home';
import { PointTab } from '@features/authentication/point-tab';
import { SettingTab } from '@features/authentication/setting-tab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: '#CCCCCC',
        tabBarStyle: {
          backgroundColor: colors.primary,
          paddingTop: 5,
        },
      }}>
      <BottomTab.Screen
        options={{
          title: t('bottom_tab:home'),
          tabBarIcon: props => (
            <Icon name={'home'} color={props.color} size={30} />
          ),
        }}
        name={BOTTOM_TAB.TAB_HOME}
        component={HomeStackScreen}
      />
      <BottomTab.Screen
        options={{
          title: t('bottom_tab:content'),
          tabBarIcon: props => (
            <Icon name={'article'} color={props.color} size={30} />
          ),
        }}
        name={BOTTOM_TAB.TAB_CONTENT}
        component={ContentStackScreen}
      />
      <BottomTab.Screen
        options={{
          title: t('bottom_tab:point'),
          tabBarIcon: props => (
            <Icon name={'stars'} color={props.color} size={30} />
          ),
        }}
        name={BOTTOM_TAB.TAB_POINT}
        component={PointStackScreen}
      />
      <BottomTab.Screen
        options={{
          title: t('bottom_tab:setting'),
          tabBarIcon: props => (
            <Icon name={'build'} color={props.color} size={30} />
          ),
        }}
        name={BOTTOM_TAB.TAB_SETTING}
        component={SettingStackScreen}
      />
    </BottomTab.Navigator>
  );
};
