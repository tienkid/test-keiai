import React, { memo } from 'react';
import { Text, View } from 'react-native';

import isEqual from 'react-fast-compare';

const SettingComponent = () => {
  // render
  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

export const SettingTab = memo(SettingComponent, isEqual);
