import styled, {createGlobalStyle} from "styled-components";
import 'antd/dist/antd.min.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    max-width: 1920px;
    margin: 0 auto;
    background-color: #FFF5EC;
    font-family: 'PoppinsRegular', sans-serif;
  }

  .myDropDownStyles .ant-picker-panel-container {
    border-radius: 15px;
  }
  .myDropDownStyles .ant-picker-header,
  .myDropDownStyles .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    background: ${props => props.theme.colors.main};
  }
  .myDropDownStyles .ant-picker-header-view button:hover {
    color: #fff;
  }
  .myDropDownStyles .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
    border: 1px solid ${props => props.theme.colors.main};
  }
  .myDropDownStyles .ant-picker-footer,
  .myDropDownStyles .ant-picker-today-btn {
    color: ${props => props.theme.colors.main};
  }
  .ant-btn-primary {
    border-color: ${props => props.theme.colors.main};
    background: ${props => props.theme.colors.main};
  }
  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    border-color: ${props => props.theme.colors.mainSub};
    background: ${props => props.theme.colors.mainSub};
  }
  .ant-picker-time-panel-column > li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner,
  .myDropDownSelectStyles .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background: ${props => props.theme.colors.mainRGBA};
  }
  .ant-picker-panel-container {
    padding-top: 10px;
    border-radius: 15px;
  }
  .ant-select-dropdown {
    width: 90px !important;
    padding: 10px 0;
    border-radius: 10px;
  }
`

export const MyContainer = styled.div`
  max-width: 1662px;
  padding: 0 5px;
  margin: 0 auto;

  @media (max-width: 1199px) {
    max-width: 1142px;
  }
  @media (max-width: 554px) {
    max-width: 525px;
  }
  @media (max-width: 425px) {
    max-width: 415px;
  }
`;
export const DF = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleH1 = styled.h1`
  font-family: 'PoppinsBold', sans-serif;
  font-size: 60px;
  line-height: 62px;
  text-transform: capitalize;
  color: #2E266F;
`;
export const TitleH2 = styled.h2`
  font-family: 'PoppinsMedium', sans-serif;
  font-size: 48px;
  line-height: 62px;
  text-transform: capitalize;
  color: #2E266F;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 48px;
  }
`;
export const TitleH3 = styled.h3`
  font-family: 'PoppinsMedium', sans-serif;
  font-size: 36px;
  line-height: 48px;
  text-transform: ${({capitalize}) => capitalize ? "capitalize" : "lowercase"};
  text-align: center;
  color: #2E266F;
  margin-bottom: 0;
  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
export const TitleH4 = styled.h4`
  font-family: 'PoppinsMedium', sans-serif;
  font-size: 24px;
  line-height: 32px;
  text-transform: capitalize;
  color: #2E266F;
  margin-bottom: 0;
`;
export const TitleH5 = styled.h5`
  font-family: 'PoppinsMedium', sans-serif;
  font-size: 24px;
  line-height: 32px;
  text-transform: capitalize;
  color: #2E266F;
  margin-bottom: 20px;
`;
export const Description = styled.p`
  text-align: ${({textAlignCenter}) => textAlignCenter ? "center" : ""};
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
  color: #707070;
  margin: 0;
`;

