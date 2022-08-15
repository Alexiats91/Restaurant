import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SocialWrap = styled( Flex )`
  column-gap: 95px;
  align-self: flex-end;
  flex-wrap: wrap;
  @media(max-width: 1440px){
	column-gap: 30px;
  }
`;
export const Social = styled( Flex )`
  column-gap: 20px;
`;
export const Lic = styled( Flex )`
  font-family: 'PoppinsRegular', sans-serif;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;
  color: #000000;
`;


