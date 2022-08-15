import styled from 'styled-components';

export const TitleDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleWrap = styled.div`
  width: 609px;
  text-align: center;
  @media(max-width: 1024px){
	width: 324px;
  }
  @media(max-width: 553px){
	width: 100%;
  }
`;
export const DescWrap = styled.div`
  width: 609px;
  text-align: center;
  padding: 30px 0;
  @media(max-width: 1024px){
	width: 514px;
  }
  @media(max-width: 553px){
  width: 100%;
}
`;