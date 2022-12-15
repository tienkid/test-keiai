import React from 'react';

import { MODAL_SELECTED_COUNTRY_TYPE } from '@common';
import { Block } from '@components';

import { FormSelectCity } from './select-city';
import { FormSelectCountry } from './select-country';

import { TwoHalfInputProps } from '../type';

export const FormCountry = ({
  disabled = false,
  labelT18n,
  labelT18n_2,
  name_1,
  name_2,
  maxLength_1,
  maxLength_2,
  rightChildren_1,
  rightChildren_2,
  requiredLabelT18n,
  placeholder_1_T18n,
  placeholder_2_T18n,
  handleShowCity,
  handleShowCountry,
}: TwoHalfInputProps) => {
  // state
  // const { width } = useWindowDimensions();
  // const actualWidth = useMemo(() => sizeScale(190), []);
  // const actualPercentWidth = useMemo(
  //   () => (actualWidth / width) * 100,
  //   [actualWidth, width],
  // );

  // render
  return (
    <Block>
      <Block block direction={'row'} alignItems={'flex-end'}>
        <Block flex={1}>
          <FormSelectCountry
            name={name_1}
            labelT18n={labelT18n}
            placeholder_T18n={placeholder_1_T18n}
            maxLength={maxLength_1}
            // isShowMsgError={false}
            rightChildren={rightChildren_1}
            requiredLabelT18n={requiredLabelT18n}
            disabled={disabled}
            type={MODAL_SELECTED_COUNTRY_TYPE.COUNTRY}
            handleShowCountry={handleShowCountry}
          />
        </Block>
        <Block marginLeft={6} marginRight={6} />
        <Block flex={1}>
          <FormSelectCity
            name={name_2}
            labelT18n={labelT18n_2}
            maxLength={maxLength_2}
            placeholder_T18n={placeholder_2_T18n}
            rightChildren={rightChildren_2}
            // isShowMsgError={false}
            disabled={disabled}
            type={MODAL_SELECTED_COUNTRY_TYPE.CITY}
            handleShowCity={handleShowCity}
          />
        </Block>
      </Block>
    </Block>
  );
};
