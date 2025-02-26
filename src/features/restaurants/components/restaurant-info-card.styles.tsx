import styled from 'styled-components/native';
import { Theme } from '../../../infrastructure/theme';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.bg.primary};
  padding: ${(props: any) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${({ theme }: { theme: Theme }) => theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.body};
  font-size: ${({ theme }: { theme: Theme }) => theme.fontSizes.caption};
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.primary};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }: { theme: Theme }) => theme.space[2]};
  padding-bottom: ${({ theme }: { theme: Theme }) => theme.space[2]};
`;

export const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
