import React from 'react';
import { StyleSheet } from 'react-native';

import { Pagination, PaginationProps } from 'react-native-swiper-flatlist';

import { ColorDefault } from '@theme/color';

const styles = StyleSheet.create({
  paginationContainer: {
    bottom: -32,
  },
  pagination: {
    width: 8,
    height: 8,
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
