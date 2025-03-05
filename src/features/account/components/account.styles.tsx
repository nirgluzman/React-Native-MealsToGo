import styled from 'styled-components/native';
import { Button, Text, TextInput } from 'react-native-paper';

import type { Theme } from '../../../infrastructure/theme';
import { colors } from '../../../infrastructure/theme/colors';

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
  width: 100%;
  padding: ${({ theme }: { theme: Theme }) => theme.space[4]};
  margin-top: ${({ theme }: { theme: Theme }) => theme.space[2]};
`;

// styled React Native Paper button.
export const AuthButton = styled(Button).attrs({
  mode: 'contained-tonal', // button styling.
  dark: true, // dark button will render light text.
  buttonColor: colors.brand.primary, // background color.
})`
  padding: ${({ theme }: { theme: Theme }) => theme.space[2]};
  margin: ${({ theme }: { theme: Theme }) => theme.space[2]};
`;

// styled React Native Paper input text.
export const AuthInput = styled(TextInput).attrs({
  mode: 'outlined', // input styling.
  selectionColor: colors.brand.primary, // selection color of the input.
  outlineColor: colors.brand.muted, // inactive outline color of the input.
  activeOutlineColor: colors.brand.primary, // active outline color of the input.
  textColor: colors.text.primary, // color of the text in the input.
})`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: ${({ theme }: { theme: Theme }) => theme.fontSizes.h2};
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.body};
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.primary};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${({ theme }: { theme: Theme }) => theme.space[2]};
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.space[2]};
`;
