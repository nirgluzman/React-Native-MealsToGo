//
// CameraScreen component:
// Allows users to take a photo using the device's camera and store it as their profile picture.
//

import { useRef, useContext } from 'react';

import {
  CameraView, // component to render a preview of the device's front or back camera.
  useCameraPermissions,
} from 'expo-camera';

import styled from 'styled-components/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../../../services/auth/auth.context';

import type { SettingsStackScreenProps } from '../../../types/navigation';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Button } from '../../../components/button/button.component';

const ProfileCamera = styled(CameraView)`
  flex: 1;
`;

const PermissionContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TakePictureButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const CameraScreen = ({ navigation }: SettingsStackScreenProps<'Camera'>) => {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();

  const { user } = useContext(AuthContext);

  if (!permission) {
    // Camera permissions are still loading.
    return null;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <PermissionContainer>
        <Text variant='error'>We need your permission to show the camera</Text>
        <Spacer size='large' />
        <Button icon='check-circle' onPress={requestPermission}>
          Grant permission
        </Button>
      </PermissionContainer>
    );
  }

  const takePhoto = async () => {
    if (cameraRef.current) {
      // take a picture and store it in AsyncStorage.
      try {
        const photo = await cameraRef.current.takePictureAsync();
        await AsyncStorage.setItem(`${user!.uid}-photo`, photo!.uri);
        navigation.goBack();
      } catch (err) {
        console.log('error taking photo', err);
      }
    }
  };

  return (
    <ProfileCamera ref={cameraRef} facing='front'>
      <TakePictureButtonContainer>
        <Button icon='camera' onPress={takePhoto}>
          Take a photo
        </Button>
        <Spacer size='large' />
      </TakePictureButtonContainer>
    </ProfileCamera>
  );
};
