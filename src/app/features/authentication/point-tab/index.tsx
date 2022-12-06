import React, { memo, useCallback, useEffect, useState } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, formatDate, numberWithCommas } from '@common';
import {
  Block,
  Divider,
  Header,
  LocalImage,
  Spacer,
  StackView,
  Text,
} from '@components';
import { useSelector } from '@hooks';
import { HistoryPoint } from '@model/point';
import { pointAction } from '@redux-slice';

import { PointCard } from './components/point-card';

const PointComponent = () => {
  // state
  const user = useSelector(x => x.app.profile);
  const [historyPoint, setHistoryPoint] = useState<Array<HistoryPoint>>([]);

  //function
  const renderHistoryPoint = useCallback(
    (item: HistoryPoint, index: number) => {
      return (
        <Block
          key={index.toString()}
          middle
          shadow
          borderRadius={8}
          borderWidth={0.5}
          borderColorTheme={'border'}
          paddingHorizontal={16}
          paddingVertical={12}
          marginBottom={6}
          direction={'row'}
          justifyContent="space-between">
          <Block>
            <Text preset="textNormal12" colorTheme="base5" text={item.memo} />
            <Text
              preset="textXSmall"
              colorTheme="base0"
              text={formatDate({
                date: item.issuedAt
                  ? item.issuedAt
                  : '2022-12-01T10:20:30.000Z',
              })}
            />
          </Block>
          <Text
            preset="linkTitle"
            colorTheme={item.type === 'issue' ? 'primary' : 'point_transfer'}
            t18n="point:point"
            t18nOptions={{ point: numberWithCommas(item.adjustment) }}
          />
        </Block>
      );
    },
    [],
  );

  const getHistoryPoints = () => {
    dispatch(
      pointAction.getHistoryPoint(user.username, getHistoryPointSucceed),
    );
  };
  const getHistoryPointSucceed = (data: Array<HistoryPoint>) => {
    setHistoryPoint(data ?? []);
  };

  //effect
  useEffect(() => {
    getHistoryPoints();
  }, []);

  // render
  return (
    <Block block colorTheme="background">
      <Header />
      <StackView>
        <Block>
          <PointCard />
        </Block>
        <Block paddingHorizontal={15} paddingTop={20} colorTheme="white">
          {/* <LocalImage source="term_policy" resizeMode="center" /> */}
          <Text
            preset="textNormal15"
            colorTheme="base5"
            t18n="point:point_history"
          />
          <Spacer height={18} />
          {historyPoint?.map(renderHistoryPoint)}
          <Spacer height={39} />
          <Block direction={'row'} middle justifyContent={'center'}>
            <Text
              preset="linkLarge"
              t18n="home:what_KI_point"
              colorTheme="base5"
            />
            <Spacer width={8} />
            <LocalImage
              source="coin"
              containerStyle={{ height: 26, width: 32 }}
              resizeMode="contain"
            />
          </Block>
          <Spacer height={5} />
          <Divider height={1} colorTheme="primary" />

          <Spacer height={30} />
          <Block block width={'100%'} height={128}>
            <LocalImage source="logo_point" resizeMode="contain" />
          </Block>
          <Spacer height={15} />
          <Text
            textAlign={'center'}
            preset="textNormal15"
            t18n="point:description"
            colorTheme="base5"
          />
          <Spacer height={70} />
          <Text
            preset="linkLarge"
            t18n="point:title_1"
            colorTheme="base5"
            textAlign={'center'}
          />
          <Spacer height={20} />
          <Block block height={134}>
            <LocalImage source="point_1" resizeMode="contain" />
          </Block>
          <Spacer height={20} />
          <Text
            textAlign={'center'}
            preset="textNormal15"
            t18n="point:content_1"
            colorTheme="base5"
          />
          <Spacer height={70} />
          <Text
            preset="linkLarge"
            t18n="point:title_2"
            colorTheme="base5"
            textAlign={'center'}
          />
          <Spacer height={20} />
          <Block block height={158}>
            <LocalImage source="point_2" resizeMode="contain" />
          </Block>
          <Spacer height={20} />
          <Text
            preset="textNormal15"
            t18n="point:content_2"
            colorTheme="base5"
            textAlign={'center'}
          />
          <Spacer height={70} />
          <Text
            preset="linkLarge"
            t18n="point:title_3"
            colorTheme="base5"
            textAlign={'center'}
          />
          <Spacer height={20} />
          <Block height={150}>
            <LocalImage source="point_3" resizeMode="contain" />
          </Block>
          <Spacer height={20} />
          <Text
            preset="textNormal15"
            t18n="point:content_3"
            colorTheme="base5"
          />
          <Spacer height={20} />
          <Text
            preset="textNormal15"
            t18n="point:sub_content_3"
            colorTheme="base5"
          />
          <Spacer height={35} />
          <Text
            preset="textNormal11"
            t18n="point:description_3"
            colorTheme="base5"
          />
          <Spacer height={70} />
        </Block>
      </StackView>
    </Block>
  );
};

export const PointTab = memo(PointComponent, isEqual);
