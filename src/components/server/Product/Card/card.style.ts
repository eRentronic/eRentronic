import styled from 'styled-components';

import { Text } from '@/components/common';
import { StyledTextProps } from '@/components/common/Text/types';

export const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 25%;
  /* overflow: hidden; */
  max-height: 200px;
`;

export const ThumbnailContainer = styled.figure`
  width: 100%;
  min-width: 150px;
  height: 100px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  /* max-height: 150px; */
  object-fit: contain;
`;

export const Title = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 70%;
  font-size: 18px;
  margin: 5px 0;
  color: ${({ theme }) => theme.pallete.normalFont};
`;

export const Brand = styled(Text)`
  font-size: 13px;
  margin: 5px 0;
  /* color: ${({ theme }) => theme.pallete.normalFont}; */
`;

export const Labels = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.pallete.grey5};
`;

export const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;

export const DiscountInfo = styled.div`
  display: flex;
  gap: 5px;
`;

export const SaledPrice = styled(Text)<StyledTextProps>``;

export const CurrentPrice = styled(Text)``;

export const DiscountRate = styled(Text)``;

export const ProductInfoContainer = styled.section`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
`;
