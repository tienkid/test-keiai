import React from 'react';
import { View } from 'react-native';

import { useTranslation } from 'react-i18next';

import { Block, Button, ParsedText, RowItem, Spacer } from '@components';
import { renderItemWithPattern } from '@components/parsed-text/utils';

import { ListPreviewProps } from '../../information/type';
import { styles } from '../style';

export const ListPreview = ({
  informationPreview,
  onSubmit,
}: ListPreviewProps) => {
  // state
  const [t] = useTranslation();

  // func
  const onSubmitPreview = () => {
    onSubmit();
  };

  // render
  return (
    <View>
      <Block paddingHorizontal={15}>
        <Block alignSelf={'center'}>
          <ParsedText
            preset="textXSmall"
            colorTheme="base5"
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
        <Spacer height={35} />
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
        <RowItem title="field:zip_code" value={informationPreview?.zip_code} />
        <RowItem
          title="information_profile:address_home"
          value={`${informationPreview?.country}${informationPreview?.city}${informationPreview?.name_address}${informationPreview?.building_name}`}
        />
        <RowItem
          title="information_profile:phone_number"
          value={informationPreview?.phoneNumber}
        />
        <RowItem
          title="information_profile:email"
          value={informationPreview?.email}
        />
        <Spacer height={50} />
        <Block middle>
          <Button.Primary
            t18n="information_profile:btn_step_2"
            textColorTheme={'white'}
            onPress={onSubmitPreview}
          />
        </Block>

        <Spacer height={60} />
      </Block>
    </View>
  );
};
