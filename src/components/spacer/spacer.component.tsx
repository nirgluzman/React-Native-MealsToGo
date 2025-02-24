// component to provide a flexible and reusable way to add consistent spacing within the app's UI.

import { ReactNode } from 'react';

import styled, { useTheme } from 'styled-components/native';

import { Theme } from '../../infrastructure/theme';

export const positionVariant = {
  top: 'margin-top',
  right: 'margin-right',
  bottom: 'margin-bottom',
  left: 'margin-left',
} as const;

// type that is a union of the keys of the positionVariant object.
type PositionType = keyof typeof positionVariant;

export const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
} as const;

// type that is a union of the keys of the sizeVariant object.
type SizeType = keyof typeof sizeVariant;

const getVariant = (position: PositionType, size: SizeType, theme: Theme) => {
  const property = positionVariant[position];
  const sizeIndex = sizeVariant[size];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

// styled View component.
const SpacerView = styled.View`
  ${({ variant }: { variant: string }) => variant};
`;

interface SpacerProps {
  position?: PositionType;
  size?: SizeType;
  children?: ReactNode; // children property (optional)
}

export const Spacer = ({
  position = 'top', // use 'top' as the default position if none is provided.
  size = 'medium', // use 'medium' as the default size if none is provided.
  children,
}: SpacerProps) => {
  const theme = useTheme() as Theme; // custom hook to get the current theme from a ThemeProvider.
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};
