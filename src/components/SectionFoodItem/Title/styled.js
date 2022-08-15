import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 201px;
  margin-top: 39px;
  @media(max-width: 1600px){
    column-gap: 10px;
  }
  @media(max-width: 1440px){
    column-gap: 72px;
    align-items: flex-start;
  }
`;
export const TitleWrap = styled.div`
  border-left: 25px solid ${props => props.theme.colors.main};
  width: 666px;
  padding: 8px 0 8px 30px;
  @media (max-width: 1160px) {
    border-left: 12px solid ${props => props.theme.colors.main};
    width: 100%;
    padding: 26px 0 26px 20px;
  }
`;
export const DescWrap = styled.div`
  width: 609px;
  @media(max-width: 1440px){
    width: 369px;
  }
  @media (max-width: 1160px) {
    width: 100%;
	padding-left: 32px;
`;