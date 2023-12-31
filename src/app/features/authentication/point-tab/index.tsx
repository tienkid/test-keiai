import React, { memo, useCallback, useEffect, useState } from 'react';

import isEqual from 'react-fast-compare';
import Animated, { useAnimatedRef } from 'react-native-reanimated';

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
import { useFocusEffect, useScrollToTop } from '@react-navigation/native';
import { pointAction } from '@redux-slice';

import { PointCard } from './components/point-card';

const PointComponent = () => {
  // state
  const user = useSelector(x => x.app.profile);
  const [historyPoint, setHistoryPoint] = useState<Array<HistoryPoint>>([]);
  const refStackView = useAnimatedRef<Animated.ScrollView>();

  //function
  const renderHistoryPoint = useCallback(
    (item: HistoryPoint, index: number) => {
      return (
        <Block
          key={index.toString()}
          middle
          // shadow
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
          <Block direction={'row'} alignItems="flex-end">
            <Text
              preset="linkTitle"
              colorTheme={item.type === 'issue' ? 'primary' : 'point_transfer'}
              text={numberWithCommas(item.adjustment)}
            />
            <Spacer width={5} />
            <Block>
              <Text
                preset="textNormal17"
                colorTheme={
                  item.type === 'issue' ? 'primary' : 'point_transfer'
                }
                text={'P'}
              />
              <Spacer height={2} />
            </Block>
          </Block>
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

  useScrollToTop(refStackView);

  useFocusEffect(
    React.useCallback(() => {
      refStackView.current?.scrollTo({ x: 0, y: 0, animated: true });
    }, [refStackView]),
  );

  // render
  return (
    <Block block colorTheme="white">
      <Header />
      <StackView bounces={false} ref={refStackView}>
        <Block colorTheme="background">
          <PointCard />
        </Block>
        <Block paddingHorizontal={15} paddingTop={20}>
          {/* <LocalImage source="term_policy" resizeMode="center" /> */}
          <Text
            preset="textNormal14"
            colorTheme="base5"
            t18n="point:point_history"
            fontWeight={'bold'}
          />
          <Spacer height={18} />
          {historyPoint?.map(renderHistoryPoint)}
          <Spacer height={39} />
          <Block direction={'row'} middle justifyContent={'center'}>
            <Text
              preset="linkLarge"
              t18n="home:what_KI_point"
              colorTheme="base5"
              fontWeight={'bold'}
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
          <Block>
            <Text
              textAlign={'center'}
              preset="textNormal15"
              // t18n="point:description"
              text="アプリ登録や各種サービスのご契約などで貯まり"
              colorTheme="base5"
              lineHeight={19}
            />
            <Text
              textAlign={'center'}
              preset="textNormal15"
              // t18n="point:description"
              text="貯めたポイントはKEIAIのオプション工事や"
              colorTheme="base5"
              lineHeight={19}
            />
            <Text
              textAlign={'center'}
              preset="textNormal15"
              // t18n="point:description"
              text="リフォーム工事などでお使いいただけます。"
              colorTheme="base5"
              lineHeight={19}
            />
          </Block>
          {/* <Text
            textAlign={'center'}
            preset="textNormal15"
            t18n="point:description"
            // text="アプリ登録や各種サービスのご契約などで貯まり"
            colorTheme="base5"
            lineHeight={19}
          /> */}
          <Spacer height={70} />
          <Text
            preset="linkLarge"
            t18n="point:title_1"
            colorTheme="base5"
            fontWeight={'bold'}
            textAlign={'center'}
          />
          <Spacer height={20} />
          <Block block height={134}>
            <LocalImage source="point_1" resizeMode="contain" />
          </Block>
          <Spacer height={20} />
          <Block>
            <Text
              preset="textNormal15"
              // t18n="point:content_2"
              text="溜まったポイントは、1ポイント1円として"
              colorTheme="base5"
              textAlign={'center'}
              lineHeight={19}
            />
            <Text
              preset="textNormal15"
              // t18n="point:content_2"
              text="1円単位から、いつでもご利用可能です。"
              colorTheme="base5"
              textAlign={'center'}
              lineHeight={19}
            />
          </Block>
          {/* <Text
            textAlign={'center'}
            preset="textNormal15"
            t18n="point:content_1"
            colorTheme="base5"
            lineHeight={19}
          /> */}
          <Spacer height={70} />
          <Text
            preset="linkLarge"
            t18n="point:title_2"
            colorTheme="base5"
            fontWeight={'bold'}
            textAlign={'center'}
          />
          <Spacer height={20} />
          <Block block height={158}>
            <LocalImage source="point_2" resizeMode="contain" />
          </Block>
          <Spacer height={20} />
          <Block>
            <Text
              preset="textNormal15"
              // t18n="point:content_2"
              text="貯めたポイントは有効期限なしの"
              colorTheme="base5"
              textAlign={'center'}
              lineHeight={19}
            />
            <Text
              preset="textNormal15"
              // t18n="point:content_2"
              text="無期限ポイント！ポイントが消滅したり"
              colorTheme="base5"
              textAlign={'center'}
              lineHeight={19}
            />
            <Text
              textAlign={'center'}
              preset="textNormal15"
              // t18n="point:description"
              text="リフォーム工事などでお使いいただけます。"
              colorTheme="base5"
              lineHeight={19}
            />
          </Block>

          <Spacer height={70} />
          <Block middle>
            <Text
              preset="linkLarge"
              t18n="point:title_3"
              colorTheme="base5"
              fontWeight={'bold'}
              textAlign={'center'}
            />
          </Block>
          <Spacer height={20} />
          <Block height={150}>
            <LocalImage source="point_3" resizeMode="contain" />
          </Block>
          <Spacer height={20} />
          <Block>
            <Text
              textAlign={'center'}
              preset="textNormal15"
              // t18n="point:description"
              text="ポイントは、ご自宅の修理、交換、新設"
              colorTheme="base5"
              lineHeight={19}
            />
            <Text
              textAlign={'center'}
              preset="textNormal15"
              // t18n="point:description"
              text="オプション工事などでご利用いただけます。"
              colorTheme="base5"
              lineHeight={19}
            />
          </Block>
          {/* <Text
            preset="textNormal15"
            t18n="point:content_3"
            lineHeight={19}
            colorTheme="base5"
            textAlign={'center'}
          /> */}
          <Spacer height={20} />
          <Block>
            <Text
              textAlign={'center'}
              preset="textNormal15"
              // t18n="point:description"
              text="失効期限はございませんので、"
              colorTheme="base5"
              lineHeight={19}
            />
            <Text
              textAlign={'center'}
              preset="textNormal15"
              // t18n="point:description"
              text="将来、リフォームなどで大きな金額がかかる時"
              colorTheme="base5"
              lineHeight={19}
            />
            <Text
              textAlign={'center'}
              preset="textNormal15"
              // t18n="point:description"
              text="に備えての「修繕積立金」としてポイントを貯"
              colorTheme="base5"
              lineHeight={19}
            />
            <Text
              textAlign={'center'}
              preset="textNormal15"
              // t18n="point:description"
              text="めておくことも可能です。"
              colorTheme="base5"
              lineHeight={19}
            />
          </Block>
          {/* <Text
            preset="textNormal15"
            t18n="point:sub_content_3"
            colorTheme="base5"
            lineHeight={19}
            textAlign={'center'}
          /> */}
          <Spacer height={35} />
          <Text
            preset="textNormal11"
            t18n="point:description_3"
            colorTheme="base5"
            lineHeight={18}
          />
          <Spacer height={70} />
        </Block>
      </StackView>
    </Block>
  );
};

export const PointTab = memo(PointComponent, isEqual);
