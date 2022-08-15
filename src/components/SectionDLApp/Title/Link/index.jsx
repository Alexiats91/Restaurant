//Styles
import {LinkStyle, IconWrap, TextWrap, TopText, BottomText} from './styled';

const Link = ({link, icon, topText, bottomText}) => {
	return (
			<LinkStyle href={link}>
				<IconWrap>
					{icon}
				</IconWrap>
				<TextWrap>
					<TopText>{topText}</TopText>
					<BottomText>{bottomText}</BottomText>
				</TextWrap>
			</LinkStyle>
	)
};

export default Link;