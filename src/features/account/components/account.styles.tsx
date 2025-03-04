import styled from 'styled-components/native';

import type { Theme } from '../../../infrastructure/theme';

// styled ImageBackground component with a full-screen background image and centered content.
export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home-bg.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

// styled View component with a semi-transparent white overlay for AccountBackground.
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

// container for user input elements, styled with a background and margins for visual separation.
export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${({ theme }: { theme: Theme }) => theme.space[4]};
  margin-top: ${({ theme }: { theme: Theme }) => theme.space[2]};
`;
