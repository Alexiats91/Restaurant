import styled from 'styled-components';

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 100px;
  @media (max-width: 1680px) {
    column-gap: 63px;
  }
  @media (max-width: 1160px) {
    column-gap: 0;
    flex-wrap: wrap;
  }
  @media (max-width: 1024px) {
    padding-bottom: 20px;
    justify-content: center;
  }
  @media (max-width: 510px) {
	&:last-child{
      flex-direction: column-reverse;
	}
  }
`;
export const DescriptionWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 390px;
  @media (max-width: 1680px) {
    width: 271px;
  }
  @media (max-width: 1160px) {
    width: auto;
  }
  @media (max-width: 510px) {
    width: 100%;
    justify-content: center;
  }
`;
export const ArrowWrap = styled.div`
 position: relative;
 @media (max-width: 510px) {
 	display: none;
 }
`;
export const ArrowRight = styled.div`
  width: 267px;
  height: 2px;
  background-color: ${props => props.theme.colors.main};
  position: absolute;
  top: -18px;
  left: 245px;

  &:before {
    position: absolute;
    content: '';
    width: 11px;
    height: 2px;
    background-color: ${props => props.theme.colors.main};
    transform: rotate(45deg);
    border-radius: 2px;
    top: -3.5px;
    right: -1.6px;
  }

  &:after {
    position: absolute;
    content: '';
    width: 11px;
    height: 2px;
    background-color: ${props => props.theme.colors.main};
    transform: rotate(-45deg);
    border-radius: 2px;
    bottom: -3.5px;
    right: -1.6px;
  }
  @media (max-width: 1680px) {
    width: 144px;
    left: 215px;
  }
 @media (max-width: 1160px) {
   width: 81px;
   left: 195px;
 }
`;
export const ArrowLeft = styled.div`
  width: 182px;
  height: 2px;
  background-color: ${props => props.theme.colors.main};

  position: absolute;
  top: -18px;
  left: -188px;

  &:before {
    position: absolute;
    content: '';
    width: 11px;
    height: 2px;
    background-color: ${props => props.theme.colors.main};
    transform: rotate(-45deg);
    border-radius: 2px;
    top: -3.5px;
    left: -1.6px;
  }

  &:after {
    position: absolute;
    content: '';
    width: 11px;
    height: 2px;
    background-color: ${props => props.theme.colors.main};
    transform: rotate(45deg);
    border-radius: 2px;
    bottom: -3.5px;
    left: -1.6px;
  }
  @media (max-width: 1680px) {
    width: 109px;
    left: -118px;
  }
 @media (max-width: 1160px) {
   width: 73px;
   left: -80px;
 }
`;
export const Line = styled.span`
  display: inline-block;
  width: 84px;
  height: 3px;
  background-color: ${props => props.theme.colors.main};
  margin: ${({marginLeft}) => marginLeft ? "0 0 7px 13px" : "0 13px 7px 0"};
`;
export const TitleWrap = styled.div`
  width: 160px;
`;
export const DescWrap = styled.div`
  padding-top: 20px;
`;
export const TopDescWrap = styled.div`
  margin-left: 63px;
  width: 209px;
  @media (max-width: 1680px) {
    margin-left: 22px;
  }
  @media (max-width: 1160px) {
    margin-left: 0;
  }
`;
export const BottomDescWrap = styled.div`
  width: 209px;
`;