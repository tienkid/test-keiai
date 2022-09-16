import React, { useCallback } from 'react';
import { FlatList, TouchableWithoutFeedback } from 'react-native';

import { Block, Button, Divider, Text } from '@components';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useTheme } from '@theme';

import { ListRenderDrawer } from './type';

const CustomDrawer = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const dataMenu = [
    {
      id: 1,
      content: '利用規約',
    },
    {
      id: 2,
      content: 'プライバシーポリシー',
    },
    {
      id: 3,
      content: 'お知らせ',
    },
    {
      id: 4,
      content: 'よくあるご質問',
    },
    {
      id: 5,
      content: '登録情報の確認・更新',
    },
    {
      id: 6,
      content: 'お問い合わせ',
    },
    {
      id: 7,
      content: '利用停止はこちらへ',
    },
    {
      id: 8,
      content: 'ログアウト',
    },
  ];
  const handleRouteDrawer = (id: number) => {
    console.log(id);
    navigation.dispatch(DrawerActions.closeDrawer());
    // navigate('Home');
  };
  const handleHideDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  const keyExtractor = useCallback(item => item.id, []);
  const renderItem = ({ item }: ListRenderDrawer) => {
    return (
      <Button.Default
        style={{ alignItems: 'flex-end', paddingVertical: 7 }}
        onPress={() => handleRouteDrawer(item.id)}>
        <Text
          preset="textBold16"
          colorTheme="base5"
          fontWeight={'700'}
          text={item.content}
        />
      </Button.Default>
    );
  };
  const itemSeparator = () => {
    return <Divider />;
  };
  // render
  return (
    <Block block>
      <TouchableWithoutFeedback onPress={handleHideDrawer}>
        <Block height={90} />
      </TouchableWithoutFeedback>
      <Block
        flex={1}
        color={colors.white}
        paddingVertical={10}
        paddingHorizontal={10}
        borderRadius={5}>
        <Block>
          <FlatList
            data={dataMenu}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={itemSeparator}
          />
        </Block>
        <Block alignItems={'flex-end'} paddingTop={10}>
          <Text
            preset="textBold16"
            colorTheme="base4"
            text={'バージョン：1.0.0'}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default CustomDrawer;
