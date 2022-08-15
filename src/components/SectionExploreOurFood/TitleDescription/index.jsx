//Styles
import {TitleDescWrap, TitleWrap, DescWrap} from './styled';
import {TitleH2, Description} from '../../../GlobalStyle';

const TitleDescription = () => {
	return (
		<TitleDescWrap>
			<TitleWrap>
				<TitleH2>Explore Our Foods</TitleH2>
			</TitleWrap>
			<DescWrap>
				<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet.</Description>
			</DescWrap>
		</TitleDescWrap>
	)
};

export default TitleDescription;