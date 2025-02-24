// component to provide a flexible and reusable way to style Text across the app.

import styled from 'styled-components/native';
import { Theme } from '../../infrastructure/theme';

// base styles that all text will have.
const defaultTextStyles = (theme: Theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

//
// Text variants - different text styles for different purposes.
//

// regular text.
const body = (theme: Theme) => `
  font-size: ${theme.fontSizes.body};
`;

// similar to body but for hint text.
const hint = (theme: Theme) => `
  font-size: ${theme.fontSizes.body};
`;

// for error messages (changes color).
const error = (theme: Theme) => `
  color: ${theme.colors.text.error};
`;

// smaller, bold text
const caption = (theme: Theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

// different font family, medium weight.
const label = (theme: Theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
  line-height: ${theme.lineHeights.copy};
`;

// collects all variant functions into one object.
const variants = {
  body,
  hint,
  error,
  caption,
  label,
};

// type that is a union of the keys of the variants object.
type VariantsType = keyof typeof variants;

// custom Text component using styled-components:
// applies default styles first, then applies the selected variant styles.
// default variant is 'body' if none specified.
export const Text = styled.Text`
  ${({ theme }: { theme: Theme }) => defaultTextStyles(theme)}
  ${({ theme, variant = 'body' }: { theme: Theme; variant: VariantsType }) =>
    variants[variant](theme)}
`;
