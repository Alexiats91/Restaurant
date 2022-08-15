import styled from 'styled-components';

export const SliderStyles = styled.section`
  position: relative;

  &:after {
    position: absolute;
    z-index: -2;
    top: 0;
    right: 0;
    width: 27%;
    height: 100%;
    background-color: ${props => props.theme.colors.main};
    content: '';
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;
export const ColCarousel = styled.div`
  flex: 1 0;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  @media (max-width: 1440px) {
    flex: none;
    width: 42%;
  }
  @media (max-width: 1024px) {
    width: 45%;
  }
  @media (max-width: 554px) {
    width: 100%;
  }
`;
export const ColSearch = styled.div`
  flex: 1 0;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  @media (max-width: 1440px) {
    width: 58%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const TitleWrap = styled.div`
`;
export const Title = styled.h2`
  font-family: 'PoppinsBlack', sans-serif;
  font-size: 200px;
  line-height: 140px;
  text-transform: capitalize;
  color: #2E266F;
  opacity: 0.05;
  margin-top: 150px;
  margin-left: -5px;
  @media(max-width: 1440px){
    font-size: 150px;
    line-height: 100px;
    margin-top: 63px;
  }
  @media(max-width: 1024px){
    font-size: 100px;
    line-height: 70px;
    margin-top: 19px;
  }
`;
export const SubTitle = styled.h3`
  font-family: 'PoppinsBold', sans-serif;
  font-size: 72px;
  line-height: 90px;
  text-transform: capitalize;
  color: #2E266F;
  position: relative;
  z-index: 2;
  @media(max-width: 1440px){
    font-size: 60px;
    line-height: 70px;
  }
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 40px;
    width: 76%;
  }
`;

export const InputWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 179px;
  position: relative;
  
  @media(max-width: 1440px){
    margin-top: 35px;
    margin-bottom: 99px;
  }
  @media(max-width: 1024px){
    margin-top: 20px;
    margin-bottom: 50px;
    z-index: 2;
  }
`;
export const Input = styled.input.attrs({ type: "search", placeholder: "search restaurant, food"})`
  display: flex;
  align-items: center;
  padding-right: 240px;
  padding-left: 36px;
  width: 670px;
  height: 90px;
  background: #FFFFFF;
  border: none;
  outline: none;
  &::placeholder{
    text-transform: capitalize;
    font-size: 18px;
    line-height: 90px;
    color: #2E266F;
    opacity: 0.6;
  }
  
  @media(max-width: 1440px){
    padding-right: 164px;
    width: 462px;
  }
  @media(max-width: 1024px){
    padding-right: 110px;
    width: 100%;
  }
`;
export const InputButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 30px;
  color: #FFFFFF;
  width: 200px;
  height: 72px;
  background: ${props => props.theme.colors.main};
  border: none;
  border-radius: 60px 0 0 0;
  position: absolute;
  left: 461px;
  top: 9px;
  &:active {
    box-shadow: inset 0 0 7px 0 rgba(135, 135, 135, 1);
    text-shadow: 0 0 10px rgba(135, 135, 135, 1);
  }
  
  @media(max-width: 1440px){
    width: 146px;
    left: 307px;
  }
  @media(max-width: 1024px){
    width: 29%;
    left: auto;
    right: 9px;
  }
  @media(max-width: 425px){
    width: 25%;
  }
`;

export const LocWrap = styled.div`
  margin-left: -126px;
  width: 280px;
  height: 65px;
  background: ${props => props.theme.colors.main};
  border-radius: 0 100px 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(min-width: 1440px) and (max-width: 1920px) {
    margin-left: calc(100% - 50vw);
  }
  @media(max-width: 1440px){
    margin-left: -5px;
  }
  @media (min-width: 1150px) and (max-width: 1199px) {
    margin-left: calc(100% - 57vw);
  }
  @media(max-width: 1024px){
    margin-left: -16px;
  }
  @media(max-width: 425px){
    margin-bottom: 15px;
  }
`;
export const Loc = styled.span`
  font-family: 'PoppinsMedium', sans-serif;
  font-size: 30px;
  line-height: 90px;
  text-transform: capitalize;
  color: #FFFFFF;
  padding-left: 20px;
  @media(max-width: 1440px){
    padding-left: 33px;
  }
`;
