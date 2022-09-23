import React from 'react';

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

import { styles } from '../style';
import { ListPreviewProps } from '../type';

export const ListPreview = ({ onBackStep, onSubmit }: ListPreviewProps) => {
  // state
  const [t] = useTranslation();

  // func
  const renderTerm = (matchingString: any) => {
    const pattern = /\[([^:]+):([^\]]+)\]/i;
    const match = matchingString.match(pattern);
    return `${match[1]}`;
  };

  // render
  return (
    <React.Fragment>
      <Block block paddingHorizontal={20}>
        <Block alignSelf={'center'} marginBottom={38} marginTop={51}>
          <ParsedText
            preset="textXXSmall"
            parse={[
              {
                pattern: /\[([^:]+):1\]/i,
                renderText: renderTerm,
                style: styles.linkText,
              },
            ]}>
            {t('information_profile:check_content')}
          </ParsedText>
        </Block>
        <RowItem
          title="information_profile:contact"
          value="KIS-000000000-000"
        />
        <RowItem title="information_profile:password" value="********" />
        <RowItem title="information_profile:your_name" value="山田 太郎" />
        <RowItem
          title="information_profile:your_name_1"
          value="ヤマダ タロウ"
        />
        <RowItem title="information_profile:zip_code" value="100-0005" />
        <RowItem
          title="information_profile:address"
          value="東京都千代田区丸の内1-8-1丸の内トラストタワーＮ館17階"
        />
        <RowItem title="information_profile:phone_number" value="07077777777" />
        <RowItem title="information_profile:phone_home" value="0312345678" />
        <RowItem title="information_profile:email" value="example@mail.com" />
        <Spacer height={34} />
        <Button.Primary
          t18n="information_profile:btn_step_2"
          style={{ borderRadius: 8 }}
          textColorTheme={'white'}
          onPress={onSubmit}
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
    </React.Fragment>
  );
};
