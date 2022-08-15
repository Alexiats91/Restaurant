import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  .ant-select {
    width: 70px !important;
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    padding: 0;
    font-size: 16px;
    color: #2E266F;
    opacity: 0.6;
  }
`;
export const Label = styled.label.attrs( {htmlFor: "amount"} )`
  width: 70px;
  font-family: 'PoppinsRegular', sans-serif;
  font-size: 16px;
  line-height: 30px;
  text-transform: capitalize;
  color: #2E266F;
  position: relative;

  &:after {
    display: inline-block;
    margin-left: 4px;
    vertical-align: -4px;
    content: "";
    border-top: 7px solid ${props => props.theme.colors.main};
    border-right: 5px solid transparent;
    border-bottom: 0;
    border-left: 5px solid transparent;
  }
`;