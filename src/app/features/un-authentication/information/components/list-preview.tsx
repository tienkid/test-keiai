import React from 'react';
import { LayoutChangeEvent, View } from 'react-native';

import { useTranslation } from 'react-i18next';

import {
  Block,
  Button,
  CopyRight,
  ParsedText,
  RowItem,
  Spacer,
  Text,
} from '@components';
import { renderItemWithPattern } from '@components/parsed-text/utils';

import { StepValue } from '../contain';
import { styles } from '../style';
import { ListPreviewProps } from '../type';

export const ListPreview = ({
  informationPreview,
  onSubmit,
  onBackStep,
  onGetHeight,
}: ListPreviewProps) => {
  // state
  const [t] = useTranslation();

  // func
  const handleGetLayout = (e: LayoutChangeEvent) => {
    e.nativeEvent.layout.height &&
      onGetHeight(e.nativeEvent.layout.height, StepValue.two);
  };
  const onSubmitPreview = () => {
    onSubmit();
  };
  // render
  return (
    <View onLayout={handleGetLayout}>
      <Block paddingHorizontal={20}>
        <Block alignSelf={'center'} marginBottom={38} marginTop={40}>
          <ParsedText
            preset="textXXSmall"
            parse={[
              {
                pattern: /\[([^:]+):1\]/i,
                renderText: renderItemWithPattern,
                style: styles.linkText,
              },
            ]}>
            {t('information_profile:check_content')}
          </ParsedText>
        </Block>
        <RowItem
          title="information_profile:contact"
          value={informationPreview?.contact}
        />
        <RowItem title="information_profile:password" value="********" />
        <RowItem
          title="information_profile:your_name"
          value={`${informationPreview?.first_name} ${informationPreview?.last_name}`}
        />
        <RowItem
          title="information_profile:your_name_1"
          value={`${informationPreview?.furigana_first_name} ${informationPreview?.furigana_last_name}`}
        />
        <RowItem
          title="information_profile:zip_code"
          value={informationPreview?.zip_code}
        />
        <RowItem
          title="information_profile:address"
          value={`${informationPreview?.country}${informationPreview?.city}`}
        />
        <RowItem
          title="information_profile:phone_number"
          value={informationPreview?.phoneNumber}
        />
        <RowItem
          title="information_profile:email"
          value={informationPreview?.email}
        />
        <Spacer height={34} />
        <Button.Primary
          t18n="information_profile:btn_step_2"
          style={{ borderRadius: 8 }}
          textColorTheme={'white'}
          onPress={onSubmitPreview}
        />
        <Spacer height={34} />
        <Button.Default onPress={onBackStep}>
          <Text
            t18n="information_profile:back"
            colorTheme="base8"
            preset="textSmall"
            center
          />
        </Button.Default>
        <Spacer height={53} />
      </Block>
      <CopyRight isJustCopyRight />
    </View>
  );
};
