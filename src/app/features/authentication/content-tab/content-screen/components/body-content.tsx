import React, { useCallback, useState } from 'react';

import { dispatch } from '@common';
import { Block, Divider, ListView, Spacer } from '@components';
import { useSelector } from '@hooks';
import { ContentResponse, Item } from '@model/content';
import { appActions, contentAction } from '@redux-slice';

import { ItemContentView } from './item-content-view';

export const BodyContent = () => {
  //state
  const contents = useSelector(x => x.app.contents);
  const [page, setPage] = useState<number>(1);

  //func
  const renderItemContent = useCallback(
    ({ item, index }: { item: Item; index: number }) => {
      return <ItemContentView key={index.toString()} item={item} />;
    },
    [],
  );
  const keyExtractor = (item: Item) => item.id.toString();
  const onGetContentSucceeded = useCallback(
    (data: ContentResponse) => {
      dispatch(
        appActions.setContents({
          items: contents.items.concat(data.items),
          meta: data.meta,
        }),
      );
      setPage(e => e + 1);
    },
    [contents.items],
  );
  const handleLoadMore = useCallback(() => {
    if (contents.meta?.totalPages && page < contents.meta?.totalPages) {
      dispatch(
        contentAction.getContent(
          {
            page: page + 1,
            perPage: 10,
          },
          onGetContentSucceeded,
        ),
      );
    }
  }, [contents.meta?.totalPages, onGetContentSucceeded, page]);
  const renderSpacer = () => (
    <Block paddingHorizontal={15}>
      <Divider colorTheme="line" />
      <Spacer height={15} />
    </Block>
  );
  // render
  return (
    <Block flex={1} colorTheme={'background'} paddingTop={2}>
      <Block colorTheme="white" paddingTop={12}>
        <ListView
          data={contents?.items ?? []}
          canRefresh={false}
          canLoadMore={true}
          onEndReached={handleLoadMore}
          renderItem={renderItemContent}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderSpacer}
        />
        {/* <StackView>{contents?.items.map(renderItemContent)}</StackView> */}
      </Block>
    </Block>
  );
};
