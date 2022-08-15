import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export const FooterStyles = styled.footer`
  position: relative;
  overflow: hidden;
  &:after{
	content: '';
	position: absolute;
	background: url(${({img1}) => img1} ) no-repeat;
    background-size: 100%;
	width: 750px;
	height: 963px;
	bottom: -150px;
	left: -88px;
	z-index: -1;
  }
  &:before{
    content: '';
    position: absolute;
    background: url(${({img2}) => img2} )no-repeat;
	background-size: 100%;
    width: 745px;
    height: 836px;
    bottom: 0;
    left: 0;
	z-index: -1;
  }

  @media(max-width: 1800px){
    &:after{
      left: -300px;
    }
  }
  @media(max-width: 1440px){
    &:after{
	  width: 553px;
      height: 710px;
      bottom: -100px;
      left: -220px;
    }
    &:before{
      width: 571px;
      height: 534px;
      bottom: 0;
      left: 0;
    }
  }
  @media(max-width: 800px){
    &:after{
      width: 360px;
      height: 478px;
      bottom: 80px;
      left: -177px;
    }
  }
  @media(max-width: 553px){
    &:after{
	  display: none;
    }
  }
`;
export const ContentWrap = styled( Flex )`
  flex-direction: column;
  padding-top: 272px;
  padding-bottom: 44px;
  
  @media(max-width: 1440px){
	padding-top: 122px;
  }
`;