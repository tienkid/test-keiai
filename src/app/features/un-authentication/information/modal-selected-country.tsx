import React, { useCallback } from 'react';
import { Platform } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { dispatch } from '@common';
import { Block, Button, Divider, ListView, Spacer, Text } from '@components';
import { goBack } from '@navigation/navigation-service';
import { appActions } from '@redux-slice';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const handleGoBack = () => {
    goBack();
  };
  const renderItemContent = useCallback(
    ({ item }: { item: ProvinceType | CityType }) => {
      return <ItemProvince onPressItem={onPressItem} item={item} type={type} />;
    },
    [onPressItem, type],
  );
  // render
  return (
    <Block color="transparent">
      <Block
        middle
        paddingVertical={15}
        shadow
        colorTheme="white"
        justifyContent={'center'}
        direction={'row'}>
        <Text
          text={type === 'country' ? '都道府県' : '市区町村'}
          preset="textBold14"
          colorTheme="base5"
        />
        <Button.Default
          onPress={handleGoBack}
          style={{ position: 'absolute', right: 10 }}>
          <Icon name="close" size={25} color="#4C4C4C" />
        </Button.Default>
      </Block>
      <Spacer height={5} />

      <Block
        colorTheme="white"
        paddingBottom={insets.bottom + Platform.OS === 'ios' ? 60 : 110}>
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
