import styled from 'styled-components';

export const Right = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const BG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 670px;
  height: 758px;
  background: #FFEDDE;
  @media (max-width: 1680px) {
    width: 462px;
    height: 550px;
  }
`;
export const SVGWrap = styled.div`
  margin-bottom: 90px;
  svg{
	fill: ${props => props.theme.colors.main};
  }
  @media (max-width: 1680px) {
	margin-bottom: 40px;
	svg{
      width: 212px;
      height: 160px;
	}
  }
`;
export const TitleWrap = styled.div`
  width: 244px;
`;
export const DescWrap = styled.div`
  width: 199px;
  margin: 20px 0;
`;
export const Line = styled.div`
  background-color: ${props => props.theme.colors.main};
  width: 192px;
  height: 3px;
`;