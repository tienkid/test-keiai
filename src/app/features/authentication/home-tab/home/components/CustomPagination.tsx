import React from 'react';
import { StyleSheet } from 'react-native';

import { Pagination, PaginationProps } from 'react-native-swiper-flatlist';

import { ColorDefault } from '@theme/color';

const styles = StyleSheet.create({
  paginationContainer: {
    bottom: -18,
    height: 6,
    alignItems: 'center',
  },
  pagination: {
    width: 6,
    height: 6,
    borderRadius: 4,
  },
});

export const CustomPagination = (props: PaginationProps) => {
  return (
    <Pagination
      {...props}
      paginationStyle={styles.paginationContainer}
      paginationStyleItem={styles.pagination}
      paginationDefaultColor={ColorDefault.base4}
      paginationActiveColor={ColorDefault.primary}
    />
  );
};
