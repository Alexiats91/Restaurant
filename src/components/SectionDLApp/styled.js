import styled from "styled-components";

export const Section = styled.section`
`;
export const BG = styled.div`
  background: #FFEDDE;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;
export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 80px;
  padding-bottom: 50px;
  @media(max-width: 1100px ){
    row-gap: 50px;
  }
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  position: relative;
  z-index: 1;
  @media(max-width: 1100px ){
    width: 100%;
    justify-content: center;
  }
`;
export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media(max-width: 1440px ){
    justify-content: flex-end;
  }
  @media(max-width: 1100px ){
    width: 100%;
    justify-content: center;
  }
`;
export const ImgWrap = styled.div`
  width: 455px;
  height: 955px;
  padding: 37px 25px;
  position: relative;
  @media(max-width: 1280px ){
    width: 355px;
    height: 755px;
    padding: 33px 16px;
  }
  @media(max-width: 640px ){
    width: 215px;
    height: 465px;
    padding: 20px 10px;
  }
`;
export const ImgPoints = styled.img`
  position: absolute;
  z-index: -4;
  right: 55px;
  @media(max-width: 1280px ){
    width: 375px;
    height: 633px;
    right: 150px;
    top: -15px;
  }
  @media(max-width: 640px ){
    width: 550px;
    min-width: 250px;
    height: 525px;
    top: 0;
    right: -77%;
  }
`;
export const ImgSalad = styled.img`
  position: absolute;
  z-index: -3;
  right: 300px;
  bottom: 0;
  transform: rotate(-15.33deg);
  @media(max-width: 1280px ){
    width: 522px;
    right: 150px;
    bottom: -95px;
  }
  @media(max-width: 640px ){
    width: 348px;
    right: 30%;
    bottom: 0;
  }
`;
export const ImgPhone = styled.img`
  z-index: -2;
  position: absolute;
  bottom: -145px;
  right: -42px;
  @media(max-width: 1280px ){
    width: 514px;
    bottom: -115px;
    right: -30px;
  }
  @media(max-width: 640px ){
    width: 317px;
    bottom: -70px;
    right: -24px;
  }
`;
export const ImgDisplay = styled.img`
  z-index: -1;
  position: absolute;
  @media(max-width: 1280px ){
    width: 319px;
  }
  @media(max-width: 640px ){
    width: 196px;
  }
`;