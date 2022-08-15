import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 201px;
  margin-top: 146px;
  margin-bottom: 150px;
  
  @media (max-width: 1440px) {
    column-gap: 114px;
  }
  @media (max-width: 1280px) {
    margin-top: 117px;
    margin-bottom: 100px;
  }
  @media (max-width: 1024px) {
    margin-top: 60px;
    margin-bottom: 26px;
  }
`;
export const TitleWrap = styled.div`
  border-left: 25px solid ${props => props.theme.colors.main};
  width: 362px;
  padding: 39px 0 39px 30px;
  @media (max-width: 1160px) {
    border-left: 12px solid ${props => props.theme.colors.main};
    width: 100%;
    padding: 19px 0 19px 20px;
  }
`;
export const DescWrap = styled.div`
  width: 609px;
  @media (max-width: 1160px) {
    width: 100%;
	padding-left: 32px;
`;