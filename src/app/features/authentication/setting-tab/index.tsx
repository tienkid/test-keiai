import React, { memo } from 'react';
import { Linking } from 'react-native';

import isEqual from 'react-fast-compare';

import { Block, Button, Header, Spacer, StackView } from '@components';
import { useTheme } from '@theme';

import { KeiaiList } from './components/keiaiList';
import { DataService } from './type';

// import { ListService } from '../home-tab/home/components/list-service';
export const dataFake: DataService[] = [
  {
    id: 1,
    text: 'アンテナ、照明、カーテンレールなど まとめてお得パックをご紹介！！',
    sign: 'KEIAI',
  },
  {
    id: 2,
    text: '8,800円から作れるオリジナル表札',
    sign: '株式会社日本エクステリア',
  },
  {
    id: 3,
    text: 'unico｜特別ご優待券',
    sign: 'unico',
  },
  {
    id: 5,
    text: 'アート引越センター特別優待特典',
    sign: 'アート引越センター',
  },
  {
    id: 4,
    text: 'シャワーヘッド“ミラブルPlus”',
    sign: '株式会社サイエンス',
  },
];
const SettingComponent = () => {
  // render
  const { colors } = useTheme();

  const handleSubmit = () => {
    Linking.openURL('https://owners.ki-group.jp/app/inquiry/');
  };
  return (
    <Block block colorTheme="base3">
      <Header />
      <Spacer height={2} />
      <StackView style={{ flex: 1, backgroundColor: colors.white }}>
        <Block colorTheme="white">
          <Spacer height={20} />
          <Block>
            <KeiaiList />
          </Block>
          <Spacer height={15} />
          <Block paddingHorizontal={20} middle>
            <Button.Primary t18n="profile:inquiries" onPress={handleSubmit} />
          </Block>
          <Spacer height={15} />
        </Block>
        {/* <Block marginTop={5} colorTheme="white">
          <ListService
            data={dataFake.slice(0, 4)}
            title="service:housing_facilities"
          />
        </Block>
        <Block marginTop={5} colorTheme="white">
          <ListService
            data={dataFake.slice(0, 2)}
            title="service:construction"
          />
        </Block>
        <Block marginTop={5} colorTheme="white">
          <ListService data={dataFake.slice(0, 3)} title="service:moving" />
        </Block>
        <Block marginTop={5} colorTheme="white">
          <ListService
            data={dataFake.slice(0, 3)}
            title="service:design_services"
          />
        </Block>
        <Block marginTop={5} colorTheme="white">
          <ListService
            data={dataFake.slice(0, 2)}
            title="service:home_appliances"
          />
        </Block>
        <Block marginTop={5} colorTheme="white">
          <ListService
            data={dataFake.slice(0, 2)}
            title="service:storage_and_cleaning"
          />
        </Block>
        <Block marginTop={5} colorTheme="white">
          <ListService
            data={dataFake.slice(0, 2)}
            title="service:car_service"
          />
        </Block>
        <Block marginTop={5} colorTheme="white">
          <ListService
            data={dataFake.slice(0, 1)}
            title="service:energy_service"
          />
        </Block> */}
        <Block colorTheme="white">
          <Spacer height={50} />
        </Block>
      </StackView>
    </Block>
  );
};

export const SettingTab = memo(SettingComponent, isEqual);
