import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  .myStyles{
    padding-left: 0;
	padding-right: 0;
	.ant-picker-input {
      input{
		width: 95px;
        font-size: 16px;
        color: #2E266F;
        opacity: 0.6;
      }
      .ant-picker-suffix{
        display: none;
      }
	}
  }
`;
export const Label = styled.label.attrs({ htmlFor: "date"})`
	width: 95px;
    font-family: 'PoppinsRegular', sans-serif;
    font-size: 16px;
    line-height: 30px;
    text-transform: capitalize;
    color: #2E266F;
	position: relative;
	
	&:after{
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
