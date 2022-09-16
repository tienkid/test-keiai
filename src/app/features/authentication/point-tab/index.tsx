import React, { memo } from 'react';
import { Text, View } from 'react-native';

import isEqual from 'react-fast-compare';

const PointComponent = () => {
  // render
  return (
    <View>
      <Text>Point</Text>
    </View>
  );
};

export const PointTab = memo(PointComponent, isEqual);
