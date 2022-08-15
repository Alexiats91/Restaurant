import horizontalPoints from "../img/horizontalPointsBG.png";
import rightTopCornerPoints from "../img/rightTopCornerPointsBG.png";
import leftImg from "../img/salad.png";
import rightImg from "../img/salad2.png";

import styled from "styled-components";

export const Section = styled.section`
  background: #FFEDDE;
  overflow: hidden;
`;
export const FormWrap = styled.div`
  background: #FFEDDE;
  padding: 265px 0;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background: url("${leftImg}") no-repeat;
    background-size: 100%;
    width: 855px;
    height: 1125px;
    left: -295px;
    bottom: 0;
    z-index: 1;
  }
  &:after {
    content: '';
    position: absolute;
    background: url("${rightImg}") no-repeat;
    background-size: 100%;
    width: 610px;
    height: 620px;
    right: -230px;
    top: 200px;
    z-index: 1;
  }
  @media (max-width: 1440px) {
    padding: 199px 0 126px;
    &:before {
      width: 600px;
      height: 790px;
      left: -308px;
    }
    &:after {
      width: 371px;
      height: 377px;
      right: -165px;
    }
  }
  @media (max-width: 1024px) {
    padding: 199px 0 126px;
    display: flex;
    justify-content: center;
    &:before {
      z-index: 0;
    }
    &:after {
      z-index: 0;
    }
  }
  @media (max-width: 554px) {
    padding: 85px 0;
    justify-content: flex-start;
    &:before {
      width: 450px;
      height: 590px;
      left: -310px;
      z-index: 2;
    }
    &:after {
      width: 371px;
      height: 377px;
      right: -235px;
      top: 100px;
      z-index: 2;
    }
  }
  @media (max-width: 500px) {
    &:after {
      z-index: 0;
    }
  }
  @media (max-width: 425px) {
    justify-content: center;
    &:before {
      z-index: 0;
    }
  }
`;
export const Form = styled.form`display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 275px;
  padding-left: 140px;
  width: 1230px;
  height: 560px;
  background: #FFFFFF;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background: url("${horizontalPoints}") no-repeat;
    background-size: 100%;
    width: 316px;
    height: 50px;
    left: 20px;
    bottom: -70px;
  }
  &:after {
    content: '';
    position: absolute;
    background: url("${rightTopCornerPoints}") no-repeat;
    background-size: 100%;
    width: 316px;
    height: 392px;
    right: -70px;
    top: -70px;
  }
  @media (max-width: 1680px) {
    margin-left: 180px;
  }
  @media (max-width: 1440px) {
    width: 971px;
    height: 417px;
    margin-left: 0;
    padding-left: 239px;
  }
  @media (max-width: 1024px) {
    width: 458px;
    height: 333px;
    padding-left: 0;
    &:before {
      width: 267px;
      height: 42px;
      left: 18px;
      bottom: -60px;
    }
    &:after {
      width: 267px;
      height: 331px;
      right: -60px;
      top: -60px;
    }
  }
  @media (max-width: 554px) {
    padding-left: 115px;
  }
  @media (max-width: 500px) {
    z-index: 1;
  }
  @media (max-width: 425px) {
    width: 95%;
    padding: 0;
  }
`;
export const TitleWrap = styled.div`
  margin-top: 100px;
  padding-top: 45px;
  position: relative;
  &:before {
    position: absolute;
    content: '';
    width: 230px;
    height: 15px;
    background: ${props => props.theme.colors.main};
    top: 0;
    right: 42px;
  }
  @media (max-width: 1440px) {
    margin-top: 41px;
  }
  @media (max-width: 1024px) {
    margin-top: 19px;
    padding-top: 20px;
    &:before {
      width: 150px;
      height: 10px;
      right: 30px;
    }
  }
`;
export const InputGroupWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 60px 0;
  position: relative;
  z-index: 15;
  @media (max-width: 1024px) {
    margin: 40px 0 70px;
  }
`;
export const Input = styled.input.attrs( {name: "search", type: "search", placeholder: "search restrurent"} )`
      padding-right: 156px;
      padding-left: 36px;
      width: 544px;
      height: 90px;
      background: #FFFFFF;
      border: none;
      outline: none;
      box-shadow: 2px 2px 30px 2px #FFF5EC;

      text-transform: capitalize;
      font-size: 16px;
      line-height: 90px;
      color: rgba(46 38 111/0.6);

      &::placeholder {
        text-transform: capitalize;
        font-size: 16px;
        line-height: 90px;
        color: #2E266F;
        opacity: 0.6;
      }

      @media (max-width: 1024px) {
        padding-right: 92px;
        padding-left: 11px;
        width: 273px;
        height: 51px;
        &::placeholder {
          font-size: 14px;
        }
      }
      @media (max-width: 425px) {
        width: 100%;
      }
	`;
export const Button = styled.button.attrs( {type: "submit"} )`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 30px;
  color: #FFFFFF;
  width: 128px;
  height: 62px;
  background: ${props => props.theme.colors.main};
  border: none;
  position: absolute;
  margin-right: 14px;

  &:active {
    box-shadow: inset 0 0 7px 0 rgba(135, 135, 135, 1);
    text-shadow: 0 0 10px rgba(135, 135, 135, 1);
  }

  @media (max-width: 1024px) {
    width: 80px;
    height: 40px;
    margin-right: 6px;
    font-size: 24px;
  }
`;
export const BookingValuesWrap = styled.div`
  display: flex;
  position: relative;
  z-index: 15;
  @media(max-width: 325px){
	flex-wrap: wrap;
  }
`;