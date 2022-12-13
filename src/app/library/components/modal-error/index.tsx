import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { sizeScale } from '@common';
import { Block } from '@components/block';
import { Button } from '@components/button';
import { Modal } from '@components/modal';
import { Spacer } from '@components/spacer';
import { Text } from '@components/text';
import { I18nKeys } from '@utils/i18n/locales';

interface ModalErrorProps {
  show: (props: ShowModalErrorProps) => void;
  hide: () => void;
}

const ModalErrorComponent = forwardRef((_, ref) => {
  // state
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState<I18nKeys | undefined>(undefined);
  const [content, setContent] = useState<I18nKeys | undefined>(undefined);

  //funct
  const closeModal = () => {
    setIsVisible(false);
  };
  // effect
  useImperativeHandle(
    ref,
    () => ({
      show: ({
        title: titleValue,
        content: contentValue,
      }: ShowModalErrorProps) => {
        setIsVisible(true);
        !!titleValue && setTitle(titleValue);
        !!contentValue && setContent(contentValue);
      },
      hide: () => {
        setIsVisible(false);
        setTitle(undefined);
      },
    }),
    [],
  );

  // render
  return (
    <Modal
      isVisible={isVisible}
      hasGesture={false}
      style={{ justifyContent: 'flex-start', paddingTop: sizeScale(150) }}>
      <Block width={'100%'} alignItems={'center'}>
        <Block
          alignItems={'center'}
          colorTheme="white"
          minHeight={211}
          paddingHorizontal={15}
          width={'90%'}
          borderRadius={8}>
          <Spacer height={30} />
          <Text
            t18n={title ? title : 'login:loading_title'}
            preset="linkTitle"
          />
          <Spacer height={50} />
          <Text
            t18n={content ? content : 'login:loading_title'}
            preset="linkSmall"
            textAlign={'center'}
          />
          <Spacer height={16} />
          <Block middle>
            <Block width={'50%'}>
              <Button.Primary t18n="common:OK" onPress={closeModal} />
            </Block>
          </Block>
          <Spacer height={16} />
        </Block>
      </Block>
    </Modal>
  );
});

const refLoadingComponent = React.createRef<ModalErrorProps>();

interface ShowModalErrorProps {
  title?: I18nKeys;
  content?: I18nKeys;
}

export const ModalError = () => (
  <ModalErrorComponent ref={refLoadingComponent} />
);

export const handleShowModalError = (props?: ShowModalErrorProps) => {
  refLoadingComponent.current?.show(props || {});
};

export const handleHideModalError = () => {
  refLoadingComponent.current?.hide();
};
