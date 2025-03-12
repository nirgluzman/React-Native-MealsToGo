//
// Styled component for React Native Paper's Button.
// see: https://callstack.github.io/react-native-paper/docs/components/Button/
//

import { Button as PaperButton } from 'react-native-paper';
import styled from 'styled-components/native';

import type { Theme } from '../../infrastructure/theme';
import { colors } from '../../infrastructure/theme/colors';

export const Button = styled(PaperButton).attrs({
  mode: 'contained-tonal', // button styling.
  dark: true, // dark button will render light text.
  buttonColor: colors.brand.primary, // background color.
})`
  padding: ${({ theme }: { theme: Theme }) => theme.space[2]};
  margin: ${({ theme }: { theme: Theme }) => theme.space[2]};
  width: 300px;
`;
