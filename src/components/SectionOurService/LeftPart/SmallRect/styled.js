import styled from 'styled-components';

export const SmallRectStyles = styled.div`
  display: flex;
  justify-content: center;
  @media(max-width: 510px){
    width: 100%;
  }
`;
export const Rect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 380px;
  background: #FFEDDE;
  svg {
	fill: ${props => props.theme.colors.main};
  }
  
  @media (max-width: 1680px) {
    width: 271px;
    height: 275px;
    svg {
      height: 112px;
    }
  }
`;