import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FormContentWrap = styled( Flex )`
  flex-direction: column;
  padding-bottom: 185px;

  @media (max-width: 1440px) {
    padding-bottom: 45px;
  }
  @media (max-width: 550px) {
	width: 100%;
  }
`;
export const TitleWrap = styled.div`
  width: 534px;
  @media (max-width: 800px) {
    width: 360px;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const DescriptionWrap = styled.div`
  padding-top: 30px;
  width: 533px;
  @media (max-width: 800px) {
    width: 415px;
  }
  @media (max-width: 550px) {
  width: 100%;
}
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 60px 0;
  @media (max-width: 1440px) {
    padding: 30px 0;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
export const Input = styled.input.attrs({
	name: "email",
	type: "email",
	placeholder: "E-mail",
	pattern: "[a-z0-9]+@[a-z]+\\.[a-z]{2,3}",
	required: " ",
})`
  width: 544px;
  height: 90px;
  background: #FFFFFF;
  box-shadow: 2px 2px 30px 2px #FFF5EC;
  border-radius: 100px;
  outline: none;
  border: none;
  padding-left: 60px;
  padding-right: 96px;
  @media (max-width: 800px) {
    width: 379px;
    height: 60px;
    padding-left: 33px;
    padding-right: 56px;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  position: absolute;
  margin-right: 20px;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: ${props => props.theme.colors.main};
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }
`;
export const LinksList = styled( Flex )`
  flex-wrap: wrap;
  column-gap: 30px;

  & a {
    text-decoration: none;
    font-family: 'PoppinsRegular', sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
    color: #707070;

    &:hover {
      color: #707070;
      text-decoration: underline;
    }
  }

  @media (max-width: 800px) {
    column-gap: 25px;
    & a {
      font-size: 14px;
    }
  }
`;


