import styled from "styled-components";

export const LinkStyle = styled.a.attrs({target: "_blank", rel: "noreferrer"})`
  display: flex;
  align-items: center;
  border: none;
  width: 178px;
  height: 49px;
  background: #000000;
  border-radius: 10px;
`;
export const IconWrap = styled.div`
  margin: 0 16px 0 20px;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-transform: capitalize;
  color: #FFFFFF;
`;
export const TopText = styled.span`
  font-family: 'PoppinsRegular',  sans-serif;
  font-size: 12px;
  line-height: 24px;
`;
export const BottomText = styled.span`
  font-family: 'PoppinsMedium',  sans-serif;
  font-size: 14px;
  line-height: 24px;
`;