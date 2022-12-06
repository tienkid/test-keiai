import React, { useMemo } from 'react';
import { View } from 'react-native';

import { useTranslation } from 'react-i18next';

import { Spacer } from '@components/spacer';

import { useTextOutlineStyle } from './styles';
import { LabelOutlineProps } from './type';

import { Text } from '../../../text';

export const LabelOutline = ({
  label,
  labelT18n,
  requiredLabel,
  requiredLabelT18n,
  wrapLabelStyle = {},
  colorLabel = 'base5',
}: LabelOutlineProps) => {
  // state
  const [t] = useTranslation();
  const styles = useTextOutlineStyle();
  const isRequired = useMemo(
    () => requiredLabelT18n || requiredLabel,
    [requiredLabel, requiredLabelT18n],
  );
  const labelText = useMemo(
    () => (labelT18n && t(labelT18n)) || label || undefined,
    [labelT18n, label, t],
  );
  // render
  return labelText ? (
    <View
      pointerEvents={'none'}
      style={[
        styles.wrapLabel,
        !!isRequired && styles.labelContainer,
        wrapLabelStyle,
      ]}>
      <Text
        text={labelText}
        preset={'textNormal15'}
        colorTheme={colorLabel}
        numberOfLines={1}
        style={{ maxWidth: '80%' }}
      />
      {isRequired && (
        <>
          <Spacer width={5} />
          <View style={styles.required}>
            <Text
              text={requiredLabel}
              t18n={requiredLabelT18n}
              preset="linkXXSmall"
              colorTheme="statusError"
              fontWeight={'400'}
            />
          </View>
        </>
      )}
    </View>
  ) : null;
};
