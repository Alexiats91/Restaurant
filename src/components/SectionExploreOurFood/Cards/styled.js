import styled from 'styled-components';

export const CardsWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  column-gap: 30px;
  row-gap: 60px;
  flex-wrap: wrap;
  padding: 30px 0;
`;
export const ExploreFoodCardStyles = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 32%;
  min-width: 530px;
  height: 552px;
  border-radius: 25px;
  box-shadow: 0 4px 4px rgba(235, 241, 245, 0.5);
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
	height: auto;	
    min-width: 290px;
  }
`;
export const ImageWrap = styled.div`
  display: flex;
  width: 530px;
  height: 403px;
`;
export const Image = styled.img`
  object-fit: cover;
  width: 530px;
`;
export const DescWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background: #FFFFFF;
  width: 100%;
`;
export const TitleWrap = styled.div`
  max-width: 289px;
`;
export const Title = styled.h5`
  max-width: 289px;
  font-family: 'PoppinsMedium', sans-serif;
  font-size: 24px;
  line-height: 32px;
  text-transform: capitalize;
  color: #2E266F;
`;
export const Description = styled.p`
  max-width: 289px;
  font-family: 'PoppinsRegular', sans-serif;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
  color: #707070;
`;
export const Price = styled.div`
  font-family: 'PoppinsBold', sans-serif;
  font-size: 24px;
  line-height: 32px;
  text-transform: capitalize;
  color: ${props => props.theme.colors.main};
`;