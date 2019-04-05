// @flow

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';

import DefaultButton from '~/components/common/DefaultButton';
import ReviewStars from '~/components/common/ReviewStars';
import AuthorInfo from '~/components/common/AuthorInfo';

const Wrapper = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('40%')}px;
  justify-content: space-between;
  margin-vertical: ${({ theme }) => theme.metrics.smallSize}px;
  padding: ${({ theme }) => theme.metrics.mediumSize}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`;

const UpperContent = styled(View)`
  width: 100%;
  flex-direction: row;
`;

const BottomContent = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextContent = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('72%')}px
  padding-left: ${({ theme }) => theme.metrics.mediumSize}px;
`;

const PodcastImage = styled(FastImage).attrs(({ uri }) => ({
  source: { uri },
}))`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('16%')}px;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('20%')}px;
  border-radius: 4px;
`;

const TextWrapper = styled(View)`
  width: 60%;
`;

const PodcastTitle = styled(Text).attrs({
  numberOfLines: 3,
})`
  margin-bottom: ${({ theme }) => theme.metrics.extraSmallSize}px;
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: CircularStd-Bold;
`;

type Props = {
  onPress: Function,
  podcast: Object,
};

const FeaturedListitem = ({ onPress, podcast }: Props): Object => (
  <Wrapper
    style={{
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    }}
  >
    <UpperContent>
      <PodcastImage
        uri={podcast.imageURL}
      />
      <TextContent>
        <PodcastTitle>{podcast.title}</PodcastTitle>
        <ReviewStars
          shouldShowReviewsText={false}
          stars={podcast.stars}
          isSmall
        />
      </TextContent>
    </UpperContent>
    <BottomContent>
      <TextWrapper>
        <AuthorInfo
          imageURL={podcast.author.thumbnailImageURL}
          name={podcast.author.name}
          numberOfLines={1}
          textColor="dark"
        />
      </TextWrapper>
      <DefaultButton
        onPress={onPress}
        size="small"
        text="MORE"
      />
    </BottomContent>
  </Wrapper>
);

export default FeaturedListitem;
