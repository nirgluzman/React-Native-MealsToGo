//
// Styled component for React Native's Pressable.
//

import { type ReactNode } from 'react';
import styled from 'styled-components/native';

// Styled component for Pressable
const StyledPressable = styled.Pressable`
  /* add default styles here */
`;

type PressableProps = {
  children: ReactNode;
  onPress: () => void;
  style?: any;
  [key: string]: any;
};

export const Pressable = ({ children, onPress, style, ...rest }: PressableProps) => {
  return (
    <StyledPressable
      onPress={onPress}
      style={({ pressed }: { pressed: boolean }) => [
        style, // apply any external styles
        pressed && { opacity: 0.7 }, // apply pressed style
      ]}
      {...rest}>
      {children}
    </StyledPressable>
  );
};
