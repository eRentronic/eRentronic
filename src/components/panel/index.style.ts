import styled from 'styled-components';

import { Icon, Text } from '../common';

const CircleBtn = styled.button`
  text-decoration: none;
  border: none;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;

export const PanelWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 30px;
  z-index: 40;
  right: 30px;
  width: 60px;
  height: 60px;
`;

export const showPanelBtn = styled(CircleBtn)<{ isClicked: boolean }>`
  z-index: 40;
  background: ${({ theme }) => theme.pallete.panelGreen};
`;
export const GoTopBtn = styled(CircleBtn)<{ isClicked: boolean }>`
  background: ${({ theme }) => theme.pallete.grey4};
  z-index: 10;
  bottom: ${({ isClicked }) => (isClicked ? '300px' : '0')};
`;
export const DarkModeBtn = styled(CircleBtn)<{ isClicked: boolean }>`
  background: ${({ theme }) => theme.pallete.grey1};
  z-index: 15;
  bottom: ${({ isClicked }) => (isClicked ? '100px' : '0')};
`;
export const gotoLogin = styled(CircleBtn)<{ isClicked: boolean }>`
  background: ${({ theme }) => theme.pallete.grey4};
  z-index: 20;
  bottom: ${({ isClicked }) => (isClicked ? '200px' : '0')};
`;
export const BtnText = styled(Text)`
  font-weight: bold;
  color: white;
`;
export const Moon = styled(Icon)`
  color: ${({ theme }) => theme.pallete.white};
  background-size: cover;
`;
