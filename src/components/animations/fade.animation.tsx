//
// Fade-in effect:
// Container view that fades in when it is mounted (animates its children's opacity from 0 to 1 on mount).
// It takes an optional 'duration' prop to control the animation speed (default: 1500ms).
// https://reactnative.dev/docs/animations
//

import { useRef, useEffect } from 'react';

import { Animated } from 'react-native';

export const FadeInView = ({ duration = 1500, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};
