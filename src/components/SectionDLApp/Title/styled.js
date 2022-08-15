import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  @media(max-width: 440px ){
    align-items: center;
  }
`;
export const TitleWrap = styled.div`
  padding-left: 30px;
  width: 495px;
  border-left: 25px solid ${props => props.theme.colors.main};
  @media(max-width: 1160px ){
    padding-left: 20px;
    width: 100%;
    border-left: 12px solid ${props => props.theme.colors.main};
  }
  @media(max-width: 640px ){
    width: 350px;
  }
  @media(max-width: 450px ){
    width: 100%;
  }
`;
export const DescriptionWrap = styled.div`
  width: 504px;
  padding-left: 55px;
  @media(max-width: 1160px ){
    width: 100%;
    padding-left: 32px;
  }
`;
export const ButtonsWrap = styled.div`
  display: flex;
  column-gap: 20px;
  padding-left: 55px;
  @media(max-width: 1160px ){
    padding-left: 32px;
  }
  @media(max-width: 440px ){
    padding-left: 0;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 10px;
  }
`;