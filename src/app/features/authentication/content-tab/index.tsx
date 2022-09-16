import React, { memo } from 'react';
import { Text, View } from 'react-native';

import isEqual from 'react-fast-compare';

const ContentComponent = () => {
  // render
  return (
    <View>
      <Text>Content</Text>
    </View>
  );
};

export const ContentTab = memo(ContentComponent, isEqual);
