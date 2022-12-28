import React, { memo, useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
import { Block, Button, Divider, Header, Spacer, StackView } from '@components';
import { servicesActions } from '@redux-slice';

import { KeiaiList } from './components/keiaiList';
import { ListServiceNews } from './components/list-service';
import { DATA_KEIAI } from './contain';
import {
  dataService1,
  dataService2,
  dataService3,
  dataService4,
  dataService5,
  dataService6,
  dataService7,
  dataService8,
} from './data';
import { MenuService } from './type';

// import { ListService } from '../home-tab/home/components/list-service';

const SettingComponent = () => {
  // render
  const [dataMenu, setDataMenu] = useState<MenuService[]>([]);

  const onSuccess = (data: MenuService[]) => {
    console.log(dataMenu, 'data');

    setDataMenu(data);
  };
  const getAllServices = useCallback(() => {
    dispatch(servicesActions.getAllServices(onSuccess));
  }, []);
  useEffect(() => {
    getAllServices();
  }, [getAllServices]);
  const handleSubmit = () => {
    Linking.openURL('https://owners.ki-group.jp/app/inquiry/');
  };
  return (
    <Block block colorTheme="white">
      <Header />
      <Spacer height={2} />
      <StackView>
        <Block>
          <Spacer height={20} />
          <KeiaiList dataMenu={DATA_KEIAI} />
          <Spacer height={20} />
          <Block paddingHorizontal={20} middle>
            <Button.Primary t18n="profile:inquiries" onPress={handleSubmit} />
          </Block>
          <Spacer height={15} />
        </Block>
        <Divider height={6} colorTheme="divider" />
        <Block colorTheme="white">
          <ListServiceNews
            data={dataService1}
            title="service:housing_facilities"
          />
        </Block>
        <Divider height={6} colorTheme="divider" />
        <Block colorTheme="white">
          <ListServiceNews data={dataService2} title="service:construction" />
        </Block>
        <Divider height={6} colorTheme="divider" />
        <Block colorTheme="white">
          <ListServiceNews data={dataService3} title="service:moving" />
        </Block>
        <Divider height={6} colorTheme="divider" />
        <Block colorTheme="white">
          <ListServiceNews
            data={dataService4}
            title="service:design_services"
          />
        </Block>
        <Divider height={6} colorTheme="divider" />
        <Block colorTheme="white">
          <ListServiceNews
            data={dataService5}
            title="service:home_appliances"
          />
        </Block>
        <Divider height={6} colorTheme="divider" />
        <Block colorTheme="white">
          <ListServiceNews
            data={dataService6}
            title="service:storage_and_cleaning"
          />
        </Block>
        <Divider height={6} colorTheme="divider" />
        <Block colorTheme="white">
          <ListServiceNews data={dataService7} title="service:car_service" />
        </Block>
        <Divider height={6} colorTheme="divider" />
        <Block colorTheme="white">
          <ListServiceNews data={dataService8} title="service:energy_service" />
        </Block>
        <Block colorTheme="white">
          <Spacer height={50} />
        </Block>
      </StackView>
    </Block>
  );
};

export const SettingTab = memo(SettingComponent, isEqual);
