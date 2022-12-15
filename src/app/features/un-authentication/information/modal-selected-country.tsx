import React, { useCallback } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { dispatch } from '@common';
import { Block, Divider, ListView, Spacer, Text } from '@components';
import { appActions } from '@redux-slice';

import { ItemProvince } from './components/item-province';
import { CityType, ProvinceType, SelectCountryProps } from './type';

export const ModalSelectedCountry = ({
  route,
  navigation,
}: SelectCountryProps) => {
  const insets = useSafeAreaInsets();
  const { data, type } = route.params;
  const keyExtractor = (item: ProvinceType | CityType, index: number) =>
    item.pref_id.toString() + index.toString();
  const renderSpacer = () => (
    <Block paddingHorizontal={15}>
      <Divider colorTheme="line" />
    </Block>
  );
  const onPressItem = useCallback(
    (item: ProvinceType | CityType) => {
      if (type === 'country') {
        dispatch(appActions.setProvince(item));
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      navigation.navigate({
        name: route.params.screenPrevious as string,
        params: { item, type },
        merge: true,
      });
    },
    [navigation, route.params.screenPrevious, type],
  );
  const renderItemContent = useCallback(
    ({ item }: { item: ProvinceType | CityType }) => {
      return <ItemProvince onPressItem={onPressItem} item={item} type={type} />;
    },
    [onPressItem, type],
  );
  // render
  return (
    <Block colorTheme="background">
      <Block middle paddingVertical={10} shadow colorTheme="white">
        <Text
          text={type === 'country' ? '都道府県' : '市区町村'}
          preset="textBold14"
          colorTheme="base5"
        />
      </Block>
      <Spacer height={5} />

      <Block colorTheme="white" paddingBottom={insets.bottom + 60}>
        <ListView
          data={data ?? []}
          canRefresh={false}
          canLoadMore={true}
          renderItem={renderItemContent}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderSpacer}
          contentInset={{ bottom: insets.bottom + 40 }}
        />
      </Block>
    </Block>
  );
};
