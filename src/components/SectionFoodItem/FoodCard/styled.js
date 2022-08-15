import styled from "styled-components";

export const FoodCardStyles = styled.div`  
  position: relative;
  overflow: hidden;
  width: 639px;
  height: 636px;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
  &:last-child{
    margin-right: 0;
  }
  
  @media(max-width: 1536px){
    width: 494px;
    height: 493px;
  }
  @media(max-width: 1024px){
	margin: 15px 15px;
	&:last-child{
      margin: 15px;
	}
  }
  @media(max-width: 540px){
    width: 95%;
  }
`;
export const Img = styled.img`
  position: absolute;
  object-fit: cover;
  width: 639px;
  border-radius: 20px;
  z-index: -1;
  @media (max-width: 1536px) {
    width: 494px;
  }
  @media (max-width: 540px) {
    width: 100%;
	height: auto;
  }
`;
export const ContentWrap = styled.div`
  background: ${props => props.theme.colors.mainRGBA};
  border-radius: 0 0 20px 20px;
  width: 100%;
  padding: 40px 0 80px 60px;
  display: flex;
  flex-direction: column;
  @media(max-width: 1536px){
    padding: 20px 0 20px 30px;
  }
`;
export const TitleWrap = styled.div`
`;
export const Title = styled.h2`
  text-transform: capitalize;
  font-family: 'PoppinsBold', sans-serif;
  font-size: 24px;
  line-height: 24px;
  color: #FFFFFF;
  margin: 0;
`;
export const DescWrap = styled.div`
  padding: 20px 0;
  width: 386px;
  @media(max-width: 1536px){
    padding: 30px 0;
    width: 289px;
  }
`;
export const Desc = styled.p`
  text-transform: capitalize;
  font-size: 14px;
  color: #FFFFFF;
  margin: 0;
  padding-right: 5px;
`;
export const LocWrap = styled.div`
`;
export const Loc = styled.span`
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 10px;
  color: #FFFFFF;
`;
export const LinkWrap = styled.div`
  position: absolute;
  bottom: 37px;
  right: 0;
  width: 208px;
  height: 58px;
  background: #FFFFFF;
  border-radius: 100px 0 0 100px;
  font-size: 16px;
  line-height: 24px;
  margin-left: 0;
  align-self: end;
  @media(max-width: 1536px) {
    bottom: 28px;
    width: 160px;
    height: 44px;
  }
`;
export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 58px;
  border-radius: 100px 0 0 100px;
  text-transform: capitalize;
  text-decoration: none;
  color: ${props => props.theme.colors.main};
  &:hover,
  &:active{
    color: ${props => props.theme.colors.main};
    text-decoration: underline;
  }
  @media(max-width: 1536px){
    width: 160px;
    height: 44px;
  }
`;