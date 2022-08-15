import styled from 'styled-components';
import points from '../img/points.png'

export const Sectoin = styled.section`
`;
export const Backgroud = styled.div`
  background: url(${points}) center/contain repeat;
  padding-top: 105px;
  padding-bottom: 99px;
  @media (max-width: 1680px) {
    padding-top: 35px;
    padding-bottom: 26px;
  }
  @media (max-width: 1160px) {
    padding-top: 28px;
    padding-bottom: 0;
    background: none;
  }
`;
export const Content = styled.div`
  display: flex;
  column-gap: 100px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1680px) {
    column-gap: 63px;
    justify-content: space-evenly;
  }
  @media (max-width: 1160px) {
    column-gap: 10px;
  }
`;