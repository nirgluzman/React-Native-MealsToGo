import styled from 'styled-components/native';

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
