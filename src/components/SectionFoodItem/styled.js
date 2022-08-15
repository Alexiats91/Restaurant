import styled from 'styled-components';
import rightBottomCorner from '../img/rightBottomCornerPointsBG.png';
import horizontalPoints from '../img/horizontalPointsBG.png';

export const FoodItemStyles = styled.section`
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 122px 0 211px 0;
  @media(max-width: 1280px){
    overflow: hidden;
  }
  @media (max-width: 1024px) {
    justify-content: center;
    padding-top: 32px;
    padding-bottom: 33px;
  }
`;
export const CardsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;

  &:before{
    content: '';
    position: absolute;
    background: url("${horizontalPoints}") no-repeat;
    background-size: 100%;
    width: 316px;
    height: 50px;
    left: 20px;
    top: -70px;
    z-index: -1;
  }
  &:after{
    content: '';
    position: absolute;
    background: url("${rightBottomCorner}") no-repeat;
    background-size: 100%;
    width: 316px;
    height: 392px;
    right: -70px;
    bottom: -70px;
    z-index: -2;
  }
  @media(max-width: 1024px){
    &:before{
      left: 0;
      top: 0;
    }
    &:after{
      right: 0;
      bottom: 0;
    }
  }
`;
export const SeeMoreWrap = styled.div`
  margin-left: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 1440px){
    margin-left: 88px;
  }
  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;
export const LinkArrow = styled.a`
  margin: 20px 0;
  @media (max-width: 1024px) {
    margin-top: 30px;
  }
`;
export const LinkText = styled.a`
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
  color: ${props => props.theme.colors.main};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.main};
  }
`;
export const SeeMoreButton = styled.button`
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.main};
  border-radius: 50%;
  border: none;
  position: relative;
  &:before {
    position: absolute;
    content: '';
    background: ${props => props.theme.colors.main};
    width: 72px;
    height: 3px;
    right: 50%;
    top: 50%;
  }
`;